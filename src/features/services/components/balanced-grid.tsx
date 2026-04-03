'use client';

import { Frame, BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/react';
import { useInView } from 'motion/react';
import { CldImage } from 'next-cloudinary';
import { useRef, useState } from 'react';

import { MyPlayer } from '@/components/shared/player';

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useMasonaryItems } from '../hooks/use-masonary-items';

export interface ControlsData {
  itemsCount: number;
  frameWidth: number;
  gap: number;
  containerWidth: number;
}

interface ControlsProps {
  data: ControlsData;
  onChange: (data: ControlsData) => void;
}

type BalancedGridProps =
  | {
      data: {
        id: string;
        imgSrc: string;
        width: number;
        height: number;
        public_id: string;
      }[];
      srcType: 'image';
    }
  | {
      data: {
        id: string;
        videoSrc: string;
        width: number;
        height: number;
        public_id: string;
      }[];
      srcType: 'video';
    };

export const defaultControlsData: ControlsData = {
  itemsCount: 35,
  frameWidth: 200,
  gap: 10,
  containerWidth: 100,
};

export function Controls({ data, onChange }: ControlsProps) {
  const handleChange = (key: keyof ControlsData, value: number) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <FieldGroup className='gap-4'>
      <Field>
        <FieldLabel htmlFor='itemsCount'>
          Items Count: {data.itemsCount}
        </FieldLabel>
        <Input
          id='itemsCount'
          type='range'
          min='3'
          max='100'
          value={data.itemsCount}
          className={'h-fit'}
          onChange={(e) => handleChange('itemsCount', Number(e.target.value))}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor='frameWidth'>
          Frame Width: {data.frameWidth}px
        </FieldLabel>
        <Input
          id='frameWidth'
          type='range'
          min='50'
          max='300'
          value={data.frameWidth}
          className={'h-fit'}
          onChange={(e) => handleChange('frameWidth', Number(e.target.value))}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor='gap'>Gap: {data.gap}px</FieldLabel>
        <Input
          id='gap'
          type='range'
          min='0'
          max='40'
          value={data.gap}
          className={'h-fit'}
          onChange={(e) => handleChange('gap', Number(e.target.value))}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor='containerWidth'>
          Container Width: {data.containerWidth}%
        </FieldLabel>
        <Input
          id='containerWidth'
          type='range'
          min='0'
          max='100'
          className={'h-fit'}
          value={data.containerWidth}
          onChange={(e) =>
            handleChange('containerWidth', Number(e.target.value))
          }
        />
      </Field>
    </FieldGroup>
  );
}

export default function BalancedGrid(props: BalancedGridProps) {
  const { data, srcType } = props;

  const [controlsData] = useState<ControlsData>({
    itemsCount: data.length,
    frameWidth: 200,
    gap: 10,
    containerWidth: 100,
  });

  const masonaryRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(masonaryRef, {
    margin: '-200px',
    once: false,
    initial: true,
  });
  const items = useMasonaryItems(controlsData.itemsCount, data);

  // useEffect(() => {
  //   const lightbox = initLightbox();

  //   return () => {
  //     lightbox.destroy();
  //   };
  // }, []);

  if (srcType === 'video') {
    return (
      <div className='container space-y-8'>
        {/* <Controls onChange={setControlsData} data={controlsData} /> */}

        <MasonryGrid
          // ref={masonaryContainerRef}
          className='container'
          gap={controlsData.gap}
          frameWidth={controlsData.frameWidth}
          style={{ width: `${String(controlsData.containerWidth)}%` }}>
          {items.map(({ width, height, id }, i) => (
            <Frame
              key={id}
              className='frame'
              width={width}
              height={height}
              // style={{ backgroundColor: 'transparent' }}
            >
              {/* <MyPlayer src='https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4' /> */}
              <MyPlayer
                id={id}
                src={data[i % data.length].videoSrc}
                width={width}
                height={height}
                isInView={inView}
              />
            </Frame>
          ))}
        </MasonryGrid>
      </div>
    );
  }

  return (
    <div ref={masonaryRef} className='container space-y-8'>
      {/* <Controls onChange={setControlsData} data={controlsData} /> */}

      <MasonryGrid
        className='container'
        gap={controlsData.gap}
        frameWidth={controlsData.frameWidth}
        style={{ width: `${String(controlsData.containerWidth)}%` }}>
        {items.map(({ width, height, id }, i) => (
          <Frame
            key={id}
            // style={{ backgroundColor: 'transparent' }}
            className='frame'
            width={width}
            height={height}>
            <CldImage
              width={width}
              height={height}
              src={data[i % data.length].public_id}
              className={'w-full h-full'}
              loading={inView ? 'eager' : 'lazy'}
              sizes='100vw'
              alt='Description of my image'
            />
          </Frame>
        ))}
      </MasonryGrid>
    </div>
  );
}
