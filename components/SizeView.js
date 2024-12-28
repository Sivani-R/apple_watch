import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/NextPage.module.css';

export default function SizeView() {
  const [currentSize, setCurrentSize] = useState('large');

  return (
    <div className={styles.sizeView}>
      <div className={styles.sizeButtons}>
        <button onClick={() => setCurrentSize('small')} className={currentSize === 'small' ? styles.active : ''}>
          42mm
        </button>
        <button onClick={() => setCurrentSize('large')} className={currentSize === 'large' ? styles.active : ''}>
          46mm
        </button>
      </div>
      <div className={styles.images}>
        <Image 
          src='/apple_watch_small.png'
          alt="Apple Watch Small"
          width={170}
          height={170}
          className={`${styles.watchImage} ${currentSize === 'small' ? styles.activeImage : ''}`}
        />
        <Image 
          src='/apple_watch_front.png'
          alt="Apple Watch Large"
          width={200}
          height={200}
          className={`${styles.watchImage} ${currentSize === 'large' ? styles.activeImage : ''}`}
        />
      </div>
    </div>
  );
}

