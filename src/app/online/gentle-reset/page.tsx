
import Link from "next/link";
import GentleResetHero from "@/components/online/gentle-reset/GentleResetHero";
import GentleResetDetails from "@/components/online/gentle-reset/GentleResetDetails";

const schedule = [
  {
    time: "After booking",
    title: "Questionnaire and welcome pack",
    description:
      "A short questionnaire and the dosha quiz, then your personal shopping list and a preparation video.",
  },
  {
    time: "Day 1",
    title: "Your consultation with Lakshani",
    description:
      "45 minutes by video: your constitution, your goals and small adjustments to your plan.",
  },
  {
    time: "Days 1–4",
    title: "A new video every morning",
    description:
      "8–12 minutes on the day's focus, your routine and what to cook, plus a tip for your dosha.",
  },
  {
    time: "Days 1–5",
    title: "Your 5-day food plan",
    description:
      "Simple warm meals with recipe cards. Day 5 eases you back into everyday food.",
  },
  {
    time: "Each evening",
    title: "10-minute wind-down",
    description:
      "Breathing or a short self-massage to end the day calmly.",
  },
  {
    time: "After",
    title: "Keep it going",
    description:
      "Your everyday tips sheet, and an invitation to continue with the Seasonal Reset or the membership.",
  },
];

const inclusions = [
  ["Personal consultation", "45 minutes by video with Lakshani"],
  ["4 daily videos", "The day's focus, routine and cooking"],
  ["5-day food plan", "For Vata, Pitta or Kapha"],
  ["Shopping list", "Everything you need, for your type"],
  ["Recipe cards", "12–15 simple Ayurvedic recipes"],
  ["Evening rituals", "Breathing and self-massage audio"],
  ["Everyday tips", "A sheet to keep the new habits"],
  ["4 weeks access", "Watch again whenever you like"],
];

const lessons = [
  ["Welcome: how your reset works", "5 min"],
  ["Preparing your kitchen and week", "6 min"],
  ["Your dosha in daily life", "6 min"],
  ["Day 1: arriving and slowing down", "10 min"],
  ["Day 2: warm food and steady energy", "9 min"],
  ["Day 3: lightness and digestion-friendly meals", "9 min"],
  ["Day 4: rest and reflection", "8 min"],
  ["Evening ritual: oil self-massage", "10 min"],
  ["Back to everyday life", "6 min"],
];

const faqs = [
  {
    question: "How much time do I need each day?",
    answer:
      "About 30–45 minutes plus cooking. Most people do it alongside work.",
  },
  {
    question: "Do I have to fast?",
    answer: "No. You eat three warm, simple meals a day.",
  },
  {
    question: "What if I have allergies or take medication?",
    answer:
      "Tell us in the questionnaire. Lakshani adjusts your plan in the consultation. If you have a medical condition, check with your doctor first.",
  },
  {
    question: "When can I start?",
    answer:
      "Whenever you like. Book, fill in the questionnaire, and choose a date for your consultation.",
  },
  {
    question: "Do members get a discount?",
    answer: "Yes: 5% with Membership, 10% with Premium.",
  },
];

function CheckIcon() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z" />
      <path d="M4 21c3-6 7-9 12-12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function GentleResetPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      <GentleResetHero />
      <GentleResetDetails />

      {/* Programme journey */}
      <section className="relative isolate overflow-hidden bg-[#f5f0e7]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#D8D0A9]/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-28 h-[340px] w-[340px] rounded-full border border-[#D8D0A9]/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#DFC24D]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                  Your journey
                </span>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl lg:text-6xl">
                A little more balance,
                <span className="mt-2 block italic text-[#9A7821]">
                  one day at a time.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
                A gentle structure to guide you through each day, from
                preparing at home to bringing your new habits into everyday
                life.
              </p>
            </div>

            <div className="border-l-2 border-[#DFC24D] py-2 pl-6">
              <p className="font-serif text-2xl italic leading-snug text-[#533E23]">
                Your pace.
                <br />
                Your routine.
                <br />
                Your reset.
              </p>
              <p className="mt-3 text-xs leading-6 text-[#6B705C]">
                Thoughtfully guided, without needing to step away from
                everyday life.
              </p>
            </div>
          </div>

          {/* Journey timeline */}
          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#D8D0A9]/80 bg-[#FBF9F1] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#533E23]/10 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#D8D0A9] transition-colors group-hover:text-[#DFC24D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-[#EFE9C5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#533E23]">
                    {item.time}
                  </span>
                </div>

                <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8E8D7] text-[#2F5D39]">
                  <LeafIcon />
                </div>

                <h3 className="mt-5 font-serif text-2xl leading-snug text-[#21452B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                  {item.description}
                </p>

                <div className="mt-6 h-px bg-[#D8D0A9]/70 transition-colors group-hover:bg-[#DFC24D]" />
                <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A7821]">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Included materials */}
      <section className="relative overflow-hidden bg-[#EFE9D9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                Thoughtfully prepared
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Everything you need
              <span className="mt-2 block italic text-[#9A7821]">
                to begin.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              Practical guidance, recipes and daily resources to help
              you follow your reset with confidence.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {inclusions.map(([title, description], index) => (
                <article
                  key={title}
                  className="group flex gap-3 rounded-[20px] border border-[#D8D0A9]/70 bg-[#FBF9F1] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFC24D] hover:shadow-md"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23]">
                Inside your programme
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Your lesson library
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Short, practical lessons designed to fit into your day
              and make each step feel manageable.
            </p>

            <div className="mt-9 overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#FBF9F1] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A7821]">
                    Learning at your pace
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#21452B]">
                    9 guided lessons
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE9C5] text-[#2F5D39]">
                  <LeafIcon />
                </span>
              </div>

              {lessons.map(([title, duration], index) => (
                <div
                  key={title}
                  className={`group flex items-center gap-3 py-4 ${
                    index !== lessons.length - 1
                      ? "border-b border-[#D8D0A9]/70"
                      : ""
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xs font-semibold text-[#2F5D39] transition-colors group-hover:bg-[#EFE9C5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm leading-6 text-[#405640]">
                    {title}
                  </span>

                  <span className="shrink-0 rounded-full bg-[#EFE9C5] px-2.5 py-1.5 text-[10px] font-semibold text-[#52665C]">
                    {duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8D0A9] bg-white/55 p-4">
              <span className="text-lg text-[#9A7821]" aria-hidden="true">
                ✦
              </span>
              <p className="text-xs leading-6 text-[#6B705C]">
                Lessons unlock day by day after booking. Your food plan
                and tips are tailored to your constitution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your guide */}
      <section className="bg-[#f5f0e7] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#DFC24D]/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#DFC24D]/20"
            />

            <div className="relative grid items-center gap-9 sm:grid-cols-[180px_1fr] sm:gap-12 lg:grid-cols-[220px_1fr]">
              <div className="flex justify-center sm:justify-start">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#2F5D39] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                  <div className="flex h-[calc(100%-16px)] w-[calc(100%-16px)] items-center justify-center rounded-full border border-white/20 text-center">
                    <span className="px-4 font-serif text-lg italic text-[#EFE9C5]">
                      Lakshani
                      <br />
                      Perera
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                  Your personal guide
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

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Personal guidance",
                    "German & English",
                    "Rooted in Sri Lankan Ayurveda",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participant feedback */}
      <section className="bg-[#f5f0e7]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A7821]">
                Shared experiences
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
                Voices from the journey
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C]">
              Every reset is personal. Hear how small changes can become
              meaningful everyday habits.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {[
              "Add a genuine testimonial from a participant after launch.",
              "Add a second genuine participant testimonial after launch.",
            ].map((quote, index) => (
              <blockquote
                key={index}
                className="relative overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#FBF9F1] p-7 sm:p-9"
              >
                <span
                  className="absolute right-6 top-0 font-serif text-8xl leading-none text-[#DFC24D]/40"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="relative mt-5 max-w-lg font-serif text-xl leading-relaxed text-[#405640]">
                  {quote}
                </p>
                <div className="mt-7 h-px bg-[#D8D0A9]" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A7821]">
                  Participant feedback
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#EFE9D9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
        />

        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A7821]">
              A little clarity
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C]">
              A few helpful answers before you begin your Gentle Reset.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#D8D0A9]/80 bg-[#FBF9F1] p-5 transition-colors open:border-[#DFC24D] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold text-[#21452B] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[10px] font-semibold text-[#533E23]">
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

      {/* Final CTA */}
      <section className="bg-[#f5f0e7] px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#DFC24D]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#DFC24D]/20"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Your next step
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Make space for yourself.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Four days of mindful routines, personal guidance and
                simple Ayurvedic practices to bring into your everyday
                life.
              </p>

              <p className="mt-5 font-serif text-2xl text-[#DFC24D]">
                Gentle Reset · €119
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#booking-form"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-8 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Book your reset
                <ArrowIcon />
              </a>

              <Link
                href="/#membership"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Explore membership savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </main>
  );
}
