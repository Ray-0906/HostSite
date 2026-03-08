'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './ExpertSupport.module.css';

const points = [
  'Access our dedicated support team 24/7 via live chat and email for prompt assistance.',
  'Experience rapid response times with most issues resolved within minutes, not hours.',
  'Our agents provide clear and concise communication in over 8 languages, ensuring you\'re always understood.',
];

export default function ExpertSupport() {
  const ref = useScrollAnimation({ y: 40 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Expert Support: We&apos;re Always Here to Help Your Business Grow</h2>
        <div className={styles.grid}>
          <div className={styles.pointsList}>
            {points.map((p, i) => (
              <div key={i} className={styles.point}>
                <span className={styles.check}>✓</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaCards}>
            <div className={styles.ctaCard}>
              <h3>Effortless Managed WordPress Hosting</h3>
              <p>Optimized hosting built specifically for WordPress sites, delivering top-tier speed and security.</p>
              <Link href="/wordpress-hosting" className="btn btn-primary">Learn More</Link>
            </div>
            <div className={styles.ctaCard}>
              <h3>Powerful & Scalable Cloud Hosting</h3>
              <p>Enterprise-grade cloud infrastructure that scales automatically with your business needs.</p>
              <Link href="/cloud-hosting" className="btn btn-outline">Explore Cloud</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
