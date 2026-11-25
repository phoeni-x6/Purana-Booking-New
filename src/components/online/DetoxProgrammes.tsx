const programmes = [
  {
    duration: "4 TAGE · 1 BERATUNG",
    title: "Sanfter Neustart",
    description:
      "Bringen Sie mehr Ayurveda in Ihren Alltag – ideal für Ihren ersten bewussten Neustart.",
    features: [
      "1 persönliche Beratung mit Lakshani",
      "5-tägiger Ernährungsplan",
      "Einfache Ayurveda-Tipps für den Alltag",
    ],
    price: "€119",
    featured: false,
  },
  {
    duration: "7 TAGE · 2 BERATUNGEN",
    title: "Saisonaler Neustart",
    description:
      "Finden Sie mit Ayurveda zu neuer Balance und passen Sie Ihren Lebensstil an die jeweilige Jahreszeit an. Entdecken Sie ein eigenes Programm für jede Jahreszeit, wenn Sie bereit sind.",
    features: [
      "Beratung zu Beginn und zum Abschluss",
      "7-tägiges Ayurveda-Balance-Programm",
      "Anpassung Ihres Lebensstils für mehr Ausgeglichenheit",
      "Chat-Begleitung mit Lakshani inklusive",
    ],
    price: "€229",
    featured: true,
  },
];

const deepResetOptions = [
  {
    duration: "4 Tage",
    description: "Sanfter Neustart + 3 persönliche Einzelberatungen",
    price: "€259",
  },
  {
    duration: "7 Tage",
    description: "Saisonaler Neustart + 4 persönliche Einzelberatungen",
    price: "€349",
  },
];

const seasons = ["Frühling", "Sommer", "Herbst", "Winter"];

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        featured
          ? "bg-[#DFC24D]/20 text-[#DFC24D]"
          : "bg-[#EFE9C5] text-[#2F5D39]"
      }`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3 w-3"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
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

export default function DetoxProgrammes() {
  return (
    <section
      id="programmes"
      className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]"
    >
      {/* Dekorative Hintergrundelemente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-16 h-[520px] w-[520px] rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-[360px] w-[360px] rounded-full border border-[#D8D0A9]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Einführender Abschnitt */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
                Ayurveda-Neustart für zu Hause
              </span>
            </div>

            <h2 className="mt-7 font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Finden Sie Ihren Rhythmus.
              <span className="mt-2 block italic text-[#9A7821]">
                Starten Sie neu mit Ayurveda.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Persönlich begleitet von Lakshani auf Deutsch oder Englisch.
              Entdecken Sie tägliche Rituale, nährende Ernährung und
              achtsame Selbstfürsorge mit strukturierten Programmen,
              die sich harmonisch in Ihren Alltag integrieren lassen.
            </p>
          </div>

          {/* Ergänzende Einführung */}
          <div className="relative max-w-md border-l-2 border-[#DFC24D] py-2 pl-6 lg:ml-auto lg:mb-2">
            <span className="font-serif text-2xl italic text-[#533E23]">
              Kleine Schritte.
              <br />
              Nachhaltige Veränderungen.
            </span>
            <p className="mt-3 text-xs leading-6 text-[#6B705C]">
              Ein praktischer Weg, Ayurveda in Ihren Alltag zu integrieren –
              ganz gleich, wo Sie sich gerade befinden.
            </p>
          </div>
        </div>

        {/* Vorteile der Programme */}
        <div className="mt-9 flex flex-wrap gap-3">
          {[
            "Persönliche Begleitung",
            "Praktische Alltagsrituale",
            "In Ihrem eigenen Tempo",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#D8D0A9] bg-white/55 px-4 py-2.5 text-xs font-medium text-[#405640]"
            >
              <span className="mr-2 text-[#9A7821]">✦</span>
              {item}
            </span>
          ))}
        </div>

        {/* Abschnittstrenner */}
        <div className="my-12 flex items-center gap-4 lg:my-16">
          <span className="h-px flex-1 bg-[#D8D0A9]" />
          <span className="font-serif text-sm italic text-[#9A7821]">
            Wählen Sie Ihren Neustart
          </span>
          <span className="h-px flex-1 bg-[#D8D0A9]" />
        </div>

        {/* Programm-Karten */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <article
              key={programme.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-1.5 ${
                programme.featured
                  ? "border-[#2F5D39] bg-[#2F5D39] shadow-xl shadow-[#21452B]/15"
                  : "border-[#D8D0A9] bg-[#FBF9F1] shadow-sm hover:shadow-xl hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Oberer Farbakzent */}
              <div
                className={`h-1.5 ${
                  programme.featured
                    ? "bg-gradient-to-r from-[#DFC24D] via-[#E9D88C] to-[#C14C38]"
                    : "bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#EFE9C5]"
                }`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-[#E9D88C]"
                        : "text-[#8A8062]"
                    }`}
                  >
                    {programme.duration}
                  </span>

                  {programme.featured && (
                    <span className="rounded-full bg-[#DFC24D] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#21452B]">
                      Besonders beliebt
                    </span>
                  )}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      programme.featured
                        ? "bg-white/10 text-[#DFC24D]"
                        : "bg-[#EFE9C5] text-[#2F5D39]"
                    }`}
                  >
                    <LeafIcon />
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-white/55"
                        : "text-[#8A8062]"
                    }`}
                  >
                    {index === 0 ? "Sanft beginnen" : "Balance finden"}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-serif text-3xl sm:text-4xl ${
                    programme.featured
                      ? "text-[#FFFDF3]"
                      : "text-[#21452B]"
                  }`}
                >
                  {programme.title}
                </h3>

                <p
                  className={`mt-4 min-h-[96px] text-sm leading-7 ${
                    programme.featured
                      ? "text-white/75"
                      : "text-[#6B705C]"
                  }`}
                >
                  {programme.description}
                </p>

                <div
                  className={`my-7 h-px ${
                    programme.featured
                      ? "bg-white/20"
                      : "bg-[#D8D0A9]"
                  }`}
                />

                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    programme.featured
                      ? "text-[#E9D88C]"
                      : "text-[#533E23]"
                  }`}
                >
                  Das ist enthalten
                </p>

                <ul className="mt-5 space-y-4">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon featured={programme.featured} />
                      <span
                        className={`text-sm leading-6 ${
                          programme.featured
                            ? "text-white/90"
                            : "text-[#405640]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Auswahl der Jahreszeit */}
                {programme.featured && (
                  <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E9D88C]">
                      Wählen Sie Ihre Jahreszeit
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {seasons.map((season) => (
                        <span
                          key={season}
                          className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/90 transition hover:border-[#DFC24D] hover:bg-white/10"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Preisgestaltung */}
                <div className="mt-auto pt-8">
                  <div
                    className={`mb-5 h-px ${
                      programme.featured
                        ? "bg-white/20"
                        : "bg-[#D8D0A9]"
                    }`}
                  />

                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-white/55"
                        : "text-[#8A8062]"
                    }`}
                  >
                    Preis des Programms
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span
                      className={`font-serif text-4xl ${
                        programme.featured
                          ? "text-[#FFFDF3]"
                          : "text-[#21452B]"
                      }`}
                    >
                      {programme.price}
                    </span>
                    {programme.featured && (
                      <span className="text-xs text-white/65">
                        / Jahreszeit
                      </span>
                    )}
                  </div>

                  <a
                    href={`/contact?package=${encodeURIComponent(
                      `${programme.title} – ${programme.price}`
                    )}`}
                    className={`group mt-6 flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                      programme.featured
                        ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#E9D477]"
                        : "bg-[#21452B] text-white hover:bg-[#2F5D39]"
                    }`}
                  >
                    {programme.title} buchen
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Deep Reset */}
          <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F0EBDD] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#533E23]/10">
            <div className="h-1.5 bg-gradient-to-r from-[#C14C38] via-[#DFC24D] to-[#2F5D39]" />

            <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A8062]">
                PERSÖNLICHE EINZELBERATUNG · 2 OPTIONEN
              </span>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E5DEB7] text-[#533E23]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8062]">
                  Intensive persönliche Begleitung
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Deep Reset
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-[#6B705C]">
                Gehen Sie mit zusätzlichen persönlichen Einzelberatungen
                noch einen Schritt weiter. Wählen Sie den sanften oder
                saisonalen Neustart und profitieren Sie während des
                gesamten Programms von einer intensiveren Begleitung
                durch Lakshani.
              </p>

              <div className="my-7 h-px bg-[#D8D0A9]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#533E23]">
                Wählen Sie Ihr Programm
              </p>

              <div className="mt-5 space-y-3">
                {deepResetOptions.map((option, index) => (
                  <div
                    key={option.duration}
                    className="rounded-2xl border border-[#D8D0A9] bg-[#FBF9F1] p-4 transition duration-300 hover:border-[#2F5D39]/60 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex rounded-full bg-[#EFE9C5] px-3 py-1 text-[10px] font-semibold text-[#21452B]">
                          {option.duration}
                        </span>
                        <p className="mt-3 text-sm font-semibold text-[#21452B]">
                          {index === 0
                            ? "Sanfter Deep Reset"
                            : "Saisonaler Deep Reset"}
                        </p>
                      </div>

                      <span className="font-serif text-2xl text-[#21452B]">
                        {option.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                      {option.description}
                    </p>

                    <a
                      href={`/contact?package=${encodeURIComponent(
                        `Deep Reset – ${option.duration} – ${option.price}`
                      )}`}
                      className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2F5D39] underline underline-offset-4 transition hover:text-[#C14C38]"
                    >
                      Dieses Paket auswählen
                      <ArrowIcon />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={`/contact?package=${encodeURIComponent("Deep Reset")}`}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#2F5D39]"
                >
                  Deep Reset auswählen
                  <ArrowIcon />
                </a>

                
              </div>
            </div>
          </article>
        </div>

       
      </div>

      {/* Markenakzent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}