import { useRef } from "react"
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap"

export default function ScrollbarIndicator() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const wrap = trackRef.current
    const bar = thumbRef.current
    if (!wrap || !bar) return

    // furthest the thumb can travel down inside the track
    const maxTop = () => wrap.clientHeight - bar.clientHeight

    let hideTimeout: ReturnType<typeof setTimeout> | undefined
    let documentHeight = document.documentElement.scrollHeight

    // drives the thumb position off overall page scroll progress (0 -> 1)
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(bar, { y: self.progress * maxTop() })
        gsap.to(wrap, { autoAlpha: 1, duration: 0.01 })

        clearTimeout(hideTimeout)
        hideTimeout = setTimeout(() => {
          gsap.to(wrap, { autoAlpha: 0, duration: 0.5 })
        }, 500)
      },
    })

    // recalc ScrollTrigger only if height actually changed
    const refreshForDocumentHeight = () => {
      const nextDocumentHeight = document.documentElement.scrollHeight
      if (nextDocumentHeight === documentHeight) return

      documentHeight = nextDocumentHeight
      st.refresh() // recalc start-end positions
    }

    // catches layout-driven size changes (images, fonts, resize)
    const resizeObserver = new ResizeObserver(refreshForDocumentHeight)
    // catches DOM changes that affect height (content added/removed, attr changes)
    const mutationObserver = new MutationObserver(refreshForDocumentHeight)

    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    // cleanup
    return () => {
      st.kill()
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      clearTimeout(hideTimeout)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      className="scrollbar bg-[#fff0] w-2 h-[80vh] fixed top-[10vh] right-0 z-10 transition-all duration-500 overflow-hidden mix-blend-difference"
    >
      <div
        ref={thumbRef}
        className="scrollbar-indicator bg-[#888] h-[10%] w-full absolute will-change-transform rounded-bl-2xl rounded-tl-2xl"
      />
    </div>
  )
}