
export default function GentleResetHero() {
  const features = [
    "4 days",
    "1 personal consultation",
    "Video & text",
    "Beginner-friendly",
    "German or English",
  ];

  return (
    <section className="relative overflow-hidden bg-[#21452B] text-[#F8F5E8]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#DFC24D]/15" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full border border-[#DFC24D]/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#2F5D39]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-24">
        {/* Hero content */}
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#EFE9C5]/80">
            <a
              href="/online"
              className="transition-colors hover:text-[#DFC24D]"
            >
              Online & at home
            </a>
            <span className="text-[#DFC24D]">/</span>
            <span className="text-[#DFC24D]">Gentle Reset</span>
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/35 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-[0.14em] text-[#DFC24D]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
            YOUR GENTLE START TO AYURVEDA
          </div>

          <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Gentle Reset
            <span className="mt-2 block font-normal italic text-[#DFC24D]">
              Come back to balance.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#F8F5E8]/85 sm:text-lg">
            Four days of simple Ayurvedic food, daily rituals and rest —
            adjusted to your constitution, so you feel lighter, renew your
            energy and know how to continue at home.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {features.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 text-xs text-[#F8F5E8]/90 transition-colors hover:border-[#DFC24D]/60 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
            >
              Begin your reset
              <span aria-hidden="true">→</span>
            </a>

            <span className="text-sm text-[#F8F5E8]/65">
              A simple, supported start
            </span>
          </div>
        </div>

        {/* Booking card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/20" />

          <div className="relative overflow-hidden rounded-[28px] bg-[#F8F5E8] p-5 text-[#263A2B] shadow-2xl shadow-black/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B705C]">
                  Your programme
                </p>
                <p className="mt-1 font-serif text-2xl text-[#21452B]">
                  The Gentle Reset
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#EFE9C5] text-xl text-[#21452B]">
                ✳
              </div>
            </div>

            <div className="rounded-[20px] bg-[#E8E8D7] p-5 sm:p-6">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[15px] border border-[#21452B]/10 bg-[#D9DDCB] text-center">
                <button
                  type="button"
                  aria-label="Play welcome video from Lakshani"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#21452B] text-xl text-[#DFC24D] shadow-lg transition duration-300 hover:scale-105 hover:bg-[#2F5D39]"
                >
                  <span className="translate-x-0.5">▶</span>
                </button>

                <p className="mt-4 font-serif text-lg text-[#21452B]">
                  A welcome from Lakshani
                </p>
                <p className="mt-1 text-xs text-[#52665C]">
                  Meet your guide · 2 min
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6B705C]">
                  Programme price
                </p>
                <p className="mt-1 font-serif text-5xl text-[#21452B]">
                  €119
                </p>
              </div>

              <span className="mb-1 rounded-full border border-[#D8D0A9] bg-white/70 px-3 py-2 text-xs font-medium text-[#52665C]">
                4-day programme
              </span>
            </div>

            <div className="my-5 h-px bg-[#D8D0A9]" />

            <div className="space-y-3 text-sm text-[#52665C]">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8E8D7] text-[#2F5D39]">
                  ✓
                </span>
                1 personal consultation
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8E8D7] text-[#2F5D39]">
                  ✓
                </span>
                Access for 4 weeks
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8E8D7] text-[#2F5D39]">
                  ✓
                </span>
                Guidance by video and text
              </div>
            </div>

            <a
              href="#booking"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F5D39]"
            >
              Book your Gentle Reset
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-4 text-center text-xs leading-6 text-[#6B705C]">
              Members save 5%, Premium members 10%.{" "}
              <a
                href="/#membership"
                className="font-semibold text-[#21452B] underline decoration-[#DFC24D] underline-offset-4 transition-colors hover:text-[#C14C38]"
              >
                Explore membership
              </a>
            </p>
          </div>

          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-[#DFC24D]/40 bg-[#F8F5E8] px-5 py-3 shadow-lg sm:block">
            <p className="font-serif text-lg text-[#21452B]">
              Small steps, lasting balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
