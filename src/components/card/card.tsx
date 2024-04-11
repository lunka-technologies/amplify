import styles from './card.module.scss';
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
}

export const Card = ({ children }: ICardProps) => {
  return <div className={styles.card}>{children}</div>;
};
