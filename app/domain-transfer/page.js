import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'Domain Search', desc: 'Find and register the perfect domain for your brand from our extensive catalog.' },
  { title: 'Easy Transfer', desc: 'Transfer your existing domain to Hostazo with our simple 3-step process.' },
  { title: 'Domain Lock', desc: 'Protect your domain from unauthorized transfers with our security lock.' },
  { title: 'Auto-Renewal', desc: 'Never lose your domain with automatic renewal reminders and processing.' },
];

export const metadata = { title: 'Domain Transfer - Hostazo', description: 'Transfer your domain to Hostazo easily.' };

export default function DomainTransferPage() {
  return (
    <HostingPageTemplate
      title="Domain Transfer"
      subtitle="Already have a domain? Transfer it to Hostazo and manage everything in one place."
      cta="Start Transfer"
      ctaHref="/domain"
      features={features}
    />
  );
}
