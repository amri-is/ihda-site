import { PortfolioData } from '@/data/portfolio'
import { useRef } from 'react'
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap'
import { revealOnScroll, enterReveal, EASE_SOFT } from '@/lib/animation'

const POS_X = [-20, 0, 20]
const POS_Y = [0, -5, 0]
const ROTATE = [-18, 0, 18]

ScrollTrigger.defaults({ start: 'top 75%' })

const EXPANDED_SCALE = 1.05
const EXPANDED_Z = 50
const TOGGLE_DURATION = 0.5
const IDLE_COLLAPSE_MS = 2000

type ItemEls = {
  root: HTMLElement
  index: HTMLElement
  title: HTMLElement
  body: HTMLElement
  cards: HTMLElement[]
}

// ---- Per-item reveals ----------------------------------------------------

function animateIndex(index: HTMLElement, root: HTMLElement) {
  revealOnScroll(index, root,
    { y: '-50%', opacity: 0, ease: EASE_SOFT },
    { setVars: { y: '-2rem', x: '-1.5rem' }, scrollOpts: { end: '+=100' } }
  )
}

function animateTitle(title: HTMLElement, root: HTMLElement) {
  const split = SplitText.create(title, { type: 'words', mask: 'words' })
  revealOnScroll(split.words, root,
    { x: '100%', opacity: 0, ease: EASE_SOFT, stagger: 0.05 },
    { scrollOpts: { end: '+=100' } }
  )
}

function animateBody(body: HTMLElement, root: HTMLElement) {
  // autoSplit resplits on resize/font-load, so the reveal has to be built
  // inside onSplit rather than up front like the other reveals.
  SplitText.create(body, {
    type: 'words, lines',
    mask: 'lines',
    linesClass: 'line',
    autoSplit: true,
    onSplit: (self) => {
      const tl = gsap.timeline().from(self.lines, {
        y: 20,
        autoAlpha: 0,
        ease: EASE_SOFT,
        stagger: { amount: 0.2, from: 'start' },
      })
      enterReveal(tl, root, { start: '+=80% 80%', end: 'bottom 80%' })
    },
  })
}

function animateCards(cards: HTMLElement[], root: HTMLElement) {
  revealOnScroll(cards, root,
    { x: 0, y: '50vh', rotation: 0, ease: EASE_SOFT },
    {
      setVars: {
        x: (i: number) => `${POS_X[i] ?? 0}vw`,
        y: (i: number) => `${POS_Y[i] ?? 0}vh`,
        rotation: (i: number) => ROTATE[i] ?? 0,
      },
      scrollOpts: { start: '+=20% 80%', end: '+=48%' },
    }
  )
}

// ---- Click-to-expand cards ------------------------------------------------

/**
 * Sets up expand/collapse-on-click for a set of cards, with idle
 * auto-collapse and scroll-to-collapse. All state (idle timer, which
 * card is expanded) lives in this closure, scoped to one call — so
 * multiple Portfolio instances on a page never share a timer.
 */
function setupCardExpansion(
  allCards: HTMLElement[],
  contextSafe: (fn: (e: Event) => void) => (e: Event) => void
) {
  let idleTimer: ReturnType<typeof setTimeout> | null = null

  const clearIdleTimer = () => {
    if (!idleTimer) return
    clearTimeout(idleTimer)
    idleTimer = null
  }

  const collapseCard = (card: HTMLElement) => {
    clearIdleTimer()
    card.dataset.expanded = 'false'
    gsap.to(card, {
      scale: 1,
      zIndex: card.dataset.baseZ,
      duration: TOGGLE_DURATION,
      ease: EASE_SOFT,
      overwrite: 'auto',
    })
  }

  const scheduleIdleCollapse = (card: HTMLElement) => {
    clearIdleTimer()
    idleTimer = setTimeout(() => collapseCard(card), IDLE_COLLAPSE_MS)
  }

  const expandCard = (card: HTMLElement) => {
    const currentlyExpanded = allCards.find((c) => c !== card && c.dataset.expanded === 'true')
    if (currentlyExpanded) collapseCard(currentlyExpanded)

    card.dataset.expanded = 'true'
    gsap.to(card, {
      scale: EXPANDED_SCALE,
      zIndex: EXPANDED_Z,
      duration: TOGGLE_DURATION,
      ease: EASE_SOFT,
      overwrite: 'auto',
    })
    scheduleIdleCollapse(card)
  }

  const toggleCard = (card: HTMLElement) => {
    card.dataset.expanded === 'true' ? collapseCard(card) : expandCard(card)
  }

  const onClick = contextSafe((e: Event) => toggleCard(e.currentTarget as HTMLElement))

  const onScroll = () => {
    const expanded = allCards.find((c) => c.dataset.expanded === 'true')
    if (expanded) collapseCard(expanded)
  }

  allCards.forEach((card) => {
    card.dataset.baseZ = card.style.zIndex || '1'
    card.dataset.expanded = 'false'
    card.addEventListener('click', onClick)
  })
  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
    allCards.forEach((card) => card.removeEventListener('click', onClick))
    window.removeEventListener('scroll', onScroll)
    clearIdleTimer()
  }
}

// ---- Wire it all up per portfolio item -----------------------------------

function useAnimateAll(
  sectionRef: React.RefObject<HTMLElement | null>,
  itemRefs: React.RefObject<HTMLElement[]>
) {
  useGSAP((_, contextSafe) => {
    const elements: ItemEls[] = itemRefs.current
      .map((root) => {
        const index = root.querySelector<HTMLElement>('.portfolio-index')
        const title = root.querySelector<HTMLElement>('.portfolio-title')
        const body = root.querySelector<HTMLElement>('.portfolio-body')
        const cards = Array.from(root.querySelectorAll<HTMLElement>('.portfolio-card'))
        if (!index || !title || !body || cards.length === 0) return null
        return { root, index, title, body, cards }
      })
      .filter((el): el is ItemEls => el !== null)

    elements.forEach(({ root, index, title, body, cards }) => {
      animateIndex(index, root)
      animateTitle(title, root)
      animateBody(body, root)
      animateCards(cards, root)
    })

    const allCards = elements.flatMap((el) => el.cards)
    return setupCardExpansion(allCards, contextSafe!)
  }, { scope: sectionRef })
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const itemRefs = useRef<HTMLElement[]>([])

  useAnimateAll(sectionRef, itemRefs)

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section px-8 max-w-3xl mx-auto w-full relative flex flex-col gap-[20vh]"
    >
      {PortfolioData.map((item, index) => (
        <article
          key={item.title}
          ref={(el) => { if (el) itemRefs.current[index] = el }}
          className="relative h-[70vh] flex flex-col justify-between"
          style={{ backgroundColor: item.bgColor ?? '#F3E7E0' }}
        >
          <div className="absolute inset-0 overflow-hidden mix-blend-darken">
            <div className="portfolio-index text-[10rem]/[10rem] uppercase text-inksoft/5 font-curvy font-black left-0">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
          <div className="relative z-20 text-center flex justify-center w-full overflow-hidden">
            <h3 className="portfolio-title font-serif text-3xl text-ink p-4">{item.title}</h3>
          </div>
          <div className="relative z-20 overflow-hidden p-8">
            <p className="portfolio-body text-base/5 text-justify text-inksoft">{item.body}</p>
          </div>
          <div className="portfolio-media absolute z-0 h-full w-full flex justify-center items-center" aria-label={item.title}>
            {item.img.map((image, imageIndex) => (
              <div
                key={`${item.title}-${image.alt}`}
                className="portfolio-card absolute overflow-hidden p-2 pb-6 bg-white shadow rounded"
                style={{ zIndex: imageIndex + 1 }}
              >
                <img src={image.src} alt={image.alt} className="aspect-9/11 w-50 object-cover object-top" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}