import { getCoinSVG } from '../../helpers/coinIcon';
import { StakeModal } from '../../modals/stakeModal/stakeModal';
import { WithdrawModal } from '../../modals/withdrawModal/withdrawModal';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import { mockData } from './mockTableData';
import styles from './table.module.scss';
import { useState } from 'react';

interface ITableProps {
  amount: number;
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

export const Table = ({ amount }: ITableProps) => {
  const [isStakeModal, setStakeModal] = useState(false);
  const [isWithdrawModal, setWithdrawModal] = useState(false);
  const walletAmount = amount.toString();

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
        <span className={styles.span}>{item.apy}%</span>
      </td>
      <td>
        <span className={styles.span}>
          {item.isCommingSoon ? `-` : `$${item.stake}`}{' '}
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
          isStakeModal={isStakeModal}
          setStakeModal={setStakeModal}
          balance={walletAmount}
        />
      )}
      {isWithdrawModal && (
        <WithdrawModal
          isWithdrawModal={isWithdrawModal}
          setWithdrawModal={setWithdrawModal}
        />
      )}
    </div>
  );
};
