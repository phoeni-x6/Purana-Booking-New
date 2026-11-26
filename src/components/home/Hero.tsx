
export default function Hero() {
  return (
    <section className="group relative isolate min-h-[760px] overflow-hidden bg-[#f5f0e7] lg:min-h-[820px]">

      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center transition-transform duration-[12000ms] ease-out group-hover:scale-[1.03]"
        style={{
          backgroundImage:
            "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/Vaidyas%20Ayurveda%20Retreat,%20Kerala,%20Indien%20(1).jfif')",
        }}
      />

      {/* Main cream overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.99) 28%, rgba(245,240,231,0.94) 43%, rgba(245,240,231,0.65) 62%, rgba(245,240,231,0.12) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#f5f0e7]/90 via-transparent to-[#f5f0e7]/10" />

      {/* Decorative background rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 h-[700px] w-[700px] rounded-full border border-[#2F5D39]/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-[540px] w-[540px] rounded-full border border-dashed border-[#DFC24D]/40" />

      {/* Botanical decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[7%] top-[13%] hidden rotate-[-20deg] opacity-60 lg:block">
        <svg viewBox="0 0 120 160" fill="none" className="h-40 w-32 text-[#9A8050]" stroke="currentColor" strokeWidth="1">
          <path d="M60 150C60 110 54 72 60 15" />
          <path d="M59 112C30 112 12 94 12 66C39 66 58 82 59 112Z" />
          <path d="M60 88C87 86 105 66 105 39C78 40 61 58 60 88Z" />
          <path d="M59 64C37 62 25 47 27 25C48 27 59 42 59 64Z" />
          <path d="M60 130C83 129 98 115 101 95C78 94 62 109 60 130Z" />
        </svg>
      </div>

      {/* Main layout */}
      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-12 px-6 py-24 sm:px-10 lg:min-h-[820px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-16 xl:px-24">

        {/* Left editorial content */}
        <div className="relative z-20 max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-9 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C14C38]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C14C38] sm:text-xs">
              Purana Ayurveda · Steinberger See
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[clamp(3.2rem,6vw,6.5rem)] font-normal leading-[0.99] tracking-[-0.055em] text-[#21452B]">
            Finden Sie
            <br />
            zurück zu

            <span className="mt-2 block pl-5 font-serif italic text-[#9A8050] sm:pl-10">
              Ihrer inneren
            </span>

            <span className="relative mt-1 block w-fit font-serif italic text-[#9A8050]">
              Balance.
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-1 h-px w-[85%] bg-gradient-to-r from-[#DFC24D] to-transparent"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-lg text-sm leading-8 text-[#533E23]/85 sm:text-base sm:leading-9">
            Tanken Sie neue Energie mit traditionellen Ayurveda-Behandlungen,
            persönlichen Beratungen und erholsamen Retreats. Entdecken Sie
            wohltuende Rituale, die mehr Ausgeglichenheit in Ihren Alltag bringen.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/en/dosha-quiz"
              className="group/primary inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#2F5D39] px-8 py-4 text-sm font-semibold text-[#EFE9C5] shadow-xl shadow-[#21452B]/15 transition duration-500 hover:-translate-y-1 hover:bg-[#21452B] hover:shadow-2xl"
            >
              Kostenlosen Dosha-Test machen
              <span className="text-lg transition-transform duration-300 group-hover/primary:translate-x-1 group-hover/primary:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#booking"
              className="group/secondary inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-[#2F5D39]/40 bg-[#f5f0e7]/70 px-8 py-4 text-sm font-medium text-[#21452B] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#2F5D39] hover:bg-[#EFE9C5]"
            >
              Behandlung buchen
              <span className="text-[#C14C38] transition-transform duration-300 group-hover/secondary:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Brand details */}
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#2F5D39]/20 pt-7 text-[10px] uppercase tracking-[0.18em] text-[#533E23]/75 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="text-[#C14C38]">✳</span>
              Traditionelles Wissen
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C14C38] sm:block" />
            <span>Individuelle Betreuung</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C14C38] sm:block" />
            <span>Balance im Alltag</span>
          </div>
        </div>

        {/* Right visual composition */}
        <div className="relative z-10 mx-auto hidden h-[570px] w-full max-w-[570px] lg:block">

          {/* Large decorative circle */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DFC24D]/50" />

          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2F5D39]/20" />

          {/* Image frame */}
          <div className="absolute left-[8%] top-[5%] h-[470px] w-[76%] rotate-[3deg] rounded-t-[48%] rounded-b-[12px] border border-[#DFC24D]/70 bg-[#EFE9C5] p-3 shadow-2xl shadow-[#533E23]/15 transition duration-700 hover:rotate-0">
            <div
              className="h-full w-full overflow-hidden rounded-t-[48%] rounded-b-[8px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/Vaidyas%20Ayurveda%20Retreat,%20Kerala,%20Indien%20(1).jfif')",
              }}
            />
          </div>

          {/* Floating top label */}
          <div className="absolute right-[-1%] top-[13%] flex h-24 w-24 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#f5f0e7] text-center shadow-lg">
            <div>
              <span className="block font-serif text-2xl italic text-[#9A8050]">01</span>
              <span className="mt-1 block text-[8px] uppercase tracking-[0.2em] text-[#533E23]">
                Wohlbefinden
              </span>
            </div>
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-2 -left-5 max-w-[285px] border border-[#DFC24D]/50 bg-[#f5f0e7]/95 p-6 shadow-xl shadow-[#533E23]/10 backdrop-blur-md">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C14C38]" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C14C38]">
                Purana Ayurveda
              </span>
            </div>
            <p className="font-serif text-2xl italic leading-snug text-[#21452B]">
              Finden Sie zurück zu sich selbst.
            </p>
            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#533E23]/75">
              Die Kunst des ayurvedischen Lebens
            </p>
          </div>

          {/* Decorative side text */}
          <div className="absolute -right-8 bottom-[22%] hidden rotate-90 text-[9px] uppercase tracking-[0.35em] text-[#533E23]/60 xl:block">
            Tradition · Natur · Balance
          </div>

          {/* Small decorative details */}
          <span className="absolute left-[4%] top-[19%] h-3 w-3 rounded-full bg-[#C14C38]/70" />
          <span className="absolute bottom-[17%] right-[12%] h-2 w-2 rounded-full bg-[#DFC24D]" />

          {/* Signature */}
          <span className="pointer-events-none absolute -right-4 -top-12 select-none font-serif text-[180px] italic leading-none text-[#21452B]/[0.06]">
            P
          </span>
        </div>

        {/* Mobile image */}
        <div className="relative mx-auto mt-2 w-full max-w-md lg:hidden">
          <div className="relative h-[340px] overflow-hidden rounded-t-[48%] rounded-b-xl border border-[#DFC24D]/60 bg-[#EFE9C5] p-2 shadow-xl">
            <div
              className="h-full w-full rounded-t-[48%] rounded-b-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/Vaidyas%20Ayurveda%20Retreat,%20Kerala,%20Indien%20(1).jfif')",
              }}
            />
          </div>
          <div className="absolute -bottom-5 right-2 border border-[#DFC24D]/50 bg-[#f5f0e7] px-5 py-4 shadow-lg">
            <p className="font-serif text-xl italic text-[#21452B]">
              Finden Sie zurück zu sich selbst.
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#533E23]/75">
              Die Kunst des ayurvedischen Lebens
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gold detail */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#DFC24D]/80 to-transparent" />

    </section>
  );
}
