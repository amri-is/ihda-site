import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import '@/App.css'
import Hero from '@/components/Hero'
import Booking from '@/components/Booking'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollThumbRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const wrap = scrollTrackRef.current;
    const bar = scrollThumbRef.current;
    if (!wrap || !bar) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    const maxTop = () => wrap.clientHeight - bar.clientHeight;
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        bar.style.transform = `translateY(${self.progress * maxTop()}px)`;

        wrap.style.opacity = "1";
        wrap.style.visibility = "inherit";

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          wrap.style.opacity = "0";
          wrap.style.visibility = "hidden";
        }, 500);
      },
    });

    return () => {
      st.kill();
      smoother.kill();
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      <div
        ref={scrollTrackRef}
        className="scrollbar bg-[#fff0] w-2 h-[80vh] fixed top-[10vh] right-0 z-10 transition-all duration-500 overflow-hidden mix-blend-difference"
      >
        <div
          ref={scrollThumbRef}
          className="scrollbar-indicator bg-[#888] h-[10%] w-full absolute will-change-transform rounded-bl-2xl rounded-tl-2xl"
        ></div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Booking />
        </div>
      </div>
    </>
  )
}

export default App