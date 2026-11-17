
const suitability = [
  "Sie bemerken den Jahreszeitenwechsel an Ihrer Energie, Ihrem Schlaf oder Ihrer Stimmung",
  "Sie haben bereits einen sanften Neustart gemacht und möchten tiefer in den Ayurveda eintauchen",
  "Sie wünschen sich einen Jahresrhythmus mit einer Auszeit zu jeder Jahreszeit",
  "Sie schätzen persönliche Unterstützung während des gesamten Programms",
  "Sie können sich täglich 45–60 Minuten Zeit nehmen",
];

const benefits = [
  {
    number: "01",
    symbol: "✳",
    title: "Im Einklang mit den Jahreszeiten",
    description:
      "Ernährung, Routinen und Rituale passen sich an Frühling, Sommer, Herbst und Winter an.",
  },
  {
    number: "02",
    symbol: "✧",
    title: "Zwei persönliche Beratungen",
    description:
      "Ein individueller Plan zu Beginn und ein gemeinsames Rückblickgespräch zum Abschluss.",
  },
  {
    number: "03",
    symbol: "♡",
    title: "Begleitung die ganze Woche",
    description: "Schreiben Sie Lakshani direkt über Ihr persönliches Portal.",
  },
  {
    number: "04",
    symbol: "❋",
    title: "Ein Plan für die Zeit danach",
    description: "Zum Abschluss haben Sie einen klaren Plan für die nächsten vier Wochen.",
  },
];

export default function SeasonalResetDetails() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5E8]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full border border-[#D8D0A9]/50" />
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#D8D0A9]/40" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        {/* Who it is for */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Für wen ist das Programm geeignet?
            </p>
          </div>

          <h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
            Ist dieser Neustart das Richtige für Sie?
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C] sm:text-base">
            Mehr persönliche Begleitung, ein intensiverer Rhythmus im Einklang
            mit den Jahreszeiten und Unterstützung beim Aufbau von Gewohnheiten,
            die zu Ihrem Alltag passen.
          </p>

          <ul className="mt-8 space-y-4">
            {suitability.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[#D8D0A9]/60 bg-white/70 p-4 transition duration-300 hover:border-[#DFC24D] hover:bg-white sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-sm font-semibold text-[#DFC24D]">
                  {index + 1}
                </span>

                <span className="pt-1 text-sm leading-6 text-[#263A2B]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#EFE9C5]/70 p-5">
            <span className="text-xl text-[#9A6115]" aria-hidden="true">
              ✧
            </span>
            <p className="text-sm leading-6 text-[#52665C]">
              Der saisonale Neustart richtet sich an Menschen, die
              Selbstfürsorge zu einem festen Bestandteil ihres Lebens im
              Wandel der Jahreszeiten machen möchten.
            </p>
          </div>
        </div>

        {/* Why it works */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Was das Programm besonders macht
            </p>
          </div>

          <h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
            Was dieses Programm auszeichnet
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C] sm:text-base">
            Mehr als ein siebentägiges Programm: ein persönlicher Ansatz,
            der sich an die jeweilige Jahreszeit anpasst und Ihnen hilft,
            die nächsten Schritte zu planen.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-[24px] border border-[#D8D0A9]/70 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#21452B]/5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8E8D7] font-serif text-2xl text-[#2F5D39] transition-colors group-hover:bg-[#EFE9C5]">
                    {benefit.symbol}
                  </span>

                  <span className="font-serif text-sm text-[#9A6115]/70">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-snug text-[#21452B]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  {benefit.description}
                </p>

                <div className="mt-5 h-px w-10 bg-[#DFC24D] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
