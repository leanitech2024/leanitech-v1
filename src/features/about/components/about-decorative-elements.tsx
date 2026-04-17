'use client';

import { useAboutPageContext } from '@/contexts/about-page-context';
import { motion } from 'motion/react';

export default function AboutDecorativeElements() {
  const { y1, y2, rotate1, rotate2 } = useAboutPageContext();
  return (
    <>
      {/* Decorative background elements */}
      <motion.div
        className='absolute w-64 h-64 rounded-full top-20 left-10 bg-primary/10 blur-3xl'
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className='absolute rounded-full bottom-20 right-10 w-80 h-80 bg-primary/10 blur-3xl'
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className='absolute w-4 h-4 rounded-full top-1/2 left-1/4 bg-primary/30'
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute w-6 h-6 rounded-full bottom-1/3 right-1/4 bg-primary/30'
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </>
  );
}
