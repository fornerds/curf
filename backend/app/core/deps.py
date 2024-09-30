from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError, ExpiredSignatureError
from sqlalchemy.orm import Session
from app.core.config import settings
from app.db.session import get_db
from app.domains.user import services, schemas as user_schemas

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/auth/login")

async def get_current_user(
    db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)
) -> user_schemas.User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Access token has expired")
    except JWTError:
        raise credentials_exception
    user = services.get_user(db, user_id=user_id)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(
    current_user: user_schemas.User = Depends(get_current_user),
) -> user_schemas.User:
    if not services.is_active(current_user):
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

async def get_current_active_superuser(
    current_user: user_schemas.User = Depends(get_current_active_user),
) -> user_schemas.User:
    if not services.is_superuser(current_user):
        raise HTTPException(
            status_code=400, detail="The user doesn't have enough privileges"
        )
    return current_user