"use client";

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
    image: "/images/ebooks/detox-at-home.jpg",
  },
  {
    title: "Ayurveda for Spring",
    description: "Lightness and a fresh start: routine, food and rituals.",
    image: "/images/ebooks/ayurveda-spring.jpg",
  },
  {
    title: "Ayurveda for Summer",
    description: "Stay cool and calm: cooling food and evening rituals.",
    image: "/images/ebooks/ayurveda-summer.jpg",
  },
  {
    title: "Ayurveda for Autumn",
    description: "Grounding and routine: warm meals and oil massage.",
    image: "/images/ebooks/ayurveda-autumn.jpg",
  },
  {
    title: "Ayurveda for Winter",
    description: "Warmth and steady energy through the dark months.",
    image: "/images/ebooks/ayurveda-winter.jpg",
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

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-[#DFC24D]" : "text-[#9A6B25]"
      }`}
    >
      {children}
    </p>
  );
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        light
          ? "bg-[#DFC24D]/15 text-[#DFC24D]"
          : "bg-[#2F5D39]/10 text-[#2F5D39]"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
      >
        <path
          d="m4.5 10.2 3.6 3.5 7.4-7.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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

export default function DeepResetPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      <DeepResetHero />
      <DeepResetDetails />

      {/* Guided detox programmes */}
      <section
        id="programmes"
        className="relative scroll-mt-20 bg-[#F8F5E8] px-5 py-20 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full border border-[#D8D0A9]/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-32 h-48 w-48 rounded-full border border-[#D8D0A9]/40"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Ayurveda reset at home</Eyebrow>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
                A gentler way to return to balance.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#6B705C] lg:justify-self-end">
              Personally guided by Lakshani, in German or English. Daily
              rituals, nourishing food and gentle self-care, at your own pace
              — step by step.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  programme.featured
                    ? "border-[#21452B] bg-[#21452B] text-white shadow-lg shadow-[#21452B]/10"
                    : "border-[#E4DDC7] bg-white text-[#263A2B] shadow-sm hover:border-[#B9C8AE]"
                }`}
              >
                {programme.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#DFC24D] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#21452B]">
                    Most popular
                  </div>
                )}

                <p
                  className={`pr-24 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                    programme.featured
                      ? "text-[#DFC24D]"
                      : "text-[#7A806C]"
                  }`}
                >
                  {programme.duration}
                </p>

                <div
                  className={`mt-7 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    programme.featured
                      ? "bg-white/10 text-[#DFC24D]"
                      : "bg-[#EDF0E5] text-[#2F5D39]"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21c-4.8-2.7-7.5-6.2-7.5-10.1A4.4 4.4 0 0 1 12 8.2a4.4 4.4 0 0 1 7.5 2.7C19.5 14.8 16.8 18.3 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 19c-.4-4.4.5-7.5 3.4-10.4M12 14l-3.1-3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="mt-5 font-serif text-3xl">
                  {programme.title}
                </h3>

                <p
                  className={`mt-3 min-h-[72px] text-sm leading-6 ${
                    programme.featured ? "text-white/75" : "text-[#6B705C]"
                  }`}
                >
                  {programme.description}
                </p>

                <div
                  className={`my-6 h-px ${
                    programme.featured ? "bg-white/15" : "bg-[#E8E2D2]"
                  }`}
                />

                <ul className="space-y-4">
                  {programme.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5"
                    >
                      <CheckIcon light={programme.featured} />
                      <span
                        className={
                          programme.featured
                            ? "text-white/90"
                            : "text-[#52634F]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {programme.featured && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {seasons.map((season) => (
                      <span
                        key={season}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] text-white/85"
                      >
                        {season}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-8">
                  <div
                    className={`mb-5 h-px ${
                      programme.featured ? "bg-white/15" : "bg-[#E8E2D2]"
                    }`}
                  />

                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p
                        className={`text-[10px] uppercase tracking-[0.15em] ${
                          programme.featured
                            ? "text-white/60"
                            : "text-[#7A806C]"
                        }`}
                      >
                        Programme price
                      </p>
                      <p className="mt-1 font-serif text-4xl">
                        {programme.price}
                      </p>
                    </div>

                    <a
                      href={programme.href}
                      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                        programme.featured
                          ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#E9D57D]"
                          : "bg-[#2F5D39] text-white hover:bg-[#21452B]"
                      }`}
                    >
                      Explore programme
                      <ArrowIcon />
                    </a>
                  </div>

                  <a
                    href={programme.href}
                    className={`mt-5 inline-block text-xs underline underline-offset-4 transition-opacity hover:opacity-70 ${
                      programme.featured ? "text-white/70" : "text-[#6B705C]"
                    }`}
                  >
                    More information
                  </a>
                </div>
              </article>
            ))}

            {/* Deep Reset */}
            <article className="group flex flex-col rounded-[28px] border border-[#E4DDC7] bg-[#EFE9D8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A806C]">
                1:1 GUIDANCE · 2 OPTIONS
              </p>

              <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#2F5D39]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M12 7v5l3.5 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B]">
                Deep Reset
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B705C]">
                The Gentle or Seasonal Reset with more one-to-one time:
                Lakshani adapts your plan to you as you go.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-[#D8D0B8] bg-white/65 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-[#21452B]">4 days</h4>
                    <span className="rounded-full bg-[#EDF0E5] px-2.5 py-1 text-[10px] font-medium text-[#2F5D39]">
                      Gentle
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                    Gentle Reset + 3 one-to-one consultations
                  </p>
                  <p className="mt-3 font-serif text-3xl text-[#21452B]">
                    €259
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8D0B8] bg-white/65 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-[#21452B]">7 days</h4>
                    <span className="rounded-full bg-[#F4E8C4] px-2.5 py-1 text-[10px] font-medium text-[#765B15]">
                      Seasonal
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                    Seasonal Reset + 4 one-to-one consultations
                  </p>
                  <p className="mt-3 font-serif text-3xl text-[#21452B]">
                    €349
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="/online/deep-reset"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F5D39] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#21452B]"
                >
                  Choose your Deep Reset
                  <ArrowIcon />
                </a>

                <a
                  href="/online/deep-reset"
                  className="mt-4 block text-center text-xs text-[#6B705C] underline underline-offset-4 hover:text-[#21452B]"
                >
                  More information
                </a>
              </div>
            </article>
          </div>

          <p className="mt-7 text-xs leading-5 text-[#7A806C]">
            Choose the level of guidance that suits you. Programme details and
            consultation arrangements should be confirmed before booking.
          </p>
        </div>
      </section>

      {/* E-books */}
      <section
        id="ebooks"
        className="scroll-mt-20 border-t border-[#E5DFC9] bg-[#EFE9D8] px-5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Small guides · Lasting habits</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
                Ayurveda through the year, to read at home.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B705C]">
                Practical guides with routines, food lists for each dosha and
                recipes — download instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 rounded-[24px] bg-[#21452B] p-5 text-white sm:justify-start sm:p-6">
              <div>
                <p className="font-serif text-xl">The complete collection</p>
                <p className="mt-1 text-xs text-white/65">
                  All 5 e-books + printable year planner
                </p>
              </div>

              <p className="font-serif text-3xl text-[#DFC24D]">€49</p>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#DFC24D] px-5 py-3 text-sm font-semibold text-[#21452B] transition-colors hover:bg-[#E9D57D]"
              >
                Get the bundle
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {ebooks.map((ebook, index) => (
              <article
                key={ebook.title}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-[#E1DAC5] bg-[#F8F5E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8C6AE] hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E4DDC8]">
                  <img
                    src={ebook.image}
                    alt={`Cover of ${ebook.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5E8]/90 font-serif text-sm text-[#21452B]">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-base leading-snug text-[#21452B] sm:text-lg">
                    {ebook.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-5 text-[#6B705C]">
                    {ebook.description}
                  </p>

                  <div className="mt-5 border-t border-[#E5DFC9] pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif text-xl text-[#21452B]">
                        €14.90
                      </span>
                      <a
                        href="#booking"
                        aria-label={`Buy ${ebook.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2F5D39] text-white transition-colors hover:bg-[#21452B]"
                      >
                        <ArrowIcon />
                      </a>
                    </div>
                    <a
                      href="#booking"
                      className="mt-3 inline-block text-xs font-semibold text-[#2F5D39] underline underline-offset-4 hover:text-[#9A6B25]"
                    >
                      Buy e-book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership banner */}
      <section
        id="membership"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 pb-20 sm:pb-24"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[#21452B] p-7 text-white sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-8 h-48 w-48 rounded-full border border-[#DFC24D]/20"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <Eyebrow light>Membership · More balance for less</Eyebrow>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Make your wellbeing journey go further.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Save 5% as a member or 10% with Premium on every online
                consultation and Reset programme. Premium also includes 2
                personal online consultations per year and a monthly online
                seminar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/85">
                  5% member saving
                </span>
                <span className="rounded-full border border-[#DFC24D]/50 bg-[#DFC24D]/10 px-4 py-2 text-xs text-[#DFC24D]">
                  10% Premium saving
                </span>
              </div>
            </div>

            <a
              href="/membership"
              className="group relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-center text-sm font-semibold text-[#21452B] transition-all hover:bg-[#E9D57D] sm:px-7"
            >
              Explore membership
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F8F5E8] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Your journey, made simple</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-[#21452B] sm:text-4xl lg:text-5xl">
              How it works.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6B705C]">
              From your first booking to your daily practice, take each step
              with clarity and support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[24px] border border-[#E5DFC9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#9A6B25]">
                    {step.number}
                  </span>
                  <span className="h-9 w-9 rounded-full border border-[#D8D0A9] p-2">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-full w-full text-[#2F5D39]"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 10 3.2 3.2L15 6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-xl text-[#21452B]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6B705C]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final booking CTA */}
      <section
        id="booking"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 py-16 sm:py-20"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[#21452B] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 right-20 h-48 w-48 rounded-full border border-[#DFC24D]/20"
          />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <Eyebrow light>A little time for yourself</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Ready to begin?
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Choose an online consultation or find the right reset
                programme for you. Start with one small step towards a more
                balanced routine.
              </p>
            </div>

            <a
              href="#programmes"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition-all hover:bg-[#E9D57D]"
            >
              Explore programmes
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
