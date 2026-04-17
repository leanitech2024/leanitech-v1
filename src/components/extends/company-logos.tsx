'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const logos = [
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/adobe.svg.png',
    alt: 'Adobe logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/hp.png',
    alt: 'HP logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/cisco.png',
    alt: 'Cisco logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/paypal.png',
    alt: 'PayPal logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/ibm.png',
    alt: 'IBM logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/dell.png',
    alt: 'Dell logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/nvidia.png',
    alt: 'NVIDIA logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/vodafone.png',
    alt: 'Vodafone logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/godaddy.svg.png',
    alt: 'GoDaddy logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/intel.png',
    alt: 'Intel logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/tmobile.png',
    alt: 'T-Mobile logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/delloite.png',
    alt: 'Delloite logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/amazon.png',
    alt: 'Amazon logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/siemens.png',
    alt: 'Siemens logo',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://jonas.io/logos-companies/shopify.png',
    alt: 'Shopify logo',
  },
];

// Sub-component for each column to manage its own cycle

const LogoColumn = ({
  columnLogos,
  delay = 0,
}: {
  columnLogos: typeof logos;
  delay?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Stagger the start of the interval based on the column's delay
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % columnLogos.length);
      }, 4000); // 4 seconds per logo
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [columnLogos.length, delay]);

  return (
    <div className='relative flex items-center justify-center h-20 px-3 overflow-hidden border-borders-default md:px-6 lg:h-26 lg:border-l'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={columnLogos[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={columnLogos[index].src}
            alt={columnLogos[index].alt}
            className='w-auto opacity-80 brightness-0 filter dark:invert'
            width={100}
            height={22}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export function CompanyLogos() {
  // Split logos into groups of 3
  const logoGroups = [
    logos.slice(0, 3),
    logos.slice(3, 6),
    logos.slice(6, 9),
    logos.slice(9, 12),
    logos.slice(12, 15),
  ];

  return (
    <div className='border-b text-muted-foreground'>
      <section>
        <div className='[&>*:nth-child(even)]:border-l border-t *:border-b [&>*:nth-child(5)]:border-b-0 [&>*:nth-child(6)]:border-b-0 lg:*:border-b-0 border-borders-default grid grid-cols-2 items-center border-r border-l lg:grid-cols-6'>
          {/* Label */}
          <div className='flex items-center h-20 px-3 border-borders-default md:px-4 lg:h-26'>
            <p className='text-xs font-semibold leading-snug text-center uppercase text-text-disabled md:text-sm'>
              Your favorite companies are our partners.
            </p>
          </div>

          {/* Animated Columns */}
          {logoGroups.map((group, i) => (
            <LogoColumn
              key={i}
              columnLogos={group}
              delay={i * 200} // Slight stagger so they don't all flip at the exact same millisecond
            />
          ))}
        </div>
      </section>
    </div>
  );
}
