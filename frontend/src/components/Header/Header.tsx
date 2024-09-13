import React from 'react';
import styles from './Header.module.css';
import LeftIcon from '@/assets/icons/left.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';

interface HeaderProps {
  title: string | React.ReactNode;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  onBackClick?: () => void;
  onMenuClick?: () => void;
}

export function Header({
  title,
  showBackButton = false,
  showMenuButton = false,
  onBackClick,
  onMenuClick,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {showBackButton && (
          <button className={styles.button} onClick={onBackClick}>
            <LeftIcon />
          </button>
        )}
      </div>
      <div className={styles.titleSection}>
        {typeof title === 'string' ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          title
        )}
      </div>
      <div className={styles.rightSection}>
        {showMenuButton && (
          <button className={styles.button} onClick={onMenuClick}>
            <MenuIcon />
          </button>
        )}
      </div>
    </header>
  );
}
