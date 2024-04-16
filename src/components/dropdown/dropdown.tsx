import styles from './dropdown.module.scss';

export const Dropdown = () => {
  const options = [
    { label: 'Strategy', value: 'strategy' },
    { label: 'Protocol', value: 'protocol' },
    { label: 'Chain', value: 'chain' },
    { label: 'Assets', value: 'assets' },
    { label: 'APY', value: 'apy' },
  ];

  return (
    <select className={styles.dropdown}>
      {options.map(({ value, label }) => (
        <option key={value} value={value} className={styles.option}>
          {label}
        </option>
      ))}
    </select>
  );
};
