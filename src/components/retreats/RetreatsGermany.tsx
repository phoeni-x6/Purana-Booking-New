
const miniRetreats = [
  {
    duration: "3 TAGE · 2 NÄCHTE · PRIVAT",
    title: "Mini-Retreat – 3 Tage",
    description:
      "Beratung und Behandlung bei der Ankunft, ein ganzer Ayurveda-Tag mit privater Yoga-Einheit in Ihrem Chalet und abendlicher Klangmeditation sowie ein Ayurveda-Ernährungsplan für zu Hause.",
    price: "€[PRICE]",
    number: "01",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/Germany/germany_retreats.webp",
    imageAlt: "Ruhige Umgebung für ein erholsames Wellness-Retreat",
    highlight: "Ein sanfter Einstieg",
  },
  {
    duration: "4 TAGE · 3 NÄCHTE · PRIVAT",
    title: "Mini-Retreat – 4 Tage",
    description:
      "Alle Leistungen des 3-Tage-Retreats sowie ein zusätzlicher Tag mit optionalem Yoga, einer einstündigen Ayurveda-Behandlung und optionaler Abendmeditation.",
    price: "€[PRICE]",
    number: "02",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Steinberg/DSC_7270_auswahl.jpg",
    imageAlt: "Entspannendes Spa- und Wellness-Erlebnis",
    highlight: "Mehr Zeit, um zu sich zu finden",
  },
];

const retreatTypes = [
  "Rasayana-Retreats",
  "Detox-Retreats",
  "Erneuerungs-Retreats",
];

const otherRetreats = ["[Retreat name]", "[Retreat name]"];

export default function RetreatsGermany() {
  return (
    <section
      id="germany"
      className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]"
    >
      {/* Dekorativer Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 h-64 w-64 rounded-full border border-dashed border-[#DFC24D]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[500px] h-96 w-96 rounded-full bg-[#EFE9C5]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Einführung in den Bereich */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                01 · Retreats in Deutschland
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Entdecken Sie Ihr Retreat
            </p>

            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Ayurveda-Retreats
              <span className="mt-1 block italic text-[#9A8050]">
                ganz in Ihrer Nähe.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#6B705C] sm:text-base">
              Von privaten Mini-Retreats im Chalet Resort Steinberg am See bis
              hin zu Gruppen-Retreats an ausgewählten, wunderschönen Orten in
              ganz Deutschland. Jedes Retreat verbindet individuell abgestimmte
              Ayurveda-Behandlungen mit Yoga, Meditation und praktischen
              Impulsen für Ihren Alltag. So kehren Sie mit neuer Energie und
              einem klaren Plan für Ihr inneres Gleichgewicht nach Hause zurück.
            </p>
          </div>

          {/* Besonderer Akzent zur Einführung */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#EFE9C5]/55 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#2F5D39]/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-dashed border-[#DFC24D]/40"
            />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-xl text-[#DFC24D]">
                  ✳
                </div>

                <div>
                  <p className="font-serif text-xl text-[#21452B] sm:text-2xl">
                    Finden Sie Ihre Balance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                    Zeit für traditionelles Ayurveda, achtsame Bewegung und
                    wohltuende Momente in einer wunderschönen Umgebung.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {retreatTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8] px-3.5 py-2 text-xs font-medium text-[#2F5D39]"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Private Mini-Retreats */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C14C38]">
                Ihre private Auszeit
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Mini-Retreats im Chalet Resort
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6B705C]">
              Wählen Sie die Aufenthaltsdauer, die zu Ihrer Zeit und Ihren
              Bedürfnissen passt.
            </p>
          </div>

          {/* Retreat-Karten mit Bildern */}
          <div className="grid gap-6 lg:grid-cols-2">
            {miniRetreats.map((retreat) => (
              <article
                key={retreat.number}
                className="group relative isolate flex min-h-[540px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#21452B] shadow-[0_15px_50px_rgba(38,58,43,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(38,58,43,0.18)]"
              >
                {/* Hintergrundbild */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${retreat.image}')`,
                  }}
                />

                {/* Dunkelgrüner Farbverlauf */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#162E20] via-[#21452B]/75 to-[#21452B]/20"
                />

                {/* Dezente Bildüberlagerung */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[#263A2B]/10 mix-blend-multiply"
                />

                {/* Oberer Kartenbereich */}
                <div className="relative flex items-start justify-between gap-4 p-6 sm:p-8">
                  <div className="rounded-full border border-white/25 bg-[#F8F5E8]/10 px-4 py-2 backdrop-blur-md">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8F5E8]">
                      {retreat.duration}
                    </span>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#21452B]/20 font-serif text-sm text-[#DFC24D] backdrop-blur-sm">
                    {retreat.number}
                  </span>
                </div>

                {/* Karteninhalt */}
                <div className="relative mt-auto p-6 sm:p-8">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                    {retreat.highlight}
                  </p>

                  <h4 className="max-w-md font-serif text-3xl leading-tight text-[#F8F5E8] sm:text-4xl">
                    {retreat.title}
                  </h4>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#F8F5E8]/80">
                    {retreat.description}
                  </p>

                  <div className="my-7 h-px bg-[#F8F5E8]/20" />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8F5E8]/60">
                        Retreat-Preis
                      </p>
                      <p className="mt-1 font-serif text-3xl text-[#DFC24D]">
                        {retreat.price}
                      </p>
                    </div>

                    <a
                      href="/contact"
                      className="group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#F8F5E8]"
                    >
                      Tagesablauf entdecken
                      <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Chalet-Informationen und Kontakt */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/chalets"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21452B]/25 bg-[#F8F5E8]/60 px-6 py-3 text-sm font-semibold text-[#21452B] transition hover:border-[#21452B] hover:bg-[#EFE9C5]"
            >
              Informationen zum Chalet Resort
              <span aria-hidden="true">↗</span>
            </a>

           
          </div>
        </div>

        
        </div>
      
      {/* Unterer Markenakzent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
