const miniRetreats = [
  {
    duration: "3 days · 2 nights · Private",
    title: "Mini Retreat – 3 days",
    description:
      "Consultation and treatment on arrival, a full Ayurveda day with private yoga in your chalet and evening sound meditation, and an Ayurveda nutrition plan to take home.",
  },
  {
    duration: "4 days · 3 nights · Private",
    title: "Mini Retreat – 4 days",
    description:
      "Everything in the 3-day retreat plus an extra day with optional yoga, a 1-hour Ayurveda treatment and optional evening meditation.",
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
      className="mx-auto max-w-5xl px-5 py-20"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[#a36b17]">
        01 · Retreats in Germany
      </p>

      <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
        Ayurveda retreats close to home
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#53675d]">
        From private mini retreats at the Chalet Resort Steinberg am See
        to group retreats at beautiful places across Germany. Each retreat
        combines tailor-made Ayurveda treatments, yoga, meditation and
        practical guidance for your everyday life — so you return home
        with renewed energy and a clear plan to keep your balance.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {retreatTypes.map((type) => (
          <span
            key={type}
            className="rounded-full bg-[#e9dfcd] px-4 py-2 text-xs"
          >
            {type}
          </span>
        ))}
      </div>

      <h3 className="mt-10 text-lg font-semibold">
        Private mini retreats at the Chalet Resort Steinberg am See
      </h3>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {miniRetreats.map((retreat) => (
          <article
            key={retreat.title}
            className="rounded-2xl bg-white p-7"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-[#64746b]">
              {retreat.duration}
            </p>

            <h4 className="mt-4 font-serif text-2xl">
              {retreat.title}
            </h4>

            <p className="mt-4 text-sm leading-7 text-[#53675d]">
              {retreat.description}
            </p>

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="font-serif text-2xl">€[PRICE]</span>

              <a
                href="#contact"
                className="rounded-full bg-[#193b30] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2c5142]"
              >
                Day-by-day plan
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-full border border-[#193b30] px-5 py-3 text-sm font-semibold hover:bg-[#e9dfcd]"
        >
          Chalet Resort information
        </a>

        <a
          href="#contact"
          className="rounded-full border border-[#193b30] px-5 py-3 text-sm font-semibold hover:bg-[#e9dfcd]"
        >
          Contact us to book
        </a>
      </div>

      <h3 className="mt-14 text-lg font-semibold">
        Retreats at other locations in Germany
      </h3>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#53675d]">
        Group retreats at selected venues — Rasayana, detox and renewal
        retreats in nature, by lakes and in the mountains. New dates are
        announced here and in our newsletter.
      </p>

      <div className="mt-5 space-y-3">
        {otherRetreats.map((name, index) => (
          <article
            key={`${name}-${index}`}
            className="flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h4 className="font-semibold">{name}</h4>

              <p className="mt-1 text-sm text-[#53675d]">
                [Location] · [Dates] · [X] days
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-serif text-xl">€[PRICE]</span>

              <a
                href="#contact"
                className="rounded-full bg-[#193b30] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2c5142]"
              >
                More & register
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}