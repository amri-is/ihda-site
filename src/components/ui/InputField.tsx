import type { ChangeEvent } from "react"

type FieldProps = {
  field: {
    label: string
    name: string
    type: string
    min?: number | null
    placeholder?: string | null
    required: boolean
  }
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({ field, value = "", onChange }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5 font-semibold text-sm text-inksoft">
      <div className="flex gap-1 items-center">
        <span>{field.label}</span>
        {field.required && <span className="text-rose">*</span>}
      </div>
      <input
        name={field.name}
        type={field.type}
        min={field.min ?? undefined}
        placeholder={field.placeholder ?? undefined}
        required={field.required}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded text-sm focus:outline-none focus:border-rose bg-bg"
      />
    </label>
  )
}