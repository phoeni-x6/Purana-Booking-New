import type { ReactNode } from "react";
import SteinbergHero from "@/components/retreats/steinberg/SteinbergHero";
import SteinbergTreatments from "@/components/retreats/steinberg/SteinbergTreatments";

const retreatPackages = [
  {
    visits: "3 TERMINE",
    title: "Ayurveda-Retreat – 3 Termine",
    price: "€300",
    oldPrice: "€330",
    steps: [
      {
        label: "Termin 1",
        description: "Beratung (45 Min.) + kurze Behandlungen (30 Min.)",
      },
      {
        label: "Termin 2",
        description: "1,5 Stunden individuelle, auf Sie abgestimmte Behandlungen",
      },
      {
        label: "Termin 3",
        description:
          "1 Stunde individuelle, auf Sie abgestimmte Behandlungen – inklusive eines Ernährungsplans für zu Hause",
      },
    ],
    features: [],
  },
  {
    visits: "4 TERMINE · BEGLEITETE DETOX-KUR FÜR ZU HAUSE",
    title: "Ayurveda-Retreat – 4 Termine",
    price: "€455",
    oldPrice: "€515",
    steps: [
      {
        label: "Termin 1",
        description: "Beratung (45 Min.) + kurze Behandlungen (30 Min.)",
      },
      {
        label: "Termin 2",
        description: "1,5 Stunden individuelle, auf Sie abgestimmte Behandlungen",
      },
      {
        label: "Termin 3",
        description: "1 Stunde individuelle, auf Sie abgestimmte Behandlungen",
      },
      {
        label: "Termin 4",
        description: "1 Stunde Behandlung",
      },
    ],
    features: [
      "Begleitete Detox-Kur für zu Hause mit persönlichen Einzelgesprächen",
      "Während Ihrer gesamten Programmlaufzeit per WhatsApp erreichbar",
      "Ernährungsplan für zu Hause",
    ],
  },
];

const miniRetreats = [
  {
    duration: "3 TAGE · 2 ÜBERNACHTUNGEN",
    tag: "EIN LANGES WOCHENENDE",
    title: "Die sanfte Auszeit",
    subtitle: "Drei Tage, um zur Ruhe zu kommen und neue Kraft zu schöpfen.",
    days: [
      {
        label: "TAG 01",
        title: "Ankommen & entspannen",
        description:
          "Persönliches Beratungsgespräch und eine 30-minütige Behandlung.",
      },
      {
        label: "TAG 02",
        title: "Zurück in Ihren Rhythmus finden",
        description:
          "Private Yoga-Einheit am Morgen in Ihrem Chalet, 1,5 Stunden individuell abgestimmte Ayurveda-Behandlungen und eine abendliche Klangmeditation mit Klangschalen und Mantras.",
      },
      {
        label: "TAG 03",
        title: "Balance mit nach Hause nehmen",
        description:
          "Zum Abschluss erhalten Sie einen ayurvedischen Ernährungsplan und Informationsunterlagen, damit Sie Ihre neue Routine zu Hause fortsetzen können.",
      },
    ],
    price: "€[PRICE]",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/img1.jfif",
  },
  {
    duration: "4 TAGE · 3 ÜBERNACHTUNGEN",
    tag: "EINE INTENSIVERE AUSZEIT",
    title: "Die ausgedehnte Auszeit",
    subtitle:
      "Ein zusätzlicher Tag, um ganz in Ihrem eigenen Rhythmus anzukommen.",
    days: [
      {
        label: "TAG 01",
        title: "Ankommen & entspannen",
        description:
          "Persönliches Beratungsgespräch und eine 30-minütige Behandlung.",
      },
      {
        label: "TAG 02",
        title: "Zurück in Ihren Rhythmus finden",
        description:
          "Private Yoga-Einheit am Morgen in Ihrem Chalet, 1,5 Stunden individuell abgestimmte Ayurveda-Behandlungen und eine abendliche Klangmeditation.",
      },
      {
        label: "TAG 03",
        title: "Zeit für sich selbst finden",
        description:
          "Optionale Yoga-Einheit am Morgen, eine einstündige Ayurveda-Behandlung und eine optionale Meditation am Abend.",
      },
      {
        label: "TAG 04",
        title: "Balance mit nach Hause nehmen",
        description:
          "Zum Abschluss erhalten Sie einen ayurvedischen Ernährungsplan und Informationsunterlagen für Ihre tägliche Routine.",
      },
    ],
    price: "€[PRICE]",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5624.jpeg",
  },
];

const onlineOffers = [
  {
    label: "EINZELBERATUNG",
    title: "Online-Beratung",
    description:
      "Persönliche Begleitung durch Ayurveda-Experten – ganz gleich, wo Sie sich befinden.",
    href: "/online",
    number: "01",
  },
  {
    label: "4-TAGE-PROGRAMM",
    title: "Sanfter Neustart",
    description:
      "Videos, ein Ernährungsplan und praktische Rituale für den Alltag.",
    href: "/online/gentle-reset",
    number: "02",
  },
  {
    label: "7-TAGE-PROGRAMM",
    title: "Saisonaler Neustart",
    description:
      "Saisonale Begleitung, zwei Beratungen und Unterstützung per Chat.",
    href: "/online/seasonal-reset",
    number: "03",
  },
  {
    label: "INDIVIDUELLE BEGLEITUNG",
    title: "Intensiver Neustart",
    description:
      "Ein begleitetes Programm mit zusätzlicher persönlicher Einzelbetreuung.",
    href: "/online/deep-reset",
    number: "04",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A66C4E]">
      {children}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-9 bg-[#C14C38]" />
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>

      <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-[#354B38] sm:text-5xl lg:text-6xl">
        {title}
        <span className="mt-1 block italic text-[#A66C4E]">{accent}</span>
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function SteinbergAmSeePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#514C3D]">
      <SteinbergHero />

      <SteinbergTreatments />

      {/* AYURVEDA-BERATUNG */}
      <section
        id="consultation"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full border border-[#C9B88F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-28 h-56 w-56 rounded-full border border-[#C9B88F]/25"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeading
              eyebrow="Persönliche Ayurveda-Beratung"
              title="Alles beginnt"
              accent="mit Verständnis."
            />

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Im Ayurveda beginnt die richtige Behandlung immer damit,
                den Menschen als Ganzes zu verstehen. Eine persönliche
                Beratung bildet die Grundlage für die Auswahl Ihrer Öle,
                Behandlungen, Ernährung und täglichen Routinen.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-[#68735D]">
                <span>✳ Individuelle Beratung</span>
                <span>✳ Konstitutionsbestimmung</span>
                <span>✳ Persönliche Empfehlungen</span>
              </div>
            </div>
          </div>

          {/* Consultation packages */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {/* Constitution Test */}
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E3D9C6] bg-[#FBF9F2] p-6 shadow-[0_8px_30px_rgba(75,71,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7B58D] hover:shadow-xl sm:p-8 lg:p-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 font-serif text-[150px] leading-none text-[#A66C4E]/[0.07]"
              >
                01
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66C4E]">
                    KONSTITUTIONSBESTIMMUNG
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#354B38] sm:text-3xl">
                    Konstitutionstest
                  </h3>

                  <p className="mt-2 text-sm text-[#8A806C]">
                    Entdecken Sie Ihren Dosha-Typ.
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8C9A7] bg-[#F2EBDD] font-serif text-lg text-[#A66C4E]">
                  01
                </span>
              </div>

              <div className="relative mt-7 flex items-end justify-between border-y border-[#E8E0D1] py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A806C]">
                    Preis pro Beratung
                  </p>
                  <p className="mt-1 font-serif text-4xl text-[#354B38]">
                    €30
                  </p>
                </div>

                <span className="rounded-full border border-[#D8C9A7] bg-[#F2EBDD] px-4 py-2 text-xs font-semibold text-[#596B55]">
                  30 Minuten
                </span>
              </div>

              <div className="relative mt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  WAS SIE ERWARTET
                </p>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  Eine persönliche Beratung zur Bestimmung Ihrer ayurvedischen
                  Konstitution – Ihres individuellen Gleichgewichts der drei
                  Doshas Vata, Pitta und Kapha.
                </p>
              </div>

              <div className="relative mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  SO LÄUFT DIE BERATUNG AB
                </p>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  Wir sprechen über Ihren Körper, Ihre Verdauung, Ihren Schlaf,
                  Ihr Energielevel und Ihre täglichen Gewohnheiten. Gemeinsam
                  betrachten wir Ihre Konstitution. Anschließend erklären wir
                  Ihnen Ihren Dosha-Typ und was dieser für Sie bedeutet.
                </p>
              </div>

              <div className="relative mt-6 rounded-2xl border border-[#E6DDCB] bg-[#F1EBDD] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  VORTEILE AUS AYURVEDISCHER SICHT
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Ihren Körper und seine natürlichen Eigenschaften besser verstehen",
                    "Persönliche Tipps für Ernährung und tägliche Routinen",
                    "Empfehlungen zu Behandlungen und Ölen, die am besten zu Ihnen passen",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-[#596B55]"
                    >
                      <span className="font-bold text-[#8A9A71]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  GEEIGNET FÜR
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                  Ayurveda-Neulinge, neugierige Interessierte und alle, die
                  zukünftige Behandlungen gezielt planen möchten.
                </p>
              </div>

              <div className="relative mt-auto pt-8">
                <a
                  href="/contact?package=Konstitutionstest"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                >
                  Beratung anfragen
                  <ArrowIcon />
                </a>
              </div>
            </article>

            {/* Ayurveda Special Package */}
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D8CFB9] bg-[#F3EEE3] p-6 shadow-[0_8px_30px_rgba(75,71,52,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8A77F] hover:shadow-xl sm:p-8 lg:p-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 font-serif text-[150px] leading-none text-[#A66C4E]/[0.07]"
              >
                02
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66C4E]">
                    BERATUNG & BEHANDLUNGEN
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#354B38] sm:text-3xl">
                    Ayurveda-Spezialpaket
                  </h3>

                  <p className="mt-2 text-sm text-[#8A806C]">
                    Beratung und individuell abgestimmte Therapien.
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8C9A7] bg-[#E9E4D5] font-serif text-lg text-[#A66C4E]">
                  02
                </span>
              </div>

              <div className="relative mt-7 flex items-end justify-between border-y border-[#E1D8C6] py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A806C]">
                    Preis pro Paket
                  </p>
                  <p className="mt-1 font-serif text-4xl text-[#354B38]">
                    €130
                  </p>
                </div>

                <span className="rounded-full border border-[#D8C9A7] bg-[#E9E4D5] px-4 py-2 text-xs font-semibold text-[#596B55]">
                  90 Minuten
                </span>
              </div>

              <div className="relative mt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  WAS SIE ERWARTET
                </p>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  Eine Kombination aus persönlicher Beratung und
                  Konstitutionstest, ergänzt durch einen individuellen
                  Behandlungsplan und gezielte Therapien, die auf Ihren
                  persönlichen Konstitutionstyp abgestimmt sind.
                </p>
              </div>

              <div className="relative mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  SO LÄUFT DAS PAKET AB
                </p>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  Im Anschluss an die Beratung erstellen wir einen individuellen
                  Plan, der auf Ihre persönlichen Anliegen abgestimmt ist.
                  Danach beginnen wir direkt mit geeigneten Behandlungen und
                  verwenden Öle, die zu Ihrer Konstitution passen.
                </p>
              </div>

              <div className="relative mt-6 rounded-2xl border border-[#E1D8C6] bg-[#E9E4D5] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  VORTEILE AUS AYURVEDISCHER SICHT
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Betrachtet die möglichen Ursachen eines Ungleichgewichts, nicht nur die Symptome",
                    "Individuell auf Ihren Dosha-Typ abgestimmte Behandlungen",
                    "Ein klarer Behandlungsplan, den Sie zu Hause fortsetzen können",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-[#596B55]"
                    >
                      <span className="font-bold text-[#8A9A71]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                  GEEIGNET BEI
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                  Individuellen Anliegen wie Gelenkschmerzen, Migräne,
                  Erschöpfung oder hormonellen Ungleichgewichten.
                </p>
              </div>

              <div className="relative mt-auto pt-8">
                <a
                  href="/contact?package=Ayurveda-Spezialpaket"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                >
                  Spezialpaket anfragen
                  <ArrowIcon />
                </a>
              </div>
            </article>
          </div>

          {/* Medical notice */}
          <div className="mt-8 flex gap-4 rounded-[22px] border border-[#E3D9C6] bg-[#F1EBDD] p-5 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E2E7D9] text-[#3F6048]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 11v5m0-8h.01"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <div>
              <p className="text-sm font-semibold text-[#354B38]">
                Wichtiger Hinweis vor Ihrer Buchung
              </p>
              <p className="mt-1 text-xs leading-6 text-[#6B705C] sm:text-sm">
                Bitte informieren Sie uns bei der Buchung über bestehende
                gesundheitliche Beschwerden, Erkrankungen oder die Einnahme
                von Medikamenten. So können wir Ihre Beratung und Behandlungen
                bestmöglich auf Ihre persönliche Situation abstimmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALET-INFORMATIONEN */}
      <section className="bg-[#F1EBDD] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E1D7C4] bg-[#E9E4D5]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#B99B61]/30"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#B99B61]/20"
            />

            <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
              <div className="max-w-2xl">
                <Eyebrow>Erweitern Sie Ihr Ayurveda-Erlebnis</Eyebrow>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#354B38] sm:text-4xl lg:text-5xl">
                  Entdecken Sie Ihren
                  <span className="block italic text-[#A66C4E]">
                    Ort zum Entspannen.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
                  Sie suchen einen ruhigen Ort für Ihren Aufenthalt während
                  Ihrer Ayurveda-Auszeit? Entdecken Sie unser Chalet, erfahren
                  Sie mehr über die Unterkunft und informieren Sie sich über
                  die Ausstattung und Ihren Aufenthalt.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#596B55] sm:text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    Entspannung
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    Komfortable Unterkunft
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    Weitere Informationen zu Ihrem Aufenthalt
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:min-w-52 lg:flex-col">
                <a
                  href="/chalets"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#3F6048] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                >
                  Chalet-Informationen ansehen
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AYURVEDA-RETREATS */}
      <section
        id="retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full border border-[#C9B88F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-28 h-56 w-56 rounded-full border border-[#C9B88F]/25"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeading
              eyebrow="Option 02 · Ayurveda-Retreat"
              title="Ein wenig mehr Zeit"
              accent="für Ihre innere Balance."
            />

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Eine persönliche Ayurveda-Auszeit, verteilt auf mehrere
                Termine. Genießen Sie individuelle Behandlungen, achtsame
                Begleitung und praktische Routinen, die Sie zu Hause
                fortsetzen können.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-[#68735D]">
                <span>✳ Individuelle Betreuung</span>
                <span>✳ Mehrere Termine</span>
                <span>✳ Praktische Begleitung</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {retreatPackages.map((retreat, index) => (
              <article
                key={retreat.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E3D9C6] bg-[#FBF9F2] p-6 shadow-[0_8px_30px_rgba(75,71,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7B58D] hover:shadow-xl sm:p-8 lg:p-9"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-8 font-serif text-[150px] leading-none text-[#A66C4E]/[0.07]"
                >
                  0{index + 1}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66C4E]">
                      {retreat.visits}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-[#354B38] sm:text-3xl">
                      {retreat.title}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8C9A7] bg-[#F2EBDD] font-serif text-lg text-[#A66C4E]">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-8 border-t border-[#E8E0D1]">
                  {retreat.steps.map((step, stepIndex) => (
                    <div
                      key={step.label}
                      className="grid grid-cols-[36px_1fr] gap-3 border-b border-[#E8E0D1] py-4 sm:grid-cols-[42px_1fr] sm:gap-4"
                    >
                      <div className="relative flex justify-center">
                        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#E9E4D5] text-[10px] font-bold text-[#506A50]">
                          {stepIndex + 1}
                        </span>

                        {stepIndex !== retreat.steps.length - 1 && (
                          <span className="absolute top-7 h-full w-px bg-[#D8C9A7]" />
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#A66C4E]">
                          {step.label}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-[#6B705C]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {retreat.features.length > 0 && (
                  <div className="relative mt-5 rounded-2xl border border-[#E6DDCB] bg-[#F1EBDD] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                      In Ihrer Auszeit enthalten
                    </p>

                    <ul className="mt-4 space-y-3">
                      {retreat.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-5 text-[#596B55]"
                        >
                          <span className="font-bold text-[#8A9A71]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="relative mt-auto mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[#E8E0D1] pt-7">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A806C]">
                      Preis des Programms
                    </p>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-serif text-3xl text-[#354B38] sm:text-4xl">
                        {retreat.price}
                      </span>
                      <span className="text-sm text-[#A49B88] line-through">
                        {retreat.oldPrice}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/contact?package=${encodeURIComponent(retreat.title)}`}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3F6048] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                  >
                    Jetzt anfragen
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-[#E3D9C6] bg-[#F1EBDD] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-semibold text-[#354B38]">
                Eine Auszeit ganz nach Ihren Wünschen.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#777765]">
                Kontaktieren Sie uns, um die Programmdetails zu besprechen
                und das passende Angebot für Ihre Bedürfnisse zu finden.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#3F6048] underline decoration-[#C7A96B] underline-offset-4 hover:text-[#A66C4E]"
            >
              Sprechen Sie mit unserem Team
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* PRIVATE MINI-RETREATS */}
      <section
        id="mini-retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#EFE9DC] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full border border-[#C9B88F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-48 h-52 w-52 rounded-full border border-[#C9B88F]/25"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8C9A7] bg-[#F8F5EC] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A66C4E]" />
                <Eyebrow>Option 03 · Privates Retreat mit Übernachtung</Eyebrow>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-[1.12] text-[#354B38] sm:text-5xl lg:text-6xl">
                Lassen Sie den
                <span className="block italic text-[#A66C4E]">
                  Alltag hinter sich.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Wohnen Sie in Ihrem privaten Chalet in Steinberg am See.
                Nehmen Sie sich Zeit für wohltuende Behandlungen, optionales
                Yoga, entspannende Rituale und das schöne Gefühl, einmal
                nirgendwo anders sein zu müssen.
              </p>

              <a
                href="/chalets"
                className="group mt-5 inline-flex items-center gap-3 rounded-full border border-[#9EAD91] bg-[#F8F5EC]/70 px-5 py-3.5 text-sm font-semibold text-[#3F6048] transition-all hover:bg-white"
              >
                Chalet Resort entdecken
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Höhepunkte Ihres Aufenthalts */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                number: "01",
                title: "Privates Chalet",
                text: "Ihr persönlicher Rückzugsort",
              },
              {
                number: "02",
                title: "Ayurveda-Betreuung",
                text: "Individuelle Behandlungen",
              },
              {
                number: "03",
                title: "Sanfte Bewegung",
                text: "Optionales privates Yoga",
              },
              {
                number: "04",
                title: "Ruhige Momente",
                text: "Zeit zum Innehalten",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E2D8C5] bg-[#F8F5EC] p-4 transition-transform hover:-translate-y-1 sm:p-5"
              >
                <p className="font-serif text-2xl text-[#B18A4D]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-[#455B45]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#777765]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mini-Retreat-Karten */}
          <div className="mt-9 grid gap-7 lg:grid-cols-2">
            {miniRetreats.map((retreat, index) => (
              <article
                key={retreat.title}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E1D8C6] bg-[#FBF9F3] shadow-[0_8px_30px_rgba(75,71,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden bg-[#DCD5C1] sm:h-72">
                  <img
                    src={retreat.image}
                    alt={`${retreat.title} – privates Ayurveda-Retreat`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26372B]/65 via-[#26372B]/5 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-[#F8F5EC]/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#455B45] backdrop-blur-sm">
                    {retreat.tag}
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 font-serif text-sm text-white backdrop-blur-sm">
                    0{index + 1}
                  </div>

                  <div className="absolute inset-x-5 bottom-6 sm:inset-x-7 sm:bottom-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F0D99D]">
                      {retreat.duration}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                      {retreat.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      {retreat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tagesablauf */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="relative">
                    {retreat.days.map((day, dayIndex) => (
                      <div
                        key={day.label}
                        className={`grid grid-cols-[58px_1fr] gap-3 sm:grid-cols-[68px_1fr] sm:gap-4 ${
                          dayIndex !== retreat.days.length - 1 ? "pb-7" : ""
                        }`}
                      >
                        <div className="relative flex justify-center">
                          {dayIndex !== retreat.days.length - 1 && (
                            <span className="absolute top-8 h-full w-px bg-[#D8C9A7]" />
                          )}

                          <span
                            className={`relative z-10 flex h-8 w-12 items-center justify-center rounded-full text-[9px] font-bold tracking-wide sm:w-14 ${
                              dayIndex === 0
                                ? "bg-[#E5E9DD] text-[#3F6048]"
                                : "border border-[#DED4C1] bg-[#F3EEE3] text-[#8A806C]"
                            }`}
                          >
                            {day.label}
                          </span>
                        </div>

                        <div className="pt-1">
                          <h4 className="text-sm font-semibold text-[#455B45]">
                            {day.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-[#777765]">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Preis des Pakets */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E6DDCB] bg-[#F1EBDD] p-4 sm:p-5">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A806C]">
                          Preis für Ihre Auszeit
                        </p>
                        <p className="mt-1 font-serif text-3xl text-[#455B45]">
                          {retreat.price}
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-[#8A806C]">
                          Endpreis und enthaltene Leistungen werden noch
                          bestätigt
                        </p>
                      </div>

                      <a
                        href={`/contact?package=${encodeURIComponent(`${retreat.title} – ${retreat.duration}`)}`}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3F6048] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                      >
                        Aufenthalt anfragen
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#85816F]">
            Bitte informieren Sie sich vor Beginn der Buchungen über die
            bestätigten Retreat-Preise, enthaltenen Unterkunftsleistungen,
            Verfügbarkeiten und optionalen Aktivitäten.
          </p>
        </div>
      </section>

      {/* AYURVEDA ONLINE */}
      <section
        id="online-at-home"
        className="scroll-mt-20 bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeading
              eyebrow="Setzen Sie Ihren Weg zu Hause fort"
              title="Ayurveda"
              accent="im Alltag erleben."
            />

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Entdecken Sie Ayurveda auch von zu Hause aus – mit Online-
                Beratungen und begleiteten Programmen, die sich flexibel in
                Ihren Alltag integrieren lassen.
              </p>

              <a
                href="/online"
                className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
              >
                Online-Angebote entdecken
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {onlineOffers.map((offer) => (
              <a
                key={offer.title}
                href={offer.href}
                className="group flex min-h-[220px] flex-col rounded-[24px] border border-[#E4DCCB] bg-[#FBF9F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8C4AC] hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A806C]">
                    {offer.label}
                  </span>
                  <span className="font-serif text-xl text-[#B18A4D]">
                    {offer.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-[#455B45]">
                  {offer.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#777765]">
                  {offer.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#3F6048]">
                  Mehr entdecken
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#85816F]">
            Ermäßigungen für Mitglieder sind möglicherweise verfügbar.
            Bitte informieren Sie sich über die aktuellen
            Mitgliedschaftsbedingungen und Programmdetails.
          </p>
        </div>
      </section>

      {/* STANDORT UND KONTAKT */}
      

      {/* ABSCHLIESSENDER CALL-TO-ACTION */}
      <section className="bg-[#F7F3EA] px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#E2D8C5] bg-[#E9E4D5] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full border border-[#C7B58D]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-36 h-96 w-96 rounded-full border border-[#C7B58D]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F5EC]/70 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#C14C38]" />
              <Eyebrow>Ihr Ayurveda-Erlebnis beginnt hier</Eyebrow>
              <span className="h-px w-7 bg-[#C14C38]" />
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#354B38] sm:text-4xl lg:text-5xl">
              Schaffen Sie Raum für
              <span className="block italic text-[#A66C4E]">
                ein wenig mehr Balance.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Entdecken Sie unsere Behandlungen und Retreats oder kontaktieren
              Sie uns, um das passende Erlebnis für Ihren Aufenthalt in
              Steinberg am See zu finden.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#individual-treatments"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
              >
                Behandlungen entdecken
                <ArrowIcon />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#9EAD91] bg-[#F8F5EC]/70 px-6 py-4 text-sm font-semibold text-[#455B45] transition-colors hover:bg-white"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}6