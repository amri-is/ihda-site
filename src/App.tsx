import "@/App.css"
import Hero from "@/components/Hero"
import Booking from "@/components/Booking"
import Services from "@/components/Services"
import About from "@/components/About"
import Testimonial from "@/components/Testimonial"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"
import Footer from "@/components/Footer"

import { gsap } from '@/lib/gsap'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

function App() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <ScrollbarIndicator />
      <Hero />
      <div className="spacer h-50 "></div>
      <Services />
      <div className="spacer h-100 "></div>
      <About />
      <div className="spacer h-50 "></div>
      <Testimonial />
      <div className="spacer h-50 "></div>
      <Booking />
      <div className="spacer h-50 "></div>
      <Footer />
    </>
  )
}

export default App