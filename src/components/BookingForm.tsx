import type { ChangeEvent, SyntheticEvent } from "react"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"

import { BRAND_ITEM } from "@/constants/brand"

import { bookingFields } from "@/data/booking"
import type { BookingData, LocationType } from "@/data/booking"

import { cn } from "@/lib/utils"

type BookingFormProps = {
  data: BookingData
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  setLocationType: (locationType: LocationType) => void
  onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void
}

export default function BookingForm({
  data,
  onChange,
  setLocationType,
  onSubmit,
}: BookingFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full bg-rose/15 p-4 rounded text-sm text-inksoft font-semibold">
      <InputField field={bookingFields.nama} value={data.nama} onChange={onChange} />
      <InputField field={bookingFields.instagram} value={data.instagram} onChange={onChange} />
      <InputField field={bookingFields.acara} value={data.acara} onChange={onChange} />

      <div className="grid grid-cols-2 gap-3">
        <InputField field={bookingFields.tanggal} value={data.tanggal} onChange={onChange} />
        <InputField field={bookingFields.jumlahOrang} value={data.jumlahOrang} onChange={onChange} />
      </div>

      <InputField field={bookingFields.jam} value={data.jam} onChange={onChange} />

      <div className="grid grid-cols-2 gap-3">
        <InputField field={bookingFields.hijabdoCount} value={data.hijabdoCount} onChange={onChange} />
        <InputField field={bookingFields.hairdoCount} value={data.hairdoCount} onChange={onChange} />
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
              data.locationType === "studio" ? "bg-rose text-white" : "bg-bg text-inksoft"
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
              data.locationType === "home" ? "bg-rose text-white" : "bg-bg text-inksoft"
            )}
          >
            Home Service
          </Button>
        </div>
      </div>

      {data.locationType === "studio" && (
        <a
          href={BRAND_ITEM.map}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-rosedeep underline"
        >
          Lihat lokasi studio di Maps
        </a>
      )}

      {data.locationType === "home" && (
        <InputField field={bookingFields.lokasi} value={data.lokasi} onChange={onChange} />
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