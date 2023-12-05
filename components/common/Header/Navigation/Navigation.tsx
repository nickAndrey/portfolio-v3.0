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
    href: '/projects',
    label: 'Projects',
  },
];

const socialLinks = [
  {
    href: 'mailto:andrew.husiev@gmail.com',
    label: 'Email me',
    icon: <EmailIcon />,
  },
  {
    href: 'tel:+17789553606',
    label: 'Call me',
    icon: <PhoneIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/andrew-husiev',
    label: 'Linkedin',
    icon: <LinkedinIcon />,
  },
  {
    href: 'https://github.com/nickAndrey',
    label: 'Github',
    icon: <GithubIcon />,
  },
  {
    href: 'https://www.upwork.com/freelancers/~01f48b7f790798bfee?viewMode=1',
    label: 'Upwork',
    icon: <UpworkIcon />,
  },
  {
    href: '/api/get-cv',
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
