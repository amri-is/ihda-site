import Footer from "@/components/Footer"
import { ServiceData } from "@/data/services"
import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import Booking from "@/components/Booking"

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  // tracks which card idx currently expanded
  // starts at 0 -> card index 0 expanded by default
  const expandedRef = useRef(0)

  useGSAP(() => {
    gsap.defaults({ ease: 'power1.inOut', duration: 0.5 })
    // initial paint: expanded card full height+opacity, rest collapsed to header-only strip
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === expandedRef.current) {
        gsap.set(el, { height: 'auto', autoAlpha: 1 })
      } else {
        gsap.set(el, { height: '3.5rem', autoAlpha: 0.75 })
      }
    })
  }, { scope: sectionRef })

  function toggleCard(idx: number) {
    if (idx === expandedRef.current) return
    const prevIdx = expandedRef.current
    // update tracked state before animating
    expandedRef.current = idx

    const prevEl = cardRefs.current[prevIdx]
    const nextEl = cardRefs.current[idx]
    if (!nextEl) return

    // measure target expand height
    // this is not an animation so user will not see any changes
    // 
    // expand next card 
    gsap.set(nextEl, { height: 'auto' })
    
    // read next card height
    const expandH = nextEl.scrollHeight
    // console.log('next el height:', expandH)

    // snap back next card height
    gsap.set(nextEl, { height: '3.5rem' })

    // single timeline, both animations run in parallel (position 0)
    const tl = gsap.timeline()
    if (prevEl && prevEl !== nextEl) {
      // collapse old card
      tl.to(prevEl, { height: '3.5rem', autoAlpha: 0.75 }, 0)
    }
    // expand new card to measured px height
    tl.to(nextEl, { height: expandH, autoAlpha: 1 }, 0)
    // return card's height to auto so content reflow when screen width changes
    tl.set(nextEl, { height: 'auto' })
  }

  return (
    <>
      <section ref={sectionRef} className="flex flex-col items-start justify-center px-4 pt-4 max-w-3xl mx-auto relative overflow-hidden">
        <h2 className="text-xs uppercase tracking-[.25em] text-rose">
          What we do
        </h2>
        <h1 className="font-serif text-5xl/12 max-w-3xl ">
          Four ways to be{' '}
          <span className="font-curvy text-[3.75rem] font-black text-rose">
            stylized.
          </span>
        </h1>
        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Every service is built around the occasion, not a fixed formula — the same trained hand, your call.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {ServiceData.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el }}
              onClick={() => toggleCard(idx)}
              className="bg-rose/75 rounded overflow-hidden relative"
            >
              <div className="flex flex-col p-4 ">
                <h1 className="text-2xl/6 font-serif text-white overflow-hidden text-nowrap truncate">
                  {item.title}
                </h1>
                <h1 className="text-5xl text-white/50 font-curvy w-fit absolute right-0 pr-2 -mt-3">
                  0{idx + 1}
                </h1>
                <p className="text-sm/3.5 text-white mt-4">
                  {item.body}
                </p>
                {item.note && (
                  <>
                    <div className="text-white/50 text-[0.675rem]/[0.675rem] self-end italic mt-2">*{item.note}</div>
                  </>
                )}
                <div className="relative grid cols-2 rows-1 mt-4">
                  <div className="flex flex-col gap-2">
                    {item.items.map((items, itemsIdx) => (
                      <div key={`${items}-${itemsIdx}`} className="items w-full flex items-center justify-between p-3 gap-4 bg-bg rounded ">
                        <div className="flex flex-col gap-0.5">
                          <div className="font-serif text-lg/4.5">{items.name}</div>
                          {items.note && (
                            <div className="text-inksoft text-[0.675rem]/[0.675rem] italic">*{items.note}</div>
                          )}
                        </div>
                        <div className="font-mono text-rose shrink-0 text-right">Rp {items.price / 1000}K</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Booking />
      <Footer />
    </>
  )
}