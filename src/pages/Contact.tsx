import { useState } from "react"

import type { Tab } from "@/data/booking"

import Button from "@/components/ui/Button"

import Footer from "@/components/Footer"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"
import ContactForm from "@/components/ContactForm"
import BookingForm from "@/components/BookingForm"

import { cn } from "@/lib/utils"

export default function Contact() {
  const [tab, setTab] = useState<Tab>("contact")

  return (
    <>
      <ScrollbarIndicator />
      <section className="flex flex-col items-center p-4">
        <h1 className="font-serif text-5xl/12 max-w-3xl self-start">
          Get in{' '}
          <span className="font-curvy text-[3.75rem] font-black text-rose">
            touch.
          </span>
        </h1>

        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Whether you're ready to start or just exploring,
          we're happy to talk.
          Let's start the way that works best for you.
        </p>

        <div className="flex gap-2 w-full mt-6 mb-2">
          <Button
            as="button"
            type="button"
            onClick={() => setTab("contact")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              tab === "contact" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            )}
          >
            Tanya-tanya
          </Button>
          <Button
            as="button"
            type="button"
            onClick={() => setTab("booking")}
            className={cn(
              "flex-1 py-2 rounded text-sm font-semibold",
              tab === "booking" ? "bg-rose text-white" : "bg-rose/15 text-inksoft"
            )}
          >
            Booking Sekarang
          </Button>
        </div>

        {tab === "contact" && <ContactForm />}
        {tab === "booking" && <BookingForm />}
      </section>
      <div className="spacer h-50"></div>
      <Footer />
    </>
  )
}