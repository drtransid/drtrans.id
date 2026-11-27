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
  title: 'Rental Mobil & Sewa Motor Madiun Mulai 90K – DRTRANS.ID',
  description:
    'Rental mobil Madiun lepas kunci/supir mulai Rp300rb & sewa motor mulai 90K dari PT. Azzahra Jaya Transportation. Antar ke pusat kota, Stasiun & Terminal Purbaya 24 jam.',
  siteUrl: 'https://www.drtrans.id',
  language: 'id',
  locale: 'id_ID',
  dateLocale: 'id-ID',
  socialImage: '/og-image.png',

  business: {
    name: 'DRTRANS.ID',
    legalName: 'PT. AZZAHRA JAYA TRANSPORTATION',
    tagline: 'Rental Mobil & Sewa Motor Madiun',
    location: 'Madiun, Jawa Timur',
    city: 'Madiun',
    region: 'Jawa Timur',
    country: 'ID',
    mapsName: 'Rental / Sewa Motor & Mobil Madiun DR TRANS',
    mapsUrl:
      'https://www.google.com/maps/place/Rental+%2F+Sewa+Motor+%26+Mobil+Madiun+DR+TRANS/@-7.6571418,111.4298969,13z/data=!4m10!1m2!2m1!1sdrtrans.id+maps!3m6!1s0x2e79bd59c4307ea3:0x169e205b3e877be!8m2!3d-7.6571418!4d111.5019947!15sCg9kcnRyYW5zLmlkIG1hcHOSARFjYXJfcmVudGFsX2FnZW5jeeABAA!16s%2Fg%2F11s17fpts9?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D',
    geo: {
      latitude: -7.6571418,
      longitude: 111.5019947,
    },
    phoneDisplay: '0851-6368-1922',
    phone: `+${whatsappNumber}`,
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    payments: 'Transfer bank resmi BCA dan BRI',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Armada siap antar 24 jam di Madiun',
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
  { label: 'Sewa Motor (Roda Dua)', href: '/#armada-motor', description: 'Beat, Scoopy, Vario, NMAX mulai 90K' },
  { label: 'Rental Mobil (Roda Empat)', href: '/#armada-mobil', description: 'Lepas kunci atau plus driver' },
  { label: 'Keunggulan & Layanan', href: '/#layanan', description: 'Antar lokasi, GPS, asuransi & CS 24 jam' },
  { label: 'Syarat Singkat', href: '/#syarat', description: 'Dokumen sewa & transfer resmi BCA/BRI' },
  { label: 'Ulasan Pelanggan', href: '/#ulasan', description: 'Pengalaman penyewa di Madiun' },
  { label: 'Paket Wisata', href: '/#wisata', description: 'Yogyakarta, Bali, Bandung & Lombok' },
  { label: 'FAQ', href: '/#faq', description: 'Pertanyaan sewa, pembayaran & asuransi' },
];

export const navigation: NavLink[] = [
  {
    label: 'Layanan',
    href: '/#armada',
    children: anchorLinks,
  },
  { label: 'Area', href: '/area/' },
  { label: 'Tentang Kami', href: '/about/' },
];

export const footerLinks: NavLink[] = [
  { label: 'Armada', href: '/#armada' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Area Madiun', href: '/area/' },
  { label: 'Tentang Kami', href: '/about/' },
  { label: 'Wisata', href: '/#wisata' },
  { label: 'FAQ', href: '/#faq' },
];

export const legalLinks: NavLink[] = [
  { label: 'Kebijakan Privasi', href: '/privacy/' },
  { label: 'Syarat & Ketentuan', href: '/terms/' },
  { label: 'Kebijakan Cookie', href: '/cookies/' },
];
