import EyeClosedSVG from '../../assets/eye-closed.svg?react';
import EyeOpenSVG from '../../assets/eye-open.svg?react';
import styles from './input.module.scss';
import classNames from 'classnames';
import { SyntheticEvent, useState } from 'react';

interface IInputProps {
  label?: string;
  id: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
  error?: undefined | string | false;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder,
  label,
  value,
  id,
  type = 'text',
  error,
  onChange = () => null,
  onBlur = () => null,
}: IInputProps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  // TODO: Move type === "password" to const

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={isShowPassword ? 'text' : type}
        id={id}
        className={classNames([
          styles.input,
          type === 'password' && styles.passwordType,
          error && styles.error,
        ])}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {error && <div className={styles.errorMsg}>{error}</div>}
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
