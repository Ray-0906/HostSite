'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './TabbedServices.module.css';

const tabs = [
  {
    title: 'Fast & Reliable Performance',
    heading: 'High-speed servers and 99.9% uptime guarantee ensure your website runs smoothly and is always accessible.',
    shapeImg: '/images/services_shape01.webp',
    thumbImg: '/images/services_img01.webp',
  },
  {
    title: 'All-in-One Management',
    heading: 'Seamless domain registration, hosting, email, and DNS control in one easy-to-use platform.',
    shapeImg: '/images/services_shape02.webp',
    thumbImg: '/images/services_img02.webp',
  },
  {
    title: 'Robust Security & Support',
    heading: 'Free SSL, DDoS protection, and 24/7 expert support keep your site safe and running without issues.',
    shapeImg: '/images/services_shape03.webp',
    thumbImg: '/images/services_img03.webp',
  },
];

export default function TabbedServices() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Tab navigation */}
        <div className={styles.tabNav}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.tabBtn} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={styles.tabContent}>
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={`${styles.tabPane} ${active === i ? styles.tabPaneActive : ''}`}
            >
              <div className={styles.contentGrid}>
                <div className={styles.textCol}>
                  <h2 className={styles.heading}>{tab.heading}</h2>
                  <a href="/contact-us" className={styles.ctaBtn}>
                    Get in Touch
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
                <div className={styles.imageCol}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={tab.shapeImg}
                      alt=""
                      width={400}
                      height={400}
                      className={styles.shapeImg}
                    />
                    <Image
                      src={tab.thumbImg}
                      alt={tab.title}
                      width={500}
                      height={400}
                      className={styles.thumbImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
