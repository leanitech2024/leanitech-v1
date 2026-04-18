// swiper-carousel.d.ts
import { SwiperOptions } from "swiper/types";

type CarouselEffectOptions = {
  opacityStep?: number;
  scaleStep?: number;
  sideSlides?: number;
};

type SwiperEffects =
  | "slide"
  | "fade"
  | "cube"
  | "coverflow"
  | "flip"
  | "creative"
  | "cards"
  | "carousel"
  | (string & {});

// Swiper slide element — extends HTMLElement with Swiper-specific props
export interface SwiperSlideElement extends HTMLElement {
  progress: number;
}

// Resolved params — carouselEffect is always defined after extendParams runs
export type SwiperResolvedParams = SwiperOptions & {
  containerModifierClass: string;
  carouselEffect?: CarouselEffectOptions;
};

declare module "swiper/types" {
  interface SwiperOptions {
    effect?: SwiperEffects;
    carouselEffect?: CarouselEffectOptions;
  }
}

declare module "swiper" {
  interface Swiper {
    classNames: string[];
    params: SwiperOptions & {
      containerModifierClass: string;
      virtual?: { enabled?: boolean } | boolean;
    };
    originalParams: SwiperResolvedParams;
    slides: SwiperSlideElement[];
    rtlTranslate: boolean;
  }
}
