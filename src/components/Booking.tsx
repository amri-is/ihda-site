import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import { gsap, useGSAP } from "@/lib/gsap";

export default function Booking() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(() => {
    const section = sectionRef.current
    const title = titleRef.current
    if (!section || !title) return

    const text = title.innerText

    gsap.set(title, {
      text: "",
      // autoAlpha: 0,
    })

    gsap.to(title, {
      duration: 0.5,
      // autoAlpha: 1,
      ease: 'power4.out',
      text: text,
      scrollTrigger: {
        // markers: true,
        trigger: title,
        start: 'top center',
        toggleActions: 'play none none none',
      }
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="h-lvh flex flex-col items-start justify-center px-4 max-w-3xl mx-auto w-full relative overflow-hidden "
    >

      <div className="-z-10 absolute w-full flex items-center justify-center opacity-10 scale-200">
        <Bloom size="large" flip/>
      </div>

      <h2 className="text-xs uppercase tracking-[.25em] text-rose">
        Ready when you are
      </h2>

      <h1 className="font-serif text-5xl/12 max-w-3xl">
        Let's make your look&nbsp;
        <span ref={titleRef} className="font-curvy text-[3.5rem]/5 font-black text-rose">
          perfect
        </span>
      </h1>

      <p
        className="text-base/4.5 text-inksoft max-w-md mt-4"
      >
        Tell us about your event,
        preferred style, and date.
        We will help create a look
        that 
        <span className="text-ink">&nbsp;feels&nbsp;</span>
        like you
      </p>

      <Button
        href="#booking"
        className="mt-4 overflow-hidden text-nowrap"
      >
        <span>Book now</span>
      </Button>

    </section>
  );
}