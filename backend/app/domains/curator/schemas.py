from pydantic import BaseModel, HttpUrl
from typing import Optional

class CuratorBase(BaseModel):
    name: str
    profile_image: Optional[HttpUrl]
    introduction: Optional[str]
    category: Optional[str]

class Curator(CuratorBase):
    curator_id: int

    class Config:
        orm_mode = True