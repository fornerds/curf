import styles from './PaymentListItem.module.css';
import { getPaymentImage, ImageType } from '@/utils/getPaymentImage';
import MoreMenu from '@/assets/icons/more-menu.svg?react';

interface PaymentProps {
  type: string;
  paymentInfo: string;
  expiredDate: string;
}

export function PaymentListItem({
  type,
  paymentInfo,
  expiredDate,
}: PaymentProps) {
  const convertToExpiredDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    return `${month}/${year}`;
  };

  return (
    <div className={styles.paymentListItem}>
      <div className={styles.paymentItemInfo}>
        <img
          src={getPaymentImage(type as ImageType)}
          alt="결제 방식 목록"
          className={styles.paymentItemImage}
        />
        <div>
          <div className="font-text-2">{paymentInfo}</div>
          <div
            className={`${styles.textSub} font-text-4`}
          >{`${convertToExpiredDate(expiredDate)} 만료 예정`}</div>
        </div>
      </div>
      <div className={styles.moreMenuIcon}>
        <MoreMenu />
      </div>
    </div>
  );
}
