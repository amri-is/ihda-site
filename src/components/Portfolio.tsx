import { Fragment } from 'react'

import { PortfolioData } from '@/data/portfolio'

import PhotoCard from '@/components/ui/PhotoCard'

const POS_X = [-5,0,10]
const POS_Y = [-10,0,15]
const ROTATE = [20,5,-15]
const Z_IDX = [1,3,2]

export default function Portfolio() {

  return (
    <section
      id="portfolio"
      className="h-screen relative section pin-section"
    >
      <div className="h-full w-full flex flex-col justify-center items-center max-w-3xl mx-auto relative ">
        <div className="portfolio-title w-full shrink-0 bg-green-200/20 backdrop-blur-sm">
          <div className="list">
            {PortfolioData.map((item, idx) => (
              <div className="p-1" key={idx}>{item.title}</div>
            ))}
          </div>
        </div>
        <div className="portfolio-img w-full flex-1 max-h-[80vh] bg-red-200/20 relative -z-10">
          {PortfolioData.map((item, idx) => (
            <div key={idx} className='img-stack flex items-center justify-center absolute h-full w-full' data-title={idx+1}>
              {item.img.map((image, imageIdx) => (
                <div
                  key={`${item.title}-${image.src}`}
                  className="absolute min-w-0 bg-white p-4 pb-16 rounded shadow-xl transition-transform duration-300"
                  style={{
                    transform: `
                      translateX(${POS_X[imageIdx % POS_X.length]}rem)
                      translateY(${POS_Y[imageIdx % POS_Y.length]}rem)
                      rotate(${ROTATE[imageIdx % ROTATE.length]}deg)
                    `,
                  }}
                >
                  <img src={image.src} alt={image.alt} className='aspect-4/5 w-[clamp(20rem,22vw,20rem)] max-w-full object-cover rounded' />
                </div>
                ))}
            </div>
          ))}
        </div>
        <div className="portfolio-body w-full shrink-0 bg-violet-200/20 backdrop-blur-sm">
          <div className="body">
            {PortfolioData.map((item, idx) => (
              <div className="p-1 text-sm" key={idx}>{item.body}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}