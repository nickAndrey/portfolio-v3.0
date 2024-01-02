import LinkItem from './LinkItem/LinkItem';
import styles from './Links.module.scss';

const links = [
  {
    href: '#',
    text: 'Check Out My Work',
  },
  {
    href: '#',
    text: 'More About Me',
  },
];

export default function Links() {
  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <LinkItem href={link.href} text={link.text} key={index} />
      ))}
    </div>
  );
}
