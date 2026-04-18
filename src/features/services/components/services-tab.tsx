import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { logoWork, posterWork, videoWork } from '@/constants/services';
import { LazyBalancedGrid } from './lazy';
import Tabs from './tabs';

const tabs = [
  {
    title: 'Logo Services',
    value: 'logo',
    content: (
      <div className={''}>
        <ScrollArea className='w-full overflow-x-hidden relative h-125 py-4 bg-background/5 backdrop-blur-2xl shadow-lg'>
          <div className={'space-y-4 mb-6'}>
            <AfterBeforeWrapper>
              <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
                Brand logo
              </h2>
            </AfterBeforeWrapper>
            <AfterBeforeWrapper>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-foreground leading-tight max-w-xl mx-auto'>
                Expertly crafted logo and brand identity to enhance your online
                presence and search engine visibility.
              </p>
            </AfterBeforeWrapper>
          </div>
          <LazyBalancedGrid data={logoWork} srcType='image' />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </div>
    ),
  },
  {
    title: 'Poster Services',
    value: 'poster',
    content: (
      <div className={''}>
        <ScrollArea className='w-full overflow-x-hidden relative h-125 py-4 bg-background/5 backdrop-blur-2xl shadow-lg'>
          <div className={'space-y-4 mb-6'}>
            <AfterBeforeWrapper>
              <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
                Social media poster
              </h2>
            </AfterBeforeWrapper>
            <AfterBeforeWrapper>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-foreground leading-tight max-w-xl mx-auto'>
                Elevate your online presence with our custom social media poster
                design services, optimized for Facebook, Instagram, Twitter, and
                more. Drive results with visuals that resonate!
              </p>
            </AfterBeforeWrapper>
          </div>
          <LazyBalancedGrid data={posterWork} srcType='image' />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </div>
    ),
  },
  {
    title: 'Video Services',
    value: 'video',
    content: (
      <div className={''}>
        <ScrollArea className='w-full overflow-x-hidden relative h-125 py-4 bg-background/5 backdrop-blur-2xl shadow-lg'>
          <div className={'space-y-4 mb-6'}>
            <AfterBeforeWrapper>
              <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
                Reels and video
              </h2>
            </AfterBeforeWrapper>

            <AfterBeforeWrapper>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-foreground leading-tight max-w-xl mx-auto'>
                Expert Reels and video editing services optimized for Instagram,
                YouTube, and more. Drive engagement and grow your brand with
                captivating visuals!
              </p>
            </AfterBeforeWrapper>
          </div>

          <LazyBalancedGrid data={videoWork} srcType='video' />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </div>
    ),
  },
  {
    title: 'Other Services',
    value: 'other',
    content: (
      <div className={''}>
        <ScrollArea className='w-full overflow-x-hidden relative h-125 py-4 bg-background/5 backdrop-blur-2xl shadow-lg'>
          <div className={'w-full h-full flex items-center justify-center'}>
            <div className={''}>
              <AfterBeforeWrapper>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
                  Coming Soon
                </h2>
              </AfterBeforeWrapper>
            </div>
          </div>
        </ScrollArea>
      </div>
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
