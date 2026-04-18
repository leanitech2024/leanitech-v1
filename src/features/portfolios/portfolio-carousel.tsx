'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  // CarouselButton,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { portfolios } from '@/constants/portfolios';
import { cn } from '@/lib/utils';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

function CarouselButton({ segment }: { segment: 'previous' | 'next' }) {
  const { scrollPrev, scrollNext } = useCarousel();
  return (
    <Button
      variant='outline'
      className={cn(
        'rounded-full p-2',
        segment === 'previous' ? 'mr-2' : 'ml-2',
      )}
      onClick={segment === 'previous' ? scrollPrev : scrollNext}>
      {segment === 'previous' ? (
        <ArrowLeftCircle className={'size-4'} />
      ) : (
        <ArrowRightCircle className={'size-4'} />
      )}
    </Button>
  );
}

export function PortfolioCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrent(index + 1);
    }
  };
  // const { carouselRef } = useCarousel();

  // const inView = useInView(carouselRef, {
  //   margin: '-200px',
  //   once: false,
  //   initial: true,
  // });

  // calculate slider dots based on the number of items and the number of items per view
  // per view is1, dots would be 3 prev,current,next
  // const itemsPerView = 1;
  // const totalItems = portfolios.length;
  // const totalDots = Math.ceil(totalItems / itemsPerView);

  // const currentIndex = current - 1;
  // const dotIndexes = [currentIndex - 1, currentIndex, currentIndex + 1].filter(
  //   (index) => index >= 0 && index < count,
  // );

  const currentIndex = current - 1; // again 0
  const startIndex = Math.max(0, Math.min(currentIndex - 1, count - 3));
  const visibleIndexes = Array.from(
    { length: Math.min(3, count) },
    (_, offset) => startIndex + offset,
  );

  // how to use the api to scroll to the selected dot index

  return (
    <Carousel setApi={setApi} className=''>
      <CarouselContent>
        {portfolios.map((portfolio) => (
          <CarouselItem key={portfolio.id}>
            <Card>
              <CardContent className='flex aspect-video h-full w-full items-center justify-center'>
                <CldImage
                  width={portfolio.width}
                  height={portfolio.height}
                  src={portfolio.public_id}
                  className={'w-full h-full rounded-lg'}
                  // loading={inView ? 'eager' : 'lazy'}
                  sizes='100vw'
                  alt='Description of my image'
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{portfolio.title}</CardTitle>
              </CardHeader>
              <Separator />
              <CardContent>
                <CardDescription>
                  {portfolio.tags.map((tag) => (
                    <Badge key={tag} variant={'secondary'} className='mr-2'>
                      {tag}
                    </Badge>
                  ))}
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex gap-1 py-2 text-center text-muted-fg text-sm'>
          {/* {Array.from({ length: totalDots }).map((_, index) => ( */}

          {visibleIndexes.map((_, index) => (
            <Button
              variant={'ghost'}
              size={'icon-xs'}
              className={cn(
                'rounded-xl transition focus:outline-hidden',
                current === index + 1
                  ? 'h-3 w-5 bg-primary transition-all hover:bg-primary/80'
                  : 'h-3 w-3 bg-foreground/10 hover:bg-foreground/15',
              )}
              aria-label={`Slide ${current} of ${count}`}
              onClick={() => handleSelect(index)}
              key={index}
            />
          ))}
        </div>

        <div className='space-x-2'>
          <CarouselButton segment='previous' />
          <CarouselButton segment='next' />
        </div>
      </div>
    </Carousel>
  );
}
