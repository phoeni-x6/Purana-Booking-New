
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
      className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-[360px] w-[360px] rounded-full border border-dashed border-[#DFC24D]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[650px] h-96 w-96 rounded-full bg-[#EFE9C5]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Section introduction */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                02 · Retreats in Sri Lanka
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Traditional wisdom · Personal care · Meaningful experiences
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Discover Ayurveda
              <span className="mt-1 block italic text-[#9A8050]">
                in Sri Lanka.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/85 sm:text-base">
              Experience Ayurveda and the Hela Wedakama tradition where they
              have been practised for centuries. Choose traditional Panchakarma
              at our Ayurveda centre, or join a retreat organised and accompanied
              by our team.
            </p>

            {/* Destination buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#panchakarma"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Explore Panchakarma
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#sri-lanka-group-retreats"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/65 px-6 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition hover:border-[#21452B] hover:bg-[#EFE9C5]"
              >
                Explore our retreats
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          {/* Intro feature card */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#EFE9C5]/55 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#2F5D39]/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-dashed border-[#DFC24D]/40"
            />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-xl text-[#DFC24D]">
                  ✳
                </div>

                <div>
                  <p className="font-serif text-xl text-[#21452B] sm:text-2xl">
                    A journey back to balance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                    Traditional Ayurvedic care, mindful movement and
                    meaningful experiences in the heart of Sri Lanka.
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-[#D8D0A9]" />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="font-serif text-3xl text-[#21452B]">01</p>
                  <p className="mt-1 text-xs text-[#6B705C]">
                    Traditional Panchakarma
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#21452B]">02</p>
                  <p className="mt-1 text-xs text-[#6B705C]">
                    Organised group retreats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retreat options */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C14C38]">
              Choose your experience
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#21452B] sm:text-4xl">
              Two ways to experience Sri Lanka
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B705C]">
              Whether you are looking for a traditional Ayurveda programme
              or a fully organised retreat, discover an experience that
              suits your journey.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {/* Panchakarma card */}
            <article
              id="panchakarma"
              className="group overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-[0_12px_40px_rgba(38,58,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,58,43,0.12)]"
            >
              {/* Image header */}
              <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#21452B] p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=90')",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#162E20] via-[#21452B]/65 to-[#21452B]/15"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8F5E8] backdrop-blur-md">
                    At our Ayurveda centre
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#21452B]/20 text-xl text-[#DFC24D] backdrop-blur-sm">
                    ✳
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                    Traditional Ayurvedic programme
                  </p>
                  <h3 className="font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                    Panchakarma
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F5E8]/80">
                    A personalised Ayurvedic experience guided by experienced
                    practitioners.
                  </p>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-[#6B705C]">
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
                <div className="mt-8 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
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
                  className="group/button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-5 py-4 text-center text-sm font-semibold text-[#F8F5E8] transition duration-300 hover:bg-[#2F5D39]"
                >
                  Book Panchakarma in Sri Lanka
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* Organised retreats card */}
            <article
              id="sri-lanka-group-retreats"
              className="group overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-[0_12px_40px_rgba(38,58,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,58,43,0.12)]"
            >
              {/* Image header */}
              <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#21452B] p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=90')",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#162E20] via-[#21452B]/65 to-[#21452B]/15"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8F5E8] backdrop-blur-md">
                    Organised by our team
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#21452B]/20 text-xl text-[#DFC24D] backdrop-blur-sm">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                    Small-group journeys
                  </p>
                  <h3 className="font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                    Retreats in Sri Lanka
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F5E8]/80">
                    Discover Ayurveda, culture and nature with the support
                    of our team.
                  </p>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-[#6B705C]">
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
                <div className="mt-8 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
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
        </div>

        {/* Membership note */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] border border-[#D8D0A9] bg-[#EFE9C5]/55 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full border border-[#2F5D39]/10"
          />

          <div className="relative flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#21452B] text-lg text-[#DFC24D]">
              ✳
            </span>

            <div>
              <p className="font-serif text-xl text-[#21452B]">
                A little extra for our members
              </p>
              <p className="mt-2 max-w-xl text-xs leading-6 text-[#6B705C]">
                Members save 5% with Membership or 10% with Premium on
                retreats in Sri Lanka.
              </p>
            </div>
          </div>

          <a
            href="#membership"
            className="relative mt-5 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#2F5D39] transition hover:text-[#C14C38] sm:mt-0"
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
