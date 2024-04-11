import LogoSVG from '../../assets/logo.svg?react';
import styles from './container.module.scss';
import { ReactNode } from 'react';

interface IFormContainerProps {
  children: ReactNode;
}

export const FormContainer = ({ children }: IFormContainerProps) => {
  return (
    <div className={styles.formContainer}>
      <LogoSVG />
      {children}
    </div>
  );
};
