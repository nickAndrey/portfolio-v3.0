import Links from './Links/Links';
import Photo from './Photo/Photo';
import styles from './ProfileIntro.module.scss';
import SubTitle from './SubTitle/SubTitle';
import Title from './Title/Title';

type ProfileIntroProps = {
  title: string;
  subTitle: string;
  currentCompany: {
    name: string;
    url: string;
  };
};

export default function ProfileIntro({ title, subTitle, currentCompany }: ProfileIntroProps) {
  return (
    <section className={styles.profileIntro}>
      <Photo />
      <Title text={title} />
      <SubTitle>
        {subTitle}
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
