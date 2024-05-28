import { Card } from '../card/card';
import styles from './modal.module.scss';
import { MouseEvent, ReactNode, RefObject } from 'react';

interface IModalProps {
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
  onClick: () => void;
}

export const Modal = ({ children, ref, onClick }: IModalProps) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClick}>
      <div
        className={styles.modal}
        ref={ref}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <Card className={styles.modalCard}>{children}</Card>
      </div>
    </div>
  );
};
