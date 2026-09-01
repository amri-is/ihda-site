import { useState } from "react"

import type { ChangeEvent, SyntheticEvent } from "react"

import type { ContactData } from "@/data/booking"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"

import { BRAND_ITEM } from "@/constants/brand"

import { initContactData } from "@/data/booking"

export default function ContactForm() {
  const [contactData, setContactData] = useState<ContactData>(initContactData)

  const inputClass = "w-full px-3 py-2 rounded text-sm focus:outline-none focus:border-rose bg-bg"
  const labelClass = "flex flex-col gap-1.5 font-semibold text-sm text-inksoft"

  const handleContactChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const msg = `Halo, Kak Ihda. Aku, ${contactData.nama}, mau tanya-tanya nih. ${contactData.pesan}`

    const url = `https://wa.me/${BRAND_ITEM.tel}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    // setContactData(initContactData)
  }

  return (
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
  )
}