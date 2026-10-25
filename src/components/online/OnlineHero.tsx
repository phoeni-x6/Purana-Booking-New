
export default function OnlineHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#21452B] text-[#EFE9C5]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full border border-[#EFE9C5]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-dashed border-[#DFC24D]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-[400px] w-[400px] rounded-full bg-[#2F5D39]/40 blur-3xl"
      />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#DFC24D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
              Online, wherever you are
            </p>
          </div>

          <p className="mb-5 text-xs tracking-wide text-[#EFE9C5]/65">
            Personal guidance · Flexible support · At-home wellness
          </p>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-5xl lg:text-7xl">
            Your Ayurveda journey,
            <span className="mt-1 block italic text-[#DFC24D]">
              wherever life takes you.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#EFE9C5]/80 sm:text-base">
            Start with a 45-minute online consultation, or follow a guided
            Reset at Home programme with Lakshani — with videos, food plans
            and personal support to help bring Ayurveda into your everyday
            routine.
          </p>

          {/* Service highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFE9C5]/20 bg-[#EFE9C5]/5 px-4 py-2.5 text-xs text-[#EFE9C5]/90 sm:text-sm">
              <span className="text-[#DFC24D]">✳</span>
              45-minute consultation
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFE9C5]/20 bg-[#EFE9C5]/5 px-4 py-2.5 text-xs text-[#EFE9C5]/90 sm:text-sm">
              <span className="text-[#DFC24D]">✳</span>
              Guided home programmes
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFE9C5]/20 bg-[#EFE9C5]/5 px-4 py-2.5 text-xs text-[#EFE9C5]/90 sm:text-sm">
              <span className="text-[#DFC24D]">✳</span>
              Personal support
            </span>
          </div>

          {/* Membership savings */}
          <div className="mt-9 flex flex-col gap-4 border-t border-[#EFE9C5]/15 pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <div className="flex items-center gap-3 rounded-2xl border border-[#EFE9C5]/15 bg-[#EFE9C5]/5 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DFC24D]/30 text-lg text-[#DFC24D]">
                ✳
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#EFE9C5]/60">
                  Membership
                </p>
                <p className="mt-1 text-sm font-semibold text-[#EFE9C5]">
                  Save 5%
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#DFC24D]/30 bg-[#DFC24D]/10 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DFC24D] text-lg text-[#21452B]">
                ✦
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#EFE9C5]/60">
                  Premium membership
                </p>
                <p className="mt-1 text-sm font-semibold text-[#DFC24D]">
                  Save 10%
                </p>
              </div>
            </div>

            <a
              href="/#membership"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#EFE9C5] transition-colors hover:text-[#DFC24D]"
            >
              Become a member or upgrade
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
