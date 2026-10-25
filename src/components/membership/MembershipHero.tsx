
export default function MembershipHero() {
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-24">
        {/* Hero content */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#DFC24D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
              The Purana membership card
            </p>
          </div>

          <p className="mb-5 text-xs tracking-wide text-[#EFE9C5]/65">
            Starts 1 January 2027
          </p>

          <h1 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-5xl lg:text-6xl">
            Ayurveda in your
            <span className="mt-1 block italic text-[#DFC24D]">
              everyday life.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-8 text-[#EFE9C5]/80 sm:text-base">
            Podcasts, monthly Ayurveda tips and savings on treatments,
            Nivartana products, chalet stays and local restaurants — from
            €9.99 a month.
          </p>

          {/* Price highlight */}
          <div className="mt-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10">
              <span className="text-xl text-[#DFC24D]">✳</span>
            </div>

            <div>
              <p className="font-serif text-2xl text-[#EFE9C5]">
                From €9.99
                <span className="ml-2 font-sans text-xs text-[#EFE9C5]/65">
                  / month
                </span>
              </p>
              <p className="mt-1 text-xs text-[#EFE9C5]/60">
                A little more balance, every day.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#waitlist"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21452B]"
            >
              Join the waiting list
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#benefits"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#EFE9C5]/30 px-7 py-4 text-sm font-medium text-[#EFE9C5] transition duration-300 hover:border-[#DFC24D] hover:bg-white/5 hover:text-[#DFC24D]"
            >
              See all advantages
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        {/* Membership card preview */}
        <div className="relative mx-auto w-full max-w-md px-2 py-5 sm:px-5">
          {/* Card glow */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[35px] bg-[#DFC24D]/10 blur-3xl"
          />

          {/* Outer card */}
          <div className="relative rotate-1 rounded-[28px] border border-[#DFC24D]/35 bg-gradient-to-br from-[#2F5D39] via-[#21452B] to-[#173522] p-1 shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:rotate-0">
            <div className="relative overflow-hidden rounded-[24px] border border-[#EFE9C5]/10 p-7 sm:p-9">
              {/* Card decoration */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#DFC24D]/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-9 h-40 w-40 rounded-full border border-dashed border-[#DFC24D]/25"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#533E23]/30 blur-2xl"
              />

              {/* Card heading */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl tracking-[0.16em] text-[#EFE9C5] sm:text-3xl">
                    PURANA
                  </p>
                  <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.28em] text-[#EFE9C5]/65">
                    Ayurveda & wellness
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10">
                  <span className="text-2xl text-[#DFC24D]">✳</span>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="relative my-8 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#EFE9C5]/20" />
                <span className="text-xs text-[#DFC24D]">✦</span>
                <span className="h-px flex-1 bg-[#EFE9C5]/20" />
              </div>

              {/* Member details */}
              <div className="relative">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#DFC24D]">
                  Premium member
                </p>

                <p className="mt-3 font-serif text-3xl italic text-[#EFE9C5] sm:text-4xl">
                  Anna Müller
                </p>

                <p className="mt-2 text-xs text-[#EFE9C5]/60">
                  Your personal wellness membership
                </p>
              </div>

              {/* Card footer */}
              <div className="relative mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-[#EFE9C5]/20 pt-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#EFE9C5]/60">
                    Member privilege
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#EFE9C5]">
                    10% partner savings
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/30 bg-[#DFC24D]/10 px-3 py-2 text-[10px] font-medium text-[#DFC24D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
                  Active
                </span>
              </div>

              {/* Bottom card ornament */}
              <div className="relative mt-7 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.22em] text-[#EFE9C5]/40">
                  Balance · Nature · Wellbeing
                </span>
                <span className="font-serif text-lg italic text-[#DFC24D]/70">
                  P.
                </span>
              </div>
            </div>
          </div>

          {/* Floating price label */}
          <div className="absolute -bottom-1 -left-1 rounded-2xl border border-[#D8D0A9]/70 bg-[#F8F5E8] px-5 py-4 shadow-xl sm:-left-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Membership from
            </p>
            <p className="mt-1 font-serif text-2xl text-[#21452B]">
              €9.99
              <span className="ml-1 font-sans text-xs text-[#6B705C]">
                / month
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
