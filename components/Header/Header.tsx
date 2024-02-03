import Path from '@/types/path';
import Link from 'next/link';
import Container from '../Container/Container';
import styles from './Header.module.scss';

const links = [
  {
    id: 'home',
    href: Path.Home,
    label: 'Home',
  },
  {
    id: 'portfolio',
    href: Path.Portfolio,
    label: 'Portfolio',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link href='/' className={styles.author}>
            Andrew Husiev
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
      </Container>
    </header>
  );
}
