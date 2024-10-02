// Tag.tsx
import styles from './Tag.module.css';

type TagVariant =
  | 'default'
  | 'keycolor5'
  | 'keycolor2'
  | 'warning'
  | 'token_number';

interface TagProps {
  text: string;
  boldText?: string;
  variant?: TagVariant;
}

export function Tag({ text, boldText, variant = 'default' }: TagProps) {
  const tagClass = `${styles.tag} ${styles[variant]} font-tag-2`.trim();

  return (
    <span className={tagClass}>
      {boldText && <span>{boldText}</span>}
      {text}
    </span>
  );
}

export default Tag;
