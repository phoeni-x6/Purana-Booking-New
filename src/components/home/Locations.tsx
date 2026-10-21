
const locations = [
  {
    name: "Steinberg am See",
    category: "THE LAKESIDE EXPERIENCE",
    description:
      "Individual treatments, private mini retreats and restorative stays in a peaceful lakeside setting.",
    features: [
      "Personal Ayurveda treatments",
      "Private mini retreats",
      "A relaxing natural setting",
    ],
    color: "from-[#d9e1cf] to-[#8da88c]",
  },
  {
    name: "Marktredwitz",
    category: "PERSONAL CARE",
    description:
      "Ayurveda treatments in partnership with a local physiotherapy practice, with personal attention at every visit.",
    features: [
      "Individual appointments",
      "Partner-led care",
      "Convenient local treatments",
    ],
    color: "from-[#e4d9c1] to-[#b9a987]",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="mx-auto max-w-7xl px-5 py-16 md:py-24"
    >
      <div className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#a36b17]">
          Our locations
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl">
          Two places to experience Ayurveda.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#64746b]">
          Visit us in Germany for personalised treatments and time to slow down.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location, index) => (
          <article
            key={location.name}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl"
          >
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${location.color}`}
            >
              <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-[#193b30]">
                0{index + 1} / PURANA LOCATIONS
              </span>

              <div className="absolute right-[20%] top-10 h-20 w-20 rounded-full bg-[#f0dba6]/80" />

              <div className="absolute -bottom-28 -left-10 h-64 w-[130%] rotate-[-8deg] rounded-[50%] bg-[#66886d]/60" />
              <div className="absolute -bottom-40 -right-12 h-64 w-[120%] rotate-[8deg] rounded-[50%] bg-[#355d46]/50" />

              <span className="relative z-10 font-serif text-3xl text-[#193b30]">
                {index === 0 ? "Slow down." : "Feel at home."}
              </span>

              <span className="absolute bottom-5 right-5 text-[9px] tracking-widest text-[#193b30]">
                {location.category}
              </span>
            </div>

            <div className="p-7 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#a36b17]">
                {location.category}
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                {location.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64746b]">
                {location.description}
              </p>

              <ul className="my-5 space-y-2">
                {location.features.map((feature) => (
                  <li key={feature} className="text-sm text-[#52635a]">
                    <span className="mr-3 text-[#b17a20]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#b17a20]"
              >
                Explore {location.name} <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
