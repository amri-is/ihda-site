import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { BRAND_ITEM } from "@/constants/brand"

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

export default function About() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 pb-16 pt-6">
        {/* Hero */}
        <section className="max-w-sm">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-rose mt-4">
            About me
          </p>
          <h1 className="font-serif text-5xl/12 max-w-3xl mt-2">
            Hai, aku{' '}
            <span className="font-curvy text-[3.5rem] font-black text-rose">
              Ihda.
            </span>
          </h1>
          <p className="text-base/4.5 text-inksoft max-w-md mt-4">
            MUA di {BRAND_ITEM.city} yang bikin kamu tampil paling nyaman jadi
            dirimu sendiri, di hari yang spesial.
          </p>
        </section>

        <section className="-mx-4" aria-label={`Foto ${BRAND_ITEM.firstName}`}>
          <img
            src={BRAND_ITEM.photos.hero}
            alt={`${BRAND_ITEM.firstName}, MUA di ${BRAND_ITEM.city}`}
            className="aspect-4/5 w-full object-cover"
          />
          <p className="px-4 pt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
            {BRAND_ITEM.name}: ruang kecil di {BRAND_ITEM.city}, dibuat untuk kamu
            dan cerita di baliknya.
          </p>
        </section>

        {/* Story */}
        <section className="-mx-1" aria-label="Ceritaku">
          <p className="font-serif font-semibold text-inksoft text-5xl/12 max-w-3xl mt-2">
            Awalnya cuma buat{' '}
            <span className="text-rose font-curvy text-[3.5rem] font-black">diri sendiri.</span>
          </p>
        </section>

        <section className="grid grid-cols-[0.8fr_1fr] items-end gap-4" aria-label="Awal mula">
          <p className="pb-2 text-sm text-inksoft self-start">
            Aku mulai makeup buat kebutuhan sendiri. Lama-lama sadar, yang paling
            aku suka bukan hasilnya di cermin, tapi momen orang lain lihat
            dirinya dan tiba-tiba jadi lebih PD.
          </p>
          <img
            src={BRAND_ITEM.photos.story}
            alt={`${BRAND_ITEM.firstName} merias klien`}
            className="aspect-3/4 w-full object-cover object-center"
          />
        </section>

        <section className="grid gap-4 border-l-2 border-rose pl-4" aria-label="Perjalanan">
          <p className="font-serif text-2xl">
            2024: mulai buka bisnis.
          </p>
          <p className="max-w-sm text-sm text-inksoft">
            Nggak mulus. Banyak rintangan di awal, tapi orang-orang terdekat
            selalu ada buat support. Itu yang bikin aku sampai di titik ini.
          </p>
          <p className="max-w-sm text-sm text-inksoft">
            Aku mulai sebagai asisten MUA seorang senior, lalu didorong buat
            berdiri sendiri supaya makin berkembang. Di jalan, aku ketemu
            kakak-kakak MUA yang mau berbagi ilmu. Sampai sekarang aku masih
            suka belajar hal baru, terutama lewat collab.
          </p>
        </section>

        {/* Philosophy */}
        <section className="-mx-1" aria-label="Gaya makeup">
          <p className="font-serif font-semibold text-inksoft text-5xl/12 max-w-3xl mt-2">
            Soft. Clean. {" "}
            <span className="font-curvy text-[3.5rem] font-black text-rose">
              Fresh.
            </span>
          </p>
          <p className="mt-6 max-w-xs text-sm text-inksoft">
            Makeup yang bagus itu yang bikin <span className="text-ink">keunikanmu</span> keluar.
            Misal matamu sayu tapi pipimu cantik? Pipinya aku maksimalin, jadi
            ciri khasmu.
          </p>
        </section>

        {/* Stats */}
        <section className="border border-dashed border-inksoft px-3 py-5" aria-label="Angka">
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
          {/* <div className="mt-7 border-t border-line pt-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-inksoft">
              Tersertifikasi
            </p>
            <p className="mt-2 font-serif text-lg">
              Sertifikat <span className="text-rose">{BRAND_ITEM.certificate.by}</span>
            </p>
            {BRAND_ITEM.certificate.image && (
              <img
                src={BRAND_ITEM.certificate.image}
                alt={`Sertifikat ${BRAND_ITEM.certificate.by}`}
                className="mt-4 w-full object-cover"
              />
            )}
          </div> */}
        </section>

        {/* Why choose me */}
        <section className="border border-dashed border-inksoft px-3 py-4" aria-labelledby="why-title">
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
        </section>

        {/* Testimonials */}
        <section aria-label="Testimoni">
          <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-rose">
            Kata mereka
          </p>
          <div className="flex flex-col gap-4">
            {BRAND_ITEM.testimonials.map((t, i) => (
              <figure key={i} className="border border-dashed border-inksoft px-3 py-4">
                <blockquote className="font-serif text-xl">{t.text}</blockquote>
                <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
                  {t.name}, {t.occasion}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section aria-label="Galeri">
          <div className="grid grid-cols-2 gap-2">
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
          <p className="pt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-inksoft">
            Graduation, family bride, bridesmaid.
          </p>
        </section>

        {/* Personal */}
        <section className="-mx-1" aria-label="Di luar makeup">
          <p className="font-serif text-[3.2rem] font-semibold text-inksoft">
            Di luar makeup, aku <span className="text-rose">naik gunung.</span>
          </p>
          <p className="mt-6 max-w-xs text-sm text-inksoft">
            Aku suka ketemu orang baru, dan workaholic parah. Tapi pas di kursi
            rias, kamu dapat perhatian penuhku.
          </p>
          {/* <p className="mt-6 max-w-xs font-serif text-2xl">
            Orang sering kaget: ternyata aku itu <span className="text-rose">teges.</span>{' '}
            Bukan tegas, ya.
          </p> */}
        </section>

        {/* CTA */}
        <section className="border border-dashed border-inksoft px-3 py-5" aria-labelledby="cta-title">
          <p className="font-serif text-2xl" id="cta-title">
            Yuk, ngobrol dulu.
          </p>
          <p className="mt-4 max-w-xs text-sm text-inksoft">
            Ceritain acaramu dan bayangan look-mu. Sisanya kita rapihin bareng.
          </p>
          <div className="mt-7 grid grid-cols-2 grid-rows-2 gap-3">
            <Button
              href={BRAND_ITEM.wa}
              target="_blank"
              rel="noreferrer"
              className="bg-rose px-4 py-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white col-span-2 w-full rounded-none"
            >
              Chat via WhatsApp
            </Button>
            <Button
              href={BRAND_ITEM.mua}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-4 py-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.16em] w-full rounded-none bg-transparent text-ink"
            >
              Instagram makeup
            </Button>
            <Button
              href={BRAND_ITEM.hairdo}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-4 py-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.16em] w-full rounded-none bg-transparent text-ink"
            >
              Instagram hairdo
            </Button>
          </div>
          <div className="mt-7 flex items-end justify-between gap-4 border-t border-line pt-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-inksoft">
              Fast respon
            </p>
            <p className="text-right font-serif text-lg text-rose">
              {BRAND_ITEM.hours.days}
              <br />
              {BRAND_ITEM.hours.time}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}