// TODO: swap every PLACEHOLDER once real photos arrive.
const PLACEHOLDER = 'https://files.catbox.moe/ea94w6.jpeg'

export const BRAND_ITEM = {
  name: 'Ihda Lathif Studio',
  nameShort: 'Ihda Lathif',
  firstName: 'Ihda',
  studio: 'Studio',
  mua: 'https://instagram.com/ihdalathif_makeup/',
  hairdo: 'https://instagram.com/ihda.hairdo/',
  tiktok: 'https://www.tiktok.com/@ihdalathif',
  wa: 'http://wa.me/6283806816398?text=Hai%20Kak%20Ihda,%20Mau%20tanya%20dong',
  tel: 6283806816398,
  map: 'https://maps.app.goo.gl/Ti4CZwjFURLGZjSA9',
  photo: PLACEHOLDER,

  // About page
  city: 'Salatiga',
  photos: {
    hero: PLACEHOLDER, // Ihda smiling, friendly
    story: PLACEHOLDER, // Ihda working on a client
    workspace: PLACEHOLDER, // studio / workspace
  },
  gallery: [
    { src: PLACEHOLDER, alt: 'Graduation makeup by Ihda' },
    { src: PLACEHOLDER, alt: 'Family bride makeup by Ihda' },
    { src: PLACEHOLDER, alt: 'Bridesmaid makeup by Ihda' },
    { src: PLACEHOLDER, alt: 'Soft makeup close-up by Ihda' },
  ],
  stats: [
    { value: '300+', label: 'klien dirias' },
    { value: '2+', label: 'tahun pengalaman' },
  ],
  certificate: {
    by: 'Pungky Olivia',
    image: '', // TODO: certificate photo
  },
  areas: {
    studio: 'Salatiga',
    homeService: ['Salatiga & sekitarnya', 'Yogyakarta'],
  },
  hours: {
    days: 'Senin - Jumat',
    time: '07.00 – 16.00 WIB',
  },
  // TODO: replace with real testimonials from the other data file.
  testimonials: [
    { name: 'Nama klien', occasion: 'Graduation', text: 'Testimoni menyusul.' },
    { name: 'Nama klien', occasion: 'Family bride', text: 'Testimoni menyusul.' },
    { name: 'Nama klien', occasion: 'Bridesmaid', text: 'Testimoni menyusul.' },
  ],
}