import { motion } from 'motion/react';

export default function AdditionalDecorativeElements() {
  return (
    <>
      {/* Additional decorative elements */}
      <motion.div
        className='absolute w-3 h-3 -translate-x-1/2 rounded-full -top-10 left-1/2 bg-primary'
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}></motion.div>
      <motion.div
        className='absolute w-2 h-2 -translate-x-1/2 rounded-full -bottom-12 left-1/2 bg-primary'
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}></motion.div>
    </>
  );
}
