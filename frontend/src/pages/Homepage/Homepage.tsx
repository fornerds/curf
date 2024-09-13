import { Button, Input, Link } from '../../components';
import styles from './Homepage.module.css';

export function Homepage() {
  return (
    <>
      <Link to="/mypage" className={styles.link}>
        <img src="/assets/icons/left.svg" />
        마이페이지 이동
      </Link>
      <Button
        className={styles.button}
        onClick={() => {
          console.log('버튼 클릭');
        }}
      >
        버튼
      </Button>
      <Input className={styles.input} placeholder="Placeholder" />
    </>
  );
}
