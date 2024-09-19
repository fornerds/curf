from sqlalchemy.orm import Session
from . import models, schemas
from uuid import UUID
def get_user_tokens(db: Session, user_id: UUID) -> schemas.TokenInfo:
    token = db.query(models.Token).filter(models.Token.user_id == user_id).first()
    if not token:
        return schemas.TokenInfo(total_tokens=0, used_tokens=0, last_charged_at=None)
    return schemas.TokenInfo(
        total_tokens=token.total_tokens,
        used_tokens=token.used_tokens,
        last_charged_at=token.last_charged_at
    )
def use_tokens(db: Session, user_id: UUID, tokens: int) -> None:
    user_tokens = db.query(models.Token).filter(models.Token.user_id == user_id).first()
    if user_tokens:
        user_tokens.used_tokens += tokens
        db.commit()