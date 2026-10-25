
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
          ? "bg-[#DFC24D]/15 text-[#DFC24D]"
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
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function DetoxProgrammes() {
  return (
    <section
      id="programmes"
      className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-24 h-96 w-96 rounded-full border border-[#D8D0A9]/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-36 h-72 w-72 rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
              Ayurveda reset at home
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
            Find your rhythm.
            <span className="mt-1 block italic text-[#9A7821]">
              Reset with Ayurveda.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Personally guided by Lakshani in German or English. Discover
            daily rituals, nourishing food and gentle self-care through
            structured programmes designed to fit your everyday life.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Personal guidance",
              "Practical daily rituals",
              "At your own pace",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-3.5 py-2 text-xs font-medium text-[#21452B]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Programme cards */}
        <div className="mt-12 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                programme.featured
                  ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-xl shadow-[#21452B]/15"
                  : "border-[#D8D0A9] bg-white text-[#263A2B] shadow-sm hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Card accent */}
              <div
                className={`h-1.5 ${
                  programme.featured
                    ? "bg-gradient-to-r from-[#DFC24D] via-[#E8D88C] to-[#C14C38]"
                    : "bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#EFE9C5]"
                }`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] ${
                      programme.featured
                        ? "text-[#DFC24D]"
                        : "text-[#6B705C]"
                    }`}
                  >
                    {programme.duration}
                  </span>

                  {programme.featured && (
                    <span className="shrink-0 rounded-full bg-[#DFC24D] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#21452B]">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-serif text-3xl">
                  {programme.title}
                </h3>

                <p
                  className={`mt-4 min-h-[84px] text-sm leading-6 ${
                    programme.featured
                      ? "text-white/75"
                      : "text-[#6B705C]"
                  }`}
                >
                  {programme.description}
                </p>

                <div
                  className={`my-6 h-px ${
                    programme.featured
                      ? "bg-white/15"
                      : "bg-[#D8D0A9]/70"
                  }`}
                />

                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    programme.featured
                      ? "text-[#DFC24D]"
                      : "text-[#533E23]"
                  }`}
                >
                  What’s included
                </p>

                <ul className="mt-5 space-y-4 text-sm leading-5">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon featured={programme.featured} />
                      <span
                        className={
                          programme.featured
                            ? "text-white/90"
                            : "text-[#405640]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {programme.featured && (
                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFC24D]">
                      Choose your season
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {seasons.map((season) => (
                        <span
                          key={season}
                          className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/90 transition hover:border-[#DFC24D] hover:bg-white/10"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing and actions */}
                <div
                  className={`mt-auto pt-8 ${
                    programme.featured ? "text-white" : ""
                  }`}
                >
                  <div
                    className={`mb-5 h-px ${
                      programme.featured
                        ? "bg-white/15"
                        : "bg-[#D8D0A9]/70"
                    }`}
                  />

                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          programme.featured
                            ? "text-white/55"
                            : "text-[#8A8C73]"
                        }`}
                      >
                        Programme price
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-serif text-4xl">
                          {programme.price}
                        </span>
                        {programme.featured && (
                          <span className="text-xs text-white/65">
                            / season
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className={`group mt-5 flex w-full items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300 ${
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
                    className={`mt-5 flex items-center justify-center gap-1 text-xs underline decoration-current/40 underline-offset-4 transition hover:opacity-70 ${
                      programme.featured
                        ? "text-white/75"
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
          <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#FDFBF4] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#533E23]/10">
            <div className="h-1.5 bg-gradient-to-r from-[#C14C38] via-[#DFC24D] to-[#2F5D39]" />

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B705C]">
                1:1 GUIDANCE · 2 OPTIONS
              </span>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B]">
                Deep Reset
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6B705C]">
                Go deeper with additional one-to-one consultations.
                Choose the Gentle or Seasonal Reset, with more personal
                guidance from Lakshani throughout your programme.
              </p>

              <div className="my-6 h-px bg-[#D8D0A9]/70" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#533E23]">
                Choose your programme
              </p>

              <div className="mt-4 space-y-3">
                {deepResetOptions.map((option, index) => (
                  <div
                    key={option.duration}
                    className="rounded-2xl border border-[#D8D0A9] bg-white p-4 transition hover:border-[#2F5D39]/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex rounded-full bg-[#EFE9C5] px-2.5 py-1 text-[10px] font-semibold text-[#21452B]">
                          {option.duration}
                        </span>
                        <p className="mt-3 text-sm font-semibold text-[#21452B]">
                          {index === 0 ? "Gentle Deep Reset" : "Seasonal Deep Reset"}
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

              <div className="mt-auto pt-6">
                <a
                  href="#booking"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2F5D39]"
                >
                  Choose your Deep Reset
                  <ArrowIcon />
                </a>

                <a
                  href="#how-it-works"
                  className="mt-5 block text-center text-xs text-[#6B705C] underline decoration-[#D8D0A9] underline-offset-4 transition hover:text-[#21452B]"
                >
                  More information
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Closing note */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#D8D0A9] bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#533E23]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 21s-7-4.4-7-11V5l7-2 7 2v5c0 6.6-7 11-7 11Z" />
                <path d="M9 12h6M12 9v6" />
              </svg>
            </span>

            <div>
              <p className="text-sm font-semibold text-[#21452B]">
                Personal guidance, at your own pace
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                Not sure which programme fits you? Start with a personal
                consultation to discuss your goals and options.
              </p>
            </div>
          </div>

          <a
            href="#consultation"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#21452B] px-5 py-3 text-xs font-semibold text-[#21452B] transition hover:bg-[#EFE9C5]/70 sm:self-center"
          >
            Explore consultations
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
