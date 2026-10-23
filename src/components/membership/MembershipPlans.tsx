
const plans = [
  {
    name: "Membership",
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
    <section className="bg-[#F4EFE5] text-[#142F27]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Two ways to belong
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Choose your membership
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl p-7 sm:p-9 ${
                plan.featured
                  ? "bg-[#1D3B30] text-[#F4EFE5]"
                  : "bg-white text-[#142F27]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                {plan.featured && (
                  <span className="rounded-full bg-[#E0A83E] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#142F27]">
                    Most benefits
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-2 border-b border-current/15 pb-5">
                <span className="font-serif text-5xl">{plan.price}</span>
                <span className="text-sm opacity-80">/ month</span>
              </div>

              <ul className="mt-5 flex-1 space-y-3">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6">
                    <span className="text-[#E0A83E]">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-6 block rounded-full px-5 py-4 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-[#E0A83E] text-[#142F27] hover:bg-[#EDBA54]"
                    : "border border-[#1D3B30] hover:bg-[#F4EFE5]"
                }`}
              >
                Join the waiting list
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
