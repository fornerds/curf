from pydantic import BaseModel, HttpUrl, Field
from datetime import date
from typing import Optional

class BannerBase(BaseModel):
    image_url: Optional[str] = Field(None, example="https://example.com/image.jpg")
    target_url: Optional[HttpUrl] = Field(None, example="https://example.com")
    start_date: date = Field(..., example="2024-10-01")
    end_date: date = Field(..., example="2024-10-31")

class Banner(BannerBase):
    banner_id: int
    click_count: int = 0

    class Config:
        orm_mode = True

class BannerCreate(BaseModel):
    target_url: Optional[HttpUrl] = Field(None, example="https://example.com")
    start_date: date = Field(..., example="2024-10-01")
    end_date: date = Field(..., example="2024-10-31")
    is_public: bool = Field(True, example=True)

class BannerUpdate(BaseModel):
    image_url: Optional[str] = Field(None, example="https://example.com/updated-image.jpg")
    target_url: Optional[HttpUrl] = Field(None, example="https://example.com/updated")
    start_date: date = Field(..., example="2024-10-01")
    end_date: date = Field(..., example="2024-10-31")
    is_public: Optional[bool] = Field(None, example=True)