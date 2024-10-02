import { Tag } from '@/components/atom/Tag';
import styles from './SubscriptionPlan.module.css';
import { getPaymentImage, ImageType } from '@/utils/getPaymentImage';
import { Button } from '@/components/atom';

export function SubscriptionPlan() {
  const subscriptionData = {
    subscription: {
      planName: 'Standard',
      price: '19.00',
      nextBillingData: '2024-08-04',
      type: 'card',
      paymentInfo: 'Visa **** 1048',
    },
  };

  const convertToKoreanDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
  };

  return (
    <section className={styles.subscriptionPlanSection}>
      <div className={`${styles.sectionTop} font-card-title-1`}>
        현재 구독 플랜
      </div>
      <div className={styles.sectionInfo}>
        <Tag
          text={subscriptionData.subscription.planName}
          variant="keycolor2"
        />
        <div>
          <span className="font-title-3">
            {subscriptionData.subscription.price} USD
          </span>
          <span className="font-text-3"> /월</span>
          <div className={`${styles.textSub} font-text-4`}>
            다음 결제일은{' '}
            {convertToKoreanDate(subscriptionData.subscription.nextBillingData)}
            입니다.
          </div>
        </div>
        <div className={styles.paymentInfo}>
          <img
            src={getPaymentImage(
              subscriptionData.subscription.type as ImageType,
            )}
            alt="현재 구독 결제 정보"
            className={styles.paymentImage}
          />
          <span className={`${styles.textSub} font-tag-2`}>
            {subscriptionData.subscription.paymentInfo}
          </span>
        </div>
      </div>
      <div className={styles.sectionBottom}>
        <button className={styles.textButton}>구독 취소</button>
        <Button size="size4">플랜 변경</Button>
      </div>
    </section>
  );
}
