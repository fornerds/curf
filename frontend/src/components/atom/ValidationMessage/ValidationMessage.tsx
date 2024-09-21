import styles from './ValidationMessage.module.css';
import WarningIcon from '@/assets/icons/warning.svg?react';
import ConfirmIcon from '@/assets/icons/confirm.svg?react';

export type ValidationMessageType = 'error' | 'success';

interface ValidationMessageProps {
  message: string;
  type: ValidationMessageType;
}

export function ValidationMessage({ message, type }: ValidationMessageProps) {
  return (
    <div className={styles.validationMessageWrap}>
      {type === 'error' ? (
        <>
          <WarningIcon />
          <p className={`${styles.errorMessage} font-guidetext`}>{message}</p>
        </>
      ) : (
        <>
          <ConfirmIcon />
          <p className={`${styles.successMessage} font-guidetext`}>{message}</p>
        </>
      )}
    </div>
  );
}

export default ValidationMessage;
