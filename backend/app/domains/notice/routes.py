from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from app.domains.notice import schemas as notice_schemas
from app.domains.notice import services as notice_services

router = APIRouter()

@router.get("/notices", response_model=notice_schemas.NoticeList)
def read_notices(
        skip: int = 0,
        limit: int = 100,
        db: Session = Depends(get_db),
        current_user: user_schemas.User = Depends(get_current_active_user)
):
    notices = notice_services.get_notices(db, skip, limit)
    return {"notices": notices, "total_count": len(notices)}

@router.get("/notices/{notice_id}", response_model=notice_schemas.Notice)
def read_notice(
        notice_id: int,
        db: Session = Depends(get_db),
        current_user: user_schemas.User = Depends(get_current_active_user)
):
    notice = notice_services.get_notice(db, notice_id)
    if notice is None:
        raise HTTPException(status_code=404, detail="Notice not found")

    # Mark the notice as read for the current user
    notice_services.mark_notice_as_read(db, current_user.user_id, notice_id)

    return notice