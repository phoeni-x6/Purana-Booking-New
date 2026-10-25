
const miniRetreats = [
  {
    duration: "3 DAYS · 2 NIGHTS · PRIVATE",
    title: "Mini Retreat – 3 days",
    description:
      "Consultation and treatment on arrival, a full Ayurveda day with private yoga in your chalet and evening sound meditation, and an Ayurveda nutrition plan to take home.",
    price: "€[PRICE]",
    number: "01",
  },
  {
    duration: "4 DAYS · 3 NIGHTS · PRIVATE",
    title: "Mini Retreat – 4 days",
    description:
      "Everything in the 3-day retreat plus an extra day with optional yoga, a 1-hour Ayurveda treatment and optional evening meditation.",
    price: "€[PRICE]",
    number: "02",
  },
];

const retreatTypes = [
  "Rasayana retreats",
  "Detox retreats",
  "Renewal retreats",
];

const otherRetreats = ["[Retreat name]", "[Retreat name]"];

export default function RetreatsGermany() {
  return (
    <section
      id="germany"
      className="relative isolate overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 h-64 w-64 rounded-full border border-dashed border-[#DFC24D]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[500px] h-96 w-96 rounded-full bg-[#EFE9C5]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C14C38]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C14C38] sm:text-xs">
                01 · Retreats in Germany
              </p>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Ayurveda retreats
              <span className="mt-1 block italic text-[#2F5D39]">
                close to home.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#6B705C] sm:text-base">
              From private mini retreats at the Chalet Resort Steinberg am
              See to group retreats at beautiful places across Germany. Each
              retreat combines tailor-made Ayurveda treatments, yoga,
              meditation and practical guidance for your everyday life — so
              you return home with renewed energy and a clear plan to keep
              your balance.
            </p>
          </div>

          {/* Intro highlight */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#EFE9C5]/60 p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#2F5D39]/10"
            />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-xl text-[#DFC24D]">
                ✳
              </div>

              <div>
                <p className="font-serif text-xl text-[#21452B]">
                  Find your balance
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                  Time for traditional Ayurveda, mindful movement and
                  restorative moments in beautiful surroundings.
                </p>
              </div>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {retreatTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8] px-3.5 py-2 text-xs font-medium text-[#2F5D39]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Private mini retreats */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C14C38]">
                Your private escape
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#21452B] sm:text-3xl">
                Mini retreats at the Chalet Resort
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6B705C]">
              Choose the length of stay that suits your time and needs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {miniRetreats.map((retreat, index) => (
              <article
                key={retreat.number}
                className={`group relative overflow-hidden rounded-[26px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  index === 1
                    ? "border-[#21452B] bg-[#21452B] text-[#EFE9C5]"
                    : "border-[#D8D0A9] bg-white text-[#263A2B]"
                }`}
              >
                {/* Card decoration */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border ${
                    index === 1
                      ? "border-[#DFC24D]/20"
                      : "border-[#2F5D39]/10"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-dashed ${
                    index === 1
                      ? "border-[#DFC24D]/20"
                      : "border-[#2F5D39]/10"
                  }`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        index === 1 ? "text-[#DFC24D]" : "text-[#6B705C]"
                      }`}
                    >
                      {retreat.duration}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-serif text-sm ${
                        index === 1
                          ? "border-[#DFC24D]/40 text-[#DFC24D]"
                          : "border-[#D8D0A9] text-[#2F5D39]"
                      }`}
                    >
                      {retreat.number}
                    </span>
                  </div>

                  <h4
                    className={`mt-6 font-serif text-2xl sm:text-3xl ${
                      index === 1 ? "text-[#EFE9C5]" : "text-[#21452B]"
                    }`}
                  >
                    {retreat.title}
                  </h4>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 1 ? "text-[#EFE9C5]/75" : "text-[#6B705C]"
                    }`}
                  >
                    {retreat.description}
                  </p>

                  <div
                    className={`my-7 h-px ${
                      index === 1 ? "bg-[#EFE9C5]/15" : "bg-[#D8D0A9]"
                    }`}
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          index === 1
                            ? "text-[#EFE9C5]/55"
                            : "text-[#6B705C]"
                        }`}
                      >
                        Retreat price
                      </p>
                      <p
                        className={`mt-1 font-serif text-3xl ${
                          index === 1 ? "text-[#DFC24D]" : "text-[#21452B]"
                        }`}
                      >
                        {retreat.price}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className={`group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                        index === 1
                          ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#EFE9C5]"
                          : "bg-[#21452B] text-[#EFE9C5] hover:bg-[#2F5D39]"
                      }`}
                    >
                      Day-by-day plan
                      <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Chalet actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21452B]/25 px-6 py-3 text-sm font-semibold text-[#21452B] transition hover:border-[#2F5D39] hover:bg-[#EFE9C5]/60"
            >
              Chalet Resort information
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21452B]/25 px-6 py-3 text-sm font-semibold text-[#21452B] transition hover:border-[#2F5D39] hover:bg-[#EFE9C5]/60"
            >
              Contact us to book
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Other retreats */}
        <div className="mt-20 border-t border-[#D8D0A9] pt-12 sm:mt-24 sm:pt-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C14C38]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C14C38]">
                  Beyond the chalet
                </p>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
                Retreats across
                <span className="block italic text-[#2F5D39]">
                  Germany.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6B705C]">
                Group retreats at selected venues — Rasayana, detox and
                renewal retreats in nature, by lakes and in the mountains.
                New dates are announced here and in our newsletter.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 text-xs font-medium text-[#2F5D39]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8D0A9] text-[#C14C38]">
                  ✳
                </span>
                <span>Nature · Renewal · Wellbeing</span>
              </div>
            </div>

            <div className="space-y-4">
              {otherRetreats.map((name, index) => (
                <article
                  key={`${name}-${index}`}
                  className="group rounded-[22px] border border-[#D8D0A9] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F5D39]/40 hover:shadow-lg sm:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] font-serif text-sm text-[#2F5D39]">
                        0{index + 1}
                      </span>

                      <div>
                        <h4 className="font-serif text-xl text-[#21452B]">
                          {name}
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-[#6B705C]">
                          [Location] · [Dates] · [X] days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <span className="whitespace-nowrap font-serif text-2xl text-[#21452B]">
                        €[PRICE]
                      </span>

                      <a
                        href="#contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#21452B] px-5 py-3 text-sm font-semibold text-[#EFE9C5] transition hover:bg-[#2F5D39]"
                      >
                        More & register
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
