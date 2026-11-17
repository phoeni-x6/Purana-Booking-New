
const retreatCategories = [
  {
    number: "01",
    title: "Retreats in Deutschland",
    description: "Mini-Retreats im Chalet · Retreats in ganz Deutschland",
    href: "#germany",
    accent: "Deutschland",
  },
  {
    number: "02",
    title: "Retreats & Panchakarma in Sri Lanka",
    description: "Panchakarma · von uns organisierte Retreats",
    href: "#sri-lanka",
    accent: "Sri Lanka",
  },
];

export default function RetreatsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#21452B]">
      {/* Hintergrundbild */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Warmer cremefarbener Farbverlauf */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 20%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.78) 58%, rgba(245,240,231,0.30) 80%, rgba(245,240,231,0.12) 100%)",
        }}
      />

      {/* Cremefarbener Verlauf am unteren Rand */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#f5f0e7] via-[#f5f0e7]/80 to-transparent"
      />

      {/* Dekorative Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full border border-[#2F5D39]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 -z-10 h-[400px] w-[400px] rounded-full border border-dashed border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 -z-10 h-[400px] w-[400px] rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      {/* Hero-Inhalt */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24 lg:pb-16 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Hauptinhalt */}
          <div className="relative z-10">
            {/* Kleine Überschrift */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                Purana Ayurveda Retreats
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Deutschland · Sri Lanka
            </p>

            {/* Hauptüberschrift */}
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-normal leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
              Eine Auszeit für
              <span className="mt-1 block italic text-[#9A8050]">
                Körper und Geist.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#533E23]/85 sm:text-base sm:leading-8">
              Wählen Sie ein Retreat ganz in Ihrer Nähe in Deutschland oder
              reisen Sie nach Sri Lanka, um traditionelles Panchakarma oder
              eines unserer sorgfältig organisierten Retreats zu erleben.
              Entdecken Sie Raum, um zur Ruhe zu kommen, neue Kraft zu schöpfen
              und Ihr inneres Gleichgewicht wiederzufinden.
            </p>

            {/* Retreat-Highlight */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#DFC24D]/15">
                <span className="text-xl text-[#9A8050]">✳</span>
              </div>

              <div>
                <p className="font-serif text-xl text-[#21452B] sm:text-2xl">
                  Zwei Reiseziele
                </p>
                <p className="mt-1 text-xs text-[#6B705C]">
                  Ein Weg zu mehr Wohlbefinden.
                </p>
              </div>
            </div>

            {/* Schaltflächen zu den Reisezielen */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#germany"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#21452B] px-7 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Deutschland entdecken
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#sri-lanka"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/65 px-7 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition-all hover:border-[#21452B] hover:bg-[#EFE9C5]"
              >
                Sri Lanka entdecken
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Infokarte zu den Reisezielen */}
          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-[390px] overflow-hidden rounded-[28px] border border-white/50 bg-[#21452B]/85 p-8 text-[#F8F5E8] shadow-[0_20px_70px_rgba(38,58,43,0.16)] backdrop-blur-md">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#DFC24D]/20"
              />
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#DFC24D]/20"
              />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D]">
                  Finden Sie Ihr Retreat
                </p>

                <h2 className="mt-5 max-w-xs font-serif text-3xl font-normal leading-tight sm:text-4xl">
                  Ein neuer Weg, zu sich selbst zu finden.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#F8F5E8]/75">
                  Von erholsamen Auszeiten in Deutschland bis hin zu
                  traditionellen Ayurveda-Erlebnissen in Sri Lanka – finden Sie
                  den Ort, der sich für Sie richtig anfühlt.
                </p>

                <div className="my-7 h-px bg-[#F8F5E8]/20" />

                <div className="space-y-5">
                  <a
                    href="#germany"
                    className="group flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#DFC24D]">
                        01 · Deutschland
                      </p>
                      <p className="mt-1 font-serif text-xl">
                        Retreats ganz in Ihrer Nähe
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 text-[#DFC24D] transition-all group-hover:bg-[#DFC24D] group-hover:text-[#21452B]">
                      ↗
                    </span>
                  </a>

                  <div className="h-px bg-[#F8F5E8]/15" />

                  <a
                    href="#sri-lanka"
                    className="group flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#DFC24D]">
                        02 · Sri Lanka
                      </p>
                      <p className="mt-1 font-serif text-xl">
                        Panchakarma & Retreats
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 text-[#DFC24D] transition-all group-hover:bg-[#DFC24D] group-hover:text-[#21452B]">
                      ↗
                    </span>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-[#F8F5E8]/20 pt-6">
                  <span className="text-xl text-[#DFC24D]">✳</span>
                  <p className="text-xs tracking-wide text-[#F8F5E8]/65">
                    Tradition · Achtsamkeit · Wohlbefinden
                  </p>
                </div>
              </div>
            </div>

            {/* Dekorativer Akzent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 -z-10 h-28 w-28 rounded-bl-[60px] border-b border-l border-[#C14C38]/50"
            />
          </div>
        </div>

        {/* Links zu den Reisezielen */}
        <div className="relative z-10 mt-16 grid gap-4 border-t border-[#21452B]/15 pt-8 sm:mt-20 sm:grid-cols-2 sm:pt-10">
          {retreatCategories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className="group rounded-2xl border border-[#D8D0A9]/80 bg-[#F8F5E8]/75 p-5 shadow-[0_8px_30px_rgba(38,58,43,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#9A8050]/50 hover:bg-[#F8F5E8] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs tracking-[0.2em] text-[#C14C38]">
                    {category.number}
                  </span>

                  <h2 className="mt-3 font-serif text-xl leading-snug text-[#21452B] transition-colors group-hover:text-[#9A8050] sm:text-2xl">
                    {category.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                    {category.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2F5D39]/25 text-lg text-[#2F5D39] transition duration-300 group-hover:border-[#21452B] group-hover:bg-[#21452B] group-hover:text-[#F8F5E8]">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Akzent am unteren Rand */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
