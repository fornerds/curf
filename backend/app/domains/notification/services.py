from sqlalchemy.orm import Session
from . import models, schemas
from typing import List
from uuid import UUID


def get_user_notifications(db: Session, user_id: UUID, skip: int = 0, limit: int = 100) -> List[models.Notification]:
    return db.query(models.Notification).filter(models.Notification.user_id == user_id).offset(skip).limit(limit).all()


def get_notification(db: Session, notification_id: int) -> models.Notification:
    return db.query(models.Notification).filter(models.Notification.notification_id == notification_id).first()


def mark_notification_as_read(db: Session, notification_id: int) -> models.Notification:
    notification = get_notification(db, notification_id)
    if notification:
        notification.is_read = True
        db.commit()
        db.refresh(notification)
    return notification


def update_notification_setting(db: Session, user_id: UUID,
                                setting: schemas.NotificationSettingUpdate) -> models.NotificationSetting:
    db_setting = db.query(models.NotificationSetting).filter(
        models.NotificationSetting.user_id == user_id,
        models.NotificationSetting.notification_type == setting.notification_type
    ).first()

    if db_setting:
        db_setting.is_enabled = setting.is_enabled
    else:
        db_setting = models.NotificationSetting(
            user_id=user_id,
            notification_type=setting.notification_type,
            is_enabled=setting.is_enabled
        )
        db.add(db_setting)

    db.commit()
    db.refresh(db_setting)
    return db_setting