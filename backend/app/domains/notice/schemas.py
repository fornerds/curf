from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

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