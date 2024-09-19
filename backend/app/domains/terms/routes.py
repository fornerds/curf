from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.deps import get_current_active_user
from app.domains.user import schemas as user_schemas
from . import schemas, services
from typing import List

router = APIRouter()

@router.get("/terms", response_model=List[schemas.Terms])
def read_terms_list(
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    return services.get_terms_list(db)

@router.get("/terms/{terms_type}", response_model=schemas.Terms)
def read_terms_by_type(
    terms_type: str,
    db: Session = Depends(get_db),
    current_user: user_schemas.User = Depends(get_current_active_user)
):
    terms = services.get_terms_by_type(db, terms_type)
    if terms is None:
        raise HTTPException(status_code=404, detail="Terms not found")
    return terms