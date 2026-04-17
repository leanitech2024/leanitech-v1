import { useAboutPageContext } from '@/contexts/about-page-context';
import { motion } from 'motion/react';

export default function FloatingAccentElements() {
  const { y1, y2 } = useAboutPageContext();

  return (
    <>
      <motion.div
        className='absolute w-16 h-16 rounded-full -top-4 -right-8 bg-primary/10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ y: y1 }}></motion.div>
      <motion.div
        className='absolute w-20 h-20 rounded-full -bottom-6 -left-10 bg-primary/15'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{ y: y2 }}></motion.div>
    </>
  );
}
