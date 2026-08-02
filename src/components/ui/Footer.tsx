import Bloom from '@/components/ui/Bloom'

import { BRAND_ITEM } from '@/constants/brand'
import { FOOTER_ITEM } from '@/constants/footer'

export default function Footer() {
  return (
    <footer
      className="grid absolute w-full bottom-0 grid-cols-2 px-4 pb-2"
    >
      <div className="flex gap-2 items-center text-xl font-serif">
        <Bloom size="logo" />
        {BRAND_ITEM.name}
      </div>

      <div className="text-[.7rem] text-inksoft text-right tracking-wider font-light">
        {FOOTER_ITEM.note.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>

      <div className="text-[.7rem] text-inksoft text-left tracking-wider font-light w-full border-t py-1 border-line col-span-2">
        All rights reserved. &copy; ${new Date().getFullYear()}
      </div>
    </footer>
  )
}