import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'Full Root Access', desc: 'Complete control over your virtual server environment with root access.' },
  { title: 'Dedicated Resources', desc: 'Guaranteed CPU, RAM, and storage allocated exclusively to your VPS.' },
  { title: 'Custom OS', desc: 'Choose from CentOS, Ubuntu, Debian, or any Linux distribution.' },
  { title: 'Full Isolation', desc: 'Fully isolated environment ensuring your resources are never shared.' },
  { title: 'SSD Storage', desc: 'Enterprise-grade NVMe SSD storage for maximum I/O performance.' },
  { title: 'DDoS Protection', desc: 'Built-in DDoS mitigation to keep your server secure and online.' },
];

export const metadata = {
  title: 'VPS Hosting - Hostazo',
  description: 'Managed VPS hosting with full root access and dedicated resources.',
};

export default function VPSHostingPage() {
  return (
    <HostingPageTemplate
      title="Managed VPS Hosting"
      subtitle="Total isolation and control. Install custom software and manage your own server environment."
      price={499}
      cta="Configure VPS"
      ctaHref="/web-hosting"
      features={features}
    />
  );
}
