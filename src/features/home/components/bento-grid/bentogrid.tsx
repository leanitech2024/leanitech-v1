import {
  AppDevelopment,
  // DigitalMarketingCover,
  NetworkingCover,
  SeoCover,
} from '@/assets/services/covers';
import { Badge } from '@/components/ui/badge';
import {
  CalendarIcon,
  FileInputIcon,
  FileTextIcon,
  GlobeIcon,
} from 'lucide-react';
import AnimatedUiBlock from './AnimatedUiBlock';
import ReminderAnimation from './ReminderAnimation';

// import Logo from './07.svg';

const features = [
  {
    Icon: FileTextIcon,
    name: 'Digital Solutions & Media',
    description:
      'Crafting impactful websites with design, content, and marketing.',
    href: '/',
    cta: 'Learn more',
    background: (
      <img
        src='/bento-1.png'
        className='absolute w-full h-full top-0 right-0 opacity-90 dark:opacity-60'
        alt='bento 1'
      />
    ),
    // className: 'col-span-3 lg:col-span-1',
    className: 'col-span-3 lg:col-span-2',
  },
  {
    Icon: FileInputIcon,
    name: 'Software Solutions',
    description: 'Building custom software to streamline business operations.',
    href: '/',
    cta: 'Learn more',
    background: (
      <img
        src='/bento-2.png'
        className='absolute w-full h-full top-0 right-0 opacity-90 dark:opacity-60'
        alt='bento 2'
      />
    ),
    // className: 'col-span-3 lg:col-span-2',
    className: 'col-span-3 lg:col-span-1',
  },
  {
    Icon: GlobeIcon,
    name: 'App solutions',
    description: 'Creating intuitive mobile apps for iOS and Android.',
    href: '/',
    cta: 'Learn more',
    background: (
      <img
        src='/bento-3.png'
        className='absolute w-full h-full top-0 right-0 opacity-90 dark:opacity-60'
        alt='bento 3'
      />
    ),
    // className: 'col-span-3 lg:col-span-2',
    className: 'col-span-3 lg:col-span-1',
  },
  {
    Icon: CalendarIcon,
    name: 'Networking And Secure Solutions',
    description:
      'Providing robust IT networks and cybersecurity to protect your business.',
    href: '/',
    cta: 'Learn more',
    background: (
      <img
        src='/bento-4.png'
        className='absolute w-full h-full top-0 right-0 opacity-90 dark:opacity-60'
        alt='bento 4'
      />
    ),
    // className: 'col-span-3 lg:col-span-1',
    className: 'col-span-3 lg:col-span-2',
  },
  // {
  //   Icon: BellIcon,
  //   name: 'Notifications',
  //   description:
  //     'Get notified when someone shares a file or mentions you in a comment.',
  //   href: '/',
  //   cta: 'Learn more',
  //   background: <img className='absolute -top-20 -right-20 opacity-60' />,
  //   className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  // },
];

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
              Bento Grid Features
            </Badge>
            <h2 className='text-center md:text-5xl text-3xl mx-auto font-medium'>
              Beautifully and well balanced bento grid design section
            </h2>
          </div>
          <div className='grid grid-cols-12 gap-5'>
            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border'>
                <div className='bg-muted rounded-t-xl py-8 px-9 relative'>
                  <ReminderAnimation />
                  {/* <DigitalMarketingCover /> */}
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
              <div className='rounded-xl border border-border h-full flex flex-col'>
                <div className='p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center'>
                  <AppDevelopment />
                  {/* <img
                    src='https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-1.png'
                    alt='layout options'
                    className='dark:hidden'
                  />
                  <img
                    src='https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-1.png'
                    alt='layout options'
                    className='hidden dark:block'
                  /> */}
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
              <div className='rounded-xl border border-border h-full flex flex-col'>
                <div className='p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center'>
                  {/* <img
                    src='https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-2.png'
                    alt='documentation'
                    className='dark:hidden'
                  />
                  <img
                    src='https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-2.png'
                    alt='documentation'
                    className='hidden dark:block'
                  /> */}
                  <NetworkingCover />
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

            <div className='lg:col-span-4 col-span-12 overflow-hidden'>
              <div className='rounded-xl border border-border h-full flex flex-col'>
                <div className='p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative'>
                  {/* <img src='/07.svg' alt='color options' /> */}
                  <SeoCover />
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
