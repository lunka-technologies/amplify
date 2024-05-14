import HelpSVG from '../../assets/help-circle.svg?react';
import LogoutSVG from '../../assets/logout.svg?react';
import SettingSVG from '../../assets/setting.svg?react';
import { ChangePasswordForm } from '../../forms/changePassword/changePasswordForm';
import { ROUTE_MAIN } from '../../router/routes';
import styles from './menuItems.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuItems = () => {
  const [isShowChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwt-token');
    navigate(ROUTE_MAIN);
  };

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
      <li
        className={styles.item}
        onClick={() => {
          handleLogout();
        }}
      >
        <LogoutSVG />
        <span className={styles.label}>Logout</span>
      </li>
    </ul>
  );
};
