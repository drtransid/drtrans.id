export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

const whatsappNumber = '6285163681922';
const whatsappMessage = 'Halo DRTRANS.ID, saya ingin booking kendaraan.';

export const siteConfig = {
  name: 'drtrans.id',
  title: 'Jasa Sewa Motor, Mobil Madiun Mulai 75K - DRTRANS.ID',
  description:
    'DRTRANS.ID melayani rental motor mulai 75K, sewa mobil lepas kunci/supir, dan Elf Hiace di Madiun. Siap antar ke Stasiun & Terminal Madiun 24 jam, GPS aktif & asuransi penuh.',
  siteUrl: 'https://www.drtrans.id',
  language: 'id',
  locale: 'id_ID',
  dateLocale: 'id-ID',
  socialImage: '/og-image.png',

  business: {
    name: 'DRTRANS.ID',
    legalName: 'PT. AZZAHRA JAYA TRANSPORTATION',
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

export const anchorLinks: NavLink[] = [
  { label: 'Semua Armada', href: '/#armada', description: 'Motor, mobil & Elf Hiace' },
  { label: 'Motor (Roda Dua)', href: '/#armada-motor', description: 'Beat, Scoopy, Vario, NMAX mulai 75K' },
  { label: 'Mobil (Roda Empat)', href: '/#armada-mobil', description: 'Lepas kunci atau plus driver' },
  { label: 'Keunggulan & Layanan', href: '/#layanan', description: 'Door to door, GPS & CS 24 jam' },
  { label: 'Paket Wisata', href: '/#wisata', description: 'Yogyakarta, Bali, Bandung & Lombok' },
  { label: 'FAQ', href: '/#faq', description: 'Syarat sewa, pembayaran & asuransi' },
];

export const navigation: NavLink[] = [
  {
    label: 'Layanan',
    href: '/#armada',
    children: anchorLinks,
  },
  { label: 'Area', href: '/work/' },
  { label: 'Tentang Kami', href: '/about/' },
];

export const footerLinks: NavLink[] = [
  { label: 'Armada', href: '/#armada' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Area Madiun', href: '/work/' },
  { label: 'Tentang Kami', href: '/about/' },
  { label: 'Wisata', href: '/#wisata' },
  { label: 'FAQ', href: '/#faq' },
];

export const legalLinks: NavLink[] = [
  { label: 'Kebijakan Privasi', href: '/privacy/' },
  { label: 'Syarat & Ketentuan', href: '/terms/' },
  { label: 'Kebijakan Cookie', href: '/cookies/' },
];
