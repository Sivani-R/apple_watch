import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function TextSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/next-page');
  };

  return (
    <div className={styles.textSection}>
      <h1>Apple Watch Studio</h1>
      <h2>Choose a case.</h2>
      <h2>Pick a band.</h2>
      <h2>Create your own style.</h2>
      <button className={styles.ctaButton} onClick={handleClick}>Get started</button>
    </div>
  );
}


