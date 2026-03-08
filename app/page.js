import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import FindEngineSection from '@/components/home/FindEngineSection';
import IntelligentStack from '@/components/home/IntelligentStack';
import PricingSection from '@/components/home/PricingSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ExpertSupport from '@/components/home/ExpertSupport';
import FAQSection from '@/components/home/FAQSection';

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
