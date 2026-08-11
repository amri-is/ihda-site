import { ServiceData } from "@/data/services";

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
        {ServiceData.map((item, idx) => (
          <div key={idx} className="p-4 bg-rose/15 min-h-8 flex flex-col gap-4 rounded">
            <header className="flex flex-col gap-2">
              <h1 className="text-2xl/6 font-serif">
                {item.title}
              </h1>
              <p className="text-sm/3.5 text-inksoft">
                {item.body}
              </p>
            </header>
            <div className="content relative">
              <div className="img-stack aspect-square overflow-hidden relative rounded-sm">
                {item.imgs.map((img, imgIdx) => (
                  <img
                    key={`${img}-${imgIdx}`}
                    className="absolute"
                    src={img}
                    alt=""
                  />
                ))}
              </div>
              <div className="tags absolute bottom-0 right-0 flex flex-wrap-reverse flex-row-reverse w-full p-2 gap-1">
                {item.tags.map((tag, tagIdx) => (
                  <div
                    key={`${tag}-${tagIdx}`}
                    className="tag bg-white/70 backdrop-blur-sm px-1.5 py-1 uppercase text-xs/3 rounded-xs tracking-wide"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="border border-dashed p-3 rounded">
          <div className="bg-rose/15 h-8 flex gap-4 rounded-sm text-xs items-center justify-center uppercase">
            Full Service List
          </div>
        </div>
      </div>

    </section>
  )
}

export default Services