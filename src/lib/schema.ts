import { siteConfig } from '@/config/site';

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const business = {
  '@type': 'AutoRental',
  '@id': absolute('/#business'),
  name: siteConfig.business.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  telephone: siteConfig.business.phone,
  priceRange: 'Mulai Rp75.000',
  areaServed: siteConfig.business.city,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.business.city,
    addressRegion: siteConfig.business.region,
    addressCountry: siteConfig.business.country,
  },
  openingHours: 'Mo-Su 00:00-23:59',
};

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    {
      '@type': 'WebSite',
      '@id': absolute('/#website'),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { '@id': absolute('/#business') },
    },
  ],
});
