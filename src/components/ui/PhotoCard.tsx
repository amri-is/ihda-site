import { useMemo } from 'react'

type PhotoCardProps = {
  img: {
    src: string
    alt: string
  }
  idx: number
}

export default function PhotoCard({
  img, idx
}: PhotoCardProps) {
  const POS_X = [-35, 0, 35]
  const POS_Y = [20, 0, 20]
  const ROT = [-10, 0, 10]
  const Z_INDEX = [5,7,6]

  const base = 'absolute min-w-0 bg-white p-2 pb-6 shadow-xl transition-transform duration-300'
  
  const transform = useMemo(() => {
    const posX = POS_X[idx % POS_X.length]
    const posY = POS_Y[idx % POS_Y.length]
    const rot = ROT[idx % ROT.length]
    return `translate(${posX}%, ${posY}px) rotate(${rot}deg)`
  }, [idx])

  return (
    <div className={base} style={{ transform, zIndex: Z_INDEX[idx % Z_INDEX.length] }}>
      <img
        src={img.src}
        alt={img.alt}
        className="aspect-4/5 w-[clamp(11rem,22vw,20rem)] max-w-full object-cover"
      />
    </div>
  )
}