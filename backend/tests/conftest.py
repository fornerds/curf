import os
import sys
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient

# 프로젝트 루트 디렉토리를 Python 경로에 추가
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app.main import app
from app.db.base_class import Base
from app.db.session import get_db
from app.core.config import settings
from app.domains.user.models import User
from app.core.security import get_password_hash

# Use in-memory SQLite database for testing
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture(scope="session")
def db():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    yield db
    db.close()
    Base.metadata.drop_all(bind=engine)


@pytest.fixture(scope="module")
def client(db):
    def override_get_db():
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db
    yield TestClient(app)
    del app.dependency_overrides[get_db]


@pytest.fixture(scope="module")
def test_user(db):
    user = User(
        email="test@example.com",
        password=get_password_hash("testpassword"),
        nickname="testuser",
        phone_number="1234567890",
        birthdate="1990-01-01",
        gender="M"
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@pytest.fixture(scope="module")
def test_superuser(db):
    user = User(
        email="admin@example.com",
        password=get_password_hash("adminpassword"),
        nickname="admin",
        phone_number="9876543210",
        birthdate="1985-01-01",
        gender="F",
        role="ADMIN"
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user