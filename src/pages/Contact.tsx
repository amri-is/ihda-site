import { useState } from "react"
import type { ChangeEvent } from "react"

import type { BookingData, ContactData, LocationType, Tab } from "@/data/booking"
import { initBookingData, initContactData } from "@/data/booking"

import Button from "@/components/ui/Button"

import Footer from "@/components/Footer"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"
import ContactForm from "@/components/ContactForm"
import BookingForm from "@/components/BookingForm"

import { BRAND_ITEM } from "@/constants/brand"
import { cn, convertDate } from "@/lib/utils"

export default function Contact() {
  const [tab, setTab] = useState<Tab>("contact")
  const [contactData, setContactData] = useState<ContactData>(initContactData)
  const [bookingData, setBookingData] = useState<BookingData>(initBookingData)

  const handleContactChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const setLocationType = (locationType: LocationType) => {
    setBookingData((prev) => ({
      ...prev,
      locationType,
      lokasi: locationType === "studio" ? "" : prev.lokasi,
    }))
  }

  const handleContactSubmit = () => {
    const msg = `Halo, Kak Ihda. Aku, ${contactData.nama}, mau tanya-tanya nih. ${contactData.pesan}`
    const url = `https://wa.me/${BRAND_ITEM.tel}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  const handleBookingSubmit = () => {
    const hijabdoCountNum = Number(bookingData.hijabdoCount) || 0
    const hairdoCountNum = Number(bookingData.hairdoCount) || 0

    const hijabHairdoLine = [
      hijabdoCountNum > 0 ? `Hijab ${hijabdoCountNum} org` : null,
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
  }

  return (
    <>
      <ScrollbarIndicator />
      <section className="flex flex-col justify-center px-4 pt-4">
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
            type="button"
            onClick={() => setTab("contact")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              tab === "contact" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            )}
          >
            Tanya-tanya
          </Button>
          <Button
            as="button"
            type="button"
            onClick={() => setTab("booking")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              tab === "booking" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            )}
          >
            Booking Sekarang
          </Button>
        </div>

        {tab === "contact" && (
          <ContactForm
            data={contactData}
            onChange={handleContactChange}
            onSubmit={handleContactSubmit}
          />
        )}

        {tab === "booking" && (
          <BookingForm
            data={bookingData}
            onChange={handleBookingChange}
            setLocationType={setLocationType}
            onSubmit={handleBookingSubmit}
          />
        )}
      </section>
      <div className="spacer h-50"></div>
      <Footer />
    </>
  )
}