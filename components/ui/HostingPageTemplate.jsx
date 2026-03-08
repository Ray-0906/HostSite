'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HostingPageTemplate({ title, subtitle, features, price, cta, ctaHref }) {
  const heroRef = useScrollAnimation({ y: 50, duration: 1 });
  const featRef = useScrollAnimation({ stagger: 0.1 });

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg, #EDE9FE 0%, #F3F0FF 40%, #F8FAFC 100%)', textAlign: 'center' }} ref={heroRef}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, marginBottom: 16, maxWidth: 680, letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: 540, marginBottom: 28, lineHeight: 1.7 }}>
            {subtitle}
          </p>
          {price && (
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-purple)' }}>₹{price}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>/mo</span>
            </div>
          )}
          <Link href={ctaHref || '/#plans'} className="btn btn-primary btn-pill">{cta || 'Get Started'}</Link>
        </div>
      </section>

      {features && features.length > 0 && (
        <section style={{ padding: '80px 0' }} ref={featRef}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>
              Key Features
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 48 }}>
              Everything you need for a powerful online presence.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {features.map((f, i) => (
                <div key={i} className="animate-on-scroll" style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)', padding: 28,
                  border: '1px solid var(--border-light)', transition: 'transform 0.3s ease'
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
