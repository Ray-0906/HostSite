'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* Left Card - Light Purple */}
        <div className={styles.heroCard}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Crush Limits with Next-Level <span className={styles.highlight}>Domain &</span>{'\n'}Web Hosting
            </h1>
            <p className={styles.subtitle}>
              Elevate your presence with premium domains and cutting-edge web hosting solutions.
            </p>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>Start with ₹59.00/mo</span>
              <span className={styles.regularPrice}>Regular ₹159.00/mo</span>
            </div>
            <Link href="/web-hosting" className={styles.ctaBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Get Started
            </Link>
          </div>

          <div className={styles.visualContent}>
            {/* Browser Mockup */}
            <div className={styles.browserMockup}>
              <div className={styles.browserBar}>
                <span className={`${styles.dot} ${styles.dotRed}`}></span>
                <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                <span className={styles.urlBar}></span>
              </div>
              <Image 
                src="/images/Gemini_Generated_Image_w1tox0w1tox0w1to-1.png" 
                alt="Website Preview" 
                fill 
                className={styles.browserImage}
              />
            </div>

            {/* Floating Badges */}
            <div className={`${styles.badge} ${styles.uptimeBadge}`}>
              <div className={styles.badgeIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className={styles.badgeValue}>99.9%</span>
                <br/>
                <span className={styles.badgeLabel}>Server Uptime</span>
              </div>
            </div>
            <div className={`${styles.badge} ${styles.speedBadge}`}>
              <div className={styles.badgeIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className={styles.badgeValue}>85%</span>
                <br/>
                <span className={styles.badgeLabel}>Faster Website</span>
              </div>
            </div>
            <div className={`${styles.badge} ${styles.supportBadge}`}>
              <div className={styles.badgeIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div>
                <span className={styles.badgeValue}>24/7</span>
                <br/>
                <span className={styles.badgeLabel}>Instant Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Dark Purple */}
        <div className={styles.domainCard}>
          <div className={styles.bgShape1}></div>
          <div className={styles.bgShape2}></div>
          <h3 className={styles.domainTitle}>Dominate the Web with Unique Domain</h3>
          
          <div className={styles.domainMockup}>
            <div className={styles.domainBrowserBar}>
              <span className={`${styles.dot} ${styles.dotRed}`} style={{opacity: 0.7}}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`} style={{opacity: 0.7}}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`} style={{opacity: 0.7}}></span>
            </div>
            <div className={styles.domainSearchBody}>
              <div className={styles.domainInput}>
                <span className={styles.domainText}>www.yourdomain</span>
                <span className={styles.domainCheck}>✓</span>
              </div>
              <div className={styles.tldGrid}>
                <span className={styles.tldTag}>.com</span>
                <span className={styles.tldTag}>.net</span>
                <span className={styles.tldTag}>.org</span>
                <span className={styles.tldTag}>.info</span>
              </div>
            </div>
          </div>

          <Link href="/domain" className={styles.domainBtn}>Get Started</Link>
        </div>
      </div>
    </section>
  );
}
