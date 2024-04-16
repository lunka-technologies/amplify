import { LineChart } from '../../components/charts/lineChart/lineChart';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Header } from '../../components/header/header';
import { Switch } from '../../components/switch/switch';
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
          <div className={styles.filters}>
            <Switch label="Staked only" />
            <div>
              <h3 className={styles.dropdownTitle}>Sort By</h3>
              <Dropdown />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};
