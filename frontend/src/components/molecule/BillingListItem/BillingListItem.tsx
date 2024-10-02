import { Tag } from '@/components/atom/Tag';
import styles from './BillingListItem.module.css';
import { BillingType, getBillingTag } from '@/utils/getBillingTag';

interface BillingProps {
  date: string;
  planName: string;
  price: string;
  status: string;
}

export function BillingListItem({
  date,
  planName,
  price,
  status,
}: BillingProps) {
  const convertDateFormat = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={`${styles.billingListItem} ${styles.textSub} font-text-4`}>
      <div>{convertDateFormat(date)}</div>
      <div>{planName}</div>
      <div>{price} USD</div>
      <div>
        <Tag {...getBillingTag(status as BillingType)} />
      </div>
    </div>
  );
}
