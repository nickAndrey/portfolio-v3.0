import Project from '@/types/project';
import Image from 'next/image';
import styles from './ImageGrid.module.scss';
import Overlay from './Overlay/Overlay';

type ImageGridProps = {
  projects: Project[];
};

export default function ImageGrid({ projects }: ImageGridProps) {
  return (
    <div className={styles.row}>
      {projects.map((project) => (
        <Overlay
          key={project.id}
          overlayText={{
            title: project.title,
            projectType: project.projectType,
          }}
        >
          <Image
            src={project.images[0].url}
            alt={project.images[0].id}
            className={styles.image}
            width={300}
            height={300}
          />
        </Overlay>
      ))}
    </div>
  );
}
