
const consultations = [
  {
    name: "Lakshani Perera",
    role: "Ayurveda-Gesundheitsberaterin · founder of Purana Ayurveda",
    description:
      "Certified Ayurvedic nutrition consultant, rooted in her family's Sri Lankan Ayurveda tradition. Languages: German & English.",
    price: "€45",
    button: "Book with Lakshani",
    featured: true,
    photoColor: "bg-[#CBD4C4]",
    initials: "LP",
    number: "01",
  },
  {
    name: "Dr. Ishanka [surname]",
    role: "Ayurvedic doctor (BAMS) · our Ayurveda centre in Sri Lanka",
    description:
      "Ayurveda wellness advice in English, from a doctor trained in classical Ayurveda (Bachelor of Ayurvedic Medicine and Surgery). Language: English only.",
    price: "€[PRICE]",
    button: "Book with Dr. Ishanka",
    featured: false,
    photoColor: "bg-[#DED2B9]",
    initials: "DI",
    number: "02",
  },
];

const topics = [
  "Your Ayurvedic constitution",
  "Prevention",
  "Food & daily routines",
];

export default function DeepResetDetails() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border border-[#D8D0A9]/50" />
      <div className="pointer-events-none absolute -right-20 top-28 h-56 w-56 rounded-full border border-[#D8D0A9]/40" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
              Online consultation · 45 minutes · video call
            </p>
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl lg:text-6xl">
            Understand what your body needs.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B705C] sm:text-base">
            In your consultation we look at your Ayurvedic constitution
            and talk about prevention, food and daily routines — and you
            leave with clear, practical first steps.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {topics.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D8D0A9]/70 bg-[#EFE9D9] px-4 py-2.5 text-xs font-medium text-[#52665C] sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Consultation cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {consultations.map((person) => (
            <article
              key={person.name}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#21452B]/5 sm:p-8 ${
                person.featured
                  ? "border-[#DFC24D]/70"
                  : "border-[#D8D0A9]/70"
              }`}
            >
              {person.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[#EFE9C5] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#21452B] sm:right-7 sm:top-7">
                  Founder
                </div>
              )}

              {/* Practitioner profile */}
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white ${person.photoColor} font-serif text-2xl text-[#21452B] shadow-md`}
                  aria-label={`Photo placeholder for ${person.name}`}
                >
                  {person.initials}
                </div>

                <div className="min-w-0 flex-1 pr-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A6115]">
                    Practitioner {person.number}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl leading-tight text-[#21452B] sm:text-3xl">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#6B705C]">
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-[#D8D0A9]/80" />

              <p className="text-sm leading-7 text-[#6B705C]">
                {person.description}
              </p>

              {/* Consultation details */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F8F5E8] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#6B705C]">
                    Duration
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#21452B]">
                    45 minutes
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F5E8] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#6B705C]">
                    Format
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#21452B]">
                    Video call
                  </p>
                </div>
              </div>

              {/* Price and actions */}
              <div className="mt-auto pt-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#6B705C]">
                      Consultation fee
                    </p>

                    <p className="mt-1 font-serif text-4xl text-[#21452B]">
                      {person.price}
                    </p>

                    <p className="mt-1 text-xs text-[#6B705C]">
                      Per 45-minute session
                    </p>
                  </div>

                  <a
                    href="#booking"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-center text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:px-6 ${
                      person.featured
                        ? "bg-[#21452B] text-white hover:bg-[#2F5D39]"
                        : "border border-[#21452B]/30 bg-white text-[#21452B] hover:border-[#21452B] hover:bg-[#F8F5E8]"
                    }`}
                  >
                    {person.button}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#6B705C] underline decoration-[#DFC24D] underline-offset-4 transition-colors hover:text-[#21452B]"
                >
                  View profile and booking details
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Wellness disclaimer */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D8D0A9]/70 bg-[#EFE9D9]/70 p-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-sm text-[#21452B]">
            i
          </span>

          <p className="text-xs leading-6 text-[#6B705C]">
            Our online consultations provide Ayurvedic wellness advice
            about prevention, food and daily routines. They are not a
            medical treatment and do not replace a visit to your doctor.
          </p>
        </div>
      </div>
    </section>
  );
}
