
const locations = [
  {
    name: "Steinberg am See",
    category: "THE LAKESIDE EXPERIENCE",
    description:
      "Individual treatments, private mini retreats and restorative stays in a peaceful lakeside setting.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Steinberg/steinberg.jfif",
    number: "01",
    tagline: "Slow down. Reconnect.",
    features: [
      "Personal Ayurveda treatments",
      "Private mini retreats",
      "A relaxing natural setting",
    ],
    href: "/retreats/steinberg-am-see",
  },
  {
    name: "Marktredwitz",
    category: "PERSONAL CARE",
    description:
      "Ayurveda treatments in partnership with a local physiotherapy practice, with personal attention at every visit.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/Marktredwitz.jpg",
    number: "02",
    tagline: "Feel cared for.",
    features: [
      "Individual appointments",
      "Partner-led care",
      "Convenient local treatments",
    ],
    href: "/retreats/marktredwitz",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative scroll-mt-24 overflow-hidden bg-[#f5f0e7] px-5 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full border border-[#DFC24D]/20"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#21452B]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#21452B]">
                Find your Purana
              </p>
              <span className="text-sm text-[#DFC24D]">✳</span>
            </div>

            <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Two places.
              <span className="block italic text-[#A47B25]">
                One feeling of balance.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-[#6B705C]">
              Discover thoughtful Ayurveda care in Germany, from peaceful
              lakeside retreats to personalised treatments close to home.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#DFC24D]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#533E23]/70">
                Explore our locations
              </span>
            </div>
          </div>
        </div>

        {/* Location cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="group relative overflow-hidden rounded-[24px] border border-[#D8D0A9]/70 bg-[#EFE9C5]/55 transition-all duration-500 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-[0_24px_60px_rgba(33,69,43,0.10)]"
            >
              {/* Image area */}
              <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                <img
                  src={location.image}
                  alt={`${location.name} Ayurveda location`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/85 via-[#21452B]/10 to-black/15" />

                {/* Top image details */}
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/40 bg-[#21452B]/30 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    PURANA · {location.number}
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#DFC24D]/70 bg-[#21452B]/20 font-serif text-xl text-[#DFC24D] backdrop-blur-sm transition-transform duration-500 group-hover:rotate-45">
                    ✳
                  </span>
                </div>

                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#DFC24D]">
                    {location.category}
                  </p>

                  <h3 className="max-w-lg font-serif text-3xl italic leading-tight text-white sm:text-4xl lg:text-5xl">
                    {location.tagline}
                  </h3>
                </div>

                {/* Decorative image number */}
                <span className="absolute bottom-5 right-7 font-serif text-6xl text-white/15">
                  {location.number}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A47B25]">
                      {location.category}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#21452B] sm:text-3xl">
                      {location.name}
                    </h3>
                  </div>

                  <span className="hidden font-serif text-4xl text-[#DFC24D] sm:block">
                    ❋
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#6B705C]">
                  {location.description}
                </p>

                {/* Features */}
                <div className="my-6 border-t border-[#D8D0A9] pt-5">
                  <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#533E23]/65">
                    What awaits you
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {location.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-xs text-[#533E23]"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#DFC24D]/35 text-[10px] text-[#21452B]">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between gap-3 border-t border-[#D8D0A9]/70 pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6B705C]">
                    Discover this location
                  </span>

                  <a
                    href={location.href}
                    className="group/link inline-flex min-h-11 items-center gap-4 rounded-full bg-[#21452B] px-5 py-3 text-xs font-semibold text-[#EFE9C5] transition-all duration-300 hover:bg-[#2F5D39] hover:shadow-lg"
                  >
                    Explore location

                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#D8D0A9] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl text-[#DFC24D]">✳</span>
            <p className="font-serif text-base italic text-[#533E23]">
              Wherever you begin, make a little space for yourself.
            </p>
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-3 text-xs font-semibold text-[#21452B] transition-colors hover:text-[#A47B25]"
          >
            Find your treatment
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
