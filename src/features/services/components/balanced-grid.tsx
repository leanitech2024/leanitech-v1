'use client';

import { MyPlayer } from '@/components/shared/player';
import { Frame, BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useMasonaryItems } from '../hooks/use-items-v1';
// import { useItems } from '../hooks/use-items';

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
      }[];
      srcType: 'image';
    }
  | {
      data: {
        id: string;
        videoSrc: string;
        width: number;
        height: number;
      }[];
      srcType: 'video';
    };

export const defaultControlsData: ControlsData = {
  itemsCount: 35,
  frameWidth: 200,
  gap: 10,
  containerWidth: 100,
};

function Controls({ data, onChange }: ControlsProps) {
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

const initLightbox = () => {
  return GLightbox({
    autoplayVideos: false,
    closeEffect: 'fade',
    closeButton: true,
    closeOnOutsideClick: true,
    descPosition: 'bottom',
    draggable: true,
    dragAutoSnap: true,
    keyboardNavigation: true,
    loop: true,
    openEffect: 'fade', // fade, bounce, slide, none
    selector: '.glightbox',
    slideEffect: 'slide',
    touchNavigation: true,
    touchFollowAxis: true,
    width: '100%',
    height: '100%',
    zoomable: true,
    // slideHTML: `
    //   <div class="gslide">
    //     <div class="gslide-inner-content">
    //       <div class="ginner-container">
    //         <div class="gslide-media">
    //           <video class="gvideo" controls>
    //             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `,
  });
};

export default function BalancedGrid(props: BalancedGridProps) {
  const { data, srcType } = props;

  const [controlsData, setControlsData] = useState<ControlsData>({
    itemsCount: data.length,
    frameWidth: 200,
    gap: 10,
    containerWidth: 100,
  });

  const items = useMasonaryItems(controlsData.itemsCount, data);

  useEffect(() => {
    const lightbox = initLightbox();

    return () => {
      lightbox.destroy();
    };
  }, []);

  if (srcType === 'video') {
    return (
      <div className='container space-y-8'>
        <Controls onChange={setControlsData} data={controlsData} />

        <MasonryGrid
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
              style={{ backgroundColor: 'transparent' }}>
              {/* <MyPlayer src='https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4' /> */}
              <MyPlayer
                id={id}
                src={data[i % data.length].videoSrc}
                width={width}
                height={height}
              />
            </Frame>
          ))}
        </MasonryGrid>
      </div>
    );
  }

  return (
    <div className='container space-y-8'>
      <Controls onChange={setControlsData} data={controlsData} />

      <MasonryGrid
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
            style={{ backgroundColor: 'transparent' }}>
            <a
              key={id}
              href={data[i % data.length].imgSrc}
              className='glightbox glightbox-mobile'
              // data-title='My title'
              // data-description='description here'
              // data-desc-position='right'
              // data-type='image'
              data-effect='fade'
              // data-width='900px'
              // data-height='auto'
              data-zoomable='true'
              data-draggable='false'
              data-title={`Photo ${i + 1}`}
              data-description={`This is the description for photo ${i + 1}.`}
              data-type='image'
              data-glightbox={'type: image'}>
              <Image
                src={data[i % data.length].imgSrc}
                alt={`Photo ${i + 1}`}
                width={width}
                height={height}
                className={'w-full h-full'}
              />
            </a>
          </Frame>
        ))}
      </MasonryGrid>
    </div>
  );
}
