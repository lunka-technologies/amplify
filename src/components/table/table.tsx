import { getCoinSVG } from '../../helpers/coinIcon';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import { mockData } from './mockTableData';
import styles from './table.module.scss';

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

export const Table = () => {
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
            Commong Soon
          </Button>
        </td>
      ) : (
        <td className={styles.actions}>
          <Button color="mint" className={styles.button}>
            Stake
          </Button>
          <Button color="mint" className={styles.button}>
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
    </div>
  );
};
