import { useState } from 'react';
import { Header, Button, Input, Link } from '../../components';
import styles from './Homepage.module.css';
import LeftIcon from '@/assets/icons/left.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import logoimage from '../../assets/images/culf.png';
import { Tab } from '../../modules';

const tabs = [
  {
    id: 'account',
    label: '계정 관리',
    content: (
      <div>
        <h2>계정 관리</h2>
        <p>여기에 계정 관리 내용이 들어갑니다.</p>
      </div>
    ),
  },
  {
    id: 'subscription',
    label: '구독 관리',
    content: (
      <div>
        <h2>구독 관리</h2>
        <p>여기에 구독 관리 내용이 들어갑니다.</p>
      </div>
    ),
  },
  {
    id: 'payment',
    label: '결제 내역',
    content: (
      <div>
        <h2>결제 내역</h2>
        <p>여기에 결제 내역 내용이 들어갑니다.</p>
      </div>
    ),
  },
];

export function Homepage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value.includes('@')) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  return (
    <>
      <Header
        title="제목"
        showBackButton={true}
        onBackClick={() => console.log('뒤로 가기')}
      />

      <Header
        title={<img src={logoimage} alt="로고" width="54" height="19" />}
        showMenuButton={true}
        onMenuClick={() => console.log('메뉴 열기')}
      />

      <Header
        title="메인 페이지"
        showBackButton={true}
        showMenuButton={true}
        onBackClick={() => console.log('뒤로 가기')}
        onMenuClick={() => console.log('메뉴 열기')}
      />
      <Tab tabs={tabs} defaultActiveTab="subscription" />
      <main className={styles.main}>
        <Link to="/mypage" className={styles.link}>
          <LeftIcon />
          마이페이지 이동
        </Link>
        <Button size="size1" variant="default">
          기본 버튼
        </Button>
        <Button size="size2" variant="plus_icon">
          <LeftIcon /> 추가하기
        </Button>
        <Button
          size="size3"
          variant="less-highlight"
          className={styles.customWidth}
        >
          덜 강조된 버튼
        </Button>
        <Button size="size4" variant="warning">
          경고
        </Button>
        <Button size="size2" variant="disable">
          비활성화
        </Button>
        <Input placeholder="기본 입력" />
        <Input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && (
          <div className={styles.errorMessageWrap}>
            <WarningIcon />
            <p className={`${styles.errorMessage} font-guidetext`}>
              {emailError}
            </p>
          </div>
        )}
        <Input placeholder="비활성화" disabled />
        <Input placeholder="커스텀 너비" className={styles.customWidth} />
      </main>
    </>
  );
}
