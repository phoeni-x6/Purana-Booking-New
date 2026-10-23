import DeepResetHero from "@/components/online/deep-reset/DeepResetHero";
import DeepResetDetails from "@/components/online/deep-reset/DeepResetDetails";

const programmes = [
  {
    duration: "4 DAYS · 1 CONSULTATION",
    title: "Gentle Reset",
    description:
      "Improve your day-to-day Ayurveda practice — ideal for your first reset.",
    features: [
      "1 personal consultation with Lakshani",
      "Guided programme with videos and texts",
      "5-day food plan",
      "Simple everyday Ayurveda tips",
    ],
    price: "€119",
    featured: false,
    href: "/online/gentle-reset",
  },
  {
    duration: "7 DAYS · 2 CONSULTATIONS",
    title: "Seasonal Reset",
    description:
      "Rebalance with Ayurveda and adapt your lifestyle to the season. A dedicated package for every season — unlock each one when you're ready.",
    features: [
      "Consultation at the start and at the end",
      "7-day Ayurveda rebalance programme",
      "Lifestyle adaptation for balance",
      "Chat with Lakshani included",
    ],
    price: "€229",
    featured: true,
    href: "/online/seasonal-reset",
  },
];

const ebooks = [
  {
    title: "Ayurveda Basic Detox at Home",
    description: "The 3-phase home reset, shopping list and 10 recipes.",
  },
  {
    title: "Ayurveda for Spring",
    description: "Lightness and a fresh start: routine, food and rituals.",
  },
  {
    title: "Ayurveda for Summer",
    description: "Stay cool and calm: cooling food and evening rituals.",
  },
  {
    title: "Ayurveda for Autumn",
    description: "Grounding and routine: warm meals and oil massage.",
  },
  {
    title: "Ayurveda for Winter",
    description: "Warmth and steady energy through the dark months.",
  },
];

const steps = [
  {
    number: "01",
    title: "Book online",
    description: "Choose a consultation or programme and pay securely.",
  },
  {
    number: "02",
    title: "Fill in your form",
    description: "Complete a short health questionnaire before your first call.",
  },
  {
    number: "03",
    title: "Meet your expert",
    description: "Your consultation takes place by video call.",
  },
  {
    number: "04",
    title: "Follow at home",
    description: "Access your videos, texts and food plan in your guest portal.",
  },
];

export default function DeepResetPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE5] text-[#142F27]">
      {/* Main hero */}
      <DeepResetHero />

      {/* Online consultation cards */}
      <DeepResetDetails />

      {/* Guided detox programmes */}
      <section id="programmes" className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Ayurveda reset at home
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Guided detox programmes
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#52665C]">
            Personally guided by Lakshani, in German or English. Daily rituals,
            nourishing food and gentle self-care, at your own pace — step by
            step.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className={`flex flex-col rounded-3xl p-6 sm:p-8 ${
                  programme.featured
                    ? "bg-[#1D3B30] text-white"
                    : "bg-white text-[#142F27]"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.16em] ${
                    programme.featured
                      ? "text-[#E4AD3E]"
                      : "text-[#64746B]"
                  }`}
                >
                  {programme.duration}
                </p>

                <h3 className="mt-5 font-serif text-2xl">
                  {programme.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    programme.featured
                      ? "text-white/85"
                      : "text-[#52665C]"
                  }`}
                >
                  {programme.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-5">
                      <span
                        className={
                          programme.featured
                            ? "text-[#E4AD3E]"
                            : "text-[#1D3B30]"
                        }
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {programme.featured && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
                      <span
                        key={season}
                        className="rounded-full border border-white/40 px-3 py-2 text-xs"
                      >
                        {season}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-serif text-3xl">
                      {programme.price}
                    </span>

                    <a
                      href={programme.href}
                      className={`rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                        programme.featured
                          ? "bg-[#E4AD3E] text-[#142F27] hover:bg-[#F2C76E]"
                          : "border border-[#1D3B30] hover:bg-[#F4EFE5]"
                      }`}
                    >
                      Book package
                    </a>
                  </div>

                  <a
                    href={programme.href}
                    className={`mt-6 block text-center text-sm underline underline-offset-4 ${
                      programme.featured
                        ? "text-white"
                        : "text-[#142F27]"
                    }`}
                  >
                    More information
                  </a>
                </div>
              </article>
            ))}

            {/* Deep Reset card */}
            <article className="flex flex-col rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#64746B]">
                1:1 GUIDANCE · 2 OPTIONS
              </p>

              <h3 className="mt-5 font-serif text-2xl">Deep Reset</h3>

              <p className="mt-4 text-sm leading-6 text-[#52665C]">
                The Gentle or Seasonal Reset with more one-to-one time:
                Lakshani adapts your plan to you as you go.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-[#E5DCCB] p-4">
                  <h4 className="text-sm font-semibold">4 days</h4>
                  <p className="mt-2 text-xs leading-5 text-[#52665C]">
                    Gentle Reset + 3 one-to-one consultations
                  </p>
                  <p className="mt-3 font-serif text-2xl">€259</p>
                </div>

                <div className="rounded-2xl border border-[#E5DCCB] p-4">
                  <h4 className="text-sm font-semibold">7 days</h4>
                  <p className="mt-2 text-xs leading-5 text-[#52665C]">
                    Seasonal Reset + 4 one-to-one consultations
                  </p>
                  <p className="mt-3 font-serif text-2xl">€349</p>
                </div>
              </div>

              <a
                href="/online/deep-reset"
                className="mt-6 block rounded-full border border-[#1D3B30] px-5 py-3 text-center text-sm font-semibold transition hover:bg-[#F4EFE5]"
              >
                Choose your Deep Reset
              </a>

              <a
                href="/online/deep-reset"
                className="mt-6 block text-center text-sm underline underline-offset-4"
              >
                More information
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* E-books */}
      <section id="ebooks" className="bg-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
                E-books
              </p>

              <h2 className="mt-3 max-w-2xl font-serif text-3xl sm:text-4xl">
                Ayurveda through the year, to read at home
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#52665C]">
                Practical guides with routines, food lists for each dosha and
                recipes — download instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 rounded-2xl bg-[#1D3B30] p-5 text-white">
              <div>
                <p className="text-sm font-semibold">All 5 as a bundle</p>
                <p className="mt-1 text-xs text-white/80">
                  + printable year planner
                </p>
              </div>

              <span className="font-serif text-2xl">€49</span>

              <a
                href="#booking"
                className="rounded-full bg-[#E4AD3E] px-5 py-3 text-sm font-semibold text-[#142F27] hover:bg-[#F2C76E]"
              >
                Buy bundle
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {ebooks.map((ebook) => (
              <article
                key={ebook.title}
                className="flex flex-col rounded-2xl bg-white p-4"
              >
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-[#EAE1D1] text-xs text-[#52665C]">
                  [Cover]
                </div>

                <h3 className="mt-3 text-sm font-semibold">{ebook.title}</h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-[#52665C]">
                  {ebook.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">€14.90</span>

                  <a
                    href="#booking"
                    className="text-xs font-semibold underline underline-offset-4"
                  >
                    Buy e-book
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership banner */}
      <section id="membership" className="bg-[#F4EFE5] px-5 pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-3xl bg-[#1D3B30] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#E4AD3E]">
              Save with the Purana membership
            </p>

            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
              5% off as a member, 10% off with Premium
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/85">
              On every online consultation and Reset programme. Premium also
              includes 2 personal online consultations per year and a monthly
              online seminar.
            </p>
          </div>

          <a
            href="/membership"
            className="shrink-0 rounded-full bg-[#E4AD3E] px-6 py-4 text-center text-sm font-semibold text-[#142F27] transition hover:bg-[#F2C76E]"
          >
            Become a member or upgrade
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#EAE1D1]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <h2 className="font-serif text-3xl sm:text-4xl">How it works</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[#1D3B30]/50 pt-6"
              >
                <p className="font-serif text-lg text-[#9A6115]">
                  {step.number}
                </p>

                <h3 className="mt-3 font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#52665C]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section id="booking" className="bg-[#F4EFE5] px-5 py-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-[#1D3B30] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="font-serif text-3xl">Ready to begin?</h2>
            <p className="mt-3 text-sm text-white/85">
              Choose an online consultation or find the right reset programme
              for you.
            </p>
          </div>

          <a
            href="#programmes"
            className="rounded-full bg-[#E4AD3E] px-7 py-4 text-center text-sm font-semibold text-[#142F27] transition hover:bg-[#F2C76E]"
          >
            Explore programmes
          </a>
        </div>
      </section>
    </main>
  );
}