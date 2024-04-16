import CloseSVG from '../../assets/close-icon.svg?react';
import CopySVG from '../../assets/copy-icon.svg?react';
import WithdrawSVG from '../../assets/f-check.svg?react';
import KeySVG from '../../assets/key-icon.svg?react';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Input } from '../input/input';
import styles from './wallet.module.scss';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

interface IWalletProps {
  isWalletOpen: boolean;
  setWalletOpen: Dispatch<SetStateAction<boolean>>;
}

export const Wallet = ({ isWalletOpen, setWalletOpen }: IWalletProps) => {
  const [withdrawData, setWithdrawData] = useState('');

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
  };

  const handleWithdraw = (withdrawData: string) => {
    console.log('Withdraw Data:', withdrawData);
    setWalletOpen(false);
  };

  return (
    <Card className={styles.walletContainer}>
      <div className={styles.wallet}>
        <CloseSVG className={styles.closeButton} onClick={handleWalletClose} />
        <p className={styles.walletText}>
          Deposit: You can deposit into this account
        </p>
        <div className={styles.deposit}>
          <div className={styles.keyContainer}>
            <KeySVG />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Deposit Wallet</h2>
              <p className={styles.key}>
                0x8f9502f2E4E7B2828b2F56eF294aD145251a4961
              </p>
            </div>
          </div>
          <CopySVG className={styles.copyButton} onClick={handleCopyClick} />
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
    </Card>
  );
};
