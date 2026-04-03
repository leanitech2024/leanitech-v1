import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { logoWork, posterWork, videoWork } from '@/constants/services';
import { LazyBalancedGrid } from './lazy';
import Tabs from './tabs';

const tabs = [
  {
    title: 'Logo Services',
    value: 'logo',
    content: (
      <ScrollArea className='w-full overflow-x-hidden relative rounded-2xl h-125 p-4 bg-background'>
        <LazyBalancedGrid data={logoWork} srcType='image' />
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    ),
  },
  {
    title: 'Poster Services',
    value: 'poster',
    content: (
      <ScrollArea className='w-full overflow-x-hidden relative rounded-2xl h-125 p-4 bg-background'>
        <LazyBalancedGrid data={posterWork} srcType='image' />
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    ),
  },
  {
    title: 'Video Services',
    value: 'video',
    content: (
      <ScrollArea className='w-full overflow-x-hidden relative rounded-2xl h-125 p-4 bg-background'>
        <LazyBalancedGrid data={videoWork} srcType='video' />
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    ),
  },
];

export default function ServicesTab() {
  return (
    <section
      className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 bg-backgroud'}>
      <div className='perspective-[1000px] relative flex flex-col items-start justify-start mb-13'>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}
