import HelpSVG from '../../assets/help-circle.svg?react';
import LogoutSVG from '../../assets/logout.svg?react';
import SettingSVG from '../../assets/setting.svg?react';
import { ChangePasswordForm } from '../../forms/changePassword/changePasswordForm';
import styles from './menuItems.module.scss';
import { useState } from 'react';

export const MenuItems = () => {
  const [isShowChangePassword, setShowChangePassword] = useState(false);

  return (
    <ul className={styles.list}>
      {isShowChangePassword ? (
        <ChangePasswordForm onCloseForm={() => setShowChangePassword(false)} />
      ) : (
        <li className={styles.item} onClick={() => setShowChangePassword(true)}>
          <SettingSVG />
          <span className={styles.label}>Change Password</span>
        </li>
      )}

      <li className={styles.item} onClick={() => {}}>
        <HelpSVG />
        <span className={styles.label}>Help</span>
      </li>
      <li className={styles.item} onClick={() => {}}>
        <LogoutSVG />
        <span className={styles.label}>Logout</span>
      </li>
    </ul>
  );
};
