"use client";

import { useState } from "react";

export default function SteinbergHero() {
const [guestType, setGuestType] = useState<"external" | "chalet">(
"external",
);

return (
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
     className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#2F5D39]/60 blur-3xl"
   />

  <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/35 bg-white/[0.05] px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
            Your Ayurveda destination
          </span>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#DFC24D]">
          Location · Bavaria, Germany
        </p>

        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#F8F5E8] sm:text-5xl lg:text-6xl xl:text-7xl">
          Ayurveda in
          <span className="mt-1 block text-[#DFC24D]">
            Steinberg am See.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
          Choose an individual treatment, an Ayurveda retreat over several
          visits, or a private mini retreat with a stay at our Chalet
          Resort. Find the right way to slow down, reconnect and make time
          for yourself.
        </p>

        <div className="mt-8">
          <p className="text-xs font-medium text-white/75">
            I am a...
          </p>

          <div
            className="mt-3 flex flex-wrap gap-3"
            aria-label="Choose your guest type"
          >
            <button
              type="button"
              aria-pressed={guestType === "external"}
              onClick={() => setGuestType("external")}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                guestType === "external"
                  ? "border-[#DFC24D] bg-[#F8F5E8] text-[#21452B] shadow-[0_0_0_3px_rgba(223,194,77,0.2)]"
                  : "border-white/25 text-white hover:border-[#DFC24D] hover:text-[#DFC24D]"
              }`}
            >
              External guest
            </button>

            <button
              type="button"
              aria-pressed={guestType === "chalet"}
              onClick={() => setGuestType("chalet")}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                guestType === "chalet"
                  ? "border-[#DFC24D] bg-[#F8F5E8] text-[#21452B] shadow-[0_0_0_3px_rgba(223,194,77,0.2)]"
                  : "border-white/25 text-white hover:border-[#DFC24D] hover:text-[#DFC24D]"
              }`}
            >
              Chalet guest
            </button>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/55">
            {guestType === "external"
              ? "Explore treatments and retreats available to all guests."
              : "Staying at the Chalet Resort? Explore treatments and private retreats during your stay."}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#individual-treatments"
            className="group inline-flex items-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-all hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
          >
            Explore treatments
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#retreats"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
          >
            Discover retreats
          </a>
        </div>
      </div>

      {/* Visual introduction */}
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/20" />

        <div className="relative overflow-hidden rounded-[28px] bg-[#F8F5E8] p-3 shadow-2xl shadow-black/20 sm:p-4">
          <div className="relative min-h-[350px] overflow-hidden rounded-[22px] bg-[#D9D1B9] sm:min-h-[430px]">
            <img
              src="/images/steinberg/steinberg-hero.jpg"
              alt="Peaceful natural surroundings at the Ayurveda destination in Steinberg am See"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172F23]/90 via-[#172F23]/15 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#21452B]/70 px-4 py-2 backdrop-blur-sm">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Purana Ayurveda
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                A moment for yourself
              </p>

              <h2 className="mt-3 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                Slow down.
                <span className="block text-[#DFC24D]">
                  Feel renewed.
                </span>
              </h2>

              <p className="mt-3 max-w-sm text-xs leading-6 text-white/85 sm:text-sm">
                Individual treatments, thoughtful rituals and time to
                reconnect with yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-[#DFC24D]/40 bg-[#F8F5E8] px-5 py-3 shadow-lg sm:block">
          <p className="font-serif text-lg text-[#21452B]">
            Your time. Your rhythm.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Section navigation */}
  <div className="relative mt-12 border-t border-white/15">
    <nav
      aria-label="Explore Steinberg treatments"
      className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-5 text-xs sm:px-8 sm:text-sm"
    >
      <a
        href="#individual-treatments"
        className="shrink-0 text-white/80 transition-colors hover:text-[#DFC24D]"
      >
        <span className="mr-2 text-[#DFC24D]">01</span>
        Individual treatments
      </a>
      <a
        href="#retreats"
        className="shrink-0 text-white/80 transition-colors hover:text-[#DFC24D]"
      >
        <span className="mr-2 text-[#DFC24D]">02</span>
        Ayurveda retreats
      </a>
      <a
        href="#mini-retreats"
        className="shrink-0 text-white/80 transition-colors hover:text-[#DFC24D]"
      >
        <span className="mr-2 text-[#DFC24D]">03</span>
        Mini retreats with stay
      </a>
      <a
        href="#online-at-home"
        className="shrink-0 text-white/80 transition-colors hover:text-[#DFC24D]"
      >
        Online & at home
      </a>
    </nav>
  </div>
</section>

);
}