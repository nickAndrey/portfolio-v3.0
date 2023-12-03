import { ReactNode } from 'react';
import styles from './Button.module.scss';

const getClassNames = (variant: string) => {
  switch (variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    default:
      return styles.primary;
  }
};

type ButtonProps = {
  children?: ReactNode;
  variant: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function Button({ children, type, onClick, variant }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={getClassNames(variant)}>
      {children}
    </button>
  );
}
