import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { BRAND_ITEM } from "@/constants/brand"

const FAQs = [
  {
    q: "Lorem Ipsum 1?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, obcaecati. Error consequuntur deserunt asperiores ratione mollitia repellendus molestiae et vitae cum voluptatum dolore dignissimos optio quasi earum dolor, tempore soluta?"
  },
  {
    q: "Lorem Ipsum 2?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, obcaecati. Error consequuntur deserunt asperiores ratione mollitia repellendus molestiae et vitae cum voluptatum dolore dignissimos optio quasi earum dolor, tempore soluta?"
  },
  {
    q: "Lorem Ipsum 3?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, obcaecati. Error consequuntur deserunt asperiores ratione mollitia repellendus molestiae et vitae cum voluptatum dolore dignissimos optio quasi earum dolor, tempore soluta?"
  },
]

function Plus() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="size-4 stroke-2 -m-1"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  )
}

export default function About() {
  return (
    <>
      {/* Hero / Story */}
      <section className="relative mx-auto flex max-w-3xl flex-col items-start justify-center overflow-hidden px-4 py-8">
        <h2 className="mt-4 font-mono text-xs uppercase tracking-[.25em] text-rose">
          About me
        </h2>
        <h1 className="mt-2 max-w-3xl font-serif text-5xl/12 font-semibold">
          Hai, aku{' '}
          <span className="font-curvy text-[3.5rem] font-black text-rose">
            Ihda.
          </span>
        </h1>
        <p className="mt-6 max-w-md text-base/4 text-inksoft">
          MUA di {BRAND_ITEM.city} yang bikin kamu tampil paling nyaman jadi
          dirimu sendiri, di hari yang spesial.
        </p>
        <img
          src={BRAND_ITEM.photos.hero}
          alt={`${BRAND_ITEM.firstName}, MUA di ${BRAND_ITEM.city}`}
          className="mt-4 aspect-3/2 w-full object-cover"
        />
        <p className="mt-16 max-w-3xl font-serif text-5xl/12 font-semibold text-inksoft">
          Awalnya sih buat{' '}
          <span className="font-curvy text-[3.5rem] font-black text-rose">
            diri sendiri.
          </span>
        </p>
      </section>

      <section className="mt-16 px-4 grid grid-cols-2 gap-4" aria-label="Awal mula">
        <p className="self-start pb-2 text-sm/3.5 text-inksoft">
          Aku mulai makeup buat kebutuhan sendiri. Lama-lama sadar, yang paling
          aku suka bukan hasilnya di cermin, tapi momen orang lain lihat dirinya
          dan jadi lebih <span className="italic text-ink">PD</span>.
        </p>
        <img
          src={BRAND_ITEM.photos.story}
          alt={`${BRAND_ITEM.firstName} merias klien`}
          className="aspect-1/2 w-full object-cover object-center"
        />
      </section>

      {/* Awal jadi asisten */}
      <section className="mt-4 px-4 grid grid-cols-2 gap-4">
        <img
          src={BRAND_ITEM.photos.story}
          alt="Perjalanan awal sebagai asisten MUA"
          className="aspect-2/3 w-full rounded object-cover object-center"
        />
        <p className="max-w-sm self-end text-sm/3.5 text-inksoft">
          Awalnya aku diajakin jadi asisten MUA. Di jalan, aku juga bertemu dengan
          MUA lain yang mau berbagi ilmu.
        </p>
        <p className="max-w-sm text-right text-sm/3.5 text-inksoft">
          Lalu aku didorong buat berdiri sendiri biar makin berkembang.
        </p>
        <img
          src={BRAND_ITEM.photos.story}
          alt="Mengembangkan karir MUA mandiri"
          className="aspect-15/10 w-full rounded object-cover object-center"
        />
      </section>

      <section className="mt-4 px-4 grid grid-cols-1 gap-4">
        <p className="-mt-1 max-w-sm text-sm/3.5 text-inksoft">
          Tahun 2024 mulai buka makeup. Awalnya ya ga mulus. Banyak rintangan di
          awal. Tapi ada orang-orang terdekat yang selalu siap buat support dan
          itu yang bikin aku sampai di titik ini.
        </p>
        <img
          src={BRAND_ITEM.photos.story}
          alt="Proses perjalanan MUA dari tahun 2024"
          className="aspect-5/3 w-full rounded object-cover object-center"
        />
      </section>

      {/* Philosophy */}
      <section className="mt-24 px-4 flex flex-col gap-4">
        <header className="flex items-end justify-between">
          <h2 className="font-serif text-4xl/6 font-semibold text-inksoft">Soft.</h2>
          <h2 className="font-serif text-4xl/6 font-semibold text-inksoft">Clean.</h2>
          <h2 className="font-curvy text-4xl/6 font-black text-rose">Fresh.</h2>
        </header>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={BRAND_ITEM.photos.story}
            alt="Galeri hasil makeup bergaya soft"
            className="aspect-2/3 w-full rounded object-cover object-center"
          />
          <img
            src={BRAND_ITEM.photos.story}
            alt="Galeri hasil makeup bergaya clean dan fresh"
            className="aspect-3/2 w-full rounded object-cover object-center"
          />
        </div>
        <p className="text-justify text-sm/3.5 text-inksoft">
          Kamu tetap terlihat kamu, bukan seperti orang lain. Dengan sentuhan
          minimalis dan warna-warna lembut, jalani hari dengan penuh ketenangan
          dan kesegaran. Tampil <span className="text-rose">clean</span> dan{' '}
          <span className="text-rose">effortless</span> setiap saat, bukti gaya
          terbaik adalah yang jujur apa adanya
        </p>
      </section>

      {/* CTA */}
      <section
        className="mt-24 mx-4 border border-dashed border-inksoft px-3 py-5"
        aria-labelledby="cta-title"
      >
        <p className="font-serif text-2xl" id="cta-title">
          Yuk, ngobrol dulu.
        </p>
        <p className="mt-4 max-w-xs text-sm/3.5 text-inksoft">
          Ceritain acaramu dan bayangan <span className="text-ink">look</span>-mu.
          Sisanya kita rapihin bareng.
        </p>
        <div className="mt-7 grid grid-cols-2 grid-rows-2 gap-3">
          <Button
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="col-span-2 w-full rounded-none bg-rose px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-white"
          >
            Kontak
          </Button>
          <Button
            href={BRAND_ITEM.mua}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-none border border-ink bg-transparent px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-ink"
          >
            Instagram Makeup
          </Button>
          <Button
            href={BRAND_ITEM.hairdo}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-none border border-ink bg-transparent px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-ink"
          >
            Instagram Hairdo
          </Button>
        </div>
        <div className="mt-7 grid grid-cols-2 grid-rows-2 border-t border-line pt-3 text-right font-serif text-rose">
          <p className="row-span-2 self-center text-left font-mono text-xs uppercase tracking-widest text-inksoft">
            Fast respon
          </p>
          <p>{BRAND_ITEM.hours.days}</p>
          <p>{BRAND_ITEM.hours.time}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 mb-24 px-4 flex flex-col">
        <header className="flex flex-col items-center py-4 text-center">
          <h1 className="font-serif text-5xl/12 text-rose">FAQs</h1>
          <p className="max-w-30 text-xs text-inksoft">
            pertanyaan yang sering aku dapat dari klien-klienku
          </p>
        </header>
        <ul className="accordion-list flex flex-col gap-3">
          {FAQs.map((item, idx) => (
            <li key={idx} className="accordion-item rounded bg-rose/15 px-3">
              <h2 className="item-header flex">
                <Button
                  as="button"
                  className="flex w-full justify-between rounded-none bg-transparent px-0 py-4 text-sm/3.5 font-medium text-ink"
                >
                  <span>{item.q}</span>
                  <div className="icon">
                    <Plus />
                  </div>
                </Button>
              </h2>
              <p className="item-text pb-3 text-sm/3.5 text-inksoft">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  )
}