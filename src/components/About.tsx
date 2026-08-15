import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { FillerData, AboutPhoto, TitleData } from "@/data/about"
import { BRAND_ITEM } from "@/constants/brand"

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

    console.log('section top:', getSectionTop())
    console.log('titles height:', getTitlesHeights())
    console.log('titles top:', getTitlesTops())
    console.log('titles bottom:', getTitlesBottoms())
    console.log('titles center:', getTitleCenter())
    console.log('titles center TC:', getTitleCenterTC())

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
        <h2
          key={idx}
          ref={(el) => { if (el) titleRefs.current[idx] = el }}
          className={`title ${t.className}`}
        >
          {t.text}
        </h2>
      ))}

      <div className="grid grid-cols-21 gap-y-40 my-[80svh] w-full">
        <div className="img-stack z-10 col-start-3 col-span-8 row-start-1 h-[45svw] overflow-hidden relative rounded">
          {FillerData.first.map((item, idx) => (
            <img key={idx} src={item} alt="" className="absolute w-full h-full pointer-events-none object-cover object-center" />
          ))}
        </div>

        <div className="img-stack z-10 col-start-12 col-span-10 row-start-2 h-[35svw] overflow-hidden relative rounded">
          {FillerData.second.map((item, idx) => (
            <img key={idx} src={item} alt="" className="absolute w-full h-full pointer-events-none object-cover object-center" />
          ))}
        </div>

        <div className="img-stack z-10 col-start-4 col-span-7 row-start-3 h-[30.75svw] overflow-hidden relative rounded">
          {FillerData.third.map((item, idx) => (
            <img key={idx} src={item} alt="" className="absolute w-full h-full pointer-events-none object-cover object-center" />
          ))}
        </div>
      </div>

      <footer ref={footerRef} className="footer relative bg-blue-200 z-50 overflow-hidden rounded">
        <div className="absolute z-110 top-0 w-full p-4 flex flex-col gap-4 items-center text-white">
          <p className="location text-left not-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores earum molestiae quisquam. Alias temporibus aut sit a eum veniam.
          </p>
        </div>

        <div className="absolute z-110 bottom-0 w-full p-4 flex flex-col gap-4 items-center text-white">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-us bg-bg p-2 w-full text-rose text-xl font-serif rounded-xs"
          >
            Visit My
            <span className="font-curvy font-black text-[1.3rem]"> Studio</span>
          </a>
        </div>

        <div className="about-photo h-[80svh]">
          <div className="absolute inset-0 z-100 bg-linear-to-b from-rose/90 to-rose/50 w-full h-full opacity-75"></div>
          <div className="absolute inset-0 z-50 bg-rosedeep w-full h-full mix-blend-screen opacity-50"></div>
          <img src={AboutPhoto} alt="Meet the artist" className="h-full w-full object-cover object-top grayscale " />
        </div>
        
      </footer>

    </section>
  )
}

export default About