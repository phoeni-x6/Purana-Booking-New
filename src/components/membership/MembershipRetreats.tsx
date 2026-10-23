
const programmes = [
  {
    duration: "4 days · 1 consultation",
    title: "Gentle Reset",
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
    description:
      "Our most personal programme, with one-to-one guidance from a Purana Ayurveda expert throughout.",
    features: [],
    price: "",
    featured: false,
  },
];

export default function MembershipRetreats() {
  return (
    <section className="bg-[#EAE1D1] text-[#142F27]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Ayurveda Reset at Home
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Your guided Ayurveda routine, at home
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#52665C]">
          Can’t make it to Steinberg am See? Our at-home packages guide you
          step by step through an Ayurvedic reset — daily rituals, nourishing
          food and gentle self-care, at your own pace.
        </p>

        <p className="mt-3 text-sm font-semibold">
          Members save 5% · Premium members save 10%
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className={`flex flex-col rounded-2xl p-7 ${
                programme.featured
                  ? "bg-[#1D3B30] text-[#F4EFE5]"
                  : "bg-white"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.16em] opacity-80">
                {programme.duration}
              </p>

              <h3 className="mt-4 font-serif text-2xl">
                {programme.title}
              </h3>

              <p className="mt-4 text-sm leading-6 opacity-85">
                {programme.description}
              </p>

              {programme.features.length > 0 && (
                <ul className="mt-5 flex-1 space-y-3">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <span className="text-[#E0A83E]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {programme.title === "Seasonal Reset" && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
                    <span
                      key={season}
                      className="rounded-full border border-white/30 px-3 py-2 text-xs"
                    >
                      {season}
                    </span>
                  ))}
                </div>
              )}

              {programme.title === "Deep Reset" && (
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-[#DED3C0] p-4">
                    <strong>4 days</strong>
                    <p className="mt-1 text-xs">3 one-to-one consultations</p>
                    <p className="mt-3 font-serif text-xl">€259</p>
                  </div>

                  <div className="rounded-xl border border-[#DED3C0] p-4">
                    <strong>7 days</strong>
                    <p className="mt-1 text-xs">4 one-to-one consultations</p>
                    <p className="mt-3 font-serif text-xl">€349</p>
                  </div>
                </div>
              )}

              {programme.price && (
                <p className="mt-8 font-serif text-3xl">{programme.price}</p>
              )}

              <a
                href="#waitlist"
                className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold ${
                  programme.featured
                    ? "bg-[#E0A83E] text-[#142F27]"
                    : "border border-[#1D3B30]"
                }`}
              >
                {programme.title === "Deep Reset"
                  ? "Choose your Deep Reset"
                  : "See programme"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
