
const practitioners = [
  {
    name: "Lakshani Perera",
    role: "Ayurveda-Gesundheitsberaterin · Gründerin von Purana Ayurveda",
    description:
      "Zertifizierte Ayurveda-Ernährungsberaterin mit Wurzeln in der traditionellen Ayurveda-Lehre ihrer srilankischen Familie. Sprachen: Deutsch und Englisch.",
    price: "€45",
    button: "Termin mit Lakshani buchen",
    initials: "LP",
    photoColor: "bg-[#D8E1D2]",
    featured: true,
    language: "Deutsch und Englisch",
  },
  {
    name: "Dr. Ishanka [Nachname]",
    role: "Ayurveda-Arzt (BAMS) · Ayurveda-Zentrum, Sri Lanka",
    description:
      "Ayurvedische Gesundheitsberatung auf Englisch durch einen Arzt mit einer fundierten Ausbildung in der klassischen Ayurveda-Medizin (Bachelor of Ayurvedic Medicine and Surgery).",
    price: "€[PRICE]",
    button: "Termin mit Dr. Ishanka buchen",
    initials: "DI",
    photoColor: "bg-[#E6D8BD]",
    featured: false,
    language: "Englisch",
  },
];

const topics = [
  "Ihre ayurvedische Konstitution",
  "Prävention und Wohlbefinden",
  "Ernährung und tägliche Routinen",
];

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]"
    >
      {/* Dekorativer Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-28 h-[360px] w-[360px] rounded-full border border-dashed border-[#DFC24D]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-[#EFE9C5]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Abschnittsüberschrift */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/75 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39] sm:text-xs">
                Persönliche Online-Beratungen
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
              Traditionelles Wissen · Individuelle Betreuung · Wohlbefinden im Alltag
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Verstehen Sie, was Ihr Körper braucht.
              <span className="mt-2 block italic text-[#9A8050]">
                Beginnen Sie mit einem Gespräch.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/85 sm:text-base">
              Entdecken Sie einen vom Ayurveda inspirierten Weg zu mehr
              Wohlbefinden. In einer persönlichen Videoberatung erfahren
              Sie mehr über Ihre Konstitution, Ihre Ernährung und Ihre
              täglichen Gewohnheiten – und erhalten praktische erste
              Schritte, die sich gut in Ihren Alltag integrieren lassen.
            </p>

            {/* Beratungsthemen */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {topics.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-[#F8F5E8]/80 px-4 py-2.5 text-xs font-medium text-[#21452B] shadow-sm sm:text-sm"
                >
                  <span className="text-[#C14C38]">✳</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Informationsbereich zur Beratung */}
          <div className="relative overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#EFE9C5]/55 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#2F5D39]/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-8 h-32 w-32 rounded-full border border-dashed border-[#DFC24D]/30"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21452B] text-lg text-[#DFC24D]">
                  ✳
                </div>
                <div>
                  <p className="font-serif text-xl text-[#21452B]">
                    Individuell auf Sie abgestimmt
                  </p>
                  <p className="mt-1 text-xs text-[#6B705C]">
                    Unterstützung, die zu Ihrem Alltag passt.
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-[#D8D0A9]" />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5E8] text-[#9A8050]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#21452B]">
                      45-minütige Beratung
                    </p>
                    <p className="text-xs text-[#6B705C]">
                      Ausreichend Zeit, um Ihre Anliegen zu besprechen.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5E8] text-[#9A8050]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m8 5 8 14M16 5 8 19" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#21452B]">
                      Online-Videogespräch
                    </p>
                    <p className="text-xs text-[#6B705C]">
                      Nehmen Sie von überall aus teil.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5E8] text-[#9A8050]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M12 21s7-4 7-11V5l-7-2-7 2v5c0 7 7 11 7 11Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#21452B]">
                      Persönliche Begleitung
                    </p>
                    <p className="text-xs text-[#6B705C]">
                      Praktische Empfehlungen für Ihren Alltag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vorstellung der Berater */}
        <div className="mb-8 mt-20 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mt-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C14C38]">
              Lernen Sie unsere Berater kennen
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#21452B] sm:text-4xl">
              Persönliche Beratung mit Herz und Erfahrung.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B705C]">
              Wählen Sie die Fachperson und die Beratungssprache,
              mit denen Sie sich am wohlsten fühlen.
            </p>
          </div>

          <span className="hidden font-serif text-5xl italic text-[#DFC24D]/70 md:block">
            Purana
          </span>
        </div>

        {/* Beraterkarten */}
        <div className="grid gap-7 md:grid-cols-2">
          {practitioners.map((person, index) => (
            <article
              key={person.name}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-[#F8F5E8] shadow-[0_12px_40px_rgba(38,58,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,58,43,0.12)] ${
                person.featured
                  ? "border-[#2F5D39]/40"
                  : "border-[#D8D0A9]"
              }`}
            >
              {/* Oberer Akzent */}
              <div
                className={`h-1.5 w-full ${
                  person.featured
                    ? "bg-gradient-to-r from-[#21452B] via-[#2F5D39] to-[#DFC24D]"
                    : "bg-gradient-to-r from-[#D8D0A9] via-[#DFC24D] to-[#C14C38]"
                }`}
              />

              {/* Profilbereich */}
              <div
                className={`relative overflow-hidden p-6 sm:p-8 ${
                  person.featured
                    ? "bg-[#EFE9C5]/55"
                    : "bg-[#E9E3D1]/65"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#2F5D39]/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-7 h-32 w-32 rounded-full border border-dashed border-[#DFC24D]/30"
                />

                <div className="relative flex items-center gap-5">
                  {/* Profilbild-Platzhalter */}
                  <div
                    className={`relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-white/70 shadow-sm sm:h-28 sm:w-28 ${person.photoColor}`}
                  >
                    <div className="absolute inset-2 rounded-[18px] border border-white/60" />
                    <span className="font-serif text-3xl text-[#21452B]/80">
                      {person.initials}
                    </span>
                    <span className="absolute bottom-3 right-3 h-3 w-3 rounded-full border-2 border-white bg-[#2F5D39]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    {person.featured ? (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#DFC24D]/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#80621A]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
                        Gründerin & Beraterin
                      </span>
                    ) : (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#2F5D39]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#2F5D39]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F5D39]" />
                        Ayurveda-Fachperson
                      </span>
                    )}

                    <h4 className="font-serif text-xl leading-tight text-[#21452B] sm:text-2xl">
                      {person.name}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                      {person.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Karteninhalt */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-sm leading-7 text-[#52634F]">
                  {person.description}
                </p>

                {/* Beratungssprache */}
                <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#D8D0A9]/70 bg-white/50 px-4 py-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 shrink-0 text-[#9A8050]"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                  <span className="text-xs text-[#6B705C]">
                    Beratungssprache:
                  </span>
                  <span className="text-xs font-semibold text-[#21452B]">
                    {person.language}
                  </span>
                </div>

                {/* Preis */}
                <div className="mt-auto pt-8">
                  <div className="mb-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8C73]">
                        Ihre Beratung
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-serif text-4xl text-[#21452B]">
                          {person.price}
                        </span>
                        <span className="text-xs text-[#6B705C]">
                          / 45 Min.
                        </span>
                      </div>
                    </div>

                    <a
                      href="#booking"
                      className="mb-1 text-xs font-semibold text-[#533E23] underline decoration-[#DFC24D] underline-offset-4 transition hover:text-[#C14C38]"
                    >
                      Profil ansehen
                    </a>
                  </div>

                  <a
                    href="#booking"
                    className={`group/button flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-center text-sm font-semibold transition duration-300 ${
                      person.featured
                        ? "bg-[#21452B] text-[#F8F5E8] hover:bg-[#2F5D39]"
                        : "border border-[#21452B]/30 bg-transparent text-[#21452B] hover:border-[#21452B] hover:bg-[#EFE9C5]/60"
                    }`}
                  >
                    {person.button}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rechtlicher Hinweis */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#EFE9C5]/50 p-6 sm:p-7">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-16 h-40 w-40 rounded-full border border-[#2F5D39]/10"
          />

          <div className="relative flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-[#DFC24D]">
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
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#21452B]">
                Ein wichtiger Hinweis zu Ihrer Beratung
              </h4>
              <p className="mt-2 max-w-4xl text-xs leading-7 text-[#6B705C] sm:text-sm">
                Diese Beratungen bieten ayurvedische Empfehlungen zu
                Gesundheitsvorsorge, Ernährung und täglichen Routinen.
                Sie stellen keine medizinische Diagnose oder Behandlung
                dar und ersetzen nicht die Beratung durch Ihre Ärztin
                oder Ihren Arzt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativer Markenabschluss */}
      <div className="relative h-1.5 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
