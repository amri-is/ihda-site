import { useState } from "react"
import type { ChangeEvent, SyntheticEvent } from "react"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"

import { BRAND_ITEM } from "@/constants/brand"

import { contactFields, initContactData } from "@/data/booking"
import type { ContactData } from "@/data/booking"

export default function ContactForm() {
  const [contactData, setContactData] = useState<ContactData>(initContactData)

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

      <InputField field={contactFields.nama} value={contactData.nama} onChange={handleContactChange} />

      <InputField as="textarea" field={contactFields.pesan} value={contactData.pesan} onChange={handleContactChange} />

      <Button as="button" type="submit" className="self-center">
        Kirim Pesan
      </Button>
    </form>
  )
}