
"use client";

import Image from "next/image";

const ayurvedaUrl = "https://zentrum-fuer-therapie.de/ayurveda/";
const partnerWebsite = "https://zentrum-fuer-therapie.de/";
const partnerPhone = "+4992318704950";
const partnerEmail = "info@zentrum-fuer-therapie.de";

const experiences = [
  {
    number: "01",
    symbol: "✳",
    title: "Wohltuende Wärme",
    description:
      "Genießen Sie traditionelle Anwendungen mit angenehm erwärmten Ölen, die passend zur jeweiligen Behandlung ausgewählt werden.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5622.jpeg",
    imageAlt: "Ruhige Wellness-Atmosphäre in warmen Naturtönen",
    label: "Die Wärme des Ayurveda",
  },
  {
    number: "02",
    symbol: "◌",
    title: "Sanfte Berührung",
    description:
      "Ruhige, rhythmische Massagetechniken laden Sie dazu ein, innezuhalten und Ihren Körper bewusster wahrzunehmen.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5632.jpeg",
    imageAlt: "Entspannende Massagebehandlung",
    label: "Die Kunst der Berührung",
  },
  {
    number: "03",
    symbol: "◷",
    title: "Zeit für sich selbst",
    description:
      "Schaffen Sie Raum für eine bewusste Auszeit vom Alltag und genießen Sie einen Moment der Ruhe und Entspannung.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5625.jpeg",
    imageAlt: "Ruhige und entspannende Wellness-Umgebung",
    label: "Ein Moment zum Durchatmen",
  },
];

export default function MarktredwitzPage() {
  return (
    <main className="overflow-hidden bg-[#F5F0E7] text-[#263A2B]">

      {/* HERO */}
      <section className="group relative isolate min-h-[850px] overflow-hidden bg-[#F5F0E7] text-[#21452B]">

        {/* Full background image with hover zoom */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-30 overflow-hidden"
        >
          <div
            className="absolute inset-0 scale-100 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5622.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Soft cream overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,240,231,0.35) 0%, rgba(245,240,231,0.48) 35%, rgba(245,240,231,0.65) 70%, rgba(245,240,231,0.92) 100%)",
          }}
        />

        {/* Central cream glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(248,245,232,0.42) 0%, rgba(248,245,232,0.12) 48%, transparent 78%)",
          }}
        />

        {/* Bottom cream fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#F5F0E7]/95 via-[#F5F0E7]/40 to-transparent"
        />

        {/* Decorative frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 border border-[#9A8050]/45 sm:inset-7 lg:inset-10"
        />

        {/* Decorative corners */}
        <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[#DFC24D] sm:left-7 sm:top-7 lg:left-10 lg:top-10" />
        <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 border-r border-t border-[#DFC24D] sm:right-7 sm:top-7 lg:right-10 lg:top-10" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[#DFC24D] sm:bottom-7 sm:left-7 lg:bottom-10 lg:left-10" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#DFC24D] sm:bottom-7 sm:right-7 lg:bottom-10 lg:right-10" />

        {/* Main content */}
        <div className="relative mx-auto flex min-h-[850px] max-w-[1400px] flex-col items-center justify-center px-8 pb-32 pt-28 text-center sm:px-12">

          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-4 rounded-full border border-[#9A8050]/30 bg-[#F8F5E8]/55 px-5 py-3 backdrop-blur-sm">
            <span className="h-px w-8 bg-[#C14C38]" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#533E23] sm:text-xs">
              Purana Ayurveda × Zentrum für Therapie
            </p>
            <span className="h-px w-8 bg-[#C14C38]" />
          </div>

          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8A6845] sm:text-xs">
            Standort · Marktredwitz, Deutschland
          </p>

          {/* Main heading */}
          <h1 className="mt-7 max-w-5xl font-[var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-tight text-[#263A2B] sm:text-7xl lg:text-[6.5rem]">
            Ein Moment des
            <span className="mt-2 block italic text-[#9A8050]">
              Wohlbefindens
            </span>
            <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl">
              in Marktredwitz.
            </span>
          </h1>

          {/* Ornament */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#9A8050]/60" />
            <span className="text-xl text-[#C14C38]">✳</span>
            <span className="h-px w-12 bg-[#9A8050]/60" />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23] sm:text-base sm:leading-9">
            Traditionelle Anwendungen. Wohltuende Wärme. Sanfte
            Berührungen. Zeit für sich selbst. Entdecken Sie unser
            Ayurveda-Angebot in Zusammenarbeit mit dem Zentrum für
            Therapie Bogisch in Marktredwitz.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#21452B] px-7 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F5D39]"
            >
              Ayurveda-Behandlungen entdecken
              <span className="transition-transform group-hover/btn:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#our-partnership"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/65 px-7 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#21452B] hover:bg-[#EFE9C5]"
            >
              Unsere Zusammenarbeit entdecken
            </a>
          </div>

          {/* Partner information */}
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-[#D8D0A9]/70 bg-[#F8F5E8]/65 px-7 py-5 shadow-sm backdrop-blur-md sm:flex-row sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9A8050]">
                Unser Partner vor Ort
              </p>
              <p className="mt-1 font-[var(--font-heading)] text-xl text-[#21452B]">
                Zentrum für Therapie Bogisch
              </p>
            </div>

            <span className="hidden h-10 w-px bg-[#D8D0A9] sm:block" />

            <div className="text-center sm:text-left">
              <p className="text-xs text-[#533E23]/75">
                Lindenstraße 3
              </p>
              <p className="text-xs text-[#533E23]/75">
                Marktredwitz, Deutschland
              </p>
            </div>

            <a
              href={partnerWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#2F5D39] transition-colors hover:text-[#C14C38]"
            >
              Partner-Website ↗
            </a>
          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#533E23]/65">
              PURANA AYURVEDA · MARKTREDWITZ
            </p>
            <span className="h-7 w-px bg-[#9A8050]/70" />
          </div>
        </div>
      </section>

      {/* ZUSAMMENARBEIT */}
      <section
        id="our-partnership"
        className="relative overflow-hidden bg-[#EAE6D9] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full border border-[#C5C9B5]/70" />

        <div className="relative mx-auto grid max-w-[var(--container-width)] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Eine Partnerschaft vor Ort
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight tracking-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
              Zwei Namen.
              <br />
              <span className="italic text-[#8A9A78]">
                Ein gemeinsamer
              </span>{" "}
              Ort des Wohlbefindens.
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-16 bg-[#DFC24D]" />
              <span className="text-lg text-[#C14C38]">✳</span>
              <span className="h-px w-8 bg-[#DFC24D]" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-5 text-base leading-8 text-[#6B705C]">
              <p>
                Wir freuen uns über die Zusammenarbeit mit dem Zentrum für
                Therapie Bogisch in Marktredwitz. Gemeinsam möchten wir
                traditionelle Ayurveda-Anwendungen an diesem Standort
                zugänglich machen.
              </p>

              <p>
                Mit warmen Ölen, sanften Massagetechniken und traditionellen
                ayurvedischen Anwendungen stehen Entspannung, ein bewusstes
                Körpergefühl und eine achtsame Auszeit vom Alltag im
                Mittelpunkt.
              </p>

              <p>
                Das Ayurveda-Angebot wird in Zusammenarbeit mit Purana
                Ayurveda präsentiert. Besuchen Sie die spezielle
                Ayurveda-Seite unseres Partners, um die Anwendungen zu
                entdecken und alle wichtigen Informationen für Ihren Besuch
                zu erhalten.
              </p>
            </div>

            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Ayurveda-Angebot entdecken <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* AYURVEDA-ERLEBNIS */}
      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              Ihr Ayurveda-Erlebnis
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
              Ein Moment zum{" "}
              <span className="italic text-[#8A9A78]">Innehalten.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6B705C]">
              Entdecken Sie einen traditionellen Ansatz, bei dem Wärme,
              Berührung und bewusste Zeit für sich selbst im Mittelpunkt
              stehen – an unserem Partnerstandort in Marktredwitz.
            </p>
          </div>

          {/* BILDKARTEN */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {experiences.map((item) => (
              <article
                key={item.number}
                className="group relative isolate min-h-[440px] overflow-hidden rounded-[28px] bg-[#21452B] shadow-[0_12px_35px_rgba(38,58,43,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(38,58,43,0.18)]"
              >
                {/* Hintergrundbild */}
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Dunkelgrüner Farbverlauf */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21452B] via-[#21452B]/65 to-[#21452B]/10 transition duration-500 group-hover:via-[#21452B]/75" />

                {/* Dezente Bildtönung */}
                <div className="absolute inset-0 bg-[#263A2B]/10 mix-blend-multiply" />

                {/* Karteninhalt */}
                <div className="relative flex min-h-[440px] flex-col justify-between p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/75">
                      {item.number} / 03
                    </span>

                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-[#DFC24D] backdrop-blur-md transition duration-500 group-hover:rotate-12 group-hover:bg-white/20">
                      {item.symbol}
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                      {item.label}
                    </p>

                    <h3 className="font-[var(--font-heading)] text-3xl font-normal text-white sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        Ayurveda-Erlebnis
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-lg text-[#DFC24D] transition duration-300 group-hover:translate-x-1 group-hover:bg-white/10">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-9 max-w-3xl text-center text-xs leading-6 text-[#6B705C]">
            Diese Anwendungen dienen dem Wohlbefinden und der Entspannung
            und basieren auf traditionellen ayurvedischen Methoden. Sie
            ersetzen keine medizinische Untersuchung, Diagnose oder
            Behandlung.
          </p>
        </div>
      </section>

      {/* BEHANDLUNGEN – CTA */}
      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[32px] bg-[#E5E8DA] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-[#AEB99F]/50" />
          <div className="pointer-events-none absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#DFC24D]/60" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#C8D3BD]/50 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
                <span className="h-px w-8 bg-[#C14C38]" />
                Entdecken Sie unsere Anwendungen
              </p>

              <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
                Finden Sie das Ayurveda-Erlebnis, das zu Ihnen passt.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#6B705C]">
                Auf der Ayurveda-Seite unseres Partners finden Sie
                ausführliche Behandlungsbeschreibungen, verfügbare
                Behandlungszeiten und Preise. Entdecken Sie dort das gesamte
                Angebot und alle Informationen zur Buchung.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-56 lg:flex-col">
              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
              >
                Alle Behandlungen ansehen <span>↗</span>
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#AEB99F] px-7 py-3 text-sm font-medium text-[#533E23] transition hover:bg-[#FBF8F0]"
              >
                Frage stellen
              </a>
            </div>
          </div>

          <div className="relative mt-10 border-t border-[#C5C9B5] pt-5">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-sm text-[#2F5D39] underline decoration-[#2F5D39]/30 underline-offset-4 transition hover:text-[#C14C38]"
            >
              zentrum-fuer-therapie.de/ayurveda/
            </a>
          </div>
        </div>
      </section>

      {/* STANDORT UND KONTAKT */}
      <section
        id="location"
        className="bg-[#EAE6D9] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="mx-auto grid max-w-[var(--container-width)] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Hier finden Sie unseren Partner
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl">
              Ihr Ayurveda-Besuch in{" "}
              <span className="italic text-[#8A9A78]">Marktredwitz.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6B705C]">
              Die Ayurveda-Anwendungen werden in Zusammenarbeit mit Purana
              Ayurveda im Zentrum für Therapie Bogisch angeboten.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDE4D3] text-lg text-[#2F5D39]">
                  ⌖
                </span>

                <div>
                  <p className="font-semibold text-[#263A2B]">Adresse</p>
                  <p className="mt-1 text-sm leading-6 text-[#6B705C]">
                    Zentrum für Therapie Bogisch
                    <br />
                    Lindenstraße 3
                    <br />
                    95615 Marktredwitz, Deutschland
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9DFC5] text-lg text-[#533E23]">
                  ☎
                </span>

                <div>
                  <p className="font-semibold text-[#263A2B]">Telefon</p>
                  <a
                    href={`tel:${partnerPhone}`}
                    className="mt-1 inline-block text-sm text-[#6B705C] transition hover:text-[#2F5D39]"
                  >
                    +49 9231 870495-0
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0DFD6] text-lg text-[#C14C38]">
                  @
                </span>

                <div>
                  <p className="font-semibold text-[#263A2B]">E-Mail</p>
                  <a
                    href={`mailto:${partnerEmail}`}
                    className="mt-1 inline-block break-all text-sm text-[#6B705C] transition hover:text-[#2F5D39]"
                  >
                    {partnerEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lindenstra%C3%9Fe+3%2C+95615+Marktredwitz%2C+Germany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2F5D39] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#21452B]"
              >
                Route planen ↗
              </a>

              <a
                href={partnerWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#AEB99F] px-6 py-3 text-sm font-semibold text-[#2F5D39] transition hover:bg-[#DDE4D3]"
              >
                Partner-Website ↗
              </a>
            </div>
          </div>

          {/* KARTE */}
          <div className="overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#FBF8F0] p-3 shadow-[0_15px_45px_rgba(38,58,43,0.07)] sm:p-4">
            <iframe
              title="Zentrum für Therapie Bogisch in Marktredwitz"
              src="https://maps.google.com/maps?q=Lindenstra%C3%9Fe%203%2C%2095615%20Marktredwitz%2C%20Germany&z=15&output=embed"
              className="h-[340px] w-full rounded-[20px] sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="flex flex-col gap-2 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-[var(--font-heading)] text-lg text-[#263A2B]">
                  Zentrum für Therapie Bogisch
                </p>
                <p className="text-sm text-[#6B705C]">
                  Marktredwitz · Bayern, Deutschland
                </p>
              </div>

              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-semibold text-[#2F5D39] transition hover:text-[#C14C38]"
              >
                Ayurveda-Angebot ansehen ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHLIESSENDER CTA */}
      <section className="px-6 pb-20 pt-16 sm:px-10 sm:pb-28 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[32px] border border-[#D8D0A9] bg-[#FBF8F0] px-7 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-[#D8D0A9]/70" />
          <div className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full border border-[#DFC24D]/50" />

          <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E9DFC5] text-2xl text-[#C14C38]">
            ✳
          </div>

          <p className="relative mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
            Ihr nächster Schritt
          </p>

          <h2 className="relative font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
            Nehmen Sie sich Zeit für{" "}
            <span className="italic text-[#8A9A78]">sich selbst.</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B705C]">
            Entdecken Sie die Ayurveda-Anwendungen in Marktredwitz und
            kontaktieren Sie unseren Partner, um Ihren Besuch zu besprechen.
          </p>

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Ayurveda-Behandlungen entdecken ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
