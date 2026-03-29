'use client';

import { AnimatedThemeToggler } from '@/components/extends/animated-theme-toggler';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Logo } from '@/components/shared/logo';
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

const Header = ({ className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);

  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isBlogPage = pathname === '/blogs';
  const isPortfolioPage = pathname === '/portfolios';
  // const isContactPage = pathname === '/contact';

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
      <nav
        className={cn(
          'w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500',
          sticky
            ? 'p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full'
            : 'bg-transparent border-transparent',
        )}>
        {/* Logo */}
        <div className={'ml-4'}>
          <Link href='/'>
            {/* <Logo className='gap-3' /> */}
            <Logo className={'w-auto h-6'} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className='max-xl:hidden bg-muted p-0.5 rounded-full'>
            <NavigationMenuList className='flex gap-0'>
              {navigations.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    active={
                      pathname === navItem.href ||
                      (isHomePage && navItem.href === '/') ||
                      (isAboutPage && navItem.href === '/about') ||
                      (isBlogPage && navItem.href === '/blogs') ||
                      (isPortfolioPage && navItem.href === '/portfolios')
                    }
                    asChild
                    className={cn(
                      'px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal',
                      // navItem.isActive ? 'bg-background text-foreground' : '',
                      // pathname === navItem.href
                      //   ? 'bg-background text-foreground'
                      //   : '',
                      // pathname === '/' ||
                      //   pathname === '/about' ||
                      //   pathname === '/blogs' ||
                      //   pathname === '/portfolios'
                      //   ? 'bg-background text-foreground'
                      //   : '',
                    )}>
                    <Link href={navItem.href}>{navItem.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className='flex items-center gap-4'>
          <AnimatedThemeToggler className='hidden lg:flex' />
          <CollaborateButton className='hidden lg:flex'>
            Let&apos;s Collaborate
          </CollaborateButton>

          <div className='lg:hidden flex items-center'>
            <LazyMobileMenu />
          </div>
        </div>
      </nav>
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
