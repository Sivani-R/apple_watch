import Head from 'next/head';
import styles from '../styles/NextPage.module.css';
import WatchDetails from '../components/WatchDetails';
import LogoSection from '../components/LogoSection';

export default function NextPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Watch Details</title>
        <meta name="description" content="Apple Watch Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LogoSection />
        <WatchDetails />
      </main>
    </div>
  );
}
