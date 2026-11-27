import { siteConfig } from '@/config/site';

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const business = {
  '@type': 'AutoRental',
  '@id': absolute('/#business'),
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  telephone: siteConfig.business.phone,
  priceRange: 'Mulai Rp75.000',
  areaServed: [
    { '@type': 'City', name: siteConfig.business.city },
    { '@type': 'Place', name: 'Stasiun Madiun' },
    { '@type': 'Place', name: 'Terminal Purboyo Madiun' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.business.city,
    addressRegion: siteConfig.business.region,
    addressCountry: siteConfig.business.country,
  },
  openingHours: 'Mo-Su 00:00-23:59',
};

const websiteNode = {
  '@type': 'WebSite',
  '@id': absolute('/#website'),
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: { '@id': absolute('/#business') },
};

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [business, websiteNode],
});

interface BreadcrumbItem {
  name: string;
  path: string;
}

const breadcrumbList = (items: BreadcrumbItem[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

export const aboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    websiteNode,
    {
      '@type': 'AboutPage',
      '@id': absolute('/about/#page'),
      url: absolute('/about/'),
      name: `Tentang ${siteConfig.business.name} — ${siteConfig.business.legalName}`,
      description:
        'Profil PT. AZZAHRA JAYA TRANSPORTATION (DRTRANS.ID), penyedia jasa sewa motor, mobil, dan Elf Hiace terpercaya di Madiun dengan GPS gratis dan asuransi penuh.',
      inLanguage: siteConfig.language,
      isPartOf: { '@id': absolute('/#website') },
      mainEntity: { '@id': absolute('/#business') },
    },
    breadcrumbList([
      { name: 'Beranda', path: '/' },
      { name: 'Tentang Kami', path: '/about/' },
    ]),
  ],
});

export const workIndexSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    websiteNode,
    {
      '@type': 'CollectionPage',
      '@id': absolute('/work/#page'),
      url: absolute('/work/'),
      name: `Layanan Rental Kendaraan Stasiun & Terminal Madiun | ${siteConfig.name}`,
      description:
        'Panduan lengkap layanan sewa motor dan mobil di dekat Stasiun Madiun dan Terminal Purboyo Madiun oleh DRTRANS.ID.',
      inLanguage: siteConfig.language,
      isPartOf: { '@id': absolute('/#website') },
      about: { '@id': absolute('/#business') },
    },
    breadcrumbList([
      { name: 'Beranda', path: '/' },
      { name: 'Panduan Area', path: '/work/' },
    ]),
  ],
});

interface WorkDetailSchemaInput {
  title: string;
  description: string;
  path: string;
  targetLocation: string;
  serviceType: string;
}

export const workDetailSchema = ({
  title,
  description,
  path,
  targetLocation,
  serviceType,
}: WorkDetailSchemaInput) => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    websiteNode,
    {
      '@type': 'Service',
      '@id': absolute(`${path}#service`),
      name: title,
      description,
      serviceType,
      url: absolute(path),
      provider: { '@id': absolute('/#business') },
      areaServed: [
        { '@type': 'Place', name: targetLocation },
        { '@type': 'City', name: siteConfig.business.city },
      ],
    },
    breadcrumbList([
      { name: 'Beranda', path: '/' },
      { name: 'Panduan Area', path: '/work/' },
      { name: title, path },
    ]),
  ],
});
