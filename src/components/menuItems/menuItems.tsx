import HelpSVG from '../../assets/help-circle.svg?react';
import LogoutSVG from '../../assets/logout.svg?react';
import SettingSVG from '../../assets/setting.svg?react';
import styles from './menuItems.module.scss';

const menuItems = [
  { icon: <SettingSVG />, label: 'Change Password' },
  { icon: <HelpSVG />, label: 'Help' },
  { icon: <LogoutSVG />, label: 'Logout' },
];

export const MenuItems = () => {
  return (
    <ul className={styles.list}>
      {menuItems.map(({ icon, label }, index) => (
        <li key={label}>
          <div className={styles.container}>
            {icon}
            <span className={styles.label}>{label}</span>
          </div>

          {index < menuItems.length - 1 && <div className={styles.divider} />}
        </li>
      ))}
    </ul>
  );
};
