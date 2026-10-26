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
        description: "Consultation (45 min) + short treatment (30 min)",
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
        description: "Consultation (45 min) + short treatment (30 min)",
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
        description: "1 hour treatment",
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
        description: "Personal consultation and a 30-minute treatment.",
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
        description: "Personal consultation and a 30-minute treatment.",
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
          "Optional morning yoga, a one-hour Ayurveda treatment, and optional evening meditation.",
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
    description: "Personal guidance from an Ayurveda expert, wherever you are.",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A6B25]">
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

export default function SteinbergAmSeePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      <SteinbergHero />

      <SteinbergTreatments />

      {/* CHALET INFORMATION */}
<section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
  <div className="mx-auto max-w-[var(--container-width)]">
    <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--forest-dark)] text-[var(--cream)]">
      {/* Decorative details */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[var(--gold)]/25" />

      <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-14">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--gold)]">
            Extend your Ayurveda experience
          </p>

          <h2 className="font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--cream)] sm:text-4xl lg:text-5xl">
            Discover our chalet
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--cream)]/80 sm:text-base">
            Looking for a peaceful place to stay during your Ayurveda
            journey? Discover our chalet, explore the accommodation
            details and find out more about the facilities and your stay.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--cream)]/75">
            <span className="flex items-center gap-2">
              <span className="text-[var(--gold)]">✳</span>
              Relaxation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[var(--gold)]">✳</span>
              Comfortable accommodation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[var(--gold)]">✳</span>
              More information about your stay
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:min-w-56 lg:flex-col">
          <a
            href="/chalets"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
          >
            View chalet infos
            <span aria-hidden="true">→</span>
          </a>

          
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Ayurveda retreats without accommodation */}
      <section
        id="retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#EFE9D8] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-[#C8B77D]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-28 h-48 w-48 rounded-full border border-[#C8B77D]/30"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <Eyebrow>Option 02 · Ayurveda retreat</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl lg:text-6xl">
                A little more time
                <span className="block italic text-[#9A6B25]">
                  to find your balance.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                A personalised Ayurveda journey, spread across several visits.
                Enjoy individual treatments, thoughtful guidance and practical
                routines you can continue at home.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#52634F]">
                <span>✳ Individual care</span>
                <span>✳ Multiple visits</span>
                <span>✳ Practical guidance</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {retreatPackages.map((retreat, index) => {
              const featured = index === 1;

              return (
                <article
                  key={retreat.title}
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:p-9 ${
                    featured
                      ? "border-[#21452B] bg-[#21452B] text-[#F8F5E8]"
                      : "border-[#E0D7BF] bg-[#F8F5E8] text-[#21452B]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-3 -top-10 font-serif text-[150px] leading-none ${
                      featured ? "text-white/[0.045]" : "text-[#21452B]/[0.035]"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                          featured ? "text-[#DFC24D]" : "text-[#9A6B25]"
                        }`}
                      >
                        {retreat.visits}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                        {retreat.title}
                      </h3>
                    </div>

                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-serif text-lg ${
                        featured
                          ? "border-[#DFC24D]/40 text-[#DFC24D]"
                          : "border-[#D8D0A9] bg-[#EFE9D8] text-[#21452B]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div
                    className={`relative mt-7 border-t ${
                      featured ? "border-white/15" : "border-[#E5DFC9]"
                    }`}
                  >
                    {retreat.steps.map((step, stepIndex) => (
                      <div
                        key={step.label}
                        className={`grid grid-cols-[34px_1fr] gap-3 border-b py-4 sm:grid-cols-[40px_1fr] sm:gap-4 ${
                          featured ? "border-white/15" : "border-[#E5DFC9]"
                        }`}
                      >
                        <div className="relative flex justify-center">
                          <span
                            className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                              featured
                                ? "bg-[#DFC24D] text-[#21452B]"
                                : "border border-[#D8D0A9] bg-[#EFE9D8] text-[#21452B]"
                            }`}
                          >
                            {stepIndex + 1}
                          </span>
                          {stepIndex !== retreat.steps.length - 1 && (
                            <span
                              className={`absolute top-7 h-full w-px ${
                                featured ? "bg-white/15" : "bg-[#D8D0A9]"
                              }`}
                            />
                          )}
                        </div>

                        <div>
                          <p
                            className={`text-xs font-semibold ${
                              featured ? "text-[#DFC24D]" : "text-[#9A6B25]"
                            }`}
                          >
                            {step.label}
                          </p>
                          <p
                            className={`mt-1.5 text-sm leading-6 ${
                              featured ? "text-white/85" : "text-[#52634F]"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {retreat.features.length > 0 && (
                    <div className="relative mt-5 rounded-2xl bg-white/[0.06] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#DFC24D]">
                        Included in your journey
                      </p>
                      <ul className="mt-3 space-y-3">
                        {retreat.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-sm leading-5 text-white/85"
                          >
                            <span className="text-[#DFC24D]">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div
                    className={`relative mt-auto flex flex-wrap items-end justify-between gap-4 border-t pt-6 ${
                      featured ? "mt-7 border-white/15" : "mt-7 border-[#E5DFC9]"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-[10px] font-medium uppercase tracking-[0.16em] ${
                          featured ? "text-white/60" : "text-[#7A806C]"
                        }`}
                      >
                        Programme price
                      </p>
                      <div className="mt-1 flex items-baseline gap-3">
                        <span
                          className={`font-serif text-3xl sm:text-4xl ${
                            featured ? "text-[#DFC24D]" : "text-[#21452B]"
                          }`}
                        >
                          {retreat.price}
                        </span>
                        <span
                          className={`text-sm line-through ${
                            featured ? "text-white/45" : "text-[#8A8A70]"
                          }`}
                        >
                          {retreat.oldPrice}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className={`group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-semibold transition-colors ${
                        featured
                          ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#EFE9C5]"
                          : "bg-[#21452B] text-white hover:bg-[#2F5D39]"
                      }`}
                    >
                      Enquire now
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-[#D8D0A9]/70 bg-white/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-semibold text-[#21452B]">
                A journey shaped around you.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                Contact us to discuss programme details and find the right
                option for your needs.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#21452B] underline decoration-[#C8B77D] underline-offset-4 hover:text-[#9A6B25]"
            >
              Talk to our team <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Private mini retreats with accommodation */}
      <section
        id="mini-retreats"
        className="relative scroll-mt-20 overflow-hidden bg-[#F8F5E8] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full border border-[#D8D0A9]/45"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-48 h-44 w-44 rounded-full border border-[#D8D0A9]/45"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A6B25]" />
                <Eyebrow>Option 03 · Private retreat with stay</Eyebrow>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-[1.12] text-[#21452B] sm:text-5xl lg:text-6xl">
                Step away from
                <span className="block italic text-[#9A6B25]">
                  the everyday.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#6B705C] sm:text-base">
                Stay in your private chalet in Steinberg am See. Take time
                for treatments, optional yoga, restorative rituals and the
                simple pleasure of having nowhere else to be.
              </p>

              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-3 rounded-full border border-[#21452B]/30 px-5 py-3.5 text-sm font-semibold text-[#21452B] transition-colors hover:border-[#21452B] hover:bg-[#EFE9D8]"
              >
                Discover the Chalet Resort
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Experience highlights */}
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { number: "01", title: "Private chalet", text: "Your own space" },
              { number: "02", title: "Ayurveda care", text: "Tailored treatments" },
              { number: "03", title: "Gentle movement", text: "Optional private yoga" },
              { number: "04", title: "Quiet moments", text: "Time to slow down" },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E5DFC9] bg-white/70 p-4 sm:p-5"
              >
                <p className="font-serif text-2xl text-[#B39A53]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-[#21452B]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mini retreat cards */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {miniRetreats.map((retreat, index) => (
              <article
                key={retreat.title}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E5DFC9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#21452B]/[0.07]"
              >
                {/* Retreat image */}
                <div className="relative h-56 overflow-hidden bg-[#DCD5C1] sm:h-64">
                  <img
                    src={retreat.image}
                    alt={`${retreat.title} private Ayurveda retreat`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172F23]/80 via-[#172F23]/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-[#F8F5E8]/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#21452B]">
                    {retreat.tag}
                  </div>

                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DFC24D]">
                      {retreat.duration}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                      {retreat.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      {retreat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  {/* Day-by-day itinerary */}
                  <div className="relative">
                    {retreat.days.map((day, dayIndex) => (
                      <div
                        key={day.label}
                        className={`grid grid-cols-[56px_1fr] gap-3 sm:grid-cols-[66px_1fr] sm:gap-4 ${
                          dayIndex !== retreat.days.length - 1 ? "pb-6" : ""
                        }`}
                      >
                        <div className="relative flex justify-center">
                          {dayIndex !== retreat.days.length - 1 && (
                            <span className="absolute top-8 h-full w-px bg-[#D8D0A9]" />
                          )}
                          <span
                            className={`relative z-10 flex h-8 w-12 items-center justify-center rounded-full text-[9px] font-bold tracking-wide sm:w-14 ${
                              dayIndex === 0
                                ? "bg-[#21452B] text-[#DFC24D]"
                                : "border border-[#D8D0A9] bg-[#F8F5E8] text-[#52634F]"
                            }`}
                          >
                            {day.label}
                          </span>
                        </div>

                        <div className="pt-1">
                          <h4 className="text-sm font-semibold text-[#21452B]">
                            {day.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Package summary */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#EFE9D8] p-4 sm:p-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7A806C]">
                          Your retreat investment
                        </p>
                        <p className="mt-1 font-serif text-3xl text-[#21452B]">
                          {retreat.price}
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-[#7A806C]">
                          Final price and inclusions to be confirmed
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-[#21452B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
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

          <p className="mt-5 text-xs leading-5 text-[#7A806C]">
            Please confirm retreat pricing, accommodation inclusions,
            availability and any optional activities before bookings open.
          </p>
        </div>
      </section>



      {/* Online Ayurveda offers */}
      <section
        id="online-at-home"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <Eyebrow>Continue your journey at home</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
                Bring Ayurveda
                <span className="block text-[#9A6B25]">
                  into your everyday.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#6B705C]">
                Continue exploring Ayurveda with online consultations and
                guided programmes designed to fit your routine.
              </p>
              <a
                href="/online"
                className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
              >
                Explore online offers
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {onlineOffers.map((offer) => (
              <a
                key={offer.title}
                href={offer.href}
                className="group flex min-h-[200px] flex-col rounded-[22px] border border-[#E5DFC9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7CFB8] hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7A806C]">
                    {offer.label}
                  </span>
                  <span className="font-serif text-xl text-[#B39A53]">
                    {offer.number}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#21452B]">
                  {offer.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#6B705C]">
                  {offer.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#2F5D39]">
                  Discover more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#7A806C]">
            Membership discounts may apply. Please check the current
            membership terms and programme details.
          </p>
        </div>
      </section>

      {/* Location and contact */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#F8F5E8] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Come and visit us</Eyebrow>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Your time in
              <span className="block text-[#9A6B25]">
                Steinberg am See.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C]">
              Have a question about treatments, retreat packages or your
              upcoming stay? Get in touch and we will help you plan your visit.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#E5DFC9] pt-6 text-sm text-[#52634F]">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE9D8] text-[#2F5D39]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#21452B]">Location</p>
                  <p className="mt-1 leading-6">
                    [Street and house number]
                    <br />
                    [Postcode] Steinberg am See, Germany
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE9D8] text-[#2F5D39]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#21452B]">Opening hours</p>
                  <p className="mt-1 leading-6">[Add confirmed opening hours]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE9D8] text-[#2F5D39]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#21452B]">Email</p>
                  <p className="mt-1 leading-6">[Add confirmed contact email]</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
              >
                Send an email
                <ArrowIcon />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Steinberg+am+See%2C+Germany"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#21452B]/40 px-6 py-4 text-sm font-semibold text-[#21452B] transition-colors hover:bg-[#EFE9D8]"
              >
                Get directions
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#E1D8C4] sm:min-h-[420px]">
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

      {/* Closing call to action */}
      <section className="bg-[#EFE9D8] px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#21452B] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
            Your Ayurveda experience starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Make room for a little more balance.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
            Explore our treatments and retreats, or contact us to find the
            right experience for your visit to Steinberg am See.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="#individual-treatments"
              className="inline-flex items-center gap-2 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-colors hover:bg-[#EFE9C5]"
            >
              Explore treatments
              <ArrowIcon />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
