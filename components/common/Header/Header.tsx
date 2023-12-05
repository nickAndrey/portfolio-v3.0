'use client';

import CloseIcon from '@/public/icons/close.svg';
import MenuIcon from '@/public/icons/menu.svg';
import { useRef, useState } from 'react';

import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOutsideClickHandler(ref, () => setIsDropdownOpen(false));

  const onButtonClick = () => setIsDropdownOpen((prevState) => !prevState);

  return (
    <header ref={ref} className={styles.header}>
      <Button className={styles['toggle-menu-button']} onClick={onButtonClick}>
        {isDropdownOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <Navigation />
        </div>
      )}
    </header>
  );
}
