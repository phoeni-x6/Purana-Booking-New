
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TreatmentCardProps = {
  name: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  description: string;
};

export default function TreatmentCard({
  name,
  category,
  duration,
  price,
  image,
  description,
}: TreatmentCardProps) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const bookingUrl = `/booking?${new URLSearchParams({
    service: name,
    category,
    duration,
    price,
    type: "treatment",
  }).toString()}`;

  useEffect(() => {
    if (!isInfoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsInfoOpen(false);
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
      <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#21452B]/10">

        <div className="relative aspect-[5/4] overflow-hidden bg-[#EFE9C5]">
          <img
            src={image}
            alt={`${name} Ayurvedic treatment`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#F8F5E8]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#21452B]">
            {category}
          </span>

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#21452B]/35 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-[var(--font-heading)] text-xl leading-snug text-[#21452B] sm:text-2xl">
            {name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-[#6B705C]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#D8D0A9] pt-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#6B705C]">
                Duration
              </p>
              <p className="mt-1 text-sm text-[#263A2B]">{duration}</p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#6B705C]">
                From
              </p>
              <p className="mt-1 font-[var(--font-heading)] text-2xl text-[#21452B]">
                {price}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsInfoOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#2F5D39] px-3 py-3 text-sm font-semibold text-[#2F5D39] transition hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC24D]"
            >
              View info <span aria-hidden="true">ⓘ</span>
            </button>

            <Link
              href={bookingUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#21452B] px-3 py-3 text-sm font-semibold text-white transition hover:bg-[#2F5D39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC24D]"
            >
              Book online <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>

      {isInfoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#21452B]/75 p-4 backdrop-blur-sm sm:p-6"
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
            className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-2xl"
          >
            <div className="relative aspect-[16/7] overflow-hidden bg-[#EFE9C5]">
              <img
                src={image}
                alt={`${name} Ayurvedic treatment`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/65 to-transparent" />

              <span className="absolute bottom-5 left-6 rounded-full border border-white/40 bg-[#21452B]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EFE9C5] backdrop-blur-sm">
                {category}
              </span>

              <button
                type="button"
                onClick={() => setIsInfoOpen(false)}
                aria-label="Close treatment information"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-[#21452B]/70 text-xl text-white transition hover:bg-[#2F5D39]"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                Discover the treatment
              </p>

              <h2
                id="treatment-modal-title"
                className="mt-3 font-[var(--font-heading)] text-3xl font-normal leading-tight text-[#21452B] sm:text-4xl"
              >
                {name}
              </h2>

              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[#6B705C] sm:text-base">
                {description}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6B705C]">
                    Duration
                  </p>
                  <p className="mt-2 font-[var(--font-heading)] text-xl text-[#21452B]">
                    {duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6B705C]">
                    Price
                  </p>
                  <p className="mt-2 font-[var(--font-heading)] text-xl text-[#21452B]">
                    {price}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={bookingUrl}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#C14C38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A83F30]"
                >
                  Book this treatment <span aria-hidden="true">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsInfoOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D8D0A9] px-6 py-3 text-sm font-semibold text-[#21452B] transition hover:bg-[#EFE9C5]"
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
