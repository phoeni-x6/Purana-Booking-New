
"use client";

import { useState } from "react";

const categories = [
  "All",
  "Basics",
  "Daily routine",
  "Seasons",
  "Recipes",
  "Self-care",
  "Sri Lanka",
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="blog" className="bg-[#F4EFE5] text-[#142F27]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Blog
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Read, cook and try at home
        </h2>

        {/* Category filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2.5 text-xs transition ${
                activeCategory === category
                  ? "border-[#1D3B30] bg-[#1D3B30] text-white"
                  : "border-[#DED3C0] bg-white text-[#142F27] hover:border-[#1D3B30]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* One UI-only article card */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex aspect-[4/3] items-center justify-center bg-[#D9CEB8] text-xs text-[#52665C]">
              [Image]
            </div>

            <div className="p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#9A6115]">
                DAILY ROUTINE · 4 MIN READ
              </p>

              <h3 className="mt-2 text-base font-semibold leading-snug">
                A 10-minute Ayurvedic morning routine
              </h3>

              <p className="mt-3 text-xs leading-5 text-[#52665C]">
                Warm water, tongue scraping and a few breaths to start the day.
              </p>
            </div>
          </article>
        </div>

        {/* Membership banner */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#EAE1D1] p-6 sm:flex-row sm:items-center">
          <p className="text-sm leading-6">
            Members find the full guides, videos and 40+ recipes in the content
            library.
          </p>

          <a
            href="/membership"
            className="shrink-0 rounded-full bg-[#1D3B30] px-5 py-3 text-center text-xs font-semibold text-white hover:bg-[#2D5142]"
          >
            See membership
          </a>
        </div>
      </div>
    </section>
  );
}
