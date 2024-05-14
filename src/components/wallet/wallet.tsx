import CloseSVG from '../../assets/close-icon.svg?react';
import CopySVG from '../../assets/copy-icon.svg?react';
import WithdrawSVG from '../../assets/f-check.svg?react';
import KeySVG from '../../assets/key-icon.svg?react';
import { apis } from '../../axios/apis';
import { axiosInstance } from '../../axios/instance';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Input } from '../input/input';
import styles from './wallet.module.scss';
import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

interface IWalletProps {
  amount: number;
  wallet: string;
  isWalletOpen: boolean;
  setWalletOpen: Dispatch<SetStateAction<boolean>>;
}

export const Wallet = ({
  amount,
  wallet,
  isWalletOpen,
  setWalletOpen,
}: IWalletProps) => {
  const [withdrawData, setWithdrawData] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const fetchWallet = async (address: string) => {
    try {
      await axiosInstance.post(apis.postWithdraw, {
        address,
        amount,
      });
      await axiosInstance.get(apis.getBalance);
      setIsSuccessful(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
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
            >
              <WithdrawSVG />
              Withdraw
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};
