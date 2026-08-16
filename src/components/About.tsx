import { ScrollTrigger, SplitText, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { FillerData, AboutItems, TitleData } from "@/data/about"

function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRefs = useRef<Array<HTMLDivElement|null>>([])
  const fillerRefs = useRef<Array<HTMLDivElement|null>>([])
  const fillerImgRefs = useRef<Array<Array<HTMLImageElement|null>>>([])
  const footerRef = useRef<HTMLDivElement>(null)
  const gmapRef = useRef<HTMLAnchorElement>(null)
  
  // pin title
  useGSAP(() => {
    const section = sectionRef.current
    const titles = gsap.utils.toArray<HTMLElement>(titleRefs.current)
    const footer = footerRef.current

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
    // console.log('titles height:', getTitlesHeights())
    // console.log('titles top:', getTitlesTops())
    // console.log('titles bottom:', getTitlesBottoms())
    // console.log('titles center:', getTitleCenter())
    // console.log('titles center TC:', getTitleCenterTC())

    const heights = getTitlesHeights()
    // console.log(heights);
    const last = titles.length - 1
    // console.log(last);
    const midH = heights[Math.round(last / 2)] ?? 0
    // console.log(midH);

    titles.forEach((el, i) => {
      // offset for each el to make it look pinned at the same time
      const h = heights[i]
      let offset = 0

      if (i === 0) offset = -((midH + h) / 2)
      if (i === last) offset = (midH + h) / 2
      
      // console.log(`offset-${i}`, offset);

      ScrollTrigger.create({
        // markers: true,
        id: `title-${i+1}`,
        trigger: el,
        pin: true,
        start: `center-=${offset} center`,
        endTrigger: footer,
        end: `center center`,
      })
    })


  }, { scope: sectionRef })

  // img filler cycle as the page scrolls
  useGSAP(() => {
    const fillers = fillerRefs.current
    // console.log(fillers);
    
    fillers.forEach((filler, idx) => {
    const imgs = (fillerImgRefs.current[idx] ?? []).filter(
      (img): img is HTMLImageElement => img !== null
    )
    if (!imgs.length) return

    gsap.set(imgs, { autoAlpha: 0 })
    gsap.set(imgs[0], { autoAlpha: 1 })

      ScrollTrigger.create({
        // markers: true,
        id: `filler-${idx + 1}`,
        trigger: filler,
        start: '+=50 bottom',
        end: 'top top',
        onUpdate: (self) => {
          const idx = Math.floor(self.progress * imgs.length) % imgs.length
          // console.log(idx);
          
          imgs.forEach((img, imgIdx) => {
            gsap.set(img, { autoAlpha: imgIdx === idx ? 1 : 0 })
          })
        }
      })
    })

  }, { scope: sectionRef })

  // gmap link anim
  useGSAP(() => {
    const link = gmapRef.current
    const splitText = SplitText.create(link, { type: 'words' })
    
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: link,
        start: 'top 90%',
        // toggleActions: 'play none none reverse',
      }
    })

    tl.from(link, {
        autoAlpha: 0,
        width: 0,
        duration: 2,
        ease: 'power4.out',
        easeReverse: true,
      })
      tl.add(gsap.from(splitText.words, {
        yPercent: -300,
        autoAlpha: 0,
        ease: 'back.out',
        easeReverse: true,
        stagger: { from: 'start', amount: 1 / 5 },
        duration: 1,
      }), 0)
    
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto w-full relative">

      {TitleData.map((t, idx) => (
        <div
          key={idx}
          ref={(el) => { titleRefs.current[idx] = el }}
          className={`title ${t.className}`}
        >
          {t.text}
        </div>
      ))}

      <div className="grid grid-cols-21 gap-y-40 my-[80svh] w-full">
        {FillerData.map((item, idx) => (
          <div
            ref={(el) => { fillerRefs.current[idx] = el }}
            key={idx}
            className={item.class + ' a'}
          >
            {item.imgs.map((img, imgIdx) => (
              <img
                ref={(el) => {
                  if (!fillerImgRefs.current[idx]) fillerImgRefs.current[idx] = []
                  fillerImgRefs.current[idx][imgIdx] = el
                }}
                key={imgIdx}
                src={img} alt=""
                className="absolute w-full h-full pointer-events-none object-cover object-center" />
            ))}

          </div>
        ))}
      </div>

      <footer ref={footerRef} className="footer relative bg-blue-200 z-50 overflow-hidden rounded">
        <div className="absolute z-110 top-0 w-full p-4 flex flex-col gap-4 items-center text-white">
          <p className="location text-left not-italic text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores earum molestiae quisquam. Alias temporibus aut sit a eum veniam.
          </p>
        </div>

        <div className="absolute z-110 bottom-0 w-full p-4 flex items-center justify-center">
          <a
            ref={gmapRef}
            href={AboutItems.gmap}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-us bg-bg p-1 w-full font-serif text-rose rounded-xs flex gap-1 items-center justify-center overflow-hidden"
          >
            <span>visit</span>
            <span>my</span>
            <span className="font-curvy font-black text-[1.25rem]">studio</span>
          </a>
        </div>

        <div className="about-photo h-[80svh]">
          <div className="absolute inset-0 z-100 bg-linear-to-b from-rose/90 to-rose/50 w-full h-full opacity-75"></div>
          <div className="absolute inset-0 z-50 bg-rosedeep w-full h-full mix-blend-screen opacity-50"></div>
          <img src={AboutItems.photo} alt="Meet the artist" className="h-full w-full object-cover object-top grayscale " />
        </div>
        
      </footer>

    </section>
  )
}

export default About