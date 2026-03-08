'use client';
import Link from 'next/link';
import styles from './PricingCard.module.css';

export default function PricingCard({ plan }) {
  return (
    <div className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}>
      {plan.isPopular && <span className={styles.badge}>Most Popular</span>}
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.subtitle}>{plan.subtitle}</p>
      <div className={styles.priceWrap}>
        <span className={styles.currency}>{plan.currency}</span>
        <span className={styles.price}>{plan.price}</span>
        <span className={styles.period}>/{plan.period}</span>
      </div>
      <Link href="/web-hosting" className={styles.cta}>
        {plan.cta}
      </Link>
      <p className={styles.renewal}>
        Renews at {plan.currency}{plan.originalPrice}.00/{plan.period}. Cancel anytime.
      </p>
      <ul className={styles.features}>
        {plan.features.map((f, i) => (
          <li key={i}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
