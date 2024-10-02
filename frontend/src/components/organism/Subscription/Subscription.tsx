import styles from './Subscription.module.css';
import { SubscriptionPlan } from '@/components/molecule/SubscriptionPlan';

export function Subscription() {
  return (
    <>
      <main className={styles.main}>
        <SubscriptionPlan />
      </main>
    </>
  );
}
