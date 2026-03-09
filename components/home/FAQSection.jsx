'use client';
import { useState } from 'react';
import Link from 'next/link';
import { homeFaq } from '@/data/faq';
import styles from './FAQSection.module.css';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}>
      <div className={styles.faqQuestion} onClick={onToggle}>
        <span>{item.q}</span>
        <div className={styles.faqIcon} />
      </div>
      <div
        className={styles.faqAnswer}
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <div className={styles.faqAnswerInner}>{item.a}</div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Your web hosting queries answered</h2>
            <p className={styles.sub}>
              Got questions about our web hosting services? You&apos;ll find answers to the most common queries here.
            </p>
            <div className={styles.ctaCard}>
              <h4>Have more questions?</h4>
              <p>Get instant, personalized answers about our web hosting plans, features, or anything else you need to know to get your site online.</p>
              <Link href="/contact-us" className={styles.ctaButton}>Live chat</Link>
            </div>
          </div>
          <div className={styles.right}>
            {homeFaq.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
