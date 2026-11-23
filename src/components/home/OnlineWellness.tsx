
export default function OnlineWellness() {
  return (
    <section
      id="online"
      className="relative isolate mx-auto max-w-7xl scroll-mt-24 overflow-hidden rounded-[28px] bg-[#EFE9C5] text-[#533E23] shadow-[0_24px_70px_rgba(83,62,35,0.10)]"
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/img2.jfif"
          alt="Ruhige Spa- und Wellness-Behandlungsatmosphäre"
          className="h-full w-full object-cover object-center"
        />

        {/* Weicher Übergang vom Bild zum warmen Cremeton */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#533E23]/10 via-[#EFE9C5]/55 to-[#EFE9C5]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#EFE9C5] via-[#EFE9C5]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#EFE9C5]/45 md:to-[#EFE9C5]" />

        {/* Warme Farbnuance */}
        <div className="absolute inset-0 bg-[#DFC24D]/10 mix-blend-soft-light" />
      </div>

      {/* Dekorative Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#2F5D39]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-10 font-serif text-8xl text-[#533E23]/[0.05]"
      >
        ❋
      </div>

      {/* Hauptlayout */}
      <div className="relative grid min-h-[620px] items-center md:grid-cols-5 lg:min-h-[650px]">

        {/* Bildbereich */}
        <div className="relative min-h-[260px] md:col-span-2 md:min-h-[620px] lg:min-h-[650px]">
          <div className="absolute left-6 top-7 flex items-center gap-2 md:left-8 md:top-9">
            <span className="h-px w-7 bg-[#DFC24D]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#EFE9C5] drop-shadow-md">
              PURANA WELLNESS
            </span>
          </div>

          <div className="absolute bottom-7 left-6 md:bottom-10 md:left-8">
            <p className="font-serif text-3xl italic text-white drop-shadow-lg sm:text-4xl">
              Ein kleiner Raum
              <br />
              nur für Sie.
            </p>
            <span className="mt-4 block h-px w-12 bg-[#DFC24D]" />
          </div>

          <span className="absolute right-7 top-8 text-2xl text-[#DFC24D]">
            ✳
          </span>
        </div>

        {/* Inhalt */}
        <div className="relative z-10 px-6 pb-9 pt-4 sm:px-10 md:col-span-3 md:py-14 md:pl-5 md:pr-12 lg:py-16 lg:pr-16">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2F5D39]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2F5D39] sm:text-xs">
              Online – wo immer Sie sind
            </p>
          </div>

          <h2 className="max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-[#533E23] sm:text-4xl lg:text-5xl">
            Ihr Weg zu mehr Balance,
            <span className="mt-1 block italic text-[#2F5D39]">
              wohin das Leben Sie auch führt.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B705C]">
            Tauschen Sie sich mit Lakshani in einer 45-minütigen Online-Beratung
            auf Deutsch oder Englisch aus. Alternativ können Sie Dr. Ishanka,
            einen Ayurveda-Arzt (BAMS) aus Sri Lanka, auf Englisch konsultieren.
            Entdecken Sie unsere begleiteten „Reset at Home“-Programme, die
            Sie auf Ihrem persönlichen Weg zu mehr Wohlbefinden unterstützen.
          </p>

          {/* Angebotskarten */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {/* Beratungskarte – Braun */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#533E23]/10 bg-[#533E23] p-5 text-[#EFE9C5] shadow-[0_10px_25px_rgba(83,62,35,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(83,62,35,0.20)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#DFC24D]/20 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <span className="text-2xl text-[#DFC24D]">◷</span>
                <span className="text-[9px] tracking-widest text-[#EFE9C5]/40">
                  01
                </span>
              </div>

              <p className="relative mt-6 text-sm font-semibold">
                Online-Beratungen
              </p>
              <p className="relative mt-1 text-xs leading-5 text-[#EFE9C5]/65">
                45 Minuten persönliche Begleitung
              </p>

              <span className="relative mt-5 block h-px w-8 bg-[#DFC24D] transition-all duration-300 group-hover:w-14" />
            </div>

            {/* Reset at Home Karte – Waldgrün */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2F5D39]/20 bg-[#2F5D39] p-5 text-[#EFE9C5] shadow-[0_10px_25px_rgba(47,93,57,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-[#21452B] hover:shadow-[0_16px_35px_rgba(47,93,57,0.22)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#DFC24D]/25 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <span className="text-2xl text-[#DFC24D]">✳</span>
                <span className="text-[9px] tracking-widest text-[#EFE9C5]/50">
                  02
                </span>
              </div>

              <p className="relative mt-6 text-sm font-semibold">
                Reset at Home
              </p>
              <p className="relative mt-1 text-xs leading-5 text-[#EFE9C5]/75">
                Begleitete Wohlfühlprogramme
              </p>

              <span className="relative mt-5 block h-px w-8 bg-[#DFC24D] transition-all duration-300 group-hover:w-14" />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="/online"
              className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#2F5D39] px-6 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#21452B] hover:shadow-lg"
            >
              Online-Angebote entdecken
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <span className="text-xs text-[#6B705C]">
              Beratungen auf Deutsch und Englisch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
