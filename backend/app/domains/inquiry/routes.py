from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from . import schemas, services

router = APIRouter()

@router.post("/inquiries", response_model=schemas.InquiryResponse)
def create_inquiry(
    inquiry: schemas.InquiryCreate,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    db_inquiry = services.create_inquiry(db, inquiry, current_user.user_id)
    return {
        "inquiry_id": str(db_inquiry.inquiry_id),
        "status": "RECEIVED",
        "message": "문의가 접수되었습니다. 답변은 입력하신 이메일로 발송됩니다."
    }