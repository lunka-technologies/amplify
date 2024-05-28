import HelpSVG from '../../assets/help-circle.svg?react';
import LogoutSVG from '../../assets/logout.svg?react';
import SettingSVG from '../../assets/setting.svg?react';
import { LOCAL_JWT_KEY } from '../../constants/localHostConstants';
import { ChangePasswordForm } from '../../forms/changePassword/changePasswordForm';
import { ROUTE_MAIN } from '../../router/routes';
import styles from './menuItems.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuItems = () => {
  const [isShowChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(LOCAL_JWT_KEY);

    navigate(ROUTE_MAIN);
  };

  const handleClickChangePassword = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setShowChangePassword(!isShowChangePassword);
  };

  return (
    <ul className={styles.list}>
      {isShowChangePassword ? (
        <ChangePasswordForm onCloseForm={() => setShowChangePassword(false)} />
      ) : (
        <li className={styles.item} onClick={handleClickChangePassword}>
          <SettingSVG />
          <span className={styles.label}>Change Password</span>
        </li>
      )}

      <li className={styles.item}>
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
