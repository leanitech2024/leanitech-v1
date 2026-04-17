import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import AfterBeforeWrapper from './after-before-wrapper';
import { LeftSidePattern, RightSidePattern } from './side-patterns';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '#' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Resources', href: '#' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-and-conditions' },
    { label: 'Contact Us', href: '#' },
  ];
  return (
    <div
      className={
        'grid min-h-full grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0'
      }>
      <LeftSidePattern />
      <footer className='max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'>
        <div className='py-8 md:py-24'>
          <div className='flex flex-col gap-16'>
            <NewsLetterCTA />
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-12 duration-1000 ease-in-out delay-100 md:col-span-7 animate-in fade-in slide-in-from-bottom-10 fill-mode-both'>
                <h2 className='mb-6 text-3xl font-medium sm:text-5xl text-foreground'>
                  Unlock your business potential with Leanitech.
                </h2>
                <Link
                  href={'/contact'}
                  scroll
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'py-3.5 px-6 rounded-full h-auto',
                  )}>
                  Connect Now
                </Link>
                {/* <Button className='py-3.5 px-6 rounded-full h-auto'>
                Get in touch
              </Button> */}
              </div>
              <div className='md:col-span-1' />
              <div className='col-span-12 duration-1000 ease-in-out delay-100 md:col-span-2 animate-in fade-in slide-in-from-bottom-10 fill-mode-both'>
                <div className='flex flex-col gap-4'>
                  {footerLinks.slice(0, 4).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className='block text-base text-muted-foreground hover:text-primary'>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='col-span-12 duration-1000 ease-in-out delay-200 md:col-span-2 animate-in fade-in slide-in-from-bottom-10 fill-mode-both'>
                <div className='flex flex-col gap-4'>
                  {footerLinks.slice(4, 8).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className='block text-base text-muted-foreground hover:text-primary'>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-12'>
              {/* <Separator /> */}
              <AfterBeforeWrapper>
                <p className='text-sm duration-1000 ease-in-out delay-300 text-muted-foreground animate-in fade-in slide-in-from-bottom-10 fill-mode-both'>
                  &copy;{new Date().getFullYear()} Leanitech. All Rights
                  Reserved
                </p>
              </AfterBeforeWrapper>
            </div>
          </div>
        </div>
      </footer>
      <RightSidePattern />
    </div>
  );
}

function NewsLetterCTA() {
  return (
    <AfterBeforeWrapper className='py-1'>
      <div className='flex flex-col gap-12'>
        <div className='grid grid-cols-12 gap-6 duration-1000 ease-in-out delay-100 animate-in fade-in slide-in-from-bottom-10 fill-mode-both'>
          <div className='col-span-12 md:col-span-3'>
            <p className='w-full text-foreground'>
              Stay updated with the latest news, promotions, and exclusive
              offers.
            </p>
          </div>
          <div className='md:col-span-1' />
          <div className='self-center col-span-12 mt-1 md:col-span-8'>
            <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
              <form className='flex flex-1 gap-2'>
                <Input
                  required
                  type='email'
                  name='email'
                  placeholder='enter your email'
                  className='rounded-full '
                />

                <Button
                  type='submit'
                  className='px-4 py-2 font-medium rounded-full cursor-pointer'>
                  Subscribe
                </Button>
              </form>
              <p className='flex-1 text-sm text-foreground'>
                By subscribing, you agree to receive our promotional emails. You
                can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        {/* <Separator /> */}
      </div>
    </AfterBeforeWrapper>
  );
}
