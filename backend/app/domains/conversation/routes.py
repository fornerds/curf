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

@router.post("/chat", response_model=schemas.ConversationResponse)
def create_chat(
        chat: schemas.ConversationCreate,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    user_tokens = token_services.get_user_tokens(db, current_user.user_id)
    if user_tokens.total_tokens - user_tokens.used_tokens <= 0:
        raise HTTPException(
            status_code=402,
            detail={
                "error": "not_enough_tokens",
                "message": "토큰이 부족합니다. 토큰을 충전해주세요."
            }
        )

    try:
        # 여기서 일반적으로 AI 서비스를 호출하여 답변을 얻습니다
        # 이 예제에서는 단순히 플레이스홀더를 사용합니다
        answer = "이것은 임시 답변입니다."
        tokens_used = 5  # 임시 값

        conversation = services.create_conversation(db, chat, current_user.user_id, answer, tokens_used)
        token_services.use_tokens(db, current_user.user_id, tokens_used)

        return schemas.ConversationResponse(
            conversation_id=conversation.conversation_id,
            answer=conversation.answer,
            tokens_used=conversation.tokens_used
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail={
                "error": "internal_server_error",
                "message": "챗봇 서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
            }
        )

@router.get("/conversations", response_model=schemas.ConversationList)
def get_conversations(
        page: int = Query(1, ge=1),
        limit: int = Query(10, ge=1, le=100),
        sort: str = Query("question_time:desc"),
        summary: bool = Query(False),
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    conversations, total_count = services.get_user_conversations(
        db, current_user.user_id, page, limit, sort, summary
    )
    return schemas.ConversationList(conversations=conversations, total_count=total_count)

@router.get("/conversations/{conversation_id}", response_model=schemas.ConversationDetail)
def get_conversation(
        conversation_id: UUID,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    conversation = services.get_conversation(db, conversation_id, current_user.user_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="대화를 찾을 수 없습니다")
    return conversation

@router.delete("/conversations/{conversation_id}", status_code=204)
def delete_conversation(
        conversation_id: UUID,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)
):
    success = services.delete_conversation(db, conversation_id, current_user.user_id)
    if not success:
        raise HTTPException(status_code=404, detail="대화를 찾을 수 없습니다")