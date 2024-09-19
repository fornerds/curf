from sqlalchemy import Column, Integer, DateTime, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base_class import Base

class Token(Base):
    __tablename__ = "tokens"

    user_id = Column(UUID(as_uuid=True), ForeignKey('users.user_id'), primary_key=True)
    total_tokens = Column(Integer, nullable=False, default=0)
    used_tokens = Column(Integer, nullable=False, default=0)
    last_charged_at = Column(DateTime(timezone=True))
    expires_at = Column(Date)

    user = relationship("User", back_populates="tokens")
    usage_history = relationship("TokenUsageHistory", back_populates="token")

class TokenUsageHistory(Base):
    __tablename__ = "token_usage_history"

    history_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.user_id'), nullable=False)
    conversation_id = Column(UUID(as_uuid=True), ForeignKey('conversations.conversation_id'), nullable=False)
    tokens_used = Column(Integer, nullable=False, default=0)
    used_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    token = relationship("Token", back_populates="usage_history")
    conversation = relationship("Conversation")