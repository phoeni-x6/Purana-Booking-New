
const locations = [
  {
    name: "Steinberg am See",
    category: "DAS ERLEBNIS AM SEE",
    description:
      "Individuelle Behandlungen, private Mini-Retreats und erholsame Auszeiten in einer idyllischen Umgebung direkt am See.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/DSC_7227_auswahl.jpg",
    number: "01",
    tagline: "Zur Ruhe kommen. Zu sich finden.",
    features: [
      "Persönliche Ayurveda-Behandlungen",
      "Private Mini-Retreats",
      "Eine entspannende Naturlandschaft",
    ],
    href: "/retreats/steinberg-am-see",
  },
  {
    name: "Marktredwitz",
    category: "INDIVIDUELLE BETREUUNG",
    description:
      "Ayurveda-Behandlungen in Zusammenarbeit mit einer örtlichen Physiotherapiepraxis – mit persönlicher Betreuung bei jedem Besuch.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/Marktredwitz.jpg",
    number: "02",
    tagline: "In guten Händen.",
    features: [
      "Individuelle Terminvereinbarungen",
      "Persönliche Betreuung vor Ort",
      "Bequeme Behandlungen in Ihrer Nähe",
    ],
    href: "/retreats/marktredwitz",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative scroll-mt-24 overflow-hidden bg-[#f5f0e7] py-24 sm:py-28 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full border border-[#DFC24D]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 h-[440px] w-[440px] rounded-full border border-dashed border-[#2F5D39]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full border border-[#DFC24D]/20"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section introduction */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C14C38]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C14C38]">
                Entdecken Sie Purana
              </p>
              <span className="text-sm text-[#DFC24D]">✳</span>
            </div>

            <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-[#21452B] sm:text-6xl lg:text-7xl">
              Zwei Standorte.
              <span className="mt-3 block italic text-[#A47B25]">
                Ein Gefühl von Balance.
              </span>
            </h2>
          </div>

          <div className="relative pb-2 lg:pl-8">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#DFC24D] to-transparent lg:block" />

            <p className="max-w-md text-sm leading-8 text-[#6B705C] sm:text-base">
              Entdecken Sie wohltuende Ayurveda-Angebote in Deutschland –
              von erholsamen Auszeiten am See bis hin zu individuellen
              Behandlungen ganz in Ihrer Nähe.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Unsere Standorte entdecken
            </div>
          </div>
        </div>

        {/* Framed location cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => (
            <article
              key={location.number}
              className="group relative border border-[#A47B25]/50 bg-[#EFE9C5]/30 p-2 transition-all duration-500 hover:-translate-y-1 hover:border-[#2F5D39]/60 hover:shadow-[0_20px_50px_rgba(33,69,43,0.10)] sm:p-3"
            >
              {/* Inner decorative frame */}
              <div className="pointer-events-none absolute inset-3 border border-[#A47B25]/20 sm:inset-4" />

              {/* Image */}
              <div className="relative isolate h-[340px] overflow-hidden bg-[#533E23] sm:h-[410px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${location.image}')`,
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#21452B]/95 via-[#21452B]/30 to-[#21452B]/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21452B]/30 to-transparent"
                />

                {/* Image border */}
                <div className="pointer-events-none absolute inset-5 border border-white/35 transition-all duration-700 group-hover:inset-7 sm:inset-7" />

                {/* Image top details */}
                <div className="absolute left-10 right-10 top-10 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">
                    PURANA AYURVEDA
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#21452B]/20 text-xl text-[#DFC24D] backdrop-blur-sm transition-transform duration-500 group-hover:rotate-45">
                    ✳
                  </span>
                </div>

                {/* Background number */}
                <span className="pointer-events-none absolute right-8 top-20 select-none font-serif text-[130px] italic leading-none text-white/[0.13] sm:text-[170px]">
                  {location.number}
                </span>

                {/* Image bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-9 sm:p-12">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#DFC24D]" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DFC24D]">
                      {location.category}
                    </p>
                  </div>

                  <h3 className="max-w-lg font-serif text-4xl italic leading-tight text-white sm:text-5xl">
                    {location.tagline}
                  </h3>

                  <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/75">
                    <span className="h-px w-7 bg-white/60" />
                    {location.name}
                  </div>
                </div>
              </div>

              {/* Card information */}
              <div className="relative px-5 pb-6 pt-8 sm:px-8 sm:pb-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A47B25]">
                      {location.number} / Standort
                    </p>

                    <h3 className="mt-2 font-serif text-3xl text-[#21452B] sm:text-4xl">
                      {location.name}
                    </h3>
                  </div>

                  <span className="font-serif text-5xl italic text-[#DFC24D]/70">
                    {index === 0 ? "A" : "B"}
                  </span>
                </div>

                <p className="mt-5 max-w-lg text-sm leading-8 text-[#6B705C]">
                  {location.description}
                </p>

                {/* Features */}
                <div className="my-7 border-t border-[#D8D0A9] pt-6">
                  <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#533E23]/60">
                    Das erwartet Sie
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {location.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 font-serif text-lg italic text-[#C14C38]">
                          0{featureIndex + 1}
                        </span>

                        <span className="text-xs leading-6 text-[#533E23]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4 border-t border-[#D8D0A9] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6B705C]">
                    Entdecken Sie diesen Standort
                  </span>

                  <a
                    href={location.href}
                    className="group/link inline-flex min-h-12 items-center justify-center gap-5 bg-[#21452B] px-6 py-3 text-xs font-semibold text-[#EFE9C5] transition-all duration-300 hover:bg-[#2F5D39]"
                  >
                    Standort entdecken

                    <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-2">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Corner accents */}
              <span className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#C14C38]" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#C14C38]" />
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}
