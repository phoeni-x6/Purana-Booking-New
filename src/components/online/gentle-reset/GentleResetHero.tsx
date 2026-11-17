
import Link from "next/link";

export default function GentleResetHero() {
  const features = [
    "4 Tage",
    "1 persönliche Beratung",
    "Video & Text",
    "Für Einsteiger geeignet",
    "Auf Deutsch oder Englisch",
  ];

  const benefits = [
    "1 persönliche Beratung",
    "4 Wochen Zugriff",
    "Begleitung per Video und Text",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Warm editorial overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 22%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.76) 55%, rgba(245,240,231,0.25) 78%, rgba(245,240,231,0.08) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-[#f5f0e7] to-transparent"
      />

      {/* Decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-[38%] h-40 w-40 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        {/* Hero content */}
        <div className="max-w-2xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#6B705C]">
            <Link
              href="/online"
              className="transition-colors hover:text-[#2F5D39]"
            >
              Online & für zu Hause
            </Link>
            <span className="text-[#C19A35]">/</span>
            <span className="font-medium text-[#2F5D39]">
              Sanfter Neustart
            </span>
          </div>

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/80 px-4 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-[#2F5D39] shadow-sm backdrop-blur-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#C19A35]" />
            IHR SANFTER EINSTIEG IN DEN AYURVEDA
          </div>

          <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
            Sanfter Neustart
            <span className="mt-3 block font-normal italic text-[#A47D32]">
              Zurück zu mehr Balance.
            </span>
          </h1>

          <div className="mt-7 h-px w-20 bg-[#DFC24D]" />

          <p className="mt-7 max-w-xl text-base leading-8 text-[#52665C] sm:text-lg">
            Vier Tage mit einfacher ayurvedischer Ernährung, täglichen
            Ritualen und wohltuender Ruhe – abgestimmt auf Ihre Konstitution.
            So fühlen Sie sich leichter, gewinnen neue Energie und erfahren,
            wie Sie die Impulse zu Hause weiterführen können.
          </p>

          {/* Programme highlights */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {features.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2.5 text-xs font-medium transition duration-300 sm:text-sm ${
                  index === 0
                    ? "border-[#2F5D39]/20 bg-[#2F5D39] text-[#F8F5E8]"
                    : "border-[#2F5D39]/15 bg-[#F8F5E8]/75 text-[#52665C] backdrop-blur-sm hover:border-[#DFC24D] hover:bg-[#EFE9C5]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#21452B]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Ihren Neustart beginnen
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>

            <span className="flex items-center gap-2 text-sm text-[#6B705C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C19A35]" />
              Ein einfacher, begleiteter Einstieg
            </span>
          </div>

          {/* Small trust note */}
          <div className="mt-12 flex items-center gap-4 border-t border-[#2F5D39]/15 pt-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#EFE9C5] text-lg text-[#2F5D39]">
              ✳
            </div>
            <div>
              <p className="font-serif text-base text-[#21452B]">
                Sanft beginnen. Ihren Rhythmus finden.
              </p>
              <p className="mt-1 text-xs text-[#6B705C]">
                Ayurveda-Begleitung für Ihren Alltag.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
