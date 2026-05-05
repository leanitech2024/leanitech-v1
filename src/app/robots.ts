import { seo } from '@/constants/seo';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
      crawlDelay: 10, // 10 seconds delay between requests
    },
    sitemap: `${seo.baseURL}/sitemap.xml`,
  };
}
