import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/bilans', '/remediation-cognitive', '/tarifs', '/a-propos', '/contact', '/mentions-legales', '/confidentialite'].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }));
}
