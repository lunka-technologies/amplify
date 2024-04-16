import styles from './chip.module.scss';
import classNames from 'classnames';

interface IChipProps {
  children: string;
  className?: string;
  color?: 'violet' | 'red';
}

export const Chip = ({ children, color = 'violet', className }: IChipProps) => {
  return (
    <span
      className={classNames([className, styles.chip, styles[`color_${color}`]])}
    >
      {children}
    </span>
  );
};
