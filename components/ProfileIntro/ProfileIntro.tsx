import Links from './Links/Links';
import Photo from './Photo/Photo';
import styles from './ProfileIntro.module.scss';
import SubTitle from './SubTitle/SubTitle';
import Title from './Title/Title';

export default function ProfileIntro() {
  return (
    <section className={styles.profileIntro}>
      <Photo />
      <Title text="Hello, I'm Andrew" />
      <SubTitle>
        I&apos;m front-end developer based in Vancouver BC Canada.
        <br />
        Currently working at{' '}
        <a href='https://www.wavebi.com/' target='_blank' className={styles.linkItem}>
          Wave business intelligence Inc.
        </a>
      </SubTitle>
      <Links />
    </section>
  );
}
