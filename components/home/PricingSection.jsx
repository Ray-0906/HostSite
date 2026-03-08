'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { pricingPlans } from '@/data/plans';
import PricingCard from '@/components/ui/PricingCard';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const ref = useScrollAnimation({ stagger: 0.1 });

  return (
    <section className={styles.section} id="plans" ref={ref}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Web Hosting Plans That Fit Your Budget</h2>
        <p className={styles.sub}>
          Experience ultra-fast loading speeds globally for seamless performance and reliability anywhere in the world.
        </p>
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="animate-on-scroll">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
        <div className={styles.compare}>
          <Link href="#more" className="btn btn-outline btn-pill">Compare Plans</Link>
        </div>
        <p className={styles.note}>
          All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan.
        </p>
      </div>
    </section>
  );
}
