
export default function FeatureCards() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 md:grid-cols-2">
      <article
        id="vouchers"
        className="relative overflow-hidden rounded-3xl bg-[#193b30] p-8 text-white sm:p-10"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[#e4ad3e]">
          Gift vouchers
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight">
          Give the gift
          <br />
          <span className="italic text-[#e4ad3e]">of balance.</span>
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-7 text-[#d4dfd6]">
          Give someone special a moment of care. Choose an Ayurveda
          treatment, a retreat or a gift amount.
        </p>

        <a
          href="#booking"
          className="mt-6 inline-flex rounded-full bg-[#e4ad3e] px-6 py-3 text-sm font-semibold text-[#193b30] transition hover:bg-[#f2c76e]"
        >
          Explore gift vouchers ↗
        </a>

        <span className="pointer-events-none absolute -bottom-16 -right-3 text-[180px] text-white/[0.05]">
          ✳
        </span>
      </article>

      <article
        id="shop"
        className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[#a36b17]">
          Our shop · Nivartana
        </p>

        <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight">
          Ayurveda for your kitchen and home.
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-7 text-[#64746b]">
          Explore spices, teas and thoughtfully selected products
          that bring traditional rituals into everyday life.
        </p>

        <a
          href="#shop"
          className="mt-6 inline-flex rounded-full bg-[#193b30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
        >
          Explore the collection ↗
        </a>

        <span className="pointer-events-none absolute -bottom-8 -right-2 text-[160px] text-[#d9c8a7]/20">
          ❋
        </span>
      </article>
    </section>
  );
}
