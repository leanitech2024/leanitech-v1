'use client';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import EffectCarousel from '@/components/swiper-effects/effect-carousel';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { portfolios } from '@/constants/portfolios';

export default function SwiperCarousel() {
  return (
    <Swiper
      // effect carousel config
      // carouselEffect={{
      //   opacityStep: 0.33,
      //   scaleStep: 0.2,
      //   sideSlides: 3,
      // }}
      modules={[
        A11y,
        Autoplay,
        // Navigation,
        // Pagination,
        Keyboard,

        // custom effect plugin
        EffectCarousel,
      ]}
      effect='carousel'
      onBeforeInit={(swiper) => {
        swiper.params.carouselEffect = {
          opacityStep: 0.33,
          scaleStep: 0.2,
          sideSlides: 3,
        };
        swiper.originalParams.carouselEffect = {
          opacityStep: 0.33,
          scaleStep: 0.2,
          sideSlides: 3,
        };
      }}
      grabCursor={true}
      loop={true}
      loopAdditionalSlides={1}
      centeredSlides={true}
      slidesPerView='auto'
      // navigation={{
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }}
      // pagination={{ el: '.swiper-pagination' }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {portfolios.map((portfolio) => (
        <SwiperSlide
          key={portfolio.id}
          className={'bg-foreground dark:bg-background'}>
          <div className='swiper-carousel-animate-opacity'>
            {/* <img src={slide.img} alt={slide.title} /> */}
            <CldImage
              width={portfolio.width}
              height={portfolio.height}
              src={portfolio.public_id}
              className={'w-full h-full rounded-lg object-cover'}
              // loading={inView ? 'eager' : 'lazy'}
              sizes='100vw'
              alt='Description of my image'
            />
            <div className='slide-content'>
              <h3>{portfolio.title}</h3>
              <div>
                {portfolio.tags.map((tag) => (
                  <Badge key={tag} variant={'secondary'} className='mr-2'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div>
                <Link
                  href={portfolio.link}
                  target='_blank'
                  className={buttonVariants({ variant: 'link' })}>
                  View
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <div className='swiper-button-prev' />
      <div className='swiper-button-next' />
      <div className='swiper-pagination' /> */}
    </Swiper>
  );
}
