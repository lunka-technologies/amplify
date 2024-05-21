import CloseSVG from '../../assets/close-icon.svg?react';
import StakeSVG from '../../assets/icon-stake.svg?react';
import { apis } from '../../axios/apis';
import { axiosInstance } from '../../axios/instance';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';
import styles from './stakeModal.module.scss';
import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';

interface IStakeModalProps {
  isStakeModal: boolean;
  setStakeModal: Dispatch<SetStateAction<boolean>>;
  balance: string;
}

export const StakeModal = ({
  balance,
  isStakeModal,
  setStakeModal,
}: IStakeModalProps) => {
  const inputRef = useRef<MaskedInput>(null);
  const [inputValue, setInputValue] = useState('0.0');
  const [isSuccessful, setSuccessful] = useState(false);
  const maxAmount = balance;
  const persentage = 10;
  const isDisabled =
    parseFloat(inputValue) === 0 ||
    inputValue === '' ||
    parseFloat(maxAmount) === 0;

  const fetchStake = async () => {
    try {
      await axiosInstance.post(apis.stake, {
        amount: Number(inputValue),
      });
      setSuccessful(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  const handleCloseModal = () => {
    setStakeModal(!isStakeModal);
  };

  const handleMaxAmount = () => {
    if (inputRef.current) {
      (inputRef.current.inputElement as HTMLInputElement).value =
        maxAmount.toString();
    }
  };

  const handleGoBack = () => {
    setSuccessful(false);
  };

  return (
    <Modal>
      {isSuccessful ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <CloseSVG
              className={styles.closeButton}
              onClick={handleCloseModal}
            />
          </div>
          <div className={styles.success}>
            <StakeSVG />
            <h1 className={styles.successTitle}>Successfully Staked</h1>
            <p className={styles.successMessage}>Staked: Was successfully</p>
          </div>
          <div className={styles.actions}>
            <Button color="dark" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button color="mint" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <CloseSVG
              className={styles.closeButton}
              onClick={handleCloseModal}
            />
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
                onChange={(e) => setInputValue(e.currentTarget.value)}
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
            <Button color="mint" onClick={fetchStake} disabled={isDisabled}>
              Stake
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
