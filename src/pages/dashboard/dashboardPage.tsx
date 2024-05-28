import { apis } from '../../axios/apis';
import { devAxiosInstance } from '../../axios/instance';
import { LineChart } from '../../components/charts/lineChart/lineChart';
// import { Dropdown } from '../../components/dropdown/dropdown';
import { Header } from '../../components/header/header';
// import { Switch } from '../../components/switch/switch';
import { Table } from '../../components/table/table';
import styles from './dashboardPage.module.scss';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export const DashboardPage = () => {
  const [walletData, setWalletData] = useState<string>('');
  const [amount, setAmount] = useState(0);

  const fetchWallet = async () => {
    try {
      const {
        data: { address },
      } = await devAxiosInstance.get(apis.getWallet);

      if (!address) {
        await devAxiosInstance.post(apis.createWallet, {});
        await devAxiosInstance.post(apis.postFund, {});

        const createWalletResponse = await devAxiosInstance.get(apis.getWallet);
        const newAddress = createWalletResponse.data.address;

        setWalletData(newAddress);
      } else {
        setWalletData(address);
      }

      const {
        data: { USDTBalance },
      } = await devAxiosInstance.get(apis.getBalance, {});

      setAmount(USDTBalance);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  return (
    <div className={styles.container}>
      <Header wallet={walletData} amount={amount} setAmount={setAmount} />

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
          {/* <div className={styles.filters}>
            <Switch label="Staked only" />
            <div>
              <h3 className={styles.dropdownTitle}>Sort By</h3>
              <Dropdown />
            </div>
          </div> */}
          <Table balance={amount} />
        </div>
      </div>
    </div>
  );
};
