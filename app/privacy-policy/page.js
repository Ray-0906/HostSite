export const metadata = { title: 'Privacy Policy - Hostazo' };

export default function PrivacyPolicyPage() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24 }}>Privacy Policy</h1>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 16 }}>Last updated: March 1, 2026</p>
          <p style={{ marginBottom: 16 }}>At Hostazo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '24px 0 12px', color: 'var(--text-dark)' }}>Information We Collect</h2>
          <p style={{ marginBottom: 16 }}>We collect information you provide directly to us, including your name, email address, billing information, and any other information you choose to provide.</p>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '24px 0 12px', color: 'var(--text-dark)' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: 16 }}>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '24px 0 12px', color: 'var(--text-dark)' }}>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@hostazo.com.</p>
        </div>
      </div>
    </section>
  );
}
