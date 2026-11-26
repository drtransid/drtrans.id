export interface NavLink {
  label: string;
  href: string;
}

const whatsappNumber = '6285163681922';
const whatsappMessage = 'Halo DRTRANS.ID, saya ingin booking kendaraan.';

export const siteConfig = {
  name: 'drtrans.id',
  title: 'Jasa Sewa Motor, Mobil Madiun Mulai 75K - DRTRANS.ID',
  description:
    'DRTRANS.ID melayani rental motor, mobil, dan Elf Hiace plus supir di Madiun, Jawa Timur. Unit bersih, GPS gratis, kendaraan diasuransikan, respon cepat 24 jam.',
  siteUrl: 'https://www.drtrans.id',
  language: 'id',
  locale: 'id_ID',
  dateLocale: 'id-ID',
  socialImage: '/og-image.png',

  business: {
    name: 'DRTRANS.ID',
    tagline: 'Rental Kendaraan Madiun',
    location: 'Madiun, Jawa Timur',
    city: 'Madiun',
    region: 'Jawa Timur',
    country: 'ID',
    phoneDisplay: '0851-6368-1922',
    phone: `+${whatsappNumber}`,
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    payments: 'Transfer bank BCA dan BRI',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Unit terbatas, booking sekarang',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Booking Now', href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}` },

  /** The banner and preferences dialog. Set `enabled: false` to remove both. */
  cookieConsent: {
    enabled: true,
  },
};

export const navigation: NavLink[] = [
  { label: 'Armada', href: '/#armada' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Wisata', href: '/#wisata' },
  { label: 'FAQ', href: '/#faq' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
];
