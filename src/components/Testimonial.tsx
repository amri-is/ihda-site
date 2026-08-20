import { TestimonialItems } from "@/data/testimonial";
import { getRange } from "@/lib/utils";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useRef, useState } from "react";
import Button from "@/components/ui/Button";

export default function Testimonial() {
  const commentWrapRef = useRef<HTMLDivElement | null>(null)
  const commentRefs = useRef<Array<HTMLDivElement | null>>([])
  const btnRef = useRef<HTMLButtonElement | null>(null)
  // hold gsap timeline 
  const animTl = useRef<gsap.core.Timeline | null>(null)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [locked, setLocked] = useState(true)

  // mapping testimonial items
  const items = TestimonialItems

  const isLastCard = currentIdx === items.length
  const btnText = isLastCard ? 'click again!' : 'next'

  // populate anim
  useGSAP(() => {
    const wrap = commentWrapRef.current
    const comments = commentRefs.current

    const tl = gsap.timeline({ paused: true })
    tl.from(comments, {
      autoAlpha: 0,
      scale: 0,
      rotate: 'random(180,-180)',
      duration: 0.5,
      ease: 'back.out',
      easeReverse: 'back.in',
      stagger: { each: 0.1, from: 'start' },
      onStart: () => setLocked(true),
      onComplete: () => setLocked(false),
    })
    animTl.current = tl

    ScrollTrigger.create({
      // markers: true,
      id: 'comment',
      trigger: wrap,
      animation: tl,
      start: 'top center',
      end: 'top center',
      toggleActions: 'play none none none',
    })
  }, [])

  const handleNext = () => {
    if (locked) return

    // replay anim if all comments empty
    if (currentIdx >= items.length) {
      gsap.set(commentRefs.current, { xPercent: 0, rotate: 0, autoAlpha: 0 })
      setCurrentIdx(0)
      animTl.current?.restart()
      return
    }

    // swap index to start from last
    const frontIdx = items.length - 1 - currentIdx
    // console.log(frontIdx);
    
    const frontEl = commentRefs.current[frontIdx]
    // console.log(frontEl);
    if (!frontEl) return

    // alternate direction
    const dir = currentIdx % 2 === 0 ? 1 : -1

    const randomRotate = getRange(90, 45)

    // swipe anim
    gsap.to(frontEl, {
      xPercent: dir * 100,
      autoAlpha: 0,
      rotate: dir * randomRotate,
      duration: 0.5,
      ease: 'back.in',
      onEnter: () => {
        setCurrentIdx((prev) => prev + 1)

        //* this log fetch stale data since its inside a closure
        //* call it outside so it can fetch new data
        //* something-something garbage collected
        // console.log(currentIdx);
        // console.log(isLastCard);
        // console.log(btnText);
        // console.log(items.length);
        
        // disable btn
        setLocked(true)
      },
      onComplete: () => {
        // enable btn
        setLocked(false)
      }
    })
  }

  // btn anim on click
  const handleBtnAnim = () => {
    const btn = btnRef.current
    if (!btn) return
    gsap.to(btn, {
      duration: 0.1,
      repeat: 1,
      yoyo: true,
      scale: 1.2,
      ease: 'sine.in'
    })
  }

  //! log it here (outside)
  // console.log('currentIdx:', currentIdx)
  // console.log('isLastCard:', isLastCard)
  // console.log('btnText:', btnText)

  // btn text anim
  useGSAP(() => {
    const btn = btnRef.current
    if (!btn) return
    gsap.to(btn, { text: btnText, ease: 'power4.out' })
  }, [btnText])

  return (
    <section id="testimonial" className="flex flex-col items-center text-center px-8 max-w-3xl mx-auto w-full relative">
      
      <h2 className="text-sm uppercase tracking-[0.25rem] text-rose">
        Kind Words
      </h2>
      <h1 className="font-serif font-normal text-4xl leading-tight">
        From past&nbsp;
        <span className="text-rosedeep text-[2.8rem] italic font-curvy font-black">
          clients
        </span>
      </h1>

      {/* card stack container, also the ScrollTrigger trigger element */}
      <div ref={commentWrapRef} className="comments relative w-full min-h-80 flex justify-center items-center">
        {TestimonialItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { commentRefs.current[idx] = el }}
            className="absolute p-5 flex flex-col gap-4 max-w-sm min-w-3xs rounded"
            style={{
              backgroundColor: item.color,
              // to make it look like post-it note
              backgroundImage: `linear-gradient(
                135deg,
                transparent ${getRange(80, 90)}%, 
                rgba(100,0,0,0.1) 0%, 
                rgba(100,0,0,0.1) 100%
              )`,
              transform: `rotate(${getRange(10, -10)}deg) translateY(${getRange(10, -10)}%)`
            }}
          >
            <div className="comment text-sm">
              {item.comment}
            </div>
            <div className="photo flex items-center gap-4">
              <img
                src={item.photo}
                alt={`Testimonial client ${idx + 1}`}
                className="size-15 object-center object-cover rounded-full"
              />
              <div className="name text-xs ml-2">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        ref={btnRef}
        as="button"
        onClick={() => {
          handleNext()
          handleBtnAnim()
        }}
        disabled={locked}
        className="mb-10"
      >
        next
      </Button>
    </section>
  )
}