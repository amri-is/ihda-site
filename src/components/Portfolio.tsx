import { PortfolioData } from '@/data/portfolio'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const POS_X = [-25, 0, 18]
const POS_Y = [-18, 0, 20]
const ROTATE = [20, 5, -15]

gsap.registerPlugin(ScrollTrigger, SplitText)

const scrubReveal = (
  tl: gsap.core.Timeline,
  trigger: Element | string,
  opts: Partial<ScrollTrigger.Vars> = {}
) => ScrollTrigger.create({
  animation: tl,
  trigger,
  scrub: 1,
  start: 'top 75%',
  ...opts,
})

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>('.portfolio-items')

    items.forEach((item) => {
      const index = item.querySelector<HTMLElement>('.portfolio-index')
      const title = item.querySelector<HTMLElement>('.portfolio-title')
      const body = item.querySelector<HTMLElement>('.portfolio-body')
      if (!index || !title || !body) return

      // index
      gsap.set(index, { y: '-2rem', x: '-1.5rem' })
      const indexTl = gsap.timeline().from(index, {
        y: '-50%',
        opacity: 0,
        ease: 'power2.out'
      })
      scrubReveal(indexTl, index, {
        start: '+=50% 75%',
        end: () => '+=' + index.offsetHeight
      })

      // title
      const titleSplit = SplitText.create(title, {
        type: 'words',
        mask: 'words'
      })
      const titleTl = gsap.timeline().from(titleSplit.words, {
        x: '100%',
        opacity: 0,
        ease: 'power2.out',
        stagger: {
          amount: 0.25,
          from: 'start'
        },
      })
      scrubReveal(titleTl, title, {
        endTrigger: index,
        end: () => '+=' + index.offsetHeight
      })

      // body
      SplitText.create(body, {
        type: 'words, lines', 
        mask: 'lines', 
        linesClass: 'line', 
        autoSplit: true,
        onSplit: (self) => {
          const bodyTl = gsap.timeline().from(self.lines, {
            y: 20,
            autoAlpha: 0,
            ease: 'power2.out',
            stagger: {
              amount: 0.5,
              from: 'start'
            },
          })
          scrubReveal(bodyTl, body, {
            end: () => '+=' + body.offsetHeight
          })
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <>
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
    </>
  )
}