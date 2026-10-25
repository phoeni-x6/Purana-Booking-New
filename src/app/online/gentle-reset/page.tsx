
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

const CheckIcon = () => (
  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-sm font-bold text-[#2F5D39]">
    ✓
  </span>
);

export default function GentleResetPage() {
  return (
    <main className="min-h-screen bg-[#F8F5E8] text-[#263A2B]">
      <GentleResetHero />

      <GentleResetDetails />

      {/* Programme schedule */}
      <section className="relative overflow-hidden bg-[#F8F5E8]">
        <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border border-[#D8D0A9]/50" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6115]">
              Your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              How your reset unfolds
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
              A gentle structure to guide you through each day, from
              preparing at home to bringing your new habits into everyday
              life.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {schedule.map((item, index) => (
              <article
                key={item.title}
                className="group flex gap-5 rounded-[24px] border border-[#D8D0A9]/70 bg-white/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-lg hover:shadow-[#21452B]/5 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#21452B] font-serif text-lg text-[#DFC24D] transition-colors group-hover:bg-[#2F5D39]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#9A6115]">
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

      {/* Programme inclusions and lesson library */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          {/* Included materials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6115]">
              Thoughtfully prepared
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Everything you need
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Practical guidance, recipes and daily resources to help
              you follow your reset with confidence.
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6115]">
              Inside your programme
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Your lesson library
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6B705C]">
              Short, practical lessons designed to fit into your day
              and make each step feel manageable.
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

      {/* Meet your guide */}
      <section className="bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative overflow-hidden rounded-[28px] bg-[#21452B] p-7 text-[#F8F5E8] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#DFC24D]/20" />

            <div className="relative grid items-center gap-8 sm:grid-cols-[180px_1fr] sm:gap-10 lg:grid-cols-[220px_1fr]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#2F5D39] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                <div className="flex h-[calc(100%-16px)] w-[calc(100%-16px)] items-center justify-center rounded-full border border-white/20 text-center">
                  <span className="px-4 text-xs leading-5 text-[#EFE9C5]">
                    Lakshani&apos;s
                    <br />
                    portrait
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
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

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    Personal guidance
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    German & English
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                    Rooted in Sri Lankan Ayurveda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participant feedback */}
      <section className="bg-[#F8F5E8]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6115]">
                Shared experiences
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
                Voices from the journey
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C]">
              Every reset is personal. Real participant feedback can
              help future guests understand the experience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <blockquote className="rounded-[24px] border border-[#D8D0A9]/70 bg-white p-7 sm:p-8">
              <span className="font-serif text-4xl text-[#DFC24D]" aria-hidden="true">
                “
              </span>
              <p className="mt-2 text-sm leading-7 text-[#6B705C]">
                [Add a genuine testimonial from a participant after
                launch.]
              </p>
              <div className="mt-6 h-px bg-[#D8D0A9]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#21452B]">
                Participant feedback
              </p>
            </blockquote>

            <blockquote className="rounded-[24px] border border-[#D8D0A9]/70 bg-white p-7 sm:p-8">
              <span className="font-serif text-4xl text-[#DFC24D]" aria-hidden="true">
                “
              </span>
              <p className="mt-2 text-sm leading-7 text-[#6B705C]">
                [Add a second genuine participant testimonial after
                launch.]
              </p>
              <div className="mt-6 h-px bg-[#D8D0A9]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#21452B]">
                Participant feedback
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="bg-[#EFE9D9]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6115]">
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

      {/* Final booking call to action */}
      <section id="booking" className="bg-[#F8F5E8] px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#21452B] px-7 py-10 text-[#F8F5E8] sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#DFC24D]/20" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#DFC24D]/20" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
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
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-8 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Book your reset
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/#membership"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Explore membership savings
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
