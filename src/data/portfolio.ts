export type PortfolioItem = {
  title: string
  bgColor?: string
  body: string
  img: {
    src: string
    alt: string
  }[]
}

// Placeholder img URLs kept as-is from source markup.
export const PortfolioData: PortfolioItem[] = [
  {
    title: 'Next Chapter',
    bgColor: '#FCE4EC', // Soft Rose Pink (Wedding theme)
    body:
      'Skin-first artistry designed for your wedding day. Long-lasting makeup that photographs beautifully through vows, tears, and celebrations. Includes trial session, touch-up kit, and on-site application for your bridal party',
    img: [
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-001.jpg', alt:'Image 1' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-002.jpg', alt:'Image 2' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-003.jpg', alt:'Image 3' },
    ],
  },
  {
    title: 'Big Finish',
    bgColor: '#E8EAF6', // Academic Indigo / Blue (Graduation theme)
    body:
      'Fresh, polished makeup that enhances your features while keeping a natural finish. Perfect for graduation photos, ceremonies, and celebrations with family',
    img: [
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-004.jpg', alt: 'Image 4' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-005.jpg', alt: 'Image 5' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-006.jpg', alt: 'Image 6' },
    ],
  },
  {
    title: 'Soft Sunlit',
    bgColor: '#E8F5E9', // Fresh Soft Sage / Mint Green (Everyday glam theme)
    body:
      'Effortless beauty with a refined touch. Soft, glowing makeup that enhances your natural features while keeping a fresh and elegant finish. Perfect for daily events, photoshoots, dates, and moments when you want to look polished without feeling overdone',
    img: [
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-007.jpg', alt: 'Image 7' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-008.jpg', alt: 'Image 8' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-009.jpg', alt: 'Image 9' },
    ],
  },
  {
    title: 'Golden Crown',
    bgColor: '#FFF8E1', // Warm Golden Amber (Styling & salon theme)
    body:
      'From elegant updos to effortless waves, our hairstyling service is designed to complete your look with confidence. Carefully crafted styles that complement your features, outfit, and special occasion — from intimate gatherings to unforgettable celebrations',
    img: [
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-001.jpg', alt: 'Image 10' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-002.jpg', alt: 'Image 11' },
      { src: 'https://assets.codepen.io/7558/flame-glow-blur-003.jpg', alt: 'Image 12' },
    ],
  },
]