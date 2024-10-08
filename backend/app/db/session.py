from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from app.core.config import settings
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.DB_USER}:{settings.DB_PASSWORD}@{settings.DB_HOST}:{settings.DB_PORT}/{settings.DB_NAME}?client_encoding=utf8"
    logger.info(f"Attempting to connect to database: {settings.DB_HOST}:{settings.DB_PORT}/{settings.DB_NAME}")

    engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

    # Test the connection
    with engine.connect() as conn:
        logger.info("Successfully connected to the database")
        # Try to execute a simple query
        result = conn.execute(text("SELECT 1")).fetchone()
        logger.info(f"Test query result: {result}")

    logger.debug(f"Attempting to connect with URL: {SQLALCHEMY_DATABASE_URL.replace(settings.DB_PASSWORD, '****')}")


except Exception as e:
    logger.error(f"Error connecting to the database: {str(e)}")
    logger.exception("Full exception traceback:")
    raise


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()