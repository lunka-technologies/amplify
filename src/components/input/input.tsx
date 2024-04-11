import EyeClosedSVG from '../../assets/eye-closed.svg?react';
import EyeOpenSVG from '../../assets/eye-open.svg?react';
import styles from './input.module.scss';
import classNames from 'classnames';
import { SyntheticEvent, useState } from 'react';

interface IInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
  error?: undefined | string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder,
  label,
  value,
  type = 'text',
  error,
  onChange = () => null,
}: IInputProps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  // TODO: Move type === "password" to const

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={isShowPassword ? 'text' : type}
        className={classNames([
          styles.input,
          type === 'password' && styles.passwordType,
        ])}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {type === 'password' && (
        <div
          onClick={() => setShowPassword(!isShowPassword)}
          className={styles.eye}
        >
          {isShowPassword ? <EyeClosedSVG /> : <EyeOpenSVG />}
        </div>
      )}
    </div>
  );
};
