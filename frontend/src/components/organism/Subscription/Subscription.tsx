import styles from './Subscription.module.css';
import { SubscriptionPlan } from '@/components/molecule/SubscriptionPlan';
import { PaymentListItem } from '@/components/molecule/PaymentListItem';

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
      </main>
    </>
  );
}
