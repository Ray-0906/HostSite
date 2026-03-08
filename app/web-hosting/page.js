'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { pricingPlans } from '@/data/plans';
import { webHostingFaq } from '@/data/faq';
import PricingCard from '@/components/ui/PricingCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import styles from './page.module.css';

const solutions = [
  {
    title: 'AI-Powered Site Builder',
    desc: 'Build stunning websites effortlessly with our AI-powered tools.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    title: 'Free & Easy Website Migration',
    desc: 'Our expert team migrates your site for free with zero downtime.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  },
  {
    title: '24/7 Expert Support',
    desc: 'Get help anytime with our round-the-clock professional support team.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    title: 'Automatic Daily Backups',
    desc: 'Rest easy knowing your data is backed up every day automatically.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>,
  },
];

const perfCards = [
  {
    title: 'High-speed hosting',
    desc: 'Achieve faster load times with LiteSpeed web server and LSCache for enterprise-grade performance.',
  },
  {
    title: 'Hosting that drives business growth',
    desc: 'Scale seamlessly from a personal blog to a large enterprise with our flexible hosting solutions.',
  },
  {
    title: 'Secure & Scalable Infrastructure',
    desc: 'Enterprise-grade security with free SSL, DDoS protection, and automatic backups.',
  },
];

const stats = [
  { value: 'Trusted by 20,000+', label: 'Customers worldwide' },
  { value: '99.9% Uptime', label: 'Guaranteed SLA' },
  { value: 'Starting @ ₹59/mo', label: 'Affordable Plans' },
  { value: '24/7 Expert Support', label: 'Always available' },
];

export default function WebHostingPage() {
  const heroRef = useScrollAnimation({ y: 50, duration: 1 });
  const plansRef = useScrollAnimation({ stagger: 0.1 });
  const solRef = useScrollAnimation({ stagger: 0.12 });
  const perfRef = useScrollAnimation({ stagger: 0.1 });

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Reliable Web Hosting for Everyone</h1>
          <p className={styles.heroSub}>
            Experience unmatched uptime with 24/7 Customer support team for web hosting. Choose the Perfect Web Hosting Plan for Your Business.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Free Website Migration & SSL Certificate
            </span>
            <span className={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Free Domain Registration
            </span>
          </div>
          <Link href="#pricing" className="btn btn-primary btn-pill">Explore Plans</Link>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing} id="pricing" ref={plansRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Web Hosting Plans That Fit Your Budget</h2>
          <p className={styles.sectionSub}>Experience secure, high-speed web hosting worldwide for reliable, smooth, and efficient website operation.</p>
          <div className={styles.plansGrid}>
            {pricingPlans.slice(0, 3).map((plan) => (
              <div key={plan.id} className="animate-on-scroll">
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-One Solutions */}
      <section className={styles.solutions} ref={solRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Your All-in-One Hosting Solution</h2>
          <div className={styles.solGrid}>
            {solutions.map((s) => (
              <div key={s.title} className={`${styles.solCard} animate-on-scroll`}>
                <div className={styles.solIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className={styles.perf} ref={perfRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Exceptional performance. Whatever your workload</h2>
          <div className={styles.perfGrid}>
            {perfCards.map((c) => (
              <div key={c.title} className={`${styles.perfCard} animate-on-scroll`}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.value} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Your web hosting queries answered</h2>
          <div className={styles.faqWrap}>
            <FAQAccordion items={webHostingFaq} />
          </div>
        </div>
      </section>
    </>
  );
}
