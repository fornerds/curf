from sqlalchemy.orm import Session
from sqlalchemy import desc, asc
from . import models, schemas
from datetime import datetime
from typing import List, Optional
from uuid import UUID

def create_conversation(
    db: Session,
    chat: schemas.ConversationCreate,
    user_id: UUID,
    answer: str,
    tokens_used: int
) -> models.Conversation:
    db_conversation = models.Conversation(
        user_id=user_id,
        question=chat.question,
        question_image=chat.question_image,
        answer=answer,
        question_time=datetime.now(),
        answer_time=datetime.now(),
        tokens_used=tokens_used
    )
    db.add(db_conversation)
    db.commit()
    db.refresh(db_conversation)
    return db_conversation

def get_user_conversations(
    db: Session,
    user_id: UUID,
    page: int,
    limit: int,
    sort: str,
    summary: bool
) -> List[models.Conversation]:
    query = db.query(models.Conversation).filter(models.Conversation.user_id == user_id)

    # Apply sorting
    sort_field, sort_order = sort.split(':')
    if sort_order == 'desc':
        query = query.order_by(desc(getattr(models.Conversation, sort_field)))
    else:
        query = query.order_by(asc(getattr(models.Conversation, sort_field)))

    # Apply pagination
    offset = (page - 1) * limit
    query = query.offset(offset).limit(limit)

    conversations = query.all()

    if summary:
        # If summary is requested, we would typically generate summaries here
        # For this example, we'll just use the first 50 characters of question and answer
        for conv in conversations:
            conv.question_summary = conv.question[:50] + "..." if len(conv.question) > 50 else conv.question
            conv.answer_summary = conv.answer[:50] + "..." if len(conv.answer) > 50 else conv.answer

    return conversations

def get_conversation(db: Session, conversation_id: UUID, user_id: UUID) -> Optional[models.Conversation]:
    return db.query(models.Conversation).filter(
        models.Conversation.conversation_id == conversation_id,
        models.Conversation.user_id == user_id
    ).first()

def delete_conversation(db: Session, conversation_id: UUID, user_id: UUID) -> bool:
    conversation = db.query(models.Conversation).filter(
        models.Conversation.conversation_id == conversation_id,
        models.Conversation.user_id == user_id
    ).first()
    if conversation:
        db.delete(conversation)
        db.commit()
        return True
    return False