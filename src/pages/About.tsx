import Footer from "@/components/Footer"
import { BRAND_ITEM } from "@/constants/brand"

export default function About() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 pb-16 pt-6">
        <section className="max-w-sm pt-2">
          <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-rose">
            About the studio
          </p>
          <h1 className="font-serif text-[3.25rem] tracking-normal">
            Beauty, made
            <span className="block font-curvy text-[4.25rem] font-black text-rose">
              personal.
            </span>
          </h1>
          <p className="mt-7 max-w-xs text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We make
            room for the little details that let you feel entirely yourself.
          </p>
        </section>

        <section className="-mx-4" aria-label="Ihda Lathif Studio">
          <img
            src={BRAND_ITEM.photo}
            alt="Ihda Lathif Studio"
            className="aspect-4/5 w-full object-cover"
          />
          <p className="px-4 pt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
            Ihda Lathif Studio is a beauty space built around you, your story,
            and the details that make a look yours.
          </p>
        </section>

        <section className="-mx-1" aria-label="Studio statement">
          <p className="font-serif text-[3.3rem] font-semibold text-inksoft">
            The look{' '}
            <span className="text-ink">isn't</span>
            {' '}the point.{' '}
            <span className="text-rose font-curvy font-bold">You are.</span>
          </p>
        </section>

        <section className="grid grid-cols-[0.8fr_1fr] items-end gap-4" aria-label="Our approach">
          <p className="pb-2 text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We take
            our time to listen, shape, and refine until everything feels just
            right.
          </p>
          <img
            src={BRAND_ITEM.photo}
            alt="A beauty session at Ihda Lathif Studio"
            className="aspect-3/4 w-full object-cover object-center"
          />
        </section>

        <section className="-mx-4" aria-label="The studio story">
          <img
            src={BRAND_ITEM.photo}
            alt="The Ihda Lathif Studio team"
            className="aspect-16/10 w-full object-cover object-bottom"
          />
          <p className="px-4 pt-4 text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. We
            believe the smallest details can change the way you carry yourself
            into the world.
          </p>
        </section>

        <section className="-mx-1" aria-label="Our size">
          <p className="font-serif text-[3.2rem] font-semibold text-inksoft">
            We're <span className="text-rose">small</span> on purpose.
          </p>
          <p className="mt-6 max-w-xs text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. A little more attention, a little less rushing, and room
            for the work to be personal.
          </p>
        </section>

        <section className="border border-dashed border-ink/50 px-3 py-4" aria-labelledby="craft-title">
          <p className="font-serif text-2xl" id="craft-title">
            Craft
          </p>
          <p className="mt-14 max-w-md font-serif text-[2rem] font-medium ">
            We sweat the details — a look should feel like you, only more{' '}
            <span className="text-rose"> luminous.</span>
          </p>
          <p className="mt-8 max-w-xs text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Every appointment begins with a conversation and ends
            with a little more confidence.
          </p>
        </section>

        <section className="border border-dashed border-ink/50 px-3 py-5" aria-label="Our process">
          <div className="flex h-56 flex-col justify-end gap-1.5" aria-hidden="true">
            <div className="h-7 w-[38%] bg-rose" />
            <div className="h-7 w-[82%] bg-inksoft" />
            <div className="h-7 w-full bg-ink" />
            <div className="h-7 w-[64%] bg-gold" />
            <div className="h-7 w-[92%] bg-rose/75" />
            <div className="h-7 w-[76%] bg-inksoft/80" />
            <div className="h-7 w-[58%] bg-ink/85" />
          </div>
          <div className="mt-7 flex items-end justify-between gap-4 border-t border-line pt-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-inksoft">
              Our process
            </p>
            <p className="text-right font-serif text-lg text-rose">
              detail by<br />detail
            </p>
          </div>
        </section>

        <section className="grid gap-4 border-l-2 border-rose pl-4">
          <p className="font-serif text-2xl ">
            A soft place to become your most confident self.
          </p>
          <p className="max-w-sm text-sm text-inksoft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}