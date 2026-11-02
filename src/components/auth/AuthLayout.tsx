
import type { ReactNode } from "react";
import Link from "next/link";

type AuthLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
  image: string;
};

export default function AuthLayout({
  eyebrow,
  title,
  description,
  children,
  footer,
  image,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left brand panel */}
        <section className="relative hidden min-h-screen overflow-hidden bg-[var(--forest-dark)] lg:flex">
          <div className="absolute inset-0">
            <img
              src={image}
              alt="Ayurvedic wellness experience"
              className="h-full w-full object-cover opacity-30"
            />
          </div>

          <div className="absolute inset-0 bg-[var(--forest-dark)]/80" />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[var(--gold)]/20" />
          <div className="pointer-events-none absolute -right-20 top-40 h-[340px] w-[340px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full border border-[var(--gold)]/15" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <Link href="/" className="inline-block text-[var(--cream)]">
              <span className="font-[var(--font-heading)] text-3xl tracking-wide">
                PURANA AYURVEDA
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]/65">
                Wellness · Ayurveda · Balance
              </span>
            </Link>

            <div className="max-w-lg">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 text-2xl text-[var(--gold)]">
                ✦
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                A more mindful way of living
              </p>

              <h1 className="font-[var(--font-heading)] text-5xl font-normal leading-[1.15] text-[var(--cream)] xl:text-6xl">
                Return to your natural balance.
              </h1>

              <p className="mt-7 max-w-md text-base leading-8 text-[var(--cream)]/75 xl:text-lg">
                Your personal space for Ayurvedic wellness. Stay connected
                with your treatments, consultations and experiences with
                Purana Ayurveda.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {["Traditional wisdom", "Natural wellbeing", "Personal care"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs text-[var(--cream)]/80"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <p className="text-xs tracking-wide text-[var(--cream)]/50">
              A journey towards balance, naturally.
            </p>
          </div>
        </section>

        {/* Right form panel */}
        <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-[480px]">
            {/* Mobile brand */}
            <Link href="/" className="mb-12 block lg:hidden">
              <span className="font-[var(--font-heading)] text-2xl text-[var(--forest-dark)]">
                PURANA AYURVEDA
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-[var(--brown)]/70">
                Wellness · Ayurveda · Balance
              </span>
            </Link>

            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-7 bg-[var(--terracotta)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
                  {eyebrow}
                </p>
              </div>

              <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
                {title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                {description}
              </p>
            </div>

            {children}

            <div className="mt-8 border-t border-[var(--border)] pt-6">
              {footer}
            </div>

            <Link
              href="/"
              className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] transition hover:text-[var(--forest)]"
            >
              <span aria-hidden="true">←</span>
              Back to Purana Ayurveda
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
