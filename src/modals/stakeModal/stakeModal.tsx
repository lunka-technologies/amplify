import CloseSVG from '../../assets/close-icon.svg?react';
import StakeSVG from '../../assets/icon-stake.svg?react';
import { apis } from '../../axios/apis';
import { devAxiosInstance } from '../../axios/instance';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Loader } from '../../components/loader/loader';
import { Modal } from '../../components/modal/modal';
import styles from './stakeModal.module.scss';
import { AxiosError } from 'axios';
import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';

interface IStakeModalProps {
  isStakeModal: boolean;
  setStakeModal: Dispatch<SetStateAction<boolean>>;
  balance: number;
  stakeRef: RefObject<HTMLDivElement>;
  pools: string;
}

export const StakeModal = ({
  balance,
  isStakeModal,
  setStakeModal,
  stakeRef,
  pools,
}: IStakeModalProps) => {
  const inputRef = useRef<MaskedInput>(null);
  const [inputValue, setInputValue] = useState('0.0');
  const [isSuccessful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const maxAmount = balance.toString();

  const isDisabled =
    parseFloat(inputValue) === 0 ||
    inputValue === '' ||
    parseFloat(maxAmount) === 0;

  const fetchStake = async () => {
    setLoading(true);
    try {
      await devAxiosInstance.post(apis.stake, {
        amount: Number(inputValue),
      });
      setSuccessful(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setError(error.response?.data.message as string);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setStakeModal(!isStakeModal);
    if (isSuccessful) {
      window.location.reload();
    }
  };

  const handleMaxAmount = () => {
    if (inputRef.current) {
      const maxAmountNumber = parseFloat(maxAmount);
      const roundedMaxAmount = Math.floor(maxAmountNumber).toString();

      (inputRef.current.inputElement as HTMLInputElement).value =
        roundedMaxAmount;
      setInputValue(roundedMaxAmount);
    }
  };

  const handleGoBack = () => {
    setSuccessful(false);
  };

  return (
    <Modal ref={stakeRef} onClick={handleCloseModal}>
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
              Average APY invested : {'  '} {pools}%
            </p>
          </div>
          {error && <div className={styles.errorMsg}>{error}</div>}
          <div className={styles.actions}>
            <Button color="dark" onClick={handleCloseModal}>
              Go Back
            </Button>
            <Button
              className={styles.button}
              color="mint"
              onClick={fetchStake}
              disabled={isDisabled || loading}
            >
              {loading ? (
                <div>
                  <Loader /> Loading...
                </div>
              ) : (
                'Stake'
              )}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
