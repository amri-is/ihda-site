import { PortfolioData } from '@/data/portfolio'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const POS_X = [-25, 0, 18]
const POS_Y = [-16, 0, 20]
const ROTATE = [20, 5, -15]

gsap.registerPlugin(ScrollTrigger, SplitText)

/**
 * Create a scrubbed ScrollTrigger for a timeline reveal.
 * @param tl GSAP timeline to animate
 * @param trigger element or selector used as trigger
 * @param opts optional ScrollTrigger settings
 * @returns created ScrollTrigger instance
 */
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

type ItemEls = {
  root: HTMLElement;
  index: HTMLElement;
  title: HTMLElement;
  body: HTMLElement;
  cards: HTMLElement[];
}

function animateIndex(index: HTMLElement) {
  gsap.set(index, {
    y: '-2rem',
    x: '-1.5rem'
  })
  const tl = gsap.timeline().from(index, {
    y: '-50%',
    opacity: 0,
    ease: 'power2.out'
  })
  scrubReveal(tl, index, {
    start: '+=50% 75%',
    end: () => '+=' + index.offsetHeight
  })
}

function animateTitle(title: HTMLElement, trigger: HTMLElement) {
  const split = SplitText.create(title, {
    type: 'words',
    mask: 'words'
  })
  const tl = gsap.timeline().from(split.words, {
    x: '100%',
    opacity: 0,
    ease: 'power2.out',
    stagger: {
      amount: 0.25,
      from: 'start'
    },
  })
  scrubReveal(tl, title, {
    endTrigger: trigger,
    end: () => '+=' + trigger.offsetHeight
  })
}

function animateBody(body: HTMLElement) {
  SplitText.create(body, {
    type: 'words, lines',
    mask: 'lines',
    linesClass: 'line',
    autoSplit: true,
    onSplit: (self) => {
      const tl = gsap.timeline().from(self.lines, {
        y: 20,
        autoAlpha: 0,
        stagger: {
          amount: 0.5,
          from: 'start'
        },
      })
      scrubReveal(tl, body, {
        end: () => '+=' + body.offsetHeight
      })
    },
  })
}

function animateCards(cards: HTMLElement[], trigger: HTMLElement) {
  gsap.set(cards, {
    // autoAlpha: 0,
    x: (i) => `${POS_X[i] ?? 0}vw`,
    y: (i) => `${POS_Y[i] ?? 0}vh`,
    rotation: (i) => ROTATE[i] ?? 0,
  })

  const tl = gsap.timeline().from(cards, {
    // autoAlpha: 1,
    // y: '-100vw',
    // rotation: 0,
    x: '-100vw',
    ease: 'power2.out',
    duration: 0.8,
    stagger: {
      each: 0.2,
      from: 'random'
    },
  })

  scrubReveal(tl, trigger, {
    start: 'top 80%',
    end: () => '+=' + trigger.offsetHeight,
  })
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const itemRefs = useRef<HTMLElement[]>([])

  useGSAP(() => {
    const elements: ItemEls[] = itemRefs.current.map((root) => {
      const index = root.querySelector<HTMLElement>('.portfolio-index')
      const title = root.querySelector<HTMLElement>('.portfolio-title')
      const body = root.querySelector<HTMLElement>('.portfolio-body')
      const cards = Array.from(root.querySelectorAll<HTMLElement>('.portfolio-card'))
      if (!index || !title || !body || cards.length === 0) return null
      return { root, index, title, body, cards }
    }).filter((el): el is ItemEls => el !== null)

    elements.forEach(({ root, index, title, body, cards }) => {
      animateIndex(index)
      animateTitle(title, index)
      animateBody(body)
      animateCards(cards, root)
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section py-16 px-8 max-w-6xl mx-auto w-full relative overflow-hidden flex flex-col gap-[10vh]"
    >
      {PortfolioData.map((item, index) => (
        <article
          key={item.title}
          ref={(el) => { if (el) itemRefs.current[index] = el }}
          className="relative h-[80vh] flex flex-col justify-between"
          style={{ backgroundColor: item.bgColor ?? '#F3E7E0' }}
        >
          <div className="absolute inset-0 overflow-hidden mix-blend-darken">
            <div className="portfolio-index text-[10rem]/[10rem] uppercase text-inksoft/5 font-mono font-black left-0 -tracking-widest">
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
                style={{ zIndex: imageIndex + 1 }}
              >
                <img src={image.src} alt={image.alt} className="aspect-ratio-4/5 w-50 object-cover" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}