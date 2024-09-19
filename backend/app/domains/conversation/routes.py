from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.core.deps import get_current_user
from app.domains.user.models import User
from app.domains.token import services as token_services
from . import schemas, services
from uuid import UUID

router = APIRouter()


@router.post("/chat", response_model=schemas.ConversationInDB)
def create_chat(
        chat: schemas.ConversationCreate,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    user_tokens = token_services.get_user_tokens(db, current_user.user_id)
    if user_tokens.total_tokens - user_tokens.used_tokens <= 0:
        raise HTTPException(status_code=402, detail="Not enough tokens")

    # Here you would typically call your AI service to get the answer
    # For this example, we'll just use a placeholder
    answer = "This is a placeholder answer."
    tokens_used = 5  # Placeholder value

    conversation = services.create_conversation(db, chat, current_user.user_id, answer, tokens_used)
    token_services.use_tokens(db, current_user.user_id, tokens_used)

    return conversation


@router.get("/conversations", response_model=List[schemas.ConversationInDB])
def get_conversations(
        page: int = Query(1, ge=1),
        limit: int = Query(10, ge=1, le=100),
        sort: str = Query("question_time:desc"),
        summary: bool = Query(False),
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    conversations = services.get_user_conversations(db, current_user.user_id, page, limit, sort, summary)
    return conversations


@router.get("/conversations/{conversation_id}", response_model=schemas.ConversationInDB)
def get_conversation(
        conversation_id: UUID,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    conversation = services.get_