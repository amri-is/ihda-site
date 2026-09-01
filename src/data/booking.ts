export type LocationType = "studio" | "home"
export type Tab = "contact" | "booking"

export interface BookingData {
  nama: string
  tanggal: string
  acara: string
  jumlahOrang: string
  instagram: string
  hijabdoCount: string
  hairdoCount: string
  jam: string
  lokasi: string
  locationType: LocationType
}

export interface ContactData {
  nama: string
  pesan: string
}

export const initBookingData: BookingData = {
  nama: "",
  tanggal: "",
  acara: "",
  jumlahOrang: "",
  instagram: "",
  hijabdoCount: "",
  hairdoCount: "",
  jam: "",
  lokasi: "",
  locationType: "studio",
}

export const initContactData: ContactData = {
  nama: "",
  pesan: "",
}

export const bookingFields = {
  nama: {
    label: "Nama",
    name: "nama",
    type: "text",
    placeholder: "Anya Geraldine",
    required: true,
  },
  instagram: {
    label: "Instagram",
    name: "instagram",
    type: "text",
    placeholder: "@anya_geraldine",
    required: false,
  },
  acara: {
    label: "Acara",
    name: "acara",
    type: "text",
    placeholder: "Wisuda, prewed, dll",
    required: true,
  },
  jam: {
    label: "Jam Acara / Siap Jam",
    name: "jam",
    type: "text",
    placeholder: "cth. siap jam 7 pagi, acara jam 9 pagi",
    required: true,
  },
  tanggal: {
    label: "Tanggal",
    name: "tanggal",
    type: "date",
    required: true,
  },
  jumlahOrang: {
    label: "Jumlah Orang",
    name: "jumlahOrang",
    type: "number",
    min: 1,
    placeholder: "3",
    required: true,
  },
  hijabdoCount: {
    label: "Hijabdo (org)",
    name: "hijabdoCount",
    type: "number",
    min: 0,
    placeholder: "0",
    required: false,
  },
  hairdoCount: {
    label: "Hairdo (org)",
    name: "hairdoCount",
    type: "number",
    min: 0,
    placeholder: "0",
    required: false,
  },
  lokasi: {
    label: "Lokasi Makeup",
    name: "lokasi",
    type: "url",
    placeholder: "Tempel link Google Maps",
    required: true,
  },
}

export const contactFields = {
  nama: {
    label: "Nama",
    name: "nama",
    type: "text",
    placeholder: "Anya Geraldine",
    required: true,
  },
  pesan: {
    label: "Pesan",
    name: "pesan",
    rows: 4,
    placeholder: "Mau tanya-tanya soal harga, ketersediaan tanggal, dll",
    required: true,
  },
}