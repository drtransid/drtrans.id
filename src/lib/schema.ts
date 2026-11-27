import { siteConfig } from '@/config/site';

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const business = {
  '@type': 'AutoRental',
  '@id': absolute('/#business'),
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  hasMap: siteConfig.business.mapsUrl,
  sameAs: [siteConfig.business.mapsUrl],
  telephone: siteConfig.business.phone,
  priceRange: 'Rp90.000 - Rp1.500.000',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    reviewCount: '42',
    bestRating: '5',
    worstRating: '1',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.business.geo.latitude,
    longitude: siteConfig.business.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Kota Madiun' },
    { '@type': 'AdministrativeArea', name: 'Kabupaten Madiun' },
    { '@type': 'Place', name: 'Stasiun Madiun' },
    { '@type': 'Place', name: 'Terminal Purbaya Madiun', alternateName: 'Terminal Purboyo Madiun' },
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

interface FaqItem {
  question: string;
  answer: string;
}

export const faqPageSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    {
      '@type': 'FAQPage',
      '@id': absolute('/#faq'),
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
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
        'Profil PT. AZZAHRA JAYA TRANSPORTATION (DRTRANS.ID), penyedia jasa rental mobil dan sewa motor terpercaya di Madiun dengan GPS aktif dan asuransi penuh.',
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

export const areaIndexSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    business,
    websiteNode,
    {
      '@type': 'CollectionPage',
      '@id': absolute('/area/#page'),
      url: absolute('/area/'),
      name: `Area Layanan Rental Mobil & Sewa Motor Madiun | ${siteConfig.name}`,
      description:
        'Cakupan layanan rental mobil dan sewa motor DRTRANS.ID di Kota dan Kabupaten Madiun: pusat kota, hotel, perkantoran, Stasiun Madiun, Terminal Purbaya, dan rute sekitar.',
      inLanguage: siteConfig.language,
      isPartOf: { '@id': absolute('/#website') },
      about: { '@id': absolute('/#business') },
    },
    breadcrumbList([
      { name: 'Beranda', path: '/' },
      { name: 'Area Layanan', path: '/area/' },
    ]),
  ],
});

interface AreaDetailSchemaInput {
  title: string;
  description: string;
  path: string;
  targetLocation: string;
  serviceType: string;
}

export const areaDetailSchema = ({
  title,
  description,
  path,
  targetLocation,
  serviceType,
}: AreaDetailSchemaInput) => ({
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
      { name: 'Area Layanan', path: '/area/' },
      { name: title, path },
    ]),
  ],
});
