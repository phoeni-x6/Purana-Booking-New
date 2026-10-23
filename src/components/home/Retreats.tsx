
const retreats = [
  {
    location: "GERMANY",
    title: "Retreats in Germany",
    description:
      "From private mini retreats at the Chalet Resort Steinberg am See to group retreats with yoga, treatments and meditation — Rasayana, detox and renewal retreats across Germany.",
    style: "from-[#EFE9C5] to-[#A8B99A]",
    imageText: "A peaceful retreat in Germany",
    href: "/retreats/germany",
    linkText: "Discover retreats in Germany",
  },
  {
    location: "SRI LANKA",
    title: "Retreats & Panchakarma in Sri Lanka",
    description:
      "Traditional Panchakarma at our Ayurveda centre in Sri Lanka, and retreats organised by our team.",
    style: "from-[#DFC24D]/60 to-[#2F5D39]/70",
    imageText: "Traditional Ayurveda in Sri Lanka",
    href: "/retreats/sri-lanka",
    linkText: "Discover Sri Lanka",
  },
];

export default function Retreats() {
  return (
    <section
      id="retreats"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:py-28"
    >
      <div className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#C14C38]">
          Retreats
        </p>

        <h2 className="font-serif text-4xl text-[#21452B] sm:text-5xl">
          Time away for body and mind
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {retreats.map((retreat) => (
          <article
            key={retreat.location}
            className="overflow-hidden rounded-3xl border border-[#D8D0A9]/60 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${retreat.style}`}
            >
              <div className="absolute h-36 w-36 rounded-full border border-[#EFE9C5]/70" />
              <div className="absolute h-48 w-48 rounded-full border border-dashed border-[#EFE9C5]/60" />

              <span className="relative z-10 max-w-xs px-5 text-center font-serif text-2xl text-[#21452B]">
                {retreat.imageText}
              </span>

              <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.2em] text-[#21452B]">
                {retreat.location}
              </span>
            </div>

            <div className="p-7 sm:p-8">
              <h3 className="font-serif text-3xl text-[#21452B]">
                {retreat.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                {retreat.description}
              </p>

              <a
                href={retreat.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D39] hover:text-[#C14C38]"
              >
                {retreat.linkText} <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
