import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

import "@/App.css"
import Hero from "@/components/Hero"
import Booking from "@/components/Booking"
import Portfolio from "@/components/Portfolio"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
      <ScrollbarIndicator />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Portfolio />
          <Booking />
        </div>
      </div>
    </>
  )
}

export default App