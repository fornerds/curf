from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from . import schemas, services
from typing import List

router = APIRouter()

@router.get("/users/me/notifications", response_model=schemas.NotificationList)
def read_notifications(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    notifications = services.get_user_notifications(db, current_user.user_id, skip, limit)
    return {"notifications": notifications, "total_count": len(notifications)}

@router.get("/users/me/notifications/{notification_id}", response_model=schemas.Notification)
def read_notification(
    notification_id: int,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    notification = services.get_notification(db, notification_id)
    if notification is None or notification.user_id != current_user.user_id:
        raise HTTPException(status_code=404, detail="Notification not found")
    return notification

@router.put("/users/me/notifications/{notification_id}/read", response_model=schemas.Notification)
def mark_notification_read(
    notification_id: int,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    notification = services.mark_notification_as_read(db, notification_id)
    if notification is None or notification.user_id != current_user.user_id:
        raise HTTPException(status_code=404, detail="Notification not found")
    return notification

@router.put("/users/me/notification-settings", response_model=schemas.NotificationSetting)
def update_notification_settings(
    setting: schemas.NotificationSettingUpdate,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    return services.update_notification_setting(db, current_user.user_id, setting)