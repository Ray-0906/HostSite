'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = [
  { title: 'Getting Started', count: 12, desc: 'New to hosting? Start here with our beginner guides.' },
  { title: 'cPanel Management', count: 18, desc: 'Learn how to manage files, databases, and email accounts.' },
  { title: 'WordPress', count: 15, desc: 'Installation, optimization, and troubleshooting guides.' },
  { title: 'Email Setup', count: 8, desc: 'Configure email accounts, forwarders, and autoresponders.' },
  { title: 'Domain & DNS', count: 10, desc: 'Manage domains, DNS records, and nameservers.' },
  { title: 'Security', count: 7, desc: 'SSL certificates, firewall settings, and best practices.' },
];

export default function KnowledgeBasePage() {
  const ref = useScrollAnimation({ stagger: 0.08 });

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg, #EDE9FE 0%, #F3F0FF 40%, #F8FAFC 100%)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, marginBottom: 12 }}>Knowledge Base</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: 500, margin: '0 auto 28px' }}>
            Find answers to common questions and step-by-step tutorials.
          </p>
          <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', border: '2px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#fff' }}>
            <input type="text" placeholder="Search articles..." style={{ flex: 1, padding: '14px 20px', border: 'none', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }} />
            <button style={{ padding: '14px 24px', background: 'var(--primary-purple)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Search</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 80px' }} ref={ref}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {categories.map((cat) => (
              <Link key={cat.title} href="/knowledge-base" className="animate-on-scroll" style={{
                background: '#fff', borderRadius: 'var(--radius-lg)', padding: 28,
                border: '1px solid var(--border-light)', transition: 'transform 0.3s ease', display: 'block',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{cat.title}</h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-purple)', background: 'var(--primary-purple-light)', padding: '4px 10px', borderRadius: 50 }}>
                    {cat.count} articles
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
