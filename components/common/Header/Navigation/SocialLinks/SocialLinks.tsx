import Button from '@/components/common/Button/Button';
import styles from './SocialLinks.module.scss';

type SocialLinksProps = {
  socialLinks: {
    href: string;
    label: string;
    icon: JSX.Element;
  }[];
};

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <ul className={styles['social-links']}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank">
            <Button className={styles['social-links__item']}>
              <span>{link.icon}</span>
              <small>{link.label}</small>
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
}
