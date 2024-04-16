import CloseSVG from '../../assets/close-icon.svg?react';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';
import styles from './stakeModal.module.scss';
import { Dispatch, SetStateAction, useRef } from 'react';
import MaskedInput from 'react-text-mask';

interface IStakeModalProps {
  isStakeModal: boolean;
  setStakeModal: Dispatch<SetStateAction<boolean>>;
}

export const StakeModal = ({
  isStakeModal,
  setStakeModal,
}: IStakeModalProps) => {
  const inputRef = useRef<MaskedInput>(null);

  const maxAmount = '100.00';
  const persentage = 10;

  const handleCloseModal = () => {
    setStakeModal(!isStakeModal);
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
          <h1 className={styles.title}>Stake</h1>
          <p className={styles.subtitle}>Choose amount and token to stake</p>
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
              maxValue={maxAmount}
              onRef={inputRef}
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
          <Button color="mint">Stake</Button>
        </div>
      </div>
    </Modal>
  );
};
