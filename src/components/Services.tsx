import { ServiceData } from "@/data/services";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { getRange } from "@/lib/utils";
import { useRef } from "react";

function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const innerRefs = useRef<Array<HTMLElement | null>>([])
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const imgsRefs = useRef<Array<Array<HTMLImageElement | null>>>([])

  const imgTimelinesRef = useRef<Array<gsap.core.Timeline | null>>([])

  // accordion anim
  useGSAP(() => {
    const DUR = 1
    const EASE = 'power4.out'
    const section = sectionRef.current
    const content = contentRef.current
    const cards = cardRefs.current
    const inners = innerRefs.current

    if (!section || !content || !cards || !inners ) return
    
    const getCardTops = () => {
      return cards.map((el) => {
        if (!el) return 0
        return el.getBoundingClientRect().top
      })
    }
    const getContentTops = () => {
      return content.getBoundingClientRect().top ?? 0
    }
    const getContentHeight = () => {
      return content.getBoundingClientRect().height ?? 0
    }

    const tops = getCardTops()
    const contentTop = getContentTops()
    const contentHeight = getContentHeight()
    const offset = tops.map((el) => {
      if (!el) return 0
      return el - contentTop
    })

    // console.log("tops:", tops)
    // console.log("contentTop:", contentTop)
    // console.log("contentHeight:", contentHeight)
    // console.log("offset:", offset)

    if (content) {
      content.style.minHeight = `${contentHeight}px`
    }

    gsap.set(cards, { height: '2rem' })
    gsap.set(inners, { autoAlpha: 0 })
    
    const timelines = cards.map((card, index) => {
      return gsap
        .timeline({
          paused: true,
        })
        .to(card, {
          height: "auto",
          duration: DUR,
          ease: EASE,
          easeReverse: true,
        })
        .to(inners[index],{
          autoAlpha: 1,
          duration: DUR,
          ease: EASE,
          easeReverse: true,
        },0)
    })

    cards.forEach((card, idx) => {
      let GAP = null
      // GAP = 48
      const finalOffset = () => {
        if (!GAP) return offset[idx]

        return offset[idx] - GAP * idx
      }
      ScrollTrigger.create({
        // markers: true,
        id: `card-${idx}`,
        trigger: content,
        start: `+=${finalOffset()}px center`,
        onEnter: () => {
          timelines[idx].play()
          if (card) card.dataset.expanded = "true"
          // imgTimelinesRef.current[idx]?.play(idx * getRange(5,0))
          // console.log(`card ${idx} played at`, performance.now())
        },
        onLeaveBack: () => {
          timelines[idx].reverse()
          if (card) card.dataset.expanded = "false"
          // imgTimelinesRef.current[idx]?.pause()
          // console.log(`card ${idx} paused at`, performance.now())
        },
      })
    })

  })

  // imgs anim
  useGSAP(() => {
    const stacks = imgsRefs.current
    const cards = cardRefs.current

    imgTimelinesRef.current = stacks.map((imgs) => {
      if (!imgs || imgs.length < 2) return null

      gsap.set(imgs, { autoAlpha: 0 })
      // reveal the first img
      gsap.set(imgs[0], { autoAlpha: 1 })

      // hold anim
      const tl = gsap.timeline({ repeat: -1, paused: true })
      imgs.forEach((img, i) => {
        // wrap back to img 0 after the last one
        const next = imgs[(i + 1) % imgs.length]
        tl.to(img, { autoAlpha: 0, duration: 1, ease: 'linear' }, `+=4`)
          .to(next, { autoAlpha: 1, duration: 1, ease: 'linear' }, '<')
      })
      return tl
    })

    // play/pause anim based on data-expanded attr on each card
    const observers = cards.map((card, idx) => {
      if (!card) return null
      const tl = imgTimelinesRef.current[idx]
      if (!tl) return null

      let started = false
      const apply = () => {
        if (card.dataset.expanded === "true") {

          if (!started) {
            // add delay/stagger on random time
            const range = idx * getRange(5)
            tl.play(range)
            started = true
          } else {
            tl.play()
          }

        } else {
          tl.pause() 
        }
      }
      apply() // run anim if card already expanded

      // watch attr changes, call apply() when they happen
      const obs = new MutationObserver(apply)
      obs.observe(card, { attributes: true, attributeFilter: ['data-expanded'] })
      return obs
    })

    // cleanup
    return () => observers.forEach((o) => o?.disconnect())
  }, { scope: sectionRef })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="flex flex-col justify-center px-4 max-w-3xl mx-auto w-full relative gap-8"
    >

      <header ref={headerRef} className="header flex flex-col ">

        <div className="text-xs uppercase tracking-[.25em] text-rose">
          What we do
        </div>

        <h1 className="font-serif text-5xl/12 max-w-3xl">
          Four ways to be&nbsp;
          <span className="font-curvy text-[3.5rem] text-rose font-black ">
            stylized
          </span>
        </h1>

        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Every service is built around the occasion, not a fixed formula — the same trained hand,
          <span className="text-ink">&nbsp;your call.</span>
        </p>

      </header>

      <div ref={contentRef} className="flex flex-col gap-4">
        {ServiceData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { cardRefs.current[idx] = el }}
            data-expanded={false}
            className="bg-rose/15 min-h-0 rounded overflow-hidden"
          >
            <div
              ref={(el) => { innerRefs.current[idx] = el }}
              className="flex flex-col gap-4 p-4"
            >
              <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-serif">
                  {item.title}
                </h1>
                <p className="text-sm text-inksoft">
                  {item.body}
                </p>
              </header>
              <div className="relative">
                <div className="img-stack aspect-square overflow-hidden relative rounded-sm flex items-center justify-center pointer-events-none ">
                  {item.imgs.map((img, imgIdx) => (
                    <img
                      key={`${img}-${imgIdx}`}
                      ref={(el) => {
                        if (!imgsRefs.current[idx]) imgsRefs.current[idx] = []
                        imgsRefs.current[idx][imgIdx] = el
                      }}
                      className="absolute object-cover object-center"
                      src={img}
                    />
                  ))}
                </div>
                <div className="tags absolute bottom-0 right-0 flex flex-wrap-reverse flex-row-reverse w-full p-2 gap-1">
                  {item.tags.map((tag, tagIdx) => (
                    <div
                      key={`${tag}-${tagIdx}`}
                      className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}

        <div className="border border-dashed p-3 rounded pointer-events-none">
          <a href="#price-list" className="bg-rose/15 h-8 flex gap-4 rounded-sm text-xs items-center justify-center uppercase pointer-events-auto">
            Full Service List
          </a>
        </div>
      </div>

    </section>
  )
}

export default Services