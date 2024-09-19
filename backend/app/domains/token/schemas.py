from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TokenInfo(BaseModel):
    total_tokens: int
    used_tokens: int
    last_charged_at: Optional[datetime]

    class Config:
        orm_mode = True