'use client';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

type Item = {
  id: string;
  title: string;
};

const DATA: Item[] = [
  {
    id: crypto.randomUUID(),
    title: 'Pay-Per-Click Advertising (PPC)',
  },
  {
    id: crypto.randomUUID(),
    title: 'Social Media Marketing (SMM)',
  },
  {
    id: crypto.randomUUID(),
    title: 'Content Creation & Marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Email Marketing & Automation',
  },
  {
    id: crypto.randomUUID(),
    title: 'Bulk SMS Marketing & Campaigns',
  },
  {
    id: crypto.randomUUID(),
    title: 'WhatsApp Marketing & Automation',
  },
  {
    id: crypto.randomUUID(),
    title: 'Influencer Marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Affiliate Marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Branding & Creative Design',
  },
  {
    id: crypto.randomUUID(),
    title: 'Video Marketing & Production',
  },
  {
    id: crypto.randomUUID(),
    title: 'Performance Marketing',
  },
  {
    id: crypto.randomUUID(),
    title: 'Conversion Rate Optimization (CRO)',
  },
  {
    id: crypto.randomUUID(),
    title: 'Online Reputation Management (ORM)',
  },
  {
    id: crypto.randomUUID(),
    title: 'Marketing Automation & CRM Solutions',
  },
];

export default function ReminderCarousel() {
  const [visible, setVisible] = useState<Item[]>(DATA.slice(0, 3));
  const [pointer, setPointer] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => {
        const nextIndex = (pointer + 1) % DATA.length;
        setPointer(nextIndex);
        return [...prev.slice(1), DATA[nextIndex]];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [pointer]);

  return (
    <div className='relative flex flex-col items-center rounded-2xl h-52 w-full overflow-hidden'>
      <AnimatePresence initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ y: 215, opacity: 0, scale: 0.9 }}
            animate={{
              y: i * 70,
              scale: i === 1 ? 1 : 0.9,
              opacity: i === 1 ? 1 : 0.5,
            }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className='absolute flex items-center justify-between w-full px-5 py-4 rounded-xl bg-background border border-border text-card-foreground'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>{item.title}</span>
              </div>
              <Check size={20} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
