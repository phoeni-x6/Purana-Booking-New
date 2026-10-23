
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
      "Rebalance with Ayurveda and adapt your lifestyle to the season. A dedicated package for every season — unlock each one when you're ready.",
    features: [
      "Consultation at the start and at the end",
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

export default function DetoxProgrammes() {
  return (
    <section id="programmes" className="bg-[#F4EFE5]">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Ayurveda reset at home
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#142F27] sm:text-4xl">
          Guided detox programmes
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#52665C]">
          Personally guided by Lakshani, in German or English. Daily
          rituals, nourishing food and gentle self-care, at your own pace
          — step by step.
        </p>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className={`flex flex-col rounded-2xl p-7 ${
                programme.featured
                  ? "bg-[#1D3B30] text-[#F8F3E8]"
                  : "bg-white text-[#142F27]"
              }`}
            >
              <p
                className={`text-[11px] tracking-[0.18em] ${
                  programme.featured
                    ? "text-[#E4AD3E]"
                    : "text-[#52665C]"
                }`}
              >
                {programme.duration}
              </p>

              <h3 className="mt-4 font-serif text-2xl">
                {programme.title}
              </h3>

              <p
                className={`mt-4 text-sm leading-6 ${
                  programme.featured ? "text-white/90" : "text-[#52665C]"
                }`}
              >
                {programme.description}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-5">
                {programme.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-[#E4AD3E]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {programme.featured && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Spring", "Summer", "Autumn", "Winter"].map(
                    (season) => (
                      <span
                        key={season}
                        className="rounded-full border border-white/40 px-3 py-1.5 text-xs"
                      >
                        {season}
                      </span>
                    )
                  )}
                </div>
              )}

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-serif text-3xl">
                      {programme.price}
                    </span>
                    {programme.featured && (
                      <span className="ml-2 text-xs">per season</span>
                    )}
                  </div>

                  <a
                    href="#booking"
                    className={`rounded-full px-5 py-3 text-center text-xs font-semibold transition ${
                      programme.featured
                        ? "bg-[#E4AD3E] text-[#193B30] hover:bg-[#F2C76E]"
                        : "border border-[#193B30] hover:bg-[#F4EFE5]"
                    }`}
                  >
                    Book package
                  </a>
                </div>

                <a
                  href="#how-it-works"
                  className={`mt-5 block text-center text-sm underline underline-offset-4 ${
                    programme.featured ? "text-white" : "text-[#193B30]"
                  }`}
                >
                  More information
                </a>
              </div>
            </article>
          ))}

          {/* Deep Reset */}
          <article className="flex flex-col rounded-2xl bg-white p-7 text-[#142F27]">
            <p className="text-[11px] tracking-[0.18em] text-[#52665C]">
              1:1 GUIDANCE · 2 OPTIONS
            </p>

            <h3 className="mt-4 font-serif text-2xl">Deep Reset</h3>

            <p className="mt-4 text-sm leading-6 text-[#52665C]">
              The Gentle or Seasonal Reset with more one-to-one time.
              Lakshani adapts your plan to you as you go.
            </p>

            <div className="mt-4 space-y-3">
              {deepResetOptions.map((option) => (
                <div
                  key={option.duration}
                  className="rounded-xl border border-[#E1D7C5] p-4"
                >
                  <h4 className="font-semibold">{option.duration}</h4>
                  <p className="mt-1 text-xs leading-5 text-[#52665C]">
                    {option.description}
                  </p>
                  <p className="mt-3 font-serif text-2xl">
                    {option.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <a
                href="#booking"
                className="block rounded-full border border-[#193B30] px-4 py-3 text-center text-sm font-semibold transition hover:bg-[#F4EFE5]"
              >
                Choose your Deep Reset
              </a>

              <a
                href="#how-it-works"
                className="mt-5 block text-center text-sm underline underline-offset-4"
              >
                More information
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
