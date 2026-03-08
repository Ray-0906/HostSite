'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './FeaturesSection.module.css';

const features = [
  { title: 'Unlimited SSL security certificates', icon: 'lock' },
  { title: 'Free domain (with annual plans)', icon: 'globe' },
  { title: 'Professionally designed templates', icon: 'sparkle' },
  { title: 'Automatic back-ups and updates', icon: 'refresh' },
  { title: 'Email addresses', icon: 'mail' },
  { title: 'Unlimited web traffic', icon: 'chart' },
];

export default function FeaturesSection() {
  const ref = useScrollAnimation({ stagger: 0.08 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>Enjoy all this. At no extra cost.</h2>
          <div className={styles.grid}>
            {features.map((f) => (
              <div key={f.title} className={`${styles.item} animate-on-scroll`}>
                <div className={styles.iconWrap}>
                  <FeatureIcon type={f.icon} />
                </div>
                <span className={styles.label}>{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ type }) {
  const icons = {
    lock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    globe: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>,
    sparkle: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    refresh: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>,
    mail: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  };
  return icons[type] || icons.lock;
}
