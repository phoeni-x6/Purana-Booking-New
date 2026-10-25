
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
    <section
      id="benefits"
      className="relative isolate overflow-hidden bg-[#EFE9C5] text-[#263A2B]"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 -z-10 h-48 w-48 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section heading */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#533E23]">
              Where you save
            </p>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl md:text-5xl">
            Your card, at every Purana place
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Enjoy exclusive member savings across selected treatments,
            wellness experiences, products and partner locations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-[#F8F5E8] px-4 py-2 text-xs text-[#533E23]">
              <span className="h-2 w-2 rounded-full bg-[#2F5D39]" />
              Membership savings
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/50 bg-[#DFC24D]/15 px-4 py-2 text-xs text-[#533E23]">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              Premium benefits
            </span>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8] p-6 shadow-sm shadow-[#533E23]/5 transition duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#533E23]/10 sm:p-7"
            >
              {/* Decorative number */}
              <span className="absolute right-5 top-5 font-serif text-5xl text-[#2F5D39]/[0.07] transition duration-300 group-hover:text-[#2F5D39]/[0.12]">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFC24D]/40 bg-[#EFE9C5] text-2xl text-[#21452B] transition duration-300 group-hover:bg-[#DFC24D]/30">
                {benefit.icon}
              </div>

              {/* Text */}
              <h3 className="mt-6 max-w-[260px] font-serif text-xl leading-snug text-[#21452B]">
                {benefit.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#6B705C]">
                {benefit.description}
              </p>

              {/* Discount badges */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#D8D0A9] pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2F5D39]/15 bg-[#2F5D39]/[0.06] px-3 py-2 text-xs font-medium text-[#21452B]">
                  <span className="text-[#2F5D39]">✦</span>
                  5% Member
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#21452B] px-3 py-2 text-xs font-medium text-[#F8F5E8]">
                  <span className="text-[#DFC24D]">✦</span>
                  10% Premium
                </span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#DFC24D] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Discount information panel */}
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-[#DFC24D]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  d="M12 11v5m0-8h.01"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#21452B]">
                Where discounts apply
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B705C]">
                Member discounts are valid only at our physical centre in
                Germany, Steinberg am See, and on our retreats in Sri Lanka.
              </p>
            </div>

            <div className="hidden shrink-0 self-center text-4xl text-[#DFC24D] sm:ml-auto sm:block">
              ✳
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
