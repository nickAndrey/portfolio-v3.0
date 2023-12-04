import CvIcon from '@/public/icons/document-pdf.svg';
import EmailIcon from '@/public/icons/email.svg';
import GithubIcon from '@/public/icons/github.svg';
import LinkedinIcon from '@/public/icons/linkedin.svg';
import PhoneIcon from '@/public/icons/phone.svg';
import UpworkIcon from '@/public/icons/upwork.svg';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import SocialLinks from './SocialLinks/SocialLinks';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'Projects',
  },
];

const socialLinks = [
  {
    href: 'mailto:',
    label: 'Email me',
    icon: <EmailIcon />,
  },
  {
    href: 'tel:',
    label: 'Call me',
    icon: <PhoneIcon />,
  },
  {
    href: '',
    label: 'Linkedin',
    icon: <LinkedinIcon />,
  },
  {
    href: '',
    label: 'Github',
    icon: <GithubIcon />,
  },
  {
    href: '',
    label: 'Upwork',
    icon: <UpworkIcon />,
  },
  {
    href: '',
    label: 'CV',
    icon: <CvIcon />,
  },
];

type NavigationProps = {};

export default function Navigation({}: NavigationProps) {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation-list']}>
        {links.map((link, index) => (
          <li key={link.href}>
            <Link href={link.href}>
              <div className={styles['navigation-list-item']}>
                {link.label}
                <small className={styles['navigation-list-link__index']}>{`0${index + 1}`}</small>
              </div>
            </Link>
          </li>
        ))}

        <li>
          <div className={styles['navigation-list-item']}>
            <SocialLinks socialLinks={socialLinks} />
          </div>
        </li>
      </ul>
    </nav>
  );
}
