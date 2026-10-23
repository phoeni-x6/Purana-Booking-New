
const benefits = [
  {
    icon: "♧",
    title: "Ayurveda treatments",
    description:
      "At our centre in Steinberg am See and on our retreats in Sri Lanka.",
  },
  {
    icon: "▣",
    title: "Consultations & online packages",
    description:
      "Ayurveda consultations and our guided Reset at Home packages.",
  },
  {
    icon: "♧",
    title: "Nivartana products",
    description: "On every product purchase at Nivartana.",
  },
  {
    icon: "⌂",
    title: "Chalet Resort stays",
    description: "Chalet Resort Steinberg am See.",
  },
  {
    icon: "♜",
    title: "Partner restaurants",
    description:
      "Selected restaurants near our locations. Full list coming soon.",
  },
];

export default function MembershipBenefits() {
  return (
    <section id="benefits" className="bg-[#F4EFE5] text-[#142F27]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Where you save
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Your card, at every Purana place
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col rounded-2xl bg-white p-7"
            >
              <span className="text-2xl">{benefit.icon}</span>

              <h3 className="mt-4 text-base font-semibold">
                {benefit.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-[#52665C]">
                {benefit.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-[#EEE6D7] px-3 py-2">
                  5% Member
                </span>
                <span className="rounded-full bg-[#1D3B30] px-3 py-2 text-white">
                  10% Premium
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#EAE1D1] p-5 text-sm leading-6">
          <strong>Where discounts apply:</strong> member discounts are valid
          only at our physical centre in Germany, Steinberg am See, and on our
          retreats in Sri Lanka.
        </div>
      </div>
    </section>
  );
}
