'use client';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './page.module.css';

const tlds = [
  { ext: '.com', price: 799, desc: 'Most popular worldwide' },
  { ext: '.in', price: 499, desc: 'Perfect for India' },
  { ext: '.net', price: 999, desc: 'Great for networks' },
  { ext: '.org', price: 899, desc: 'Ideal for organizations' },
  { ext: '.co', price: 1299, desc: 'Modern alternative' },
  { ext: '.info', price: 699, desc: 'Informational sites' },
];

export default function DomainPage() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const heroRef = useScrollAnimation({ y: 50, duration: 1 });
  const tldsRef = useScrollAnimation({ stagger: 0.08 });

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  };

  return (
    <>
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Find Your Perfect Domain Name</h1>
          <p className={styles.heroSub}>Search, register, and manage your domain names with ease. Start building your online identity today.</p>
          <form className={styles.searchBar} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter your domain name..."
              className={styles.searchInput}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSearched(false); }}
            />
            <button type="submit" className={styles.searchBtn}>Search Domain</button>
          </form>
          {searched && query && (
            <div className={styles.results}>
              <div className={styles.resultCard}>
                <div className={styles.resultInfo}>
                  <span className={styles.resultDomain}>{query.includes('.') ? query : `${query}.com`}</span>
                  <span className={styles.resultStatus}>Available!</span>
                </div>
                <div className={styles.resultPrice}>
                  <span>₹799</span><small>/year</small>
                </div>
                <button className="btn btn-primary">Register Now</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.tldSection} ref={tldsRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Popular Domain Extensions</h2>
          <p className={styles.sectionSub}>Choose from a wide range of domain extensions at competitive prices.</p>
          <div className={styles.tldGrid}>
            {tlds.map((t) => (
              <div key={t.ext} className={`${styles.tldCard} animate-on-scroll`}>
                <h3 className={styles.tldExt}>{t.ext}</h3>
                <p className={styles.tldDesc}>{t.desc}</p>
                <div className={styles.tldPrice}>
                  <span>₹{t.price}</span><small>/year</small>
                </div>
                <button className="btn btn-outline" style={{ width: '100%' }}>Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
