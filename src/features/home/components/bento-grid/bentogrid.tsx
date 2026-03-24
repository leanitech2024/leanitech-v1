import { Badge } from '@/components/ui/badge';
import AnimatedUiBlock from './AnimatedUiBlock';
import AppDevelopment from './app-development';
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
                <div className='bg-muted rounded-t-xl py-8 px-9 relative'>
                  <ReminderAnimation />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Digital Solutions & Media
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Crafting impactful websites with design, content, and
                    marketing.
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
                    Building custom software to streamline business operations.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border flex flex-col'>
                <div className='p-0 bg-muted rounded-t-xl h-full w-full flex-1 flex items-center justify-center'>
                  <AppDevelopment />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    App solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Creating intuitive mobile apps for iOS and Android.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border h-150 flex flex-col'>
                <div className='p-0 bg-muted rounded-t-xl flex-1 flex items-center justify-center'>
                  <SecureSolutionsBeam />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Networking And Secure Solutions
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Providing robust IT networks and cybersecurity to protect
                    your business.
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-4 col-span-12'>
              <div className='rounded-xl border border-border w-full h-150 flex flex-col'>
                <div className='p-0 bg-muted h-full w-full rounded-t-xl flex-1 flex items-center justify-center relative'>
                  <SeoOrbitingCircles />
                </div>
                <div className='flex flex-col gap-0.5 p-8 border-t border-border'>
                  <h3 className='text-xl font-medium text-foreground'>
                    Seo and Performance optimized
                  </h3>
                  <p className='text-base font-normal text-muted-foreground'>
                    Manage your SEO and performance with our optimized
                    components and layouts, designed to enhance your
                    website&apos;s visibility and speed.
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
