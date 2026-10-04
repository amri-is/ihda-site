import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { BRAND_ITEM } from "@/constants/brand"
import { cn } from "@/lib/utils"

const WHY = [
  {
    title: 'Personal, bukan template',
    body: 'Aku lihat dulu wajahmu, baru tentuin makeup-nya. Bagian terbaikmu yang jadi bintang.',
  },
  {
    title: 'Makeup + hairdo',
    body: 'Graduation, family bride, sampai bridesmaid. Riasan dan tatanan rambut bisa beres di satu tangan.',
  },
  {
    title: 'Studio atau home service',
    body: 'Mau hemat biaya, datang ke studio. Mau santai di rumah, aku yang datang ke tempatmu.',
  },
]

const Philosophy = [
  {
    title: "Soft",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam voluptatum facere mollitia porro voluptate cum quos odit quas adipisci."
  },
  {
    title: "Clean",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam voluptatum facere mollitia porro voluptate cum quos odit quas adipisci."
  },
  {
    title: "Fresh",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam voluptatum facere mollitia porro voluptate cum quos odit quas adipisci."
  },
]

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

export default function About() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-col px-4 pb-16 pt-6">
        {/* Hero / Story */}
        <section className="w-full">
          <h2 className="font-mono text-xs uppercase tracking-[.25em] text-rose mt-4 col-span-2">
            About me
          </h2>
          <h1 className="font-serif text-5xl/12 max-w-3xl mt-2 font-semibold col-span-2">
            Hai, aku{' '}
            <span className="font-curvy text-[3.5rem] font-black text-rose">
              Ihda.
            </span>
          </h1>
          <p className="text-base/4 text-inksoft max-w-md mt-4">
            MUA di {BRAND_ITEM.city} yang bikin kamu tampil paling nyaman jadi
            dirimu sendiri, di hari yang spesial.
          </p>
        </section>

        <section className="mt-4" aria-label={`Foto ${BRAND_ITEM.firstName}`}>
          <img
            src={BRAND_ITEM.photos.hero}
            alt={`${BRAND_ITEM.firstName}, MUA di ${BRAND_ITEM.city}`}
            className="aspect-3/2 w-full object-cover"
          />
          {/* <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
            {BRAND_ITEM.name}: ruang kecil di {BRAND_ITEM.city}, dibuat untuk kamu
            dan cerita di baliknya.
          </p> */}
        </section>

        {/* Story */}
        <section className="mt-24" aria-label="Ceritaku">
          <p className="font-serif font-semibold text-inksoft text-5xl/12 max-w-3xl">
            Awalnya sih buat{' '}
            <span className="text-rose font-curvy text-[3.5rem] font-black">diri sendiri.</span>
          </p>
        </section>

        <section className="mt-16 grid grid-cols-2 gap-4" aria-label="Awal mula">
          <p className="pb-2 text-sm/3.5 text-inksoft self-start">
            Aku mulai makeup buat kebutuhan sendiri.
            Lama-lama sadar, yang paling aku suka bukan hasilnya di cermin,
            tapi momen orang lain lihat dirinya dan jadi lebih{' '}
            <span className="text-ink italic">PD</span>.
          </p>
          <img
            src={BRAND_ITEM.photos.story}
            alt={`${BRAND_ITEM.firstName} merias klien`}
            className="aspect-1/2 w-full object-cover object-center"
          />
        </section>

        {/* Stats */}
        {/* <section className="mt-4 border border-dashed border-inksoft px-3 py-5" aria-label="Angka">
          <div className="grid grid-cols-2 gap-4 divide-x divide-inksoft">
            {BRAND_ITEM.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-[3rem] leading-none text-rose">{s.value}</p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-inksoft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        {/* awal jadi asisten */}
        <section className="mt-4 grid grid-cols-2 gap-4">
          <img
            src={BRAND_ITEM.photos.story}
            alt={``}
            className="aspect-2/3 w-full object-cover object-center rounded"
          />
          <p className="max-w-sm text-sm/3.5 text-inksoft self-end">
            Awalnya aku diajakin jadi asisten MUA.
            Di jalan, aku juga bertemu dengan MUA lain yang mau berbagi ilmu.
          </p>
          <p className="max-w-sm text-sm/3.5 text-inksoft text-right">
            Lalu aku didorong buat berdiri sendiri biar makin berkembang.
          </p>
          <img
            src={BRAND_ITEM.photos.story}
            alt={``}
            className="aspect-15/10 w-full object-cover object-center rounded"
          />
        </section>

        {/* */}
        <section className="mt-4 grid grid-cols-1 gap-4">
          <p className="max-w-sm text-sm/3.5 text-inksoft -mt-1">
            Tahun 2024 mulai buka makeup.
            Awalnya ya ga mulus.
            Banyak rintangan di awal.
            Tapi ada orang-orang terdekat yang selalu siap buat support dan Itu yang bikin aku sampai di titik ini.
          </p>
          <img
            src={BRAND_ITEM.photos.story}
            alt={``}
            className="aspect-5/3 w-full object-cover object-center rounded"
          /> 
        </section>

        {/* Philosophy */}
        {/* <section className="mt-24 grid grid-cols-1 gap-4">
          {Philosophy.map((item, idx) => (
            <div
              key={idx}
              className="border border-dashed border-inksoft p-4"
            >
              <h1 className={cn(
                "text-5xl font-serif font-semibold",
                idx === Philosophy.length - 1 ? "text-rose" : ""
              )}>
                {item.title}
              </h1>
              <p className="mt-8 font-semibold text-inksoft">
                {item.body}
              </p>
            </div>
          ))}
        </section> */}

        {/* Philosophy */}
        <section className="mt-24 flex flex-col gap-4">
          <header className="flex justify-between items-end">
            <h2 className="text-4xl/6 tracking-widest text-inksoft font-serif font-semibold">Soft.</h2>
            <h2 className="text-4xl/6 tracking-widest text-inksoft font-serif font-semibold">Clean.</h2>
            <h2 className="text-4xl/6 tracking-widest text-rose font-curvy font-black">Fresh.</h2>
          </header>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={BRAND_ITEM.photos.story}
              alt={``}
              className="aspect-2/3 w-full object-cover object-center rounded"
            />
            <img
              src={BRAND_ITEM.photos.story}
              alt={``}
              className="aspect-3/2 w-full object-cover object-center rounded"
            />
          </div>
          <p className="text-sm/3.5 text-inksoft">
            Ini adalah style-ku. Kamu tetap terlihat kamu, bukan seperti orang lain.
          </p>
        </section>

        {/* Why choose me */}
        {/* <section className="border border-dashed border-inksoft px-3 py-4 mt-4" aria-labelledby="why-title">
          <p className="font-serif text-2xl" id="why-title">
            Kenapa aku
          </p>
          <ul className="mt-10 flex flex-col gap-8">
            {WHY.map((w) => (
              <li key={w.title} className="border-l-2 border-rose pl-4">
                <p className="font-serif text-xl">{w.title}</p>
                <p className="mt-2 max-w-xs text-sm text-inksoft">{w.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xs text-sm text-inksoft">
            Jangkauan: studio di Salatiga.
            Home service ke Salatiga & sekitarnya.
          </p>
          <Button
            href="/services"
            className="mt-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-rose underline underline-offset-4 rounded-none bg-transparent p-0"
          >
            Lihat semua layanan
          </Button>
        </section> */}

        {/* Gallery */}
        {/* <section className="mt-24" aria-label="Galeri"> 
          <div className="grid grid-cols-2 gap-4">
            {BRAND_ITEM.gallery.map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-3/4 w-full object-cover"
              />
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
            Graduation, family bride, bridesmaid, engagement
          </p>
        </section> */}

        {/* CTA */}
        {/* <section className="mt-24 border border-dashed border-inksoft px-3 py-5" aria-labelledby="cta-title">
          <p className="font-serif text-2xl" id="cta-title">
            Yuk, ngobrol dulu.
          </p>
          <p className="mt-4 max-w-xs text-sm/3.5 text-inksoft">
            Ceritain acaramu dan bayangan <span className="italic">look</span>-mu. Sisanya kita rapihin bareng.
          </p>
          <div className="mt-7 grid grid-cols-2 grid-rows-2 gap-3">
            <Button
              href="/contact"
              target="_blank"
              rel="noreferrer"
              className="bg-rose px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-white col-span-2 w-full rounded-none"
            >
              Kontak
            </Button>
            <Button
              href={BRAND_ITEM.mua}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-widest w-full rounded-none bg-transparent text-ink"
            >
              Instagram Makeup
            </Button>
            <Button
              href={BRAND_ITEM.hairdo}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-widest w-full rounded-none bg-transparent text-ink"
            >
              Instagram Hairdo
            </Button>
          </div>
          <div className="mt-7 border-t border-line pt-3 grid grid-cols-2 grid-rows-2 text-right font-serif text-rose">
            <p className="font-mono text-left text-xs uppercase tracking-widest text-inksoft row-span-2 self-center">
              Fast respon
            </p>
            <p className="">
              {BRAND_ITEM.hours.days}
            </p>
            <p className="">
              {BRAND_ITEM.hours.time}
            </p>
          </div>
        </section> */}

        {/* FAQ */}
        <section className="mt-24 flex flex-col">
          <header className="py-4 flex flex-col items-center text-center">
            <h1 className="font-serif text-rose text-5xl/12">
              FAQs
            </h1>
            <p className="text-xs max-w-30 text-inksoft">
              pertanyaan yang sering aku dapat dari klien-klienku
            </p>
          </header>
          <ul className="accordion-list flex flex-col gap-3">
            {FAQs.map((item, idx) => (
              <li key={idx} className="accordion-item px-3 bg-rose/15 rounded">
              <h2 className="item-header flex">
                <Button as="button" className="rounded-none text-sm/3.5 font-medium w-full flex justify-between px-0 py-6 bg-transparent! text-ink">
                  <span>{item.q}</span>
                    <div className="icon text-xs/3">{`\u2716`}</div>
                </Button>
              </h2>
              <p className="item-text text-sm/3.5 text-inksoft pb-3">{item.a}</p>
            </li>
            ))}
          </ul>
        </section>

      </main>
      <Footer />
    </>
  )
}