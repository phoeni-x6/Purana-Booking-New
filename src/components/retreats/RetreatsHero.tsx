
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
    <section className="relative isolate overflow-hidden bg-[#21452B] text-[#EFE9C5]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full border border-[#EFE9C5]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-dashed border-[#DFC24D]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-[400px] w-[400px] rounded-full bg-[#2F5D39]/40 blur-3xl"
      />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#DFC24D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
              Purana Ayurveda Retreats
            </p>
          </div>

          <p className="mb-5 text-xs tracking-wide text-[#EFE9C5]/65">
            Germany · Sri Lanka
          </p>

          <h1 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-5xl lg:text-7xl">
            Time away for
            <span className="mt-1 block italic text-[#DFC24D]">
              body and mind.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#EFE9C5]/80 sm:text-base">
            Choose a retreat close to home in Germany, or travel to Sri Lanka
            for traditional Panchakarma or one of our carefully organised
            retreats. Discover space to slow down, reconnect, and restore
            your inner balance.
          </p>

          {/* Retreat highlight */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10">
              <span className="text-xl text-[#DFC24D]">✳</span>
            </div>

            <div>
              <p className="font-serif text-xl text-[#EFE9C5] sm:text-2xl">
                Two destinations
              </p>
              <p className="mt-1 text-xs text-[#EFE9C5]/60">
                One journey towards wellbeing.
              </p>
            </div>
          </div>

          {/* Destination buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#germany"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21452B]"
            >
              Explore Germany
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#sri-lanka"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#EFE9C5]/30 px-7 py-4 text-sm font-medium text-[#EFE9C5] transition duration-300 hover:border-[#DFC24D] hover:bg-white/5 hover:text-[#DFC24D]"
            >
              Discover Sri Lanka
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Destination links */}
        <div className="relative z-10 mt-16 grid max-w-4xl gap-4 border-t border-[#EFE9C5]/15 pt-8 sm:mt-20 sm:grid-cols-2 sm:pt-10">
          {retreatCategories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className="group rounded-2xl border border-[#EFE9C5]/15 bg-[#EFE9C5]/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D]/50 hover:bg-[#EFE9C5]/[0.07] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs tracking-[0.2em] text-[#DFC24D]">
                    {category.number}
                  </span>

                  <h2 className="mt-3 font-serif text-xl leading-snug text-[#EFE9C5] transition-colors group-hover:text-[#DFC24D] sm:text-2xl">
                    {category.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#EFE9C5]/65">
                    {category.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/30 text-lg text-[#DFC24D] transition duration-300 group-hover:bg-[#DFC24D] group-hover:text-[#21452B]">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
