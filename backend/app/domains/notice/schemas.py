from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
from uuid import UUID

class NoticeBase(BaseModel):
    title: str
    content: str
    is_important: bool = False

class NoticeCreate(NoticeBase):
    pass

class Notice(NoticeBase):
    notice_id: int
    created_at: datetime
    is_read: Optional[bool] = False

    class Config:
        orm_mode = True

class NoticeList(BaseModel):
    notices: List[Notice]
    total_count: int

class UserNoticeRead(BaseModel):
    user_id: UUID
    notice_id: int
    is_read: bool

    class Config:
        orm_mode = True