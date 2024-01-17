import Project from '@/types/project';
import ImageGrid from '../ImageGrid/ImageGrid';
import styles from './Works.module.scss';

type WorksProps = {
  projects: Project[];
};

export default function Works({ projects }: WorksProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Works</h2>
      <ImageGrid projects={projects} />
    </section>
  );
}
