import { IconBrandReact } from '@tabler/icons-react';
import Link from 'next/link';

import { DottedBackground } from '@/components/shared/bg-backgrounds';
import { Button } from '@/components/ui/button';
import { iconConfigs } from '@/constants/tech-stacks';

export default function TechStacks() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className='h-120 max-w-(--breakpoint-xl) mx-auto'>
      <DottedBackground>
        <div className={'grid grid-cols-3 w-full h-full relative'}>
          <div
            className={
              'col-span-2 backdrop-blur-[2px] bg-background/10 p-8 flex flex-col items-start justify-center z-10 absolute md:relative w-full h-full'
            }>
            <h1 className='mb-4 text-4xl font-bold sm:text-6xl text-foreground'>
              Build your idea
            </h1>
            <p className='max-w-lg mb-6 text-muted-foreground'>
              RUIXEN is a modern and responsive UI kit for React, Next.js, and
              Tailwind CSS.
            </p>
            <div className='flex items-center gap-3'>
              <Button variant='default' asChild>
                <Link href='#'> Get Started</Link>
              </Button>
              <Button variant='outline'>Learn More</Button>
            </div>
          </div>
          <div
            className={
              'col-span-1 absolute md:relative w-full h-full overflow-hidden'
            }>
            <div className='relative w-full h-full md:translate-x-[50%] flex items-center justify-center'>
              {/* Center Circle */}
              <div className='flex items-center justify-center w-24 h-24 rounded-full shadow-lg bg-gray-50 dark:bg-gray-800'>
                {/* <FaReact className='w-12 h-12 text-blue-400' /> */}
                <IconBrandReact className='w-12 h-12 text-blue-400' />
              </div>

              {/* Generate Orbits */}
              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
                const angleStep = (2 * Math.PI) / iconsPerOrbit;

                return (
                  <div
                    key={orbitIdx}
                    className='absolute border-2 border-gray-300 border-dotted rounded-full dark:border-gray-600'
                    style={{
                      width: size,
                      height: size,
                      animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                    }}>
                    {iconConfigs
                      .slice(
                        orbitIdx * iconsPerOrbit,
                        orbitIdx * iconsPerOrbit + iconsPerOrbit,
                      )
                      .map((cfg, iconIdx) => {
                        const angle = iconIdx * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);

                        return (
                          <div
                            key={iconIdx}
                            className='absolute p-1 bg-white rounded-full shadow-md dark:bg-gray-800'
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: 'translate(-50%, -50%)',
                            }}>
                            <cfg.Icon
                              className='w-8 h-8'
                              style={{ color: cfg.color }}
                            />
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DottedBackground>
    </section>
  );
}

export function DemoTechStack() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);
  return (
    <section className='relative flex items-start justify-center my-32 overflow-hidden h-120'>
      {/* Left side: Heading and Text */}
      <div className='z-10 flex flex-col items-start justify-center w-full h-full pl-5 backdrop-blur-xs bg-white/10 md:w-1/2'>
        <h1 className='mb-4 text-4xl font-bold sm:text-6xl text-foreground'>
          Build your idea
        </h1>
        <p className='max-w-lg mb-6 text-muted-foreground'>
          RUIXEN is a modern and responsive UI kit for React, Next.js, and
          Tailwind CSS.
        </p>
        <div className='flex items-center gap-3'>
          <Button variant='default'>
            <Link href='https://ruixen.com' target='_blank'>
              {' '}
              Get Started
            </Link>
          </Button>
          <Button variant='outline'>Learn More</Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className='relative flex items-center justify-start w-full h-full overflow-hidden md:w-1/2'>
        <div className='relative w-200 h-200 translate-x-[50%] flex items-center justify-center'>
          {/* Center Circle */}
          <div className='flex items-center justify-center w-24 h-24 rounded-full shadow-lg bg-gray-50 dark:bg-gray-800'>
            {/* <FaReact className='w-12 h-12 text-blue-400' /> */}
            <IconBrandReact className='w-12 h-12 text-blue-400' />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className='absolute border-2 border-gray-300 border-dotted rounded-full dark:border-gray-600'
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}>
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit,
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className='absolute p-1 bg-white rounded-full shadow-md dark:bg-gray-800'
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}>
                        {cfg.Icon ? (
                          <cfg.Icon
                            className='w-8 h-8'
                            style={{ color: cfg.color }}
                          />
                        ) : null}

                        {/* {cfg.Icon ? (
                          <cfg.Icon
                            className='w-8 h-8'
                            style={{ color: cfg.color }}
                          />
                        ) : (
                          <Image
                            src={cfg.img ?? 'https://placehold.co/50x50.png'}
                            alt='icon'
                            className='object-contain w-8 h-8'
                            width={50}
                            height={50}
                          />
                        )} */}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      {/* only works client side */}
      {/* <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </section>
  );
}
