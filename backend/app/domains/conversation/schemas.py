from pydantic import BaseModel, HttpUrl
from typing import Optional
from datetime import datetime
from uuid import UUID

class ConversationBase(BaseModel):
    question: str
    question_image: Optional[HttpUrl]

class ConversationCreate(ConversationBase):
    pass

class ConversationInDB(ConversationBase):
    conversation_id: UUID
    user_id: UUID
    answer: str
    question_summary: Optional[str]
    answer_summary: Optional[str]
    question_time: datetime
    answer_time: Optional[datetime]
    tokens_used: int

    class Config:
        orm_mode = True

class ConversationSummary(BaseModel):
    conversation_id: UUID
    question_summary: str
    answer_summary: str
    question_time: datetime