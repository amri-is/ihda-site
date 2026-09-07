export type ServiceItem = {
  title: string
  body: string
  imgs: string[]
  tags: string[]
}

export const ServiceData: ServiceItem[] = [
  {
    title: 'Reguler',
    body: 'Every booking in this category includes a complimentary simple hijab styling to complete your look for the day.',
    imgs: [
      'https://assets.codepen.io/7558/flame-glow-blur-001.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-002.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-003.jpg',
    ],
    tags: [
      'family bride',
      'among tamu',
      'yearbook',
      'wedding guest',
      'brides maid',
    ]
  },
  {
    title: 'Graduation',
    body: 'Enjoy a complimentary simple hijab styling alongside professional assistance with putting on your graduation gown.',
    imgs: [
      'https://assets.codepen.io/7558/flame-glow-blur-004.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-005.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-006.jpg',
    ],
    tags: [
      'wasana warsa',
      'promnight',
      'ceremony',
    ]
  },
  {
    title: 'Special Occasion',
    body: 'This package includes a free simple hijab styling, with specific individual services also featuring a complimentary softlens.',
    imgs: [
      'https://assets.codepen.io/7558/flame-glow-blur-007.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-008.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-009.jpg',
    ],
    tags: [
      'brides mom',
      'pendamping wisuda',
      'fashion show',
      'engagement',
      'prewedding',
    ]
  },
  {
    title: 'Add On',
    body: 'Customize your experience further with styling add-ons, premium extras, or convenient at-home services tailored to your exact needs.',
    imgs: [
      'https://assets.codepen.io/7558/flame-glow-blur-001.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-002.jpg',
      'https://assets.codepen.io/7558/flame-glow-blur-003.jpg',
    ],
    tags: [
      'hair-do',
      'hijab-do',
      'press on nails',
      'softlens',
      'home service',
    ]
  },
]

export type PriceItem = {
  item: string;
  price: string;
  note?: string;
}

export type PriceCategory = {
  category: string;
  note?: string;
  items: PriceItem[];
}

export const PriceList: PriceCategory[] = [
  {
    category: 'Reguler',
    note: 'Free simple hijabdo',
    items: [
      {
        item: 'Family Bride / Among Tamu',
        price: '200K',
      },
      {
        item: 'Yearbook',
        price: '200K',
      },
      {
        item: 'Wedding Guest',
        price: '200K',
      },
      {
        item: 'Bridesmaid',
        price: '200K',
      },
    ],
  },
  {
    category: 'Graduation',
    note: 'Free simple hijabdo & pemasangan toga',
    items: [
      {
        item: 'Wasana Warsa SMP / SMA',
        price: '200K',
      },
      {
        item: 'Promnight',
        price: '200K',
      },
      {
        item: 'Graduation Univ',
        price: '250K',
      },
    ],
  },
  {
    category: 'Special Occasion',
    note: 'Free simple hijabdo',
    items: [
      {
        item: 'Mama Bride / Pendamping Wisuda',
        price: '200K',
      },
      {
        item: 'Fashion Show',
        price: '250K',
      },
      {
        item: 'Engagement',
        price: '350K',
        note: 'Free softlens',
      },
      {
        item: 'Prewedding',
        price: '350K',
        note: 'Free softlens',
      },
    ],
  },
  {
    category: 'Add On',
    items: [
      {
        item: 'Hairdo Reguler / Graduation',
        price: '85K',
        note: 'By hairstylist',
      },
      {
        item: 'Hijabdo Only',
        price: '35K',
        note: 'Tanpa makeup',
      },
      {
        item: 'Press On Nails',
        price: 'Start 50K',
      },
      {
        item: 'Softlens',
        price: 'Start 40K',
      },
      {
        item: 'Homeservice',
        price: '2.5K/KM',
      },
    ],
  },
]