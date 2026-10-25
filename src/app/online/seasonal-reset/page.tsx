
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
    symbol: "✿",
    accent: "#C14C38",
  },
  Summer: {
    label: "SUMMER EDITION · FROM JUNE",
    title: "Coolness and calm balance",
    description: [
      "Cooling foods and refreshing daily routines.",
      "More ease, rest and mindful movement.",
    ],
    symbol: "☼",
    accent: "#DFC24D",
  },
  Autumn: {
    label: "AUTUMN EDITION · FROM SEPTEMBER",
    title: "Grounding and nourishment",
    description: [
      "Warm meals and grounding seasonal spices.",
      "Steady routines and calming evening rituals.",
    ],
    symbol: "❋",
    accent: "#C14C38",
  },
  Winter: {
    label: "WINTER EDITION · FROM DECEMBER",
    title: "Warmth and steady energy",
    description: [
      "Nourishing stews and warming spices.",
      "Longer rest and quiet reflection.",
    ],
    symbol: "✳",
    accent: "#DFC24D",
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
    description: "Lighter food and setting up your daily routine.",
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
    description: "Back to everyday food with your new habits.",
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
        {children}
      </p>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-sm font-bold text-[#2F5D39]">
      ✓
    </span>
  );
}

export default function SeasonalResetPage() {
  const [selectedSeason, setSelectedSeason] = useState<Season>("Winter");

  const currentSeason = seasons[selectedSeason];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* Main hero */}
      <SeasonalResetHero />

      {/* Who it is for and why it works */}
      <SeasonalResetDetails />

      {/* Choose your season */}
      <section id="season-editions" className="relative overflow-hidden bg-[#EFE9D9]">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#D8D0A9]/60" />
        <div className="pointer-events-none absolute -right-20 top-20 h-56 w-56 rounded-full border border-[#D8D0A9]/50" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Four seasonal editions</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Choose your season
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Every season brings a different rhythm. Explore the edition
              that speaks to your needs and discover its focus.
            </p>
          </div>

          {/* Season selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {(Object.keys(seasons) as Season[]).map((season) => {
              const isSelected = selectedSeason === season;

              return (
                <button
                  key={season}
                  type="button"
                  onClick={() => setSelectedSeason(season)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-6 py-3 text-sm font-medium transition duration-300 ${
                    isSelected
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8] shadow-lg shadow-[#21452B]/10"
                      : "border-[#D8D0A9] bg-[#F8F5E8] text-[#52665C] hover:border-[#2F5D39] hover:text-[#21452B]"
                  }`}
                >
                  {season}
                </button>
              );
            })}
          </div>

          {/* Selected edition panel */}
          <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#21452B] text-[#F8F5E8] shadow-xl shadow-[#21452B]/10">
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#DFC24D]/20" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-44 w-44 rounded-full border border-[#DFC24D]/20" />

            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:p-12">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#DFC24D]/35 bg-white/[0.05] font-serif text-3xl text-[#DFC24D]">
                  {currentSeason.symbol}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
                  {currentSeason.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  {currentSeason.title}
                </h3>
              </div>

              <div>
                <p className="mb-5 text-sm leading-7 text-white/70">
                  This edition focuses on seasonal food, supportive
                  routines and simple rituals you can bring into daily life.
                </p>

                <div className="space-y-3">
                  {currentSeason.description.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/15 text-sm text-[#DFC24D]">
                        ✓
                      </span>
                      <p className="text-sm leading-6 text-white/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3.5 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
                >
                  Explore the programme
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-[#6B705C]">
            Seasonal availability and start dates should be confirmed when booking.
          </p>
        </div>
      </section>

      {/* Step-by-step schedule */}
      <section className="relative bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <SectionEyebrow>Your journey</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              How your reset unfolds
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C] sm:text-base">
              From your first questionnaire to your closing consultation,
              each step is designed to help you follow the programme with
              confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {schedule.map((item, index) => (
              <article
                key={`${item.time}-${item.title}`}
                className="group flex gap-5 rounded-[24px] border border-[#D8D0A9]/70 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-lg hover:shadow-[#21452B]/5 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#21452B] font-serif text-lg text-[#DFC24D] transition-colors group-hover:bg-[#2F5D39]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A6115]">
                    {item.time}
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-[#21452B] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Everything included and lessons */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          {/* Inclusions */}
          <div>
            <SectionEyebrow>Thoughtfully prepared</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Everything included
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Personal guidance and practical resources to support your
              seasonal reset from beginning to end.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {inclusions.map(([title, description]) => (
                <article
                  key={title}
                  className="flex gap-3 rounded-[20px] border border-[#D8D0A9]/60 bg-[#F8F5E8] p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#21452B]/5"
                >
                  <CheckIcon />

                  <div>
                    <h3 className="text-sm font-semibold text-[#21452B]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-6 text-[#6B705C]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Lesson library */}
          <div>
            <SectionEyebrow>Inside the programme</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Your lesson library
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Short lessons and seasonal practices to help you build a
              routine that feels manageable.
            </p>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-[#D8D0A9]/70 bg-[#F8F5E8] px-5 sm:px-6">
              {lessons.map(([title, duration], index) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 py-4 ${
                    index !== lessons.length - 1
                      ? "border-b border-[#D8D0A9]/70"
                      : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xs font-semibold text-[#2F5D39]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="flex-1 text-sm leading-6 text-[#263A2B]">
                    {title}
                  </span>

                  <span className="shrink-0 rounded-full bg-[#EFE9C5] px-2.5 py-1.5 text-xs font-medium text-[#52665C]">
                    {duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8D0A9]/70 bg-white/60 p-4">
              <span className="text-lg text-[#9A6115]" aria-hidden="true">
                ✧
              </span>

              <p className="text-xs leading-6 text-[#6B705C]">
                Lessons unlock day by day after booking. Your food plan
                and tips are tailored to your constitution and season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide profile */}
      <section className="bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative overflow-hidden rounded-[28px] bg-[#21452B] p-7 text-[#F8F5E8] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#DFC24D]/20" />

            <div className="relative grid items-center gap-8 sm:grid-cols-[180px_1fr] sm:gap-10 lg:grid-cols-[220px_1fr]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#2F5D39] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                <div className="flex h-[calc(100%-16px)] w-[calc(100%-16px)] items-center justify-center rounded-full border border-white/20 px-5 text-center text-xs leading-5 text-[#EFE9C5]">
                  Lakshani&apos;s portrait
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                  Your guide
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  Meet Lakshani Perera
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                  Ayurveda-Gesundheitsberaterin and founder of Purana
                  Ayurveda. Lakshani grew up with Ayurveda in her Sri
                  Lankan family and guides every reset personally, in
                  German or English.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    Personal guidance
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    German &amp; English
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    Sri Lankan Ayurveda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Shared experiences</SectionEyebrow>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
                Voices from the journey
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C]">
              Real participant experiences can help future guests
              understand what to expect from their seasonal reset.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "[Add a genuine testimonial from a participant after launch.]",
              "[Add a second genuine participant testimonial after launch.]",
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="rounded-[24px] border border-[#D8D0A9]/70 bg-white p-7 sm:p-8"
              >
                <span
                  className="font-serif text-4xl text-[#DFC24D]"
                  aria-hidden="true"
                >
                  “
                </span>

                <p className="mt-2 text-sm leading-7 text-[#6B705C]">
                  {testimonial}
                </p>

                <div className="mt-6 h-px bg-[#D8D0A9]" />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#21452B]">
                  Participant feedback
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <SectionEyebrow>Good to know</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              Helpful answers to make choosing your seasonal programme easier.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#D8D0A9]/70 bg-[#F8F5E8] p-5 transition-colors open:border-[#DFC24D] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold text-[#21452B] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8E8D7] text-xs text-[#2F5D39]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8D0A9] text-lg font-normal text-[#2F5D39] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="ml-[52px] mt-4 max-w-2xl text-sm leading-7 text-[#6B705C]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-[#6B705C]">
            Our programmes support your wellbeing with Ayurvedic food,
            routines and self-care. They are not a medical treatment and
            do not replace advice or treatment from your healthcare
            professional.
          </p>
        </div>
      </section>

      {/* Final booking CTA */}
      <section
        id="booking"
        className="bg-[#F8F5E8] px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#DFC24D]/20" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Your next step
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Find your seasonal balance.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Seven days of seasonal guidance, personal consultations
                and practical routines to carry into everyday life.
              </p>

              <p className="mt-5 font-serif text-2xl text-[#DFC24D]">
                Seasonal Reset · €229
              </p>

              <p className="mt-2 text-xs leading-6 text-white/65">
                Membership discount: 5% off with Membership and 10% off
                with Premium.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-8 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Book your reset
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/#membership"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Explore membership
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
