import CTA from '@/components/shared/cta';
import AboutAndStats01 from '@/features/home/components/about-us';
import Bentogrid from '@/features/home/components/bento-grid/bentogrid';
import BrandSlider from '@/features/home/components/brand-slider';
import ContactUs1 from '@/features/home/components/contact-us';
import FAQ from '@/features/home/components/faq';
import Faq2 from '@/features/home/components/faq/faq';
import Feature01 from '@/features/home/components/feature';
import Features from '@/features/home/components/features';
import HeroSection from '@/features/home/components/hero';
import Portfolio from '@/features/home/components/portfolio/portfolio';
import Services from '@/features/home/components/services/services';
import Testimonials from '@/features/home/components/testimonials';

export default function Home() {
  return (
    <main className='pt-16 xs:pt-20 sm:pt-24'>
      <HeroSection />
      <BrandSlider />
      <AboutAndStats01 />
      <Services />
      <Bentogrid />
      <Portfolio />
      <Features />
      <Feature01 />
      <FAQ />
      <Faq2 />
      <Testimonials />
      <CTA />
      <ContactUs1 />
    </main>
  );
}
