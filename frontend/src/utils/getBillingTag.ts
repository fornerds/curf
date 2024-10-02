import { TagProps } from '@/components/atom/Tag/Tag';

export type BillingType = 'SUCCESS' | 'CANCELED';

export const getBillingTag = (type: BillingType): TagProps => {
  switch (type) {
    case 'SUCCESS':
      return { text: '결제완료', variant: 'keycolor5' };
    case 'CANCELED':
      return { text: '결제취소', variant: 'warning' };
  }
};
