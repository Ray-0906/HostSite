'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.content}>
        <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10Z"/><path d="M7.5 9.99967L9.16667 11.6663L12.5 8.33301" strokeWidth="1.5"/></svg>
        <span className={styles.text}>
          Grab Our Deal: <strong>Upto 60% off</strong> on Hosting
        </span>
        <Link href="/web-hosting" className={styles.cta}>
          Grab Deal Now
        </Link>
      </div>
      <button className={styles.close} onClick={() => setVisible(false)} aria-label="Close">×</button>
    </div>
  );
}
