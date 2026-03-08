'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { engineTabs } from '@/data/plans';
import styles from './FindEngineSection.module.css';

export default function FindEngineSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollAnimation({ y: 40, duration: 0.9 });
  const tab = engineTabs[activeTab];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Find Your Perfect Engine</h2>
        <p className={styles.sub}>Select your goal to instantly see the recommended configuration.</p>

        <div className={styles.tabs}>
          {engineTabs.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.tab} ${activeTab === i ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <span className={styles.badge}>{tab.badge}</span>
            <h3 className={styles.cardTitle}>{tab.title}</h3>
            <p className={styles.cardDesc}>{tab.desc}</p>
            <div className={styles.featureList}>
              {tab.features.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardRight}>
            <div className={styles.priceCard}>
              <span className={styles.priceAmount}>{tab.currency}{tab.price}.00</span>
              <span className={styles.pricePeriod}>{tab.period}</span>
              <Link href={tab.href} className={styles.cta}>{tab.cta}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
