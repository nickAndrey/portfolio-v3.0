import CloseIcon from '@/public/icons/close.svg';
import MenuIcon from '@/public/icons/menu.svg';
import Button from '../../Button/Button';
import NavigationContent from '../NavigationContent/NavigationContent';

import styles from './MobileNavigation.module.scss';

type MobileNavigationProps = {
  onToggleDropdown: () => void;
  isDropdownOpen: boolean;
};

export default function MobileNavigation({ onToggleDropdown, isDropdownOpen }: MobileNavigationProps) {
  return (
    <div className={styles['mobile-menu']}>
      <Button className={styles['toggle-menu-button']} onClick={onToggleDropdown}>
        {isDropdownOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <NavigationContent />
        </div>
      )}
    </div>
  );
}
