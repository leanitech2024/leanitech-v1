import { seo } from '@/constants/seo';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.title,
    short_name: seo.siteName,
    description: seo.description,
    categories: seo.keywords,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    orientation: 'landscape-primary',
  };
}
