
import Image from "next/image";

const ayurvedaUrl = "https://zentrum-fuer-therapie.de/ayurveda/";
const partnerWebsite = "https://zentrum-fuer-therapie.de/";
const partnerPhone = "+4992318704950";
const partnerEmail = "info@zentrum-fuer-therapie.de";

const experiences = [
  {
    number: "01",
    symbol: "✳",
    title: "Warmth",
    description:
      "Enjoy traditional applications using pleasantly warmed oils selected for the respective application.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5622.jpeg",
    imageAlt: "Peaceful spa setting with warm natural tones",
    label: "The warmth of Ayurveda",
  },
  {
    number: "02",
    symbol: "◌",
    title: "Gentle touch",
    description:
      "Calm, rhythmic massage techniques invite you to pause and become more aware of your body.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5632.jpeg",
    imageAlt: "Relaxing massage treatment",
    label: "The art of touch",
  },
  {
    number: "03",
    symbol: "◷",
    title: "Time for yourself",
    description:
      "Make space for a mindful break from everyday life and a more relaxed moment in your day.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Marktredwitz/IMG_5625.jpeg",
    imageAlt: "Calm wellness environment",
    label: "A moment to unwind",
  },
];

export default function MarktredwitzPage() {
  return (
    <main className="overflow-hidden bg-[#F5F0E7] text-[#263A2B]">
      {/* HERO */}
      {/* HERO */}
<section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#21452B]">
  {/* Full background image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-30 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('",
    }}
  />

  {/* Warm cream fade */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20"
    style={{
      background:
        "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.98) 22%, rgba(245,240,231,0.94) 40%, rgba(245,240,231,0.76) 55%, rgba(245,240,231,0.25) 78%, rgba(245,240,231,0.08) 100%)",
    }}
  />

  {/* Bottom cream fade */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f5f0e7]/95 via-[#f5f0e7]/35 to-transparent"
  />

  {/* Decorative details */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full border border-[#2F5D39]/15"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-16 -top-16 -z-10 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/30"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#DFC24D]/10 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      {/* Main content */}
      <div>
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
            Purana Ayurveda × Zentrum für Therapie
          </span>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
          Location · Marktredwitz, Germany
        </p>

        <h1 className="mt-4 max-w-3xl font-[var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-[76px]">
          A moment of
          <span className="mt-1 block italic text-[#9A8050]">
            wellbeing
          </span>
          in Marktredwitz.
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-7 text-[#533E23]/85 sm:text-base sm:leading-8">
          Traditional applications. Warmth. Touch. Time for yourself.
          Discover our Ayurveda partnership at Zentrum für Therapie
          Bogisch in Marktredwitz.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={ayurvedaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
          >
            Explore Ayurveda treatments
            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="#our-partnership"
            className="inline-flex items-center gap-2 rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/60 px-6 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition-colors hover:border-[#21452B] hover:bg-[#EFE9C5]"
          >
            Discover our partnership
          </a>
        </div>

        {/* Partner information */}
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#21452B]/15 pt-6 text-xs text-[#533E23]/75">
          <span className="flex items-center gap-2">
            <span className="text-[#C14C38]">✳</span>
            In collaboration with Purana Ayurveda
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#C14C38]">✳</span>
            Marktredwitz, Germany
          </span>
        </div>
      </div>

      {/* Partner information card */}
      <div className="relative hidden lg:block">
        <div className="ml-auto max-w-[390px] rounded-[28px] border border-[#D8D0A9]/70 bg-[#F8F5E8]/65 p-8 shadow-[0_20px_70px_rgba(38,58,43,0.08)] backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
            Our local partner
          </p>

          <div className="my-6 h-px bg-[#D8D0A9]" />

          <h2 className="font-[var(--font-heading)] text-3xl font-normal leading-tight text-[#21452B]">
            Zentrum für Therapie Bogisch
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#533E23]/80">
            Lindenstraße 3
            <br />
            Marktredwitz, Germany
          </p>

          <a
            href={partnerWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D39] transition-colors hover:text-[#C14C38]"
          >
            Visit partner website
            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <div className="mt-8 flex items-center gap-3 border-t border-[#D8D0A9] pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D39]/10 text-lg text-[#2F5D39]">
              ✳
            </div>
            <div>
              <p className="text-sm font-semibold text-[#21452B]">
                A shared approach
              </p>
              <p className="mt-1 text-xs text-[#6B705C]">
                Tradition · Care · Wellbeing
              </p>
            </div>
          </div>
        </div>

        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full border border-[#C14C38]/30"
        />
      </div>
    </div>
  </div>
</section>
      {/* PARTNERSHIP */}
      <section
        id="our-partnership"
        className="relative overflow-hidden bg-[#EAE6D9] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full border border-[#C5C9B5]/70" />

        <div className="relative mx-auto grid max-w-[var(--container-width)] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              <span className="h-px w-8 bg-[#C14C38]" />
              A local partnership
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight tracking-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
              Two names.
              <br />
              <span className="italic text-[#8A9A78]">One space</span> for
              wellbeing.
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
                We are pleased to collaborate with Zentrum für Therapie
                Bogisch in Marktredwitz to make traditional Ayurveda
                applications available at this location.
              </p>
              <p>
                With warm oils, calm massage techniques and traditional
                Ayurvedic applications, the focus is on relaxation, body
                awareness and taking a mindful break from everyday life.
              </p>
              <p>
                The Ayurveda offering is presented in collaboration with
                Purana Ayurveda. Visit our partner&apos;s dedicated Ayurveda
                page to explore the applications and find the details you
                need before arranging your visit.
              </p>
            </div>

            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Discover the Ayurveda offering <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              Your Ayurveda experience
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
              A moment to{" "}
              <span className="italic text-[#8A9A78]">slow down.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B705C]">
              Discover a traditional approach centred on warmth, touch and
              time for yourself at our partner location in Marktredwitz.
            </p>
          </div>

          {/* IMAGE EXPERIENCE CARDS */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {experiences.map((item) => (
              <article
                key={item.number}
                className="group relative isolate min-h-[440px] overflow-hidden rounded-[28px] bg-[#21452B] shadow-[0_12px_35px_rgba(38,58,43,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(38,58,43,0.18)]"
              >
                {/* Background image */}
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark forest green fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21452B] via-[#21452B]/65 to-[#21452B]/10 transition duration-500 group-hover:via-[#21452B]/75" />

                {/* Subtle image tint */}
                <div className="absolute inset-0 bg-[#263A2B]/10 mix-blend-multiply" />

                {/* Card content */}
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
                        Ayurveda experience
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
            These applications are wellness and relaxation offerings based
            on traditional Ayurvedic methods. They do not replace medical
            assessment, diagnosis or treatment.
          </p>
        </div>
      </section>

      {/* TREATMENTS CTA */}
      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[32px] bg-[#E5E8DA] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-[#AEB99F]/50" />
          <div className="pointer-events-none absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#DFC24D]/60" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#C8D3BD]/50 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
                <span className="h-px w-8 bg-[#C14C38]" />
                Explore the applications
              </p>
              <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
                Find the right Ayurveda experience for you.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#6B705C]">
                Our partner&apos;s dedicated Ayurveda page contains the
                treatment descriptions, available durations and prices.
                Visit it for the full offering and booking information.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-56 lg:flex-col">
              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
              >
                View all treatments <span>↗</span>
              </a>
              <a
                href={`mailto:${partnerEmail}?subject=Ayurveda%20in%20Marktredwitz`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#AEB99F] px-7 py-3 text-sm font-medium text-[#533E23] transition hover:bg-[#FBF8F0]"
              >
                Ask a question
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

      {/* LOCATION AND CONTACT */}
      <section
        id="location"
        className="bg-[#EAE6D9] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="mx-auto grid max-w-[var(--container-width)] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Find our partner
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl">
              Your Ayurveda visit in{" "}
              <span className="italic text-[#8A9A78]">Marktredwitz.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6B705C]">
              Ayurveda applications are offered in collaboration with
              Purana Ayurveda at Zentrum für Therapie Bogisch.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDE4D3] text-lg text-[#2F5D39]">
                  ⌖
                </span>
                <div>
                  <p className="font-semibold text-[#263A2B]">Address</p>
                  <p className="mt-1 text-sm leading-6 text-[#6B705C]">
                    Zentrum für Therapie Bogisch
                    <br />
                    Lindenstraße 3
                    <br />
                    95615 Marktredwitz, Germany
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9DFC5] text-lg text-[#533E23]">
                  ☎
                </span>
                <div>
                  <p className="font-semibold text-[#263A2B]">Phone</p>
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
                  <p className="font-semibold text-[#263A2B]">Email</p>
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
                Get directions ↗
              </a>
              <a
                href={partnerWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#AEB99F] px-6 py-3 text-sm font-semibold text-[#2F5D39] transition hover:bg-[#DDE4D3]"
              >
                Partner website ↗
              </a>
            </div>
          </div>

          {/* MAP */}
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
                  Marktredwitz · Bavaria, Germany
                </p>
              </div>
              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-semibold text-[#2F5D39] transition hover:text-[#C14C38]"
              >
                Ayurveda details ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 pt-16 sm:px-10 sm:pb-28 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[32px] border border-[#D8D0A9] bg-[#FBF8F0] px-7 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-[#D8D0A9]/70" />
          <div className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full border border-[#DFC24D]/50" />

          <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E9DFC5] text-2xl text-[#C14C38]">
            ✳
          </div>

          <p className="relative mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6845]">
            Your next step
          </p>

          <h2 className="relative font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#263A2B] sm:text-5xl lg:text-6xl">
            Make time for{" "}
            <span className="italic text-[#8A9A78]">yourself.</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B705C]">
            Explore the Ayurveda applications available in Marktredwitz and
            contact our partner to discuss your visit.
          </p>

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#21452B]"
            >
              Explore Ayurveda treatments ↗
            </a>
            <a
              href={`tel:${partnerPhone}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#AEB99F] px-7 py-3 text-sm font-semibold text-[#2F5D39] transition hover:bg-[#E2E8D9]"
            >
              Contact the practice
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
