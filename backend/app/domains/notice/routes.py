from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from . import schemas, services
from typing import List

router = APIRouter()


@router.get("/notices", response_model=schemas.NoticeList)
def read_notices(
        skip: int = 0,
        limit: int = 100,
        db: Session = Depends(get_db),
        current_user: user_schemas.User = Depends(get_current_active_user)
):
    notices = services.get_notices(db, skip, limit)
    return {"notices": notices, "total_count": len(notices)}


@router.get("/notices/{notice_id}", response_model=schemas.Notice)
def read_notice(
        notice_id: int,
        db: Session = Depends(get_db),
        current_user: user_schemas.User = Depends(get_current_active_user)
):
    notice = services.get_notice(db, notice_id)
    if notice is None:
        raise HTTPException(status_code=404, detail="Notice not found")

    # Mark the notice as read for the current user
    services.mark_notice_as_read(db, current_user.user_id, notice_id)

    return notice