import { ITableTypes } from '../../types/table';
import { Button } from '../button/button';
import { Chip } from '../chip/chip';
import { mockTableData } from './mockTableData';
import styles from './table.module.scss';
import { ReactNode } from 'react';

interface ITableColumn {
  id: string;
  label: string;
  cell?: (item: ITableTypes) => ReactNode;
}

const tableColumns: ITableColumn[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    cell: (item: ITableTypes) => (
      <Chip color={item.strategy.color} className={styles.chip}>
        {item.strategy.text}
      </Chip>
    ),
  },
  {
    id: 'protocol',
    label: 'Protocol',
    cell: (item: ITableTypes) => (
      <span className={styles.span}>
        {item.protocol.logo}
        {item.protocol.label}
      </span>
    ),
  },
  {
    id: 'chain',
    label: 'Chain',
    cell: (item: ITableTypes) => (
      <span className={styles.span}>
        {item.chain.logo}
        {item.chain.label}
      </span>
    ),
  },
  {
    id: 'assets',
    label: 'Assets',
    cell: (item: ITableTypes) => item.assets,
  },
  {
    id: 'apy',
    label: 'APY',
    cell: (item: ITableTypes) => (
      <span className={styles.span}>{item.apy}</span>
    ),
  },
  {
    id: 'stake',
    label: 'My Stake',
    cell: (item: ITableTypes) => (
      <span className={styles.span}>{item.stake}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
    cell: (item: ITableTypes) => (
      <>
        {item.action.text.map((text, index) => (
          <Button
            key={index}
            color={item.action.color}
            className={
              item.action.isActive ? styles.buttonActive : styles.button
            }
          >
            {text}
          </Button>
        ))}
      </>
    ),
  },
];

const TableHead = () => {
  return tableColumns.map(({ id, label }) => <th key={id}>{label}</th>);
};

const TableBody = () => {
  return (
    <tbody className={styles.tbody}>
      {mockTableData.map((item) => (
        <tr key={item.id}>
          {tableColumns.map((column) =>
            column.id === 'action' ? (
              <td key={column.id} className={styles.actions}>
                {column.cell ? column.cell(item) : null}
              </td>
            ) : (
              <td key={column.id}>{column.cell ? column.cell(item) : null}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export const Table = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <TableHead />
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};
