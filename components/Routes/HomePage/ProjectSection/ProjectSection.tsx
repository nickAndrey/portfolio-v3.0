import Path from '@/types/path';
import Project from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './ProjectSection.module.scss';

type ProjectSectionProps = {
  project?: Project;
  children?: ReactNode;
};

export default function ProjectSection({ project, children }: ProjectSectionProps) {
  if (!project) {
    return <section className={styles['section']}>{children}</section>;
  }

  return (
    <section key={project.id} className={styles['section']}>
      <h2 className={styles['title']}>{project.title}</h2>
      <p className={styles['description']}>{project.description}</p>

      <Link href={`${Path.PROJECTS}/${project.id}`} className={styles['link']}>
        <span>View the project</span>
        <span className={styles['arrow']}>&rarr;</span>
      </Link>

      <div className={styles['image-container']}>
        <Image src={project.images?.[0].url || ''} alt="project image" sizes="" fill />
      </div>
    </section>
  );
}
