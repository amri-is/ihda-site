import type { ReactNode, ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode
}

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-full text-sm tracking-wider transition bg-ink text-bg hover:bg-rosedeep "

  return (
    <a
      href={href}
      className={cn(base)}
    >
      {children}
    </a>
  )
}