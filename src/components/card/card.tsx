import styles from './card.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: ICardProps) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
