
export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C14C38]">
            Thoughtful ways to experience Ayurveda
          </p>

          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
            A little something special, for you or someone you love.
          </h2>
        </div>

        <span className="hidden font-serif text-4xl italic text-[#533E23]/30 sm:block">
          Purana
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Gift vouchers */}
        <article
          id="vouchers"
          className="group relative isolate flex min-h-[420px] flex-col items-start overflow-hidden rounded-[28px] bg-[#2F5D39] p-7 text-[#EFE9C5] sm:p-10 lg:p-12"
        >
          {/* Decorative artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full border border-[#EFE9C5]/15 transition-transform duration-700 group-hover:scale-110"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-5 -z-10 h-44 w-44 rounded-full border border-dashed border-[#DFC24D]/30"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-4 -z-10 font-serif text-[190px] leading-none text-[#EFE9C5]/[0.06] transition-transform duration-700 group-hover:-rotate-12"
          >
            ✳
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#DFC24D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DFC24D] sm:text-xs">
              Gift vouchers
            </p>
          </div>

          <div className="mt-9 max-w-md">
            <h3 className="font-serif text-4xl leading-[1.12] text-[#EFE9C5] sm:text-5xl">
              Give the gift
              <span className="block italic text-[#DFC24D]">
                of balance.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#EFE9C5]/80">
              Give someone special a moment of care. Choose an Ayurveda
              treatment, a retreat or a gift amount.
            </p>
          </div>

          <div className="mt-auto pt-8">
            <a
              href="#booking"
              className="group/link inline-flex min-h-12 items-center gap-4 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
            >
              Explore gift vouchers
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <span className="absolute bottom-7 right-8 hidden text-[9px] uppercase tracking-[0.22em] text-[#EFE9C5]/40 sm:block">
            A gift of wellbeing
          </span>
        </article>

        {/* Nivartana shop */}
        <article
          id="shop"
          className="group relative isolate flex min-h-[420px] flex-col items-start overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] p-7 sm:p-10 lg:p-12"
        >
          {/* Decorative artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 -z-10 h-60 w-60 rounded-full bg-[#EFE9C5]/80 transition-transform duration-700 group-hover:scale-110"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-5 -z-10 h-44 w-44 rounded-full border border-[#2F5D39]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-2 -z-10 font-serif text-[180px] italic leading-none text-[#2F5D39]/[0.07] transition-transform duration-700 group-hover:rotate-12"
          >
            N
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C14C38]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C14C38] sm:text-xs">
              Our shop · Nivartana
            </p>
          </div>

          <div className="mt-9 max-w-md">
            <h3 className="font-serif text-4xl leading-[1.12] text-[#21452B] sm:text-5xl">
              Bring Ayurveda
              <span className="block italic text-[#C14C38]">
                into your home.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#6B705C]">
              Explore spices, teas and thoughtfully selected products
              that bring traditional rituals into everyday life.
            </p>
          </div>

          <div className="mt-auto pt-8">
            <a
              href="#shop"
              className="group/link inline-flex min-h-12 items-center gap-4 rounded-full bg-[#2F5D39] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Explore the collection
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <span className="absolute bottom-7 right-8 hidden text-[9px] uppercase tracking-[0.22em] text-[#533E23]/50 sm:block">
            Rituals for everyday living
          </span>
        </article>
      </div>
    </section>
  );
}
