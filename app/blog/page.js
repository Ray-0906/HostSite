'use client';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const posts = [
  { id: 1, title: 'How to Choose the Best Web Hosting for Your Business', excerpt: 'A comprehensive guide to selecting the right hosting plan based on your website needs, traffic, and budget.', date: 'Mar 5, 2026', category: 'Hosting' },
  { id: 2, title: '10 Tips to Speed Up Your WordPress Website', excerpt: 'Optimize your WordPress site for faster loading times with these proven techniques and best practices.', date: 'Mar 2, 2026', category: 'WordPress' },
  { id: 3, title: 'Understanding SSL Certificates and Why You Need One', excerpt: 'Learn what SSL certificates are, how they work, and why every website needs one for security and SEO.', date: 'Feb 28, 2026', category: 'Security' },
  { id: 4, title: 'DNS Management Made Simple', excerpt: 'A beginner-friendly guide to understanding and managing DNS records for your domains.', date: 'Feb 24, 2026', category: 'Domains' },
  { id: 5, title: 'cPanel vs Plesk: Which Control Panel is Right for You?', excerpt: 'Compare the two most popular hosting control panels and find out which one suits your needs better.', date: 'Feb 20, 2026', category: 'Hosting' },
  { id: 6, title: 'How to Migrate Your Website Without Downtime', excerpt: 'Step-by-step guide to migrating your website to a new host with zero downtime.', date: 'Feb 15, 2026', category: 'Migration' },
];

export default function BlogPage() {
  const ref = useScrollAnimation({ stagger: 0.08 });

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg, #EDE9FE 0%, #F3F0FF 40%, #F8FAFC 100%)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, marginBottom: 12 }}>Blog</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: 500, margin: '0 auto' }}>
            Tips, tutorials, and insights to help you succeed online.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 80px' }} ref={ref}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {posts.map((post) => (
              <article key={post.id} className="animate-on-scroll" style={{
                background: '#fff', borderRadius: 'var(--radius-lg)', padding: 28,
                border: '1px solid var(--border-light)', transition: 'transform 0.3s ease',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-purple)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {post.category}
                </span>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '10px 0 8px', lineHeight: 1.3 }}>
                  <Link href="/blog" style={{ color: 'var(--text-dark)' }}>{post.title}</Link>
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 12 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
