import Image from 'next/image';
import { Fragment } from 'react';
import styles from './Works.module.scss';

const worksData = [
  {
    company: 'Mrkter',
    position: 'Front-end developer',
    period: 'feb 2020 - present',
    project: 'project',
    imgSrc:
      'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
  },
  {
    company: 'Wave BI',
    position: 'Front-end developer',
    period: 'mar 2019 - feb 2020',
    project: 'project',
    imgSrc:
      'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
  },
  {
    company: 'Fudo',
    position: 'Front-end developer',
    period: 'feb 2018 - mar 2019',
    project: 'project',
    imgSrc:
      'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
  },
];

type WorksProps = {};

export default function Works({}: WorksProps) {
  return (
    <section className={styles.section}>
      <h2>Works</h2>

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
          {worksData.map((work) => (
            <Fragment key={work.company}>
              <tr>
                <td>{work.company}</td>
                <td>{work.position}</td>
                <td>{work.period}</td>
                <td>View Project &rarr;</td>
              </tr>
              <tr className={styles.imageRow}>
                <td colSpan={4}>
                  <Image src={work.imgSrc} alt={work.imgAlt} width={400} height={200} />
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
