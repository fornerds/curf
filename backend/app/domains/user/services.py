from sqlalchemy.orm import Session
from . import models, schemas
from app.core.security import get_password_hash, verify_password
from typing import List, Optional, Type
from uuid import UUID
from .models import User


def get_user(db: Session, user_id: UUID) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.user_id == user_id).first()

def get_user_by_email(db: Session, email: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100) -> list[Type[User]]:
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    db_user = models.User(
        email=user.email,
        password=get_password_hash(user.password),
        nickname=user.nickname,
        phone_number=user.phone_number,
        birthdate=user.birthdate,
        gender=user.gender,
        is_corporate=user.is_corporate
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user: models.User, user_in: schemas.UserUpdate) -> models.User:
    update_data = user_in.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def delete_user(db: Session, user_id: UUID) -> models.User:
    user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if user:
        user.status = 'WITHDRAWN'
        db.add(user)
        db.commit()
        db.refresh(user)
    return user

def authenticate_user(db: Session, email: str, password: str) -> Optional[models.User]:
    user = get_user_by_email(db, email)
    if not user:
        return None
    if not verify_password(password, user.password):
        return None
    return user

def create_corporate_user(db: Session, user: models.User, corporate_info: schemas.CorporateUserCreate) -> models.CorporateUser:
    db_corporate_user = models.CorporateUser(**corporate_info.dict(), user_id=user.user_id)
    db.add(db_corporate_user)
    db.commit()
    db.refresh(db_corporate_user)
    return db_corporate_user

def is_active(user: schemas.User) -> bool:
    return user.status == 'ACTIVE'

def is_superuser(user: schemas.User) -> bool:
    return user.role == 'ADMIN'