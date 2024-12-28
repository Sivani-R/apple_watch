import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function LogoSection() {
  return (
    <div className={styles.logoSection}>
      <Image src="/apple_watch_logo.png" alt="Apple Watch Logo" width={150} height={50} />
    </div>
  );
}
