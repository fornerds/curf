from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_user
from app.domains.user import schemas as user_schemas
from app.domains.user import services as user_services
from app.domains.token import services as token_services
from uuid import UUID

router = APIRouter()

@router.post("/users", response_model=user_schemas.UserCreationResponse)
def create_user(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = user_services.get_user_by_email(db, email=user.email)
    if db_user:
        detail_message = "사용할 수 없는 이메일입니다." if db_user.status == 'WITHDRAWN' else "이미 등록된 이메일 주소입니다."
        raise HTTPException(status_code=400, detail={
            "error": "validation_error",
            "message": "입력 정보가 올바르지 않습니다.",
            "details": [{"field": "email", "message": detail_message}]
        })
    db_user = user_services.get_user_by_nickname(db, nickname=user.nickname)
    if db_user:
        raise HTTPException(status_code=400, detail={
            "error": "validation_error",
            "message": "입력 정보가 올바르지 않습니다.",
            "details": [{"field": "nickname", "message": "이미 등록된 닉네임입니다."}]
        })
    db_user = user_services.get_user_by_phone_number(db, phone_number=user.phone_number)
    if db_user:
        raise HTTPException(status_code=400, detail={
            "error": "validation_error",
            "message": "입력 정보가 올바르지 않습니다.",
            "details": [{"field": "phone_number", "message": "이미 등록된 번호입니다."}]
        })
    if user.password != user.password_confirmation:
        raise HTTPException(status_code=400, detail={
            "error": "validation_error",
            "message": "입력 정보가 올바르지 않습니다.",
            "details": [{"field": "password_confirmation", "message": "비밀번호와 비밀번호 확인이 일치하지 않습니다."}]
        })
    new_user = user_services.create_user(db=db, user=user)
    return {"user_id": new_user.user_id, "message": "회원가입이 완료되었습니다."}
@router.get("/me", response_model=user_schemas.UserInfo)
def read_user_me(current_user: user_schemas.User = Depends(get_current_user), db: Session = Depends(get_db)):
    user = user_services.get_user(db, user_id=current_user.user_id)
    
    # Check user status
    if user.status == 'WITHDRAWN':
        raise HTTPException(status_code=403, detail={
            "error": "user_withdrawn",
            "message": "탈퇴한 회원입니다."
        })

    tokens = token_services.get_user_tokens(db, current_user.user_id)
    subscription = user_services.get_user_subscription(db, current_user.user_id)
    return {
        "user_id": user.user_id,
        "email": user.email,
        "nickname": user.nickname,
        "phone_number": user.phone_number,
        "total_tokens": tokens.total_tokens,
        "created_at": user.created_at,
        "updated_at": user.updated_at,
        "subscription": subscription
    }

@router.put("/me", response_model=user_schemas.UserUpdateResponse)
def update_user_me(
    user_update: user_schemas.UserUpdate,
    current_user: user_schemas.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    user = user_services.get_user(db, user_id=current_user.user_id)
    
    # Check user status
    if user.status == 'WITHDRAWN':
        raise HTTPException(status_code=403, detail={
            "error": "user_withdrawn",
            "message": "탈퇴한 회원입니다."
        })

    """
    회원 정보 수정 API, 전화번호와 닉네임을 수정한다.
    """
    updated_user = user_services.update_user(db, current_user.user_id, user_update)
    return {"message": "회원정보가 수정되었습니다."}

@router.delete("/me", response_model=user_schemas.UserDeleteResponse)
def delete_user_me(
    delete_info: user_schemas.UserDelete,
    current_user: user_schemas.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    회원 탈퇴 요청
    """
    user = user_services.get_user(db, user_id=current_user.user_id)
    
    # Check user status
    if user.status == 'WITHDRAWN':
        raise HTTPException(status_code=403, detail={
            "error": "user_withdrawn",
            "message": "탈퇴한 회원입니다."
        })

    user_services.delete_user(db, current_user.user_id, delete_info)
    return {"message": "회원 탈퇴가 완료되었습니다."}

@router.post("/me/password", response_model=user_schemas.PasswordChangeResponse)
def change_password(
    password_check: user_schemas.PasswordCheck,
    current_user: user_schemas.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if not user_services.verify_password(plain_password=password_check.current_password, hashed_password=current_user.hashed_password):
        raise HTTPException(status_code=400, detail="incorrect_password")
    return {"message": "비밀번호가 확인됐습니다."}

@router.put("/me/password", response_model=user_schemas.PasswordChangeResponse)
def change_password(
    password_change: user_schemas.PasswordChange,
    current_user: user_schemas.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    user = user_services.get_user(db, user_id=current_user.user_id)
    
    # Check user status
    if user.status == 'WITHDRAWN':
        raise HTTPException(status_code=403, detail={
            "error": "user_withdrawn",
            "message": "탈퇴한 회원입니다."
        })

    if not user_services.verify_password(password_change.current_password, current_user.password):
        raise HTTPException(status_code=400, detail={
            "error": "incorrect_password",
            "message": "현재 비밀번호가 일치하지 않습니다."
        })
    user_services.change_user_password(db, current_user.user_id, password_change.new_password, password_change.new_password_confirm)
    return {"message": "비밀번호가 성공적으로 변경되었습니다."}

@router.get("/me/tokens", response_model=user_schemas.TokenInfo)
def get_user_tokens(
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_user)
):
    user = user_services.get_user(db, user_id=current_user.user_id)
    
    # Check user status
    if user.status == 'WITHDRAWN':
        raise HTTPException(status_code=403, detail={
            "error": "user_withdrawn",
            "message": "탈퇴한 회원입니다."
        })

    user_tokens = token_services.get_user_tokens(db, current_user.user_id)
    return user_schemas.TokenInfo(
        total_tokens=user_tokens.total_tokens,
        used_tokens=user_tokens.used_tokens,
        last_charged_at=user_tokens.last_charged_at
    )