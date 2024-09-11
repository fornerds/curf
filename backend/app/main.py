from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI()

# Dummy database
users_db = {}
conversations_db = {}

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Models
class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None

class UserInDB(User):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class Conversation(BaseModel):
    id: int
    user_id: str
    content: str

# Helper functions
def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

def fake_hash_password(password: str):
    return "fakehashed" + password

# Dependency
async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = get_user(users_db, token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

# Routes
@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": user.username, "token_type": "bearer"}

@app.post("/users/", response_model=User)
async def create_user(user: User):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="Username already registered")
    hashed_password = fake_hash_password("password")  # In a real app, get password from user input
    users_db[user.username] = {**user.dict(), "hashed_password": hashed_password}
    return user

@app.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

@app.post("/conversations/", response_model=Conversation)
async def create_conversation(content: str, current_user: User = Depends(get_current_user)):
    conversation_id = len(conversations_db) + 1
    conversation = Conversation(id=conversation_id, user_id=current_user.username, content=content)
    conversations_db[conversation_id] = conversation
    return conversation

@app.get("/conversations/", response_model=List[Conversation])
async def read_conversations(current_user: User = Depends(get_current_user)):
    return [conv for conv in conversations_db.values() if conv.user_id == current_user.username]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)