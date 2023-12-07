'use client';

import Button from '@/components/common/Button/Button';
import Project from '@/types/project';
import styles from './HomePage.module.scss';
import ProjectSection from './ProjectSection/ProjectSection';

const scrollToSection = (sectionNumber: number) => {
  try {
    const section = document.querySelector(`section:nth-child(${sectionNumber})`);
    if (!section) {
      console.warn(`Section ${sectionNumber} not found.`);
      return;
    }

    const { top } = section.getBoundingClientRect();
    const scrollPosition = window.scrollY + top;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  } catch (error) {
    console.error(`Failed to scroll to section ${sectionNumber}:`, error);
  }
};

type HomePageProps = {
  projects: Project[];
};

export default function HomePage({ projects }: HomePageProps) {
  return (
    <>
      <ProjectSection>
        <h2 className={styles['title']}>
          Hi, I&apos;m Andrew, web developer with expertise in React.js, Next.js, Node.js, Nest.js, Express and MongoDB.
        </h2>
        <p className={styles['subtitle']}>
          I&apos;m excited about the possibilities that each new project brings. If you have a web development challenge
          or if you&apos;re simply interested in discussing ideas, feel free to reach out. Let&apos;s create something
          amazing together!
        </p>

        <Button className={styles['scroll-to-next-section-button']} onClick={() => scrollToSection(2)}>
          &darr;
        </Button>
      </ProjectSection>

      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </>
  );
}
