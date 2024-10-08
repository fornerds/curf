from pydantic import BaseModel, Field
from typing import Optional

class CuratorBase(BaseModel):
    name: str = Field(..., example="열정맨", description="큐레이터의 이름")
    profile_image: Optional[str] = Field(None, example="https://example.com/profile.jpg", description="큐레이터의 프로필 이미지 URL")
    introduction: Optional[str] = Field(None, example="열정적인 예술 큐레이터입니다.", description="큐레이터 소개")
    category: Optional[str] = Field(None, example="예술", description="큐레이터의 전문 분야")

class CuratorCreate(CuratorBase):
    pass

class CuratorUpdate(BaseModel):
    name: Optional[str] = Field(None, example="현대 미술가")
    profile_image: Optional[str] = Field(None, example="https://example.com/new_profile.jpg")
    introduction: Optional[str] = Field(None, example="현대 미술을 전공한 큐레이터입니다.")
    category: Optional[str] = Field(None, example="예술")

class Curator(CuratorBase):
    curator_id: int

    class Config:
        orm_mode = True