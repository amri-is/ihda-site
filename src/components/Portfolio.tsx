import { PortfolioData } from '@/data/portfolio'

const POS_X = [-25, 0, 18]
const POS_Y = [-18, 0, 20]
const ROTATE = [20, 5, -15]

export default function Portfolio() {

  return (
    <section
      id="portfolio"
      className="section py-24 px-8 max-w-6xl mx-auto w-full relative overflow-hidden flex flex-col gap-[10vh]"
    >
      <div className="hidden max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs uppercase tracking-[.25em] text-rose">Portfolio</div>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Signature looks for every chapter.
        </h2>
      </div>

      {PortfolioData.map((item, index) => (
        <article
          key={item.title}
          className="portfolio-item relative h-screen flex flex-col justify-between"
          style={{ backgroundColor: item.bgColor ?? '#F3E7E0' }}
        >
          <div className="portfolio-title relative z-20 text-center flex justify-center w-full ">
            <div className="absolute text-xs uppercase text-rose/90 left-0">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
          </div>

          <div className="portfolio-body relative z-20 text-center">
            <p className="text-base leading-relaxed text-inksoft">{item.body}</p>
          </div>

          <div className="portfolio-media absolute z-0 h-full w-full flex justify-center items-center" aria-label={item.title}>
            {item.img.map((image, imageIndex) => (
              <div
                key={`${item.title}-${image.alt}`}
                className="portfolio-card absolute overflow-hidden p-4 pb-12 bg-white shadow rounded"
                style={{
                  transform: `translate(${POS_X[imageIndex]}vh, ${POS_Y[imageIndex]}vh) rotate(${ROTATE[imageIndex]}deg)`,
                  zIndex: 3 - imageIndex,
                }}
              >
                <img src={image.src} alt={image.alt} className="aspect-ratio-4/5 w-70 object-cover" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}