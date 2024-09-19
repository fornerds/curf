from datetime import datetime
from typing import Optional
from sqlalchemy.orm import Session
from app.domains.user.models import User
from app.core.security import create_access_token, create_refresh_token, verify_password
from app.domains.auth.schemas import TokenPayload
from jose import jwt
from app.core.config import settings

def authenticate_user(db: Session, email: str, password: str) -> Optional[User]:
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        return None
    return user

def create_tokens(user_id: str):
    access_token = create_access_token(subject=user_id)
    refresh_token = create_refresh_token(subject=user_id)
    return access_token, refresh_token

def get_user_from_token(db: Session, token: str) -> Optional[User]:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        token_data = TokenPayload(**payload)
    except jwt.JWTError:
        return None
    if datetime.fromtimestamp(token_data.exp) < datetime.now():
        return None
    user = db.query(User).filter(User.user_id == token_data.sub).first()
    return user