import { apis } from '../../axios/apis';
import { axiosInstance } from '../../axios/instance';
import { Card } from '../card/card';
import { MenuItems } from '../menuItems/menuItems';
import styles from './profile.module.scss';
import { useEffect, useState } from 'react';

interface IProfileType {
  email: string;
  username: string;
}

export const Profile = () => {
  const [userData, setUserData] = useState<IProfileType>({
    email: '',
    username: '',
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const {
      data: { payload },
    } = await axiosInstance.get(apis.getUser, {});
    setUserData(payload);
  };

  return (
    <Card className={styles.profileContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.container}>
          <p className={styles.username}>{userData.username}</p>
          <p className={styles.email}>{userData.email}</p>
        </div>
      </div>
      <MenuItems />
    </Card>
  );
};
