from sqlalchemy import Column, Integer, String, Float, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Payment(Base):
    __tablename__ = 'payments'

    payment_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id', ondelete="CASCADE"), nullable=False)
    subscription_id = Column(Integer, ForeignKey('subscriptions.subscription_id'), nullable=True)
    token_plan_id = Column(Integer, ForeignKey('token_plans.token_plan_id'), nullable=True)
    payment_number = Column(String(20), unique=True, nullable=False)
    tokens_purchased = Column(Integer, nullable=True)
    amount = Column(Float, nullable=False, default=0)
    payment_method = Column(String(50), nullable=False)
    used_coupon_id = Column(Integer, ForeignKey('coupons.coupon_id'), nullable=True)
    payment_date = Column(TIMESTAMP, nullable=False)
    status = Column(Enum('SUCCESS', 'FAILED', 'CANCELLED', 'REFUNDED'), nullable=False, default='FAILED')
    manual_payment_reason = Column(String, nullable=True)

    # Relationships
    user = relationship("User")
    subscription = relationship("Subscription")
    token_plan = relationship("TokenPlan")
    used_coupon = relationship("Coupon")

    def __repr__(self):
        return f"<Payment(payment_id={self.payment_id}, amount={self.amount}, status={self.status})>"

class Refund(Base):
    __tablename__ = 'refunds'

    refund_id = Column(Integer, primary_key=True, autoincrement=True)
    payment_id = Column(Integer, ForeignKey('payments.payment_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id', ondelete="CASCADE"), nullable=False)
    amount = Column(Float, nullable=False, default=0)
    reason = Column(String, nullable=True)
    status = Column(Enum('PENDING', 'APPROVED', 'REJECTED'), nullable=False, default='PENDING')
    processed_at = Column(TIMESTAMP, nullable=True)
    processed_by = Column(Integer, ForeignKey('users.user_id'), nullable=True)
    created_at = Column(TIMESTAMP, nullable=False)
    updated_at = Column(TIMESTAMP, nullable=False)

    def __repr__(self):
        return f"<Refund(refund_id={self.refund_id}, amount={self.amount}, status={self.status})>"

class Coupon(Base):
    __tablename__ = 'coupons'

    coupon_id = Column(Integer, primary_key=True, autoincrement=True)
    coupon_code = Column(String(20), unique=True, nullable=False)
    discount_type = Column(Enum('RATE', 'AMOUNT'), nullable=False, default='RATE')
    discount_value = Column(Float, nullable=False, default=0)
    valid_from = Column(TIMESTAMP, nullable=False)
    valid_to = Column(TIMESTAMP, nullable=False)
    max_usage = Column(Integer, nullable=True)
    used_count = Column(Integer, nullable=False, default=0)

    def __repr__(self):
        return f"<Coupon(coupon_id={self.coupon_id}, code={self.coupon_code}, discount_type={self.discount_type})>"

class UserCoupon(Base):
    __tablename__ = 'user_coupons'

    user_id = Column(Integer, ForeignKey('users.user_id', ondelete="CASCADE"), nullable=False)
    coupon_id = Column(Integer, primary_key=True)
    used_at = Column(TIMESTAMP, nullable=True)

    def __repr__(self):
        return f"<UserCoupon(user_id={self.user_id}, coupon_id={self.coupon_id})>"
