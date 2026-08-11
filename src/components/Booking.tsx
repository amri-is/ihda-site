import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import Footer from "@/components/ui/Footer"


export default function Booking() {
  return (
    <>
      <section
        id="booking"
        className="relative h-screen flex flex-col justify-center items-center px-8 max-w-3xl mx-auto text-center"
      >

        <div className="-z-10 absolute w-full right-0 flex items-center justify-center opacity-10 scale-200">
            <Bloom size="large" flip/>
        </div>

        <h2 className="booking-in text-sm uppercase tracking-widest text-rose">
          Ready when you are
        </h2>

        <h1 className="booking-in font-serif font-normal text-4xl leading-tight">
          Let's create your
          <br />
          <span className="text-rosedeep text-[2.8rem] italic font-curvy font-black">
            perfect&nbsp;
          </span>
          look.
        </h1>

        <p
          className="booking-in mt-8 text-ink/50 max-w-md mx-auto leading-relaxed "
        >
          Tell us about your event,
          preferred style, and date.
          We will help create a look
          that 
          <span className="text-ink">&nbsp;feels&nbsp;</span>
          like you
        </p>

        <Button href="#" className="mt-4 overflow-hidden text-nowrap">
          Book now
        </Button>

        <Footer />

      </section>
    
    </>
  );
}