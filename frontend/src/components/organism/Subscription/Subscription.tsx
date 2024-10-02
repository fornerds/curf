import styles from './Subscription.module.css';
import { SubscriptionPlan } from '@/components/molecule/SubscriptionPlan';
import { PaymentListItem } from '@/components/molecule/PaymentListItem';
import { BillingListItem } from '@/components/molecule/BillingListItem';

export function Subscription() {
  const paymentsData = [
    {
      id: 1,
      type: 'kakao',
      paymentInfo: 'Kakao **** 1048',
      expiredDate: '2029-03',
    },
    {
      id: 2,
      type: 'card',
      paymentInfo: 'Visa **** 1043',
      expiredDate: '2025-08',
    },
  ];

  const userData = {
    name: '김아트',
    email: 'artkim01@gmail.com',
  };

  const billingData = [
    {
      id: 1,
      date: '2024-07-04',
      planName: 'Standard',
      price: '19.00',
      status: 'SUCCESS',
    },
    {
      id: 2,
      date: '2024-07-04',
      planName: 'Standard',
      price: '19.00',
      status: 'CANCELED',
    },
  ];

  return (
    <>
      <main className={styles.main}>
        <SubscriptionPlan />
        <section>
          <div className={styles.sectionTitle}>
            <span className="font-card-title-1">결제 방식</span>
            <button className={styles.textButton}>결제 방식 추가</button>
          </div>
          <div>
            {paymentsData.map((payment) => (
              <PaymentListItem
                key={payment.id}
                type={payment.type}
                paymentInfo={payment.paymentInfo}
                expiredDate={payment.expiredDate}
              />
            ))}
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>
            <span className="font-card-title-1">청구 정보</span>
            <button className={styles.textButton}>정보 수정</button>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userInfoItem}>
              <div className="font-text-3">이름</div>
              <div className="font-text-2">{userData.name}</div>
            </div>
            <div className={styles.userInfoItem}>
              <div className="font-text-3">이메일</div>
              <div className="font-text-2">{userData.email}</div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>
            <span className="font-card-title-1">청구 내역</span>
          </div>
          <div className={styles.billingList}>
            {billingData.map((billing) => (
              <BillingListItem
                key={billing.id}
                date={billing.date}
                planName={billing.planName}
                price={billing.price}
                status={billing.status}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
