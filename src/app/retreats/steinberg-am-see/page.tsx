
import type { ReactNode } from "react";
import SteinbergHero from "@/components/retreats/steinberg/SteinbergHero";
import SteinbergTreatments from "@/components/retreats/steinberg/SteinbergTreatments";

const retreatPackages = [
  {
    visits: "3 VISITS",
    title: "Ayurveda Retreat — 3 visits",
    price: "€300",
    oldPrice: "€330",
    steps: [
      {
        label: "Visit 1",
        description: "Consultation (45 min) + short treatments (30 min)",
      },
      {
        label: "Visit 2",
        description: "1.5 hours of individual treatments, customised for you",
      },
      {
        label: "Visit 3",
        description:
          "1 hour of individual treatments, customised for you — including a meal plan to take home",
      },
    ],
    features: [],
  },
  {
    visits: "4 VISITS · GUIDED HOME DETOX",
    title: "Ayurveda Retreat — 4 visits",
    price: "€455",
    oldPrice: "€515",
    steps: [
      {
        label: "Visit 1",
        description: "Consultation (45 min) + short treatments (30 min)",
      },
      {
        label: "Visit 2",
        description: "1.5 hours of individual treatments, customised for you",
      },
      {
        label: "Visit 3",
        description: "1 hour of individual treatments, customised for you",
      },
      {
        label: "Visit 4",
        description: "1 hour treatments",
      },
    ],
    features: [
      "Guided home detox with 1:1 calls",
      "Reachable on WhatsApp throughout your sessions",
      "Meal plan to take home",
    ],
  },
];

const miniRetreats = [
  {
    duration: "3 DAYS · 2 NIGHTS",
    tag: "A LONG WEEKEND",
    title: "The Gentle Escape",
    subtitle: "Three days to slow down and reconnect.",
    days: [
      {
        label: "DAY 01",
        title: "Arrive & unwind",
        description: "Personal consultation and a 30-minute treatments.",
      },
      {
        label: "DAY 02",
        title: "Restore your rhythm",
        description:
          "Private morning yoga in your chalet, 1.5 hours of tailor-made Ayurveda treatments, and evening sound meditation with singing bowls and mantras.",
      },
      {
        label: "DAY 03",
        title: "Take balance home",
        description:
          "Check out with an Ayurveda nutrition plan and information documents to continue your routine at home.",
      },
    ],
    price: "€[PRICE]",
    image: "/images/steinberg/mini-retreat-3-days.jpg",
  },
  {
    duration: "4 DAYS · 3 NIGHTS",
    tag: "A DEEPER PAUSE",
    title: "The Extended Escape",
    subtitle: "An extra day to settle into your own rhythm.",
    days: [
      {
        label: "DAY 01",
        title: "Arrive & unwind",
        description: "Personal consultation and a 30-minute treatments.",
      },
      {
        label: "DAY 02",
        title: "Restore your rhythm",
        description:
          "Private morning yoga in your chalet, 1.5 hours of tailor-made Ayurveda treatments, and evening sound meditation.",
      },
      {
        label: "DAY 03",
        title: "Make space for yourself",
        description:
          "Optional morning yoga, a one-hour Ayurveda treatments, and optional evening meditation.",
      },
      {
        label: "DAY 04",
        title: "Take balance home",
        description:
          "Check out with an Ayurveda nutrition plan and information documents for your everyday routine.",
      },
    ],
    price: "€[PRICE]",
    image: "/images/steinberg/mini-retreat-4-days.jpg",
  },
];

const onlineOffers = [
  {
    label: "SINGLE SESSION",
    title: "Online consultation",
    description:
      "Personal guidance from an Ayurveda expert, wherever you are.",
    href: "/online",
    number: "01",
  },
  {
    label: "4-DAY PROGRAMME",
    title: "Gentle Reset",
    description: "Videos, a food plan and practical everyday rituals.",
    href: "/online/gentle-reset",
    number: "02",
  },
  {
    label: "7-DAY PROGRAMME",
    title: "Seasonal Reset",
    description: "Seasonal guidance, two consultations and chat support.",
    href: "/online/seasonal-reset",
    number: "03",
  },
  {
    label: "PERSONALISED SUPPORT",
    title: "Deep Reset",
    description: "A guided programme with additional one-to-one support.",
    href: "/online/deep-reset",
    number: "04",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A66C4E]">
      {children}
    </p>
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

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-9 bg-[#C14C38]" />
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>

      <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-[#354B38] sm:text-5xl lg:text-6xl">
        {title}
        <span className="mt-1 block italic text-[#A66C4E]">{accent}</span>
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function SteinbergAmSeePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#514C3D]">
      <SteinbergHero />

      <SteinbergTreatments />

      {/* CHALET INFORMATION */}
      <section className="bg-[#F1EBDD] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E1D7C4] bg-[#E9E4D5]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#B99B61]/30"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#B99B61]/20"
            />

            <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
              <div className="max-w-2xl">
                <Eyebrow>Extend your Ayurveda experience</Eyebrow>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#354B38] sm:text-4xl lg:text-5xl">
                  Discover your
                  <span className="block italic text-[#A66C4E]">
                    place to unwind.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
                  Looking for a peaceful place to stay during your Ayurveda
                  journey? Discover our chalet, explore the accommodation
                  details and find out more about the facilities and your stay.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#596B55] sm:text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    Relaxation
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    Comfortable accommodation
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#B18A4D]">✳</span>
                    More information about your stay
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:min-w-52 lg:flex-col">
                <a
                  href="/chalets"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#3F6048] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                >
                  View chalet infos
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AYURVEDA RETREATS */}
      <section
        id="retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full border border-[#C9B88F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-28 h-56 w-56 rounded-full border border-[#C9B88F]/25"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeading
              eyebrow="Option 02 · Ayurveda retreat"
              title="A little more time"
              accent="to find your balance."
            />

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                A personalised Ayurveda journey, spread across several visits.
                Enjoy individual treatments, thoughtful guidance and practical
                routines you can continue at home.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-[#68735D]">
                <span>✳ Individual care</span>
                <span>✳ Multiple visits</span>
                <span>✳ Practical guidance</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {retreatPackages.map((retreat, index) => (
              <article
                key={retreat.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E3D9C6] bg-[#FBF9F2] p-6 shadow-[0_8px_30px_rgba(75,71,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7B58D] hover:shadow-xl sm:p-8 lg:p-9"
              >
                {/* Soft decorative number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-8 font-serif text-[150px] leading-none text-[#A66C4E]/[0.07]"
                >
                  0{index + 1}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66C4E]">
                      {retreat.visits}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-[#354B38] sm:text-3xl">
                      {retreat.title}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8C9A7] bg-[#F2EBDD] font-serif text-lg text-[#A66C4E]">
                    0{index + 1}
                  </span>
                </div>

                {/* Visit timeline */}
                <div className="relative mt-8 border-t border-[#E8E0D1]">
                  {retreat.steps.map((step, stepIndex) => (
                    <div
                      key={step.label}
                      className="grid grid-cols-[36px_1fr] gap-3 border-b border-[#E8E0D1] py-4 sm:grid-cols-[42px_1fr] sm:gap-4"
                    >
                      <div className="relative flex justify-center">
                        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#E9E4D5] text-[10px] font-bold text-[#506A50]">
                          {stepIndex + 1}
                        </span>

                        {stepIndex !== retreat.steps.length - 1 && (
                          <span className="absolute top-7 h-full w-px bg-[#D8C9A7]" />
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#A66C4E]">
                          {step.label}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-[#6B705C]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Included features */}
                {retreat.features.length > 0 && (
                  <div className="relative mt-5 rounded-2xl border border-[#E6DDCB] bg-[#F1EBDD] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                      Included in your journey
                    </p>

                    <ul className="mt-4 space-y-3">
                      {retreat.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-5 text-[#596B55]"
                        >
                          <span className="font-bold text-[#8A9A71]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Price and enquiry */}
                <div className="relative mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-[#E8E0D1] pt-7 mt-7">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A806C]">
                      Programme price
                    </p>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-serif text-3xl text-[#354B38] sm:text-4xl">
                        {retreat.price}
                      </span>
                      <span className="text-sm text-[#A49B88] line-through">
                        {retreat.oldPrice}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3F6048] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                  >
                    Enquire now
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-[#E3D9C6] bg-[#F1EBDD] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-semibold text-[#354B38]">
                A journey shaped around you.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#777765]">
                Contact us to discuss programme details and find the right
                option for your needs.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#3F6048] underline decoration-[#C7A96B] underline-offset-4 hover:text-[#A66C4E]"
            >
              Talk to our team
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* PRIVATE MINI RETREATS */}
      <section
        id="mini-retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#EFE9DC] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full border border-[#C9B88F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-48 h-52 w-52 rounded-full border border-[#C9B88F]/25"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8C9A7] bg-[#F8F5EC] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A66C4E]" />
                <Eyebrow>Option 03 · Private retreat with stay</Eyebrow>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-[1.12] text-[#354B38] sm:text-5xl lg:text-6xl">
                Step away from
                <span className="block italic text-[#A66C4E]">
                  the everyday.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Stay in your private chalet in Steinberg am See. Take time for
                treatments, optional yoga, restorative rituals and the simple
                pleasure of having nowhere else to be.
              </p>

              <a
                href="/chalets"
                className="group mt-5 inline-flex items-center gap-3 rounded-full border border-[#9EAD91] bg-[#F8F5EC]/70 px-5 py-3.5 text-sm font-semibold text-[#3F6048] transition-all hover:bg-white"
              >
                Discover the Chalet Resort
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Experience highlights */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                number: "01",
                title: "Private chalet",
                text: "Your own space",
              },
              {
                number: "02",
                title: "Ayurveda care",
                text: "Tailored treatments",
              },
              {
                number: "03",
                title: "Gentle movement",
                text: "Optional private yoga",
              },
              {
                number: "04",
                title: "Quiet moments",
                text: "Time to slow down",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E2D8C5] bg-[#F8F5EC] p-4 transition-transform hover:-translate-y-1 sm:p-5"
              >
                <p className="font-serif text-2xl text-[#B18A4D]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-[#455B45]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#777765]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mini retreat cards */}
          <div className="mt-9 grid gap-7 lg:grid-cols-2">
            {miniRetreats.map((retreat, index) => (
              <article
                key={retreat.title}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E1D8C6] bg-[#FBF9F3] shadow-[0_8px_30px_rgba(75,71,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image header */}
                <div className="relative h-60 overflow-hidden bg-[#DCD5C1] sm:h-72">
                  <img
                    src={retreat.image}
                    alt={`${retreat.title} private Ayurveda retreat`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26372B]/65 via-[#26372B]/5 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-[#F8F5EC]/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#455B45] backdrop-blur-sm">
                    {retreat.tag}
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 font-serif text-sm text-white backdrop-blur-sm">
                    0{index + 1}
                  </div>

                  <div className="absolute inset-x-5 bottom-6 sm:inset-x-7 sm:bottom-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F0D99D]">
                      {retreat.duration}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                      {retreat.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      {retreat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="relative">
                    {retreat.days.map((day, dayIndex) => (
                      <div
                        key={day.label}
                        className={`grid grid-cols-[58px_1fr] gap-3 sm:grid-cols-[68px_1fr] sm:gap-4 ${
                          dayIndex !== retreat.days.length - 1 ? "pb-7" : ""
                        }`}
                      >
                        <div className="relative flex justify-center">
                          {dayIndex !== retreat.days.length - 1 && (
                            <span className="absolute top-8 h-full w-px bg-[#D8C9A7]" />
                          )}

                          <span
                            className={`relative z-10 flex h-8 w-12 items-center justify-center rounded-full text-[9px] font-bold tracking-wide sm:w-14 ${
                              dayIndex === 0
                                ? "bg-[#E5E9DD] text-[#3F6048]"
                                : "border border-[#DED4C1] bg-[#F3EEE3] text-[#8A806C]"
                            }`}
                          >
                            {day.label}
                          </span>
                        </div>

                        <div className="pt-1">
                          <h4 className="text-sm font-semibold text-[#455B45]">
                            {day.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-[#777765]">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Package price */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E6DDCB] bg-[#F1EBDD] p-4 sm:p-5">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A806C]">
                          Your retreat investment
                        </p>
                        <p className="mt-1 font-serif text-3xl text-[#455B45]">
                          {retreat.price}
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-[#8A806C]">
                          Final price and inclusions to be confirmed
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3F6048] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
                      >
                        Enquire about this stay
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#85816F]">
            Please confirm retreat pricing, accommodation inclusions,
            availability and any optional activities before bookings open.
          </p>
        </div>
      </section>

      {/* ONLINE AYURVEDA */}
      <section
        id="online-at-home"
        className="scroll-mt-20 bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeading
              eyebrow="Continue your journey at home"
              title="Bring Ayurveda"
              accent="into your everyday."
            />

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Continue exploring Ayurveda with online consultations and
                guided programmes designed to fit your routine.
              </p>

              <a
                href="/online"
                className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
              >
                Explore online offers
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {onlineOffers.map((offer) => (
              <a
                key={offer.title}
                href={offer.href}
                className="group flex min-h-[220px] flex-col rounded-[24px] border border-[#E4DCCB] bg-[#FBF9F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8C4AC] hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A806C]">
                    {offer.label}
                  </span>
                  <span className="font-serif text-xl text-[#B18A4D]">
                    {offer.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-[#455B45]">
                  {offer.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#777765]">
                  {offer.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#3F6048]">
                  Discover more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#85816F]">
            Membership discounts may apply. Please check the current
            membership terms and programme details.
          </p>
        </div>
      </section>

      {/* LOCATION AND CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#EFE9DC] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Come and visit us</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#354B38] sm:text-5xl">
              Your time in
              <span className="block italic text-[#A66C4E]">
                Steinberg am See.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C] sm:text-base">
              Have a question about treatments, retreat packages or your
              upcoming stay? Get in touch and we will help you plan your visit.
            </p>

            <div className="mt-8 space-y-5 border-t border-[#DCD2BF] pt-7 text-sm text-[#6B705C]">
              {/* Location */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E2E7D9] text-[#3F6048]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>

                <div>
                  <p className="font-semibold text-[#455B45]">Location</p>
                  <p className="mt-1 leading-6">
                    [Street and house number]
                    <br />
                    [Postcode] Steinberg am See, Germany
                  </p>
                </div>
              </div>

              {/* Opening hours */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E2E7D9] text-[#3F6048]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 7v5l3.5 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="font-semibold text-[#455B45]">
                    Opening hours
                  </p>
                  <p className="mt-1 leading-6">
                    [Add confirmed opening hours]
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E2E7D9] text-[#3F6048]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect
                      x="3.5"
                      y="5.5"
                      width="17"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m4.5 7 7.5 5.5L19.5 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="font-semibold text-[#455B45]">Email</p>
                  <p className="mt-1 leading-6">
                    [Add confirmed contact email]
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@example.com"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
              >
                Send an email
                <ArrowIcon />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Steinberg+am+See%2C+Germany"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#9EAD91] bg-[#F8F5EC]/60 px-6 py-4 text-sm font-semibold text-[#455B45] transition-colors hover:bg-white"
              >
                Get directions
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-[#DCD2BF] bg-[#E1D8C4] shadow-[0_12px_35px_rgba(75,71,52,0.08)] sm:min-h-[450px]">
            <iframe
              title="Map showing Steinberg am See, Germany"
              src="https://maps.google.com/maps?q=Steinberg%20am%20See%2C%20Germany&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="bg-[#F7F3EA] px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#E2D8C5] bg-[#E9E4D5] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full border border-[#C7B58D]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-36 h-96 w-96 rounded-full border border-[#C7B58D]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F5EC]/70 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#C14C38]" />
              <Eyebrow>Your Ayurveda experience starts here</Eyebrow>
              <span className="h-px w-7 bg-[#C14C38]" />
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#354B38] sm:text-4xl lg:text-5xl">
              Make room for
              <span className="block italic text-[#A66C4E]">
                a little more balance.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Explore our treatments and retreats, or contact us to find the
              right experience for your visit to Steinberg am See.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#individual-treatments"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
              >
                Explore treatments
                <ArrowIcon />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#9EAD91] bg-[#F8F5EC]/70 px-6 py-4 text-sm font-semibold text-[#455B45] transition-colors hover:bg-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
