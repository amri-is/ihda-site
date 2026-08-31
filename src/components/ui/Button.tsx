import { forwardRef, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

type ButtonAsAnchor = { as?: "a" } & React.ComponentPropsWithoutRef<"a">
type ButtonAsButton = { as: "button" } & React.ComponentPropsWithoutRef<"button">

type ButtonProps = (ButtonAsAnchor | ButtonAsButton) & { children: ReactNode }

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button({ children, className, as = "a", ...props }, ref) {
    const base =
      "flex items-center justify-center px-4 py-2 rounded-full text-sm tracking-wider bg-inksoft text-bg w-fit"

    if (as === "button") {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(base, className)}
          {...(props as React.ComponentPropsWithoutRef<"button">)}
        >
          {children}
        </button>
      )
    }

    const { href = "#", ...anchorProps } = props as React.ComponentPropsWithoutRef<"a">

    if (href.startsWith("/")) {
      return (
        <Link to={href} className={cn(base, className)} {...anchorProps}>
          {children}
        </Link>
      )
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn(base, className)}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }
)

Button.displayName = "Button"

export default Button