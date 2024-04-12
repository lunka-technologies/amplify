import styles from './button.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface IButtonProps {
  onClick?: () => void;
  color: string;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({
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
