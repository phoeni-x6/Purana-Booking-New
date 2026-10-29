"use client";

import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "purana-dosha-popup-seen";
const QUIZ_URL = "/en/dosha-quiz";

export default function DoshaQuizPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = useCallback(() => {
    setIsOpen(false);

    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // The popup can still close when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let opened = false;

    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") return;
    } catch {
      // Continue without session storage.
    }

    const openPopup = () => {
      if (opened) return;

      opened = true;
      setIsOpen(true);

      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollPercentage =
        (window.scrollY / scrollableHeight) * 100;

      if (scrollPercentage >= 50) openPopup();
    };

    timer = setTimeout(openPopup, 10000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[var(--forest-dark)]/70 px-4 py-6 backdrop-blur-[3px] sm:px-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="dosha-popup-title"
        aria-describedby="dosha-popup-description"
        className="relative grid w-full max-w-[760px] overflow-hidden rounded-[28px] border border-white/40 bg-[var(--surface)] shadow-2xl shadow-black/25 sm:grid-cols-[0.88fr_1.12fr]"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close dosha quiz invitation"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--forest-dark)] transition hover:rotate-90 hover:bg-[var(--cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)] sm:right-4 sm:top-4"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Decorative brand panel */}
        <div className="relative flex min-h-[190px] flex-col justify-between overflow-hidden bg-[var(--forest-dark)] p-6 text-[var(--cream)] sm:min-h-[350px] sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[var(--gold)]/30"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 top-5 h-36 w-36 rounded-full border border-[var(--cream)]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-[var(--gold)]/20"
          />

          <div className="relative">
            <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[var(--gold)] sm:text-xs">
              Purana Ayurveda
            </span>

            <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/50 text-[var(--gold)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                fill="none"
                className="h-7 w-7"
              >
                <path
                  d="M16 26V13M16 20C9 20 6 16 6 10c7 0 10 4 10 10ZM16 16c0-7 4-10 10-10 0 7-4 10-10 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 27h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Vata · Pitta · Kapha
            </p>

            <h2 className="mt-3 max-w-[260px] font-[var(--font-heading)] text-3xl font-normal leading-[1.12] text-[var(--cream)] sm:text-4xl">
              A little closer to your nature.
            </h2>

            <p className="mt-3 max-w-[260px] text-sm leading-6 text-[var(--cream)]/75">
              A moment of self-discovery, inspired by Ayurveda.
            </p>
          </div>

          <span className="relative mt-6 hidden text-[10px] uppercase tracking-[0.18em] text-[var(--cream)]/55 sm:block">
            Your wellness journey starts here
          </span>
        </div>

        {/* Invitation panel */}
        <div className="flex flex-col justify-center p-6 pt-16 sm:p-9 sm:pt-12">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--terracotta)]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brown)]">
              Free · 2 minutes · No sign-up
            </p>
          </div>

          <h2
            id="dosha-popup-title"
            className="max-w-sm font-[var(--font-heading)] text-3xl font-normal leading-[1.15] text-[var(--forest-dark)] sm:text-[2.55rem]"
          >
            Discover your Ayurvedic constitution
          </h2>

          <p
            id="dosha-popup-description"
            className="mt-4 text-sm leading-7 text-[var(--text-muted)]"
          >
            Answer 8 short questions and receive a first, rough idea of your
            Ayurvedic type — no email or account needed.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { name: "Vata", tone: "bg-[var(--cream)]" },
              { name: "Pitta", tone: "bg-[#E9DCC8]" },
              { name: "Kapha", tone: "bg-[#DCE4D5]" },
            ].map((item) => (
              <span
                key={item.name}
                className={`rounded-full border border-[var(--border)] ${item.tone} px-3 py-1.5 text-xs font-medium text-[var(--forest-dark)]`}
              >
                {item.name}
              </span>
            ))}
          </div>

          <a
            href={QUIZ_URL}
            onClick={() => {
              try {
                sessionStorage.setItem(SESSION_KEY, "true");
              } catch {
                // Navigation should still work without storage.
              }
            }}
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--forest-dark)] px-6 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
          >
            Start the free quiz
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={closePopup}
            className="mx-auto mt-5 rounded-sm border-b border-transparent pb-0.5 text-xs text-[var(--text-muted)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
          >
            Maybe later
          </button>

          <p className="mt-5 text-center text-[10px] leading-5 text-[var(--text-muted)]">
            A gentle introduction to self-awareness, not a medical diagnosis.
          </p>
        </div>
      </section>
    </div>
  );
}
