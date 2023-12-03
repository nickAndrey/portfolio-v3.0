import Button from '../Button/Button';

import styles from './Header.module.scss';

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>lorem ipsum</h2>
      <Button variant="primary" type="button">
        X
      </Button>
    </header>
  );
}
