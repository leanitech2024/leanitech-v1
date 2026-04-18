'use client';

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

export const LazyPortfolioCarousel = dynamic(
  () => import('./swiper-carousel'),
  {
    loading: () => (
      <div className='rounded-lg w-130 max-w-[calc(100%-48px)] h-95 mx-auto'>
        <Skeleton className='w-full h-full' />
      </div>
    ),
    ssr: false,
  },
);
