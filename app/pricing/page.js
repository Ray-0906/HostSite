'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { pricingPlans, comparisonFeatures } from '@/data/plans';
import PricingCard from '@/components/ui/PricingCard';
import styles from './page.module.css';

export default function PricingPage() {
  const heroRef = useScrollAnimation({ y: 50 });
  const tableRef = useScrollAnimation({ y: 30 });

  return (
    <>
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Simple, Transparent Pricing</h1>
          <p className={styles.heroSub}>No hidden fees. No surprises. Choose the plan that fits your needs and scale as you grow.</p>
        </div>
      </section>

      <section className={styles.plans}>
        <div className="container">
          <div className={styles.grid}>
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.comparison} ref={tableRef} id="more">
        <div className="container">
          <h2 className={styles.sectionTitle}>Compare our plans</h2>
          <p className={styles.sectionSub}>See at a glance what each plan costs and what you get for your money.</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Mini</th>
                  <th>Advanced</th>
                  <th>Ultimate</th>
                  <th>Sigma Cloud</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.featureName}>{row.feature}</td>
                    <td>{row.mini}</td>
                    <td>{row.advanced}</td>
                    <td>{row.ultimate}</td>
                    <td>{row.sigma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
