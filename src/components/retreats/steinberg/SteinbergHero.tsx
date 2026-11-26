
"use client";

import { useState } from "react";

export default function SteinbergHero() {
  const [guestType, setGuestType] = useState<"external" | "chalet">(
    "external"
  );

  return (
    <section className="group relative isolate min-h-[850px] overflow-hidden bg-[#21452B] text-[#F8F5E8]">

      {/* Full background image with hover zoom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 overflow-hidden"
      >
        <div
          className="absolute inset-0 scale-100 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Steinberg/DSC_7378_auswahl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Image overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#14271A]/65"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,39,26,0.45) 0%, rgba(20,39,26,0.28) 40%, rgba(20,39,26,0.78) 100%)",
        }}
      />

      {/* Decorative frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-[#F8F5E8]/25 sm:inset-7 lg:inset-10"
      />

      {/* Decorative corner details */}
      <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[#DFC24D] sm:left-7 sm:top-7 lg:left-10 lg:top-10" />
      <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 border-r border-t border-[#DFC24D] sm:right-7 sm:top-7 lg:right-10 lg:top-10" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[#DFC24D] sm:bottom-7 sm:left-7 lg:bottom-10 lg:left-10" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#DFC24D] sm:bottom-7 sm:right-7 lg:bottom-10 lg:right-10" />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[850px] max-w-[1400px] flex-col items-center justify-center px-8 pb-28 pt-28 text-center sm:px-12">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#DFC24D]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#EFE9C5] sm:text-xs">
            Ihr Ayurveda-Ort zum Wohlfühlen
          </p>
          <span className="h-px w-10 bg-[#DFC24D]" />
        </div>

        <p className="mt-9 text-[10px] font-medium uppercase tracking-[0.35em] text-[#DFC24D] sm:text-xs">
          Bayern · Deutschland
        </p>

        {/* Main heading */}
        <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.08] tracking-tight text-[#F8F5E8] sm:text-7xl lg:text-[6.5rem]">
          Ayurveda in
          <span className="mt-2 block font-normal italic text-[#DFC24D]">
            Steinberg am See.
          </span>
        </h1>

        {/* Decorative ornament */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#F8F5E8]/45" />
          <span className="text-lg text-[#DFC24D]">✳</span>
          <span className="h-px w-12 bg-[#F8F5E8]/45" />
        </div>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-sm leading-8 text-[#F8F5E8]/90 sm:text-base sm:leading-9">
          Wählen Sie eine individuelle Behandlung, ein Ayurveda-Retreat
          mit mehreren Terminen oder ein privates Mini-Retreat mit
          Übernachtung in unserem Chalet Resort. Finden Sie Ihren
          persönlichen Weg, zur Ruhe zu kommen, neue Kraft zu schöpfen
          und sich bewusst Zeit für sich selbst zu nehmen.
        </p>

        {/* Bottom caption */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#F8F5E8]/65">
            PURANA AYURVEDA · STEINBERG AM SEE
          </p>
          <span className="h-7 w-px bg-[#DFC24D]/70" />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="relative border-t border-white/20 bg-[#172B1C]/80 backdrop-blur-md">
        <nav
          aria-label="Ayurveda-Angebote in Steinberg entdecken"
          className="mx-auto flex max-w-[1400px] gap-8 overflow-x-auto px-6 py-5 sm:px-12"
        >
          {[
            ["01", "Individuelle Behandlungen", "#individual-treatments"],
            ["02", "Ayurveda-Retreats", "#retreats"],
            ["03", "Mini-Retreats mit Übernachtung", "#mini-retreats"],
            ["04", "Online & für zu Hause", "#online-at-home"],
          ].map(([number, label, href]) => (
            <a
              key={number}
              href={href}
              className="flex shrink-0 items-center gap-3 text-xs text-[#F8F5E8]/80 transition-colors hover:text-[#DFC24D] sm:text-sm"
            >
              <span className="font-serif italic text-[#DFC24D]">
                {number}
              </span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
