import Bloom from '@/components/ui/Bloom'
import Button from '@/components/ui/Button'

import { BRAND_ITEM } from '@/constants/brand'
import { FooterItems } from '@/constants/footer'
import { gsap, useGSAP, SplitText, ScrollTrigger } from '@/lib/gsap'
import { useRef } from 'react'

function InstaSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
  )
}
function WhatsappSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  )
}
function TiktokSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>
  )
}
function MapSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  )
}

export default function Footer() {
  const nameRefs = useRef<Array<HTMLSpanElement | null>>([])
  const studioRef = useRef<HTMLDivElement | null>(null)
  

  useGSAP(() => {
    const names = nameRefs.current
    const studio = studioRef.current
    if (!names || !studio) return
    // console.log(names);

    names.map((el) => {
      const anim = gsap.timeline().to(el, { xPercent: -100, duration: 50, ease: 'none', repeat: -1 })
      ScrollTrigger.create({
        // markers: true,
        trigger: el,
        animation: anim,
        start: 'top bottom',
        toggleActions: 'play none none pause'
      })
    })

    // split text into chars and give it gap via its parent
    SplitText.create(studio, { type: 'chars' })

  })  

  return (
    <footer className="min-h-80 w-full grid grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-8 items-center">

      <div className="pages flex flex-wrap gap-1 justify-center max-w-60 mx-auto mt-8">
        {FooterItems.pages.map((item, idx) => (
          <Button
            key={idx}
            href={`/${item}`}
            className="text-xs px-3 py-1 pointer-events-none"
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="links flex gap-1 justify-center px-4">
        <Button href={BRAND_ITEM.hairdo} className="p-2 px-3 text-xs/0">makeup&nbsp;<InstaSVG/></Button>
        <Button href={BRAND_ITEM.mua} className="p-2 px-3 text-xs/0">hairdo&nbsp;<InstaSVG/></Button>
        <Button href={BRAND_ITEM.tiktok} className="p-2"><TiktokSVG/></Button>
        <Button href={BRAND_ITEM.map} className="p-2"><MapSVG/></Button>
      </div>

      <div className="flex flex-col justify-center items-center relative overflow-hidden opacity-10">
        <div
          className='flex gap-8'
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              ref={(el) => { nameRefs.current[i] = el }}
              key={i}
              className='font-black font-curvy text-9xl text-rose text-nowrap'
            >
              {BRAND_ITEM.nameShort}
            </span>
          ))}
        </div>
        <div ref={studioRef} className="uppercase flex gap-8 ">{BRAND_ITEM.studio}</div>
      </div>

      <div className="w-full grid grid-rows-[auto_auto] gap-1 text-xs font-serif font-extralight px-2 pb-2">
        <div className="grid grid-cols-[0.5rem_1.25rem_1fr_1.25rem_0.5rem] gap-1 h-px w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-rose/20"></div>
          ))}
        </div>
        <div className="grid grid-cols-2 items-center w-full">
          <div className="justify-self-start">made with ❤️</div>
          <div className="justify-self-end">&copy; {new Date().getFullYear()}</div>
        </div>
      </div>

    </footer>
  )
}