
"use client";

import { useState } from "react";
import SeasonalResetHero from "@/components/online/seasonal-reset/SeasonalResetHero";
import SeasonalResetDetails from "@/components/online/seasonal-reset/SeasonalResetDetails";

const seasons = {
  Spring: {
    label: "SPRING EDITION · FROM MARCH",
    title: "Lightness and fresh beginnings",
    description: [
      "Fresh, lighter meals and gentle spices.",
      "Renewed energy and room for new habits.",
    ],
  },
  Summer: {
    label: "SUMMER EDITION · FROM JUNE",
    title: "Coolness and calm balance",
    description: [
      "Cooling foods and refreshing daily routines.",
      "More ease, rest and mindful movement.",
    ],
  },
  Autumn: {
    label: "AUTUMN EDITION · FROM SEPTEMBER",
    title: "Grounding and nourishment",
    description: [
      "Warm meals and grounding seasonal spices.",
      "Steady routines and calming evening rituals.",
    ],
  },
  Winter: {
    label: "WINTER EDITION · FROM DECEMBER",
    title: "Warmth and steady energy",
    description: [
      "Nourishing stews and warming spices.",
      "Longer rest and quiet reflection.",
    ],
  },
};

type Season = keyof typeof seasons;

const schedule = [
  {
    time: "Before",
    title: "Choose your season",
    description:
      "Season questionnaire and dosha quiz, then your shopping list for your type and the season.",
  },
  {
    time: "Day 1",
    title: "Opening consultation",
    description:
      "45 minutes by video with Lakshani, and the season’s welcome video.",
  },
  {
    time: "Days 1–2",
    title: "Preparation",
    description:
      "Lighter food and setting up your daily routine.",
  },
  {
    time: "Days 3–5",
    title: "Core reset",
    description:
      "The season’s food plan, a daily video and an evening ritual.",
  },
  {
    time: "Days 6–7",
    title: "Rebuild",
    description:
      "Back to everyday food with your new habits.",
  },
  {
    time: "All week",
    title: "Chat with Lakshani",
    description:
      "Ask questions in your guest portal whenever they come up.",
  },
  {
    time: "Day 7",
    title: "Closing consultation",
    description:
      "45 minutes to review your week, plus your personal plan for the next 4 weeks.",
  },
];

const inclusions = [
  ["2 consultations", "45 minutes each with Lakshani"],
  ["7 daily videos", "For your season"],
  ["Food plan for your type", "Vata, Pitta or Kapha, for the season"],
  ["Shopping list", "For your type and season"],
  ["15 seasonal recipes", "Simple and warming or cooling"],
  ["Rituals", "Morning and evening, for the season"],
  ["Chat with Lakshani", "All week, in your portal"],
  ["Next-4-weeks plan", "To keep your balance"],
];

const lessons = [
  ["Welcome to your season", "5 min"],
  ["Preparing for the week", "6 min"],
  ["Day 1–2: preparation", "9 min each"],
  ["Day 3–5: core reset", "10 min each"],
  ["Day 6–7: rebuild", "8 min each"],
  ["Seasonal ritual", "10 min"],
  ["Your tip for your dosha", "3 min"],
];

const faqs = [
  {
    question: "Which season can I book?",
    answer:
      "The current season’s edition opens a few weeks before the season starts. You can book each season separately.",
  },
  {
    question: "How much time do I need each day?",
    answer: "About 45–60 minutes plus cooking.",
  },
  {
    question: "Is chat by WhatsApp?",
    answer:
      "No, chat runs in your guest portal so your details stay private.",
  },
  {
    question: "Can I add more consultations?",
    answer:
      "Yes — the Deep Reset 7 days is this programme with 4 consultations, for €349.",
  },
  {
    question: "Do members get a discount?",
    answer: "Yes: 5% with Membership, 10% with Premium.",
  },
];

export default function SeasonalResetPage() {
  const [selectedSeason, setSelectedSeason] =
    useState<Season>("Winter");

  const currentSeason = seasons[selectedSeason];

  return (
    <main className="min-h-screen bg-[#F4EFE5] text-[#142F27]">
      {/* Main hero */}
      <SeasonalResetHero />

      {/* Who it is for and why it works */}
      <SeasonalResetDetails />

      {/* Choose your season */}
      <section className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Four editions
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Choose your season
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {(Object.keys(seasons) as Season[]).map((season) => (
              <button
                key={season}
                type="button"
                onClick={() => setSelectedSeason(season)}
                aria-pressed={selectedSeason === season}
                className={`rounded-full border px-5 py-3 text-sm transition ${
                  selectedSeason === season
                    ? "border-[#1D3B30] bg-[#1D3B30] font-semibold text-white"
                    : "border-[#DCCFB9] bg-white text-[#142F27] hover:border-[#1D3B30]"
                }`}
              >
                {season}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-5 rounded-2xl bg-[#1D3B30] p-7 text-white sm:grid-cols-2 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#E4AD3E]">
                {currentSeason.label}
              </p>

              <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                {currentSeason.title}
              </h3>
            </div>

            <div className="flex flex-col justify-center gap-3 text-sm leading-6 text-white/90">
              {currentSeason.description.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step schedule */}
      <section className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Step by step
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            How your reset runs
          </h2>

          <div className="mt-7 rounded-2xl bg-white px-5 sm:px-7">
            {schedule.map((item, index) => (
              <div
                key={item.time}
                className={`grid gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-6 ${
                  index !== schedule.length - 1
                    ? "border-b border-[#E5DCCB]"
                    : ""
                }`}
              >
                <p className="text-sm font-semibold text-[#9A6115]">
                  {item.time}
                </p>

                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#52665C]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything included and lessons */}
      <section className="bg-[#EAE1D1]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              What you get
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Everything included
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {inclusions.map(([title, description]) => (
                <article
                  key={title}
                  className="flex gap-3 rounded-2xl bg-white p-4"
                >
                  <span className="font-semibold text-[#1D3B30]">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>

                    <p className="mt-1 text-xs leading-5 text-[#52665C]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Inside the programme
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Your lessons
            </h2>

            <div className="mt-5 rounded-2xl bg-white px-5">
              {lessons.map(([title, duration], index) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 py-4 text-sm ${
                    index !== lessons.length - 1
                      ? "border-b border-[#E5DCCB]"
                      : ""
                  }`}
                >
                  <span
                    className="shrink-0 text-[#64746B]"
                    aria-hidden="true"
                  >
                    ♙
                  </span>

                  <span className="flex-1 leading-5">{title}</span>

                  <span className="shrink-0 text-xs text-[#52665C]">
                    {duration}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-[#52665C]">
              Lessons unlock day by day after booking. Your food plan and
              tips match your constitution.
            </p>
          </div>
        </div>
      </section>

      {/* Guide profile */}
      <section className="bg-[#F4EFE5]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:py-20">
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#CBD4C4] text-xs text-[#193B30]">
            [Photo Lakshani]
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Your guide
            </p>

            <h2 className="mt-3 font-serif text-3xl">
              Lakshani Perera
            </h2>

            <p className="mt-3 max-w-4xl text-sm leading-6 text-[#52665C]">
              Ayurveda-Gesundheitsberaterin and founder of Purana
              Ayurveda. Lakshani grew up with Ayurveda in her Sri Lankan
              family and guides every reset personally, in German or
              English.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 pb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Voices
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            What participants say
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <blockquote className="rounded-2xl bg-white p-6 text-sm leading-6 text-[#52665C]">
              [Testimonial from the first participants — add after launch]
            </blockquote>

            <blockquote className="rounded-2xl bg-white p-6 text-sm leading-6 text-[#52665C]">
              [Testimonial]
            </blockquote>
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Questions
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Frequently asked
          </h2>

          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#142F27]">
                  <span className="inline-block transition-transform group-open:rotate-90">
                    ▶
                  </span>

                  <span>{faq.question}</span>
                </summary>

                <p className="mt-3 pl-6 text-sm leading-6 text-[#52665C]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-[#64746B]">
            Our programmes support your wellbeing with Ayurvedic food,
            routines and self-care. They are not a medical treatment and
            do not replace a visit to your doctor.
          </p>
        </div>
      </section>

      {/* Final booking CTA */}
      <section
        id="booking"
        className="bg-[#F4EFE5] px-5 pb-16 sm:pb-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-[#1D3B30] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="font-serif text-3xl">Ready to start?</h2>

            <p className="mt-2 text-sm text-white/90">
              Seasonal Reset · €229
            </p>
          </div>

          <a
            href="#booking"
            className="rounded-full bg-[#E4AD3E] px-7 py-4 text-center text-sm font-semibold text-[#193B30] transition hover:bg-[#F2C76E]"
          >
            Book now
          </a>
        </div>
      </section>
    </main>
  );
}
