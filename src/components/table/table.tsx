import { apis } from '../../axios/apis';
import { axiosInstance } from '../../axios/instance';
import { getCoinSVG } from '../../helpers/coinIcon';
import { StakeModal } from '../../modals/stakeModal/stakeModal';
import { WithdrawModal } from '../../modals/withdrawModal/withdrawModal';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import { mockData } from './mockTableData';
import styles from './table.module.scss';
import { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';

interface ITableProps {
  balance: number;
}

const tableHead = [
  'Strategy',
  'Protocol',
  'Chain',
  'Assets',
  'APY',
  'My Stake',
  'Action',
];

const TableHead = () => {
  return tableHead.map((item) => <th key={item}>{item}</th>);
};

export const Table = ({ balance }: ITableProps) => {
  const [isStakeModal, setStakeModal] = useState(false);
  const [isWithdrawModal, setWithdrawModal] = useState(false);
  const [pools, setPools] = useState('');
  const [stakedAmount, setStakedAmount] = useState<number>(0);

  const stakeRef = useRef<HTMLDivElement>(null);
  const withdrawRef = useRef<HTMLDivElement>(null);

  const walletAmount = balance;
  const amount = stakedAmount.toFixed(2);

  useEffect(() => {
    document.addEventListener('click', checkIfClickedOutside, false);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside, false);
    };
  }, []);

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (stakeRef.current && !stakeRef.current.contains(e.target as Node)) {
      setStakeModal(false);
      console.log(e.target);
      console.log(StakeModal);
    }

    if (
      withdrawRef.current &&
      !withdrawRef.current.contains(e.target as Node)
    ) {
      setWithdrawModal(false);
    }
  };

  const calculateStakedAmount = (stakeArray: any[]) => {
    let sum = 0;
    stakeArray.forEach(({ amount }: any) => {
      sum += amount;
    });
    return sum;
  };

  const fetchStackInfo = async () => {
    try {
      const { data } = await axiosInstance.get(apis.getPools, {});
      const apyData = data.data[0].totalApy;
      setPools(apyData.toFixed(2));
      const {
        data: { userStakingInfo },
      } = await axiosInstance.get(apis.info, {});

      const sum = calculateStakedAmount(userStakingInfo);
      setStakedAmount(sum);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchStackInfo();
  }, []);

  const handleStakeModalToggle = () => {
    setStakeModal(!isStakeModal);
  };

  const handleWithdrawModalToggle = () => {
    setWithdrawModal(!isWithdrawModal);
  };

  const renderBody = mockData.map((item) => (
    <tr key={item.id}>
      <td>
        <Chip color={item.strategy === 'hyper' ? 'red' : 'violet'}>
          {item.strategy}
        </Chip>
      </td>
      <td>
        <div className={styles.tableFlex}>
          {getCoinSVG(item.protocol)}
          <span className={styles.span}>{item.protocol}</span>
        </div>
      </td>
      <td>
        <div className={styles.tableFlex}>
          {getCoinSVG(item.chain)}
          <span className={styles.span}>{item.chain}</span>
        </div>
      </td>
      <td className={styles.tableCoins}>
        {item.assets.map((asset) => getCoinSVG(asset))}
      </td>
      <td>
        <span className={styles.span}>{pools}%</span>
      </td>
      <td>
        <span className={styles.span}>
          {item.isCommingSoon ? `-` : `$${amount}`}{' '}
        </span>
      </td>
      {item.isCommingSoon ? (
        <td>
          <Button color="disabled" className={styles.button}>
            Coming Soon
          </Button>
        </td>
      ) : (
        <td className={styles.actions}>
          <Button
            color="mint"
            className={styles.button}
            onClick={handleStakeModalToggle}
          >
            Stake
          </Button>
          <Button
            color="mint"
            className={styles.button}
            onClick={handleWithdrawModalToggle}
          >
            Withdraw
          </Button>
        </td>
      )}
    </tr>
  ));

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <TableHead />
          </tr>
        </thead>
        <tbody className={styles.tbody}>{renderBody}</tbody>
      </table>
      {isStakeModal && (
        <StakeModal
          stakeRef={stakeRef}
          isStakeModal={isStakeModal}
          setStakeModal={setStakeModal}
          balance={walletAmount}
          pools={pools}
        />
      )}
      {isWithdrawModal && (
        <WithdrawModal
          withdrawRef={withdrawRef}
          balance={amount}
          isWithdrawModal={isWithdrawModal}
          setWithdrawModal={setWithdrawModal}
          pools={pools}
        />
      )}
    </div>
  );
};
