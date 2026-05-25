import type { MetadataRoute } from 'next';
import { SITE, NAV } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((n) => ({
    url: `${SITE.url}${n.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: n.href === '/' ? 1 : 0.8,
  }));
}
