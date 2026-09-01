import { useState } from "react"
import type { ChangeEvent, SyntheticEvent } from "react"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"

import { BRAND_ITEM } from "@/constants/brand"

import { bookingFields, initBookingData } from "@/data/booking"
import type { BookingData, LocationType } from "@/data/booking"

import { cn, convertDate } from "@/lib/utils"

export default function BookingForm() {
  const [bookingData, setBookingData] = useState<BookingData>(initBookingData)

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

  const hairdoCountNum = Number(bookingData.hairdoCount) || 0
  const hijabdoCountNum = Number(bookingData.hijabdoCount) || 0

  const handleBookingSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    // setBookingData(initBookingData)
  }

  return (
    <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4 w-full bg-rose/15 p-4 rounded text-sm text-inksoft font-semibold">
      <InputField field={bookingFields.nama} value={bookingData.nama} onChange={handleBookingChange} />
      <InputField field={bookingFields.instagram} value={bookingData.instagram} onChange={handleBookingChange} />
      <InputField field={bookingFields.acara} value={bookingData.acara} onChange={handleBookingChange} />

      <div className="grid grid-cols-2 gap-3">
        <InputField field={bookingFields.tanggal} value={bookingData.tanggal} onChange={handleBookingChange} />
        <InputField field={bookingFields.jumlahOrang} value={bookingData.jumlahOrang} onChange={handleBookingChange} />
      </div>

      <InputField field={bookingFields.jam} value={bookingData.jam} onChange={handleBookingChange} />

      <div className="grid grid-cols-2 gap-3">
        <InputField field={bookingFields.hijabdoCount} value={bookingData.hijabdoCount} onChange={handleBookingChange} />
        <InputField field={bookingFields.hairdoCount} value={bookingData.hairdoCount} onChange={handleBookingChange} />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex">Lokasi Makeup</div>
        <div className="flex gap-3">
          <Button
            as="button"
            type="button"
            onClick={() => setLocationType("studio")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              bookingData.locationType === "studio" ? "bg-rose text-white" : "bg-bg text-inksoft"
            )}
          >
            Di Studio
          </Button>
          <Button
            as="button"
            type="button"
            onClick={() => setLocationType("home")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              bookingData.locationType === "home" ? "bg-rose text-white" : "bg-bg text-inksoft"
            )}
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
          className="text-sm text-rosedeep underline"
        >
          Lihat lokasi studio di Maps
        </a>
      )}

      {bookingData.locationType === "home" && (
        <InputField field={bookingFields.lokasi} value={bookingData.lokasi} onChange={handleBookingChange} />
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
        <Button as="button" type="submit">
          Kirim Booking
        </Button>
      </div>
    </form>
  )
}