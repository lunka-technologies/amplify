import styles from './switch.module.scss';
import classNames from 'classnames';
import { useCallback, useState } from 'react';

interface ISwitchProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}

export const Switch = ({
  checked = false,
  onChange = () => null,
  label,
}: ISwitchProps) => {
  const [isChecked, setChecked] = useState(checked);

  const onClick = useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);

  return (
    <div
      className={styles.switchContainer}
      onClick={onClick}
      onChange={onChange}
    >
      <div
        className={classNames([styles.switch, isChecked && styles.checked])}
      />
      {label && <label>{label}</label>}
    </div>
  );
};
