import AfterBeforeWrapper from '@/components/shared/after-before-wrapper';
import ServicesTab from '@/features/services/components/services-tab';

export default function ServicePage() {
  return (
    <main className='pt-16 xs:pt-20 sm:pt-16 md:pt-12 lg:pt-8 space-y-8'>
      <section className={'max-w-(--breakpoint-md) mx-auto px-4 sm:px-6'}>
        <AfterBeforeWrapper>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
            ⚡ DISCOVER OUR EXPERTISE
          </h1>
        </AfterBeforeWrapper>
        <AfterBeforeWrapper>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground'>
            At Leanitech, we offer a wide range of cutting-edge digital
            solutions designed to help businesses innovate, grow, and stay ahead
            in a competitive market. Our services combine technology,
            creativity, and strategy to deliver impactful results.
          </p>
        </AfterBeforeWrapper>
      </section>

      <ServicesTab />
    </main>
  );
}
