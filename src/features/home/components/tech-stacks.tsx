import { IconBrandReact } from '@tabler/icons-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { iconConfigs } from '@/constants/tech-stacks';

export default function TechStacks() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className='relative pt-16 md:pt-24 h-120 overflow-hidden'>
      <div className={'grid grid-cols-3 w-full h-full relative'}>
        <div
          className={
            'col-span-2 backdrop-blur-[2px] bg-background/10 p-8 flex flex-col items-start justify-center z-10 absolute md:relative w-full h-full'
          }>
          <h1 className='text-4xl sm:text-6xl font-bold mb-4 text-foreground'>
            Build your idea
          </h1>
          <p className='text-muted-foreground mb-6 max-w-lg'>
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
            <div className='w-24 h-24 rounded-full bg-gray-50 dark:bg-gray-800 shadow-lg flex items-center justify-center'>
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
                  className='absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600'
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
                          className='absolute bg-white dark:bg-gray-800 rounded-full p-1 shadow-md'
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
    </section>
  );
}

export function DemoTechStack() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);
  return (
    <section className='relative my-32 flex items-start justify-center h-120 overflow-hidden'>
      {/* Left side: Heading and Text */}
      <div className='pl-5 w-full h-full flex flex-col items-start justify-center backdrop-blur-xs bg-white/10 md:w-1/2 z-10'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-4 text-foreground'>
          Build your idea
        </h1>
        <p className='text-muted-foreground mb-6 max-w-lg'>
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
      <div className='relative w-full md:w-1/2 h-full flex items-center justify-start overflow-hidden'>
        <div className='relative w-200 h-200 translate-x-[50%] flex items-center justify-center'>
          {/* Center Circle */}
          <div className='w-24 h-24 rounded-full bg-gray-50 dark:bg-gray-800 shadow-lg flex items-center justify-center'>
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
                className='absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600'
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
                        className='absolute bg-white dark:bg-gray-800 rounded-full p-1 shadow-md'
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
                            className='w-8 h-8 object-contain'
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
