import Button from '@/components/ui/Button'
import Bloom from '@/components/ui/Bloom'
import { BRAND_ITEM } from '@/constants/brand'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/lib/gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bloomRef = useRef<HTMLDivElement | null>(null)
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const btnTextRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(() => {
    const EASE = 'power4.out'
    const DUR = 1.5
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
      duration: DUR,
    }, 0)

    // Eyebrow, title, body all split + reveal, running together.
    tl.add(gsap.from(eyebrowSplit.words, {
      yPercent: -100,
      autoAlpha: 0,
      ease: EASE,
      stagger: 0.1,
      duration: DUR,
    }), 0)

    tl.add(gsap.from(titleSplit.words, {
      xPercent: -100,
      filter: 'blur(1rem)',
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', each: 0.1 },
      duration: DUR,
    }), 0)

    tl.add(gsap.from(bodySplit.words, {
      yPercent: 100,
      autoAlpha: 0,
      ease: EASE,
      stagger: { from: 'start', amount: 0.5 },
      duration: DUR,
    }), 0.5)

    tl.add(gsap.from(buttonRef.current, {
      autoAlpha: 0,
      // width: 0,
      duration: DUR,
      ease: 'none',
    }), 0.1)

    tl.add(gsap.from(buttonRef.current, {
      // autoAlpha: 0,
      width: 0,
      duration: DUR,
      ease: EASE,
    }), 0)

    tl.add(gsap.from(btnTextSplit.words, {
      yPercent: -300,
      autoAlpha: 0,
      rotate: 'random(-90,90,45)',
      ease: 'back.out',
      stagger: { from: 'start', each: 0.1 },
      duration: DUR,
    }), 1)

  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-svh flex flex-col items-start justify-center px-4 max-w-3xl mx-auto relative overflow-hidden"
    >
      <div ref={bloomRef} className="-z-10 absolute w-full flex items-center justify-center opacity-10 scale-200">
          <Bloom size="large" />
      </div>

      <h2 ref={eyebrowRef} className="text-xs uppercase tracking-[.25em] text-rose">
        {BRAND_ITEM.name}
      </h2>

      <h1 ref={titleRef} className="font-serif text-5xl/12 max-w-3xl ">
        Beauty for{' '}
        <span className="font-curvy text-[3.75rem] font-black text-rose">
          every
        </span>
        {' '}occasion, your way.
      </h1>

      <p ref={bodyRef} className="text-base/4.5 text-inksoft max-w-md mt-4">
        From everyday soft glam to graduation, bridal day —
        we shape looks that{' '}
        <span className="text-ink">feel</span>
        {' '}like you not a template.
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