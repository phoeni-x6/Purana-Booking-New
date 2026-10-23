
export default function GentleResetHero() {
  return (
    <section className="bg-[#1D3B30] text-[#F8F3E8]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:py-16 lg:grid-cols-[1.4fr_0.9fr] lg:items-center lg:gap-20 lg:py-20">
        <div>
          <div className="mb-7 text-sm">
            <a
              href="/online"
              className="underline underline-offset-4 hover:text-[#E4AD3E]"
            >
              Online & at home
            </a>
            <span className="mx-2">/</span>
            <span>Gentle Reset</span>
          </div>

          <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
            Gentle Reset
          </h1>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {[
              "4 days",
              "1 personal consultation",
              "Video & text",
              "Beginner-friendly",
              "German or English",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/40 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Four days of simple Ayurvedic food, daily rituals and rest —
            adjusted to your constitution, so you feel lighter, renew your
            energy and know how to continue at home.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 text-[#193B30] sm:p-7">
          <button
            type="button"
            aria-label="Play welcome video from Lakshani"
            className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-[#CBD4C4] text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1D3B30] text-xl text-white">
              ▶
            </span>
            <span className="mt-3 text-xs">
              Welcome from Lakshani · 2 min
            </span>
          </button>

          <p className="mt-5 font-serif text-4xl">€119</p>
          <p className="mt-3 text-sm text-[#52665C]">
            4 days · 1 consultation · access for 4 weeks
          </p>

          <a
            href="#booking"
            className="mt-4 block rounded-full bg-[#1D3B30] px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#2A5041]"
          >
            Book now
          </a>

          <p className="mt-4 text-xs leading-5 text-[#52665C]">
            Members save 5%, Premium members 10%.{" "}
            <a
              href="/#membership"
              className="text-[#193B30] underline underline-offset-2"
            >
              Membership
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
