import { useEffect, useRef, useState } from 'react';

import { Lines } from '@/components/shared/card-decorators';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

export default function AboutUsStatCounter(props: StatCounterProps) {
  const { icon, value, label, suffix, delay } = props;

  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value); // Assuming you want to animate the first stat's value
      // eslint-disable-next-line
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, springValue, hasAnimated, value]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest),
  );

  return (
    <motion.div
      className='relative flex flex-col items-center p-6 text-center transition-colors duration-300 group'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileFocus={{
        rotate: 360,
      }}>
      <Lines />

      <motion.div
        className='flex items-center justify-center my-4 transition-colors duration-300 rounded-full w-14 h-14 bg-card text-primary group-hover:bg-primary/10'
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className='flex items-center text-3xl font-bold text-primary'>
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className='mt-1 text-sm text-muted-foreground/70'>{label}</p>
      <motion.div className='w-10 h-0.5 bg-primary my-3 group-hover:w-16 transition-all duration-300' />
    </motion.div>
  );
}
