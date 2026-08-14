import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const AboutPhoto = 'https://media.discordapp.net/attachments/895697574231674921/1537849484841586718/IMG-20260813-WA0002.jpg?ex=6a808971&is=6a7f37f1&hm=e1c4b9e7e27beb6286e93c917d9459124ef643dba7827607bdbb591dfe0079b2&=&format=webp&width=767&height=1024'

const AboutData = {
  first: [
    "https://assets.codepen.io/7558/flame-glow-blur-001.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-002.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-003.jpg",
  ],
  second: [
    "https://assets.codepen.io/7558/flame-glow-blur-004.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-005.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-006.jpg",
  ],
  third: [
    "https://assets.codepen.io/7558/flame-glow-blur-007.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-008.jpg",
    "https://assets.codepen.io/7558/flame-glow-blur-009.jpg",
  ],
}

const TitleData = [
  { 
    text: "Our Philosophy", 
    className: "text-sm uppercase tracking-widest text-rose" 
  },
  { 
    text: "Craft unique", 
    className: "font-serif font-normal text-4xl" 
  },
  { 
    text: "Signature", 
    className: "text-rosedeep text-5xl italic font-curvy font-black" 
  },
]

function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRefs = useRef<HTMLDivElement[]>([])
  const fillerRefs = useRef<HTMLImageElement[]>([])
  const footerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    const section = sectionRef.current
    const titles = gsap.utils.toArray<HTMLElement>(titleRefs.current)

    const getSectionTop = () => {
      return section?.getBoundingClientRect().top ?? 0
    }

    const getTitlesHeights = () => {
      return titles.map((el) => {
        if (!el) return 0
        return el.getBoundingClientRect().height
      })
    }

    const getTitlesTops = () => {
      return titles.map((el) => {
        if (!el) return 0
        return el.getBoundingClientRect().top
      })
    }

    const getTitlesBottoms = () => {
      return titles.map((el) => {
        if (!el) return 0
        return el.getBoundingClientRect().bottom
      })
    }

    const getTitleCenter = () => {
      const tops = getTitlesTops()
      const bottoms = getTitlesBottoms()
      const first = tops[0] ?? 0
      const last = bottoms[bottoms.length - 1] ?? 0
      return (first + last) / 2
    }

    const getTitleCenterTC = () => {
      const titleEls = titleRefs.current
      const first = titleEls[0]
      const last = titleEls[titleEls.length - 1]
      if (!first || !last) return 0
      const firstTop = first.offsetTop
      const lastBottom = last.offsetTop + last.offsetHeight
      return (firstTop + lastBottom) / 2
    }

    // console.log('section top:', getSectionTop())
    // console.log('section top:', getSectionTop())
    // console.log('titles height:', getTitlesHeights())
    // console.log('titles top:', getTitlesTops())
    // console.log('titles bottom:', getTitlesBottoms())
    // console.log('titles center:', getTitleCenter())
    // console.log('titles center TC:', getTitleCenterTC())

    const heights = getTitlesHeights()
    const last = titles.length - 1
    
    titles.forEach((el, i) => {  
      const h = heights[i]
      const offset = i === 0 ? -h : i === last ? h : 0

      ScrollTrigger.create({
        // markers: true,
        id: `title-${i+1}`,
        trigger: el,
        pin: true,
        start: `center center+=${offset}`,
        endTrigger: section,
        end: `bottom-=10% center`,
      })
    })


  })

  return (
    <section ref={sectionRef} id="about" className="flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto w-full relative">

      {TitleData.map((t, idx) => (
        <div
          key={idx}
          ref={(el) => { if (el) titleRefs.current[idx] = el }}
          className={`title ${t.className}`}
        >
          {t.text}
        </div>
      ))}

      <div className="filler flex flex-col gap-30 items-center my-[80svh]">
        <div className="img-stack z-10 aspect-3/4 overflow-hidden relative rounded-sm flex items-center justify-center h-50">
          {AboutData.first.map((item, idx) => (
            <img key={idx} src={item} className="absolute pointer-events-none object-cover object-center" />
          ))}
        </div>
        <div className="img-stack z-10 aspect-4/3 overflow-hidden relative rounded-sm flex items-center justify-center w-50">
          {AboutData.second.map((item, idx) => (
            <img key={idx} src={item} className="absolute pointer-events-none object-cover object-center" />
          ))}
        </div>
        <div className="img-stack z-10 aspect-square overflow-hidden relative rounded-sm flex items-center justify-center h-35">
          {AboutData.third.map((item, idx) => (
            <img key={idx} src={item} className="absolute pointer-events-none object-cover object-center" />
          ))}
        </div>
      </div>

      <div ref={footerRef} className="footer relative bg-blue-200 z-50 overflow-hidden rounded">
        <div className="absolute inset-0 z-100 bg-rose/20 w-full h-full"></div>
        <div className="absolute inset-0 z-100 bg-rose w-full h-full mix-blend-hue"></div>
        <img src={AboutPhoto} className="h-[80svh] object-cover " />
      </div>

    </section>
  )
}

export default About