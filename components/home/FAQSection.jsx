'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { homeFaq } from '@/data/faq';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const ref = useScrollAnimation({ y: 30 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Your web hosting queries answered</h2>
            <p className={styles.sub}>
              Got questions about our web hosting services? You&apos;ll find answers to the most common queries here.
            </p>
            <div className={styles.helpCard}>
              <h4>Have more questions?</h4>
              <p>Get instant, personalized answers about our web hosting plans, features, or anything else you need to know.</p>
              <Link href="/contact-us" className="btn btn-primary">Live chat</Link>
            </div>
          </div>
          <div className={styles.right}>
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </div>
    </section>
  );
}
