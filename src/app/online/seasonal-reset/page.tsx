
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SeasonalResetHero from "@/components/online/seasonal-reset/SeasonalResetHero";
import SeasonalResetDetails from "@/components/online/seasonal-reset/SeasonalResetDetails";

const seasons = {
  Spring: {
    label: "FRÜHLINGS-EDITION · AB MÄRZ",
    title: "Leichtigkeit und neue Anfänge",
    description: [
      "Frische, leichtere Mahlzeiten und milde Gewürze.",
      "Neue Energie und Raum für neue Gewohnheiten.",
    ],
    symbol: "✿",
    accent: "#C14C38",
  },
  Summer: {
    label: "SOMMER-EDITION · AB JUNI",
    title: "Kühle und harmonische Balance",
    description: [
      "Kühlende Lebensmittel und erfrischende Alltagsroutinen.",
      "Mehr Leichtigkeit, Erholung und achtsame Bewegung.",
    ],
    symbol: "☼",
    accent: "#DFC24D",
  },
  Autumn: {
    label: "HERBST-EDITION · AB SEPTEMBER",
    title: "Erdung und stärkende Ernährung",
    description: [
      "Warme Mahlzeiten und erdende saisonale Gewürze.",
      "Beständige Routinen und beruhigende Abendrituale.",
    ],
    symbol: "❋",
    accent: "#C14C38",
  },
  Winter: {
    label: "WINTER-EDITION · AB DEZEMBER",
    title: "Wärme und beständige Energie",
    description: [
      "Nahrhafte Eintöpfe und wärmende Gewürze.",
      "Mehr Zeit für Erholung und stille Reflexion.",
    ],
    symbol: "✳",
    accent: "#DFC24D",
  },
};

type Season = keyof typeof seasons;

const schedule = [
  {
    time: "Vor Beginn",
    title: "Wählen Sie Ihre Jahreszeit",
    description:
      "Saisonaler Fragebogen und Dosha-Test. Anschließend erhalten Sie Ihre Einkaufsliste, abgestimmt auf Ihren Typ und die jeweilige Jahreszeit.",
  },
  {
    time: "Tag 1",
    title: "Auftaktberatung",
    description:
      "45 Minuten per Video mit Lakshani sowie das Begrüßungsvideo zur jeweiligen Jahreszeit.",
  },
  {
    time: "Tage 1–2",
    title: "Vorbereitung",
    description: "Leichtere Ernährung und Vorbereitung Ihrer täglichen Routine.",
  },
  {
    time: "Tage 3–5",
    title: "Die eigentliche Reset-Phase",
    description:
      "Der saisonale Ernährungsplan, ein tägliches Video und ein Abendritual.",
  },
  {
    time: "Tage 6–7",
    title: "Zurück in den Alltag",
    description: "Kehren Sie mit Ihren neuen Gewohnheiten zu Ihrer gewohnten Ernährung zurück.",
  },
  {
    time: "Die ganze Woche",
    title: "Chat mit Lakshani",
    description:
      "Stellen Sie Fragen jederzeit über Ihr persönliches Gästeportal.",
  },
  {
    time: "Tag 7",
    title: "Abschlussberatung",
    description:
      "45 Minuten zur gemeinsamen Reflexion Ihrer Woche sowie Ihr persönlicher Plan für die nächsten vier Wochen.",
  },
];

const inclusions = [
  ["2 Beratungen", "Jeweils 45 Minuten mit Lakshani"],
  ["7 tägliche Videos", "Abgestimmt auf Ihre Jahreszeit"],
  ["Ernährungsplan für Ihren Typ", "Vata, Pitta oder Kapha, passend zur Jahreszeit"],
  ["Einkaufsliste", "Abgestimmt auf Ihren Typ und die Jahreszeit"],
  ["15 saisonale Rezepte", "Einfache, wärmende oder kühlende Gerichte"],
  ["Rituale", "Morgen- und Abendrituale passend zur Jahreszeit"],
  ["Chat mit Lakshani", "Die ganze Woche über in Ihrem Gästeportal"],
  ["Plan für die nächsten 4 Wochen", "Damit Sie Ihre Balance bewahren"],
];

const lessons = [
  ["Willkommen in Ihrer Jahreszeit", "5 Min."],
  ["Vorbereitung auf die Woche", "6 Min."],
  ["Tag 1–2: Vorbereitung", "Je 9 Min."],
  ["Tag 3–5: Die eigentliche Reset-Phase", "Je 10 Min."],
  ["Tag 6–7: Zurück in den Alltag", "Je 8 Min."],
  ["Saisonales Ritual", "10 Min."],
  ["Ihr Tipp für Ihr Dosha", "3 Min."],
];

const faqs = [
  {
    question: "Welche Jahreszeit kann ich buchen?",
    answer:
      "Die Edition der jeweiligen Jahreszeit wird einige Wochen vor deren Beginn freigeschaltet. Sie können jede Jahreszeit einzeln buchen.",
  },
  {
    question: "Wie viel Zeit benötige ich täglich?",
    answer: "Etwa 45–60 Minuten zuzüglich der Zeit zum Kochen.",
  },
  {
    question: "Findet der Chat über WhatsApp statt?",
    answer:
      "Nein. Der Chat findet in Ihrem persönlichen Gästeportal statt, damit Ihre Angaben geschützt bleiben.",
  },
  {
    question: "Kann ich zusätzliche Beratungen buchen?",
    answer:
      "Ja – das Programm Deep Reset 7 Tage umfasst dieses Programm mit insgesamt 4 Beratungen und kostet €349.",
  },
  {
    question: "Erhalten Mitglieder einen Rabatt?",
    answer: "Ja: 5 % mit der Mitgliedschaft und 10 % mit der Premium-Mitgliedschaft.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
        {children}
      </p>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-sm font-bold text-[#2F5D39]">
      ✓
    </span>
  );
}

export default function SeasonalResetPage() {
  const [selectedSeason, setSelectedSeason] = useState<Season>("Winter");

  const currentSeason = seasons[selectedSeason];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* Main hero */}
      <SeasonalResetHero />

      {/* Who it is for and why it works */}
      <SeasonalResetDetails />

      {/* Choose your season */}
      <section id="season-editions" className="relative overflow-hidden bg-[#EFE9D9]">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#D8D0A9]/60" />
        <div className="pointer-events-none absolute -right-20 top-20 h-56 w-56 rounded-full border border-[#D8D0A9]/50" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Vier saisonale Editionen</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Wählen Sie Ihre Jahreszeit
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Jede Jahreszeit bringt ihren eigenen Rhythmus mit sich. Entdecken
              Sie die Edition, die zu Ihren Bedürfnissen passt, und erfahren
              Sie mehr über ihre Schwerpunkte.
            </p>
          </div>

          {/* Season selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {(Object.keys(seasons) as Season[]).map((season) => {
              const isSelected = selectedSeason === season;

              return (
                <button
                  key={season}
                  type="button"
                  onClick={() => setSelectedSeason(season)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-6 py-3 text-sm font-medium transition duration-300 ${
                    isSelected
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-lg shadow-[#21452B]/10"
                      : "border-[#D8D0A9] bg-[#F8F5E8] text-[#52665C] hover:border-[#2F5D39] hover:text-[#21452B]"
                  }`}
                >
                  {{
                    Spring: "Frühling",
                    Summer: "Sommer",
                    Autumn: "Herbst",
                    Winter: "Winter",
                  }[season]}
                </button>
              );
            })}
          </div>

          {/* Selected edition panel */}
          <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#21452B] text-[#F8F5E8] shadow-xl shadow-[#21452B]/10">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#DFC24D]/20" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-44 w-44 rounded-full border border-[#DFC24D]/20" />

            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:p-12">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#DFC24D]/35 bg-white/[0.05] font-serif text-3xl text-[#DFC24D]">
                  {currentSeason.symbol}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
                  {currentSeason.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  {currentSeason.title}
                </h3>
              </div>

              <div>
                <p className="mb-5 text-sm leading-7 text-white/70">
                  Diese Edition konzentriert sich auf saisonale Ernährung,
                  unterstützende Routinen und einfache Rituale, die Sie in
                  Ihren Alltag integrieren können.
                </p>

                <div className="space-y-3">
                  {currentSeason.description.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/15 text-sm text-[#DFC24D]">
                        ✓
                      </span>
                      <p className="text-sm leading-6 text-white/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3.5 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
                >
                  Programm entdecken
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-[#6B705C]">
            Die saisonale Verfügbarkeit und die Starttermine werden bei der Buchung bestätigt.
          </p>
        </div>
      </section>

      {/* Step-by-step schedule */}
      <section className="relative bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <SectionEyebrow>Ihre Reise</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              So läuft Ihr Neustart ab
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C] sm:text-base">
              Vom ersten Fragebogen bis zur Abschlussberatung ist jeder
              Schritt darauf ausgerichtet, Sie dabei zu unterstützen,
              das Programm sicher und in Ihrem eigenen Tempo umzusetzen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {schedule.map((item, index) => (
              <article
                key={`${item.time}-${item.title}`}
                className="group flex gap-5 rounded-[24px] border border-[#D8D0A9]/70 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-lg hover:shadow-[#21452B]/5 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#21452B] font-serif text-lg text-[#DFC24D] transition-colors group-hover:bg-[#2F5D39]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A6115]">
                    {item.time}
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-[#21452B] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Everything included and lessons */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          {/* Inclusions */}
          <div>
            <SectionEyebrow>Mit Sorgfalt zusammengestellt</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Alles inklusive
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Persönliche Begleitung und praktische Materialien unterstützen
              Sie während Ihres saisonalen Neustarts – vom Anfang bis zum Ende.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {inclusions.map(([title, description]) => (
                <article
                  key={title}
                  className="flex gap-3 rounded-[20px] border border-[#D8D0A9]/60 bg-[#F8F5E8] p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#21452B]/5"
                >
                  <CheckIcon />

                  <div>
                    <h3 className="text-sm font-semibold text-[#21452B]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-6 text-[#6B705C]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Lesson library */}
          <div>
            <SectionEyebrow>Einblick in Ihr Programm</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Ihre Videobibliothek
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Kurze Lektionen und saisonale Anwendungen helfen Ihnen dabei,
              eine Routine aufzubauen, die sich gut in Ihren Alltag integrieren lässt.
            </p>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-[#D8D0A9]/70 bg-[#F8F5E8] px-5 sm:px-6">
              {lessons.map(([title, duration], index) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 py-4 ${
                    index !== lessons.length - 1
                      ? "border-b border-[#D8D0A9]/70"
                      : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xs font-semibold text-[#2F5D39]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="flex-1 text-sm leading-6 text-[#263A2B]">
                    {title}
                  </span>

                  <span className="shrink-0 rounded-full bg-[#EFE9C5] px-2.5 py-1.5 text-xs font-medium text-[#52665C]">
                    {duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8D0A9]/70 bg-white/60 p-4">
              <span className="text-lg text-[#9A6115]" aria-hidden="true">
                ✧
              </span>

              <p className="text-xs leading-6 text-[#6B705C]">
                Nach der Buchung werden die Lektionen täglich nach und nach
                freigeschaltet. Ihr Ernährungsplan und die Tipps werden auf
                Ihre Konstitution und die jeweilige Jahreszeit abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

     
{/* Guide profile */}
<section className="bg-[#F8F5E8]">
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
    <div className="relative overflow-hidden rounded-[28px] bg-[#21452B] p-7 text-[#F8F5E8] sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
      <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#DFC24D]/20" />

      <div className="relative grid items-center gap-8 sm:grid-cols-[180px_1fr] sm:gap-10 lg:grid-cols-[220px_1fr]">
        {/* Lakshani's portrait */}
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#DFC24D]/50 bg-[#2F5D39] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
          <Image
            src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/founder.webp"
            alt="Lakshani Perera – Ayurveda-Gesundheitsberaterin und Gründerin von Purana Ayurveda"
            fill
            priority
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 208px"
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
            Ihre Begleiterin
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl text-[#DFC24D]">
            Lernen Sie Lakshani Perera kennen
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
            Lakshani ist Ayurveda-Gesundheitsberaterin und Gründerin
            von Purana Ayurveda. Sie ist mit Ayurveda in ihrer
            sri-lankischen Familie aufgewachsen und begleitet jeden
            Neustart persönlich – auf Deutsch oder Englisch.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
              Persönliche Begleitung
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
              Deutsch und Englisch
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
              Sri-lankischer Ayurveda
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* Frequently asked questions */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <SectionEyebrow>Gut zu wissen</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Häufig gestellte Fragen
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              Hilfreiche Antworten, die Ihnen die Wahl Ihres saisonalen
              Programms erleichtern.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#D8D0A9]/70 bg-[#F8F5E8] p-5 transition-colors open:border-[#DFC24D] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold text-[#21452B] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8E8D7] text-xs text-[#2F5D39]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8D0A9] text-lg font-normal text-[#2F5D39] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="ml-[52px] mt-4 max-w-2xl text-sm leading-7 text-[#6B705C]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-[#6B705C]">
            Unsere Programme unterstützen Ihr Wohlbefinden durch ayurvedische
            Ernährung, Routinen und Selbstfürsorge. Sie stellen keine
            medizinische Behandlung dar und ersetzen weder eine ärztliche
            Beratung noch eine medizinische Behandlung.
          </p>
        </div>
      </section>

      {/* Final booking CTA */}
      <section
        id="booking"
        className="bg-[#F8F5E8] px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#DFC24D]/20" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Ihr nächster Schritt
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl text-[#DFC24D]">
                Finden Sie Ihre saisonale Balance.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Sieben Tage mit saisonaler Begleitung, persönlichen
                Beratungen und praktischen Routinen, die Sie in Ihren
                Alltag integrieren können.
              </p>

              <p className="mt-5 font-serif text-2xl text-[#DFC24D]">
                Saisonaler Neustart · €229
              </p>

              <p className="mt-2 text-xs leading-6 text-white/65">
                Mitgliederrabatt: 5 % mit der Mitgliedschaft und 10 % mit
                der Premium-Mitgliedschaft.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-8 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Neustart buchen
                <span aria-hidden="true">→</span>
              </a>

           
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
