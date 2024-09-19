from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from uuid import UUID

class AttachmentInfo(BaseModel):
    file_name: str
    file_type: str
    file_url: str

class InquiryCreate(BaseModel):
    title: str
    email: EmailStr
    contact: str
    content: str
    attachments: Optional[List[AttachmentInfo]] = []

class InquiryResponse(BaseModel):
    inquiry_id: str
    status: str
    message: str

class InquiryInDB(InquiryCreate):
    inquiry_id: int
    user_id: UUID
    status: str
    created_at: datetime

    class Config:
        orm_mode = True