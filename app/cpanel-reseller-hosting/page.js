import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'White Label', desc: 'Fully rebrand hosting services under your own company name and logo.' },
  { title: 'WHM/cPanel Access', desc: 'Full WHM control panel to create and manage individual cPanel accounts.' },
  { title: 'Custom Nameservers', desc: 'Set up custom nameservers for a fully branded hosting experience.' },
  { title: 'Free WHMCS', desc: 'Included billing and automation platform to manage your hosting business.' },
  { title: 'Overselling Allowed', desc: 'Maximize your resources by overselling disk space and bandwidth.' },
  { title: 'Dedicated Support', desc: 'Priority support channel for resellers with faster response times.' },
];

export const metadata = {
  title: 'cPanel Reseller Hosting - Hostazo',
  description: 'Start your own hosting business with our white-label reseller hosting.',
};

export default function ResellerHostingPage() {
  return (
    <HostingPageTemplate
      title="cPanel Reseller Hosting"
      subtitle="Launch your own hosting company. We handle the servers; you handle the profits. 100% White-labeled."
      price={299}
      cta="Start Selling"
      ctaHref="/web-hosting"
      features={features}
    />
  );
}
