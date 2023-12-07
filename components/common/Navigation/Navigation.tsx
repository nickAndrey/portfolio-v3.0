'use client';

import useMedia from '@/hooks/useMedia';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import MediaQuery from '@/types/mediaQuery';
import { useEffect, useRef, useState } from 'react';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useMedia(MediaQuery.xl);
  const [isMediaDetermined, setIsMediaDetermined] = useState(false);

  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOutsideClickHandler(ref, () => setIsDropdownOpen(false));

  const onToggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);
  const onExpandNavigation = () => setIsNavigationExpanded((prevState) => !prevState);

  useEffect(() => {
    setIsMediaDetermined(true);
  }, [isDesktop]);

  return (
    <nav className={styles.navigation} ref={ref} id="navigation">
      {isMediaDetermined ? (
        isDesktop ? (
          <DesktopNavigation onExpandNavigation={onExpandNavigation} isNavigationExpanded={isNavigationExpanded} />
        ) : (
          <MobileNavigation onToggleDropdown={onToggleDropdown} isDropdownOpen={isDropdownOpen} />
        )
      ) : null}
    </nav>
  );
}
