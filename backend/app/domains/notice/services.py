from sqlalchemy.orm import Session
from . import models, schemas
from typing import List
from uuid import UUID

def get_notices(db: Session, skip: int = 0, limit: int = 100) -> List[models.Notice]:
    return db.query(models.Notice).offset(skip).limit(limit).all()

def get_notice(db: Session, notice_id: int) -> models.Notice:
    return db.query(models.Notice).filter(models.Notice.notice_id == notice_id).first()

def mark_notice_as_read(db: Session, user_id: UUID, notice_id: int) -> models.UserNoticeRead:
    db_read = models.UserNoticeRead(user_id=user_id, notice_id=notice_id, is_read=True)
    db.add(db_read)
    db.commit()
    db.refresh(db_read)
    return db_read