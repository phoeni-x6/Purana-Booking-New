
export default function MembershipBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5E8] px-5 pb-16 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[28px] border border-[#2F5D39]/20 bg-[#21452B] px-6 py-8 text-white shadow-xl shadow-[#21452B]/10 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-60 w-60 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-40 h-52 w-52 rounded-full bg-[#DFC24D]/10 blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            {/* Copy */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/30 bg-[#DFC24D]/10 px-3.5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#DFC24D]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D] sm:text-xs">
                  The Purana membership
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#F8F5E8] sm:text-4xl lg:text-[42px]">
                Make your wellbeing journey
                <span className="mt-1 block italic text-[#DFC24D]">
                  a little more rewarding.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                Enjoy 5% off as a member or 10% off with Premium on
                online consultations and Reset programmes. Premium also
                includes two personal online consultations each year
                and a monthly online seminar.
              </p>

              {/* Discount highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="font-serif text-2xl text-[#DFC24D]">
                    5%
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Membership
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/55">
                      Member savings
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-[#DFC24D]/30 bg-[#DFC24D]/10 px-4 py-3">
                  <span className="font-serif text-2xl text-[#DFC24D]">
                    10%
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Premium
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/65">
                      Enhanced savings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="relative flex shrink-0 flex-col gap-3 lg:w-[240px]">
              <a
                href="/#membership"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-center text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#E9D477]"
              >
                Explore membership
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <p className="text-center text-xs leading-5 text-white/55">
                Choose the membership that suits your journey.
              </p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#C14C38]" />
        </div>
      </div>
    </section>
  );
}
