
import Link from "next/link";

export default function SeasonalResetHero() {
  const features = [
    "7 Tage",
    "2 persönliche Beratungen",
    "Chat-Begleitung inklusive",
    "4 saisonale Ausgaben",
    "Auf Deutsch oder Englisch",
  ];

  const benefits = [
    "2 persönliche Beratungen",
    "Persönliche Chat-Begleitung",
    "Vier saisonale Ausgaben",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Warm cream overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 22%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.76) 55%, rgba(245,240,231,0.25) 78%, rgba(245,240,231,0.08) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-[#f5f0e7] to-transparent"
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
              href="/#online"
              className="transition-colors hover:text-[#2F5D39]"
            >
              Online & für zu Hause
            </Link>
            <span className="text-[#C19A35]">/</span>
            <span className="font-medium text-[#2F5D39]">
              Saisonaler Neustart
            </span>
          </div>

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/80 px-4 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-[#2F5D39] shadow-sm backdrop-blur-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#C19A35]" />
            IM EINKLANG MIT DEN JAHRESZEITEN LEBEN
          </div>

          <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
            Saisonaler Neustart
            <span className="mt-3 block font-normal italic text-[#A47D32]">
              Finden Sie Ihren natürlichen Rhythmus.
            </span>
          </h1>

          <div className="mt-7 h-px w-20 bg-[#DFC24D]" />

          <p className="mt-7 max-w-xl text-base leading-8 text-[#52665C] sm:text-lg">
            Sieben Tage, um Ihr Gleichgewicht wiederzufinden und neue
            Energie im Einklang mit der Jahreszeit zu schöpfen – mit einer
            persönlichen Beratung zu Beginn und zum Abschluss sowie
            persönlicher Begleitung durch Lakshani während der gesamten Woche.
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
              Ihren saisonalen Neustart beginnen
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <span className="flex items-center gap-2 text-sm text-[#6B705C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C19A35]" />
              Persönliche Begleitung die ganze Woche
            </span>
          </div>

          {/* Supporting message */}
          <div className="mt-12 flex items-center gap-4 border-t border-[#2F5D39]/15 pt-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#EFE9C5] text-lg text-[#2F5D39]">
              ✳
            </div>
            <div>
              <p className="font-serif text-base text-[#21452B]">
                Leben Sie im Rhythmus der Natur.
              </p>
              <p className="mt-1 text-xs text-[#6B705C]">
                Kleine saisonale Veränderungen, begleitet durch Ayurveda.
              </p>
            </div>
          </div>
        </div>

        {/* Programme card */}
        <div className="relative mx-auto w-full max-w-md lg:mr-2">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/50"
          />

          <aside className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8]/95 p-5 text-[#263A2B] shadow-2xl shadow-[#21452B]/15 backdrop-blur-md sm:p-7">
            {/* Card header */}
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8065]">
                  Ihr Programm
                </p>

                <h2 className="mt-1 font-serif text-2xl text-[#21452B]">
                  Der saisonale Neustart
                </h2>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#EFE9C5] text-xl text-[#2F5D39]">
                ✳
              </div>
            </div>

            {/* Welcome visual */}
            <div className="relative overflow-hidden rounded-[20px] bg-[#E8E8D7] p-3">
              <div
                className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[15px] bg-cover bg-center text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgba(33,69,43,0.65), rgba(33,69,43,0.08)), url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85')",
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-[#F8F5E8]/90 text-xl text-[#2F5D39] shadow-lg">
                  <span className="translate-x-0.5">▶</span>
                </div>

                <p className="mt-5 font-serif text-xl text-white">
                  Eine Begrüßung von Lakshani
                </p>

                <p className="mt-1 text-xs tracking-wide text-white/85">
                  Lernen Sie Ihre Begleiterin kennen · 2 Min.
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8065]">
                  Programmpreis
                </p>

                <p className="mt-1 font-serif text-5xl tracking-tight text-[#21452B]">
                  €229
                </p>
              </div>

              <span className="mb-1 rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/70 px-3 py-2 text-xs font-medium text-[#52665C]">
                7-Tage-Programm
              </span>
            </div>

            <div className="my-6 h-px bg-[#D8D0A9]" />

            {/* Included benefits */}
            <div className="space-y-3.5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-[#52665C]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8E8D7] text-xs font-semibold text-[#2F5D39]">
                    ✓
                  </span>
                  {benefit}
                </div>
              ))}
            </div>

            {/* Booking CTA */}
            <a
              href="#booking"
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-6 py-4 text-sm font-semibold text-white shadow-md shadow-[#21452B]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#21452B]"
            >
              Saisonalen Neustart buchen
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <p className="mt-5 text-center text-xs leading-6 text-[#6B705C]">
              Mitglieder sparen 5 %, Premium-Mitglieder 10 %.{" "}
              <Link
                href="/#membership"
                className="font-semibold text-[#21452B] underline decoration-[#DFC24D] underline-offset-4 transition-colors hover:text-[#C14C38]"
              >
                Mitgliedschaft entdecken
              </Link>
            </p>
          </aside>

          {/* Floating detail */}
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-[#DFC24D]/50 bg-[#F8F5E8] px-5 py-3 shadow-xl sm:block">
            <p className="font-serif text-lg text-[#21452B]">
              Eine neue Jahreszeit. Neue Balance.
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-[#8A8065]">
              Ihre Reise beginnt hier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
