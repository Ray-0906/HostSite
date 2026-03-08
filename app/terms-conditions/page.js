export const metadata = { title: 'Terms & Conditions - Hostazo' };

export default function TermsPage() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24 }}>Terms & Conditions</h1>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 16 }}>Welcome to Hostazo. By accessing and using our services, you agree to be bound by these Terms and Conditions.</p>
          <p style={{ marginBottom: 16 }}>These terms govern your use of our hosting services, domain registration, and all related products. Please read them carefully.</p>
          <p>For questions, contact legal@hostazo.com.</p>
        </div>
      </div>
    </section>
  );
}
