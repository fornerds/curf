import React, { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'lessEmphasize' | 'default' | 'disable' | 'active' | '';
  size?: 'small' | 'big' | '';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  itemID?: string;
}

export function Button({
  children,
  type = 'button',
  onClick,
  disabled = false,
  size = '',
  variant = '',
  className = '',
  itemID = '',
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      itemID={itemID}
    >
      {children}
    </button>
  );
}

export default Button;
