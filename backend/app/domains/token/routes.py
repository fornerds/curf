from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from app.domains.token import schemas as token_schemas
from app.domains.token import services as token_services

router = APIRouter()

@router.get("/tokens", response_model=token_schemas.TokenInfo)
def get_user_tokens(
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    return token_services.get_user_tokens(db, current_user.user_id)