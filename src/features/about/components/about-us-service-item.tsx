import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'motion/react';

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  // variants: {
  //   hidden: { opacity: number; y?: number };
  //   visible: {
  //     opacity: number;
  //     y?: number;
  //     transition: { duration: number; ease: string };
  //   };
  // };
  variants: Variants;
  delay: number;
  direction: 'left' | 'right';
}

export default function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: ServiceItemProps) {
  return (
    <motion.div
      className='flex flex-col group'
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div
        className='flex items-center gap-3 mb-3'
        initial={{ x: direction === 'left' ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}>
        <motion.div
          className='relative p-3 transition-colors duration-300 rounded-lg text-primary bg-primary/10 group-hover:bg-primary/20'
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}>
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className='text-xl font-medium transition-colors duration-300 text-muted-foreground group-hover:text-primary'>
          {title}
        </h3>
      </motion.div>
      <motion.p
        className='pl-12 text-sm leading-relaxed text-muted-foreground/80'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}>
        {description}
      </motion.p>
      <motion.div
        className='flex items-center pl-12 mt-3 text-xs font-medium transition-opacity duration-300 text-muted-foreground opacity-1 group-hover:opacity-100'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <span className='flex items-center gap-1'>
          Learn more <ArrowRight className='w-3 h-3' />
        </span>
      </motion.div>
    </motion.div>
  );
}
