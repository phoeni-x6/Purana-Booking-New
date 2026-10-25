
export default function RetreatContact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#F8F5E8] px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* Main contact panel */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#21452B] text-[#EFE9C5] shadow-xl">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full border border-[#EFE9C5]/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-20 h-[260px] w-[260px] rounded-full border border-dashed border-[#DFC24D]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-[#2F5D39]/60 blur-3xl"
        />

        <div className="relative flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:gap-12 md:p-14 lg:p-16">
          {/* Contact copy */}
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#DFC24D]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
                Let’s plan your retreat
              </p>
            </div>

            <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#EFE9C5] sm:text-4xl lg:text-5xl">
              Not sure which retreat is
              <span className="mt-1 block italic text-[#DFC24D]">
                right for you?
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#EFE9C5]/75 sm:text-base sm:leading-8">
              Every wellness journey is different. Tell us what you’re looking
              for, and our team will help you explore the retreat that best
              suits your interests and needs.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#EFE9C5]/65">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/30 bg-[#DFC24D]/10 text-lg text-[#DFC24D]">
                ✳
              </span>
              Personal guidance from the Purana team
            </div>
          </div>

          {/* Contact actions */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:min-w-[220px]">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21452B]"
            >
              <span>Chat on WhatsApp</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="mailto:info@example.com"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#EFE9C5]/30 px-6 py-4 text-sm font-semibold text-[#EFE9C5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFC24D] hover:bg-white/5 hover:text-[#DFC24D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC24D]"
            >
              <span>Send an email</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
      </div>
    </section>
  );
}
