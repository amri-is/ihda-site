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
    client: "Mawar",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-001.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Regular",
    tags: ["natural", "soft glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      },
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
  {
    client: "Mawar 2",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-002.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Graduation",
    tags: ["graduation", "soft glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
  {
    client: "Mawar 3",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-003.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["event", "glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
  {
    client: "Mawar 4",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-004.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["event", "glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
  {
    client: "Mawar 5",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-005.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["event", "glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
  {
    client: "Mawar 6",
    clientImg: "https://assets.codepen.io/7558/flame-glow-blur-006.jpg",
    year: 2026,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto nisi ullam quidem ut assumenda quibusdam repudiandae amet saepe accusamus.",
    service: "Special Occasion",
    tags: ["event", "glam"],
    media: [
      {
        type: "img", 
        src: "https://res.cloudinary.com/fdv3othk/image/upload/v1789010486/IMG_0510-1.webp",
      }
    ]
  },
]

export const testimonialColorData = ["ffe5ec","ffc2d1","ffb3c6","ffe5ec","ffc2d1","ffb3c6"]