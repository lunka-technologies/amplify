import LogoSVG from '../../assets/logo.svg?react';
import MenuSVG from '../../assets/menu.svg?react';
import WalletSVG from '../../assets/wallet.svg?react';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import { Profile } from '../profile/profile';
import { Wallet } from '../wallet/wallet';
import styles from './header.module.scss';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [isShowProfile, setShowProfile] = useState(false);
  const [isWalletOpen, setWalletOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);

  const amount = 746.02;

  useEffect(() => {
    // document.addEventListener('click', checkIfClickedOutside, false);
    // return () => {
    //   document.removeEventListener('click', checkIfClickedOutside, false);
    // };
  }, []);

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (!profileRef.current) return;

    console.log(
      profileRef.current,
      profileRef.current.contains(e.target as Node),
      e.target
    );

    if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
      setShowProfile(false);
    }

    if (walletRef.current && !walletRef.current.contains(e.target as Node)) {
      setWalletOpen(false);
    }
  };

  const handleClickWallet = () => {
    setWalletOpen(!isWalletOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <LogoSVG className={styles.logo} />
          <div className={styles.divider} />
        </div>

        <div className={styles.container}>
          <p className={styles.titleAmount}>
            Available Balance
            <span className={styles.amount}>{amount}</span>
            <Chip>USDT</Chip>
          </p>
          <div className={styles.divider} />
          <div ref={walletRef}>
            <Button
              color="mint"
              className={styles.buttonKey}
              onClick={handleClickWallet}
            >
              <WalletSVG />
              0x1BvBMSEYstWet...
            </Button>

            {isWalletOpen && (
              <Wallet
                isWalletOpen={isWalletOpen}
                setWalletOpen={setWalletOpen}
              />
            )}
          </div>

          <div ref={profileRef}>
            <MenuSVG
              className={styles.menu}
              onClick={() => setShowProfile(!isShowProfile)}
            />
            {isShowProfile && <Profile />}
          </div>
        </div>
      </header>
    </>
  );
};
