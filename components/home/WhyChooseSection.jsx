'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './WhyChooseSection.module.css';

const reasons = [
  { title: 'Global Reach & Performance', desc: 'High-speed servers and 99.9% uptime guarantee ensure your website runs smoothly and is always accessible.' },
  { title: 'Unmetered Scalability', desc: 'Seamless domain registration, hosting, email, and DNS control in one easy-to-use platform.' },
  { title: 'Fortified Security Solutions', desc: 'Free SSL, DDoS protection, and 24/7 expert support keep your site safe and running without issues.' },
];

const stats = [
  { value: '127K+', label: 'Hosted Website' },
  { value: '99.99%', label: 'Guaranteed Uptime' },
  { value: '200ms', label: 'Average Latency' },
];

export default function WhyChooseSection() {
  const ref = useScrollAnimation({ stagger: 0.1 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        {/* Info Cards */}
        <div className={styles.cardsGrid}>
          {reasons.map((r) => (
            <div key={r.title} className={`${styles.infoCard} animate-on-scroll`}>
              <h3 className={styles.infoTitle}>{r.title}</h3>
              <p className={styles.infoDesc}>{r.desc}</p>
              <Link href="/contact-us" className={styles.infoLink}>Get in Touch →</Link>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className={styles.whySection}>
          <h2 className={styles.heading}>Why You Should Choose Hostazo</h2>
          <p className={styles.sub}>
            Experience unparalleled service and cutting-edge technology designed to elevate your online presence. We are committed to delivering excellence, reliability, and innovative solutions that help you succeed.
          </p>
          <ul className={styles.checkList}>
            <li><CheckIcon /> Global Reach & Performance</li>
            <li><CheckIcon /> Unmetered Scalability</li>
            <li><CheckIcon /> Fortified Security Solutions</li>
            <li><CheckIcon /> Complimentary Premium Support</li>
          </ul>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.value} className={`${styles.stat} animate-on-scroll`}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
