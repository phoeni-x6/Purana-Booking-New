
const suitability = [
  "You feel the change of season in your energy, sleep or mood",
  "You did a Gentle Reset and want to go deeper",
  "You want a yearly rhythm: one reset each season",
  "You like personal support during the week",
  "You can take 45–60 minutes a day",
];

const benefits = [
  {
    title: "In tune with the season",
    description:
      "Food, routine and rituals change with spring, summer, autumn and winter.",
  },
  {
    title: "Two consultations",
    description:
      "A personal plan at the start and a review at the end.",
  },
  {
    title: "Support all week",
    description: "Chat with Lakshani in your portal.",
  },
  {
    title: "A plan to continue",
    description: "You finish with your next 4 weeks mapped out.",
  },
];

export default function SeasonalResetDetails() {
  return (
    <section className="bg-[#F4EFE5]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Who it is for */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Who it is for
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Is this the right reset for you?
          </h2>

          <ul className="mt-6 space-y-4">
            {suitability.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <span
                  className="shrink-0 font-semibold text-[#1D3B30]"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why it works */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Why it works
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            What makes it different
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-white p-5"
              >
                <h3 className="text-sm font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52665C]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
