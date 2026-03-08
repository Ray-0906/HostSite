'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './IntelligentStack.module.css';

const features = [
  {
    title: 'Prompt to Product.',
    desc: 'Describe your vision. Our AI writes the code, designs the layout, and publishes it instantly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Proactive Defense.',
    desc: 'Continuous monitoring detects anomalies and patches vulnerabilities before they affect your site.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Intelligent Load.',
    desc: 'Resources expand automatically in real-time, ensuring optimal performance during traffic surges.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
  },
];

export default function IntelligentStack() {
  const ref = useScrollAnimation({ stagger: 0.12 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>The Intelligent Stack</h2>
        <p className={styles.sub}>Next-generation infrastructure, simplified.</p>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={`${styles.card} animate-on-scroll`}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
