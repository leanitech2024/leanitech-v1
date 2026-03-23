// import { BrandList } from '@/components/brand-slider';
// import { AvatarList } from '@/components/hero';
// import { NavigationSection } from '@/components/shadcn-space/blocks/hero-01/header';

import { NavigationSection } from '@/components/shared/navbar/header';
import { BrandList } from '@/features/home/components/brand-slider';
import { AvatarList } from '@/features/home/components/hero';

export const navigations: NavigationSection[] = [
  {
    title: 'Home',
    href: '/',
    isActive: true,
  },
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Portfolio',
    href: '#portfolio',
  },
  {
    title: 'Faqs',
    href: '#faqs',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export const avatarList: AvatarList[] = [
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-1.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
  },
  {
    image: 'https://images.shadcnspace.com/assets/profiles/user-5.jpg',
  },
];

export const brandList: BrandList[] = [
  {
    image: '/company-logos/bread-light.svg',
    lightimg: '/company-logos/bread-dark.svg',
    name: 'Brand 1',
  },
  {
    image: '/company-logos/chase-light.svg',
    lightimg: '/company-logos/chase-dark.svg',
    name: 'Brand 2',
  },
  {
    image: '/company-logos/lydia-light.svg',
    lightimg: '/company-logos/lydia-dark.svg',
    name: 'Brand 3',
  },
  {
    image: '/company-logos/the-guardian-new-light.svg',
    lightimg: '/company-logos/the-guardian-new-dark.svg',
    name: 'Brand 4',
  },
  {
    image: '/company-logos/the-seattle-times-light.svg',
    lightimg: '/company-logos/the-seattle-times-dark.svg',
    name: 'Brand 5',
  },
  {
    image: '/company-logos/trustpilot-light.svg',
    lightimg: '/company-logos/trustpilot-dark.svg',
    name: 'Brand 6',
  },
];
