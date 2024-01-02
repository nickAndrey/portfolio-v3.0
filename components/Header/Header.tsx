import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container/Container';
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

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link href='/' className={styles.logo}>
            <Image src='/logo.svg' alt='Logo' width={70} height={70} />
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
