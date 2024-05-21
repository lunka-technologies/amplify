import styles from './button.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface IButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  color: string;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({
  disabled = false,
  onClick = () => null,
  color = 'mint',
  children,
  className,
  type = 'button',
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames([
        className,
        styles.button,
        styles[`color_${color}`],
      ])}
    >
      {children}
    </button>
  );
};
