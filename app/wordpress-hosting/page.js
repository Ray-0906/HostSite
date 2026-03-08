import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'Auto WordPress Updates', desc: 'Keep your WordPress core, themes, and plugins automatically updated.' },
  { title: 'LiteSpeed Cache', desc: 'Built-in server-level caching for blazing-fast WordPress performance.' },
  { title: 'Staging Environment', desc: 'Test changes in a safe staging area before pushing to production.' },
  { title: 'One-Click Install', desc: 'Get WordPress up and running instantly with our one-click installer.' },
  { title: 'Free SSL & CDN', desc: 'Secure your site and accelerate delivery with free SSL and CDN.' },
  { title: 'Daily Backups', desc: 'Automatic daily backups so your data is always safe and recoverable.' },
];

export const metadata = {
  title: 'WordPress Hosting - Hostazo',
  description: 'Managed WordPress hosting optimized for speed and security.',
};

export default function WordPressHostingPage() {
  return (
    <HostingPageTemplate
      title="Managed WordPress Hosting"
      subtitle="Optimized hosting built specifically for WordPress. Enjoy top-tier speed, security, and automatic updates."
      price={99}
      cta="Get WordPress Hosting"
      ctaHref="/web-hosting"
      features={features}
    />
  );
}
