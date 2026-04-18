'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import EffectCarousel from '@/components/swiper-effects/effect-carousel';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { portfolios } from '@/constants/portfolios';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
// import EffectCarousel from './effect-carousel';

const slides = [
  {
    img: '/images/guardians-of-the-galaxy.jpg',
    title: 'Guardians Of The Galaxy',
    desc: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
  },
  {
    img: '/images/justice-league.jpg',
    title: 'Justice League',
    desc: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  },
  {
    img: '/images/spider-man.jpg',
    title: 'Spider-Man: Far from Home',
    desc: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
  },
  {
    img: '/images/suicide-squad.jpg',
    title: 'The Suicide Squad',
    desc: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
  },
  {
    img: '/images/thor-ragnarok.jpg',
    title: 'Thor: Ragnarok',
    desc: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
  },
  {
    img: '/images/dr-strange.jpg',
    title: 'Doctor Strange',
    desc: 'America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti.',
  },
  {
    img: '/images/eternals.jpg',
    title: 'Eternals',
    desc: 'In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to exterminate the invasive Deviants.',
  },
];

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
        Pagination,

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
