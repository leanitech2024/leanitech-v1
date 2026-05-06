import { seo } from '@/constants/seo';
import type { MetadataRoute } from 'next';

const BASE_URL = seo.baseURL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/portfolios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
      images: [`${BASE_URL}/og-image.webp`],
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
      images: [`${BASE_URL}/og-image.webp`],
    },
  ];
}
