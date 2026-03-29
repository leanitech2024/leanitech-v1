'use client';

import SplashCursor from '@/components/backgrounds/animations/splash-cursor';
import { AnimatedTooltip } from '@/components/extends/animated-tooltip';
import { TypingAnimation } from '@/components/extends/typing-animation';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

export type AvatarList = {
  image: string;
};

const isDev = process.env.NODE_ENV === 'development';

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
];

function HeroSection() {
  return (
    <section
      id='home'
      className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='w-full h-full relative'>
        {!isDev && (
          <div className='absolute inset-0 -z-1 pointer-events-none'>
            <SplashCursor
              SIM_RESOLUTION={128}
              DYE_RESOLUTION={1440}
              DENSITY_DISSIPATION={3.5}
              VELOCITY_DISSIPATION={2}
              PRESSURE={0.1}
              CURL={3}
              SPLAT_RADIUS={0.2}
              SPLAT_FORCE={6000}
              COLOR_UPDATE_SPEED={10}
            />
          </div>
        )}
        <div className='relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
          <div className='container mx-auto relative z-10'>
            <div className='flex flex-col max-w-5xl mx-auto gap-8'>
              <div className='relative flex flex-col text-center items-center gap-4 md:gap-6'>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium leading-4 sm:leading-8 md:leading-12 xl:leading-20 text-wrap'>
                  Turning ideas into scalable{' '}
                  <TypingAnimation
                    as='span'
                    className={`${instrumentSerif.className} tracking-tight block md:inline`}
                    words={[
                      'digital solutions.',
                      'web applications.',
                      'software products.',
                      'digital success.',
                    ]}
                    loop
                  />
                  {/* <span
                    className={`${instrumentSerif.className} tracking-tight`}>
                    digital success
                  </span> */}
                </motion.h1>
                <motion.blockquote
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.05, ease: 'easeInOut' }}
                  className='text-base font-normal max-w-4xl text-muted-foreground border-l-2 pl-6 italic'>
                  {/* <blockquote className='mt-6 border-l-2 pl-6 italic'>
                    &quot;After all,&quot; he said, &quot;everyone enjoys a good
                    joke, so it&apos;s only fair that they should pay for the
                    privilege.&quot;
                  </blockquote> */}
                  <p>
                    &quot;At Leanitech, we empower startups and enterprises to
                    solve complex business challenges through innovative
                    software, modern web development, and data-driven digital
                    strategies
                  </p>
                  <cite>
                    &mdash;guiding you from idea to impactful success.&quot;
                  </cite>
                </motion.blockquote>
                {/* <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
                  className='text-base font-normal max-w-2xl text-muted-foreground'>
                  At Leanitech, we empower startups and enterprises to solve
                  complex business challenges through innovative software,
                  modern web development, and data-driven digital
                  strategies—guiding you from idea to impactful success.
                </motion.p> */}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                className='flex items-center flex-col justify-center gap-12'>
                <Button className='relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden'>
                  <span className='relative z-10 transition-all duration-500'>
                    Get Started
                  </span>
                  <span className='absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45'>
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
                <div className='flex items-center flex-wrap justify-center sm:gap-7 gap-3'>
                  {/* <ul className='avatar flex flex-row items-center'>
                    {avatarList.map((avatar, index) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={avatar.image}
                          alt='Avatar'
                          width={40}
                          height={40}
                          className='rounded-full border-2 border-white'
                        />
                      </li>
                    ))}
                  </ul> */}
                  <div className='flex flex-row items-center justify-center w-full'>
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className='gap-1 flex flex-col items-start'>
                    <div className='flex gap-1'>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                          key={index}
                          src='https://images.shadcnspace.com/assets/svgs/icon-star.svg'
                          alt='star'
                          className='h-4 w-4'
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                    <p className='sm:text-sm text-xs font-normal text-muted-foreground'>
                      Trusted by 1000+ clients
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
