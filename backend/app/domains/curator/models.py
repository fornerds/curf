from sqlalchemy import Column, Integer, String, Text
from app.db.base_class import Base

class Curator(Base):
    __tablename__ = "curators"

    curator_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    profile_image = Column(String, nullable=True)
    introduction = Column(Text)
    category = Column(String)