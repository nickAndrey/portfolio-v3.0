import { ReactNode } from 'react';
import styles from './SubTitle.module.scss';

type SubTitleProps = {
  children: ReactNode;
};

export default function SubTitle({ children }: SubTitleProps) {
  return <p className={styles.subTitle}>{children}</p>;
}
