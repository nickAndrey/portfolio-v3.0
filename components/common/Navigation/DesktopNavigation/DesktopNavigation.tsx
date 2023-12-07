import classNames from 'classnames/bind';
import NavigationContent from '../NavigationContent/NavigationContent';
import styles from './DesktopNavigation.module.scss';

const bindedStyles = classNames.bind(styles);

type DesktopNavigationProps = {
  isNavigationExpanded: boolean;
  onExpandNavigation: () => void;
};

export default function DesktopNavigation({ isNavigationExpanded, onExpandNavigation }: DesktopNavigationProps) {
  return (
    <div onClick={onExpandNavigation} className={bindedStyles(styles.navigation, { expanded: isNavigationExpanded })}>
      <div
        className={bindedStyles({
          expandedContent: isNavigationExpanded,
          collapsedContent: !isNavigationExpanded,
        })}
      >
        {isNavigationExpanded ? <NavigationContent /> : 'Menu'}
      </div>
    </div>
  );
}
