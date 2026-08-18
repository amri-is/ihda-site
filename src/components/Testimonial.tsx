import { TestimonialItems } from "@/data/testimonial";
import { getRange } from "@/lib/utils";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export default function Testimonial() {
  const commentWrapRef = useRef<HTMLDivElement | null>(null)
  const commentRefs = useRef<Array<HTMLDivElement | null>>([])
  // console.log(commentRefs.current);

  useGSAP(() => {
    const wrap = commentWrapRef.current
    const comments = commentRefs.current
    const tl = gsap.timeline({ paused: true, })
    const anim = tl.from(comments, {
      autoAlpha: 0,
      scale: 0,
      duration: 0.5,
      ease: 'back.out',
      // easeReverse: true,
      stagger: {
        each: 0.15,
        from: 'start'
      }
    })

    ScrollTrigger.create({
      // markers: true,
      id: 'comment',
      trigger: wrap,
      animation: anim,
      start: 'top center',
      end: 'top center',
      toggleActions: 'play none none reverse'
    })
  })
  
  return (
    <section id="testimonial" className="flex flex-col items-center text-center px-8 max-w-3xl mx-auto w-full relative overflow-hidden">

      <h2 className="text-sm uppercase tracking-[0.25rem] text-rose">
        Kind Words
      </h2>

      <h1 className="font-serif font-normal text-4xl leading-tight">
        From past&nbsp;
        <span className="text-rosedeep text-[2.8rem] italic font-curvy font-black">
          clients
        </span>
      </h1>


      <div ref={commentWrapRef} className="comments relative w-full min-h-80 flex justify-center items-center">
        {TestimonialItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { commentRefs.current[idx] = el }}
            className="absolute p-5 flex flex-col gap-4 shadow-md max-w-sm"
            style={{
              backgroundColor: item.color,
              backgroundImage: `linear-gradient(135deg, transparent ${getRange(80, 90)}%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.18) 100%)`,
              transform: `rotate(${getRange(-10, 10)}deg) translateY(${getRange(-10, 10)}%) scale(${getRange(1.1, 0.9, 2)})`
            }}
          >

            <div className="comment text-sm">
              {item.comment}
            </div>

            <div className="photo flex items-center gap-1">

              <img
                src={item.photo}
                alt={`Testimonial photo ${idx + 1}`}
                className="size-8 object-center object-cover rounded-full"
              />

              <div className="name text-xs ml-2">
                {item.name}
              </div>

            </div>

          </div>
        ))}
      </div>
      <div className="buttons flex gap-5">
        <button className="next bg-blue-200 py-1 px-4 rounded">next</button>
      </div>

    </section>
  )
}