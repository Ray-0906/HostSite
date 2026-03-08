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
            <h3 className={styles.cardTitle}>Hosting that drives business growth</h3>
            <p className={styles.cardSubtitle}>
              Speed-optimized hosting improves engagement and search rankings.
            </p>
            <ul className={styles.bulletList}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Sub-2.5s LCP for instant user experience.
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Near-zero CLS for a stable, professional site.
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                100ms INP for a responsive site
              </li>
            </ul>
            <div className={styles.progressBars}>
              <div className={styles.progressItem}>
                <span className={styles.progressLabel}>Core Web Vitals Passed</span>
                <div className={styles.progressTrack}>
                  <div className={`${styles.progressBar} ${styles.progressGreen}`} style={{ width: '92%' }} />
                </div>
                <span className={styles.progressValue}>92%</span>
              </div>
              <div className={styles.progressItem}>
                <span className={styles.progressLabel}>27% Bounce Rate</span>
                <div className={styles.progressTrack}>
                  <div className={`${styles.progressBar} ${styles.progressPurple}`} style={{ width: '27%' }} />
                </div>
                <span className={styles.progressValue}>27%</span>
              </div>
            </div>
          </div>

          {/* Card 3 — Bottom right */}
          <div className={`${styles.card} ${styles.cardInfra}`}>
            <h3 className={styles.cardTitle}>Secure &amp; Scalable Infrastructure</h3>
            <p className={styles.cardSubtitle}>
              Build on a foundation designed for resilience. Our infrastructure provides rock-solid
              security and flexible scalability for any demand.
            </p>
            <ul className={styles.featureChips}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Advanced DDoS Protection
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Automatic Daily Backups
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
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
