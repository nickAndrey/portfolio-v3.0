import { ReactNode } from 'react';
import styles from './SupTitle.module.scss';

type SupTitleProps = {
  children: ReactNode;
};

export default function SupTitle({ children }: SupTitleProps) {
  return <p className={styles.supTitle}>{children}</p>;
}
