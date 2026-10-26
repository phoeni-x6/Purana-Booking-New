import Image from "next/image";

const ayurvedaUrl = "https://zentrum-fuer-therapie.de/ayurveda/";
const partnerWebsite = "https://zentrum-fuer-therapie.de/";
const partnerPhone = "+4992318704950";
const partnerEmail = "info@zentrum-fuer-therapie.de";

export default function MarktredwitzPage() {
  return (
    <main className="overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--forest-dark)] text-[var(--cream)]">
        <div className="pointer-events-none absolute -right-28 -top-32 h-[430px] w-[430px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-12 -top-16 h-[300px] w-[300px] rounded-full border border-[var(--gold)]/25" />
        <div className="pointer-events-none absolute -bottom-32 left-[35%] h-80 w-80 rounded-full bg-[var(--forest)]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-[var(--container-width)] items-center gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-28">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[var(--gold)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Purana Ayurveda × Zentrum für Therapie
              </p>
            </div>

            <h1 className="max-w-3xl font-[var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-tight text-[var(--cream)] sm:text-6xl lg:text-7xl">
              Ayurveda in{" "}
              <span className="text-[var(--gold)]">Marktredwitz</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--cream)]/85 sm:text-lg">
              Traditional applications. Warmth. Touch. Time for yourself.
              Discover our Ayurveda partnership at Zentrum für Therapie
              Bogisch in Marktredwitz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
              >
                Explore Ayurveda treatments
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#our-partnership"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-white/5 hover:text-[var(--cream)]"
              >
                Discover our partnership
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-[var(--cream)]/75">
              <span className="flex items-center gap-2">
                <span className="text-[var(--gold)]">✳</span>
                In collaboration with Purana Ayurveda
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--gold)]">✳</span>
                Marktredwitz, Germany
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-[var(--radius-xl)] border-r border-t border-[var(--gold)]/60 sm:-right-6 sm:-top-6" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--forest)]">
              <Image
                src="/images/marktredwitz/partner-practice.jpg"
                alt="Zentrum für Therapie Bogisch, partner location in Marktredwitz"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/90 via-transparent to-[var(--forest-dark)]/10" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                  Our local partner
                </p>

                <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--cream)] sm:text-4xl">
                  Zentrum für Therapie Bogisch
                </h2>

                <p className="mt-3 text-sm text-[var(--cream)]/80">
                  Lindenstraße 3 · Marktredwitz
                </p>

                <a
                  href={partnerWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:text-[var(--cream)]"
                >
                  Visit partner website
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-lg sm:-left-7">
              <p className="font-[var(--font-heading)] text-lg text-[var(--forest-dark)]">
                A shared approach
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Tradition · Care · Wellbeing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section
        id="our-partnership"
        className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              A local partnership
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight tracking-tight text-[var(--forest-dark)] sm:text-5xl">
              Two names. One space for wellbeing.
            </h2>

            <div className="mt-7 h-px w-20 bg-[var(--gold)]" />
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--text-muted)]">
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

            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--forest-dark)] hover:text-white"
            >
              Discover the Ayurveda offering
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Your Ayurveda experience
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
              A moment to slow down
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              Discover a traditional approach centred on warmth, touch
              and time for yourself at our partner location in Marktredwitz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--cream)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--forest-dark)] text-xl text-[var(--gold)]">
                ✳
              </div>

              <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-normal text-[var(--forest-dark)]">
                Warmth
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Enjoy traditional applications using pleasantly warmed
                oils selected for the respective application.
              </p>
            </article>

            <article className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--cream)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--forest-dark)] text-xl text-[var(--gold)]">
                ◌
              </div>

              <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-normal text-[var(--forest-dark)]">
                Gentle touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Calm, rhythmic massage techniques invite you to pause
                and become more aware of your body.
              </p>
            </article>

            <article className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--cream)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--forest-dark)] text-xl text-[var(--gold)]">
                ◷
              </div>

              <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-normal text-[var(--forest-dark)]">
                Time for yourself
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Make space for a mindful break from everyday life and
                a more relaxed moment in your day.
              </p>
            </article>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[var(--text-muted)]">
            These applications are wellness and relaxation offerings based
            on traditional Ayurvedic methods. They do not replace medical
            assessment, diagnosis or treatment.
          </p>
        </div>
      </section>

      {/* TREATMENTS LINK — NO DUPLICATED TREATMENT CATALOGUE */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--forest-dark)] px-7 py-12 text-[var(--cream)] sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-6 -top-10 h-52 w-52 rounded-full border border-[var(--gold)]/25" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[var(--gold)]/[0.05] blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--gold)]">
                Explore the applications
              </p>

              <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--cream)] sm:text-5xl">
                Find the right Ayurveda experience for you
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--cream)]/80">
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
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] transition hover:-translate-y-0.5 hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
              >
                View all treatments
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={`mailto:${partnerEmail}?subject=Ayurveda%20in%20Marktredwitz`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-white/5 hover:text-[var(--cream)]"
              >
                Ask a question
              </a>
            </div>
          </div>

          <div className="relative mt-10 border-t border-white/15 pt-5">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-sm text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4 hover:text-[var(--cream)]"
            >
              zentrum-fuer-therapie.de/ayurveda/
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION AND CONTACT */}
      <section
        id="location"
        className="border-t border-[var(--border)] bg-[var(--surface-dark)]/40 px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="mx-auto grid max-w-[var(--container-width)] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Find our partner
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
              Your Ayurveda visit in Marktredwitz
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              Ayurveda applications are offered in collaboration with
              Purana Ayurveda at Zentrum für Therapie Bogisch.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--forest-dark)] text-lg text-[var(--gold)]">
                  ⌖
                </span>
                <div>
                  <p className="font-semibold text-[var(--forest-dark)]">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                    Zentrum für Therapie Bogisch
                    <br />
                    Lindenstraße 3
                    <br />
                    95615 Marktredwitz, Germany
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--forest-dark)] text-lg text-[var(--gold)]">
                  ☎
                </span>
                <div>
                  <p className="font-semibold text-[var(--forest-dark)]">
                    Phone
                  </p>
                  <a
                    href={`tel:${partnerPhone}`}
                    className="mt-1 inline-block text-sm text-[var(--text-muted)] hover:text-[var(--brown)]"
                  >
                    +49 9231 870495-0
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--forest-dark)] text-lg text-[var(--gold)]">
                  @
                </span>
                <div>
                  <p className="font-semibold text-[var(--forest-dark)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${partnerEmail}`}
                    className="mt-1 inline-block break-all text-sm text-[var(--text-muted)] hover:text-[var(--brown)]"
                  >
                    {partnerEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lindenstra%C3%9Fe+3%2C+95615+Marktredwitz%2C+Germany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--forest-dark)] hover:text-white"
              >
                Get directions ↗
              </a>

              <a
                href={partnerWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--forest)] px-6 py-3 text-sm font-semibold text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white"
              >
                Partner website ↗
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm sm:p-4">
            <iframe
              title="Zentrum für Therapie Bogisch in Marktredwitz"
              src="https://maps.google.com/maps?q=Lindenstra%C3%9Fe%203%2C%2095615%20Marktredwitz%2C%20Germany&z=15&output=embed"
              className="h-[340px] w-full rounded-[var(--radius-lg)] sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="flex flex-col gap-2 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-[var(--font-heading)] text-lg text-[var(--forest-dark)]">
                  Zentrum für Therapie Bogisch
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Marktredwitz · Bavaria, Germany
                </p>
              </div>

              <a
                href={ayurvedaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-semibold text-[var(--forest)] hover:text-[var(--brown)]"
              >
                Ayurveda details ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 pt-4 sm:px-10 sm:pb-24 lg:px-14">
        <div className="mx-auto max-w-[var(--container-width)] rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-dark)] text-xl text-[var(--brown)]">
            ✳
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
            Your next step
          </p>

          <h2 className="font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
            Make time for yourself
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            Explore the Ayurveda applications available in Marktredwitz
            and contact our partner to discuss your visit.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={ayurvedaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
            >
              Explore Ayurveda treatments ↗
            </a>

            <a
              href={`tel:${partnerPhone}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--forest)] px-7 py-3 text-sm font-semibold text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white"
            >
              Contact the practice
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
