
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

export default function GentleResetPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE5] text-[#142F27]">
      <GentleResetHero />

      <GentleResetDetails />

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

      {/* Included materials and lessons */}
      <section className="bg-[#EAE1D1]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2">
          {/* Everything included */}
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

          {/* Lessons */}
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

      {/* Final booking call-to-action */}
      <section
        id="booking"
        className="bg-[#F4EFE5] px-5 pb-16 sm:pb-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-[#1D3B30] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="font-serif text-3xl">Ready to start?</h2>

            <p className="mt-2 text-sm text-white/90">
              Gentle Reset · €119
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
