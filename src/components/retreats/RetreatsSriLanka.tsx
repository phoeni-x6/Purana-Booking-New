
const panchakarmaBenefits = [
  "Consultation with an Ayurvedic doctor on arrival",
  "Daily treatments according to your personal plan",
  "Ayurvedic meals, yoga and meditation",
  "Accommodation at the centre",
];

const sriLankaRetreatBenefits = [
  "Accompanied by Lakshani and the Purana team",
  "German- and English-speaking guidance",
  "Treatments, yoga and meditation every day",
  "Excursions to [places]",
];

const panchakarmaDurations = [
  { duration: "[X] days", price: "from €[PRICE]" },
  { duration: "[X] days", price: "from €[PRICE]" },
  { duration: "[X] days", price: "from €[PRICE]" },
];

const sriLankaRetreatOptions = [
  { name: "[Retreat name]", dates: "[Dates]", price: "€[PRICE]" },
  { name: "[Retreat name]", dates: "[Dates]", price: "€[PRICE]" },
];

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F5D39]/10 text-xs font-bold text-[#2F5D39]">
            ✓
          </span>
          <span className="text-sm leading-6 text-[#6B705C]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RetreatsSriLanka() {
  return (
    <section
      id="sri-lanka"
      className="relative isolate overflow-hidden bg-[#21452B] text-[#EFE9C5]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-[480px] w-[480px] rounded-full border border-[#EFE9C5]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full border border-dashed border-[#DFC24D]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-[400px] w-[400px] rounded-full bg-[#2F5D39]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#DFC24D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D] sm:text-xs">
              02 · Retreats in Sri Lanka
            </p>
          </div>

          <p className="mb-5 text-xs tracking-wide text-[#EFE9C5]/60">
            Traditional wisdom · Personal care · Meaningful experiences
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-5xl lg:text-6xl">
            Discover Ayurveda
            <span className="mt-1 block italic text-[#DFC24D]">
              in Sri Lanka.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-sm leading-8 text-[#EFE9C5]/80 sm:text-base">
            Experience Ayurveda and the Hela Wedakama tradition where they
            have been practised for centuries. Choose traditional Panchakarma
            at our Ayurveda centre, or join a retreat organised and accompanied
            by our team.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#panchakarma"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#EFE9C5]"
            >
              Explore Panchakarma
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#sri-lanka-group-retreats"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#EFE9C5]/30 px-6 py-3 text-sm font-medium text-[#EFE9C5] transition duration-300 hover:border-[#DFC24D] hover:text-[#DFC24D]"
            >
              Explore our retreats
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        {/* Retreat options */}
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {/* Panchakarma */}
          <article
            id="panchakarma"
            className="group relative overflow-hidden rounded-[26px] border border-[#DFC24D]/30 bg-[#F8F5E8] p-6 text-[#263A2B] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:p-9"
          >
            {/* Card decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#2F5D39]/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-dashed border-[#DFC24D]/30"
            />

            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                  At our Ayurveda centre
                </p>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/60 text-xl text-[#2F5D39]">
                  ✳
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Panchakarma
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                The traditional Ayurvedic Panchakarma programme, carried
                out by experienced Ayurvedic doctors (BAMS) and therapists
                at our centre in [location], Sri Lanka.
              </p>

              <div className="my-6 h-px bg-[#D8D0A9]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
                Your programme includes
              </p>

              <BenefitList items={panchakarmaBenefits} />

              {/* Duration and pricing */}
              <div className="mt-7 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
                  Choose your duration
                </p>

                <div className="space-y-3">
                  {panchakarmaDurations.map((option, index) => (
                    <div
                      key={`${option.duration}-${index}`}
                      className="flex items-center justify-between gap-3 border-b border-[#D8D0A9]/70 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-[#263A2B]">
                        {option.duration}
                      </span>
                      <strong className="whitespace-nowrap font-serif text-lg text-[#21452B]">
                        {option.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="group/button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-5 py-4 text-center text-sm font-semibold text-[#EFE9C5] transition duration-300 hover:bg-[#2F5D39]"
              >
                Book Panchakarma in Sri Lanka
                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>

          {/* Organised Sri Lanka retreats */}
          <article
            id="sri-lanka-group-retreats"
            className="group relative overflow-hidden rounded-[26px] border border-[#DFC24D]/30 bg-[#F8F5E8] p-6 text-[#263A2B] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:p-9"
          >
            {/* Card decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#C14C38]/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-dashed border-[#DFC24D]/30"
            />

            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                  Organised by our team
                </p>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/60 text-xl text-[#C14C38]">
                  ✦
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Retreats in Sri Lanka
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                Small-group journeys accompanied by our team — Ayurveda
                treatments, yoga, cooking, culture and nature, all organised
                for you.
              </p>

              <div className="my-6 h-px bg-[#D8D0A9]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
                Your retreat experience
              </p>

              <BenefitList items={sriLankaRetreatBenefits} />

              {/* Retreat dates and pricing */}
              <div className="mt-7 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
                  Upcoming retreats
                </p>

                <div className="space-y-4">
                  {sriLankaRetreatOptions.map((retreat, index) => (
                    <div
                      key={`${retreat.name}-${index}`}
                      className="flex items-center justify-between gap-3 border-b border-[#D8D0A9]/70 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#21452B]">
                          {retreat.name}
                        </p>
                        <p className="mt-1 text-xs text-[#6B705C]">
                          {retreat.dates}
                        </p>
                      </div>
                      <strong className="whitespace-nowrap font-serif text-lg text-[#21452B]">
                        {retreat.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="group/button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-5 py-4 text-center text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#E8D58A]"
              >
                See dates & register
                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>
        </div>

        {/* Membership note */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#EFE9C5]/15 bg-[#EFE9C5]/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg text-[#DFC24D]">✳</span>
            <div>
              <p className="text-sm font-semibold text-[#EFE9C5]">
                A little extra for our members
              </p>
              <p className="mt-1 text-xs leading-6 text-[#EFE9C5]/65">
                Members save 5% with Membership or 10% with Premium on
                retreats in Sri Lanka.
              </p>
            </div>
          </div>

          <a
            href="#membership"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#DFC24D] transition hover:text-[#EFE9C5]"
          >
            Explore membership
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Bottom brand accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
