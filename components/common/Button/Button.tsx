import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, type, onClick, className }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
}
