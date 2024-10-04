from sqlalchemy.orm import Session
from . import models, schemas
from typing import List, Optional

def create_curator(db: Session, curator: schemas.CuratorCreate):
    db_curator = models.Curator(**curator.dict())
    db.add(db_curator)
    db.commit()
    db.refresh(db_curator)
    return db_curator

def get_curators(db: Session, skip: int = 0, limit: int = 100) -> List[models.Curator]:
    return db.query(models.Curator).offset(skip).limit(limit).all()

def get_curator(db: Session, curator_id: int):
    return db.query(models.Curator).filter(models.Curator.curator_id == curator_id).first()

def update_curator(db: Session, curator_id: int, curator: schemas.CuratorUpdate):
    db_curator = get_curator(db, curator_id)
    if db_curator:
        update_data = curator.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_curator, key, value)
        db.commit()
        db.refresh(db_curator)
    return db_curator

def delete_curator(db: Session, curator_id: int):
    db_curator = get_curator(db, curator_id)
    if db_curator:
        db.delete(db_curator)
        db.commit()
        return True
    return False