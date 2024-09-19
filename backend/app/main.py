from fastapi import FastAPI
from app.core.config import settings
from app.domains.user import routes as user_routes
from app.domains.conversation import routes as conversation_routes
from app.domains.token import routes as token_routes
from app.domains.notification import routes as notification_routes
from app.domains.notice import routes as notice_routes
from app.domains.inquiry import routes as inquiry_routes
from app.domains.terms import routes as terms_routes

app = FastAPI(title=settings.PROJECT_NAME)

# Include routers
app.include_router(user_routes.router, prefix=f"{settings.API_V1_STR}", tags=["users"])
app.include_router(conversation_routes.router, prefix=f"{settings.API_V1_STR}/conversations", tags=["conversations"])
app.include_router(token_routes.router, prefix=f"{settings.API_V1_STR}/tokens", tags=["tokens"])
app.include_router(notification_routes.router, prefix=f"{settings.API_V1_STR}", tags=["notifications"])
app.include_router(notice_routes.router, prefix=f"{settings.API_V1_STR}", tags=["notices"])
app.include_router(inquiry_routes.router, prefix=f"{settings.API_V1_STR}", tags=["inquiries"])
app.include_router(terms_routes.router, prefix=f"{settings.API_V1_STR}", tags=["terms"])

@app.get("/")
def read_root():
    return {"message": "Welcome to cul.f API"}