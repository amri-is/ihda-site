import Button from '@/components/ui/Button'
import Bloom from '@/components/ui/Bloom'
import { BRAND_ITEM } from '@/constants/brand'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/lib/gsap'
import { splitFrom, EASE, DURATION } from '@/lib/animation'

const BTN_DURATION = DURATION - 1

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bloomRef = useRef<HTMLDivElement | null>(null)
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const btnTextRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Bloom drifts in behind the copy.
    tl.from(bloomRef.current, {
      xPercent: -100,
      ease: EASE,
      duration: DURATION,
    }, 0)

    // Eyebrow, title, body all split + reveal, running together.
    tl.add(splitFrom(eyebrowRef.current, 'lines', {
      y: '-50vh',
      x: '50vw',
      rotate: 90,
      autoAlpha: 0,
      ease: EASE,
      stagger: 0.1,
      duration: DURATION,
    }), 0)

    tl.add(splitFrom(titleRef.current, 'words', {
      x: '-5vw',
      filter: 'blur(1rem)',
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', amount: 1 },
      duration: DURATION,
    }), 0)

    tl.add(splitFrom(bodyRef.current, 'words', {
      y: '50vh',
      x: '-50vw',
      rotate: 90,
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', amount: 0.5 },
      duration: DURATION,
    }), 0)

    

    // Button: box opens, then its text words drop in.
    if (buttonRef.current && btnTextRef.current) {
      const btnSplit = SplitText.create(btnTextRef.current, { type: 'words' })
      gsap.set(buttonRef.current, { overflow: 'hidden' })

      tl.from(buttonRef.current, {
        width: 36,
        opacity: 0,
        duration: DURATION,
        ease: EASE,
      }, DURATION / 2)
      tl.from(btnSplit.words, {
        y: '-5vh',
        opacity: 0,
        ease: 'back.out',
        stagger: { from: 'start', amount: 1 / 5 },
        duration: BTN_DURATION,
      }, '-=1')
    }

  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto w-full relative"
    >
      <div className="-z-10 absolute w-full right-0 flex items-center justify-end opacity-10">
        <div ref={bloomRef}>
          <Bloom size="large" />
        </div>
      </div>

      <div ref={eyebrowRef} className="text-xs uppercase tracking-[.25em] text-rose">
        {BRAND_ITEM.name}
      </div>

      <h1 ref={titleRef} className="font-serif text-5xl max-w-3xl">
        Beauty for
        <br />
        <span className="font-curvy text-6xl italic text-rosedeep font-black">
          every&nbsp;
        </span>
        occasion,
        <br />
        your way.
      </h1>

      <p ref={bodyRef} className="text-base text-inksoft max-w-md mt-8">
        From everyday soft glam to graduation, bridal day —
        we shape looks that
        <span className="text-ink">&nbsp;feel&nbsp;</span>
        like you not a template.
      </p>

      <Button
        ref={buttonRef}
        href="#booking"
        className="mt-4 overflow-hidden text-nowrap"
      >
        <span ref={btnTextRef}>Book a session</span>
      </Button>
    </section>
  )
}