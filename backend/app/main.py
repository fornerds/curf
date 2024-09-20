from fastapi import FastAPI
from app.core.config import settings
from app.domains.user import routes as user_routes
from app.domains.conversation import routes as conversation_routes
from app.domains.token import routes as token_routes
from app.domains.notification import routes as notification_routes
from app.domains.notice import routes as notice_routes
from app.domains.inquiry import routes as inquiry_routes
from app.domains.terms import routes as terms_routes
from app.domains.curator import routes as curator_routes
from app.domains.banner import routes as banner_routes
from app.domains.auth import routes as auth_routes

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(curator_routes.router, prefix=f"{settings.API_V1_STR}", tags=["curators"])
app.include_router(banner_routes.router, prefix=f"{settings.API_V1_STR}", tags=["banners"])
app.include_router(terms_routes.router, prefix=f"{settings.API_V1_STR}", tags=["terms"])
app.include_router(notice_routes.router, prefix=f"{settings.API_V1_STR}", tags=["notices"])
app.include_router(auth_routes.router, prefix=f"{settings.API_V1_STR}", tags=["auth"])
app.include_router(user_routes.router, prefix=f"{settings.API_V1_STR}", tags=["users"])
app.include_router(conversation_routes.router, prefix=f"{settings.API_V1_STR}", tags=["conversations"])
app.include_router(token_routes.router, prefix=f"{settings.API_V1_STR}", tags=["tokens"])
app.include_router(notification_routes.router, prefix=f"{settings.API_V1_STR}", tags=["notifications"])
app.include_router(inquiry_routes.router, prefix=f"{settings.API_V1_STR}", tags=["inquiries"])

@app.get("/")
def read_root():
    return {"message": "Welcome to cul.f API"}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# API documentation customization
app.title = "cul.f API"
app.description = "API for cul.f service"
app.version = "1.0.0"