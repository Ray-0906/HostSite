export const metadata = { title: 'Refund Policy - Hostazo' };

export default function RefundPolicyPage() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24 }}>Refund Policy</h1>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 16 }}>We offer a 30-day money-back guarantee on all shared hosting plans.</p>
          <p style={{ marginBottom: 16 }}>If you are not satisfied with our service within the first 30 days, we will issue a full refund. Domain registration fees are non-refundable.</p>
          <p>Contact billing@hostazo.com for refund requests.</p>
        </div>
      </div>
    </section>
  );
}
