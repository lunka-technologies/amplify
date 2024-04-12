import HelpSVG from '../../assets/help-circle.svg?react';
import LogoutSVG from '../../assets/logout.svg?react';
import SettingSVG from '../../assets/setting.svg?react';
import { ChangePasswordForm } from '../../forms/changePassword/changePasswordForm';
import styles from './menuItems.module.scss';
import { useState } from 'react';

const menuItems = [
  {
    icon: <SettingSVG />,
    label: 'Change Password',
  },
  { icon: <HelpSVG />, label: 'Help' },
  { icon: <LogoutSVG />, label: 'Logout' },
];

export const MenuItems = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setSelectedMenuItem((prevSelected) =>
      prevSelected === label ? null : label
    );
  };

  return (
    <ul className={styles.list}>
      {menuItems.map(({ icon, label }, index) => (
        <li key={label} className={styles.item}>
          {selectedMenuItem === 'Change Password' &&
          label === 'Change Password' ? (
            <ChangePasswordForm onCloseForm={() => setSelectedMenuItem(null)} />
          ) : (
            <div
              className={styles.container}
              onClick={() => handleClick(label)}
            >
              {icon}
              <span className={styles.label}>{label}</span>
            </div>
          )}
          {index < menuItems.length - 1 && <div className={styles.divider} />}
        </li>
      ))}
    </ul>
  );
};
