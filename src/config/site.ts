import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'DCG | Digital Climate Group',
  metaTitle: 'DCG | Digital Climate Group',
  description: 'DCG | Digital Climate Group',
  ogImage: `${env.APP_URL}/og-image.jpg`,
};
