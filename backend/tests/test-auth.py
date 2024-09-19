import pytest
from fastapi.testclient import TestClient
from app.core.config import settings

def test_login(client: TestClient, test_user):
    login_data = {
        "username": test_user.email,
        "password": "testpassword"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", data=login_data)
    tokens = response.json()
    assert response.status_code == 200
    assert "access_token" in tokens
    assert tokens["token_type"] == "bearer"

def test_login_incorrect_password(client: TestClient, test_user):
    login_data = {
        "username": test_user.email,
        "password": "wrongpassword"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", data=login_data)
    assert response.status_code == 401

def test_register(client: TestClient):
    user_data = {
        "email": "newuser@example.com",
        "password": "newpassword",
        "nickname": "newuser",
        "phone_number": "1112223333",
        "birthdate": "1995-05-05",
        "gender": "F"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/register", json=user_data)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == user_data["email"]
    assert data["nickname"] == user_data["nickname"]

def test_register_existing_email(client: TestClient, test_user):
    user_data = {
        "email": test_user.email,
        "password": "newpassword",
        "nickname": "newuser",
        "phone_number": "1112223333",
        "birthdate": "1995-05-05",
        "gender": "F"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/register", json=user_data)
    assert response.status_code == 400

def test_refresh_token(client: TestClient, test_user):
    login_data = {
        "username": test_user.email,
        "password": "testpassword"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", data=login_data)
    tokens = response.json()
    
    refresh_data = {
        "refresh_token": tokens["refresh_token"]
    }
    response = client.post(f"{settings.API_V1_STR}/auth/refresh", json=refresh_data)
    new_tokens = response.json()
    assert response.status_code == 200
    assert "access_token" in new_tokens
    assert new_tokens["access_token"] != tokens["access_token"]

def test_read_users_me(client: TestClient, test_user):
    login_data = {
        "username": test_user.email,
        "password": "testpassword"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", data=login_data)
    tokens = response.json()
    
    headers = {"Authorization": f"Bearer {tokens['access_token']}"}
    response = client.get(f"{settings.API_V1_STR}/auth/me", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == test_user.email
    assert data["nickname"] == test_user.nickname
