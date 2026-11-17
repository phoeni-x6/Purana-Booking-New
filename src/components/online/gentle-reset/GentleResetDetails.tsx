
const suitability = [
  "Sie sind neu im Ayurveda und wünschen sich einen sanften, begleiteten Einstieg",
  "Sie fühlen sich nach arbeitsreichen Wochen, Urlaub oder einem Jahreszeitenwechsel müde oder belastet",
  "Sie möchten eine sanfte Auszeit zu Hause ausprobieren – ganz ohne Fasten",
  "Sie können sich täglich 30–45 Minuten Zeit nehmen, auch neben dem Beruf",
  "Sie wünschen sich persönliche Begleitung und nicht nur ein PDF",
];

const benefits = [
  {
    title: "Kein Fasten",
    description:
      "Drei warme, einfache Mahlzeiten am Tag – ein Neustart, der sich in eine normale Woche integrieren lässt.",
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M4 11h16M6 11v3a6 6 0 0 0 12 0v-3M8 7c0-2 2-2 2-4M14 7c0-2 2-2 2-4" />
      </svg>
    ),
  },
  {
    title: "Auf Ihren Konstitutionstyp abgestimmt",
    description:
      "Ernährungsplan, Einkaufsliste und Tipps werden auf Ihre Konstitution abgestimmt.",
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 21s-7-4.4-7-11V5l7-2 7 2v5c0 6.6-7 11-7 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Persönlich begleitet",
    description:
      "Sie beginnen mit einem 45-minütigen Gespräch mit Lakshani.",
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0M19 4v4M17 6h4" />
      </svg>
    ),
  },
  {
    title: "Gewohnheiten, die bleiben",
    description:
      "Kleine tägliche Rituale, die Sie auch nach den vier Tagen beibehalten können.",
    number: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12Z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/20 text-[#21452B]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

export default function GentleResetDetails() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-28 h-48 w-48 rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Suitability */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
                Ist das Richtige für Sie?
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
              Ein sanfter Anfang,
              <span className="mt-1 block italic text-[#9A7821]">
                in Ihrem eigenen Tempo.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#6B705C]">
              Das Programm „Sanfter Neustart“ erleichtert Ihnen den Einstieg
              in den Ayurveda – auf eine zugängliche, praktische Weise und
              passend zu Ihrem Alltag.
            </p>

            <div className="mt-7 rounded-[28px] border border-[#D8D0A9] bg-white/75 p-5 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A7821]">
                Dieses Programm könnte zu Ihnen passen, wenn …
              </p>

              <ul className="mt-5 space-y-5">
                {suitability.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="flex-1 text-sm leading-6 text-[#405640]">
                      {item}
                    </span>
                    <span className="pt-1 font-serif text-xs text-[#B7B69A]">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#EFE9C5]/60 p-4">
                <span className="mt-0.5 text-[#9A7821]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5M12 7h.01" />
                  </svg>
                </span>
                <p className="text-xs leading-5 text-[#6B705C]">
                  Sie müssen nicht alles auf einmal verändern. Im Mittelpunkt
                  stehen kleine, begleitete Schritte, die sich in Ihren
                  Alltag integrieren lassen.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#DFC24D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
                Was den sanften Neustart auszeichnet
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
              Einfach gestaltet.
              <span className="mt-1 block italic text-[#9A7821]">
                Persönlich begleitet.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#6B705C]">
              Praktische Materialien und persönliche Begleitung helfen
              Ihnen dabei, das Programm Schritt für Schritt in Ihren
              Alltag zu integrieren.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-[24px] border border-[#D8D0A9]/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2F5D39]/40 hover:shadow-lg hover:shadow-[#21452B]/5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFE9C5] text-[#21452B] transition group-hover:bg-[#DFC24D]/30">
                      {benefit.icon}
                    </span>

                    <span className="font-serif text-2xl text-[#D8D0A9] transition group-hover:text-[#DFC24D]">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl text-[#21452B]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                    {benefit.description}
                  </p>

                  <div className="mt-5 h-1 w-8 rounded-full bg-[#2F5D39] transition-all duration-300 group-hover:w-14" />
                </article>
              ))}
            </div>

            {/* Closing highlight */}
            <div className="relative mt-5 overflow-hidden rounded-[24px] bg-[#21452B] p-6 text-white sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10"
              />

              <div className="relative flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/15 text-[#DFC24D]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 21s-7-4.4-7-11V5l7-2 7 2v5c0 6.6-7 11-7 11Z" />
                    <path d="M12 7v10M8 12h8" />
                  </svg>
                </span>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Vier Tage. Kleine Schritte. Neue Perspektiven.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Beginnen Sie mit persönlicher Begleitung und entdecken
                    Sie einfache Routinen, die Sie auch nach dem Programm
                    weiterführen können.
                  </p>

                  <a
                    href="#programmes"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#DFC24D] transition hover:text-[#E9D477]"
                  >
                    Den sanften Neustart entdecken
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
