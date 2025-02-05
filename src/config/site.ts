import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Digital Art NFTs',
  metaTitle: 'Digital Art NFTs',
  description: 'Digital Art NFTs',
  ogImage: `${env.APP_URL}/og-image.png`,
};
