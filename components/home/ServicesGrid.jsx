'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './ServicesGrid.module.css';

const services = [
  { title: 'Web Hosting', desc: 'Secure, affordable reliable service.', href: '/web-hosting', icon: '/images/hosting_icon01.svg' },
  { title: 'WordPress Hosting', desc: 'Optimized for the most popular CMS.', href: '/wordpress-hosting', icon: '/images/hosting_icon02.svg' },
  { title: 'Cloud Hosting', desc: 'Scalable resources for business growth.', href: '/cloud-hosting', icon: '/images/hosting_icon03.svg' },
  { title: 'Cpanel Reseller Hosting', desc: 'Perfect for your own label business.', href: '/cpanel-reseller-hosting', icon: '/images/hosting_icon04.svg' },
  { title: 'VPS Hosting', desc: 'More power and your own control.', href: '/vps-hosting', icon: '/images/hosting_icon05.svg' },
];

export default function ServicesGrid() {
  const ref = useScrollAnimation({ stagger: 0.08 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>Reliable Hosting Services</p>
        <div className={styles.grid}>
          <div className={styles.servicesList}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} className={`${styles.serviceItem} animate-on-scroll`}>
                <div className={styles.icon}>
                  <Image src={s.icon} alt={s.title} width={28} height={28} />
                </div>
                <div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainInner}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3 className={styles.domainName}>www.yourdomain.com</h3>
              <div className={styles.tldChips}>
                <span className={styles.chip}>.com</span>
                <span className={styles.chip}>.net</span>
                <span className={styles.chip}>.info</span>
                <span className={styles.chip}>.org</span>
              </div>
              <Link href="/domain" className={styles.domainBtn}>Find Your Domain</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
