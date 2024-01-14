import { Fragment } from 'react';
import styles from './Works.module.scss';

type WorksProps = {
  works: {
    company: string;
    description: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string;
    url: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
};

export default function Works({ works }: WorksProps) {
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
          {works.map((work) => (
            <Fragment key={work.company}>
              <tr>
                <td>{work.company}</td>
                <td>{work.position}</td>
                <td>
                  {work.startDate} - {work.endDate}
                </td>
                <td>View Project &rarr;</td>
              </tr>
              <tr className={styles.imageRow}>
                <td colSpan={4}>
                  {/* <Image src={work.image.src} alt={work.image.alt} width={400} height={200} /> */}
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
