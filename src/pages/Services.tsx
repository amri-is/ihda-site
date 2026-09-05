import Footer from "@/components/Footer";
import { ServiceData } from "@/data/services";

export default function Services() {
  return (
    <>
      <section className="flex flex-col items-start justify-center px-4 pt-4 max-w-3xl mx-auto relative overflow-hidden">
        <h2 className="text-xs uppercase tracking-[.25em] text-rose">
          What we do
        </h2>
  
        <h1 className="font-serif text-5xl/12 max-w-3xl ">
          Four ways to be{' '}
          <span className="font-curvy text-[3.75rem] font-black text-rose">
            stylized.
          </span>
        </h1>
  
        <p className="text-base/4.5 text-inksoft max-w-md mt-4">
          Every service is built around the occasion, not a fixed formula — the same trained hand, your call.
        </p>

        <div className="spacer h-4"></div>

        <div className="flex flex-col gap-4">
        {ServiceData.map((item, idx) => (
          <div
            key={idx}
            // ref={(el) => { cardRefs.current[idx] = el }}
            data-expanded={false}
            className="bg-rose/15 min-h-0 rounded overflow-hidden"
          >
            <div
              // ref={(el) => { innerRefs.current[idx] = el }}
              className="flex flex-col p-4"
            >
              <header className="flex flex-col">
                <h1 className="text-2xl/6 font-serif">
                  {item.title}
                </h1>
                <div className="spacer h-1"></div>
                <p className="text-sm/3.5 text-inksoft">
                  {item.body}
                </p>
                {item.note && (
                  <>
                    <div className="spacer h-2"></div>
                    <div className="text-inksoft text-[0.675rem]/[0.675rem] self-end">
                      *{item.note}
                    </div>
                  </>
                )}
              </header>
              <div className="spacer h-4"></div>
              <div className="relative grid cols-2 rows-1">
                {/* <div className="img-stack aspect-square overflow-hidden relative rounded-sm flex items-center justify-center ">
                  {item.imgs.map((img, imgIdx) => (
                    <img
                      key={`${img}-${imgIdx}`}
                      // ref={(el) => {
                      //   if (!imgsRefs.current[idx]) imgsRefs.current[idx] = []
                      //   imgsRefs.current[idx][imgIdx] = el
                      // }}
                      className="absolute object-cover object-center pointer-events-none"
                      src={img}
                    />
                  ))}
                </div> */}
                <div className="flex flex-col gap-2">
                  {item.items.map((items, itemsIdx) => (
                    <div
                      key={`${items}-${itemsIdx}`}
                      className="items w-full flex items-center justify-between p-3 bg-white/75 rounded"
                    >
                      <div className="flex flex-col gap-0.5">
                        <div className="font-serif text-lg/4.5">
                          {items.name}
                        </div>
                        {items.note && (
                          <div className="text-inksoft text-[0.675rem]/[0.675rem]">
                            *{items.note}
                          </div>
                        )}
                      </div>
                      
                      <div className="font-mono text-rose shrink-0 text-right">
                        Rp {items.price / 1000}K
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
        </div>
      </section>
      <Footer />
    </>
  )
}