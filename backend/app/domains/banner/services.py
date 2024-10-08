from sqlalchemy.orm import Session
from . import models, schemas
from app.utils.s3_client import upload_file_to_s3, delete_file_from_s3
from app.core.config import settings
import uuid
from datetime import date

def create_banner(db: Session, banner: schemas.BannerCreate, image_file=None):
    if image_file:
        file_extension = image_file.filename.split('.')[-1]
        object_name = f"banners/{uuid.uuid4()}.{file_extension}"

        if upload_file_to_s3(image_file.file, settings.S3_BUCKET_NAME, object_name):
            image_url = f"https://{settings.S3_BUCKET_NAME}.s3.amazonaws.com/{object_name}"
    else:
        image_url = banner.image_url

    banner_data = banner.dict()
    banner_data['image_url'] = image_url
    db_banner = models.Banner(**banner_data)
    db.add(db_banner)
    db.commit()
    db.refresh(db_banner)
    return db_banner

def delete_banner(db: Session, banner_id: int):
    banner = db.query(models.Banner).filter(models.Banner.banner_id == banner_id).first()
    if banner:
        object_name = banner.image_url.split('/')[-1]
        if delete_file_from_s3(settings.S3_BUCKET_NAME, f"banners/{object_name}"):
            db.delete(banner)
            db.commit()
            return True
    return False

def get_banners(db: Session, skip: int = 0, limit: int = 100, is_public: bool = None):
    query = db.query(models.Banner)
    if is_public is not None:
        query = query.filter(models.Banner.is_public == is_public)
    return query.offset(skip).limit(limit).all()

def get_banner(db: Session, banner_id: int):
    return db.query(models.Banner).filter(models.Banner.banner_id == banner_id).first()

def update_banner(db: Session, banner_id: int, banner_update: schemas.BannerUpdate):
    db_banner = get_banner(db, banner_id)
    if db_banner:
        update_data = banner_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_banner, key, value)
        db.add(db_banner)
        db.commit()
        db.refresh(db_banner)
    return db_banner

def get_active_banners(db: Session):
    today = date.today()
    return db.query(models.Banner).filter(
        models.Banner.start_date <= today,
        models.Banner.end_date >= today,
        models.Banner.is_public == True
    ).all()