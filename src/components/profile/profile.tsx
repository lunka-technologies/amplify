import { Card } from '../card/card';
import { MenuItems } from '../menuItems/menuItems';
import styles from './profile.module.scss';
import { useState } from 'react';

interface IProfileProps {
  isProfileOpen: boolean;
}

export const Profile = ({ isProfileOpen }: IProfileProps) => {
  const [userData] = useState({
    username: 'Jeff_0x',
    email: 'jeff.cafolla@gmail.com',
    avatarSrc: '/pictures/user-avatar.png',
  });

  return (
    isProfileOpen && (
      <Card className={styles.profileContainer}>
        <div className={styles.dataContainer}>
          <img
            src={userData.avatarSrc}
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.container}>
            <p className={styles.username}>{userData.username}</p>
            <p className={styles.email}>{userData.email}</p>
          </div>
        </div>
        <MenuItems />
      </Card>
    )
  );
};
