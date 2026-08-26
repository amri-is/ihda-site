import { ScrollTrigger, SplitText, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { FillerData } from "@/data/about"
import { BRAND_ITEM } from "@/constants/brand";

function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLHeadingElement|null>(null)
  const titleRef = useRef<HTMLHeadingElement|null>(null)
  const fillerRefs = useRef<Array<HTMLDivElement|null>>([])
  const fillerImgRefs = useRef<Array<Array<HTMLImageElement|null>>>([])
  const footerRef = useRef<HTMLDivElement>(null)
  const gmapRef = useRef<HTMLAnchorElement>(null)

  // pin title and eyebrow
  useGSAP(() => {
    const eyebrow = eyebrowRef.current
    const title = titleRef.current
    const footer = footerRef.current
    if (!eyebrow || !title || !footer) return

    const eyebrowSplit = SplitText.create(eyebrow, { type: 'words chars', })
    const titleSplit = SplitText.create(title, { type: 'words chars', })

    // find center position offset
    const center = (eyebrow.getBoundingClientRect().height + title.getBoundingClientRect().height) / 2

    // console.log('center: ', center);
    gsap.defaults({ ease: 'power4.out', easeReverse: true, })
    const tl = gsap.timeline({ paused: true })

    const eyebrowLength = eyebrow.innerText.length
    const charReveal = 0.015
    const titleDelay = eyebrowLength * charReveal

    // console.log(eyebrowLength);
    // console.log(titleDelay);

    // eyebrow reveal
    tl.from(eyebrowSplit.chars, {
      autoAlpha: 0,
      
      stagger: {
        from: 'start',
        each: charReveal
      },
    })

    ScrollTrigger.create({
      // markers: true,
      id: 'eyebrow',
      trigger: eyebrow,
      animation: tl,
      start: `top+=${center} center`,
      endTrigger: footer,
      end: `center center`,
      toggleActions: 'play none none reverse',
      pin: true,
      pinType: 'fixed',
    })

    // title reveal
    tl.from(titleSplit.chars, {
      autoAlpha: 0,
      stagger: {
        from: 'start',
        each: charReveal
      },
    }, titleDelay)
    
    ScrollTrigger.create({
      // markers: true,
      id: 'title',
      trigger: title,
      animation: tl,
      start: `bottom-=${center} center`,
      endTrigger: footer,
      end: `center center`,
      toggleActions: 'play none none reverse',
      pin: true,
      pinType: 'fixed',
    })

  }, { scope : sectionRef })

  // img filler cycle as the page scrolls
  useGSAP(() => {
    const fillers = fillerRefs.current
    // console.log(fillers);
    
    fillers.forEach((filler, idx) => {
      const imgs = (fillerImgRefs.current[idx] ?? []).filter(
        (img): img is HTMLImageElement => img !== null
      )
      if (!imgs.length) return
      
      // set all img hidden
      gsap.set(imgs, { autoAlpha: 0 })
      // set first img visible
      gsap.set(imgs[0], { autoAlpha: 1 })

      ScrollTrigger.create({
        // markers: true,
        id: `filler-${idx + 1}`,
        trigger: filler,
        start: 'center bottom',
        end: 'center top',
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

  // gmap link btn anim
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

      <h2 ref={eyebrowRef} className="text-xs uppercase tracking-[.25em] text-rose z-13">
        Our Philosophy
      </h2>

      <h1 ref={titleRef} className="font-serif text-5xl/12 max-w-3xl z-15">
        Craft unique{' '}
        <span className="font-curvy text-[3.5rem] text-rose font-black">
          signature
        </span>
      </h1>

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
        <div className="absolute z-110 top-0 w-full p-4 flex flex-col gap-4 text-white">
          <h1 className="font-serif text-5xl/12 max-w-3xl text-left">
            Meet the{' '}
            <span className="font-curvy text-[3.5rem] font-black ">
              artist
            </span>
          </h1>
          <p className="location text-left not-italic text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores earum molestiae quisquam. Alias temporibus aut sit a eum veniam.
          </p>
        </div>

        <div className="absolute z-110 bottom-0 w-full p-4 flex items-center justify-center">
          <a
            ref={gmapRef}
            href={BRAND_ITEM.map}
            rel="noopener noreferrer"
            className="visit-us bg-bg p-1 w-full font-serif text-rose rounded-xs flex gap-1 items-center justify-center overflow-hidden"
          >
            <span>visit</span>
            <span>my</span>
            <span className="font-curvy font-black text-[1.25rem]">studio</span>
          </a>
        </div>

        <div className="about-photo h-[80svh]">
          <div className="absolute inset-0 z-100 bg-linear-to-t from-rose/90 to-rose/50 w-full h-full opacity-50"></div>
          <div className="absolute inset-0 z-50 bg-rosedeep w-full h-full mix-blend-hue "></div>
          <img src={BRAND_ITEM.photo} alt="Meet the artist" className="h-full w-full object-cover object-top  " />
        </div>
        
      </footer>

    </section>
  )
}

export default About