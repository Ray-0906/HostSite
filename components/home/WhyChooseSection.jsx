'use client';
import Image from 'next/image';
import styles from './WhyChooseSection.module.css';

const features = [
  'Global Reach & Performance',
  'Unmetered Scalability',
  'Fortified Security Solutions',
  'Complimentary Premium Support',
];

const stats = [
  { value: '127K+', label: 'Hosted Website' },
  { value: '99.99%', label: 'Guaranteed Uptime' },
  { value: '200ms', label: 'Average Latency' },
];

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left — Image */}
        <div className={styles.imageCol}>
          <Image
            src="/images/Gemini_Generated_Image_keowbnkeowbnkeow-1.png"
            alt="Hostazo security and features graphic"
            width={550}
            height={500}
            className={styles.image}
          />
        </div>

        {/* Right — Text */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Why You Should Choose <span className={styles.highlight}>Hostazo</span>
          </h2>
          <p className={styles.description}>
            Experience unparalleled service and cutting-edge technology designed to elevate your
            online presence. We are committed to delivering excellence, reliability, and innovative
            solutions that help you succeed.
          </p>
          <ul className={styles.featureList}>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className={styles.statsBar}>
            {stats.map((s) => (
              <div key={s.value} className={styles.statItem}>
                <h3 className={styles.statNumber}>{s.value}</h3>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
