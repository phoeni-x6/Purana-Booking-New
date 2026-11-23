
import type { Metadata } from "next";
import TreatmentSeries from "@/components/TreatmentSeries";

export const metadata: Metadata = {
  title: "Pakete & Behandlungsserien | Purana Ayurveda",
  description:
    "Entdecken Sie unsere ayurvedischen Behandlungspakete und monatlichen Massageangebote bei Purana Ayurveda. Machen Sie regelmäßige Selbstfürsorge zu einem Teil Ihres Lebens.",
};

const benefits = [
  {
    title: "Balance, bevor Ungleichgewicht entsteht",
    text: "Stress, Wetter, Jahreszeiten und Ernährung beeinflussen ständig Ihre Doshas. Eine monatliche Behandlung hilft dabei, das Gleichgewicht zu bewahren, bevor kleinere Ungleichgewichte zu Beschwerden werden.",
    symbol: "✳",
  },
  {
    title: "Wirkung entfaltet sich mit der Zeit",
    text: "Die wohltuende Wirkung pflanzlicher Öle auf Haut, Gewebe und Nervensystem kann sich mit jeder Behandlung weiter entfalten.",
    symbol: "❋",
  },
  {
    title: "Förderung der Durchblutung",
    text: "Regelmäßige Massagen unterstützen die Blut- und Lymphzirkulation und helfen dabei, alltägliche Verspannungen zu lösen.",
    symbol: "◉",
  },
  {
    title: "Der Körper lernt zu entspannen",
    text: "Mit jeder Behandlung gewöhnt sich Ihr Nervensystem mehr an tiefe Ruhe und Entspannung.",
    symbol: "☼",
  },
  {
    title: "Im Einklang mit den Jahreszeiten",
    text: "Monatliche Behandlungen ermöglichen es uns, Öle und Therapien an die wechselnden Jahreszeiten und Ihre individuellen Bedürfnisse anzupassen.",
    symbol: "❀",
  },
  {
    title: "Zeit für sich selbst",
    text: "Ein regelmäßiger Termin wird zu einem wertvollen Ritual der Selbstfürsorge und schenkt Ihnen Zeit, wieder zu sich selbst zu finden.",
    symbol: "♡",
  },
];

function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="90" cy="90" r="77" stroke="currentColor" strokeWidth=".7" />
      <circle cx="90" cy="90" r="63" stroke="currentColor" strokeWidth=".7" />

      <path
        d="M90 145C89 117 76 91 52 72C33 57 29 35 47 24C67 13 87 37 90 60C93 37 113 13 133 24C151 35 147 57 128 72C104 91 91 117 90 145Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      <path
        d="M90 145V59M90 101C75 77 57 59 42 48M90 101C105 77 123 59 138 48"
        stroke="currentColor"
        strokeWidth=".8"
      />

      <path
        d="M90 17V7M90 173V163M17 90H7M173 90H163"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function PackagesSeriesPage() {
  return (
    <main className="overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#21452B] text-[#EFE9C5]">
        <div className="absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border border-white/[0.07]" />
        <div className="absolute -right-16 -top-24 h-[470px] w-[470px] rounded-full border border-white/[0.07]" />
        <div className="absolute bottom-[-180px] left-[38%] h-[450px] w-[450px] rounded-full bg-[#DFC24D]/[0.04] blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-20 md:min-h-[720px] md:grid-cols-[1.2fr_.8fr] md:px-12">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#DFC24D]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DFC24D]">
                Die Kunst der regelmäßigen Selbstfürsorge
              </p>
            </div>

            <h1 className="font-serif text-5xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-6xl md:text-7xl lg:text-[82px]">
              Wohlbefinden ist
              <br />
              kein Luxus.
              <br />
              <span className="italic text-[#DFC24D]">
                Es ist ein Ritual.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-8 text-white/70 md:text-base">
              Ayurveda steht vor allem für Vorbeugung und ganzheitliche
              Gesundheit. Entdecken Sie unsere sorgfältig zusammengestellten
              Behandlungspakete und machen Sie Ausgeglichenheit, Pflege und
              Entspannung zu einem festen Bestandteil Ihres Alltags.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#offers"
                className="group inline-flex items-center gap-6 rounded-full bg-[#DFC24D] px-7 py-4 text-xs font-bold text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
              >
                UNSERE ANGEBOTE ENTDECKEN
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <span className="text-xs tracking-wide text-white/50">
                Ein wenig Zeit nur für Sie.
              </span>
            </div>
          </div>

          {/* DECORATIVE HERO ARTWORK */}
          <div className="relative hidden h-[480px] items-center justify-center md:flex">
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[#EFE9C5]/20" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-[#EFE9C5]/20" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-[#DFC24D]/40" />

            <BotanicalMark className="relative z-10 h-[280px] w-[280px] text-[#DFC24D]/80" />

            <div className="absolute right-0 top-12 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[9px] uppercase tracking-[0.22em] text-[#EFE9C5]">
              Geist · Körper · Balance
            </div>

            <div className="absolute bottom-12 left-0 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[9px] uppercase tracking-[0.22em] text-[#DFC24D]">
              Traditionelles Ayurveda
            </div>

            <div className="absolute right-16 bottom-24 h-3 w-3 rounded-full bg-[#DFC24D]" />
            <div className="absolute left-16 top-24 h-2 w-2 rounded-full bg-[#DFC24D]/70" />
          </div>

          <div className="absolute bottom-7 right-8 hidden text-[9px] tracking-[0.3em] text-white/30 md:block">
            PURANA AYURVEDA · WOHLBEFINDEN & BALANCE
          </div>
        </div>
      </section>

      {/* MONTHLY CARE INTRO */}
      <section className="relative px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  01
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  Der ayurvedische Ansatz
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-[1.2] text-[#21452B] md:text-6xl">
                Regelmäßige Pflege.
                <br />
                <span className="italic text-[#C14C38]">
                  Nachhaltige Balance.
                </span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-0 h-full w-px bg-[#D8D0A9] md:-left-8" />

              <p className="font-serif text-xl leading-relaxed text-[#21452B] md:text-2xl">
                Ayurveda ist vor allem präventiv: Das erste Ziel ist es,
                die Gesundheit zu erhalten.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#6B705C]">
                Stress, wechselnde Jahreszeiten, Ernährung und der Alltag
                beeinflussen ständig unsere Doshas. Regelmäßige ayurvedische
                Behandlungen helfen dabei, das innere Gleichgewicht zu
                erhalten, bevor kleinere Ungleichgewichte zu Beschwerden
                werden.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#6B705C]">
                Deshalb empfehlen wir, sich einmal im Monat bewusst Zeit
                für eine ayurvedische Behandlung zu nehmen.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#533E23]">
                <span className="text-lg text-[#C14C38]">✳</span>
                Machen Sie Selbstfürsorge zu einem Ritual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative bg-[#EFE9C5]/50 px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  02
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  Warum einmal im Monat?
                </span>
              </div>

              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#21452B] md:text-5xl">
                Sechs gute Gründe für
                <br />
                <span className="italic text-[#C14C38]">
                  regelmäßige Selbstfürsorge.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6B705C]">
              Kleine Momente der Fürsorge können einen großen Unterschied
              machen. Schenken Sie Ihrem Körper die Aufmerksamkeit und
              Beständigkeit, die er verdient.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#D8D0A9] bg-[#D8D0A9] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group relative min-h-[275px] bg-[#F8F5E8] p-8 transition duration-300 hover:bg-[#21452B] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C14C38] transition group-hover:text-[#DFC24D]">
                    0{index + 1}
                  </span>

                  <span className="text-2xl text-[#C14C38] transition duration-300 group-hover:rotate-45 group-hover:text-[#DFC24D]">
                    {benefit.symbol}
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-xl text-[#21452B] transition group-hover:text-[#EFE9C5] md:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6B705C] transition group-hover:text-white/65">
                  {benefit.text}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#DFC24D] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section
        id="offers"
        className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  03
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  Pakete & Behandlungsserien
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-[#21452B] md:text-6xl">
                Finden Sie Ihren Weg
                <br />
                zu <span className="italic text-[#C14C38]">mehr Wohlbefinden.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6B705C]">
              Beginnen Sie mit einer persönlichen Einführung in die
              Ayurveda-Lehre oder integrieren Sie regelmäßige Behandlungen
              in Ihre persönliche Wellness-Routine.
            </p>
          </div>

          {/* AYURVEDA START PACKAGE */}
          <article className="relative mb-24 overflow-hidden bg-[#21452B] text-[#EFE9C5]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/[0.08]" />
            <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white/[0.08]" />

            <div className="relative grid md:grid-cols-[0.8fr_1.2fr]">
              {/* VISUAL SIDE */}
              <div className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden border-b border-white/10 p-8 md:min-h-[600px] md:border-b-0 md:border-r">
                <p className="absolute left-8 top-8 text-[9px] font-bold uppercase tracking-[0.25em] text-[#DFC24D]">
                  Ein bewusster erster Schritt
                </p>

                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#DFC24D]/50 outline outline-1 outline-offset-[12px] outline-[#DFC24D]/20 md:h-64 md:w-64">
                  <div className="absolute inset-3 rounded-full border border-[#EFE9C5]/20" />

                  <div className="text-center">
                    <span className="block font-serif text-8xl leading-none text-[#DFC24D] md:text-9xl">
                      3
                    </span>

                    <span className="mt-3 block text-[9px] font-bold tracking-[0.3em] text-[#EFE9C5]/70">
                      TERMINE
                    </span>
                  </div>
                </div>

                <p className="mt-10 max-w-xs text-center font-serif text-xl italic text-[#EFE9C5]/80">
                  Ihre Reise zu mehr Balance beginnt hier.
                </p>

                <span className="absolute bottom-7 right-8 text-xs tracking-widest text-[#DFC24D]/60">
                  ✳
                </span>
              </div>

              {/* DETAILS SIDE */}
              <div className="relative p-7 md:p-12 lg:p-14">
                <span className="inline-block border border-[#DFC24D]/50 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#DFC24D]">
                  IDEAL FÜR EINSTEIGER
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#EFE9C5] md:text-4xl lg:text-5xl">
                  Ayurveda-
                  <br />
                  Einstiegspaket
                </h3>

                <p className="mt-4 text-sm text-white/60">
                  Drei Termine, um Ayurveda kennenzulernen.
                </p>

                <div className="my-8 h-px bg-white/15" />

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFC24D]">
                  Das ist enthalten
                </p>

                <div className="space-y-6">
                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      01
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Ayurvedische Beratung
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        Konstitutionstest · 30 Minuten
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      02
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Individuell abgestimmte Behandlung
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        60-minütige Behandlung basierend auf Ihrer Beratung
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      03
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Zweite Behandlung
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        Eine weitere 60-minütige, individuell abgestimmte Behandlung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 h-px bg-white/15" />

                <p className="text-xs leading-6 text-white/55">
                  Drei Termine, beispielsweise an drei aufeinanderfolgenden
                  Tagen oder verteilt über mehrere Wochen.
                </p>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <p className="text-xs text-white/50 line-through">
                      200 €
                    </p>

                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-serif text-5xl text-[#DFC24D]">
                        185 €
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-[#EFE9C5]/65">
                      Sie sparen 15 €
                    </p>
                  </div>

                  <span className="rounded-full border border-[#DFC24D]/50 px-5 py-3 text-[10px] font-bold tracking-widest text-[#DFC24D]">
                    15 € SPAREN
                  </span>
                </div>

                {/* BOOKING BUTTON */}
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="group inline-flex w-full items-center justify-center gap-5 rounded-full bg-[#DFC24D] px-7 py-4 text-xs font-bold tracking-wide text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5] sm:w-auto"
                  >
                    JETZT ANFRAGEN & BUCHEN
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* FOUR-SESSION TREATMENT SERIES COMPONENT */}
          <TreatmentSeries />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#21452B] px-6 py-24 text-center md:py-32">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full border border-white/[0.08]" />
        <div className="absolute -right-28 -bottom-28 h-96 w-96 rounded-full border border-white/[0.08]" />

        <div className="relative mx-auto max-w-2xl">
          <BotanicalMark className="mx-auto mb-8 h-20 w-20 text-[#DFC24D]/70" />

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DFC24D]">
            Ihre Zeit. Ihre Balance.
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#EFE9C5] md:text-6xl">
            Machen Sie Wohlbefinden
            <br />
            <span className="italic text-[#DFC24D]">
              zu einem Lebensstil.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-white/65">
            Ihre Reise zu mehr Ausgeglichenheit beginnt mit einem einzigen
            Termin. Entdecken Sie die passende Behandlung und das richtige
            Paket für Ihre individuellen Bedürfnisse.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-6 rounded-full bg-[#DFC24D] px-8 py-4 text-xs font-bold tracking-wide text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
          >
            KONTAKTIEREN & TERMIN VEREINBAREN
            <span>↗</span>
          </a>

          <p className="mt-12 font-serif text-sm italic text-white/40">
            Nehmen Sie sich Zeit. Finden Sie Ihre Balance.
          </p>
        </div>
      </section>
    </main>
  );
}
