from sqlalchemy.orm import Session
from . import models
from typing import List, Optional

def get_curators(db: Session, category: Optional[str] = None) -> List[models.Curator]:
    query = db.query(models.Curator)
    if category:
        query = query.filter(models.Curator.category == category)
    return query.all()