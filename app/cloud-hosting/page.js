import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'Dedicated Resources', desc: 'Guaranteed CPU, RAM, and NVMe storage allocated exclusively to your site.' },
  { title: 'Auto-Scaling', desc: 'Resources automatically scale during traffic spikes for zero downtime.' },
  { title: 'LiteSpeed Enterprise', desc: '3x faster than Apache with built-in server-level caching technology.' },
  { title: 'Free CDN', desc: 'Global content delivery network for optimal performance worldwide.' },
  { title: 'Enhanced Security', desc: 'Advanced DDoS protection, WAF, and malware scanning included.' },
  { title: 'Full Root Access', desc: 'Complete control over your server environment and configurations.' },
];

export const metadata = {
  title: 'Cloud Hosting - Hostazo',
  description: 'Turbo cloud hosting with dedicated resources and auto-scaling.',
};

export default function CloudHostingPage() {
  return (
    <HostingPageTemplate
      title="Turbo Cloud Hosting"
      subtitle="Dedicated resources for high-traffic sites. 3x faster speeds with LiteSpeed Enterprise and auto-scaling."
      price={199}
      cta="Deploy Cloud Hosting"
      ctaHref="/web-hosting"
      features={features}
    />
  );
}
