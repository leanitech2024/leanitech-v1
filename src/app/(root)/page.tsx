import CTA from '@/components/shared/cta';
import { TestimonialMarquee } from '@/components/shared/testimonial-marquee';
import { siteMetadata } from '@/constants/seo';
import AboutAndStats01 from '@/features/home/components/about-us';
import Bentogrid from '@/features/home/components/bento-grid/bentogrid';
import BrandSlider from '@/features/home/components/brand-slider';
import ContactUs1 from '@/features/home/components/contact-us';
// import FAQ from '@/features/home/components/faq';
import Faq2 from '@/features/home/components/faq/faq';
import Feature01 from '@/features/home/components/feature';
// import Features from '@/features/home/components/features';
import HeroSection from '@/features/home/components/hero';
import Portfolio from '@/features/home/components/portfolio/portfolio';
// import Services from '@/features/home/components/services/services';
// import Testimonials from '@/features/home/components/testimonials';

const items = [
  {
    name: 'Sarah Chen',
    username: 'sarahchen',
    text: 'This library has completely transformed how we build our UI. The animations are so smooth!',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Ascent Wealth',
    username: 'ascentwealth',
    text: 'The team did an exceptional job building our website, Ascent Wealth. For a financial services brand, clarity and credibility are everything — and they’ve managed to bring both together seamlessly. The website is clean, structured, and communicates our offerings with precision while still feeling premium. It truly reflects the way we work with our clients.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  // {
  //   name: '',
  //   username: 'john_doe',
  //   text: '',
  //   avatar: '',
  // },
];

export const metadata = siteMetadata('Home');

export default function Home() {
  return (
    <main className='pt-16 xs:pt-20 sm:pt-16 md:pt-12 lg:pt-8'>
      <HeroSection />
      <BrandSlider />
      <AboutAndStats01 />
      {/* <Services /> */}
      <Feature01 />
      <Bentogrid />
      <Portfolio />
      {/* <Features /> */}
      {/* <FAQ /> */}
      <Faq2 />
      {/* <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} />
      </div>
      <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='dual' />
      </div> */}
      <div className='relative w-full overflow-hidden mb-16'>
        <TestimonialMarquee items={items} variant='stacked' />
      </div>
      {/* <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='flush' />
      </div>
      <div className='relative w-full overflow-hidden bg-background/50 mb-16'>
        <TestimonialMarquee items={items} variant='flush-dual' />
      </div> */}
      {/* <Testimonials /> */}
      <CTA />
      <ContactUs1 />
    </main>
  );
}
