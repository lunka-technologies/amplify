import LogoSVG from '../../assets/logo.svg?react';
import MenuSVG from '../../assets/menu.svg?react';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import styles from './header.module.scss';

export const Header = () => {
  const amount = 746.02;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoSVG className={styles.logo} />
        <div className={styles.divider}></div>
      </div>

      <div className={styles.container}>
        <p className={styles.titleAmount}>
          Available Balance
          <span className={styles.amount}>{amount}</span>
          <Chip>USDT</Chip>
        </p>
        <div className={styles.divider}></div>
        <Button color="mint" className={styles.buttonKey}>
          0x1BvBMSEYstWet...
        </Button>
        <MenuSVG className={styles.menu} />
      </div>
    </header>
  );
};
