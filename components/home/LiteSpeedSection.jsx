'use client';
import styles from './LiteSpeedSection.module.css';
import Image from 'next/image';

const features = [
  'Good website speed = good business results.',
  'Enjoy faster performing websites and loading times with extremely powerful LiteSpeed Web servers.',
  'Improve core web vital score, (SERP) ranks and overall user experience of your website with LiteSpeed Cache.',
  'Get a significant enhancement in server response time and reduced latency with Hostazo\'s high-speed servers powered by LiteSpeed.',
];

export default function LiteSpeedSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Achieve faster load times with<br />
            LiteSpeed web server + LSCache
          </h2> 
          <ul className={styles.list}>
            {features.map((f, i) => (
              <li key={i} className={styles.item}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
                  <circle cx="12" cy="12" r="12" fill="#28a745" />
                  <polyline points="7 12 10.5 15.5 17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/images/Gemini_Generated_Image_jl6vxrjl6vxrjl6v.png"
            alt="Hostazo Performance Graph"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
