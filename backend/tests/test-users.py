import pytest
from fastapi.testclient import TestClient
from app.core.config import settings

def get_access_token(client: TestClient, email: str, password: str):
    login_data = {
        "username": email,
        "password": password
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", data=login_data)
    return response.json()["access_token"]

def test_read_users(client: TestClient, test_superuser):
    access_token = get_access_token(client, test_superuser.email, "adminpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    response = client.get(f"{settings.API_V1_STR}/users", headers=headers)
    assert response.status_code == 200
    users = response.json()
    assert len(users) > 0

def test_read_user(client: TestClient, test_user, test_superuser):
    access_token = get_access_token(client, test_superuser.email, "adminpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    response = client.get(f"{settings.API_V1_STR}/users/{test_user.user_id}", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == test_user.email
    assert data["nickname"] == test_user.nickname

def test_read_user_me(client: TestClient, test_user):
    access_token = get_access_token(client, test_user.email, "testpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    response = client.get(f"{settings.API_V1_STR}/auth/me", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == test_user.email
    assert data["nickname"] == test_user.nickname

def test_update_user_me(client: TestClient, test_user):
    access_token = get_access_token(client, test_user.email, "testpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    data = {"nickname": "updateduser"}
    response = client.put(f"{settings.API_V1_STR}/auth/me", json=data, headers=headers)
    assert response.status_code == 200
    updated_data = response.json()
    assert updated_data["nickname"] == "updateduser"

def test_update_user(client: TestClient, test_user, test_superuser):
    access_token = get_access_token(client, test_superuser.email, "adminpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    data = {"nickname": "adminupdated"}
    response = client.put(f"{settings.API_V1_STR}/users/{test_user.user_id}", json=data, headers=headers)
    assert response.status_code == 200
    updated_data = response.json()
    assert updated_data["nickname"] == "adminupdated"

def test_delete_user(client: TestClient, test_user, test_superuser):
    access_token = get_access_token(client, test_superuser.email, "adminpassword")
    headers = {"Authorization": f"Bearer {access_token}"}
    response = client.delete(f"{settings.API_V1_STR}/users/{test_user.user_id}", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "WITHDRAWN"
