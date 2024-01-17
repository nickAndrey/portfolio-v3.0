import Project from '@/types/project';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from './Table.module.scss';

type TableProps = {
  projects: Project[];
};

export default function Table({ projects }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Period</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <Fragment key={project.id}>
            <tr>
              <td>{project.title}</td>
              <td>{project.position}</td>
              <td>
                {project.startDate} - {project.endDate}
              </td>
              <td>View Project &rarr;</td>
            </tr>
            <tr className={styles.imageRow}>
              <td colSpan={4}>
                <Image
                  src={project.images[0].url}
                  alt={project.images[0].id}
                  width={400}
                  height={200}
                />
              </td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
