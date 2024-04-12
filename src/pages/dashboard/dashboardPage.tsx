import { Header } from '../../components/header/header';
import { Profile } from '../../components/profile/profile';
import { Table } from '../../components/table/table';
import styles from './dashboardPage.module.scss';
import { useState } from 'react';

export const DashboardPage = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleClickMenu = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <div className={styles.container}>
      <Header handleClickMenu={handleClickMenu} />
      <Profile isProfileOpen={isProfileOpen} />
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  );
};
