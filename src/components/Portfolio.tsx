import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { getRange } from "@/lib/utils"
import { PortfolioData } from "@/data/portfolio"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger



export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  return (
    <section ref={sectionRef} id="portfolio" className="relative">
      <div className="portfolio-header absolute z-20 p-8 gap-8 ">
        {PortfolioData.map((item, idx) => (
          <div key={idx} className="header-item">
            <div className="header-eyebrow text-sm uppercase tracking-widest text-rose">
              {`0${idx+1}`}
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
            className="media-stack h-screen relative flex justify-center items-center overflow-visible "
            style={{ backgroundColor: item.bgColor}}
          >
            {item.img.map((img, imgIdx) => {
              const POS_X = [15, 5, -20]
              const POS_Y = [0, 15, 25]
              const SPD = [1.1,1.2,1.3]
              const SCALE = [1,1.2,1.1]
              
              return (
                <img
                  key={imgIdx}
                  src={img.src}
                  alt={img.alt}
                  data-speed={SPD[imgIdx % SPD.length]}
                  className="h-50 w-80 object-cover object-center absolute"
                  style={{
                    transform: `translateX(${POS_X[imgIdx % POS_X.length]}vh) translateY(${POS_Y[imgIdx % POS_Y.length]}vh)`,
                    scale: `${SCALE[imgIdx % SCALE.length]}`
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