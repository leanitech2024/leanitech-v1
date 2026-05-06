'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { DottedBackground } from './bg-backgrounds';

type CTAProps = {
  className?: string;
};

const CTA = ({ className }: CTAProps) => {
  const ref = useRef(null);

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='py-8 sm:py-20'>
        <DottedBackground>
          <div
            ref={ref}
            className='relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% dark:before:rounded-full dark:before:-z-10'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center gap-6 mx-auto'>
              <div className='flex flex-col items-center gap-3 text-center'>
                <h2 className='text-3xl font-medium md:text-5xl'>
                  Innovative solutions for bold brands
                </h2>
                <p className='max-w-2xl mx-auto'>
                  Looking to elevate your brand? We craft immersive experiences
                  that captivate, engage, and make your business unforgettable
                  in every interaction.
                </p>
              </div>
              <Link
                href={'/contact'}
                prefetch={true}
                className={cn(
                  // 'relative h-12 p-1 overflow-hidden text-sm font-medium transition-all duration-500 rounded-full ps-6 pe-14 group hover:ps-14 hover:pe-6 w-fit',
                  buttonVariants({
                    variant: 'default',
                    className:
                      'relative h-12 p-1 overflow-hidden text-sm font-medium transition-all duration-500 rounded-full ps-6 pe-14 group hover:ps-14 hover:pe-6 w-fit',
                    size: 'lg',
                  }),
                )}>
                <span className='relative z-10 transition-all duration-500'>
                  Let&apos;s craft together
                </span>
                <div className='absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45'>
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </motion.div>
          </div>
        </DottedBackground>
      </div>
    </section>
  );
};

export default CTA;
