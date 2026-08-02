import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import Footer from "@/components/ui/Footer"


export default function Booking() {
  return (
    <>
      <section
        id="booking"
        className="h-screen relative"
      >
        <div className="h-full w-full flex flex-col justify-center items-center max-w-3xl mx-auto relative text-center">

          <div className="absolute opacity-10 left-0 scale-200 -z-10">
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
        </div>


        <Footer />

      </section>
    
    </>
  );
}