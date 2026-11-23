
import Image from "next/image";

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0e7] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C14C38]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C14C38] sm:text-xs">
                Besondere Wege, Ayurveda zu erleben
              </p>
            </div>

            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Etwas ganz Besonderes,
              <span className="block italic text-[#9A8050]">
                für Sie oder einen lieben Menschen.
              </span>
            </h2>
          </div>

          <span className="hidden font-serif text-4xl italic text-[#533E23]/30 sm:block">
            Purana
          </span>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Gift vouchers */}
          <article
            id="vouchers"
            className="group relative isolate flex min-h-[480px] overflow-hidden rounded-[28px] bg-[#21452B] sm:min-h-[540px]"
          >
            <Image
              src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/img2.jfif"
              alt="Entspannende Atmosphäre in einem Wellness-Spa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Image fades */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#172F20] via-[#21452B]/65 to-[#21452B]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#21452B]/35 via-transparent to-transparent" />

            {/* Decorative details */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-110"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 h-44 w-44 rounded-full border border-dashed border-[#DFC24D]/40"
            />

            <div className="relative z-10 flex w-full flex-col items-start p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#DFC24D]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DFC24D] sm:text-xs">
                  Geschenkgutscheine
                </p>
              </div>

              <div className="mt-auto max-w-lg pt-24">
                <span className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  Ein Geschenk für Ihr Wohlbefinden
                </span>

                <h3 className="font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  Schenken Sie
                  <span className="block italic text-[#DFC24D]">
                    innere Balance.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                  Schenken Sie einem besonderen Menschen einen Moment der
                  Entspannung und Fürsorge. Wählen Sie eine Ayurveda-
                  Behandlung, einen Retreat-Aufenthalt oder einen Gutschein
                  über einen Wunschbetrag.
                </p>

                <a
                  href="https://www-2561o.bookeo.com/bookeo/b_purana-ayurveda_start.html?buyvoucher=true&ctlsrc2=DMN%2FyXIEBKjegsIxEeYZTMdTMnhAADaJ%2B%2Bi16V%2BSXVQ%3D&src=02j&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacNP3B0yxx75XnARss6yViC6kuYDE077wnP4J7genivS47bDhDjK_xGQbOxLA_aem_BkNiGKDUCzm4bx1opuYOTQ"
                  className="group/link mt-8 inline-flex min-h-12 items-center gap-5 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
                >
                  Geschenkgutscheine entdecken
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>

              <span className="absolute right-10 top-10 font-serif text-5xl italic text-white/50">
                01
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
