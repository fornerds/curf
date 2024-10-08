from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.domains.banner import schemas, services

router = APIRouter()

@router.get("/banners", response_model=List[schemas.Banner])
async def get_banners(db: Session = Depends(get_db)):
    """
    활성 배너 조회

    현재 날짜 기준으로 활성화된 배너 목록을 반환합니다.
    이 API는 일반 사용자가 접근 가능합니다.
    """
    return services.get_active_banners(db)