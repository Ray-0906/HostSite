'use client';
import styles from './TrustpilotBar.module.css';

export default function TrustpilotBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.stars}>
        {[...Array(4)].map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00B67A">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <svg width="18" height="18" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#00B67A" />
              <stop offset="50%" stopColor="#ddd" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" />
        </svg>
      </div>
      <p className={styles.text}>
        Rated <strong>4.7</strong> out of 5 from <strong>Our</strong> Trustpilot reviews.
      </p>
    </div>
  );
}
