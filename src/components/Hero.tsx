import Button from '@/components/ui/Button'
import Bloom from '@/components/ui/Bloom'
import { BRAND_ITEM } from '@/constants/brand'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/lib/gsap'

const EASE = "power3.out"
const DURATION = 2

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
    const eyebrowSplit = SplitText.create(eyebrowRef.current, {type: 'words', mask: 'words'})
    const bodySplit = SplitText.create(bodyRef.current, {type: 'words', mask: 'words'})
    const titleSplit = SplitText.create(titleRef.current, {type: 'words'})
    const btnTextSplit = SplitText.create(btnTextRef.current, {type: 'words'})

    // Bloom drifts in behind the copy.
    tl.from(bloomRef.current, {
      xPercent: -100,
      autoAlpha: 0,
      ease: EASE,
      duration: DURATION,
    }, 0)

    // Eyebrow, title, body all split + reveal, running together.
    tl.add(gsap.from(eyebrowSplit.words, {
      yPercent: -100,
      autoAlpha: 0,
      ease: EASE,
      stagger: 0.1,
      duration: DURATION,
    }), 0)

    tl.add(gsap.from(titleSplit.words, {
      xPercent: -50,
      filter: 'blur(1rem)',
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', amount: 1 },
      duration: DURATION,
    }), 0)

    tl.add(gsap.from(bodySplit.words, {
      yPercent: 100,
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', amount: 0.5 },
      duration: DURATION,
    }), 0)

    tl.add(gsap.from(buttonRef.current, {
        width: 0,
        opacity: 0,
        duration: DURATION,
        ease: EASE,
    }), 0)

    tl.add(gsap.from(btnTextSplit.words, {
        y: '-5vh',
        opacity: 0,
        ease: 'back.out',
        stagger: { from: 'start', amount: 1 / 5 },
        duration: DURATION - 1,
    }), 1)

  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto w-full relative"
    >
      <div ref={bloomRef} className="-z-10 absolute w-full right-0 flex items-center justify-center opacity-10 scale-200">
          <Bloom size="large" />
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