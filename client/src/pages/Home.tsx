import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import StatsSection from '../components/StatsSection';
import WhyChooseSection from '../components/WhyChooseSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;