import { useRef } from "react"
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap"
import { PortfolioData } from "@/data/portfolio"

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headerWrapRef = useRef<HTMLDivElement | null>(null)
  const headerRefs = useRef<(HTMLDivElement | null)[]>([])
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // first header visible at rest
      gsap.set(headerRefs.current, { autoAlpha: 0 })
      gsap.set(headerRefs.current[0], { autoAlpha: 1 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        pin: headerWrapRef.current,
        pinSpacing: false,
        // markers: true,
        id: 'sticky'
      })

      const crossfadeTo = (i: number) => {
        gsap.to(headerRefs.current, { autoAlpha: 0, duration: 0.4, overwrite: true })
        gsap.to(headerRefs.current[i], { autoAlpha: 1, duration: 0.4, overwrite: true })
      }

      mediaRefs.current.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 25%",
          end: "bottom 25%",
          onEnter: () => crossfadeTo(i),
          onEnterBack: () => crossfadeTo(i),
          // markers: true,
          id: 'title-swap'
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="portfolio" className="flex flex-col justify-center px-8 max-w-3xl mx-auto w-full relative">
      <div
        ref={headerWrapRef}
        className="portfolio-header absolute inset-0 w-full pointer-events-none"
      >
        {PortfolioData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              headerRefs.current[idx] = el
            }}
            className="header-item absolute top-0 flex flex-col justify-end max-w-md z-4 p-8"
          >
            <div className="header-eyebrow text-sm uppercase tracking-widest text-rose">
              {`0${idx + 1}`}
            </div>
            <div className="header-title font-serif font-normal text-4xl leading-tight mt-3 text-ink">
              {item.title}
            </div>
            <div className="header-body mt-6 text-inksoft leading-relaxed">
              {item.body}
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-media">
        {PortfolioData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              mediaRefs.current[idx] = el
            }}
            className="media-stack h-screen relative flex justify-center items-center overflow-visible"
            // style={{ backgroundColor: item.bgColor }}
          >
            {item.img.map((img, imgIdx) => {
              const POS_X = [15, 5, -20]
              const POS_Y = [-15, 5, 20]
              const SPD = [1.1, 1.2, 1.3]
              const SCALE = [1, 1.2, 1.1]
              const Z = [2,5,3]

              return (
                <img
                  key={imgIdx}
                  src={img.src}
                  alt={img.alt}
                  data-speed={SPD[imgIdx % SPD.length]}
                  className="h-40 w-30 object-cover object-center absolute"
                  style={{
                    transform: `translateX(${POS_X[imgIdx % POS_X.length]}vh) translateY(${POS_Y[imgIdx % POS_Y.length]}vh)`,
                    scale: `${SCALE[imgIdx % SCALE.length]}`,
                    zIndex: `${Z[imgIdx % Z.length]}`
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}