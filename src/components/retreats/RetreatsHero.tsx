const retreatCategories = [
  {
    number: "01",
    title: "Retreats in Germany",
    description: "Chalet mini retreats · retreats across Germany",
    href: "#germany",
  },
  {
    number: "02",
    title: "Retreats & Panchakarma in Sri Lanka",
    description: "Panchakarma · retreats organised by us",
    href: "#sri-lanka",
  },
];

export default function RetreatsHero() {
  return (
    <section className="bg-[#193b30] text-[#f4eee4]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#e4ad3e]">
          Retreats
        </p>

        <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
          Time away for body and mind
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7">
          Choose a retreat close to home in Germany, or travel to Sri Lanka
          for traditional Panchakarma or one of our retreats.
        </p>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 md:grid-cols-2">
          {retreatCategories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className="rounded-2xl border border-white/15 p-5 transition hover:bg-white/5"
            >
              <span className="text-xs text-[#e4ad3e]">
                {category.number}
              </span>

              <h2 className="mt-2 font-semibold">{category.title}</h2>

              <p className="mt-2 text-sm text-white/75">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}