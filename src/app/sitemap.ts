import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

const routes = [
  '',
  '/strategies',
  '/strategies/price-action',
  '/strategies/trend-following',
  '/strategies/breakout',
  '/strategies/smc',
  '/strategies/risk-management',
  '/strategies/psychology',
  '/strategies/session-timing',
  '/strategies/journaling',
  '/strategies/market-conditions',
  '/strategies/multi-timeframe',
  '/strategies/trade-management',
  '/strategies/workflow',
  '/strategies/checklist',
  '/strategies/common-mistakes',
  '/strategies/faq',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route === '/strategies' ? 0.9 : 0.7,
  }));
}
