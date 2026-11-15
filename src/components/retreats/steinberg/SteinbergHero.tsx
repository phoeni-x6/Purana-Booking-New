
"use client";

import { useState } from "react";

export default function SteinbergHero() {
  const [guestType, setGuestType] = useState<"external" | "chalet">(
    "external",
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#21452B]">
      {/* Full background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/steinberg_hero.webp')",
        }}
      />

      {/* Warm cream fade, matching the homepage hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 22%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.76) 55%, rgba(245,240,231,0.25) 78%, rgba(245,240,231,0.08) 100%)",
        }}
      />

      {/* Bottom cream fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f5f0e7]/90 via-[#f5f0e7]/30 to-transparent"
      />

      {/* Decorative details */}
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
          {/* Main content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                Your Ayurveda destination
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Location · Bavaria, Germany
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl xl:text-7xl">
              Ayurveda in
              <span className="mt-1 block text-[#9A8050]">
                Steinberg am See.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#533E23]/85 sm:text-base sm:leading-8">
              Choose an individual treatment, an Ayurveda retreat over
              several visits, or a private mini retreat with a stay at our
              Chalet Resort. Find the right way to slow down, reconnect and
              make time for yourself.
            </p>

            {/* Guest selector */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-[#533E23]">
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
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-[0_5px_18px_rgba(33,69,43,0.15)]"
                      : "border-[#21452B]/25 bg-[#F8F5E8]/65 text-[#21452B] hover:border-[#21452B] hover:bg-[#EFE9C5]"
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
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-[0_5px_18px_rgba(33,69,43,0.15)]"
                      : "border-[#21452B]/25 bg-[#F8F5E8]/65 text-[#21452B] hover:border-[#21452B] hover:bg-[#EFE9C5]"
                  }`}
                >
                  Chalet guest
                </button>
              </div>

              <p className="mt-3 max-w-lg text-xs leading-5 text-[#533E23]/70">
                {guestType === "external"
                  ? "Explore treatments and retreats available to all guests."
                  : "Staying at the Chalet Resort? Explore treatments and private retreats during your stay."}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#individual-treatments"
                className="group inline-flex items-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Explore treatments
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#retreats"
                className="inline-flex items-center rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/50 px-6 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition-colors hover:border-[#21452B] hover:bg-[#EFE9C5]"
              >
                Discover retreats
              </a>
            </div>
          </div>

          {/* Visual introduction */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/50" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[#F8F5E8]/80 p-3 shadow-2xl shadow-[#21452B]/15 backdrop-blur-sm sm:p-4">
              <div className="relative min-h-[350px] overflow-hidden rounded-[22px] bg-[#D9D1B9] sm:min-h-[430px]">
                <img
                  src="/images/steinberg_hero.webp"
                  alt="Peaceful natural surroundings at the Ayurveda destination in Steinberg am See"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172F23]/85 via-[#172F23]/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-[#21452B]/65 px-4 py-2 backdrop-blur-sm">
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

            <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-[#DFC24D]/50 bg-[#F8F5E8] px-5 py-3 shadow-lg sm:block">
              <p className="font-serif text-lg text-[#21452B]">
                Your time. Your rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section navigation */}
      <div className="relative mt-12 border-t border-[#21452B]/15 bg-[#f5f0e7]/70 backdrop-blur-sm">
        <nav
          aria-label="Explore Steinberg treatments"
          className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-5 text-xs sm:px-8 sm:text-sm"
        >
          <a
            href="#individual-treatments"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">01</span>
            Individual treatments
          </a>

          <a
            href="#retreats"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">02</span>
            Ayurveda retreats
          </a>

          <a
            href="#mini-retreats"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">03</span>
            Mini retreats with stay
          </a>

          <a
            href="#online-at-home"
            className="shrink-0 text-[#533E23]/80 transition-colors hover:text-[#21452B]"
          >
            <span className="mr-2 text-[#C14C38]">04</span>
            Online & at home
          </a>
        </nav>
      </div>
    </section>
  );
}
