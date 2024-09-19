from sqlalchemy.orm import Session
from . import models, schemas
from uuid import UUID

def create_inquiry(db: Session, inquiry: schemas.InquiryCreate, user_id: UUID) -> models.Inquiry:
    db_inquiry = models.Inquiry(
        user_id=user_id,
        title=inquiry.title,
        email=inquiry.email,
        contact=inquiry.contact,
        content=inquiry.content,
        attachments=inquiry.attachments
    )
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry