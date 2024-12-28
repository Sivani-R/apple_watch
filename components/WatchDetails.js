import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/NextPage.module.css';
import SizeView from './SizeView';

export default function WatchDetails() {
  const [view, setView] = useState('front');
  const [showSizes, setShowSizes] = useState(false);

  const toggleView = () => {
    setView(view === 'front' ? 'side' : 'front');
  };

  const toggleSizes = () => {
    setShowSizes(!showSizes);
  };

  return (
    <div className={styles.watchDetails}>
      {showSizes ? (
        <SizeView />
      ) : (
        <Image 
          src={view === 'front' ? '/apple_watch_front.png' : '/apple_watch_side.png'}
          alt="Apple Watch"
          width={300}
          height={300}
          className={styles.watchImage}
        />
      )}
      <div className={styles.description}>
        <p>APPLE WATCH SERIES 10</p>
        <p>46mm Jet Black Aluminum Case with Black Solo Loop</p>
        <p>From $429</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={toggleView}>
          {view === 'front' ? 'Side View' : 'Front View'}
        </button>
        <button className={styles.button} onClick={toggleSizes}>Size</button>
        <button className={styles.button}>Case</button>
        <button className={styles.button}>Band</button>
      </div>
    </div>
  );
}
