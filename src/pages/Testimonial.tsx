import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { testimonialData } from "@/data/testimonial"
import { gsap, useGSAP } from "@/lib/gsap"
import { useRef } from "react"

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const imgRefs = useRef<HTMLImageElement[][]>([])

  useGSAP(() => {
    cardRefs.current.forEach((card, idx) => {
      if (!card) return
      const imgs = imgRefs.current[idx]
      const imgsLen = imgs.length
      if (!imgs || imgsLen < 2) return

      gsap.set(imgs, { autoAlpha: 0 })
      gsap.set(imgs[0], { autoAlpha: 1 })

      console.log(`card-${idx}-delay`,(idx % imgsLen) * 2);
      

      const tl = gsap.timeline({
        repeat: -1,
        paused: true,
        delay: (idx % imgsLen) * 1,
        scrollTrigger: {
          // markers: true,
          trigger: card,
          start: "top bottom",
          toggleActions: "play pause resume pause",
        },
      })

      imgs.forEach((img, i) => {
        const next = imgs[(i + 1) % imgs.length]
        tl.to(img, { autoAlpha: 0, duration: 1 }, `+=5`)
          .to(next, { autoAlpha: 1, duration: 1 }, "<")
      })
    })
  }, { scope: sectionRef })

  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col items-start justify-center px-4 max-w-3xl mx-auto relative overflow-hidden"
      >
        <h2 className="text-xs uppercase tracking-[.25em] text-rose mt-4">
          selected words
        </h2>

        <h1 className="font-serif text-5xl/12 max-w-3xl">
          More than just a{' '}
          <span className="font-curvy text-[3.75rem] font-black text-rose">
            look.
          </span>
        </h1>

        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Every appointment carries a different story, and every client leaves with something that goes beyond makeup and hair
        </p>

        <div className="flex flex-col gap-4 mt-4">
          {testimonialData.map((item, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded bg-white border border-line px-4 py-8"
            >
              <div
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el
                }}
                className="aspect-3/2 overflow-hidden relative rounded-sm flex items-center justify-center"
              >
                {item.media.slice(0, 4).map((media, mediaIdx) => (
                  <img
                    key={mediaIdx}
                    ref={(el) => {
                      if (!el) return
                      if (!imgRefs.current[idx]) imgRefs.current[idx] = []
                      imgRefs.current[idx][mediaIdx] = el
                    }}
                    src={media.src}
                    alt={item.service}
                    className="absolute w-full h-full object-cover object-center"
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-3xl/7.5 text-ink font-serif">
                  {item.client}
                </span>
                <span className="text-base font-medium text-rose self-start">
                  {`\u2019${String(item.year).slice(-2)}`}
                </span>
              </div>

              <p className="mt-3 text-sm/3.5 text-inksoft">
                {`\u201C`}
                {`\u200A`}
                {item.quote}
                {`\u200A`}
                {`\u201D`}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="rounded-full bg-rose/10 px-2 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-inksoft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}