
export default function OnlineHero() {
  return (
    <section className="bg-[#1D3B30] text-[#F8F3E8]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:py-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E4AD3E]">
          Online, wherever you are
        </p>

        <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Online consultation & Ayurveda detox at home
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
          Start with a 45-minute online consultation, or follow a guided
          Reset at Home programme with Lakshani — with videos, food plans
          and personal support.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <span className="rounded-full border border-white/40 px-4 py-2.5">
            Members save 5%
          </span>

          <span className="rounded-full bg-[#E4AD3E] px-4 py-2.5 font-semibold text-[#193B30]">
            Premium members save 10%
          </span>

          <a
            href="/#membership"
            className="underline underline-offset-4 transition hover:text-[#E4AD3E]"
          >
            Become a member or upgrade →
          </a>
        </div>
      </div>
    </section>
  );
}
