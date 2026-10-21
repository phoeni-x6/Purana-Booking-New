
export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#e4ad3e]">
          Ayurveda wellness in your hands
        </p>

        <h1 className="max-w-2xl font-serif text-5xl leading-[1.1] tracking-tight text-[#f8f4e9] sm:text-6xl lg:text-7xl">
          Restore your natural{" "}
          <span className="italic text-[#e4ad3e]">balance.</span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#d4dfd6] sm:text-base">
          Renew your energy with traditional Ayurveda treatments, personal
          consultations and restorative retreats. Discover simple rituals
          that bring balance into your everyday life.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#learn"
            className="rounded-full bg-[#e4ad3e] px-6 py-4 text-sm font-semibold text-[#193b30] transition hover:-translate-y-1 hover:bg-[#f2c76e]"
          >
            Take the free dosha quiz ↗
          </a>

          <a
            href="#booking"
            className="rounded-full border border-white/40 px-6 py-4 text-sm transition hover:border-[#e4ad3e] hover:bg-white/5"
          >
            Book a treatment →
          </a>
        </div>

        <p className="mt-8 text-xs tracking-wide text-[#c1d0c4]">
          ✳ Traditional wisdom · Personal care · Everyday balance
        </p>
      </div>

      <div className="relative mx-auto flex h-[340px] w-full max-w-lg items-center justify-center overflow-hidden rounded-t-[48%] rounded-b-3xl border border-white/10 bg-gradient-to-br from-[#526e50] via-[#294d3b] to-[#142f24] sm:h-[400px]">
        <div className="absolute h-56 w-56 rounded-full bg-[#e7bd68] shadow-[0_0_90px_rgba(231,189,104,0.25)]" />

        <div className="absolute h-72 w-72 rounded-full border border-[#f4e0aa]/50" />
        <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-[#f4e0aa]/30" />

        <div className="absolute left-[20%] top-[25%] -rotate-45 text-8xl text-[#bdc79a]">
          ❧
        </div>
        <div className="absolute right-[18%] top-[40%] rotate-45 text-8xl text-[#829b72]">
          ❧
        </div>

        <div className="absolute bottom-7 left-7 text-[#fff8e8]">
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#e4ad3e]">
            Your wellness journey
          </p>
          <p className="mt-1 font-serif text-2xl">Begin with balance.</p>
        </div>

        <div className="absolute bottom-7 right-7 grid h-12 w-12 place-items-center rounded-full border border-white/50 font-serif text-xl">
          P
        </div>
      </div>
    </section>
  );
}
