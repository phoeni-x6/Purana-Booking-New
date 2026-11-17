
import BlogSection from "@/components/learn/BlogSection";

const podcastTypes = [
  {
    title: "Gespräche mit Lakshani",
    description: "Ein Thema, 25–40 Min. · alle 2 Wochen · kostenlos",
    number: "01",
  },
  {
    title: "Ayurveda Talks — Gäste",
    description: "Ärzte, Köche und Yogalehrer · monatlich · kostenlos",
    number: "02",
  },
  {
    title: "Saison-Special",
    description: "Was Sie in dieser Jahreszeit verändern können · 4 Ausgaben pro Jahr · kostenlos",
    number: "03",
  },
  {
    title: "10-Minuten-Rituale & Fragen",
    description: "Geführte Audioinhalte und Fragen von Mitgliedern · nur für Mitglieder",
    number: "04",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[#DFC24D]" : "text-[#9A6B25]"
      }`}
    >
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

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#21452B] text-[#F8F5E8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-28 h-[420px] w-[420px] rounded-full bg-[#2F5D39]/50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/35 bg-white/[0.05] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
              <Eyebrow light>Ayurveda entdecken · Kostenlos für alle</Eyebrow>
            </div>

            <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-[#F8F5E8] sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-[#F8F5E8]">Ayurvedisches Wohlbefinden</span>
              <span className="mt-2 block text-[#DFC24D]">
                in Ihren Händen.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Artikel, Rezepte und Podcasts – kostenlos für alle. Beginnen
              Sie mit dem Dosha-Test und entdecken Sie Ihre Konstitution.
              Premium-Mitglieder können außerdem jeden Monat an einem
              Live-Online-Seminar teilnehmen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#dosha-quiz"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Kostenlosen Dosha-Test starten
                <ArrowIcon />
              </a>

              <a
                href="#seminar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Monatliches Mitgliederseminar
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs text-white/75">
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Praktische Tipps für den Alltag
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Rezepte und Rituale
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Lernen Sie in Ihrem eigenen Tempo
              </span>
            </div>
          </div>

          {/* Hero feature card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/20"
            />

            <div className="relative rounded-[28px] border border-[#D8D0A9]/50 bg-[#F8F5E8] p-6 text-[#263A2B] shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>Ihre Lernreise</Eyebrow>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-[#21452B]">
                    Kleine Schritte.
                    <span className="block text-[#9A6B25]">
                      Mehr innere Balance.
                    </span>
                  </h2>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#EFE9C5] font-serif text-2xl text-[#21452B]">
                  ✳
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                Entdecken Sie Ayurveda durch einfache Lernerlebnisse,
                die sich mühelos in Ihren Alltag integrieren lassen.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="#blog"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xl text-[#2F5D39]">
                    ✎
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Artikel und Rezepte
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Lesen, kochen und zu Hause ausprobieren
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#podcast"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFE9C5] text-xl text-[#2F5D39]">
                    ♫
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Ayurveda-Podcast
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Gespräche und praktische Tipps anhören
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#seminar"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xl text-[#2F5D39]">
                    ◷
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Monatliches Live-Seminar
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Lernen Sie als Premium-Mitglied mit Lakshani
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-[#21452B] p-4 text-white">
                <p className="text-xs leading-6 text-white/90">
                  Entdecken Sie jeden Tag etwas Neues, entwickeln Sie
                  einfache Gewohnheiten und finden Sie einen Rhythmus,
                  der zu Ihnen passt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free dosha quiz */}
      <section
        id="dosha-quiz"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[30px] border border-[#E1DAC5] bg-[#F8F5E8] p-6 shadow-sm sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
          <div>
            <Eyebrow>Kostenloser Dosha-Test · 2 Minuten</Eyebrow>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Welcher Konstitutionstyp sind Sie?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C]">
              Beantworten Sie 8 kurze Fragen und erhalten Sie direkt eine
              erste, unverbindliche Einschätzung Ihrer Konstitution.
              Wenn Sie mehr erfahren möchten, können Sie eine Online-Beratung
              mit Lakshani buchen.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Vata", "Pitta", "Kapha"].map((dosha) => (
                <span
                  key={dosha}
                  className="rounded-full border border-[#D8D0A9] bg-white px-4 py-2 text-xs font-medium text-[#52634F]"
                >
                  {dosha}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-[#7A806C]">
              Ein einführender, informativer Test – keine medizinische
              Untersuchung oder Diagnose.
            </p>
          </div>

          {/* Quiz preview */}
          <div className="rounded-[24px] border border-[#E3DCC7] bg-[#EFE9D8] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B705C]">
                Vorschau des Tests
              </p>
              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#2F5D39]">
                8 Fragen
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#6B705C]">
              <span>Beispielfrage</span>
              <span>3 von 8</span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#D8D0A9]">
              <div className="h-full w-[37.5%] rounded-full bg-[#2F5D39]" />
            </div>

            <h3 className="mt-5 font-serif text-xl text-[#21452B]">
              Wie schlafen Sie?
            </h3>

            <div className="mt-4 space-y-3">
              {[
                "Leicht, ich wache schnell auf",
                "Gut, aber nicht lange",
                "Tief und lange",
              ].map((answer, index) => (
                <div
                  key={answer}
                  className="flex items-center gap-3 rounded-xl border border-[#D8D0A9]/80 bg-white px-4 py-3.5 text-sm text-[#52634F]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C8C1AA] text-[10px] text-[#7A806C]">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {answer}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] leading-5 text-[#6B705C]">
              Ihr Ergebnis wird sofort angezeigt – ganz ohne Registrierung.
            </p>

            <a
              href="/learn/dosha-quiz"
              className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
            >
              Vollständigen Test starten
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Blog articles */}
      <BlogSection />

      
  
      
    </main>
  );
}
