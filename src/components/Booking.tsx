import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import Footer from "@/components/ui/Footer"


export default function Booking() {
  const container = useRef<HTMLElement>(null)
  const bloomWrap = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        ref={container}
        id="booking"
        className="h-screen flex flex-col justify-center items-center px-8 max-w-3xl mx-auto w-full relative text-center"
      >

        <div className="absolute opacity-10 left-0 scale-200" ref={bloomWrap}>
            <Bloom size="large" flip/>
        </div>

        <div className="booking-in text-sm uppercase tracking-widest text-rose">
          Ready when you are
        </div>

        <h2 className="booking-in font-serif font-normal text-4xl leading-tight">
          Let's create your
          <br />
          <em className="text-rosedeep text-4xl">
            perfect&nbsp;
          </em>
          look.
        </h2>

        <p
          className="booking-in mt-8 text-inksoft max-w-md mx-auto leading-relaxed "
        >
          Tell us about your event,
          preferred style, and date.
          We will help create a look
          that feels like you.
        </p>

        <div className="booking-in mt-4">
          <Button href="#">
            Book now
          </Button>
        </div>
        <Footer />
      </section>
    
    </>
  );
}