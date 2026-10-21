
const retreats = [
  {
    location: "GERMANY",
    title: "Retreats in Germany",
    description:
      "From private mini retreats at the Chalet Resort Steinberg am See to group retreats with yoga, treatments and meditation — Rasayana, detox and renewal retreats across Germany.",
    style: "from-[#dbe0cc] to-[#91aa91]",
    imageText: "[Photo: Retreat in Germany]",
    linkText: "Discover retreats in Germany",
  },
  {
    location: "SRI LANKA",
    title: "Retreats & Panchakarma in Sri Lanka",
    description:
      "Traditional Panchakarma at our Ayurveda centre in Sri Lanka, and retreats organised by our team.",
    style: "from-[#e8d7b6] to-[#b7a17a]",
    imageText: "[Photo: Sri Lanka]",
    linkText: "Discover Sri Lanka",
  },
];

export default function Retreats() {
  return (
    <section
      id="retreats"
      className="mx-auto max-w-7xl px-5 py-20 md:py-28"
    >
      <div className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#a36b17]">
          Retreats
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl">
          Time away for body and mind
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {retreats.map((retreat) => (
          <article
            key={retreat.location}
            className="overflow-hidden rounded-3xl bg-white"
          >
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${retreat.style}`}
            >
              <span className="text-sm text-[#193b30]">
                {retreat.imageText}
              </span>
            </div>

            <div className="p-7 sm:p-8">
              <h3 className="font-serif text-3xl">
                {retreat.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64746b]">
                {retreat.description}
              </p>

              <a
                href="#booking"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#b17a20]"
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
