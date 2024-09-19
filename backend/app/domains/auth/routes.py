from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.domains.auth import schemas, services as auth_services
from app.domains.user import schemas as user_schemas, services as user_services
from app.core.security import get_password_hash
from app.db.session import get_db
from app.core.deps import get_current_user
from app.core.config import settings
from datetime import timedelta

router = APIRouter()

@router.post("/login", response_model=schemas.Token)
def login(
    db: Session = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = auth_services.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token, refresh_token = auth_services.create_tokens(str(user.user_id))
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

@router.post("/register", response_model=user_schemas.User)
def register(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = user_services.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_services.create_user(db=db, user=user)

@router.post("/refresh", response_model=schemas.Token)
def refresh_token(refresh_token: str, db: Session = Depends(get_db)):
    user = auth_services.get_user_from_token(db, refresh_token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token, new_refresh_token = auth_services.create_tokens(str(user.user_id))
    return {
        "access_token": access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer"
    }

@router.get("/me", response_model=user_schemas.User)
def read_users_me(current_user: user_schemas.User = Depends(get_current_user)):
    return current_user

@router.put("/me", response_model=user_schemas.User)
def update_user_me(
    user_in: user_schemas.UserUpdate,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_user)
):
    return user_services.update_user(db, current_user, user_in)

@router.post("/password-reset", response_model=schemas.Msg)
def reset_password(email: str, db: Session = Depends(get_db)):
    user = user_services.get_user_by_email(db, email=email)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this email does not exist in the system.",
        )
    # Here you would typically send an email with password reset instructions
    # For this example, we'll just return a success message
    return {"msg": "Password reset email sent"}

# Add more routes as needed (e.g., email verification, password change, etc.)