'use client';
import { useState } from 'react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
          <button
            className={styles.question}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.q}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              {openIndex === index ? (
                <line x1="5" y1="12" x2="19" y2="12" />
              ) : (
                <>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </>
              )}
            </svg>
          </button>
          <div className={styles.answerWrap}>
            <p className={styles.answer}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
