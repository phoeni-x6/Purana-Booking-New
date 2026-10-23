
const locations = [
  {
    name: "Steinberg am See",
    category: "THE LAKESIDE EXPERIENCE",
    description:
      "Individual treatments, private mini retreats and restorative stays in a peaceful lakeside setting.",
    image: "/images/steinberg.jpg",
    number: "01",
    tagline: "Slow down. Reconnect.",
    features: [
      "Personal Ayurveda treatments",
      "Private mini retreats",
      "A relaxing natural setting",
    ],
    href: "#booking",
  },
  {
    name: "Marktredwitz",
    category: "PERSONAL CARE",
    description:
      "Ayurveda treatments in partnership with a local physiotherapy practice, with personal attention at every visit.",
    image: "/images/marktredwitz.jpg",
    number: "02",
    tagline: "Feel cared for.",
    features: [
      "Individual appointments",
      "Partner-led care",
      "Convenient local treatments",
    ],
    href: "#booking",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:py-28"
    >
      {/* Section introduction */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C14C38] sm:text-xs">
              Find your Purana
            </p>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
            Two places.
            <span className="block italic text-[#2F5D39]">
              One feeling of balance.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[#6B705C] md:pb-2">
          Discover thoughtful Ayurveda care in Germany, from peaceful
          lakeside retreats to personalised treatments close to home.
        </p>
      </div>

      {/* Location cards */}
      <div className="grid gap-7 md:grid-cols-2">
        {locations.map((location) => (
          <article
            key={location.name}
            className="group overflow-hidden rounded-[28px] border border-[#D8D0A9]/70 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(33,69,43,0.12)]"
          >
            {/* Photo header */}
            <div className="relative h-64 overflow-hidden sm:h-72">
              <img
                src={location.image}
                alt={`${location.name} Ayurveda location`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Photo overlay for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/80 via-[#21452B]/10 to-black/20" />

              {/* Top label */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="rounded-full border border-white/40 bg-black/10 px-3 py-2 text-[9px] font-semibold tracking-[0.18em] text-white backdrop-blur-sm">
                  PURANA · {location.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg text-[#DFC24D]"
                >
                  ✳
                </span>
              </div>

              {/* Photo title */}
              <div className="absolute inset-x-6 bottom-7">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#DFC24D]">
                  {location.category}
                </p>

                <h3 className="font-serif text-3xl italic text-white sm:text-4xl">
                  {location.tagline}
                </h3>
              </div>
            </div>

            {/* Location details */}
            <div className="p-7 sm:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                {location.category}
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#21452B] sm:text-4xl">
                {location.name}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#6B705C]">
                {location.description}
              </p>

              <div className="my-6 h-px bg-[#D8D0A9]/70" />

              {/* Features */}
              <ul className="space-y-3">
                {location.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#533E23]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[10px] text-[#2F5D39]">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={location.href}
                className="group/link mt-8 inline-flex min-h-12 items-center gap-4 rounded-full border border-[#2F5D39]/25 px-5 py-3 text-sm font-semibold text-[#2F5D39] transition duration-300 hover:border-[#2F5D39] hover:bg-[#2F5D39] hover:text-white"
              >
                Explore {location.name}

                <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Closing note */}
      <div className="mt-8 flex flex-col gap-3 border-t border-[#D8D0A9] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-[#6B705C]">
          Wherever you begin, make a little space for yourself.
        </p>

        <a
          href="#booking"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#C14C38] transition hover:text-[#21452B]"
        >
          Find your treatment <span>→</span>
        </a>
      </div>
    </section>
  );
}
