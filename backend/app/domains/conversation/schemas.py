from pydantic import BaseModel, HttpUrl
from typing import List, Optional, Union
from datetime import datetime
from uuid import UUID

class ConversationCreate(BaseModel):
    question: str
    question_image: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "question": "What's in this image?",
                "question_image": "/v1/images/example.png"
            }
        }

class ConversationResponse(BaseModel):
    conversation_id: UUID
    answer: str
    tokens_used: int

class ConversationSummary(BaseModel):
    conversation_id: UUID
    question_summary: str
    answer_summary: str
    question_time: datetime

class ConversationDetail(BaseModel):
    conversation_id: UUID
    user_id: UUID
    question: str
    question_image: Optional[str]
    answer: str
    question_time: datetime
    answer_time: datetime
    tokens_used: int

    class Config:
        orm_mode = True

class ConversationList(BaseModel):
    conversations: List[Union[ConversationSummary, ConversationDetail]]
    total_count: int