
const plans = [
  {
    name: "Membership",
    subtitle: "Your everyday Ayurveda companion",
    price: "€9.99",
    featured: false,
    benefits: [
      "Regular access to our member content",
      "All Purana podcasts",
      "Monthly newsletter with Ayurveda tips",
      "5% off Ayurveda treatments at our centre in Steinberg am See and our retreats in Sri Lanka",
      "5% off Ayurveda consultations and guided online packages",
      "5% off all product purchases at Nivartana",
      "5% off stays at Chalet Resort Steinberg am See",
      "5% off at selected partner restaurants near our locations",
    ],
  },
  {
    name: "Premium Membership",
    subtitle: "A deeper journey into wellbeing",
    price: "€20.99",
    featured: true,
    benefits: [
      "Everything in Membership: content, podcasts and newsletter",
      "10% off Ayurveda treatments at our centre in Steinberg am See and our retreats in Sri Lanka",
      "10% off Ayurveda consultations and guided online packages",
      "10% off all product purchases at Nivartana",
      "10% off stays at Chalet Resort Steinberg am See",
      "10% off at selected partner restaurants",
      "Monthly online Ayurveda seminar",
      "2 online personal consultations per year with our Ayurveda experts",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section
      id="benefits"
      className="relative isolate overflow-hidden bg-[#EFE9C5] text-[#263A2B]"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-24 -z-10 h-80 w-80 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-12 -z-10 h-56 w-56 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#533E23]">
              Two ways to belong
            </p>
            <span className="h-px w-8 bg-[#C14C38]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl md:text-5xl">
            Choose your membership
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Make Ayurveda part of your everyday life. Discover the membership
            that suits your wellness journey.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5D39]" />
          </div>
        </div>

        {/* Membership cards */}
        <div className="mt-12 grid items-stretch gap-6 md:mt-16 md:grid-cols-2 md:gap-7">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border border-[#DFC24D]/60 bg-[#21452B] text-[#F8F5E8] shadow-2xl shadow-[#21452B]/15"
                  : "border border-[#D8D0A9] bg-[#F8F5E8] text-[#263A2B] shadow-lg shadow-[#533E23]/5 hover:shadow-xl"
              }`}
            >
              {/* Top decorative strip */}
              <div
                className={`h-1.5 w-full ${
                  plan.featured
                    ? "bg-gradient-to-r from-[#2F5D39] via-[#DFC24D] to-[#C14C38]"
                    : "bg-gradient-to-r from-[#EFE9C5] via-[#DFC24D] to-[#EFE9C5]"
                }`}
              />

              {/* Soft decorative circle */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-16 top-20 h-48 w-48 rounded-full border ${
                  plan.featured
                    ? "border-[#EFE9C5]/10"
                    : "border-[#2F5D39]/10"
                }`}
              />

              <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
                {/* Plan heading */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        plan.featured
                          ? "text-[#DFC24D]"
                          : "text-[#533E23]"
                      }`}
                    >
                      {plan.featured ? "The elevated experience" : "The essentials"}
                    </p>

                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        plan.featured
                          ? "text-[#EFE9C5]/75"
                          : "text-[#6B705C]"
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {plan.featured && (
                    <span className="shrink-0 rounded-full border border-[#DFC24D]/50 bg-[#DFC24D] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#21452B] sm:text-[10px]">
                      Premium
                    </span>
                  )}
                </div>

                {/* Price */}
                <div
                  className={`mt-7 flex items-end justify-between gap-3 border-b pb-6 ${
                    plan.featured
                      ? "border-[#EFE9C5]/20"
                      : "border-[#D8D0A9]"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-serif text-4xl tracking-tight sm:text-5xl">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.featured
                            ? "text-[#EFE9C5]/70"
                            : "text-[#6B705C]"
                        }`}
                      >
                        / month
                      </span>
                    </div>

                    <p
                      className={`mt-2 text-xs ${
                        plan.featured
                          ? "text-[#EFE9C5]/60"
                          : "text-[#6B705C]"
                      }`}
                    >
                      Membership starts 1 January 2027
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className={`mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      plan.featured
                        ? "bg-[#DFC24D]/15 text-[#DFC24D]"
                        : "bg-[#2F5D39]/10 text-[#2F5D39]"
                    }`}
                  >
                    {plan.featured ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M12 21s-8-4.4-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6.6-8 11-8 11z"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6">
                  <p
                    className={`mb-5 text-xs font-semibold uppercase tracking-[0.16em] ${
                      plan.featured
                        ? "text-[#DFC24D]"
                        : "text-[#533E23]"
                    }`}
                  >
                    What’s included
                  </p>

                  <ul className="space-y-4">
                    {plan.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm leading-6"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured
                              ? "bg-[#DFC24D]/15 text-[#DFC24D]"
                              : "bg-[#2F5D39]/10 text-[#2F5D39]"
                          }`}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3.5 w-3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="m4 10 4 4 8-8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <span
                          className={
                            plan.featured
                              ? "text-[#F8F5E8]/90"
                              : "text-[#263A2B]"
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#waitlist"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-center text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.featured
                      ? "bg-[#DFC24D] text-[#21452B] hover:bg-[#EFE9C5] focus:ring-[#DFC24D] focus:ring-offset-[#21452B]"
                      : "border border-[#2F5D39]/30 bg-transparent text-[#21452B] hover:border-[#2F5D39] hover:bg-[#EFE9C5] focus:ring-[#2F5D39] focus:ring-offset-[#F8F5E8]"
                  }`}
                >
                  Join the waiting list
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-[#533E23]"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M12 21s-8-4.4-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6.6-8 11-8 11z"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-sm leading-6 text-[#6B705C]">
            A little more balance, a little more wellbeing, every day.
          </p>
        </div>
      </div>
    </section>
  );
}
