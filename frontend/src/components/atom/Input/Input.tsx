import React, { useState, useRef, useEffect } from 'react';
import styles from './Input.module.css';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id?: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  onChange?: (value: string) => void;
}

export function Input({
  id,
  className,
  disabled,
  type = 'text',
  value: propValue,
  onChange,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (propValue !== undefined) {
      setInputValue(propValue.toString());
    }
  }, [propValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const clearInput = () => {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
    if (onChange) {
      onChange('');
    }
  };

  const inputClass = `
    ${styles.input}
    ${isFocused ? styles.focused : ''}
    ${inputValue ? styles.hasValue : ''}
    ${disabled ? styles.disabled : ''}
    ${className || ''}
  `.trim();

  return (
    <div className={styles.inputWrapper}>
      <div className={inputClass}>
        <input
          id={id}
          ref={inputRef}
          {...props}
          type={type}
          value={inputValue}
          className={styles.inputElement}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={disabled}
        />
        {inputValue && !disabled && type !== 'password' && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearInput}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
