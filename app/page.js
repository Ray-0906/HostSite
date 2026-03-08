import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

// Lazy-load below-the-fold sections so the page appears instantly
const TrustpilotBar = dynamic(() => import('@/components/home/TrustpilotBar'));
const FindEngineSection = dynamic(() => import('@/components/home/FindEngineSection'));
const IntelligentStack = dynamic(() => import('@/components/home/IntelligentStack'));
const PricingSection = dynamic(() => import('@/components/home/PricingSection'));
const FeaturesSection = dynamic(() => import('@/components/home/FeaturesSection'));
const ComparePlans = dynamic(() => import('@/components/home/ComparePlans'));
const LiteSpeedSection = dynamic(() => import('@/components/home/LiteSpeedSection'));
const DashboardGrid = dynamic(() => import('@/components/home/DashboardGrid'));
const TabbedServices = dynamic(() => import('@/components/home/TabbedServices'));
const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'));
const ExpertSupport = dynamic(() => import('@/components/home/ExpertSupport'));
const HostingCTACards = dynamic(() => import('@/components/home/HostingCTACards'));
const FeaturedOn = dynamic(() => import('@/components/home/FeaturedOn'));
const FAQSection = dynamic(() => import('@/components/home/FAQSection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustpilotBar />
      <FindEngineSection />
      <IntelligentStack />
      <PricingSection />
      <FeaturesSection />
      <ComparePlans />
      <LiteSpeedSection />
      <DashboardGrid />
      <TabbedServices />
      <WhyChooseSection />
      <ExpertSupport />
      <HostingCTACards />
      <FeaturedOn />
      <FAQSection />
    </>
  );
}
