// import type { SwiperSlideElement } from '@/types/swiper-carousel';
import { SwiperSlideElement } from '@/types/swiper-carousel';
import type { Swiper } from 'swiper';
// import { SwiperOptions } from 'swiper/types';

import './effect-carousel.css';

type CarouselEffectOptions = {
  opacityStep: 0.33;
  scaleStep: 0.2;
  sideSlides: 2;
};

/**
 * dont change any code 
i was trying to convert this esm code into a swiper that i can used swiper module arrray with typesafe manner,
for that maybe we need to overwrite the exsting swiper type
 */

type EffectCarouselProps = {
  swiper: Swiper;
  on: Swiper['on'];
  extendParams: (
    newParams: Partial<{ carouselEffect: CarouselEffectOptions }>,
  ) => void;
};

export default function EffectCarousel({
  swiper,
  on,
  extendParams,
}: EffectCarouselProps) {
  extendParams({
    carouselEffect: {
      opacityStep: 0.33,
      scaleStep: 0.2,
      sideSlides: 2,
    },
  });

  on('beforeInit', () => {
    if (swiper.params.effect !== 'carousel') return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
    const overwriteParams = {
      watchSlidesProgress: true,
      centeredSlides: true,
    };

    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });

  on('progress', () => {
    if (swiper.params.effect !== 'carousel') return;
    const { scaleStep = 0.2, opacityStep = 0.33 } =
      swiper.params.carouselEffect || {};
    const sideSlides = Math.max(
      Math.min(swiper?.params?.carouselEffect?.sideSlides || 2, 3),
      1,
    ) as 1 | 2 | 3;
    const modifyMultiplier = {
      1: 2,
      2: 1,
      3: 0.2,
    }[sideSlides];
    const translateModifier = {
      1: 50,
      2: 50,
      3: 67,
    }[sideSlides];

    const zIndexMax = swiper.slides.length;

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i] as SwiperSlideElement;
      const slideProgress = slideEl.progress;
      const absProgress = Math.abs(slideProgress);
      let modify = 1;

      if (absProgress > 1) {
        modify = (absProgress - 1) * 0.3 * modifyMultiplier + 1;
      }
      const opacityEls = slideEl.querySelectorAll<HTMLElement>(
        '.swiper-carousel-animate-opacity',
      );
      const translate = `${
        slideProgress *
        modify *
        translateModifier *
        (swiper.rtlTranslate ? -1 : 1)
      }%`;

      const scale = 1 - absProgress * scaleStep;
      const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
      slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
      slideEl.style.zIndex = zIndex.toString();
      if (absProgress > sideSlides + 1) {
        slideEl.style.opacity = '0';
      } else {
        slideEl.style.opacity = '1';
      }

      opacityEls.forEach((opacityEl) => {
        opacityEl.style.opacity = (1 - absProgress * opacityStep).toString();
      });
    }
  });

  on('resize', () => {
    if (
      swiper.virtual &&
      swiper.params.virtual &&
      (typeof swiper.params.virtual === 'boolean'
        ? swiper.params.virtual
        : swiper.params.virtual.enabled)
    ) {
      requestAnimationFrame(() => {
        if (swiper.destroyed) return;
        swiper.updateSlides();
        swiper.updateProgress();
      });
    }
  });

  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== 'carousel') return;
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const opacityEls = slideEl.querySelectorAll<HTMLElement>(
        '.swiper-carousel-animate-opacity',
      );
      slideEl.style.transitionDuration = `${duration}ms`;
      opacityEls.forEach((opacityEl) => {
        opacityEl.style.transitionDuration = `${duration}ms`;
      });
    }
  });
}
