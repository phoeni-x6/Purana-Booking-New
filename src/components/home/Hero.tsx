
export default function Hero() {
  return (
    <section className="group relative isolate overflow-hidden bg-[#f5f0e7] text-[#533E23]">

      {/* Full background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center transition-transform duration-[12000ms] ease-out group-hover:scale-[1.025]"
        style={{
          backgroundImage:
            "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/Holistic%20Massage%20in%20Penrith_%20A%20Path%20to%20Total%20Wellness.jfif",
        }}
      />

      {/* Lighter cream gradient overlay */}
<div
  aria-hidden="true"
  className="absolute inset-0 -z-20"
  style={{
    background:
      "linear-gradient(180deg, rgba(245,240,231,0.18) 0%, rgba(245,240,231,0.32) 35%, rgba(245,240,231,0.52) 70%, rgba(245,240,231,0.78) 100%)",
  }}
/>

      {/* Soft central glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, rgba(248,245,232,0.48) 0%, transparent 68%)",
        }}
      />

      {/* Decorative frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-[#9A8050]/35 sm:inset-7 lg:inset-10"
      />

      {/* Corner details */}
      <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[#C14C38] sm:left-7 sm:top-7 lg:left-10 lg:top-10" />
      <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 border-r border-t border-[#C14C38] sm:right-7 sm:top-7 lg:right-10 lg:top-10" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[#C14C38] sm:bottom-7 sm:left-7 lg:bottom-10 lg:left-10" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#C14C38] sm:bottom-7 sm:right-7 lg:bottom-10 lg:right-10" />

      {/* Centered hero content */}
      <div className="relative mx-auto flex min-h-[900px] max-w-[1400px] flex-col items-center justify-center px-8 pb-32 pt-28 text-center sm:px-12 lg:min-h-[950px]">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#C14C38]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9A8050] sm:text-xs">
            Purana Ayurveda · Steinberger See
          </p>
          <span className="h-px w-10 bg-[#C14C38]" />
        </div>

        {/* Heading */}
        <h1 className="mt-10 max-w-5xl font-serif text-5xl font-normal leading-[1.05] tracking-[-0.045em] text-[#533E23] sm:text-7xl lg:text-[6.7rem]">
          Finden Sie zurück zu
          <span className="mt-2 block italic text-[#9A8050]">
            Ihrer inneren Balance.
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-[#9A8050]/50" />
          <span className="font-serif text-2xl italic text-[#C14C38]">✳</span>
          <span className="h-px w-14 bg-[#9A8050]/50" />
        </div>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/90 sm:text-base sm:leading-9">
          Tanken Sie neue Energie mit traditionellen Ayurveda-Behandlungen,
          persönlichen Beratungen und erholsamen Retreats. Entdecken Sie
          wohltuende Rituale, die mehr Ausgeglichenheit in Ihren Alltag bringen.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="/en/dosha-quiz"
            className="group/primary inline-flex min-h-14 items-center justify-center gap-4 bg-[#C14C38] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#533E23]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83D2C]"
          >
            Kostenlosen Dosha-Test machen
            <span className="text-lg transition-transform group-hover/primary:translate-x-1 group-hover/primary:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="#booking"
            className="group/secondary inline-flex min-h-14 items-center justify-center gap-4 border border-[#9A8050]/50 bg-[#F8F5E8]/65 px-8 py-4 text-sm font-semibold text-[#533E23] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C14C38] hover:bg-[#EFE9C5]"
          >
            Behandlung buchen
            <span className="text-[#C14C38] transition-transform group-hover/secondary:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Cream information panel */}
    

        {/* Bottom caption */}
        <div className="absolute bottom-9 left-0 right-0 flex flex-col items-center gap-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9A8050]">
            PURANA AYURVEDA
          </p>
          <span className="h-7 w-px bg-[#C14C38]/60" />
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#DFC24D] to-transparent" />

    </section>
  );
}
