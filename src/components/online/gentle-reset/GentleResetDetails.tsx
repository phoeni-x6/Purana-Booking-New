
const suitability = [
  "You are new to Ayurveda and want a gentle, guided start",
  "You feel tired or heavy after busy weeks, holidays or a change of season",
  "You want to try a reset at home without fasting",
  "You can take 30–45 minutes a day, alongside work",
  "You would like personal guidance, not just a PDF",
];

const benefits = [
  {
    title: "No fasting",
    description:
      "Three warm, simple meals a day — a reset that fits a normal week.",
  },
  {
    title: "Made for your type",
    description:
      "Food plan, shopping list and tips match your constitution.",
  },
  {
    title: "Personally guided",
    description: "You start with a 45-minute call with Lakshani.",
  },
  {
    title: "Habits that stay",
    description:
      "Small daily rituals you can keep after the four days.",
  },
];

export default function GentleResetDetails() {
  return (
    <section className="bg-[#F4EFE5]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Who it is for
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#142F27] sm:text-4xl">
              Is this the right reset for you?
            </h2>

            <ul className="mt-5 space-y-4">
              {suitability.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#193B30]"
                >
                  <span className="shrink-0 font-semibold text-[#1D3B30]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Why it works
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#142F27] sm:text-4xl">
              What makes it different
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl bg-white p-5"
                >
                  <h3 className="font-semibold text-[#142F27]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#52665C]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
