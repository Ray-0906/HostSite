import HostingPageTemplate from '@/components/ui/HostingPageTemplate';

export const metadata = { title: 'Web Design Services - Hostazo', description: 'Professional web design services by Hostazo.' };

export default function WebDesignPage() {
  return (
    <HostingPageTemplate
      title="Professional Web Design"
      subtitle="Let our expert designers create a stunning, responsive website for your business. From concept to launch."
      cta="Get a Quote"
      ctaHref="/contact-us"
      features={[
        { title: 'Custom Design', desc: 'Unique designs tailored to your brand identity and business goals.' },
        { title: 'Responsive Layout', desc: 'Websites that look great on desktop, tablet, and mobile devices.' },
        { title: 'SEO Optimized', desc: 'Built with search engine optimization best practices from the ground up.' },
        { title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality or attention to detail.' },
      ]}
    />
  );
}
