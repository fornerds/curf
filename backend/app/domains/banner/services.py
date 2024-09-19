from sqlalchemy.orm import Session
from . import models
from datetime import datetime
from typing import List

def get_active_banners(db: Session) -> List[models.Banner]:
    today = datetime.now().date()
    return db.query(models.Banner).filter(
        models.Banner.start_date <= today,
        models.Banner.end_date >= today
    ).all()