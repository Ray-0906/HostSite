import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

// Lazy-load below-the-fold sections so the page appears instantly
const ServicesGrid = dynamic(() => import('@/components/home/ServicesGrid'));
const FindEngineSection = dynamic(() => import('@/components/home/FindEngineSection'));
const IntelligentStack = dynamic(() => import('@/components/home/IntelligentStack'));
const PricingSection = dynamic(() => import('@/components/home/PricingSection'));
const FeaturesSection = dynamic(() => import('@/components/home/FeaturesSection'));
const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'));
const ExpertSupport = dynamic(() => import('@/components/home/ExpertSupport'));
const FAQSection = dynamic(() => import('@/components/home/FAQSection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <FindEngineSection />
      <IntelligentStack />
      <PricingSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ExpertSupport />
      <FAQSection />
    </>
  );
}
