'use client';
import Image from 'next/image';
import styles from './FeaturedOn.module.css';

const logos = [
  { src: '/images/hindustan-metro.png', alt: 'Hindustan Metro' },
  { src: '/images/google-news.png', alt: 'Google News' },
  { src: '/images/dailyhunt.png', alt: 'DailyHunt' },
];

export default function FeaturedOn() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h4 className={styles.heading}>Proudly Featured On</h4>
        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={95}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
