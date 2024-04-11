import CheckedSVG from '../../assets/checked.svg?react';
import UncheckedSVG from '../../assets/unchecked.svg?react';
import styles from './checkbox.module.scss';
import { useCallback, useState } from 'react';

interface ICheckboxProps {
  checked?: boolean;
  onChange?: (value: boolean) => null;
  label?: string;
}

export const Checkbox = ({
  checked = false,
  label,
  onChange = () => null,
}: ICheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = useCallback(() => {
    setChecked(!isChecked);
    onChange(!isChecked);
  }, [isChecked]);

  return (
    <div onClick={handleCheck} className={styles.checkboxContainer}>
      <div className={styles.checkbox}>
        {isChecked ? <CheckedSVG /> : <UncheckedSVG />}
      </div>
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
