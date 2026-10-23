
export default function OnlineWellness() {
  return (
    <section
      id="online"
      className="mx-auto grid max-w-7xl scroll-mt-24 overflow-hidden rounded-[28px] border border-[#D8D0A9]/30 bg-[#21452B] text-[#EFE9C5] md:grid-cols-5"
    >
      {/* Decorative visual panel */}
      <div className="group relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#533E23] via-[#2F5D39] to-[#21452B] md:col-span-2 md:min-h-full">
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="absolute h-48 w-48 rounded-full border border-[#DFC24D]/50 transition-transform duration-700 group-hover:scale-110 sm:h-56 sm:w-56"
        />

        <div
          aria-hidden="true"
          className="absolute h-60 w-60 rounded-full border border-dashed border-[#DFC24D]/30 transition-transform duration-1000 group-hover:rotate-12 sm:h-72 sm:w-72"
        />

        <div
          aria-hidden="true"
          className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
        />

        {/* Decorative centre */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#DFC24D]">
            PURANA WELLNESS
          </span>

          <h3 className="font-serif text-4xl leading-tight text-[#EFE9C5] sm:text-5xl">
            Online
            <br />
            <span className="italic">Ayurveda care.</span>
          </h3>

          <span className="mt-6 h-px w-14 bg-[#DFC24D]" />

          <p className="mt-5 max-w-[220px] text-xs leading-6 text-[#EFE9C5]/75">
            Traditional wisdom, personalised guidance, wherever you are.
          </p>
        </div>

        {/* Decorative symbol */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-6 font-serif text-7xl text-white/[0.07] sm:text-8xl"
        >
          ❋
        </span>

        <span
          aria-hidden="true"
          className="absolute left-6 top-6 text-xl text-[#DFC24D]/80"
        >
          ✳
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-center p-7 sm:p-10 md:col-span-3 md:p-12 lg:p-14">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#DFC24D]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
            Online, wherever you are
          </p>
        </div>

        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight text-[#EFE9C5] sm:text-4xl lg:text-5xl">
          Online consultation
          <span className="block italic text-[#DFC24D]">
            &amp; Ayurveda detox at home
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#EFE9C5]/80">
          Connect with Lakshani for a 45-minute online consultation in German
          or English, or consult Dr. Ishanka, an Ayurvedic doctor (BAMS) in
          Sri Lanka, in English. Explore guided Reset at Home programmes
          designed to support your personal wellness journey.
        </p>

        {/* Service highlights */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <span className="text-lg text-[#DFC24D]">◷</span>

            <p className="mt-3 text-sm font-semibold text-[#EFE9C5]">
              45-minute consultations
            </p>

            <p className="mt-1 text-xs leading-5 text-[#EFE9C5]/60">
              Personal guidance online
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <span className="text-lg text-[#DFC24D]">✳</span>

            <p className="mt-3 text-sm font-semibold text-[#EFE9C5]">
              Reset at Home
            </p>

            <p className="mt-1 text-xs leading-5 text-[#EFE9C5]/60">
              Guided wellness programmes
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#booking"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21452B]"
          >
            Discover online offers
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <span className="text-xs leading-6 text-[#EFE9C5]/65">
            German &amp; English consultations
          </span>
        </div>
      </div>
    </section>
  );
}
