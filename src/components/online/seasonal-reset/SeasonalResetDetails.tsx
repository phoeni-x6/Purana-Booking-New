
const suitability = [
  "You feel the change of season in your energy, sleep or mood",
  "You did a Gentle Reset and want to go deeper",
  "You want a yearly rhythm: one reset each season",
  "You like personal support during the week",
  "You can take 45–60 minutes a day",
];

const benefits = [
  {
    number: "01",
    symbol: "✳",
    title: "In tune with the season",
    description:
      "Food, routine and rituals change with spring, summer, autumn and winter.",
  },
  {
    number: "02",
    symbol: "✧",
    title: "Two consultations",
    description:
      "A personal plan at the start and a review at the end.",
  },
  {
    number: "03",
    symbol: "♡",
    title: "Support all week",
    description: "Chat with Lakshani in your portal.",
  },
  {
    number: "04",
    symbol: "❋",
    title: "A plan to continue",
    description: "You finish with your next 4 weeks mapped out.",
  },
];

export default function SeasonalResetDetails() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5E8]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full border border-[#D8D0A9]/50" />
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#D8D0A9]/40" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        {/* Who it is for */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Who it is for
            </p>
          </div>

          <h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
            Is this the right reset for you?
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C] sm:text-base">
            A little more guidance, a deeper seasonal rhythm, and support
            to help you build habits that fit your everyday life.
          </p>

          <ul className="mt-8 space-y-4">
            {suitability.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[#D8D0A9]/60 bg-white/70 p-4 transition duration-300 hover:border-[#DFC24D] hover:bg-white sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-sm font-semibold text-[#DFC24D]">
                  {index + 1}
                </span>

                <span className="pt-1 text-sm leading-6 text-[#263A2B]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#EFE9C5]/70 p-5">
            <span className="text-xl text-[#9A6115]" aria-hidden="true">
              ✧
            </span>
            <p className="text-sm leading-6 text-[#52665C]">
              The Seasonal Reset is designed for people who want to make
              self-care a regular part of their changing seasons.
            </p>
          </div>
        </div>

        {/* Why it works */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Why it works
            </p>
          </div>

          <h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
            What makes it different
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C] sm:text-base">
            More than a seven-day programme — a personal approach that
            adapts to the season and helps you plan what comes next.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-[24px] border border-[#D8D0A9]/70 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#21452B]/5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8E8D7] font-serif text-2xl text-[#2F5D39] transition-colors group-hover:bg-[#EFE9C5]">
                    {benefit.symbol}
                  </span>

                  <span className="font-serif text-sm text-[#9A6115]/70">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-snug text-[#21452B]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  {benefit.description}
                </p>

                <div className="mt-5 h-px w-10 bg-[#DFC24D] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Closing message */}
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[#21452B] px-7 py-8 text-[#F8F5E8] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-[#DFC24D]/20" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                Your rhythm, your season
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Make space for a fresh start.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
                Seven days of seasonal guidance, personal support and
                practical routines to carry forward.
              </p>
            </div>

            <a
              href="#booking"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5] sm:self-center"
            >
              Explore the reset
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
