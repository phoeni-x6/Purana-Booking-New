
const programmes = [
  {
    duration: "4 days · 1 consultation",
    title: "Gentle Reset",
    subtitle: "Start gently. Build healthy habits.",
    description:
      "A gentle introduction to improve your day-to-day Ayurveda practice — ideal for your first reset.",
    features: [
      "1 personal Ayurveda consultation",
      "Guided programme with videos and texts",
      "5-day food plan",
      "Simple everyday Ayurveda tips",
    ],
    price: "€119",
    featured: false,
  },
  {
    duration: "7 days · 2 consultations",
    title: "Seasonal Reset",
    subtitle: "Reconnect with the rhythm of nature.",
    description:
      "Rebalance with Ayurveda and adapt your lifestyle to the season. A dedicated package for every season — unlock each one when you're ready.",
    features: [
      "Consultation at the start and at the end",
      "7-day Ayurveda rebalance programme",
      "Lifestyle adaptation for balance",
      "Chat with our team included",
    ],
    price: "€229",
    featured: true,
  },
  {
    duration: "1:1 guidance · 2 options",
    title: "Deep Reset",
    subtitle: "Personal guidance, throughout.",
    description:
      "Our most personal programme, with one-to-one guidance from a Purana Ayurveda expert throughout.",
    features: [],
    price: "",
    featured: false,
  },
];

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

export default function MembershipRetreats() {
  return (
    <section
      id="reset-programmes"
      className="relative isolate overflow-hidden bg-[#EFE9C5] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 -z-10 h-48 w-48 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#533E23]">
              Ayurveda Reset at Home
            </p>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl md:text-5xl">
            Your guided Ayurveda routine, at home
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Can’t make it to Steinberg am See? Our at-home packages guide you
            step by step through an Ayurvedic reset — daily rituals, nourishing
            food and gentle self-care, at your own pace.
          </p>

          {/* Member savings */}
          <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] p-3 sm:gap-4 sm:px-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#21452B] text-lg text-[#DFC24D]">
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold text-[#21452B]">
                Exclusive member savings
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                Members save 5% · Premium members save 10%
              </p>
            </div>
          </div>
        </div>

        {/* Programme cards */}
        <div className="mt-12 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <article
              key={programme.title}
              className={`group relative flex flex-col overflow-hidden rounded-[26px] border transition duration-300 hover:-translate-y-1 ${
                programme.featured
                  ? "border-[#DFC24D]/60 bg-[#21452B] text-[#F8F5E8] shadow-2xl shadow-[#21452B]/15"
                  : "border-[#D8D0A9] bg-[#F8F5E8] text-[#263A2B] shadow-sm hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Card top accent */}
              <div
                className={`h-1.5 ${
                  programme.featured
                    ? "bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#C14C38]"
                    : "bg-gradient-to-r from-[#EFE9C5] via-[#DFC24D] to-[#EFE9C5]"
                }`}
              />

              {/* Background number */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-5 top-12 font-serif text-7xl ${
                  programme.featured
                    ? "text-[#EFE9C5]/[0.06]"
                    : "text-[#2F5D39]/[0.06]"
                }`}
              >
                0{index + 1}
              </span>

              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                {/* Duration label */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      programme.featured
                        ? "bg-[#DFC24D]/15 text-[#DFC24D]"
                        : "bg-[#EFE9C5] text-[#533E23]"
                    }`}
                  >
                    {programme.duration}
                  </span>

                  {programme.featured && (
                    <span className="rounded-full bg-[#DFC24D] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#21452B]">
                      Seasonal favourite
                    </span>
                  )}
                </div>

                {/* Title and description */}
                <h3
                  className={`mt-6 font-serif text-2xl sm:text-3xl ${
                    programme.featured
                      ? "text-[#F8F5E8]"
                      : "text-[#21452B]"
                  }`}
                >
                  {programme.title}
                </h3>

                <p
                  className={`mt-2 text-sm font-medium ${
                    programme.featured
                      ? "text-[#DFC24D]"
                      : "text-[#533E23]"
                  }`}
                >
                  {programme.subtitle}
                </p>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    programme.featured
                      ? "text-[#EFE9C5]/80"
                      : "text-[#6B705C]"
                  }`}
                >
                  {programme.description}
                </p>

                {/* Seasonal options */}
                {programme.title === "Seasonal Reset" && (
                  <div className="mt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EFE9C5]/70">
                      Explore the seasons
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {seasons.map((season, seasonIndex) => (
                        <span
                          key={season}
                          className={`rounded-full border px-3 py-2 text-xs ${
                            seasonIndex === 0
                              ? "border-[#DFC24D]/60 bg-[#DFC24D]/15 text-[#DFC24D]"
                              : "border-[#EFE9C5]/20 text-[#F8F5E8]/85"
                          }`}
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Included features */}
                {programme.features.length > 0 && (
                  <div
                    className={`mt-6 border-t pt-5 ${
                      programme.featured
                        ? "border-[#EFE9C5]/15"
                        : "border-[#D8D0A9]"
                    }`}
                  >
                    <p
                      className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        programme.featured
                          ? "text-[#DFC24D]"
                          : "text-[#533E23]"
                      }`}
                    >
                      Your programme includes
                    </p>

                    <ul className="space-y-4">
                      {programme.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              programme.featured
                                ? "bg-[#DFC24D]/15 text-[#DFC24D]"
                                : "bg-[#2F5D39]/10 text-[#2F5D39]"
                            }`}
                          >
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              className="h-3.5 w-3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                d="m4 10 4 4 8-8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>

                          <span
                            className={
                              programme.featured
                                ? "text-[#F8F5E8]/90"
                                : "text-[#263A2B]"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deep Reset options */}
                {programme.title === "Deep Reset" && (
                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/50 p-4 transition hover:border-[#DFC24D]">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-serif text-xl text-[#21452B]">
                            4 days
                          </p>
                          <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                            3 one-to-one consultations
                          </p>
                        </div>
                        <p className="font-serif text-2xl text-[#21452B]">
                          €259
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/50 p-4 transition hover:border-[#DFC24D]">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-serif text-xl text-[#21452B]">
                            7 days
                          </p>
                          <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                            4 one-to-one consultations
                          </p>
                        </div>
                        <p className="font-serif text-2xl text-[#21452B]">
                          €349
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Price */}
                {programme.price && (
                  <div
                    className={`mt-auto border-t pt-6 ${
                      programme.featured
                        ? "mt-7 border-[#EFE9C5]/15"
                        : "mt-7 border-[#D8D0A9]"
                    }`}
                  >
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        programme.featured
                          ? "text-[#EFE9C5]/65"
                          : "text-[#6B705C]"
                      }`}
                    >
                      Programme price
                    </p>

                    <p className="mt-2 font-serif text-4xl">
                      {programme.price}
                    </p>
                  </div>
                )}

                {/* Call to action */}
                <a
                  href="#waitlist"
                  className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-center text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    programme.featured
                      ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#EFE9C5] focus:ring-[#DFC24D] focus:ring-offset-[#21452B]"
                      : "border border-[#2F5D39]/30 bg-transparent text-[#21452B] hover:border-[#2F5D39] hover:bg-[#EFE9C5] focus:ring-[#2F5D39] focus:ring-offset-[#F8F5E8]"
                  }`}
                >
                  {programme.title === "Deep Reset"
                    ? "Choose your Deep Reset"
                    : "See programme"}

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="text-xl text-[#C14C38]" aria-hidden="true">
            ✳
          </span>

          <p className="text-sm leading-6 text-[#6B705C]">
            Small daily rituals. Thoughtful guidance. Ayurveda at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
}
