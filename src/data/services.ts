// ihdalathif_makeup — Service + Price Data 2026
// Single source of truth: copy (ID), tags, images, and per-item pricing.

export type PriceItem = {
  name: string;
  price: number; // IDR
  note?: string; // item-level extra (beyond category note)
};

export type ServiceCategory = {
  slug: string; // stable key for routing/lookup, joins UI <-> data
  title: string;
  body: string; // elegant Indonesian copy
  note?: string; // perk applied to every item in category
  imgs: string[]; // TODO: swap placeholders for real shoot photos per category
  tags: string[]; // mirrors items[].name (lowercased) 1:1 for search/filter
  items: PriceItem[];
};

export const ServiceData: ServiceCategory[] = [
  {
    slug: "reguler",
    title: "Reguler",
    body: "Riasan sederhana nan menawan untuk momen berharga sehari-hari — mendampingi keluarga di hari bahagia, mengabadikan kenangan yearbook, hadir sebagai tamu undangan, atau tampil anggun sebagai bridesmaid.",
    note: "free simple hijabdo",
    imgs: [
      "https://assets.codepen.io/7558/flame-glow-blur-001.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-002.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-003.jpg",
    ],
    tags: ["family bride", "among tamu", "yearbook", "wedding guest", "bridesmaid"],
    items: [
      { name: "Family Bride / Among Tamu", price: 200000 },
      { name: "Yearbook", price: 200000 },
      { name: "Wedding Guest", price: 200000 },
      { name: "Bridesmaid", price: 200000 },
    ],
  },
  {
    slug: "graduation",
    title: "Graduation",
    body: "Rayakan setiap pencapaian dengan penampilan terbaik — dari wisuda SMP/SMA, malam promnight yang berkesan, hingga wisuda universitas sebagai penutup perjuangan panjang.",
    note: "free simple hijabdo & pemasangan toga",
    imgs: [
      "https://assets.codepen.io/7558/flame-glow-blur-004.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-005.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-006.jpg",
    ],
    tags: ["wisuda smp/sma", "promnight", "graduation univ"],
    items: [
      { name: "Wisuda Warsa SMP / SMA", price: 200000 },
      { name: "Promnight", price: 200000 },
      { name: "Graduation Univ", price: 250000 },
    ],
  },
  {
    slug: "special-occasion",
    title: "Special Occasion",
    body: "Untuk momen istimewa yang layak tampil sempurna — mendampingi si buah hati di hari wisuda, memesona di atas catwalk, hingga memancarkan kebahagiaan di hari lamaran dan sesi prewedding.",
    note: "free simple hijabdo",
    imgs: [
      "https://assets.codepen.io/7558/flame-glow-blur-007.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-008.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-009.jpg",
    ],
    tags: ["mama bride", "pendamping wisuda", "fashion show", "engagement", "prewedding"],
    items: [
      { name: "Mama Bride / Pendamping Wisuda", price: 200000 },
      { name: "Fashion Show", price: 250000 },
      { name: "Engagement", price: 350000, note: "free softlens" },
      { name: "Prewedding", price: 350000, note: "free softlens" },
    ],
  },
  {
    slug: "add-on",
    title: "Add On",
    body: "Sentuhan pelengkap untuk kesempurnaan penampilan — tatanan rambut, hijabdo, kuku, softlens, hingga layanan datang ke lokasi Anda.",
    imgs: [
      "https://assets.codepen.io/7558/flame-glow-blur-010.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-011.jpg",
      "https://assets.codepen.io/7558/flame-glow-blur-012.jpg",
    ],
    tags: ["hair-do", "hijab-do", "press on nails", "softlens", "home service"],
    items: [
      { name: "Hairdo Reguler / Graduation", price: 85000, note: "by hairstylist" },
      { name: "Hijabdo Only", price: 35000, note: "tanpa makeup" },
      { name: "Press On Nails", price: 50000, note: "start price" },
      { name: "Softlens", price: 40000, note: "start price" },
      { name: "Homeservice", price: 2500, note: "per km" },
    ],
  },
];

export const contact = {
  instagram: "ihdalathif_makeup",
  phone: "083806816398",
  link: "taplink.cc/ihdalathif",
  year: 2026,
};