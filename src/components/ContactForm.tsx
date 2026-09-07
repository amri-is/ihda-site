import type { ChangeEvent, SyntheticEvent } from "react"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"

import { contactFields } from "@/data/booking"
import type { ContactData } from "@/data/booking"

type ContactFormProps = {
  data: ContactData
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void
}

export default function ContactForm({ data, onChange, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full bg-rose/15 p-4 rounded text-sm text-inksoft font-semibold">
      <InputField field={contactFields.nama} value={data.nama} onChange={onChange} />
      <InputField as="textarea" field={contactFields.pesan} value={data.pesan} onChange={onChange} />

      <Button as="button" type="submit" className="self-center">
        Kirim Pesan
      </Button>
    </form>
  )
}