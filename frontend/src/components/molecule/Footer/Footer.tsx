import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  companyName: string;
  address: string;
  registrationNumber: string;
}

export function Footer({
  companyName,
  address,
  registrationNumber,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} font-tag-2`}>
        <p className={styles.info}>상호명 : {companyName}</p>
        <p className={styles.info}>주소 : {address}</p>
        <p className={styles.info}>사업자등록번호 : {registrationNumber}</p>
        <p className={styles.copyright}>©Cul.f. All rights reserved.</p>
      </div>
    </footer>
  );
}
