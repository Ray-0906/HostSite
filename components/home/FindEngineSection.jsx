'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { engineTabs } from '@/data/plans';
import styles from './FindEngineSection.module.css';

export default function FindEngineSection() {
  const [activeTab, setActiveTab] = useState(0);
  const navRef = useRef(null);
  const gliderRef = useRef(null);
  const btnRefs = useRef([]);

  const moveGlider = useCallback((index) => {
    const btn = btnRefs.current[index];
    const nav = navRef.current;
    if (!btn || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const left = btnRect.left - navRect.left;
    if (gliderRef.current) {
      gliderRef.current.style.width = `${btnRect.width}px`;
      gliderRef.current.style.transform = `translateX(${left}px)`;
    }
  }, []);

  useEffect(() => {
    moveGlider(activeTab);
    const handleResize = () => moveGlider(activeTab);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab, moveGlider]);

  const switchTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerBlock}>
        <h2 className={styles.title}>Find Your Perfect Engine</h2>
        <p className={styles.subtitle}>Select your goal to instantly see the recommended configuration.</p>
      </div>

      <div className={styles.navWrapper}>
        <div className={styles.navContainer} ref={navRef}>
          <div className={styles.glider} ref={gliderRef}></div>
          {engineTabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (btnRefs.current[i] = el)}
              className={`${styles.navBtn} ${activeTab === i ? styles.navBtnActive : ''}`}
              onClick={() => switchTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stage}>
        {engineTabs.map((tab, i) => (
          <div
            key={tab.id}
            className={`${styles.panel} ${activeTab === i ? styles.panelActive : ''}`}
          >
            <div className={styles.cardContent}>
              <span className={styles.badge}>{tab.badge}</span>
              <h3 className={styles.planHeading}>{tab.title}</h3>
              <p className={styles.planDesc}>{tab.desc}</p>
              <div className={styles.specs}>
                {tab.features.map((f, fi) => (
                  <div key={fi} className={styles.specItem}>
                    <span className={styles.tick}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.cardVisual}>
              <div className={`${styles.blob} ${styles.blob1}`}></div>
              <div className={`${styles.blob} ${styles.blob2}`}></div>
              <div className={styles.priceTag}>
                <div className={styles.priceBig}>{tab.currency}{tab.price}.00</div>
                <div className={styles.priceSub}>{tab.period}</div>
              </div>
              <Link href={tab.href} className={styles.ctaBtn}>{tab.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
