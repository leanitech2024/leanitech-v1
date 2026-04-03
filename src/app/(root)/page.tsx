import CTA from '@/components/shared/cta';
import { TestimonialMarquee } from '@/components/shared/testimonial-marquee';
import { siteMetadata } from '@/constants/seo';
import { ContactBlock } from '@/features/contact/components/contact';
import AboutAndStats01 from '@/features/home/components/about-us';
import Bentogrid from '@/features/home/components/bento-grid/bentogrid';
import BrandSlider from '@/features/home/components/brand-slider';
// import FAQ from '@/features/home/components/faq';
import Faq2 from '@/features/home/components/faq/faq';
import Feature01 from '@/features/home/components/feature';
// import Features from '@/features/home/components/features';
import HeroSection from '@/features/home/components/hero';
import Portfolios from '@/features/home/components/portfolios/portfolio';
// import Services from '@/features/home/components/services/services';
// import Testimonials from '@/features/home/components/testimonials';

const items = [
  {
    name: 'Sunrisers Event Planners',
    username: 'event planners',
    text: 'Working with Leanitech was a game-changer for Sunrisers Event Planners. Their team delivered a visually stunning and highly responsive website that perfectly reflects our brand. The user experience has significantly improved our client engagement and inquiries.',
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
  {
    name: 'Sunrisers Digital Hub ',
    username: 'sunrisersdigital',
    text: 'Leanitech delivered exactly what we needed – a scalable and secure website tailored to our business goals. We highly recommend their web development services for any growing company.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Branding and Solutions',
    username: 'branding_solutions',
    text: 'Innovative, strategic, and visually stunning—these branding solutions helped us establish a strong and consistent brand identity.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Finnoaq',
    username: 'finnoaq',
    text: 'The website development exceeded our expectations, delivering a secure and high-performance platform that aligns perfectly with FinnoAQ’s fintech vision.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'iqbox ',
    username: 'iqbox',
    text: 'Working with Leanitech on our Australian project was a seamless experience. From branding to website development, every detail was executed with precision. The final outcome is clean, professional, and aligned with global standards.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'RotateKey',
    username: 'rotatekey',
    text: 'We partnered with Leanitech for our website development, and the results exceeded expectations. The platform is fast, scalable, and designed with precision. Their technical knowledge and commitment to quality truly stand out.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Onism Himachal',
    username: 'onism himachal',
    text: 'A well-structured and SEO-optimized website that helps us reach more travelers. The overall development process was smooth and highly professional.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'AMD Groups',
    username: 'amd groups',
    text: 'From initial planning to final delivery, the process was smooth and efficient. The website reflects innovation, reliability, and strong technical expertise.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'WalkNoodles',
    username: 'walknoodles',
    text: 'Delivering innovative branding, logo design, and high-performance website development to build a strong and scalable business identity',
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
      <Portfolios />
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
      <ContactBlock />
    </main>
  );
}
