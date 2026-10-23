export default function DeepResetHero() {
  return (
    <section className="bg-[#1D3B30] text-[#F4EFE5]">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#E4AD3E]">
          Online, wherever you are
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Online consultation &amp; Ayurveda detox at home
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90">
          Start with a 45-minute online consultation, or follow a guided Reset
          at Home programme with Lakshani — with videos, food plans and
          personal support.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full border border-white/40 px-4 py-3">
            Members save 5%
          </span>

          <span className="rounded-full bg-[#E4AD3E] px-4 py-3 font-semibold text-[#142F27]">
            Premium members save 10%
          </span>

          <a
            href="#membership"
            className="underline underline-offset-4 hover:text-[#E4AD3E]"
          >
            Become a member or upgrade →
          </a>
        </div>
      </div>
    </section>
  );
}