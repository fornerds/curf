import pytest
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from app.main import app
from app.domains.curator import models, schemas
from app.core.deps import get_db, get_current_active_superuser

# 테스트 데이터
test_curator = {
    "name": "테스트 큐레이터",
    "profile_image": "https://example.com/image.jpg",
    "introduction": "테스트 소개",
    "category": "art"
}

@pytest.fixture
def db_curator(db: Session):
    curator = models.Curator(**test_curator)
    db.add(curator)
    db.commit()
    db.refresh(curator)
    yield curator
    db.delete(curator)
    db.commit()

def test_create_curator(client: TestClient, db: Session, admin_token_headers):
    response = client.post("/admin/curators", json=test_curator, headers=admin_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == test_curator["name"]
    assert data["profile_image"] == test_curator["profile_image"]
    assert data["introduction"] == test_curator["introduction"]
    assert data["category"] == test_curator["category"]

def test_read_curators(client: TestClient, db: Session, db_curator, admin_token_headers):
    response = client.get("/admin/curators", headers=admin_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert any(curator["curator_id"] == db_curator.curator_id for curator in data)

def test_read_curator(client: TestClient, db: Session, db_curator, admin_token_headers):
    response = client.get(f"/admin/curators/{db_curator.curator_id}", headers=admin_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["curator_id"] == db_curator.curator_id
    assert data["name"] == db_curator.name

def test_update_curator(client: TestClient, db: Session, db_curator, admin_token_headers):
    update_data = {"name": "Updated Curator"}
    response = client.put(f"/admin/curators/{db_curator.curator_id}", json=update_data, headers=admin_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == update_data["name"]

def test_delete_curator(client: TestClient, db: Session, db_curator, admin_token_headers):
    response = client.delete(f"/admin/curators/{db_curator.curator_id}", headers=admin_token_headers)
    assert response.status_code == 204
    curator = db.query(models.Curator).filter(models.Curator.curator_id == db_curator.curator_id).first()
    assert curator is None

def test_create_curator_unauthorized(client: TestClient):
    response = client.post("/admin/curators", json=test_curator)
    assert response.status_code == 401

def test_read_curators_unauthorized(client: TestClient):
    response = client.get("/admin/curators")
    assert response.status_code == 401