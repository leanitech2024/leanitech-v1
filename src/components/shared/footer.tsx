import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '#' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Resources', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];
  return (
    <footer className='max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'>
      <div className='md:py-24 py-8'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-12'>
            <div className='grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both'>
              <div className='col-span-12 md:col-span-3'>
                <p className='w-full text-foreground'>
                  Stay updated with the latest news, promotions, and exclusive
                  offers.
                </p>
              </div>
              <div className='md:col-span-1' />
              <div className='col-span-12 md:col-span-8'>
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                  <form className='flex gap-2 flex-1'>
                    <Input
                      required
                      type='email'
                      name='email'
                      placeholder='enter your email'
                      className='rounded-full '
                    />

                    <Button
                      type='submit'
                      className='py-2 px-4 rounded-full cursor-pointer font-medium'>
                      Subscribe
                    </Button>
                  </form>
                  <p className='text-sm flex-1 text-foreground'>
                    By subscribing, you agree to receive our promotional emails.
                    You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
            <Separator />
          </div>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-7 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both'>
              <h2 className='sm:text-5xl text-3xl font-medium mb-6 text-foreground'>
                Unlock your business potential with Leanitech.
              </h2>
              <Link
                href={'#contact'}
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
            <div className='col-span-12 md:col-span-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both'>
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
            <div className='col-span-12 md:col-span-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both'>
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
            <Separator />
            <p className='text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-in-out fill-mode-both'>
              &copy;{new Date().getFullYear()} Leanitech. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
