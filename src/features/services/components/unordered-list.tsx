'use client';

import { Frame, BalancedMasonryGrid as MasonryGrid } from '@masonry-grid/react';
import { useState } from 'react';
import { useItems } from '../hooks/use-items';

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

// export type AspectRatio = [number, number];

// const aspectRatios: AspectRatio[] = [
//   [1, 1],
//   [2, 3],
//   [3, 2],
// ];

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
    <div className='controls'>
      <div className='control-group'>
        <label htmlFor='itemsCount'>Items Count: {data.itemsCount}</label>
        <input
          id='itemsCount'
          type='range'
          min='3'
          max='100'
          value={data.itemsCount}
          onChange={(e) => handleChange('itemsCount', Number(e.target.value))}
        />
      </div>

      <div className='control-group'>
        <label htmlFor='frameWidth'>Frame Width: {data.frameWidth}px</label>
        <input
          id='frameWidth'
          type='range'
          min='50'
          max='300'
          value={data.frameWidth}
          onChange={(e) => handleChange('frameWidth', Number(e.target.value))}
        />
      </div>

      <div className='control-group'>
        <label htmlFor='gap'>Gap: {data.gap}px</label>
        <input
          id='gap'
          type='range'
          min='0'
          max='40'
          value={data.gap}
          onChange={(e) => handleChange('gap', Number(e.target.value))}
        />
      </div>

      <div className='control-group'>
        <label htmlFor='containerWidth'>
          Container Width: {data.containerWidth}%
        </label>
        <input
          id='containerWidth'
          type='range'
          min='0'
          max='100'
          value={data.containerWidth}
          onChange={(e) =>
            handleChange('containerWidth', Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default function UnorderedList() {
  const [controlsData, setControlsData] =
    useState<ControlsData>(defaultControlsData);
  const items = useItems(controlsData.itemsCount);

  return (
    <div className='container'>
      <h1>Unordered List Masonry Grid - React</h1>
      <p className='description'>
        This example demonstrates using semantic HTML elements (ul/li) with the
        masonry grid.
      </p>

      <Controls onChange={setControlsData} data={controlsData} />

      <MasonryGrid
        as='ul'
        className='container masonry-list'
        gap={controlsData.gap}
        frameWidth={controlsData.frameWidth}
        style={{ width: `${String(controlsData.containerWidth)}%` }}>
        {items.map(({ width, height, backgroundColor }, i) => (
          <Frame
            as='li'
            key={i}
            className='frame'
            width={width}
            height={height}
            style={{ backgroundColor }}>
            {i + 1}
          </Frame>
        ))}
      </MasonryGrid>
    </div>
  );
}
