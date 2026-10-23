
const ebooks = [
  {
    title: "Ayurveda Basic Detox at Home",
    description: "The 3-phase home reset, shopping list and 10 recipes.",
  },
  {
    title: "Ayurveda for Spring",
    description: "Lightness and a fresh start: routine, food and rituals.",
  },
  {
    title: "Ayurveda for Summer",
    description: "Stay cool and calm: cooling food and evening rituals.",
  },
  {
    title: "Ayurveda for Autumn",
    description: "Grounding and routine: warm meals and oil massage.",
  },
  {
    title: "Ayurveda for Winter",
    description: "Warmth and steady energy through the dark months.",
  },
];

export default function EbooksSection() {
  return (
    <section id="ebooks" className="bg-[#F4EFE5]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              E-books
            </p>

            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-[#142F27] sm:text-4xl">
              Ayurveda through the year, to read at home
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#52665C]">
              Practical guides with routines, food lists for each dosha
              and recipes — download instantly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#1D3B30] px-5 py-4 text-white sm:justify-start">
            <div>
              <p className="font-semibold">All 5 as a bundle</p>
              <p className="mt-1 text-xs text-white/80">
                + printable year planner
              </p>
            </div>

            <span className="font-serif text-2xl">€49</span>

            <a
              href="#ebook-bundle"
              className="rounded-full bg-[#E4AD3E] px-4 py-3 text-xs font-semibold text-[#193B30] transition hover:bg-[#F2C76E]"
            >
              Buy bundle
            </a>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ebooks.map((ebook) => (
            <article
              key={ebook.title}
              className="flex flex-col rounded-2xl bg-white p-4"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-[#EAE1D1] text-xs text-[#52665C]">
                [Cover]
              </div>

              <h3 className="mt-3 font-semibold leading-6 text-[#142F27]">
                {ebook.title}
              </h3>

              <p className="mt-2 text-sm leading-5 text-[#52665C]">
                {ebook.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                <span className="font-semibold text-[#142F27]">
                  €14.90
                </span>

                <a
                  href="#ebook-purchase"
                  className="text-xs font-semibold text-[#193B30] underline underline-offset-4 hover:text-[#9A6115]"
                >
                  Buy e-book
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
