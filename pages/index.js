import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TextSection from '../components/TextSection';
import ImageSection from '../components/ImageSection';
import LogoSection from '../components/LogoSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Watch Studio</title>
        <meta name="description" content="Apple Watch Studio UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LogoSection />
        <TextSection />
        <ImageSection />
      </main>
    </div>
  );
}
