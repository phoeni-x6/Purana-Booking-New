
import Link from "next/link";

export default function OnlineHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      {/* Hintergrundbild */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Warme, cremefarbene Überlagerung */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#f5f0e7_0%,rgba(245,240,231,0.98)_22%,rgba(245,240,231,0.94)_40%,rgba(245,240,231,0.76)_58%,rgba(245,240,231,0.25)_82%,rgba(245,240,231,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#f5f0e7] via-transparent to-[#f5f0e7]/20"
      />

      {/* Dekorative Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[480px] w-[480px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 -z-10 h-[340px] w-[340px] rounded-full border border-dashed border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-[400px] w-[400px] rounded-full bg-[#EFE9C5]/70 blur-3xl"
      />

      {/* Hero-Inhalt */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          {/* Überzeile */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/70 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39] sm:text-xs">
              Online – ganz gleich, wo Sie sind
            </p>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
            Persönliche Beratung · Flexible Begleitung · Wohlbefinden zu Hause
          </p>

          {/* Hauptüberschrift */}
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-7xl">
            Ihre Ayurveda-Reise,
            <span className="mt-2 block italic text-[#9A8050]">
              wohin das Leben Sie auch führt.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/85 sm:text-base">
            Beginnen Sie mit einer 45-minütigen Online-Beratung oder
            entscheiden Sie sich für ein begleitetes „Neustart zu Hause“-
            Programm mit Lakshani – mit Videos, Ernährungsplänen und
            persönlicher Unterstützung, die Ihnen dabei helfen, Ayurveda
            in Ihren Alltag zu integrieren.
          </p>

          {/* Vorteile des Angebots */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "45-minütige Beratung",
              "Begleitete Programme für zu Hause",
              "Persönliche Unterstützung",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/75 px-4 py-2.5 text-xs text-[#21452B] shadow-sm backdrop-blur-sm sm:text-sm"
              >
                <span className="text-[#C14C38]">✳</span>
                {item}
              </span>
            ))}
          </div>

          
        </div>
      </div>

      {/* Akzent am unteren Rand */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
