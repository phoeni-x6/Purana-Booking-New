export default function DeepResetHero() {
  return (
    <section className="relative overflow-hidden bg-[#21452B] text-[#F8F5E8]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#DFC24D]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full border border-[#DFC24D]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#2F5D39]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Top label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/35 bg-white/[0.05] px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
            Online, wherever you are
          </p>
        </div>

        <div className="mt-7 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Main content */}
          <div className="min-w-0">
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#F8F5E8] sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-[#F8F5E8]">
                Online consultation
              </span>

              <span className="mt-2 block text-[#DFC24D]">
                &amp; Ayurveda detox at home
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#F8F5E8]/90 sm:text-lg">
              Start with a 45-minute online consultation, or follow a guided
              Reset at Home programme with Lakshani — with videos, food plans
              and personal support.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Explore consultations
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#programmes"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Explore reset programmes
              </a>
            </div>

            {/* Membership savings */}
            <div className="mt-10 border-t border-white/15 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EFE9C5]/80">
                A little extra for members
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/[0.05] px-4 py-3">
                  <span className="font-serif text-2xl text-[#DFC24D]">
                    5%
                  </span>

                  <span className="text-xs leading-5 text-white/90">
                    Membership
                    <br />
                    savings
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-[#DFC24D]/50 bg-[#DFC24D] px-4 py-3 text-[#21452B]">
                  <span className="font-serif text-2xl">10%</span>

                  <span className="text-xs font-medium leading-5">
                    Premium membership
                    <br />
                    savings
                  </span>
                </div>
              </div>

              <a
                href="/#membership"
                className="mt-5 inline-flex items-center gap-2 text-sm text-[#F8F5E8] underline decoration-[#DFC24D]/70 underline-offset-4 transition-colors hover:text-[#DFC24D]"
              >
                Become a member or upgrade
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Programme overview card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/20"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9]/50 bg-[#F8F5E8] p-6 text-[#263A2B] shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B705C]">
                    Your path to balance
                  </p>

                  <h2 className="mt-2 font-serif text-2xl leading-tight text-[#21452B] sm:text-3xl">
                    Start where you are.
                  </h2>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#EFE9C5] text-xl text-[#21452B]">
                  ✳
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#52634F]">
                Choose the support that fits your needs, your routine and your
                personal wellness goals.
              </p>

              <div className="mt-7 space-y-3">
                {/* Consultation link */}
                <a
                  href="#consultation"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition duration-300 hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xl text-[#2F5D39]">
                    ♧
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Personal consultation
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      One-to-one guidance with Lakshani
                    </span>
                  </span>

                  <span className="text-lg text-[#9A6115] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* Reset programme link */}
                <a
                  href="#programmes"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition duration-300 hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFE9C5] text-xl text-[#2F5D39]">
                    ✿
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Reset at Home
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Guided programmes, recipes and daily rituals
                    </span>
                  </span>

                  <span className="text-lg text-[#9A6115] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Support message */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#21452B] p-4 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-[#DFC24D]">
                  ✧
                </span>

                <p className="text-xs leading-6 text-white/90">
                  Personal support and practical Ayurvedic routines, wherever
                  you are.
                </p>
              </div>
            </div>

            {/* Floating caption */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-[#DFC24D]/40 bg-[#F8F5E8] px-5 py-3 shadow-lg sm:block">
              <p className="font-serif text-lg text-[#21452B]">
                Your journey, your rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
