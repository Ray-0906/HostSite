import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

const features = [
  { title: 'Full Site Backup', desc: 'We create a complete backup of your files, databases, and emails before migration.' },
  { title: 'Zero Downtime', desc: 'We handle DNS propagation carefully to ensure your site stays live throughout.' },
  { title: 'Free Migration', desc: 'Our expert team migrates your website at no extra cost with any hosting plan.' },
  { title: 'cPanel to cPanel', desc: 'Seamless migration between cPanel accounts preserving all configurations.' },
];

export const metadata = { title: 'Free Website Migration - Hostazo', description: 'Free hassle-free website migration to Hostazo.' };

export default function MigrationPage() {
  return (
    <HostingPageTemplate
      title="Free Website Migration"
      subtitle="Hassle-free migration. We handle everything so you can focus on your business. Zero downtime guaranteed."
      cta="Start Free Migration"
      ctaHref="/contact-us"
      features={features}
    />
  );
}
