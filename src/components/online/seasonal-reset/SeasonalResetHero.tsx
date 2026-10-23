
export default function SeasonalResetHero() {
  return (
    <section className="bg-[#1D3B30] text-[#F4EFE5]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-start lg:gap-16 lg:py-20">
        {/* Hero content */}
        <div>
          <p className="text-sm leading-6">
            <a
              href="/#online"
              className="underline underline-offset-4 transition hover:text-[#E4AD3E]"
            >
              Online &amp; at home
            </a>
            <span className="mx-2">/</span>
            <span>Seasonal Reset</span>
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Seasonal Reset
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "7 days",
              "2 personal consultations",
              "Chat included",
              "4 seasonal editions",
              "German or English",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/40 px-3 py-2 text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Seven days to rebalance and renew your energy with the season —
            with a consultation at the start and at the end, and Lakshani
            by your side all week.
          </p>
        </div>

        {/* Booking card */}
        <aside className="rounded-3xl bg-white p-5 text-[#142F27] sm:p-7">
          <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-[#CBD4C4] px-4 py-8 text-center">
            <button
              type="button"
              aria-label="Play introduction video"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3B30] text-white transition hover:bg-[#315344]"
            >
              <span className="ml-1 text-lg" aria-hidden="true">
                ▶
              </span>
            </button>

            <p className="mt-3 text-xs">
              Welcome from Lakshani · 2 min
            </p>
          </div>

          <p className="mt-5 font-serif text-3xl sm:text-4xl">€229</p>

          <p className="mt-3 text-xs leading-5 text-[#52665C]">
            per season · 7 days · 2 consultations · chat
          </p>

          <a
            href="#booking"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[#1D3B30] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#315344]"
          >
            Book now
          </a>

          <p className="mt-4 text-xs leading-5 text-[#52665C]">
            Members save 5%, Premium members 10%.{" "}
            <a
              href="/#membership"
              className="underline underline-offset-2 hover:text-[#9A6115]"
            >
              Membership
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
