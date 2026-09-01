import type { ChangeEvent } from "react"

export type FieldProps = {
  field: {
    label: string
    name: string
    type?: string // might be null for other elments
    placeholder?: string | null
    required?: boolean

    // other props
    // number prop
    min?: number | null
    // textarea prop
    rows?: number
  }
  as?: "input" | "textarea"
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function InputField({ field, as = "input", value = "", onChange }: FieldProps) {
  const inputClass = "w-full px-3 py-2 rounded text-sm outline-none focus:ring-2 ring-rose bg-bg"

  return (
    <label className="flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <span>{field.label}</span>
        {field.required && <span className="text-rose">*</span>}
      </div>

      {as === "textarea" ? (
        <textarea
          name={field.name}
          placeholder={field.placeholder ?? undefined}
          required={field.required}
          rows={field.rows ?? 4}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      ) : (
        <input
          name={field.name}
          type={field.type}
          min={field.min ?? undefined}
          placeholder={field.placeholder ?? undefined}
          required={field.required}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}
    </label>
  )
}