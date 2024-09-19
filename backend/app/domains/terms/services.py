from sqlalchemy.orm import Session
from . import models, schemas
from typing import List, Optional

def get_terms_list(db: Session) -> List[models.Terms]:
    return db.query(models.Terms).all()

def get_terms_by_type(db: Session, terms_type: str) -> Optional[models.Terms]:
    return db.query(models.Terms).filter(models.Terms.type == terms_type).order_by(models.Terms.effective_date.desc()).first()