'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { buildItems } from '@/lib/utils';
import { Frame, BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/react';
import dynamic from 'next/dynamic';

export const LazyBalancedGrid = dynamic(
  () => import('./balanced-grid').then((mod) => mod),
  {
    ssr: false,
    loading: () => (
      <div className='container'>
        <LazyMasonaryGrid />
      </div>
    ),
  },
);

function LazyMasonaryGrid() {
  const items = buildItems(20);

  return (
    <MasonryGrid
      className='container'
      gap={10}
      frameWidth={200}
      style={{ width: `${String(100)}%` }}>
      {/* eslint-disable-next-line */}
      {items.map(({ width, height, backgroundColor }, i) => (
        <Frame
          key={i}
          className='frame'
          width={width}
          height={height}
          // style={{ backgroundColor }}
        >
          <Skeleton
            className={'animate-pulse w-full h-full rounded-md'}
            // style={{ width: '100%', height: '100%' }}
          />
        </Frame>
      ))}
    </MasonryGrid>
  );
}
