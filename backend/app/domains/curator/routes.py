from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.session import get_db
from . import schemas, services

router = APIRouter()

@router.get("/curators", response_model=List[schemas.Curator])
def get_curators(
    category: Optional[str] = Query(None, description="Curator category"),
    db: Session = Depends(get_db)
):
    return services.get_curators(db, category)