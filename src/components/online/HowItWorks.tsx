
const steps = [
  {
    number: "01",
    title: "Book online",
    description:
      "Choose a consultation or programme that suits your needs and pay securely.",
    label: "Your first step",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fill in your form",
    description:
      "Complete a short health questionnaire before your first consultation.",
    label: "Get prepared",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6M8 9h2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Meet your expert",
    description:
      "Connect with your Ayurveda expert in a personal video consultation.",
    label: "Personal guidance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="13" height="14" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
        <circle cx="9.5" cy="10" r="2" />
        <path d="M6.5 16a3 3 0 0 1 6 0" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Follow at home",
    description:
      "Access your videos, texts and food plan through your guest portal.",
    label: "Everyday wellbeing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
        <path d="M15.5 5.9V4h3v4.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#EFE9C5] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full border border-[#21452B]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-24 h-48 w-48 rounded-full border border-[#21452B]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
              Your journey with Purana
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
            Simple steps.
            <span className="block italic text-[#9A7821]">
              More mindful living.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Beginning your Ayurveda journey doesn’t need to be complicated.
            We guide you through each step, from your first booking to
            bringing your programme into everyday life.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-16">
          {/* Connector line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t border-dashed border-[#9A7821]/50 lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2F5D39]/40 hover:shadow-xl hover:shadow-[#21452B]/10 sm:p-7"
              >
                {/* Number and icon */}
                <div className="relative flex items-center justify-between">
                  <span className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5] text-[#21452B] transition duration-300 group-hover:border-[#DFC24D] group-hover:bg-[#DFC24D]/30">
                    {step.icon}
                  </span>

                  <span className="font-serif text-3xl text-[#D8D0A9] transition-colors group-hover:text-[#DFC24D]">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="mt-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#9A7821]">
                    {step.label}
                  </span>

                  <h3 className="mt-2 font-serif text-xl text-[#21452B] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6B705C]">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-[#2F5D39] transition-all duration-300 group-hover:w-12" />
                  <span className="h-1 w-1 rounded-full bg-[#DFC24D]" />
                  <span className="h-1 w-1 rounded-full bg-[#D8D0A9]" />
                </div>

                {/* Mobile/tablet step connector */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-5 left-1/2 hidden h-5 border-l border-dashed border-[#9A7821]/40 sm:block lg:hidden"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Closing panel */}
        <div className="mt-8 flex flex-col gap-5 rounded-[24px] bg-[#21452B] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/15 text-[#DFC24D]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 21s-7-4.4-7-11V5l7-2 7 2v5c0 6.6-7 11-7 11Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl">
                Ready to begin your journey?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Choose the consultation or programme that feels right for you
                and take your first step towards a more mindful routine.
              </p>
            </div>
          </div>

          <a
            href="#consultation"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3.5 text-sm font-semibold text-[#21452B] transition hover:bg-[#E9D477]"
          >
            Explore consultations
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
