
export default function OnlineWellness() {
  return (
    <section
      id="online"
      className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#193b30] text-white md:grid-cols-5"
    >
      <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#506e4e] to-[#193b30] md:col-span-2">
        <div className="absolute h-52 w-52 rounded-full border border-[#e4c77f]/60" />
        <div className="absolute h-64 w-64 rounded-full border border-dashed border-[#e4c77f]/40" />
        <span className="relative z-10 text-center font-serif text-3xl leading-snug text-[#f4dfaa]">
          Online
          <br />
          Ayurveda care.
        </span>
        <span className="absolute bottom-5 right-6 text-7xl text-white/10">
          ❋
        </span>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-12 md:col-span-3">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#e4ad3e]">
          Online, wherever you are
        </p>

        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          Online consultation &amp; Ayurveda detox at home
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#d4dfd6]">
          A 45-minute online consultation with Lakshani (German or English) or
          Dr. Ishanka, Ayurvedic doctor (BAMS) in Sri Lanka (English), and
          guided Reset at Home programmes.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="#booking"
            className="rounded-full bg-[#e4ad3e] px-6 py-4 text-sm font-semibold text-[#193b30] transition hover:bg-[#f2c76e]"
          >
            Discover online offers
          </a>

          <span className="text-xs text-[#c1d0c4]">
            45-minute consultations · Guided home programmes
          </span>
        </div>
      </div>
    </section>
  );
}
