import CloseSVG from '../../assets/close-icon.svg?react';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Input } from '../input/input';
import styles from './modal.module.scss';

interface IModalProps {
  title: string;
  subtitle: string;
  maxAmount: string;
  persentage: number;
  buttonText: string;
}

export const Modal = ({
  title,
  subtitle,
  maxAmount,
  persentage,
  buttonText,
}: IModalProps) => {
  return (
    <div className={styles.modal}>
      <Card className={styles.modalCard}>
        <div className={styles.container}>
          <div className={styles.header}>
            <CloseSVG className={styles.closeButton} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.body}>
            <div className={styles.amountContainer}>
              {' '}
              <h2 className={styles.amountLabel}>Amount</h2>
              <p className={styles.amountText}>
                <span>{maxAmount}</span>
                {'  '} USDT available
              </p>
            </div>
            <div className={styles.inputContainer}>
              <Input
                className={styles.input}
                id="amount"
                type="amount"
                placeholder="Enter amount"
                // value={maxAmount}
              />
              <div className={styles.maxButton}>MAX</div>
            </div>
            <p className={styles.subtitle}>
              Average APY invested : {'  '} {persentage}%
            </p>
          </div>
          <div className={styles.actions}>
            <Button color="dark">Go Back</Button>
            <Button color="mint">{buttonText}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
