from sqlalchemy import Column, Integer, String, Date
from app.db.base_class import Base

class Banner(Base):
    __tablename__ = "banners"

    banner_id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String, nullable=False)
    target_url = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)