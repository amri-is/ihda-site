import gsap from "gsap"

import Button from '@/components/ui/Button'
import Bloom from '@/components/ui/Bloom'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center px-8 max-w-3xl mx-auto w-full relative"
    >
        <div className="absolute opacity-10 right-0 scale-200" >
            <Bloom size="large" className=""/>
      </div>
      
        <div className="hero-in text-xs uppercase tracking-widest text-rose">
          Makeup & hijab styling studio
        </div>
        <h1 className="hero-in font-serif font-normal text-5xl leading-[1.02] tracking-tight max-w-3xl">
          Beauty for
          <br />
          <em className="font-curvy text-6xl text-rosedeep font-black">
            every&nbsp;
          </em>
          occasion,
          <br />
          your way.
        </h1>
        <p
          className="hero-in text-base text-inksoft max-w-md leading-relaxed mt-8"
        >
          From everyday soft glam to graduation, bridal day —
          we shape looks that
          <span className="text-ink">
            &nbsp;feel&nbsp;
          </span>
          like you not a template.
        </p>

        <div className="hero-in flex gap-4 items-center flex-wrap mt-4">
          <Button href="#booking">
            Book a session
          </Button>
        </div>
    </section>
  )
}