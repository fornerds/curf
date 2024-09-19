from sqlalchemy import Column, String, Text, Integer, DateTime, ForeignKey, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base_class import Base
import uuid

class Conversation(Base):
    __tablename__ = "conversations"

    conversation_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.user_id'), nullable=False)
    question = Column(Text, nullable=False)
    question_summary = Column(Text)
    question_image = Column(String(255))
    answer = Column(Text, nullable=False)
    answer_summary = Column(Text)
    question_time = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    answer_time = Column(DateTime(timezone=True))
    tokens_used = Column(Integer, nullable=False, default=0)

    user = relationship("User", back_populates="conversations")
    feedbacks = relationship("ConversationFeedback", back_populates="conversation")

class ConversationFeedback(Base):
    __tablename__ = "conversation_feedbacks"

    feedback_id = Column(Integer, primary_key=True, autoincrement=True)
    conversation_id = Column(UUID(as_uuid=True), ForeignKey('conversations.conversation_id'), nullable=False)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.user_id'), nullable=False)
    rating = Column(Enum('GOOD', 'BAD', name='feedback_rating_enum'))
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    conversation = relationship("Conversation", back_populates="feedbacks")
    user = relationship("User")