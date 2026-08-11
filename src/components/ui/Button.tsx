// src/components/ui/Button.tsx
import { forwardRef, type ReactNode, type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { children, href = "#", className, ...props },
  ref
) {
  const base =
    "flex items-center justify-center px-4 py-2 rounded-full text-sm tracking-wider bg-ink text-bg w-fit"

  return (
    <a ref={ref} href={href} className={cn(base, className)} {...props}>
      {children}
    </a>
  )
})

Button.displayName = "Button"

export default Button