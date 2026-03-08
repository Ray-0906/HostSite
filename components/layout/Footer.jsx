import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const paymentIcons = [
  { name: 'Visa', src: '/images/visa_icon.svg' },
  { name: 'Amex', src: '/images/amex_icon.svg' },
  { name: 'Mastercard', src: '/images/mastercard_icon.svg' },
  { name: 'RuPay', src: '/images/rupay_icon.svg' },
  { name: 'UPI', src: '/images/upi_icon.svg' },
  { name: 'PayPal', src: '/images/paypal_icon.svg' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/images/Hostazo-Dark-Photoroom.png" alt="Hostazo" width={150} height={38} />
            </Link>
            <p className={styles.desc}>
              We provide reliable, secure, and high-performance hosting solutions tailored to your needs, ensuring fast, scalable, and hassle-free online experiences.
            </p>
            <div className={styles.social}>
              <h5>Get Connected</h5>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#" aria-label="X" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div className={styles.linkCol}>
            <h4>Hosting</h4>
            <Link href="/web-hosting">Web Hosting</Link>
            <Link href="/wordpress-hosting">WordPress Hosting</Link>
            <Link href="/cloud-hosting">Cloud Hosting</Link>
            <Link href="/cpanel-reseller-hosting">Cpanel Reseller Hosting</Link>
            <Link href="/vps-hosting">VPS Hosting</Link>
          </div>

          {/* Domain */}
          <div className={styles.linkCol}>
            <h4>Domain</h4>
            <Link href="/domain">Search Domain</Link>
            <Link href="/pricing">Free Domain</Link>
            <Link href="/domain-transfer">Domain Transfer</Link>
            <Link href="/domain">Register Domain</Link>
          </div>

          {/* Company */}
          <div className={styles.linkCol}>
            <h4>Company</h4>
            <Link href="/about-us">About Hostazo</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.payments}>
            {paymentIcons.map((p) => (
              <span key={p.name} className={styles.payBadge}>
                <Image src={p.src} alt={p.name} width={40} height={24} />
              </span>
            ))}
            <span className={styles.morePayments}>And <Link href="/pricing">more payment options.</Link></span>
          </div>
          <div className={styles.policies}>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/acceptable-usage-policy">AU Policy</Link>
            <Link href="/refund-policy">Refund policy</Link>
            <Link href="/terms-conditions">Terms of service</Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© Copyright 2026 Hostazo.com - Reliable Web Hosting - All Rights Reserved. GSTIN: 23HBAPR3713R1Z8</p>
        </div>
      </div>
    </footer>
  );
}
