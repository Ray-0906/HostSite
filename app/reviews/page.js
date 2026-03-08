import Link from 'next/link';

export const metadata = { title: 'Reviews - Hostazo' };

export default function ReviewsPage() {
  return (
    <section style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>Customer Reviews</h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-body)', maxWidth: 500, margin: '0 auto 32px' }}>
          See what our customers have to say about our hosting services.
        </p>
        <Link href="https://review.hostazo.com" className="btn btn-primary btn-pill" target="_blank" rel="noopener noreferrer">
          View on Trustpilot
        </Link>
      </div>
    </section>
  );
}
