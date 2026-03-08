'use client';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './page.module.css';

const contacts = [
  { title: 'Sales Team', email: 'sales@hostazo.com', desc: 'For new accounts and plan inquiries.' },
  { title: 'Support Team', email: 'support@hostazo.com', desc: 'For technical issues and account help.' },
  { title: 'Abuse Team', email: 'abuse@hostazo.com', desc: 'Report abuse and policy violations.' },
  { title: 'Technical Assistance', email: 'tech@hostazo.com', desc: 'Server configuration and advanced help.' },
];

const categories = [
  { title: 'cPanel Management', desc: 'File manager, email accounts, DNS zones, databases, and more.', icon: '⚙️' },
  { title: 'WordPress & Softaculous', desc: 'Installing, updating, and managing WordPress installations.', icon: '📦' },
  { title: 'Email & Domains', desc: 'Email setup, domain transfers, DNS configuration, and SSL.', icon: '✉️' },
  { title: 'Security & Billing', desc: 'Account security, invoices, payment methods, and refunds.', icon: '🔒' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useScrollAnimation({ y: 40 });
  const cardsRef = useScrollAnimation({ stagger: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className={styles.hero} ref={heroRef}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSub}>We&apos;re here to help! We&apos;d love to hear from you.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={styles.contactCards} ref={cardsRef}>
        <div className={`container`}>
          <div className={styles.cardsGrid}>
            {contacts.map((c) => (
              <div key={c.title} className={`${styles.contactCard} animate-on-scroll`}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <a href={`mailto:${c.email}`} className={styles.email}>{c.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className={styles.helpSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How can we help?</h2>
          <div className={styles.catGrid}>
            {categories.map((c) => (
              <div key={c.title} className={styles.catCard}>
                <span className={styles.catIcon}>{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className={`container ${styles.formContainer}`}>
          <h2 className={styles.sectionTitle}>Send us a message</h2>
          {submitted ? (
            <div className={styles.success}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="16 8 10 16 7 13"/></svg>
              <h3>Message Sent!</h3>
              <p>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="How can we help?" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your inquiry..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
