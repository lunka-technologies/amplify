import CloseSVG from '../../assets/close-icon.svg?react';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';
import styles from './withdrawModal.module.scss';
import { Dispatch, SetStateAction, useRef } from 'react';
import MaskedInput from 'react-text-mask';

interface IWithdrawModalProps {
  isWithdrawModal: boolean;
  setWithdrawModal: Dispatch<SetStateAction<boolean>>;
}

export const WithdrawModal = ({
  isWithdrawModal,
  setWithdrawModal,
}: IWithdrawModalProps) => {
  const inputRef = useRef<MaskedInput>(null);
  const maxAmount = '1000.00';
  const persentage = 0;

  const handleCloseModal = () => {
    setWithdrawModal(!isWithdrawModal);
  };

  const handleMaxAmount = () => {
    if (inputRef.current) {
      (inputRef.current.inputElement as HTMLInputElement).value =
        maxAmount.toString();
    }
  };

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <CloseSVG className={styles.closeButton} onClick={handleCloseModal} />
          <h1 className={styles.title}>Withdraw</h1>
          <p className={styles.subtitle}>Choose amount and token to withdraw</p>
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
              onRef={inputRef}
              maxValue={maxAmount}
              className={styles.input}
              id="amount"
              type="amount"
              placeholder="Enter amount"
            />
            <div className={styles.maxButton} onClick={handleMaxAmount}>
              MAX
            </div>
          </div>
          <p className={styles.subtitle}>
            Average APY invested : {'  '} {persentage}%
          </p>
        </div>
        <div className={styles.actions}>
          <Button color="dark" onClick={handleCloseModal}>
            Go Back
          </Button>
          <Button color="mint">Withdraw</Button>
        </div>
      </div>
    </Modal>
  );
};
