from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from . import schemas, services

router = APIRouter()

@router.get("/tokens", response_model=schemas.TokenInfo)
def get_user_tokens(
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    return services.get_user_tokens(db, current_user.user_id)