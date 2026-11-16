
const programmes = [
  {
    duration: "4 DAYS · 1 CONSULTATION",
    title: "Gentle Reset",
    description:
      "Improve your day-to-day Ayurveda practice — ideal for your first reset.",
    features: [
      "1 personal consultation with Lakshani",
      "Guided programme with videos and texts",
      "5-day food plan",
      "Simple everyday Ayurveda tips",
    ],
    price: "€119",
    featured: false,
  },
  {
    duration: "7 DAYS · 2 CONSULTATIONS",
    title: "Seasonal Reset",
    description:
      "Rebalance with Ayurveda and adapt your lifestyle to the season. Unlock a dedicated programme for each season when you're ready.",
    features: [
      "Consultation at the start and end",
      "7-day Ayurveda rebalance programme",
      "Lifestyle adaptation for balance",
      "Chat with Lakshani included",
    ],
    price: "€229",
    featured: true,
  },
];

const deepResetOptions = [
  {
    duration: "4 days",
    description: "Gentle Reset + 3 one-to-one consultations",
    price: "€259",
  },
  {
    duration: "7 days",
    description: "Seasonal Reset + 4 one-to-one consultations",
    price: "€349",
  },
];

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        featured
          ? "bg-[#DFC24D]/20 text-[#DFC24D]"
          : "bg-[#EFE9C5] text-[#2F5D39]"
      }`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3 w-3"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z" />
      <path d="M4 21c3-6 7-9 12-12" />
    </svg>
  );
}

export default function DetoxProgrammes() {
  return (
    <section
      id="programmes"
      className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-16 h-[520px] w-[520px] rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-[360px] w-[360px] rounded-full border border-[#D8D0A9]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Editorial introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
                Ayurveda reset at home
              </span>
            </div>

            <h2 className="mt-7 font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Find your rhythm.
              <span className="mt-2 block italic text-[#9A7821]">
                Reset with Ayurveda.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Personally guided by Lakshani in German or English. Discover
              daily rituals, nourishing food and gentle self-care through
              structured programmes designed to fit your everyday life.
            </p>
          </div>

          {/* Intro side note */}
          <div className="relative max-w-md border-l-2 border-[#DFC24D] py-2 pl-6 lg:ml-auto lg:mb-2">
            <span className="font-serif text-2xl italic text-[#533E23]">
              Small steps.
              <br />
              Meaningful changes.
            </span>
            <p className="mt-3 text-xs leading-6 text-[#6B705C]">
              A practical approach to bringing Ayurveda into your everyday
              routine, wherever you are.
            </p>
          </div>
        </div>

        {/* Programme benefits */}
        <div className="mt-9 flex flex-wrap gap-3">
          {[
            "Personal guidance",
            "Practical daily rituals",
            "At your own pace",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#D8D0A9] bg-white/55 px-4 py-2.5 text-xs font-medium text-[#405640]"
            >
              <span className="mr-2 text-[#9A7821]">✦</span>
              {item}
            </span>
          ))}
        </div>

        {/* Section divider */}
        <div className="my-12 flex items-center gap-4 lg:my-16">
          <span className="h-px flex-1 bg-[#D8D0A9]" />
          <span className="font-serif text-sm italic text-[#9A7821]">
            Choose your reset
          </span>
          <span className="h-px flex-1 bg-[#D8D0A9]" />
        </div>

        {/* Programme cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <article
              key={programme.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-1.5 ${
                programme.featured
                  ? "border-[#2F5D39] bg-[#2F5D39] shadow-xl shadow-[#21452B]/15"
                  : "border-[#D8D0A9] bg-[#FBF9F1] shadow-sm hover:shadow-xl hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Top accent */}
              <div
                className={`h-1.5 ${
                  programme.featured
                    ? "bg-gradient-to-r from-[#DFC24D] via-[#E9D88C] to-[#C14C38]"
                    : "bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#EFE9C5]"
                }`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-[#E9D88C]"
                        : "text-[#8A8062]"
                    }`}
                  >
                    {programme.duration}
                  </span>

                  {programme.featured && (
                    <span className="rounded-full bg-[#DFC24D] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#21452B]">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      programme.featured
                        ? "bg-white/10 text-[#DFC24D]"
                        : "bg-[#EFE9C5] text-[#2F5D39]"
                    }`}
                  >
                    <LeafIcon />
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-white/55"
                        : "text-[#8A8062]"
                    }`}
                  >
                    {index === 0 ? "Start gently" : "Find your balance"}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-serif text-3xl sm:text-4xl ${
                    programme.featured
                      ? "text-[#FFFDF3]"
                      : "text-[#21452B]"
                  }`}
                >
                  {programme.title}
                </h3>

                <p
                  className={`mt-4 min-h-[96px] text-sm leading-7 ${
                    programme.featured
                      ? "text-white/75"
                      : "text-[#6B705C]"
                  }`}
                >
                  {programme.description}
                </p>

                <div
                  className={`my-7 h-px ${
                    programme.featured
                      ? "bg-white/20"
                      : "bg-[#D8D0A9]"
                  }`}
                />

                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    programme.featured
                      ? "text-[#E9D88C]"
                      : "text-[#533E23]"
                  }`}
                >
                  What’s included
                </p>

                <ul className="mt-5 space-y-4">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon featured={programme.featured} />
                      <span
                        className={`text-sm leading-6 ${
                          programme.featured
                            ? "text-white/90"
                            : "text-[#405640]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Season selection */}
                {programme.featured && (
                  <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E9D88C]">
                      Choose your season
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {seasons.map((season) => (
                        <span
                          key={season}
                          className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/90 transition hover:border-[#DFC24D] hover:bg-white/10"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div className="mt-auto pt-8">
                  <div
                    className={`mb-5 h-px ${
                      programme.featured
                        ? "bg-white/20"
                        : "bg-[#D8D0A9]"
                    }`}
                  />

                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      programme.featured
                        ? "text-white/55"
                        : "text-[#8A8062]"
                    }`}
                  >
                    Programme price
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span
                      className={`font-serif text-4xl ${
                        programme.featured
                          ? "text-[#FFFDF3]"
                          : "text-[#21452B]"
                      }`}
                    >
                      {programme.price}
                    </span>
                    {programme.featured && (
                      <span className="text-xs text-white/65">
                        / season
                      </span>
                    )}
                  </div>

                  <a
                    href="#booking"
                    className={`group mt-6 flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                      programme.featured
                        ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#E9D477]"
                        : "bg-[#21452B] text-white hover:bg-[#2F5D39]"
                    }`}
                  >
                    Book {programme.title}
                    <ArrowIcon />
                  </a>

                  <a
                    href="#how-it-works"
                    className={`mt-5 flex items-center justify-center text-xs underline decoration-current/40 underline-offset-4 transition hover:opacity-70 ${
                      programme.featured
                        ? "text-white/70"
                        : "text-[#6B705C]"
                    }`}
                  >
                    More information
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Deep Reset */}
          <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F0EBDD] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#533E23]/10">
            <div className="h-1.5 bg-gradient-to-r from-[#C14C38] via-[#DFC24D] to-[#2F5D39]" />

            <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A8062]">
                1:1 GUIDANCE · 2 OPTIONS
              </span>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E5DEB7] text-[#533E23]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8062]">
                  Deeper personal support
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Deep Reset
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-[#6B705C]">
                Go deeper with additional one-to-one consultations.
                Choose the Gentle or Seasonal Reset, with more personal
                guidance from Lakshani throughout your programme.
              </p>

              <div className="my-7 h-px bg-[#D8D0A9]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#533E23]">
                Choose your programme
              </p>

              <div className="mt-5 space-y-3">
                {deepResetOptions.map((option, index) => (
                  <div
                    key={option.duration}
                    className="rounded-2xl border border-[#D8D0A9] bg-[#FBF9F1] p-4 transition duration-300 hover:border-[#2F5D39]/60 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex rounded-full bg-[#EFE9C5] px-3 py-1 text-[10px] font-semibold text-[#21452B]">
                          {option.duration}
                        </span>
                        <p className="mt-3 text-sm font-semibold text-[#21452B]">
                          {index === 0
                            ? "Gentle Deep Reset"
                            : "Seasonal Deep Reset"}
                        </p>
                      </div>

                      <span className="font-serif text-2xl text-[#21452B]">
                        {option.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="#booking"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#2F5D39]"
                >
                  Choose your Deep Reset
                  <ArrowIcon />
                </a>

                <a
                  href="#how-it-works"
                  className="mt-5 flex justify-center text-xs text-[#6B705C] underline decoration-[#D8D0A9] underline-offset-4 transition hover:text-[#21452B]"
                >
                  More information
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Personal guidance closing panel */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#EFE9C5]/60 p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-[#D8D0A9]/70"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2F5D39] text-[#EFE9C5]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 21s-7-4.4-7-11V5l7-2 7 2v5c0 6.6-7 11-7 11Z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </span>

              <div className="max-w-xl">
                <p className="font-serif text-xl text-[#21452B] sm:text-2xl">
                  Personal guidance, at your own pace.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                  Not sure which programme fits you? Start with a personal
                  consultation to discuss your goals and options.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full border border-[#2F5D39] bg-[#FBF9F1]/70 px-6 py-3.5 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#2F5D39] hover:text-white sm:self-center"
            >
              Explore consultations
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
