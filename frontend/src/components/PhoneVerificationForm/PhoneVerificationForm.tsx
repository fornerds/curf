import { useState } from 'react';
import { InputBox } from '../InputBox';
import styles from './PhoneVerificationForm.module.css';

export function PhoneVerificationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberMessage, setPhoneNumberMessage] = useState('');

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeMessage, setVerificationCodeMessage] = useState('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    console.log('휴대폰 번호 정책 확인');
  };

  const handleVerificationCodeChange = (value: string) => {
    setPhoneNumber(value);
    console.log('인증번호 정책 확인');
  };
  return (
    <div>
      <InputBox
        id="phoneNumber"
        label="휴대폰 번호"
        placeholder="010-0000-0000"
        value={phoneNumber}
        buttonSize="size4"
        buttonVariant="default"
        buttonText="인증번호 발송"
        onChange={handlePhoneNumberChange}
      />
      <div className={styles.inputGroup}>
        <InputBox
          value={verificationCode}
          disabled={true}
          buttonSize="size4"
          buttonVariant="disable"
          buttonText="인증하기"
          onChange={handleVerificationCodeChange}
        />
      </div>
    </div>
  );
}
