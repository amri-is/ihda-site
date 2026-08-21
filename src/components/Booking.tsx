import { useRef } from "react"

import Bloom from "@/components/ui/Bloom"
import Button from "@/components/ui/Button"

import { gsap, useGSAP, SplitText } from "@/lib/gsap";


export default function Booking() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bloomRef = useRef<HTMLDivElement | null>(null)
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLAnchorElement | null>(null)
  const btnTextRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(() => {
    const EASE = 'power2.out'
    const DUR = 1

    const eyebrow = eyebrowRef.current
    const title = titleRef.current
    const body = bodyRef.current
    const btn = btnRef.current
    const btnText = btnTextRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        id: 'booking',
        trigger: sectionRef.current,
        start: '10% 30%',
        toggleActions: 'play none none none',
      }
    })
    const eyebrowSplit = SplitText.create(eyebrow, {type: 'words', mask: 'words'})
    const titleSplit = SplitText.create(title, {type: 'words'})
    const bodySplit = SplitText.create(body, {type: 'words', mask: 'words'})
    const btnTextSplit = SplitText.create(btnText, {type: 'words'})

    tl.from(eyebrowSplit.words, {
      yPercent: -100, 
      autoAlpha: 0, 
      ease: EASE, 
      easeReverse: true, 
      stagger: { from: 'start', amount: 0.5 }, 
      duration: DUR,
    })

    tl.add(gsap.from(titleSplit.words, {
      xPercent: -50, 
      filter: 'blur(1rem)', 
      autoAlpha: 0, 
      ease: EASE, 
      easeReverse: true,
      stagger: { from: 'start', amount: 0.5 }, 
      duration: DUR,
    }), 0)

    tl.add(gsap.from(bodySplit.words, {
      yPercent: 100, 
      autoAlpha: 0, 
      ease: EASE, 
      easeReverse: true,
      stagger: { from: 'start', amount: 0.5 }, 
      duration: DUR,
    }), 0)

    tl.add(gsap.from(btn, {
      width: 0, 
      opacity: 0, 
      duration: DUR, 
      ease: EASE, 
      easeReverse: true,
    }), 0)

    tl.add(gsap.from(btnTextSplit.words, {
      yPercent: -300, 
      opacity: 0, 
      rotate: 'random(90,-90, 45)',
      ease: 'back.out', 
      easeReverse: true,
      stagger: { from: 'start', each: 0.1 }, 
      duration: DUR,
    }), 0)

  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative h-svh flex flex-col justify-center items-center px-8 max-w-3xl mx-auto text-center overflow-hidden"
    >

      <div ref={bloomRef} className="-z-10 absolute flex items-center justify-center opacity-10 scale-200">
        <Bloom size="large" flip/>
      </div>

      <h2 ref={eyebrowRef} className="text-xs uppercase tracking-[.25em] text-rose">
        Ready when you are
      </h2>

      <h1 ref={titleRef} className="font-serif text-5xl/12 max-w-3xl">
        Let's create your
        <span className="font-curvy text-[3.5rem] text-rose font-black">
          &nbsp;perfect&nbsp;
        </span>
        look.
      </h1>

      <p
        ref={bodyRef}
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
        ref={btnRef}
        href="#booking"
        className="mt-4 overflow-hidden text-nowrap"
      >
        <span ref={btnTextRef}>Book a session</span>
      </Button>

    </section>
  );
}