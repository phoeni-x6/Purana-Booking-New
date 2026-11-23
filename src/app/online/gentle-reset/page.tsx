
import Link from "next/link";
import GentleResetHero from "@/components/online/gentle-reset/GentleResetHero";
import GentleResetDetails from "@/components/online/gentle-reset/GentleResetDetails";

const schedule = [
  {
    time: "Nach der Buchung",
    title: "Fragebogen und Willkommenspaket",
    description:
      "Ein kurzer Fragebogen und der Dosha-Test. Anschließend erhalten Sie Ihre persönliche Einkaufsliste und ein Vorbereitungsvideo.",
  },
  {
    time: "Tag 1",
    title: "Ihre Beratung mit Lakshani",
    description:
      "45 Minuten per Video: Ihre Konstitution, Ihre Ziele und kleine Anpassungen Ihres persönlichen Plans.",
  },
  {
    time: "Tag 1–4",
    title: "Jeden Morgen ein neues Video",
    description:
      "8–12 Minuten zu den Schwerpunkten des Tages, Ihrer täglichen Routine und passenden Mahlzeiten sowie einem Tipp für Ihr Dosha.",
  },
  {
    time: "Tag 1–5",
    title: "Ihr 5-Tage-Ernährungsplan",
    description:
      "Einfache, warme Mahlzeiten mit passenden Rezeptkarten. Am fünften Tag gelingt Ihnen der sanfte Übergang zurück zu Ihrer gewohnten Ernährung.",
  },
  {
    time: "Jeden Abend",
    title: "10 Minuten zum Entspannen",
    description:
      "Atemübungen oder eine kurze Selbstmassage, um den Tag in Ruhe ausklingen zu lassen.",
  },
  {
    time: "Im Anschluss",
    title: "Machen Sie weiter",
    description:
      "Ihr Merkblatt mit Alltagstipps und eine Einladung, mit dem Seasonal Reset oder einer Mitgliedschaft weiterzumachen.",
  },
];

const inclusions = [
  ["Persönliche Beratung", "45 Minuten per Video mit Lakshani"],
  ["4 tägliche Videos", "Die Schwerpunkte des Tages, Routinen und Ernährung"],
  ["5-Tage-Ernährungsplan", "Für Vata, Pitta oder Kapha"],
  ["Einkaufsliste", "Alles, was Sie für Ihren Dosha-Typ benötigen"],
  ["Rezeptkarten", "12–15 einfache Ayurveda-Rezepte"],
  ["Abendrituale", "Audio-Anleitungen zu Atemübungen und Selbstmassage"],
  ["Tipps für den Alltag", "Ein Merkblatt zur Beibehaltung Ihrer neuen Gewohnheiten"],
  ["4 Wochen Zugriff", "Sehen Sie sich die Inhalte jederzeit erneut an"],
];

const lessons = [
  ["Willkommen: So funktioniert Ihr Neustart", "5 Min."],
  ["Vorbereitung Ihrer Küche und Ihrer Woche", "6 Min."],
  ["Ihr Dosha im Alltag", "6 Min."],
  ["Tag 1: Ankommen und zur Ruhe kommen", "10 Min."],
  ["Tag 2: Warme Ernährung und ausgeglichene Energie", "9 Min."],
  ["Tag 3: Leichtigkeit und verdauungsfreundliche Mahlzeiten", "9 Min."],
  ["Tag 4: Ruhe und Selbstreflexion", "8 Min."],
  ["Abendritual: Selbstmassage mit Öl", "10 Min."],
  ["Zurück in den Alltag", "6 Min."],
];

const faqs = [
  {
    question: "Wie viel Zeit benötige ich täglich?",
    answer:
      "Etwa 30–45 Minuten zusätzlich zur Zubereitung Ihrer Mahlzeiten. Die meisten Teilnehmer integrieren das Programm problemlos in ihren Arbeitsalltag.",
  },
  {
    question: "Muss ich fasten?",
    answer: "Nein. Sie essen täglich drei einfache, warme Mahlzeiten.",
  },
  {
    question: "Was ist, wenn ich Allergien habe oder Medikamente einnehme?",
    answer:
      "Informieren Sie uns darüber im Fragebogen. Lakshani passt Ihren Plan während der Beratung entsprechend an. Wenn Sie an einer Erkrankung leiden, sprechen Sie bitte vorher mit Ihrer Ärztin oder Ihrem Arzt.",
  },
  {
    question: "Wann kann ich beginnen?",
    answer:
      "Wann immer Sie möchten. Buchen Sie das Programm, füllen Sie den Fragebogen aus und wählen Sie einen Termin für Ihre persönliche Beratung.",
  },
  {
    question: "Erhalten Mitglieder einen Rabatt?",
    answer: "Ja: 5 % mit der Mitgliedschaft und 10 % mit der Premium-Mitgliedschaft.",
  },
];

function CheckIcon() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z" />
      <path d="M4 21c3-6 7-9 12-12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function GentleResetPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      <GentleResetHero />
      <GentleResetDetails />

      {/* Programme journey */}
      <section className="relative isolate overflow-hidden bg-[#f5f0e7]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#D8D0A9]/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-28 h-[340px] w-[340px] rounded-full border border-[#D8D0A9]/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                  Ihre Reise
                </span>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl lg:text-6xl">
                Ein wenig mehr Balance,
                <span className="mt-2 block italic text-[#9A7821]">
                  Tag für Tag.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
                Eine sanfte Struktur, die Sie durch jeden Tag begleitet –
                von der Vorbereitung zu Hause bis zur Integration Ihrer
                neuen Gewohnheiten in den Alltag.
              </p>
            </div>

            <div className="border-l-2 border-[#DFC24D] py-2 pl-6">
              <p className="font-serif text-2xl italic leading-snug text-[#533E23]">
                Ihr Tempo.
                <br />
                Ihre Routine.
                <br />
                Ihr Neustart.
              </p>
              <p className="mt-3 text-xs leading-6 text-[#6B705C]">
                Mit achtsamer Begleitung, ohne dass Sie Ihren Alltag
                dafür unterbrechen müssen.
              </p>
            </div>
          </div>

          {/* Journey timeline */}
          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#D8D0A9]/80 bg-[#FBF9F1] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#533E23]/10 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#D8D0A9] transition-colors group-hover:text-[#DFC24D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-[#EFE9C5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#533E23]">
                    {item.time}
                  </span>
                </div>

                <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8E8D7] text-[#2F5D39]">
                  <LeafIcon />
                </div>

                <h3 className="mt-5 font-serif text-2xl leading-snug text-[#21452B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  {item.description}
                </p>

                <div className="mt-6 h-px bg-[#D8D0A9]/70 transition-colors group-hover:bg-[#DFC24D]" />
                <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A7821]">
                  Schritt {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Included materials */}
      <section className="relative overflow-hidden bg-[#EFE9D9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                Sorgfältig für Sie zusammengestellt
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Alles, was Sie brauchen,
              <span className="mt-2 block italic text-[#9A7821]">
                um zu beginnen.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              Praktische Anleitungen, Rezepte und tägliche Impulse,
              die Ihnen helfen, Ihren Neustart mit Zuversicht umzusetzen.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {inclusions.map(([title, description], index) => (
                <article
                  key={title}
                  className="group flex gap-3 rounded-[20px] border border-[#D8D0A9]/70 bg-[#FBF9F1] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFC24D] hover:shadow-md"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                Einblick in Ihr Programm
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Ihre Videobibliothek
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Kurze, praktische Lektionen, die sich leicht in Ihren Alltag
              integrieren lassen und jeden Schritt überschaubar machen.
            </p>

            <div className="mt-9 overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#FBF9F1] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A7821]">
                    Lernen in Ihrem eigenen Tempo
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#21452B]">
                    9 begleitete Lektionen
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
                  <LeafIcon />
                </span>
              </div>

              {lessons.map(([title, duration], index) => (
                <div
                  key={title}
                  className={`group flex items-center gap-3 py-4 ${
                    index !== lessons.length - 1
                      ? "border-b border-[#D8D0A9]/70"
                      : ""
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xs font-semibold text-[#2F5D39] transition-colors group-hover:bg-[#EFE9C5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm leading-6 text-[#405640]">
                    {title}
                  </span>

                  <span className="shrink-0 rounded-full bg-[#EFE9C5] px-2.5 py-1.5 text-[10px] font-semibold text-[#52665C]">
                    {duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8D0A9] bg-white/55 p-4">
              <span className="text-lg text-[#9A7821]" aria-hidden="true">
                ✦
              </span>
              <p className="text-xs leading-6 text-[#6B705C]">
                Die Lektionen werden nach der Buchung täglich freigeschaltet.
                Ihr Ernährungsplan und Ihre Tipps werden auf Ihre individuelle
                Konstitution abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your guide */}
      <section className="bg-[#f5f0e7] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#DFC24D]/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#DFC24D]/20"
            />

            <div className="relative grid items-center gap-9 sm:grid-cols-[180px_1fr] sm:gap-12 lg:grid-cols-[220px_1fr]">
              <div className="flex justify-center sm:justify-start">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#2F5D39] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                  <div className="flex h-[calc(100%-16px)] w-[calc(100%-16px)] items-center justify-center rounded-full border border-white/20 text-center">
                    <span className="px-4 font-serif text-lg italic text-[#EFE9C5]">
                      Lakshani
                      <br />
                      Perera
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                  Ihre persönliche Begleiterin
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl text-white/80">
                  Lernen Sie Lakshani Perera kennen
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                  Ayurveda-Gesundheitsberaterin und Gründerin von Purana
                  Ayurveda. Lakshani ist mit Ayurveda in ihrer sri-lankischen
                  Familie aufgewachsen und begleitet jedes Programm persönlich
                  auf Deutsch oder Englisch.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Persönliche Begleitung",
                    "Deutsch & Englisch",
                    "Verwurzelt im sri-lankischen Ayurveda",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#EFE9D9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
        />

        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A7821]">
              Gut zu wissen
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Häufig gestellte Fragen
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              Hier finden Sie hilfreiche Antworten, bevor Sie mit Ihrem
              Gentle Reset beginnen.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#D8D0A9]/80 bg-[#FBF9F1] p-5 transition-colors open:border-[#DFC24D] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold text-[#21452B] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[10px] font-semibold text-[#533E23]">
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
            medizinische Behandlung dar und ersetzen nicht die Beratung oder
            Behandlung durch medizinisches Fachpersonal.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f5f0e7] px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#DFC24D]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#DFC24D]/20"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Ihr nächster Schritt
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl text-white/80">
                Nehmen Sie sich Zeit für sich.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Vier Tage voller achtsamer Routinen, persönlicher Begleitung
                und einfacher ayurvedischer Anwendungen, die Sie in Ihren
                Alltag integrieren können.
              </p>

              <p className="mt-5 font-serif text-2xl text-[#DFC24D]">
                Sanfter Neustart · €119
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-8 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Ihren Neustart buchen
                <ArrowIcon />
              </a>

             
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </main>
  );
}
