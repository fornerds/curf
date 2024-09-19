from sqlalchemy import Column, Integer, String, Date, Text
from app.db.base_class import Base

class Terms(Base):
    __tablename__ = "terms"

    terms_id = Column(Integer, primary_key=True, index=True)
    type = Column(String(50), nullable=False)
    content = Column(Text, nullable=False)
    version = Column(String(20), nullable=False)
    effective_date = Column(Date, nullable=False)