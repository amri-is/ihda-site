import Button from '@/components/ui/Button'
import Bloom from '@/components/ui/Bloom'

import { BRAND_ITEM } from "@/constants/brand";

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Fragment, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const EASE = 'power4.out'
const DURATION = 2

gsap.registerPlugin(ScrollTrigger, SplitText)

function animateBloom(bloomRef: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(bloomRef.current, {
      translateX: '20vh',
      scale: 1,
      ease: 'expo.out',
      opacity: 0.1,
      z: -10,
      duration: DURATION,
    })
  })
}

function animateEyebrow(eyebrowRef: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const split = SplitText.create(eyebrowRef.current, {
      type: 'lines',
      // mask: 'words',
    })

    gsap.timeline().from(split.lines, {
      y: '-50vh',
      x: '50vw',
      rotate: 90,
      autoAlpha: 0,
      ease: EASE,
      stagger: 0.1,
      duration: DURATION
    })
  })
}

function animateTitle(title: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const split = SplitText.create(title.current, {
      type: 'words',
    })

    gsap.timeline().from(split.words, {
      x: '-5vw',
      filter: "blur(1rem)",
      autoAlpha: 0,
      ease: EASE,
      stagger: {
        from: 'start',
        amount: 1,
      },
      duration: DURATION,
      
    })
  })
}

function animateBody(body: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const split = SplitText.create(body.current, {
      type: 'words',
      // mask: 'words',
    })

    gsap.timeline().from(split.words, {
      y: '50vh',
      x: '-50vw',
      rotate: 90,
      autoAlpha: 0,
      ease: EASE,
      stagger: {
        from: 'start',
        amount: 0.5,
      },
      duration: DURATION
    })
  })
}

function animateButton(button: React.RefObject<HTMLElement | null>, btnText: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const el = button.current
    const text = btnText.current
    if (!el || !text) return

    const split = SplitText.create(text, { type: 'words' })

    gsap.set(el, { overflow: 'hidden' })

    gsap.timeline()
      .from(el, { width: 36, opacity: 0, duration: DURATION, ease: EASE })
      .from(split.words, {
        y: '-5vh',
        opacity: 0,
        ease: 'back.out',
        stagger: { from: 'start', amount: 1/5},
        duration: DURATION-1,
      }, '-=1')
  })
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bloomRef = useRef<HTMLDivElement | null>(null)
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const btnTextRef = useRef<HTMLAnchorElement | null>(null)

  animateBloom(bloomRef)
  animateEyebrow(eyebrowRef)
  animateTitle(titleRef)
  animateBody(bodyRef)
  animateButton(buttonRef, btnTextRef)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto w-full relative "
    >
      <div
        className="  -z-10 absolute w-full right-0 flex items-center justify-center "
        >
        <div ref={bloomRef} className="" >
          <Bloom size="large" />
        </div>
      </div>
      
      <div ref={eyebrowRef} className=" text-xs uppercase tracking-[.25em] text-rose">
        {BRAND_ITEM.name}
      </div>

      <h1 ref={titleRef} className=" font-serif text-5xl max-w-3xl">
        Beauty for
        <br />
        <span className="font-curvy text-6xl italic text-rosedeep font-black ">
          every&nbsp;
        </span>
        occasion,
        <br />
        your way.
      </h1>


      <p
        ref={bodyRef}
        className=" text-base text-inksoft max-w-md mt-8"
      >
        From everyday soft glam to graduation, bridal day —
        we shape looks that
        <span className="text-ink">
          &nbsp;feel&nbsp;
        </span>
        like you not a template.
      </p>

      <Button
        ref={buttonRef}
        href="#booking"
        className='mt-4 overflow-hidden text-nowrap'
      >
        <span ref={btnTextRef}>
          Book a session
        </span>
        </Button>
    </section>
  )
}