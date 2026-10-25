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

const articles = [
  {
    category: "Daily routine",
    readTime: "4 MIN READ",
    title: "A 10-minute Ayurvedic morning routine",
    description:
      "Warm water, tongue scraping and a few breaths to start the day.",
    image: "/images/blog/morning-routine.jpg",
    number: "01",
  },
  {
    category: "Basics",
    readTime: "6 MIN READ",
    title: "Understanding your Ayurvedic constitution",
    description:
      "Discover the basics of Vata, Pitta and Kapha and how they relate to daily habits.",
    image: "/images/blog/ayurveda-basics.jpg",
    number: "02",
  },
  {
    category: "Recipes",
    readTime: "5 MIN READ",
    title: "A warming bowl for a calmer day",
    description:
      "Explore a simple, comforting meal inspired by traditional Ayurvedic food principles.",
    image: "/images/blog/ayurvedic-recipes.jpg",
    number: "03",
  },
  {
    category: "Seasons",
    readTime: "5 MIN READ",
    title: "Living in rhythm with the seasons",
    description:
      "Small adjustments to food, routines and self-care as the weather changes.",
    image: "/images/blog/seasonal-living.jpg",
    number: "04",
  },
  {
    category: "Self-care",
    readTime: "4 MIN READ",
    title: "Make time for a simple self-care ritual",
    description:
      "Create a little space in your day for rest, mindful breathing and gentle care.",
    image: "/images/blog/self-care.jpg",
    number: "05",
  },
  {
    category: "Sri Lanka",
    readTime: "7 MIN READ",
    title: "Ayurveda and its Sri Lankan roots",
    description:
      "An introduction to the traditions and everyday practices that inspire our approach.",
    image: "/images/blog/sri-lankan-ayurveda.jpg",
    number: "06",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-36 h-48 w-48 rounded-full border border-[#D8D0A9]/40"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9A6B25]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#80601E]">
                The Purana journal
              </p>
            </div>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Read, cook and try
              <span className="block text-[#9A6B25]">at home.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Discover simple Ayurvedic ideas, nourishing recipes and
              everyday rituals to bring a little more balance into your life.
            </p>
          </div>

          <a
            href="/blog"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#D8D0A9] px-5 py-3.5 text-sm font-semibold text-[#21452B] transition-colors hover:border-[#2F5D39] hover:bg-white"
          >
            Explore the journal
            <ArrowIcon />
          </a>
        </div>

        {/* Category filters */}
        <div className="mt-10 border-y border-[#DED8C3] py-5">
          <div
            className="flex flex-wrap gap-2"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "border-[#21452B] bg-[#21452B] text-white shadow-sm"
                      : "border-[#D8D0A9] bg-white/70 text-[#52634F] hover:border-[#2F5D39] hover:bg-white hover:text-[#21452B]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Article count */}
        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-xs text-[#7A806C]" aria-live="polite">
            Showing {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A6B25]">
            Ideas for everyday living
          </span>
        </div>

        {/* Article cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.number}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E5DFC9] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C7CFB8] hover:shadow-xl hover:shadow-[#21452B]/[0.07]"
            >
              {/* Article image */}
              <a
                href={`/blog/${article.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
                aria-label={`Read ${article.title}`}
                className="relative block overflow-hidden bg-[#EAE5D5]"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#F8F5E8]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#21452B]">
                  {article.category}
                </span>

                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5E8] text-sm text-[#21452B] transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>

              {/* Article content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#8A8A70]">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#B8AA81]" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="mt-4 font-serif text-xl leading-snug text-[#21452B] sm:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#6B705C]">
                  {article.description}
                </p>

                <a
                  href={`/blog/${article.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className="group/link mt-6 inline-flex items-center gap-2 border-t border-[#EAE5D5] pt-4 text-xs font-semibold text-[#2F5D39] transition-colors hover:text-[#9A6B25]"
                >
                  Read article
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Membership banner */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[#21452B] p-6 text-white sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-8 h-40 w-40 rounded-full border border-[#DFC24D]/20"
          />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                A little more for members
              </p>

              <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                Go deeper with your Ayurveda practice.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Members can explore the full guides, videos and 40+ recipes
                in the content library.
              </p>
            </div>

            <a
              href="/membership"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-all hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
            >
              Discover membership
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
