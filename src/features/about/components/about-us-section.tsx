'use client';

import {
  IconAppWindow,
  IconClipboardText,
  IconCodeblock,
  IconHeadset,
  IconPalette,
  IconRocket,
} from '@tabler/icons-react';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import {
  motion,
  // useInView,
  // useScroll,
  // useSpring,
  // useTransform,
  Variants,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import AboutUsImage from '../../../../public/about-us.png';

import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { buttonVariants } from '@/components/ui/button';
import { useAboutPageContext } from '@/contexts/about-page-context';
import { cn } from '@/lib/utils';

import AboutDecorativeElements from './about-decorative-elements';
import ServiceItem from './about-us-service-item';
import AboutUsStatCounter from './about-us-stat-counter';
import AdditionalDecorativeElements from './additional-decorative-elements';
import FloatingAccentElements from './floating-accent-elements';

const services = [
  {
    icon: <IconCodeblock className='w-6 h-6' />,
    secondaryIcon: (
      <Sparkles className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Development',
    description:
      'We deliver custom web development and software solutions that are fast, secure, and scalable to grow your business online.',
    position: 'left',
  },
  {
    icon: <IconPalette className='w-6 h-6' />,
    secondaryIcon: (
      <CheckCircle className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Design',
    description:
      'Our UI/UX and graphic design services create visually appealing, user-friendly experiences that boost engagement and brand identity.',
    position: 'left',
  },
  {
    icon: <IconAppWindow className='w-6 h-6' />,
    secondaryIcon: (
      <Star className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Digital Solutions',
    description:
      'We provide mobile app development, SaaS, CRM, and AI solutions to streamline operations and accelerate business growth.',
    position: 'left',
  },
  {
    icon: <IconClipboardText className='w-6 h-6' />,
    secondaryIcon: (
      <Sparkles className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Planning',
    description:
      'Our strategic planning process defines goals, timelines, and technology to ensure smooth and successful project execution.',
    position: 'right',
  },
  {
    icon: <IconRocket className='w-6 h-6' />,
    secondaryIcon: (
      <CheckCircle className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Execution',
    description:
      'We ensure efficient project execution and deployment using agile methods for high-quality and timely delivery.',
    position: 'right',
  },
  {
    icon: <IconHeadset className='w-6 h-6' />,
    secondaryIcon: (
      <Star className='w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]' />
    ),
    title: 'Support',
    description:
      'Our technical support and maintenance services keep your website and applications secure, updated, and running smoothly.',
    position: 'right',
  },
];

const stats = [
  { icon: <Award />, value: 40, label: 'Projects Completed', suffix: '+' },
  { icon: <Users />, value: 150, label: 'Happy Clients', suffix: '+' },
  { icon: <Calendar />, value: 5, label: 'Years Experience', suffix: '' },
  {
    icon: <TrendingUp />,
    value: 80,
    label: 'Satisfaction Rate',
    suffix: '%',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AboutUsSection() {
  const { sectionRef, statsRef, isInView, isStatsInView } =
    useAboutPageContext();

  const sectionClasses: HTMLElement['className'] =
    'max-w-(--breakpoint-xl) w-full px-4 2xl:px-0 mx-auto';

  return (
    <section
      id='about-section'
      ref={sectionRef}
      className={cn(
        'relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24',
        sectionClasses,
      )}>
      {/* Decorative background elements */}
      <AboutDecorativeElements />

      <motion.div
        className='relative z-10'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}>
        <motion.div
          className='flex flex-col items-center mb-6'
          variants={itemVariants}>
          <motion.span
            className='flex items-center gap-2 mb-2 font-medium text-muted-foreground'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Zap className='w-4 h-4' />
            <AfterBeforeWrapper>DISCOVER OUR STORY</AfterBeforeWrapper>
          </motion.span>
          <AfterBeforeWrapper>
            <h2 className='mb-4 text-4xl font-light text-center md:text-5xl'>
              About Us
            </h2>
            <motion.div
              className='w-24 h-1 mx-auto rounded-full bg-primary'
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}></motion.div>
          </AfterBeforeWrapper>
        </motion.div>

        <AfterBeforeWrapper>
          <motion.p
            className='max-w-2xl mx-auto mb-2 text-center text-muted-foreground'
            variants={itemVariants}>
            At <strong>Leanitech</strong>, we are a forward-thinking technology
            company committed to delivering innovative software solutions and
            result-driven digital strategies that empower businesses to grow,
            scale, and succeed in the digital era.
          </motion.p>
        </AfterBeforeWrapper>

        <AfterBeforeWrapper>
          <motion.p
            className='max-w-2xl mx-auto mb-16 text-center text-muted-foreground'
            variants={itemVariants}>
            <strong>Founded on August 26, 2024</strong>, Leanitech was created
            with a vision to simplify technology and make it accessible for
            businesses of all sizes. Since our inception, we have been helping
            organizations transform their digital presence and streamline
            operations through smart, scalable solutions.
          </motion.p>
        </AfterBeforeWrapper>

        <div className='relative grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Left Column */}
          <div className='space-y-16'>
            {services
              .filter((service) => service.position === 'left')
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction='left'
                />
              ))}
          </div>

          {/* Center Image */}
          <div className='flex items-center justify-center order-first mb-8 md:order-0 md:mb-0'>
            <motion.div
              className='relative w-full max-w-xs'
              variants={itemVariants}>
              <motion.div
                className='overflow-hidden rounded-md shadow-xl'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
                <Image
                  src={AboutUsImage.src}
                  alt='About Us Image'
                  className='object-cover w-full h-full'
                  width={AboutUsImage.width}
                  height={AboutUsImage.height}
                  priority={true}
                  blurDataURL={AboutUsImage.blurDataURL}
                />
                <motion.div
                  className='absolute inset-0 bg-linear-to-t from-[#202e44]/50 to-transparent flex items-end justify-center p-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      href='/portfolios'
                      className={buttonVariants({
                        size: 'sm',
                        variant: 'default',
                        className: 'rounded-full!',
                      })}>
                      Our Portfolio <ArrowRight className='w-4 h-4' />
                    </Link>
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div
                className='absolute inset-0 border-4 border-card-foreground rounded-md -m-3 z-[-1]'
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}></motion.div>

              {/* Floating accent elements */}
              <FloatingAccentElements />

              {/* Additional decorative elements */}
              <AdditionalDecorativeElements />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className='space-y-16'>
            {services
              .filter((service) => service.position === 'right')
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction='right'
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <AfterBeforeWrapper>
          <motion.div
            ref={statsRef}
            className='grid grid-cols-1 gap-8 mt-24 sm:grid-cols-2 lg:grid-cols-4'
            // initial='hidden'
            initial={{ opacity: 1 }}
            animate={isStatsInView ? 'visible' : 'hidden'}
            variants={containerVariants}>
            {stats.map((stat, index) => (
              <AboutUsStatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AfterBeforeWrapper>

        {/* CTA Section */}
        {/* <AfterBeforeWrapper>
          <motion.div
            className='flex flex-col items-center justify-between gap-6 p-8 mt-20 text-muted-foreground bg-foreground/10 rounded-xl md:flex-row'
            initial={{ opacity: 0, y: 30 }}
            animate={
              isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}>
            <div className='flex-1'>
              <h3 className='mb-2 text-2xl font-medium'>
                Ready to transform your space?
              </h3>
              <p className='text-base text-muted-foreground'>
                Let&apos;s create something beautiful together.
              </p>
            </div>
            <motion.button
              className='flex items-center gap-2 px-6 py-3 font-medium transition-colors rounded-lg bg-primary hover:bg-primary/90 text-foreground'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get Started <ArrowRight className='w-4 h-4' />
            </motion.button>
          </motion.div>
        </AfterBeforeWrapper> */}
      </motion.div>
    </section>
  );
}
