from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.session import get_db
from app.domains.curator import schemas as curator_schemas
from app.domains.curator import services as curator_services

router = APIRouter()

@router.get("/curators", response_model=List[curator_schemas.Curator])
def get_curators(
    category: Optional[str] = Query(None, description="Curator category"),
    db: Session = Depends(get_db)
):
    return curator_services.get_curators(db, category)