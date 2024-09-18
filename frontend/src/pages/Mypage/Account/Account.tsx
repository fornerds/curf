import { Button, Input } from '@/components';
import { useState } from 'react';
import styles from './Account.module.css';
import { InputBox } from '@/components/InputBox/InputBox';
import { PhoneVerificationForm } from '@/components/PhoneVerificationForm';

export function Account() {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const [nickname, setNickname] = useState('');
  const [nicknameMessage, setNicknameMessage] = useState('');

  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value.includes('@')) {
      setEmailMessage('유효한 이메일 주소를 입력해주세요.');
    } else {
      setEmailMessage('');
    }
  };

  const handleNicknameChange = (value: string) => {
    setNickname(value);
    console.log('닉네임 정책 확인');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    console.log('휴대폰 번호 정책 확인');
  };

  return (
    <>
      <main>
        <div className={styles.accountContent}>
          {/* TODO: 이메일, 닉네임 input 다른 페이지에서도 사용 => 컴포넌트화? */}
          <InputBox
            id="email"
            label="이메일"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            validationMessage={emailMessage}
            validationMessageType="error"
            onChange={handleEmailChange}
          />
          <InputBox
            id="nickname"
            label="닉네임"
            placeholder="닉네임 입력"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <PhoneVerificationForm />
          <InputBox
            id="passwordChange"
            label="비밀번호 변경"
            placeholder="기존 비밀번호 입력"
            value={password}
            buttonSize="size4"
            buttonVariant="default"
            buttonText="확인"
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.accountBottom}>
          <Button>변경사항 저장</Button>
          <div className={styles.buttonGroup}>
            <Button size="size3" variant="warning">
              계정탈퇴하기
            </Button>
            <Button size="size3" variant="less-highlight">
              로그아웃
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
