import AndroidMockDevice from '@/components/extends/android-mock-device';
import { Badge } from '@/components/ui/badge';
import AnimatedUiBlock from './AnimatedUiBlock';
import ReminderAnimation from './ReminderAnimation';
import SecureSolutionsBeam from './secure-solutions-beam';
import SeoOrbitingCircles from './seo-orbitting-circle';

const Bentogrid = () => {
  return (
    <section
      id='features'
      className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
      <div className='py-11 md:py-20'>
        <div className='container mx-auto flex flex-col gap-12'>
          <div className='flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto'>
            <Badge
              variant={'outline'}
              className='px-3 py-1 h-auto text-sm font-normal'>
              Our Services
            </Badge>
            <h2 className='text-center md:text-5xl text-3xl mx-auto font-medium'>
              Comprehensive IT Solutions Tailored to Your Business Needs
            </h2>
          </div>
          <div className='grid grid-cols-12 gap-5'>
            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border'>
                <div className='bg-muted rounded-t-xl py-8 px-4 relative'>
                  <ReminderAnimation />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Digital Solutions & Media
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Driving global visibility with responsive design, optimized
                    content, and performance-based digital marketing solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-8 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border'>
                <div className='bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative'>
                  <AnimatedUiBlock />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Software Solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Leanitech empowers businesses with powerful, future-ready
                    software solutions. Scale faster with secure,
                    high-performance systems built for global success. Drive
                    transformation with Leanitech’s cutting-edge software
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border flex flex-col'>
                <div className='p-0 bg-muted rounded-t-xl h-full w-full flex-1 flex items-center justify-center'>
                  {/* <AppDevelopment /> */}
                  <div className='relative aspect-video lg:aspect-square h-full w-full'>
                    <AndroidMockDevice
                      className='w-full h-full'
                      src='https://images.unsplash.com/photo-1730326405863-c6fa7e499a6e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    App solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Crafting next-generation mobile applications for iOS and
                    Android with optimized performance, user-centric design, and
                    global scalability to drive engagement and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border flex flex-col'>
                <div className='p-0 bg-muted rounded-t-xl flex-1 flex items-center justify-center'>
                  <div
                    className={'aspect-video lg:aspect-square w-full h-full'}>
                    <SecureSolutionsBeam />
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Networking And Secure Solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Strengthening business operations with secure network
                    architecture and cutting-edge cybersecurity solutions.
                    Providing robust IT networks and cybersecurity to protect
                    your business.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12'>
              <div className='rounded-xl border border-border flex flex-col'>
                <div className='p-0 bg-muted h-full w-full rounded-t-xl flex-1 flex items-center justify-center relative'>
                  <div
                    className={'aspect-video lg:aspect-square w-full h-full'}>
                    <SeoOrbitingCircles />
                  </div>
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Seo and Performance optimized
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Optimize your website with high-performance components and
                    efficient global architecture. Enhance SEO rankings, speed,
                    and user experience across international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
