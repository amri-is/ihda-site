import { gsap, ScrollTrigger, SplitText } from './gsap'

export const EASE = 'power4.out'
export const EASE_SOFT = 'power3.out'
export const DURATION = 2

// ---- Split-text reveal (Hero) ------------------------------------------

type SplitKind = 'lines' | 'words'

/**
 * Split text into lines/words and return a `from` tween for the pieces.
 * Null-safe: returns a no-op timeline if el is missing, so callers can
 * chain it into a parent timeline without an extra guard.
 */
export function splitFrom(
  el: Element | null,
  kind: SplitKind,
  vars: gsap.TweenVars
) {
  if (!el) return gsap.timeline()
  const split = SplitText.create(el, { type: kind })
  const pieces = kind === 'lines' ? split.lines : split.words
  return gsap.from(pieces, vars)
}

// ---- Scroll-scrubbed reveal (Portfolio) ---------------------------------

/** Wrap a timeline in a scrubbed ScrollTrigger tied to `trigger`. */
export function scrubReveal(
  tl: gsap.core.Timeline,
  trigger: Element | string,
  opts: Partial<ScrollTrigger.Vars> = {}
) {
  return ScrollTrigger.create({
    animation: tl,
    trigger,
    scrub: 1,
    start: 'top 75%',
    ...opts,
  })
}

/**
 * Common pattern across animateIndex/animateTitle/animateCards:
 * optionally set starting props, build a `from` timeline, scrub it
 * against `root`. Collapses 3 near-identical functions into 1 call.
 */
export function revealOnScroll(
  el: gsap.TweenTarget,
  root: Element,
  fromVars: gsap.TweenVars,
  opts: {
    setVars?: gsap.TweenVars
    scrollOpts?: Partial<ScrollTrigger.Vars>
  } = {}
) {
  if (opts.setVars) gsap.set(el, opts.setVars)
  const tl = gsap.timeline().from(el, fromVars)
  return scrubReveal(tl, root, opts.scrollOpts)
}