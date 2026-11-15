
const services = [
  {
    number: "01",
    title: "Treatments & retreats",
    text: "Traditional therapies and personalised care in Germany.",
    href: "#locations",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Online consultation",
    text: "One-to-one guidance with Ayurveda practitioners.",
    href: "#online",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Detox at home",
    text: "Gentle, guided reset programmes for everyday life.",
    href: "#online",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Restorative retreats",
    text: "Take a meaningful pause in Germany or Sri Lanka.",
    href: "#retreats",
    image:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Regular care",
    text: "Ayurveda is above all preventive: its first goal is to keep the healthy healthy.",
    href: "/packages-series",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Learn for free",
    text: "Explore doshas, Ayurveda rituals, podcasts and articles.",
    href: "#learn",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#EFE9C5] px-5 py-20 md:py-28">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#DFC24D]/30"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C14C38]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C14C38] sm:text-xs">
              Everything Ayurveda in one place
            </p>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#533E23] sm:text-5xl md:text-6xl">
            A little more balance,
            <span className="block italic text-[#A47B25]">
              in every part of life.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
            Find your own path to wellbeing with thoughtful care, traditional
            knowledge and experiences designed around you.
          </p>
        </div>

        {/* Image cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              href={service.href}
              key={service.number}
              className="group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-[#533E23]/15 bg-[#533E23] p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:min-h-[390px]"
            >
              {/* Background image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />

              {/* Warm gold and brown tint */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(83,62,35,0.25) 0%, rgba(83,62,35,0.58) 40%, rgba(83,62,35,0.94) 100%)",
                }}
              />

              {/* Golden ambient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#DFC24D]/20 via-transparent to-[#533E23]/30"
              />

              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#DFC24D]/20 font-serif text-lg italic text-[#DFC24D] backdrop-blur-sm">
                  ✳
                </span>

                <span className="text-xs tracking-[0.2em] text-[#EFE9C5]/80">
                  {service.number}
                </span>
              </div>

              {/* Bottom content */}
              <div>
                <div className="mb-4 h-px w-10 bg-[#DFC24D] transition-all duration-500 group-hover:w-16" />

                <h3 className="max-w-xs font-serif text-3xl leading-tight text-[#EFE9C5] sm:text-[32px]">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#EFE9C5]/80">
                  {service.text}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#EFE9C5]/25 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                    Explore service
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DFC24D]/60 text-lg text-[#DFC24D] transition-all duration-300 group-hover:border-[#DFC24D] group-hover:bg-[#DFC24D] group-hover:text-[#533E23]">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
