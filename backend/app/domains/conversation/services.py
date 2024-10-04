from sqlalchemy.orm import Session
from sqlalchemy import desc, asc
from . import models, schemas
from datetime import datetime
from typing import List, Optional, Tuple
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
) -> Tuple[List[models.Conversation], int]:
    query = db.query(models.Conversation).filter(models.Conversation.user_id == user_id)

    # 정렬 적용
    sort_field, sort_order = sort.split(':')
    if sort_order == 'desc':
        query = query.order_by(desc(getattr(models.Conversation, sort_field)))
    else:
        query = query.order_by(asc(getattr(models.Conversation, sort_field)))

    total_count = query.count()

    # 페이지네이션 적용
    offset = (page - 1) * limit
    conversations = query.offset(offset).limit(limit).all()

    if summary:
        # 요약이 요청된 경우, 질문과 답변의 처음 50자만 사용합니다
        for conv in conversations:
            conv.question_summary = conv.question[:50] + "..." if len(conv.question) > 50 else conv.question
            conv.answer_summary = conv.answer[:50] + "..." if len(conv.answer) > 50 else conv.answer

    return conversations, total_count

def get_conversation(db: Session, conversation_id: UUID, user_id: UUID) -> Optional[models.Conversation]:
    return db.query(models.Conversation).filter(
        models.Conversation.conversation_id == conversation_id,
        models.Conversation.user_id == user_id
    ).first()

def delete_conversation(db: Session, conversation_id: UUID, user_id: UUID) -> bool:
    result = db.query(models.Conversation).filter(
        models.Conversation.conversation_id == conversation_id,
        models.Conversation.user_id == user_id
    ).delete()
    db.commit()
    return result > 0