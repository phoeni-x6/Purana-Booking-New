
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#21452B]">
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#EFE9C5]/10 sm:h-[420px] sm:w-[420px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 h-64 w-64 rounded-full border border-dashed border-[#DFC24D]/20 sm:h-[340px] sm:w-[340px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#2F5D39]/40 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:py-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#DFC24D]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DFC24D] sm:text-xs">
              Ayurveda wellness in your hands
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-5xl font-serif text-5xl font-normal leading-[1.08] tracking-[-0.04em] text-[#EFE9C5] sm:text-6xl md:text-7xl lg:text-[88px]">
            Restore your natural
            <span className="mt-2 block italic text-[#DFC24D]">
              balance.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-sm leading-8 text-[#EFE9C5]/80 sm:text-base sm:leading-9">
            Renew your energy with traditional Ayurveda treatments, personal
            consultations and restorative retreats. Discover simple rituals
            that bring balance into your everyday life.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#learn"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
            >
              Take the free dosha quiz
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#booking"
              className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-[#EFE9C5]/30 px-7 py-4 text-sm font-medium text-[#EFE9C5] transition duration-300 hover:border-[#DFC24D] hover:bg-[#EFE9C5]/5"
            >
              Book a treatment
              <span className="text-[#DFC24D]">→</span>
            </a>
          </div>

          {/* Brand statement */}
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#EFE9C5]/15 pt-6 text-[10px] uppercase tracking-[0.16em] text-[#EFE9C5]/65 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="text-[#DFC24D]">✳</span>
              Traditional wisdom
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#DFC24D]/70 sm:block" />

            <span>Personal care</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#DFC24D]/70 sm:block" />

            <span>Everyday balance</span>
          </div>
        </div>

        {/* Small botanical signature */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 right-8 hidden select-none font-serif text-[180px] italic leading-none text-[#EFE9C5]/[0.06] lg:block xl:right-16 xl:text-[240px]"
        >
          P
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-16 hidden text-4xl text-[#DFC24D]/40 lg:block xl:right-28"
        >
          ✳
        </div>
      </div>

      {/* Gold transition into the next section */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#DFC24D]/50 to-transparent" />
    </section>
  );
}
