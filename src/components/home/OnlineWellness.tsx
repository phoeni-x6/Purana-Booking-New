
export default function OnlineWellness() {
  return (
    <section
      id="online"
      className="relative isolate mx-auto max-w-7xl scroll-mt-24 overflow-hidden rounded-[28px] bg-[#EFE9C5] text-[#533E23] shadow-[0_24px_70px_rgba(83,62,35,0.10)]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/img2.jfif"
          alt="Peaceful spa and wellness treatment setting"
          className="h-full w-full object-cover object-center"
        />

        {/* Fade image into warm cream */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#533E23]/10 via-[#EFE9C5]/55 to-[#EFE9C5]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#EFE9C5] via-[#EFE9C5]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#EFE9C5]/45 md:to-[#EFE9C5]" />

        {/* Warm image tint */}
        <div className="absolute inset-0 bg-[#DFC24D]/10 mix-blend-soft-light" />
      </div>

      {/* Decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#2F5D39]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-10 font-serif text-8xl text-[#533E23]/[0.05]"
      >
        ❋
      </div>

      {/* Main layout */}
      <div className="relative grid min-h-[620px] items-center md:grid-cols-5 lg:min-h-[650px]">

        {/* Image-side visual space */}
        <div className="relative min-h-[260px] md:col-span-2 md:min-h-[620px] lg:min-h-[650px]">
          <div className="absolute left-6 top-7 flex items-center gap-2 md:left-8 md:top-9">
            <span className="h-px w-7 bg-[#DFC24D]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#EFE9C5] drop-shadow-md">
              PURANA WELLNESS
            </span>
          </div>

          <div className="absolute bottom-7 left-6 md:bottom-10 md:left-8">
            <p className="font-serif text-3xl italic text-white drop-shadow-lg sm:text-4xl">
              A little space
              <br />
              for yourself.
            </p>
            <span className="mt-4 block h-px w-12 bg-[#DFC24D]" />
          </div>

          <span className="absolute right-7 top-8 text-2xl text-[#DFC24D]">
            ✳
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-9 pt-4 sm:px-10 md:col-span-3 md:py-14 md:pl-5 md:pr-12 lg:py-16 lg:pr-16">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2F5D39]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2F5D39] sm:text-xs">
              Online, wherever you are
            </p>
          </div>

          <h2 className="max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-[#533E23] sm:text-4xl lg:text-5xl">
            Your path to balance,
            <span className="mt-1 block italic text-[#2F5D39]">
              wherever life takes you.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B705C]">
            Connect with Lakshani for a 45-minute online consultation in
            German or English, or consult Dr. Ishanka, an Ayurvedic doctor
            (BAMS) in Sri Lanka, in English. Explore guided Reset at Home
            programmes designed to support your personal wellness journey.
          </p>

          {/* Service cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {/* Consultation card - Brown */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#533E23]/10 bg-[#533E23] p-5 text-[#EFE9C5] shadow-[0_10px_25px_rgba(83,62,35,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(83,62,35,0.20)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#DFC24D]/20 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <span className="text-2xl text-[#DFC24D]">◷</span>
                <span className="text-[9px] tracking-widest text-[#EFE9C5]/40">
                  01
                </span>
              </div>

              <p className="relative mt-6 text-sm font-semibold">
                Online consultations
              </p>
              <p className="relative mt-1 text-xs leading-5 text-[#EFE9C5]/65">
                45-minute personalised guidance
              </p>

              <span className="relative mt-5 block h-px w-8 bg-[#DFC24D] transition-all duration-300 group-hover:w-14" />
            </div>

            {/* Reset at Home card - Forest green */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#2F5D39]/20 bg-[#2F5D39] p-5 text-[#EFE9C5] shadow-[0_10px_25px_rgba(47,93,57,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-[#21452B] hover:shadow-[0_16px_35px_rgba(47,93,57,0.22)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#DFC24D]/25 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <span className="text-2xl text-[#DFC24D]">✳</span>
                <span className="text-[9px] tracking-widest text-[#EFE9C5]/50">
                  02
                </span>
              </div>

              <p className="relative mt-6 text-sm font-semibold">
                Reset at Home
              </p>
              <p className="relative mt-1 text-xs leading-5 text-[#EFE9C5]/75">
                Guided wellness programmes
              </p>

              <span className="relative mt-5 block h-px w-8 bg-[#DFC24D] transition-all duration-300 group-hover:w-14" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#2F5D39] px-6 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#21452B] hover:shadow-lg"
            >
              Discover online offers
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <span className="text-xs text-[#6B705C]">
              German &amp; English consultations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
