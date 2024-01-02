import Link from 'next/link';
import styles from './LinkItem.module.scss';

type LinkItemProps = {
  href: string;
  text: string;
};

export default function LinkItem({ href, text }: LinkItemProps) {
  return (
    <Link href={href} className={styles.linkItem}>
      {text}
    </Link>
  );
}
