'use client';

import { motion, Variants } from 'motion/react';

type PortfolioMotionWrapperProps = {
  index: number | string;
  children: React.ReactNode;
};

export default function PortfolioMotionWrapper(
  props: PortfolioMotionWrapperProps,
) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: 'circOut',
      },
    }),
  } as Variants;

  return (
    <motion.div
      key={props.index}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={props.index}
      variants={cardVariants}
      className='group'>
      {props.children}
    </motion.div>
  );
}
