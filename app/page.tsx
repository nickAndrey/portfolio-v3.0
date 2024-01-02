import Container from '@/components/Container/Container';
import ProfileIntro from '@/components/ProfileIntro/ProfileIntro';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <ProfileIntro />
      </Container>
    </main>
  );
}
