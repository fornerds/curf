from pydantic import BaseModel, HttpUrl
from datetime import date

class BannerBase(BaseModel):
    image_url: HttpUrl
    target_url: HttpUrl
    start_date: date
    end_date: date

class Banner(BannerBase):
    banner_id: int

    class Config:
        orm_mode = True