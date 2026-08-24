import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import { gsap, useGSAP, ScrollTrigger, SplitText } from "@/lib/gsap";

export default function Booking() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const emphasizeRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(() => {
    const section = sectionRef.current
    const emphasize = emphasizeRef.current
    if (!section || !emphasize) return

    const emSplit = SplitText.create(emphasize, { type: 'words chars' })

    const tl = gsap.timeline({ paused: true })
    
    tl.from(emSplit.chars, {
      autoAlpha: 0,
      // duration: 1,
      xPercent: -100,
      ease: 'power4',
      stagger: {
        from: 'start',
        each: 0.05,
      }
    })
    // tl.play(0)

    ScrollTrigger.create({
      // markers: true,
      animation: tl,
      trigger: emphasize,
      start: 'top 75%',
      end: 'bottom 75%',
      toggleActions: 'play none none none',
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
        Let's make your look{' '}
        <span ref={emphasizeRef} className="font-curvy text-[3.5rem]/5 font-black text-rose">
          perfect
        </span>
      </h1>

      <p
        className="text-base/4.5 text-inksoft max-w-md mt-4"
      >
        Tell us about your event,
        preferred style, and date.
        We will help create a look
        that feels like you
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