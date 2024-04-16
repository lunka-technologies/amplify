import EyeClosedSVG from '../../assets/eye-closed.svg?react';
import EyeOpenSVG from '../../assets/eye-open.svg?react';
import styles from './input.module.scss';
import classNames from 'classnames';
import { SyntheticEvent, useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

interface IInputProps {
  label?: string;
  id: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'amount';
  error?: undefined | string | false;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  placeholder,
  label,
  className,
  value,
  id,
  type = 'text',
  error,
  onChange = () => null,
  onBlur = () => null,
}: IInputProps) => {
  const [isShowPassword, setShowPassword] = useState(false);
  const isTypePassword = type === 'password';

  const currencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
  });

  return (
    <div className={classNames([className, styles.inputContainer])}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {type === 'amount' ? (
        <MaskedInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          className={classNames([
            styles.input,
            isTypePassword && styles.passwordType,
            error && styles.error,
          ])}
          mask={currencyMask}
        />
      ) : (
        <input
          type={isShowPassword ? 'text' : type}
          id={id}
          autoComplete="off"
          className={classNames([
            styles.input,
            isTypePassword && styles.passwordType,
            error && styles.error,
          ])}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      )}

      {error && <div className={styles.errorMsg}>{error}</div>}
      {isTypePassword && (
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
