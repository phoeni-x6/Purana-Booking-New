
export default function RetreatContact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f5f0e7] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-[#21452B] shadow-[0_24px_70px_rgba(38,58,43,0.15)]">
          {/* Hintergrundfotografie */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90')",
            }}
          />

          {/* Warme fotografische Überlagerung */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#162E20]/95 via-[#21452B]/85 to-[#21452B]/55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#162E20]/50 via-transparent to-transparent"
          />

          {/* Dekorative Ringe */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-36 h-[480px] w-[480px] rounded-full border border-[#EFE9C5]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-[350px] w-[350px] rounded-full border border-dashed border-[#DFC24D]/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-[#2F5D39]/50 blur-3xl"
          />

          <div className="relative grid gap-12 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:gap-14 md:p-14 lg:p-20">
            {/* Haupttext */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#EFE9C5]/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EFE9C5]">
                  Planen Sie Ihr Retreat mit uns
                </span>
              </div>

              <p className="mt-9 font-serif text-lg italic text-[#DFC24D]">
                Ihre Reise beginnt mit einem persönlichen Gespräch.
              </p>

              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-[#F8F5E8] sm:text-5xl lg:text-6xl">
                Sie sind noch unsicher, welches Retreat
                <span className="mt-2 block italic text-[#DFC24D]">
                  am besten zu Ihnen passt?
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#F8F5E8]/80 sm:text-base">
                Jede Reise zu mehr Wohlbefinden ist einzigartig. Erzählen Sie
                uns von Ihren Wünschen und Vorstellungen. Unser Team unterstützt
                Sie dabei, das Retreat zu finden, das am besten zu Ihren
                Interessen und Bedürfnissen passt.
              </p>

              {/* Persönliche Beratung */}
              <div className="mt-9 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10 text-xl text-[#DFC24D]">
                  ✳
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F8F5E8]">
                    Persönliche Beratung durch unser Team
                  </p>
                  <p className="mt-1 text-xs text-[#F8F5E8]/60">
                    Wir helfen Ihnen, das passende Erlebnis zu finden.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktkarte */}
            <div className="relative w-full rounded-[24px] border border-white/20 bg-[#F8F5E8]/95 p-6 text-[#263A2B] shadow-2xl backdrop-blur-xl sm:p-8 md:w-[280px] lg:w-[310px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
                  Kontakt aufnehmen
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFE9C5] text-lg text-[#2F5D39]">
                  ↗
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl leading-snug text-[#21452B]">
                Gemeinsam finden wir Ihr
                <span className="block italic text-[#9A8050]">
                  perfektes Retreat.
                </span>
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#6B705C]">
                Wählen Sie, wie Sie mit uns in Kontakt treten möchten.
              </p>

              <div className="my-6 h-px bg-[#D8D0A9]" />

              <div className="space-y-3">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-[#21452B] px-5 py-4 text-sm font-semibold text-[#F8F5E8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F5D39] hover:shadow-lg"
                >
                  <span>Per WhatsApp schreiben</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="mailto:info@example.com"
                  className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-[#21452B]/20 px-5 py-4 text-sm font-semibold text-[#21452B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFC24D] hover:bg-[#EFE9C5]/60"
                >
                  <span>E-Mail senden</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <p className="mt-6 text-center text-[10px] leading-5 text-[#6B705C]">
                Wir freuen uns darauf, von Ihnen zu hören.
              </p>

              <div className="absolute -bottom-1 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
            </div>
          </div>

          {/* Akzent am unteren Rand */}
          <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
        </div>
      </div>
    </section>
  );
}
