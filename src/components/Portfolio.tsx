import { PortfolioData } from '@/data/portfolio'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const POS_X = [-25, 0, 18]
const POS_Y = [-18, 0, 20]
const ROTATE = [20, 5, -15]

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)
  
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>('.portfolio-items')

    items.forEach((item) => {
      // index anim logic
      const index = item.querySelector<HTMLElement>('.portfolio-index')
      if (!index) return

      const indexHeight = index.offsetHeight
      const indexTl = gsap.timeline()

      // set index style
      gsap.set(index, {
        y: '-2rem',
        x: '-1.5rem',
      })
      // set index anim
      indexTl.from(index, {
        y: '-50%',
        opacity: 0,
        ease: 'power2.out',
        duration: 5
      })

      ScrollTrigger.create({
        // markers: true,  
        id: 'index',
        scrub: 1,
        animation: indexTl,
        trigger: index,
        start: '+=50% 75%',
        end: () => "+=" + indexHeight,
        toggleActions: 'play none none reverse'
      })


      // title anim logic
      const title = item.querySelector<HTMLElement>('.portfolio-title')
      if (!title) return

      const titleTl = gsap.timeline()

      // set title anim
      titleTl.from(title, {
        x: '5rem',
        // skewX: '-10',
        opacity: 0,
        ease: 'power2.out',
        duration: 5
      })

      ScrollTrigger.create({
        // markers: true,
        id: 'title',
        scrub: 1,
        animation: titleTl,
        trigger: title,
        start: 'top 75%',
        endTrigger: index,
        end: () => "+=" + indexHeight,
        toggleActions: 'play none none reverse'
      })

      // body anim logic
      const body = item.querySelector<HTMLElement>('.portfolio-body')
      if (!body) return

      const bodyHeight = body.offsetHeight
      const bodyTl = gsap.timeline()
      const bodySplit = SplitText.create(body, {type: 'lines', mask: 'lines'})

      // set body anim
      bodyTl.from(bodySplit.lines, {
        y: '20',
        autoAlpha: 0,
        // ease: 'power2.out',
        // duration: 5,
        stagger: {
          amount: 0.5,
          from: 'start',
          // repeat: -1,
          // yoyo: true,
        },
      })

      ScrollTrigger.create({
        markers: true,
        id: 'body',
        scrub: 1,
        animation: bodyTl,
        trigger: body,
        start: 'top 75%',
        end: () => "+=" + bodyHeight,
        // toggleActions: 'play none none reverse'
      })

    });
  })

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section py-24 px-8 max-w-6xl mx-auto w-full relative overflow-hidden flex flex-col gap-[10vh]"
    >
      <div className="hidden max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs uppercase tracking-[.25em] text-rose">Portfolio</div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Signature looks for every chapter.
        </h2>
      </div>

      {PortfolioData.map((item, index) => (
        <article
          key={item.title}
          className="portfolio-items relative h-[80vh] flex flex-col justify-between"
          style={{ backgroundColor: item.bgColor ?? '#F3E7E0' }}
        >
          <div className=" absolute inset-0 overflow-hidden mix-blend-darken">
            <div className="portfolio-index text-[10rem]/[10rem] uppercase text-inksoft/5 font-mono font-black left-0 -tracking-widest ">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
          <div className="portfolio-title relative z-20 text-center flex justify-center w-full overflow-hidden">
            <h3 className="font-serif text-3xl text-ink p-4">{item.title}</h3>
          </div>

          <div className="relative z-20 text-center overflow-hidden">
            <p className="portfolio-body text-base leading-relaxed text-inksoft">{item.body}</p>
          </div>

          <div className="portfolio-media absolute z-0 h-full w-full flex justify-center items-center" aria-label={item.title}>
            {item.img.map((image, imageIndex) => (
              <div
                key={`${item.title}-${image.alt}`}
                className="portfolio-card absolute overflow-hidden p-4 pb-12 bg-white shadow rounded"
                style={{ zIndex: 3 - imageIndex }}
              >
                <img src={image.src} alt={image.alt} className="aspect-ratio-4/5 w-70 object-cover" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}