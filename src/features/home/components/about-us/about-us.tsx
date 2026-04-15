'use client';

import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { cn } from '@/lib/utils';
import { LucideIcon, PercentIcon, PlusIcon } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { Instrument_Serif } from 'next/font/google';
import { useEffect, useRef } from 'react';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

type aboutusData = {
  icon: LucideIcon;
  title: string;
  color: string;
}[];

type statisticsCounter = {
  title: string;
  count: number;
}[];

function AnimatedCounter({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
    // stiffness: 100,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current),
  );

  useEffect(() => {
    if (!isInView) {
      springValue.jump(0); // reset immediately when leaving viewport
      return;
    }

    const raf = requestAnimationFrame(() => {
      springValue.set(value); // animate 0 -> value on enter
    });

    return () => cancelAnimationFrame(raf);
  }, [isInView, value, springValue]);

  // useEffect(() => {
  //   if (isInView || !springValue.isAnimating()) {
  //     springValue.set(value);
  //   }
  // }, [isInView, value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}

function AboutUs({
  aboutusData,
  statisticsCounter,
}: {
  aboutusData: aboutusData;
  statisticsCounter: statisticsCounter;
}) {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: false, margin: '-100px' });

  return (
    <section
      id='about-us'
      className='max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:py-20 sm:py-16 py-8'>
      <div className='flex flex-col items-center justify-center gap-8 md:gap-16'>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className='flex flex-col items-center justify-center gap-4'>
          <AfterBeforeWrapper>
            <h2 className='py-2 text-2xl font-medium tracking-tight text-center sm:text-3xl md:text-4xl lg:text-5xl text-foreground'>
              {/* Crafting exceptional, well experienced & technology driven
            strategies to drive impactful results with */}
              Building scalable, technology-driven strategies that accelerate
              business growth and deliver impactful results with
            </h2>
          </AfterBeforeWrapper>

          <AfterBeforeWrapper>
            <div className='flex flex-wrap items-center justify-center py-2 gap-x-2 gap-y-4'>
              {aboutusData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-center gap-3 px-6 py-2 rounded-full',
                    item.color,
                  )}>
                  <item.icon className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' />
                  <span
                    className={cn(
                      'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
                      instrumentSerif.className,
                    )}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </AfterBeforeWrapper>
        </motion.div>

        <AfterBeforeWrapper>
          <div
            ref={statsRef}
            className='grid w-full grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-0'>
            {statisticsCounter?.map((value, index) => {
              return (
                <div
                  key={index}
                  className='relative flex flex-col items-center justify-center gap-3 px-6 py-5 sm:py-10'>
                  {index !== 0 && (
                    <div className='absolute left-0 hidden w-px h-40 -translate-y-1/2 sm:block top-1/2 bg-border' />
                  )}
                  <div className='flex gap-0 text-3xl font-medium sm:gap-2 sm:text-5xl md:text-7xl lg:text-9xl'>
                    {index === 3 ? (
                      <PercentIcon
                        strokeWidth={3.5}
                        className='w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12'
                      />
                    ) : (
                      <PlusIcon
                        strokeWidth={3.5}
                        className='w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12'
                      />
                    )}

                    <AnimatedCounter value={value.count} isInView={isInView} />
                  </div>
                  <p className='text-base font-normal text-center text-muted-foreground'>
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
        </AfterBeforeWrapper>
      </div>
    </section>
  );
}

export default AboutUs;
