import Link from 'next/link';
import styles from './Header.module.scss';

const links = [
  {
    id: 'work',
    href: '/',
    label: 'Work',
  },
  {
    id: 'about',
    href: '/',
    label: 'About Me',
  },
];

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/' className={styles.logo}>
          Logo
        </Link>

        <ul className={styles.navList}>
          {links.map(({ id, href, label }) => (
            <li key={id} className={styles.navItem}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
