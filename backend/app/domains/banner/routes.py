from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.domains.banner import schemas, services

router = APIRouter()

@router.get("/banners", response_model=List[schemas.Banner])
def get_banners(db: Session = Depends(get_db)):
    return services.get_active_banners(db)