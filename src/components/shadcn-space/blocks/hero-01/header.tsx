'use client';

// import Logo from '@/assets/logo/logo';
import { AnimatedThemeToggler } from '@/components/extends/animated-theme-toggler';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Logo } from '@/components/shared/navbar/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigations } from '@/constants';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  // navigationData: NavigationSection[];
  className?: string;
};

// const CollaborateButton = ({ className }: { className?: string }) => (
//   <Button
//     className={cn(
//       'relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden',
//       className,
//     )}>
//     <span className='relative z-10 transition-all duration-500'>
//       Let&apos;s Collaborate
//     </span>
//     <span className='absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45'>
//       <ArrowUpRight size={16} />
//     </span>
//   </Button>
// );

const Header = ({ className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);

  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className={cn(
        'inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20',
        className,
      )}>
      <div
        className={cn(
          'w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500',
          sticky
            ? 'p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full'
            : 'bg-transparent border-transparent',
        )}>
        {/* Logo */}
        <div>
          <a href='#'>
            {/* <Logo className='gap-3' /> */}
            <Logo />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className='max-lg:hidden bg-muted p-0.5 rounded-full'>
            <NavigationMenuList className='flex gap-0'>
              {navigations.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      'px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal',
                      // navItem.isActive ? 'bg-background text-foreground' : '',
                      pathname === navItem.href
                        ? 'bg-background text-foreground'
                        : '',
                    )}>
                    <Link href={navItem.href}>{navItem.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className='flex gap-4'>
          <AnimatedThemeToggler />
          <CollaborateButton className='hidden lg:flex'>
            Let&apos;s Collaborate
          </CollaborateButton>

          <div className='lg:hidden'>
            <LazyMobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

export const LazyMobileMenu = dynamic(() => import('./mobile-menu'), {
  ssr: false,
  loading: () => (
    <span className='rounded-full border border-border p-2 block opacity-0'>
      <Icon icon='solar:hamburger-menu-linear' width={20} height={20} />
    </span>
  ),
});
