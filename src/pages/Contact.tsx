import "@/App.css"
import Button from "@/components/ui/Button"

import Footer from "@/components/Footer"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"

import { BRAND_ITEM } from "@/constants/brand"

import { convertDate } from "@/lib/utils";
import { useState } from "react"
import type { ChangeEvent, SyntheticEvent } from "react"

type LocationType = "studio" | "home"

interface BookingData {
  nama: string
  tanggal: string
  acara: string
  jumlahOrang: string
  instagram: string
  hijabCount: string
  hairdoCount: string
  jam: string
  lokasi: string
  locationType: LocationType
}

interface ContactData {
  nama: string
  pesan: string
}

const initBookingData: BookingData = {
  nama: "",
  tanggal: "",
  acara: "",
  jumlahOrang: "",
  instagram: "",
  hijabCount: "",
  hairdoCount: "",
  jam: "",
  lokasi: "",
  locationType: "studio",
}

const initContactData: ContactData = {
  nama: "",
  pesan: "",
}

type Tab = "contact" | "booking"

export default function BookingForm() {
  const [tab, setTab] = useState<Tab>("contact")
  const [bookingData, setBookingData] = useState<BookingData>(initBookingData)
  const [contactData, setContactData] = useState<ContactData>(initContactData)

  const inputClass = "w-full px-3 py-2 rounded text-sm focus:outline-none focus:border-rose bg-bg"
  const labelClass = "flex flex-col gap-1.5 font-semibold text-sm text-inksoft"

  const handleBookingChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const setLocationType = (locationType: LocationType) => {
    setBookingData((prev) => ({ ...prev, locationType, lokasi: locationType === "studio" ? "" : prev.lokasi }))
  }

  const switchTab = (next: Tab) => {
    setTab(next)
  }

  const hairdoCountNum = Number(bookingData.hairdoCount) || 0
  const hijabCountNum = Number(bookingData.hijabCount) || 0

  const handleBookingSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const hijabHairdoLine = [
      hijabCountNum > 0 ? `Hijab ${hijabCountNum} org` : null,
      hairdoCountNum > 0 ? `Hairdo ${hairdoCountNum} org` : null,
    ]
      .filter(Boolean)
      .join(", ")
    
    const locationLine = bookingData.locationType === "studio"
        ? `Di Studio (${BRAND_ITEM.map})`
      : `Home Service - ${bookingData.lokasi}`
    
    const dateLine = convertDate(bookingData.tanggal)

    const msg = `Form Booking ihdalathif_makeup

Nama: ${bookingData.nama}
Tanggal: ${dateLine}
Acara: ${bookingData.acara}
Jumlah orang: ${bookingData.jumlahOrang}
Instagram: ${bookingData.instagram ? bookingData.instagram : '-'}
Hijab/Hairdo: ${hijabHairdoLine ? hijabHairdoLine : '-'}
Jam acara/siap jam: ${bookingData.jam}
Lokasi Makeup: ${locationLine}`

    const url = `https://wa.me/${BRAND_ITEM.tel}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    // setBookingData(initBookingData)
  }

  const handleContactSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const msg = `Halo, Kak Ihda. Aku, ${contactData.nama}, mau tanya-tanya nih. ${contactData.pesan}`

    const url = `https://wa.me/${BRAND_ITEM.tel}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    // setContactData(initContactData)
  }

  return (
    <>
      <ScrollbarIndicator />
      <section className="flex flex-col items-center p-4">
        <h1 className="font-serif text-5xl/12 max-w-3xl self-start">
          Get in{' '}
          <span className="font-curvy text-[3.75rem] font-black text-rose">
            touch.
          </span>
        </h1>

        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Whether you're ready to start or just exploring,
          we're happy to talk.
          Let's start the way that works best for you.
        </p>

        <div className="flex gap-2 w-full mt-6 mb-2">
          <Button
            as="button"
            onClick={() => switchTab("contact")}
            className={`flex-1 py-2 rounded text-sm font-semibold ${
              tab === "contact" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            }`}
          >
            Tanya-tanya
          </Button>
          <Button
            as="button"
            onClick={() => switchTab("booking")}
            className={`flex-1 py-2 rounded text-sm font-semibold ${
              tab === "booking" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            }`}
          >
            Booking Sekarang
          </Button>
        </div>

        {tab === "contact" && (
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 w-full bg-rose/15 p-4 rounded">
            <label className={labelClass}>
              <div className="flex gap-1">
                Nama<span className="text-rose">*</span>
              </div>
              <input
                name="nama"
                type="text"
                placeholder="Anya Geraldine"
                required
                value={contactData.nama}
                onChange={handleContactChange}
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              <div className="flex gap-1">
                Pesan<span className="text-rose">*</span>
              </div>
              <textarea
                name="pesan"
                placeholder="Mau tanya-tanya soal harga, ketersediaan tanggal, dll"
                required
                rows={4}
                value={contactData.pesan}
                onChange={handleContactChange}
                className={inputClass}
              />
            </label>

            <Button as="button" type="submit" className="self-center">
              Kirim Pesan
            </Button>
          </form>
        )}

        {tab === "booking" && (
          <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4 w-full bg-rose/15 p-4 rounded">

            <label className={labelClass}>
              <div className="flex gap-1">
                Nama<span className="text-rose">*</span>
              </div>
              <input
                name="nama"
                type="text"
                placeholder="Anya Geraldine"
                required
                value={bookingData.nama}
                onChange={handleBookingChange}
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Instagram
              <input
                name="instagram"
                type="text"
                placeholder="@username"
                required
                value={bookingData.instagram}
                onChange={handleBookingChange}
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              <div className="flex gap-1">
                Untuk Acara<span className="text-rose">*</span>
              </div>
              <input
                name="acara"
                type="text"
                placeholder="Wisuda, prewed, dll"
                required
                value={bookingData.acara}
                onChange={handleBookingChange}
                className={inputClass}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className={labelClass}>
                <div className="flex gap-1">
                  Tanggal<span className="text-rose">*</span>
                </div>
                <input
                  name="tanggal"
                  type="date"
                  required
                  value={bookingData.tanggal}
                  onChange={handleBookingChange}
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                <div className="flex gap-1">
                  Jumlah Orang<span className="text-rose">*</span>
                </div>
                <input
                  name="jumlahOrang"
                  type="number"
                  min={1}
                  placeholder="3"
                  required
                  value={bookingData.jumlahOrang}
                  onChange={handleBookingChange}
                  className={inputClass}
                />
              </label>
            </div>

            <label className={labelClass}>
              <div className="flex gap-1">
                Jam Acara / Siap Jam<span className="text-rose">*</span>
              </div>
              <input
                name="jam"
                type="text"
                placeholder="cth: siap jam 07.00, acara jam 09.00"
                required
                value={bookingData.jam}
                onChange={handleBookingChange}
                className={inputClass}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className={labelClass}>
                <div className="flex gap-1">
                  Hijab (org)
                </div>
                <input
                  name="hijabCount"
                  type="number"
                  min={0}
                  placeholder="0"
                  value={bookingData.hijabCount}
                  onChange={handleBookingChange}
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                <div className="flex gap-1">
                  Hairdo (org)
                </div>
                <input
                  name="hairdoCount"
                  type="number"
                  min={0}
                  placeholder="0"
                  value={bookingData.hairdoCount}
                  onChange={handleBookingChange}
                  className={inputClass}
                />
              </label>
            </div>

            <div className={labelClass}>
              <div className="flex gap-1">
                Lokasi Makeup
              </div>

              <div className="flex gap-2">
                <Button
                  as="button"
                  onClick={() => setLocationType("studio")}
                  className={`flex-1 py-2 rounded text-sm font-semibold ${
                    bookingData.locationType === "studio" ? "bg-rose text-white" : "bg-bg text-inksoft"
                  }`}
                >
                  Di Studio
                </Button>
                <Button
                  as="button"
                  onClick={() => setLocationType("home")}
                  className={`flex-1 py-2 rounded text-sm font-semibold ${
                    bookingData.locationType === "home" ? "bg-rose text-white" : "bg-bg text-inksoft"
                  }`}
                >
                  Home Service
                </Button>
              </div>
            </div>

            {bookingData.locationType === "studio" && (
              <a
                href={BRAND_ITEM.map}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-rosedeep underline -mt-2"
              >
                Lihat lokasi studio di Maps
              </a>
            )}

            {bookingData.locationType === "home" && (
              <label className={labelClass}>
                Lokasi Makeup (Maps)
                <input
                  name="lokasi"
                  type="url"
                  placeholder="Tempel link Google Maps"
                  required
                  value={bookingData.lokasi}
                  onChange={handleBookingChange}
                  className={inputClass}
                />
              </label>
            )}

            <div className="bg-bg border border-dashed rounded px-3.5 py-3 text-xs text-rose font-light">
              <div className="text-sm mb-1">Syarat & Ketentuan:</div>
              <div>* Hairdo per orang = Rp85.000</div>
              <div>* Home service = Rp2.500/Km</div>
              <div>** DP 50k/person untuk fix booking</div>
              <div>** Tf ke LOREM IMPSUM (Example Bank) 123456789</div>
              <div>** CANCEL = DP hangus</div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button as="button" type="submit" >
                Kirim Booking
              </Button>
            </div>
          </form>
          
        )}
      </section>
      <div className="spacer h-50"></div>
      <Footer />
    </>
  )
}