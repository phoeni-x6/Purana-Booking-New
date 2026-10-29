
"use client";

import { useEffect, useState } from "react";

type TreatmentCardProps = {
  name: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  bookingUrl?: string;
};

export default function TreatmentCard({
  name,
  category,
  duration,
  price,
  image,
  description,
  bookingUrl = "#contact",
}: TreatmentCardProps) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    if (!isInfoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsInfoOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isInfoOpen]);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--forest-dark)]/[0.07]">
        {/* Treatment image */}
        <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-dark)]">
          <img
            src={image}
            alt={`${name} Ayurvedic treatment`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[var(--surface)]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--forest-dark)]">
            {category}
          </span>

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--forest-dark)]/35 to-transparent" />
        </div>

        {/* Treatment details */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-[var(--font-heading)] text-xl leading-snug text-[var(--forest-dark)] sm:text-2xl">
            {name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">
            {description}
          </p>

          {/* Duration and price */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Duration
              </p>
              <p className="mt-1 text-sm text-[var(--text)]">{duration}</p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                From
              </p>
              <p className="mt-1 font-[var(--font-heading)] text-2xl text-[var(--forest-dark)]">
                {price}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsInfoOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--forest)] px-3 py-3 text-sm font-semibold text-[var(--forest)] transition-colors duration-300 hover:bg-[var(--surface-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
            >
              View info
              <span aria-hidden="true">ⓘ</span>
            </button>

            <a
              href={bookingUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--forest-dark)] px-3 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--forest)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
            >
              Book online
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>

      {/* Treatment information modal */}
      {isInfoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[var(--forest-dark)]/75 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsInfoOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
          >
            {/* Modal image */}
            <div className="relative aspect-[16/7] overflow-hidden bg-[var(--surface-dark)]">
              <img
                src={image}
                alt={`${name} Ayurvedic treatment`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/65 to-transparent" />

              <span className="absolute bottom-5 left-6 rounded-full border border-white/40 bg-[var(--forest-dark)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--cream)] backdrop-blur-sm">
                {category}
              </span>

              <button
                type="button"
                onClick={() => setIsInfoOpen(false)}
                aria-label="Close treatment information"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-[var(--forest-dark)]/70 text-xl text-white transition hover:bg-[var(--forest)]"
              >
                ×
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brown)]">
                Discover the treatment
              </p>

              <h2
                id="treatment-modal-title"
                className="mt-3 font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--forest-dark)] sm:text-4xl"
              >
                {name}
              </h2>

              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                {description}
              </p>

              {/* Treatment summary */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--cream)] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Duration
                  </p>
                  <p className="mt-2 font-[var(--font-heading)] text-xl text-[var(--forest-dark)]">
                    {duration}
                  </p>
                </div>

                <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--cream)] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Price
                  </p>
                  <p className="mt-2 font-[var(--font-heading)] text-xl text-[var(--forest-dark)]">
                    {price}
                  </p>
                </div>
              </div>

              {/* Modal actions */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--forest-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--forest)] hover:text-white"
                >
                  Book this treatment
                  <span aria-hidden="true">→</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsInfoOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--forest-dark)] transition hover:bg-[var(--surface-dark)]"
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
