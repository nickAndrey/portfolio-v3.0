import { ReactNode } from 'react';
import styles from './Overlay.module.scss';

type OverlayProps = {
  overlayText: {
    title: string;
    projectType: string;
  };
  children: ReactNode;
};

export default function Overlay({ children, overlayText }: OverlayProps) {
  return (
    <div className={styles['overlay-container']}>
      <div className={styles.overlay}>
        <div className={styles['overlay-text']}>
          <h2>{overlayText.title}</h2>
          <p>{overlayText.projectType}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
