from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "cul.f"
    API_V1_STR: str = "/v1"
    SECRET_KEY: str = "your-secret-key"  # 실제 운영 환경에서는 안전한 비밀 키로 변경해야 합니다
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    ALGORITHM: str = "HS256"

    DB_HOST: str
    DB_PORT: int
    DB_NAME: str
    DB_USER: str
    DB_PASSWORD: str

    class Config:
        env_file = ".env"


settings = Settings()