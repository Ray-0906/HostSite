'use client';
import styles from './DashboardGrid.module.css';
import Image from 'next/image';

export default function DashboardGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Card 1 — Full-width top, purple gradient */}
          <div className={`${styles.card} ${styles.cardHighSpeed}`}>
            <svg className={styles.cardTopIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ color: '#fff', opacity: 0.8 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <div className={styles.highSpeedContent}>
              <h3 className={styles.highSpeedTitle}>High-speed hosting</h3>
              <p className={styles.highSpeedDesc}>
                Boost your site&apos;s loading speed with advanced LiteSpeed servers and LSCache
                technology, delivering unparalleled performance.
              </p>
              <a href="#plans" className={styles.btnGetStarted}>
                Get Started
              </a>
            </div>
            <div className={styles.highSpeedImage}>
              <Image
                src="/images/lightning-bolt.png"
                alt="3D High speed lightning bolt illustration"
                width={280}
                height={280}
                className={styles.boltImage}
              />
            </div>
          </div>

          {/* Card 2 — Bottom left */}
          <div className={`${styles.card} ${styles.cardGrowth}`}>
            <svg className={styles.cardTopIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <h3 className={styles.cardTitle}>Hosting that drives business growth</h3>
            <p className={styles.cardSubtitle}>
              Speed-optimized hosting improves engagement and search rankings.
            </p>
            <ul className={styles.bulletList}>
              <li>Sub-2.5s LCP for instant user experience.</li>
              <li>Near-zero CLS for a stable, professional site.</li>
              <li>100ms INP for a responsive site</li>
            </ul>
            <div className={styles.progressBars}>
              <div className={styles.progressItem}>
                <div className={`${styles.progressBarIcon} ${styles.progressBarIconGreen}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div className={styles.progressBarContent}>
                  <div className={styles.progressBarLabel}>
                    <span className={styles.progressLabelText}>Core Web Vitals Passed</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressBar} ${styles.progressGreen}`} style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
              <div className={styles.progressItem}>
                <div className={`${styles.progressBarIcon} ${styles.progressBarIconPurple}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
                </div>
                <div className={styles.progressBarContent}>
                  <div className={styles.progressBarLabel}>
                    <span className={styles.progressLabelText}>27% Bounce Rate</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressBar} ${styles.progressPurple}`} style={{ width: '27%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Bottom right */}
          <div className={`${styles.card} ${styles.cardInfra}`}>
            <svg className={styles.cardTopIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className={styles.cardTitle}>Secure &amp; Scalable Infrastructure</h3>
            <p className={styles.cardSubtitle}>
              Build on a foundation designed for resilience. Our infrastructure provides rock-solid
              security and flexible scalability for any demand.
            </p>
            <ul className={styles.featureChips}>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Advanced DDoS Protection
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Automatic Daily Backups
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Easy One-Click Scaling
              </li>
            </ul>
            <div className={styles.infraImageWrap}>
              <Image
                src="/images/uptime-speedometer.png"
                alt="Speedometer showing uptime"
                width={230}
                height={180}
                className={styles.infraImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
