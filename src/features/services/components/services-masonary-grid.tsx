'use client';

import { Frame, BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/react';
import Image from 'next/image';

export default function ServicesMasonaryGrid() {
  return (
    <div>
      <MasonryGrid frameWidth={200} gap={10}>
        <Frame width={4} height={3}>
          <Image
            src='https://picsum.photos/400/300'
            alt='Photo 1'
            width={400}
            height={300}
            className={'w-full h-full'}
          />
        </Frame>
        <Frame width={1} height={1}>
          <Image
            src='https://picsum.photos/200/200'
            alt='Photo 2'
            width={200}
            height={200}
            className={'w-full h-full'}
          />
        </Frame>
        <Frame width={3} height={4}>
          <Image
            src='https://picsum.photos/300/400'
            alt='Photo 3'
            width={300}
            height={400}
            className={'w-full h-full'}
          />
        </Frame>
        <Frame width={3} height={4}>
          <Image
            src='https://picsum.photos/300/400'
            alt='Photo 4'
            width={300}
            height={400}
            className={'w-full h-full'}
          />
        </Frame>
        <Frame width={1} height={1}>
          <Image
            src='https://picsum.photos/200/200'
            alt='Photo 5'
            width={200}
            height={200}
            className={'w-full h-full'}
          />
        </Frame>
        <Frame width={4} height={3}>
          <Image
            src='https://picsum.photos/400/300'
            alt='Photo 6'
            width={400}
            height={300}
            className={'w-full h-full'}
          />
        </Frame>
      </MasonryGrid>
    </div>
  );
}
