'use client';

import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useState } from 'react';

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

type FadeInStackProps = {
  className?: string;
  tabs: Tab[];
  hovering?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
};

type Toggle = 'logo' | 'poster' | 'video' | 'other';

export default function Tabs({
  tabs,
  containerClassName,
  // activeTabClassName,
  // tabClassName,
  contentClassName,
}: TabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  // const [hovering, setHovering] = useState(false);
  const [toggleValue, setToggleValue] = useState<Toggle>('logo');

  // const handleSelect = (idx: number) => {
  //   setActiveIdx(idx);
  // };

  const reorderedTabs = [
    tabs[activeIdx],
    ...tabs.filter((_, i) => i !== activeIdx),
  ];

  function handleToggleChange(value: Toggle) {
    setToggleValue(value);
    const idx = tabs.findIndex((tab) => tab.value === value);
    if (idx !== -1) {
      setActiveIdx(idx);
    }
  }

  return (
    <>
      <div
        // className={cn(
        //   'flex flex-row items-center justify-start perspective-[1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full h-full',
        //   containerClassName,
        // )}
        className={cn(
          'flex flex-col items-center justify-center w-full',
          containerClassName,
        )}>
        <AfterBeforeWrapper>
          <ToggleGroup
            className='border-l border-r border-border'
            type='single'
            defaultValue={toggleValue}
            onValueChange={handleToggleChange}>
            {/* {tabs.map((tab, idx) => {
            const isActive = idx === activeIdx;
            return (
              <ToggleGroupItem
                key={tab.value}
                style={{ transformStyle: 'preserve-3d' }}
                value='logo'
                // onMouseEnter={() => setHovering(true)}
                // onMouseLeave={() => setHovering(false)}
              >
                {tab.title}
              </ToggleGroupItem>
            );
          })} */}
            <ToggleGroupItem
              className='rounded-none'
              style={{ transformStyle: 'preserve-3d' }}
              value='logo'>
              Logo
            </ToggleGroupItem>
            <ToggleGroupItem
              className='rounded-none'
              style={{ transformStyle: 'preserve-3d' }}
              value='poster'>
              Poster
            </ToggleGroupItem>
            <ToggleGroupItem
              className='rounded-none'
              style={{ transformStyle: 'preserve-3d' }}
              value='video'>
              Video
            </ToggleGroupItem>
            <ToggleGroupItem
              className='rounded-none'
              style={{ transformStyle: 'preserve-3d' }}
              value='other'>
              Other
            </ToggleGroupItem>
          </ToggleGroup>
        </AfterBeforeWrapper>

        {/* <ScrollArea className='w-96 rounded-full border relative whitespace-nowrap perspective-[1000px] h-full'>
          <div className='flex flex-row items-center justify-start w-full space-x-4 py-2 sm:px-2 pr-30 sm:pr-0'>
            {tabs.map((tab, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={tab.value}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className={cn(
                    'relative px-4 py-2 rounded-full',
                    tabClassName,
                  )}
                  style={{ transformStyle: 'preserve-3d' }}>
                  {isActive && (
                    <motion.div
                      layoutId='clickedbutton'
                      transition={{
                        type: 'spring',
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                      className={cn(
                        'absolute inset-0 bg-primary rounded-full',
                        activeTabClassName,
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      'relative block text-sm',
                      isActive ? 'text-background' : 'text-foreground',
                    )}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea> */}
      </div>

      <FadeInStack
        tabs={reorderedTabs}
        // hovering={hovering}
        className={cn('mt-10', contentClassName)}
      />
    </>
  );
}

function FadeInStack({ className, tabs, hovering }: FadeInStackProps) {
  return (
    <div className='relative w-full h-125'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -15 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: idx === 0 ? [0, 40, 0] : 0,
          }}
          className={cn('w-full h-full absolute top-0 left-0', className)}>
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
}
