import { Card } from '../card/card';
import styles from './modal.module.scss';
import { ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: IModalProps) => {
  return (
    <div className={styles.modal}>
      <Card className={styles.modalCard}>{children}</Card>
    </div>
  );
};
