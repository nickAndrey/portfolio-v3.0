import Intro from '@/types/intro';
import Links from './Links/Links';
import Photo from './Photo/Photo';
import styles from './ProfileIntro.module.scss';
import SubTitle from './SubTitle/SubTitle';
import Title from './Title/Title';

type ProfileIntroProps = {
  intro: Intro;
};

export default function ProfileIntro({ intro }: ProfileIntroProps) {
  const { title, supTitle, currentCompany } = intro;

  return (
    <section className={styles.profileIntro}>
      <Photo />
      <Title text={title} />
      <SubTitle>
        {supTitle}
        <br />
        Currently working at{' '}
        <a href={currentCompany.url} target='_blank' className={styles.linkItem}>
          {currentCompany.name}
        </a>
      </SubTitle>
      <Links />
    </section>
  );
}
