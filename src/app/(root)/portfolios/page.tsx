import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import { LazyPortfolioCarousel } from '@/features/portfolios/lazy';
// import { portfolios } from '@/constants/portfolios';
// import PortfolioCard from '@/features/home/components/portfolios/portfolio-card';
// import PortfolioMotionWrapper from '@/features/home/components/portfolios/portfolio-motion-wrapper';
// import { PortfolioCarousel } from '@/features/portfolios/portfolio-carousel';
// import { getResoursesByFolder } from '@/lib/cloudinary';

export default function PortfoliosPage() {
  // Home > leaniech-v1 > portfolios = clodinary folder name
  // const result = await getResoursesByFolder('leanitech-v1/portfolios');
  // console.log('Cloudinary Resources:', JSON.stringify(result, null, 2));

  return (
    <main className='pt-16 xs:pt-20 sm:pt-16 md:pt-12 lg:pt-8 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16'>
      <section className={'max-w-(--breakpoint-md) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
            Our Portfolios
          </h1>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            Explore our diverse range of portfolios showcasing our expertise and
            creativity in various industries. Each portfolio highlights our
            commitment to delivering exceptional results and innovative
            solutions for our clients.
          </p>
        </AfterBeforeWrapper>
      </section>

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <LazyPortfolioCarousel />
        </AfterBeforeWrapper>
      </section>

      <section className={'max-w-(--breakpoint-md) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <h2 className='text-2xl text-center font-bold mb-4'>
            Want to connect with us?
          </h2>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-lg text-center text-muted-foreground mb-8'>
            We are always open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hello, feel free to
            reach out to us. Let&apos;s create something amazing together!
          </p>
        </AfterBeforeWrapper>
      </section>

      {/* <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <PortfolioCarousel />
      </section> */}

      {/* <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-24 w-full'>
            {portfolios.map((item, index) => (
              <PortfolioMotionWrapper key={item.id} index={index}>
                <PortfolioCard {...item} />
              </PortfolioMotionWrapper>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <MyPlayer src='https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4' />
      </section> */}
    </main>
  );
}
