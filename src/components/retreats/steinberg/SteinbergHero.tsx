
"use client";

import { useState } from "react";

export default function SteinbergHero() {
  const [guestType, setGuestType] = useState<"external" | "chalet">(
    "external",
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#21452B]">
      {/* Hintergrundbild */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/steinberg_hero.webp')",
        }}
      />

      {/* Warmer cremefarbener Farbverlauf */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 22%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.76) 55%, rgba(245,240,231,0.25) 78%, rgba(245,240,231,0.08) 100%)",
        }}
      />

      {/* Cremefarbener Verlauf am unteren Rand */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f5f0e7]/90 via-[#f5f0e7]/30 to-transparent"
      />

      {/* Dekorative Elemente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full border border-[#2F5D39]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24 lg:pb-16 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Hauptinhalt */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                Ihr Ayurveda-Ort zum Wohlfühlen
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Standort · Bayern, Deutschland
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl xl:text-7xl">
              Ayurveda in
              <span className="mt-1 block text-[#9A8050]">
                Steinberg am See.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#533E23]/85 sm:text-base sm:leading-8">
              Wählen Sie eine individuelle Behandlung, ein Ayurveda-Retreat
              mit mehreren Terminen oder ein privates Mini-Retreat mit
              Übernachtung in unserem Chalet Resort. Finden Sie Ihren
              persönlichen Weg, zur Ruhe zu kommen, neue Kraft zu schöpfen
              und sich bewusst Zeit für sich selbst zu nehmen.
            </p>

            {/* Auswahl des Gästetyps */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-[#533E23]">
                Ich bin ...
              </p>

              <div
                className="mt-3 flex flex-wrap gap-3"
                aria-label="Wählen Sie Ihren Gästetyp"
              >
                <button
                  type="button"
                  aria-pressed={guestType === "external"}
                  onClick={() => setGuestType("external")}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                    guestType === "external"
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-[0_5px_18px_rgba(33,69,43,0.15)]"
                      : "border-[#21452B]/25 bg-[#F8F5E8]/65 text-[#21452B] hover:border-[#21452B] hover:bg-[#EFE9C5]"
                  }`}
                >
                  Externer Gast
                </button>

                <button
                  type="button"
                  aria-pressed={guestType === "chalet"}
                  onClick={() => setGuestType("chalet")}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                    guestType === "chalet"
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-[0_5px_18px_rgba(33,69,43,0.15)]"
                      : "border-[#21452B]/25 bg-[#F8F5E8]/65 text-[#21452B] hover:border-[#21452B] hover:bg-[#EFE9C5]"
                  }`}
                >
                  Chalet-Gast
                </button>
              </div>

              <p className="mt-3 max-w-lg text-xs leading-5 text-[#533E23]/70">
                {guestType === "external"
                  ? "Entdecken Sie unsere Behandlungen und Retreats – offen für alle Gäste."
                  : "Sie übernachten im Chalet Resort? Entdecken Sie wohltuende Behandlungen und private Retreats während Ihres Aufenthalts."}
              </p>
            </div>

            {/* Aktionsbuttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#individual-treatments"
                className="group inline-flex items-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Behandlungen entdecken
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#retreats"
                className="inline-flex items-center rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/50 px-6 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition-colors hover:border-[#21452B] hover:bg-[#EFE9C5]"
              >
                Retreats entdecken
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Abschnittsnavigation */}
      <div className="relative mt-12 border-t border-[#21452B]/15 bg-[#f5f0e7]/70 backdrop-blur-sm">
        <nav
          aria-label="Ayurveda-Angebote in Steinberg entdecken"
          className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-5 text-xs sm:px-8 sm:text-sm"
        >
          <a
            href="#individual-treatments"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">01</span>
            Individuelle Behandlungen
          </a>

          <a
            href="#retreats"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">02</span>
            Ayurveda-Retreats
          </a>

          <a
            href="#mini-retreats"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">03</span>
            Mini-Retreats mit Übernachtung
          </a>

          <a
            href="#online-at-home"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">04</span>
            Online & für zu Hause
          </a>
        </nav>
      </div>
    </section>
  );
}
