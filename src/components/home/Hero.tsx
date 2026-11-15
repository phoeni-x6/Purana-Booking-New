export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#f5f0e7] lg:min-h-[780px]">
      {/* Full-width background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/img1.jfif')",
        }}
      />

      {/* Cream fade from left to right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 25%, rgba(245,240,231,0.92) 42%, rgba(245,240,231,0.65) 58%, rgba(245,240,231,0.12) 100%)",
        }}
      />

      {/* Bottom cream fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#f5f0e7]/80 via-transparent to-[#f5f0e7]/10"
      />

      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border border-[#2F5D39]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-[460px] w-[460px] rounded-full border border-dashed border-[#DFC24D]/50"
      />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[780px] lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C14C38]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C14C38] sm:text-xs">
              Purana Ayurveda · Steinberger See
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.08] tracking-[-0.045em] text-[#21452B] sm:text-6xl md:text-7xl lg:text-[88px]">
            Restore your natural
            <span className="mt-2 block italic text-[#9A8050]">
              balance.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-sm leading-8 text-[#533E23]/85 sm:text-base sm:leading-9">
            Renew your energy with traditional Ayurveda treatments, personal
            consultations and restorative retreats. Discover simple rituals
            that bring balance into your everyday life.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#learn"
              className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#2F5D39] px-8 py-4 text-sm font-semibold text-[#EFE9C5] shadow-xl shadow-[#21452B]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Take the free dosha quiz
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#booking"
              className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-[#2F5D39]/40 bg-[#f5f0e7]/60 px-8 py-4 text-sm font-medium text-[#21452B] backdrop-blur-sm transition duration-300 hover:border-[#2F5D39] hover:bg-[#EFE9C5]"
            >
              Book a treatment
              <span className="text-[#C14C38]">→</span>
            </a>
          </div>

          {/* Brand details */}
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#2F5D39]/20 pt-7 text-[10px] uppercase tracking-[0.18em] text-[#533E23]/75 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="text-[#C14C38]">✳</span>
              Traditional wisdom
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#C14C38] sm:block" />

            <span>Personal care</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#C14C38] sm:block" />

            <span>Everyday balance</span>
          </div>
        </div>

        {/* Floating image caption */}
        <div className="absolute bottom-20 right-10 hidden max-w-[260px] border-l border-[#C14C38] pl-5 lg:block xl:right-16">
          <p className="font-serif text-2xl italic text-[#21452B]">
            Reconnect with yourself.
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#533E23]/75">
            The art of Ayurvedic living
          </p>
        </div>

        {/* Decorative signature */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 right-12 hidden select-none font-serif text-[220px] italic leading-none text-[#21452B]/[0.08] xl:block"
        >
          P
        </div>
      </div>

      {/* Gold bottom detail */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#DFC24D]/80 to-transparent" />
    </section>
  );
}