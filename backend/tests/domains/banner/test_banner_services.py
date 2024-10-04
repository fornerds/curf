import pytest
from datetime import date, timedelta
from sqlalchemy.orm import Session
from app.domains.banner import services, schemas, models
from app.utils.s3_client import upload_file_to_s3, delete_file_from_s3
import io
from unittest.mock import MagicMock

# Mock S3 functions
def mock_upload_file_to_s3(*args, **kwargs):
    return True

def mock_delete_file_from_s3(*args, **kwargs):
    return True

@pytest.fixture
def mock_s3(monkeypatch):
    monkeypatch.setattr("app.domains.banner.services.upload_file_to_s3", mock_upload_file_to_s3)
    monkeypatch.setattr("app.domains.banner.services.delete_file_from_s3", mock_delete_file_from_s3)

@pytest.fixture
def mock_image_file():
    mock_file = MagicMock()
    mock_file.filename = "test_image.jpg"
    mock_file.file = io.BytesIO(b"fake image content")
    return mock_file

@pytest.fixture
def sample_banner():
    return schemas.BannerCreate(
        image_url="https://example.com/image.jpg",
        target_url="https://example.com",
        start_date=date.today(),
        end_date=date.today() + timedelta(days=7),
        is_public=True
    )

def test_create_banner(db: Session, sample_banner, mock_s3, mock_image_file):
    banner = services.create_banner(db, sample_banner, mock_image_file)
    assert banner is not None
    assert banner.image_url.startswith("https://culf-bucket.s3.amazonaws.com/banners/")
    assert banner.target_url == sample_banner.target_url
    assert banner.start_date == sample_banner.start_date
    assert banner.end_date == sample_banner.end_date
    assert banner.is_public == sample_banner.is_public

def test_get_banner(db: Session, sample_banner, mock_s3):
    created_banner = services.create_banner(db, sample_banner, None)
    retrieved_banner = services.get_banner(db, created_banner.banner_id)
    assert retrieved_banner is not None
    assert retrieved_banner.banner_id == created_banner.banner_id

def test_update_banner(db: Session, sample_banner, mock_s3):
    created_banner = services.create_banner(db, sample_banner, None)
    update_data = schemas.BannerUpdate(target_url="https://updated-example.com")
    updated_banner = services.update_banner(db, created_banner.banner_id, update_data)
    assert updated_banner is not None
    assert updated_banner.target_url == "https://updated-example.com"

def test_delete_banner(db: Session, sample_banner, mock_s3):
    created_banner = services.create_banner(db, sample_banner, None)
    success = services.delete_banner(db, created_banner.banner_id)
    assert success is True
    deleted_banner = services.get_banner(db, created_banner.banner_id)
    assert deleted_banner is None

def test_get_active_banners(db: Session, sample_banner, mock_s3):
    services.create_banner(db, sample_banner, None)
    active_banners = services.get_active_banners(db)
    assert len(active_banners) > 0
    assert all(banner.is_public for banner in active_banners)
    assert all(banner.start_date <= date.today() <= banner.end_date for banner in active_banners)