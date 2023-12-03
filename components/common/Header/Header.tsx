'use client';

import { useRef, useState } from 'react';
import Button from '../Button/Button';

import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import styles from './Header.module.scss';

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOutsideClickHandler(ref, () => setIsDropdownOpen(false));

  return (
    <header ref={ref} className={styles.header}>
      <h2 className={styles.title}>lorem ipsum</h2>
      <Button variant="primary" type="button" onClick={() => setIsDropdownOpen((prevState) => !prevState)}>
        X
      </Button>
      {isDropdownOpen && <div className={styles.dropdown}>test</div>}
    </header>
  );
}
