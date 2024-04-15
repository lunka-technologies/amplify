import { LineChart } from '../../components/charts/lineChart/lineChart';
import { Header } from '../../components/header/header';
import { Table } from '../../components/table/table';
import styles from './dashboardPage.module.scss';

export const DashboardPage = () => {
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

      <div className={styles.boxContainer}>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  );
};
