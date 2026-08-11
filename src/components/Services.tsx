function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center px-4 max-w-3xl mx-auto w-full relative gap-8"
    >

      <header className="header flex flex-col ">

        <div className="text-xs uppercase tracking-[.25em] text-rose">
          What we do
        </div>

        <h1 className="font-serif text-5xl/12 max-w-3xl">
          Four ways to be&nbsp;
          <span className="font-curvy text-[3.5rem] text-rose font-black ">
            stylized
          </span>
        </h1>

        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Every service is built around the occasion, not a fixed formula — the same trained hand,
          <span className="text-ink">&nbsp;your call.</span>
        </p>

      </header>

      <div className="flex flex-col gap-2">
        <div className="p-4 bg-rose/15 min-h-8 flex flex-col gap-4 rounded">
          <header className="flex flex-col gap-2">
            <h1 className="text-2xl/6 font-serif">
              Regular
            </h1>
            <p className="text-sm/3.5 text-inksoft">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quod reiciendis mollitia, corporis quasi impedit fuga esse iusto rem tempore.
            </p>
          </header>
          <div className="img-wrap relative">
            <img
              className="object-cover object-center aspect-square w-full rounded-sm"
              src="https://assets.codepen.io/7558/flame-glow-blur-003.jpg"
              alt=""
            />
            <div className="tags absolute bottom-0 right-0 flex flex-wrap-reverse flex-row-reverse w-full p-2 gap-1">
              <div className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide">
                family bride
              </div>
              <div className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide">
                among tamu
              </div>
              <div className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide">
                yearbook
              </div>
              <div className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide">
                wedding guest
              </div>
              <div className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide">
                brides maid
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-rose/15 min-h-8 flex flex-col gap-4 rounded">
          
        </div>
        <div className="p-4 bg-rose/15 min-h-8 flex flex-col gap-4 rounded">
          
        </div>
        <div className="p-4 bg-rose/15 min-h-8 flex flex-col gap-4 rounded">
          
        </div>
        <div className="border border-dashed p-3">
          <div className="bg-rose/15 h-8 flex gap-4 rounded text-xs items-center justify-center uppercase">
            Full Service List
          </div>

        </div>
      </div>

    </section>
  )
}

export default Services