import styles from './Label.module.css';

interface LabelProps {
  label: string;
  id: string;
}

export function Label({ label, id }: LabelProps) {
  return (
    <label htmlFor={id} className={styles.inputLabel}>
      {label}
    </label>
  );
}

export default Label;
