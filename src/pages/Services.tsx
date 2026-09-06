import Footer from "@/components/Footer";
import { ServiceData } from "@/data/services";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import Booking from "@/components/Booking";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const innerCardRefs = useRef<Array<HTMLDivElement | null>>([])

  const timelinesRef = useRef<Array<gsap.core.Timeline | null>>([])

  useGSAP(() => {
    gsap.defaults({ease: 'power2.inOut', duration: 0.5 })
    cardRefs.current.forEach((el, i) => {
      if (!el) return

      timelinesRef.current[i] = gsap.timeline({ paused: true })
        .fromTo(
          el,
          { height: '3.5rem', autoAlpha: 0.75 },
          { height: 'auto', autoAlpha: 1 },
        )

      // set initial timeline position to match initial attr, no animation on load
      if (el.dataset.expanded === 'true') {
        timelinesRef.current[i]?.progress(1)
      }

      const observer = new MutationObserver(() => {
        const expanded = el.dataset.expanded === 'true'
        expanded ? timelinesRef.current[i]?.play() : timelinesRef.current[i]?.reverse()
      })
      observer.observe(el, { attributes: true, attributeFilter: ['data-expanded'] })
    })
  }, { scope: sectionRef })

  function toggleCard(idx: number) {
    const cards = cardRefs.current
    cards.forEach((el, i) => {
      if (!el) return
      el.dataset.expanded = i === idx ? 'true' : 'false'
      // el.classList = 'text-ink'
    })
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

        <div className="spacer h-4"></div>

        <div className="flex flex-col gap-4">
        {ServiceData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { cardRefs.current[idx] = el }}
            onClick={() => toggleCard(idx)}
            data-expanded={idx === 0}
            className="bg-rose/75 min-h-0 rounded overflow-hidden"
          >
            <div
              ref={(el) => { innerCardRefs.current[idx] = el }}
              className="flex flex-col p-4"
            >
              <header className="flex items-center justify-between">
                <h1 className="text-2xl/6 font-serif text-white">
                  {item.title}
                </h1>
                <span className="text-5xl/0 text-white/50 font-curvy translate-x-2">
                  0{idx + 1}
                </span>
              </header>
              <div className="spacer h-4"></div>
              <p className="text-sm/3.5 text-white">
                {item.body}
              </p>
              {item.note && (
                <>
                  <div className="spacer h-2"></div>
                  <div className="text-white/50 text-[0.675rem]/[0.675rem] self-end italic">
                    *{item.note}
                  </div>
                </>
              )}
              <div className="spacer h-4"></div>
              <div className="relative grid cols-2 rows-1">
                <div className="flex flex-col gap-2">
                  {item.items.map((items, itemsIdx) => (
                    <div
                      key={`${items}-${itemsIdx}`}
                      className="items w-full flex items-center justify-between p-3 gap-4 bg-bg rounded "
                    >
                      <div className="flex flex-col gap-0.5">
                        <div className="font-serif text-lg/4.5">
                          {items.name}
                        </div>
                        {items.note && (
                          <div className="text-inksoft text-[0.675rem]/[0.675rem] italic">
                            *{items.note}
                          </div>
                        )}
                      </div>
                      
                      <div className="font-mono text-rose shrink-0 text-right">
                        Rp {items.price / 1000}K
                      </div>
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