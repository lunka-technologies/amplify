import { LineChart } from '../../components/charts/lineChart/lineChart';
import { Header } from '../../components/header/header';
import { Modal } from '../../components/modal/modal';
import { Table } from '../../components/table/table';
import styles from './dashboardPage.module.scss';
import { useState } from 'react';

export const DashboardPage = () => {
  // TODO: Temporary solution
  const [isShowModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.boxContainer}>
        <div className={styles.chart}>
          <div className={styles.chartTitle}>User Rewards over time</div>
          <div className={styles.lineChart}>
            <LineChart />
          </div>
        </div>
      </div>

      {isShowModal && (
        <Modal
          title="Withdraw"
          subtitle="Choose amount and token to withdraw"
          maxAmount="100.00"
          persentage={11}
          buttonText="Withdraw"
        />
      )}

      <div className={styles.boxContainer}>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  );
};
