'use client';

import { use3DEffect } from '@/hooks/use3DEffect';
import Image from 'next/image';
import { useRef } from 'react';
import CodeDrawer from '../CodeDrawer/CodeDrawer';
import styles from './Photo.module.scss';

export default function Photo() {
  const photoContainerRef = useRef<HTMLDivElement>(null);
  use3DEffect(photoContainerRef);

  return (
    <div className={styles.photoContainer} ref={photoContainerRef}>
      <Image src='/photo.jpg' alt='photo' sizes='(max-width: 768px) 100vw' fill />
      <CodeDrawer className={styles['code-drawer']} />
      {/* <div className={styles['code-drawer']}>
        <div className={styles['code-drawer__top']}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
        <div className={styles.content}>
          <span>{'>'} current position: Frontend Developer</span>
          <span>{'>'} experience: 6 years</span>
          <span>{'>'} location: Canada BC</span>
        </div>
      </div> */}
    </div>
  );
}
