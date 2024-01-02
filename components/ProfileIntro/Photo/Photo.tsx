import Image from 'next/image';
import styles from './Photo.module.scss';

export default function Photo() {
  return (
    <div className={styles.photoContainer}>
      <Image src='/photo.jpg' alt='photo' sizes='100vw' fill />
    </div>
  );
}
