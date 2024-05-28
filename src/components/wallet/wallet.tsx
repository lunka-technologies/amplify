import CloseSVG from '../../assets/close-icon.svg?react';
import CopySVG from '../../assets/copy-icon.svg?react';
import WithdrawSVG from '../../assets/f-check.svg?react';
import KeySVG from '../../assets/key-icon.svg?react';
import { apis } from '../../axios/apis';
import { devAxiosInstance } from '../../axios/instance';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Input } from '../input/input';
import { Loader } from '../loader/loader';
import styles from './wallet.module.scss';
import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

interface IWalletProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  wallet: string;
  isWalletOpen: boolean;
  setWalletOpen: Dispatch<SetStateAction<boolean>>;
}

export const Wallet = ({
  amount,
  setAmount,
  wallet,
  isWalletOpen,
  setWalletOpen,
}: IWalletProps) => {
  const [withdrawData, setWithdrawData] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWallet = async (address: string) => {
    setLoading(true);
    try {
      await devAxiosInstance.post(apis.postWithdraw, {
        address,
        amount,
      });

      const {
        data: { USDTBalance },
      } = await devAxiosInstance.get(apis.getBalance);

      setAmount(USDTBalance);
      setIsSuccessful(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setError(error.response?.data.message as string);
      }
    } finally {
      setLoading(false);
    }
  };

  const copyKeyToClipboard = () => {
    const keyElement = document.querySelector(`.${styles.key}`) as HTMLElement;
    if (keyElement) {
      const keyText = keyElement.innerText;
      navigator.clipboard
        .writeText(keyText)
        .then(() => {
          alert('Key copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying key to clipboard: ', error);
        });
    }
  };

  const handleCopyClick = () => {
    copyKeyToClipboard();
  };

  const handleWalletClose = () => {
    setWalletOpen(!isWalletOpen);
    setIsSuccessful(false);
  };

  const handleWithdraw = (withdrawData: string) => {
    fetchWallet(withdrawData);
  };

  const handleGoBack = () => {
    setIsSuccessful(false);
  };

  return (
    <Card className={styles.walletContainer}>
      {isSuccessful ? (
        <>
          <div className={styles.wallet}>
            <CloseSVG
              className={styles.closeButton}
              onClick={handleWalletClose}
            />

            <div className={styles.success}>
              <h2 className={styles.successTitle}>Successfully Sent</h2>
              <p className={styles.successMessage}>
                Deposit: Was successfully sent to address
              </p>
              <p className={styles.successKey}>{withdrawData}</p>
            </div>
          </div>
          <div className={styles.buttonsGroup}>
            <Button
              color="dark"
              className={styles.button}
              onClick={handleWalletClose}
            >
              Close
            </Button>
            <Button
              color="mint"
              className={styles.button}
              onClick={() => handleGoBack()}
            >
              Go Back
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.wallet}>
            <CloseSVG
              className={styles.closeButton}
              onClick={handleWalletClose}
            />
            <p className={styles.walletText}>
              Deposit: You can deposit into this account
            </p>
            <div className={styles.deposit}>
              <div className={styles.keyContainer}>
                <KeySVG />
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>Deposit Wallet</h2>
                  <p className={styles.key}>{wallet}</p>
                </div>
              </div>
              <CopySVG
                className={styles.copyButton}
                onClick={handleCopyClick}
              />
            </div>
            <div className={styles.divider} />
            <p className={styles.walletText}>Insert Wallet to withdraw to</p>
            <Input
              id="wallet"
              placeholder="Add your Withdraw Wallet"
              value={withdrawData}
              onChange={(e: SyntheticEvent<HTMLInputElement>) =>
                setWithdrawData(e.currentTarget.value)
              }
            />
          </div>
          {error && <div className={styles.errorMsg}>{error}</div>}
          <div className={styles.buttonsGroup}>
            <Button
              color="dark"
              className={styles.button}
              onClick={handleWalletClose}
            >
              Close
            </Button>
            <Button
              color="mint"
              className={styles.button}
              onClick={() => handleWithdraw(withdrawData)}
              disabled={loading}
            >
              {loading ? (
                <div>
                  <Loader /> Loading...
                </div>
              ) : (
                <>
                  <WithdrawSVG />
                  Withdraw
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};
