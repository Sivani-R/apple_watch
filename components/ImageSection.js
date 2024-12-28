import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function ImageSection() {
  return (
    <div className={styles.imageSection}>
      <Image src="/apple_watch_front.png" alt="Apple Watch" width={300} height={300} />
    </div>
  );
}
