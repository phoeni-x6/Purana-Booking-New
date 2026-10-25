
const practitioners = [
  {
    name: "Lakshani Perera",
    role: "Ayurveda-Gesundheitsberaterin · Founder of Purana Ayurveda",
    description:
      "Certified Ayurvedic nutrition consultant, rooted in her family's Sri Lankan Ayurveda tradition. Languages: German & English.",
    price: "€45",
    button: "Book with Lakshani",
    initials: "LP",
    photoColor: "bg-[#D8E1D2]",
    featured: true,
    language: "German & English",
  },
  {
    name: "Dr. Ishanka [surname]",
    role: "Ayurvedic Doctor (BAMS) · Ayurveda Centre, Sri Lanka",
    description:
      "Ayurveda wellness advice in English from a doctor trained in classical Ayurveda (Bachelor of Ayurvedic Medicine and Surgery).",
    price: "€[PRICE]",
    button: "Book with Dr. Ishanka",
    initials: "DI",
    photoColor: "bg-[#E6D8BD]",
    featured: false,
    language: "English",
  },
];

const topics = [
  "Your Ayurvedic constitution",
  "Prevention & wellbeing",
  "Food & daily routines",
];

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-12 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-56 w-56 rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
              Personal online consultations
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
            Understand what your body needs.
            <span className="mt-1 block italic text-[#9A7821]">
              Begin with a conversation.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Discover an approach to wellbeing inspired by Ayurveda.
            In a personal video consultation, explore your constitution,
            food choices and daily routines — and leave with practical
            first steps that fit your life.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/60 px-3.5 py-2 text-xs font-medium text-[#21452B] sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#6B705C]">
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE9C5] text-[#533E23]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              45-minute session
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE9C5] text-[#533E23]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m8 5 8 14M16 5 8 19" />
                </svg>
              </span>
              Online video call
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE9C5] text-[#533E23]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 21s7-4 7-11V5l-7-2-7 2v5c0 7 7 11 7 11Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Personal guidance
            </span>
          </div>
        </div>

        {/* Practitioner cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14">
          {practitioners.map((person) => (
            <article
              key={person.name}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                person.featured
                  ? "border-[#21452B] bg-white shadow-lg shadow-[#21452B]/10"
                  : "border-[#D8D0A9] bg-[#FDFBF4] shadow-sm hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Card accent */}
              <div
                className={`h-1.5 w-full ${
                  person.featured
                    ? "bg-gradient-to-r from-[#21452B] via-[#2F5D39] to-[#DFC24D]"
                    : "bg-gradient-to-r from-[#D8D0A9] via-[#DFC24D] to-[#C14C38]"
                }`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Profile */}
                <div className="flex items-start gap-4">
                  <div
                    className={`relative flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-2xl ${person.photoColor}`}
                  >
                    <div className="absolute inset-1.5 rounded-xl border border-white/60" />
                    <span className="font-serif text-2xl text-[#21452B]/80">
                      {person.initials}
                    </span>
                    <span className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#2F5D39]" />
                  </div>

                  <div className="min-w-0 flex-1 pt-1">
                    {person.featured && (
                      <span className="mb-2 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#9A7821]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
                        Founder & consultant
                      </span>
                    )}

                    <h3 className="font-serif text-xl leading-tight text-[#21452B] sm:text-2xl">
                      {person.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#6B705C] sm:text-sm">
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-[#D8D0A9]/70" />

                <p className="text-sm leading-7 text-[#52634F]">
                  {person.description}
                </p>

                {/* Language */}
                <div className="mt-5 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 shrink-0 text-[#9A7821]"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                  <span className="text-xs text-[#6B705C]">
                    Consultation language:
                  </span>
                  <span className="text-xs font-semibold text-[#21452B]">
                    {person.language}
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto pt-8">
                  <div className="mb-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8C73]">
                        Your session
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-serif text-4xl text-[#21452B]">
                          {person.price}
                        </span>
                        <span className="text-xs text-[#6B705C]">
                          / 45 min
                        </span>
                      </div>
                    </div>

                    <a
                      href="#booking"
                      className="mb-1 text-xs font-semibold text-[#533E23] underline decoration-[#DFC24D] underline-offset-4 transition hover:text-[#C14C38]"
                    >
                      View profile
                    </a>
                  </div>

                  <a
                    href="#booking"
                    className={`flex w-full items-center justify-center gap-3 rounded-full px-5 py-3.5 text-center text-sm font-semibold transition duration-300 ${
                      person.featured
                        ? "bg-[#21452B] text-white hover:bg-[#2F5D39]"
                        : "border border-[#21452B] bg-transparent text-[#21452B] hover:bg-[#EFE9C5]/60"
                    }`}
                  >
                    {person.button}
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
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex gap-3 rounded-2xl border border-[#D8D0A9]/80 bg-white/50 p-5 sm:p-6">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#533E23]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 7h.01" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#21452B]">
              A note about your consultation
            </h4>
            <p className="mt-1 text-xs leading-6 text-[#6B705C] sm:text-sm">
              These sessions provide Ayurveda wellness guidance relating
              to prevention, food and daily routines. They are not a
              medical diagnosis or treatment and do not replace
              consultation with your doctor.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
