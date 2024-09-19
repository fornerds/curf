from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.domains.user import schemas, services
from app.db.session import get_db
from app.core.deps import get_current_active_user, get_current_active_superuser
from typing import List
from uuid import UUID

router = APIRouter()

@router.get("/users", response_model=List[schemas.User])
def read_users(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(get_current_active_superuser),
):
    users = db.query(services.User).offset(skip).limit(limit).all()
    return users

@router.get("/users/{user_id}", response_model=schemas.User)
def read_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(get_current_active_user),
):
    db_user = services.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    if current_user.user_id != user_id and not services.is_admin(current_user):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return db_user

@router.put("/users/{user_id}", response_model=schemas.User)
def update_user(
    user_id: UUID,
    user_in: schemas.UserUpdate,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(get_current_active_superuser),
):
    db_user = services.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return services.update_user(db, db_user, user_in)

@router.delete("/users/{user_id}", response_model=schemas.User)
def delete_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(get_current_active_superuser),
):
    db_user = services.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.status = 'WITHDRAWN'
    db.commit()
    return db_user