'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './page.module.css';

const stats = [
  { value: '29K+', label: 'Active Users' },
  { value: '127K+', label: 'Hosted Websites' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '200ms', label: 'Avg Latency' },
];

const steps = [
  { num: '01', title: 'Backup & Prepare', desc: 'We create a full backup of your existing site before starting the migration process.' },
  { num: '02', title: 'Transfer & Configure', desc: 'Our team transfers all your files, databases, and emails to our servers with zero data loss.' },
  { num: '03', title: 'Test & Launch', desc: 'We thoroughly test everything and update DNS records for a seamless launch.' },
];

export default function AboutPage() {
  const heroRef = useScrollAnimation({ y: 50, duration: 1 });
  const stepsRef = useScrollAnimation({ stagger: 0.15 });

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Vision-Driven Hosting for a Seamless Digital Experience</h1>
          <p className={styles.heroSub}>
            At the heart of our hosting solutions lies a clear vision: to create seamless, secure, and high-performance digital experiences for every website we power.
          </p>
          <Link href="/#plans" className="btn btn-primary btn-pill">Get Started</Link>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={`container ${styles.missionContent}`}>
          <h2 className={styles.sectionTitle}>Powering the Web with Speed, Security, & Reliability</h2>
          <p className={styles.sectionSub}>
            Our mission is to empower our customers by delivering exceptionally fast, reliable, and secure web hosting. We are committed to demystifying the technical challenges of running a website.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.value} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Migration Steps */}
      <section className={styles.stepsSection} ref={stepsRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Seamless website migration with ease.</h2>
          <p className={styles.sectionSub}>We handle everything so you can focus on your business.</p>
          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <div key={s.num} className={`${styles.stepCard} animate-on-scroll`}>
                <span className={styles.stepNum}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className={styles.bizSection}>
        <div className={`container ${styles.bizContent}`}>
          <h2 className={styles.sectionTitle}>Business Information</h2>
          <div className={styles.bizCard}>
            <div className={styles.bizItem}>
              <strong>Company</strong>
              <span>Hostazo Web Services</span>
            </div>
            <div className={styles.bizItem}>
              <strong>GSTIN</strong>
              <span>23HBAPR3713R1Z8</span>
            </div>
            <div className={styles.bizItem}>
              <strong>Support</strong>
              <span>support@hostazo.com</span>
            </div>
            <div className={styles.bizItem}>
              <strong>Location</strong>
              <span>India</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
