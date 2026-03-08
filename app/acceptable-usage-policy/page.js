export const metadata = { title: 'Acceptable Usage Policy - Hostazo' };

export default function AUPolicyPage() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24 }}>Acceptable Usage Policy</h1>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 16 }}>This Acceptable Usage Policy outlines the rules and guidelines for using Hostazo hosting services.</p>
          <p style={{ marginBottom: 16 }}>By using our services, you agree to comply with this policy. Violation may result in suspension or termination of your account.</p>
          <p>For questions, contact abuse@hostazo.com.</p>
        </div>
      </div>
    </section>
  );
}
