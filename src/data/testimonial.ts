export interface testimonialItem {
  client: string
  clientImg: string
  year: number
  quote: string
  service: string
  tags: string[]
  media: {
    type: string
    src: string
  }[]
}

export const testimonialData: testimonialItem[] = [
  {
    client: "Kak Nicen",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-001.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Regular",
    tags: ["graduation univ", "hijab-do"],
    media: [
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-1.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-2.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-3.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-4.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-5.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-6.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-7.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-8.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-9.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-10.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-11.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-12.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-13.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-14.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-15.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-16.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-17.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-18.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-19.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-20.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-21.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-22.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-23.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-24.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-25.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-26.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-27.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-28.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-29.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-30.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-31.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-32.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-33.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-34.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-35.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-36.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-37.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-38.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-39.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-40.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/BLG-41.webp" },
    ]
  },
  {
    client: "Kak Rima",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-002.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Graduation",
    tags: ["prewedding", "hair-do"],
    media: [
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-1.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-2.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-3.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-4.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-5.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-6.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-7.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/rima-8.webp" },
    ]
  },
  {
    client: "Mawar 3",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-003.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["graduation univ", "hair-do"],
    media: [
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-1.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-2.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-3.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-4.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-5.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-6.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-7.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-8.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-9.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/uksw-10.webp" },
    ]
  },
  {
    client: "Mawar 4",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-004.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["engagement", "prewedding", "hair-do", "press on nails"],
    media: [
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-1.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-2.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-3.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-5.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-4.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-6.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-7.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-8.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-9.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-10.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-11.webp" },
      { type: "img", src: "https://res.cloudinary.com/fdv3othk/image/upload/wahid-12.webp" },
    ]
  },
]

export const testimonialColorData = ["ffe5ec","ffc2d1","ffb3c6","ffe5ec","ffc2d1","ffb3c6"]