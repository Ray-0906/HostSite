'use client';
import styles from './HostingCTACards.module.css';
import Link from 'next/link';

const cards = [
  {
    title: 'Effortless Managed WordPress Hosting',
    description:
      'Get fast, secure, and hassle-free WordPress hosting with automatic updates, daily backups, and expert support.',
    buttonText: 'See Pricing',
    href: '/wordpress-hosting',
    iconType: 'wordpress',
  },
  {
    title: 'Powerful & Scalable Cloud Hosting',
    description:
      'Get fast, scalable, and powerful cloud hosting with instant resource scaling, guaranteed uptime, and 24/7 expert support.',
    buttonText: 'See Pricing',
    href: '/cloud-hosting',
    iconType: 'cloud',
  },
];

function ShapeIcon({ type }) {
  if (type === 'wordpress') {
    return (
      <svg className={styles.shapeIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="0.5" opacity="0.15">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }
  return (
    <svg className={styles.shapeIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary-purple)" strokeWidth="0.5" opacity="0.15">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export default function HostingCTACards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <ShapeIcon type={card.iconType} />
              <div className={styles.content}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.desc}>{card.description}</p>
                <Link href={card.href} className={styles.btn}>
                  {card.buttonText}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 16 16 12 12 8" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
