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

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-[#193b30]">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RetreatsSriLanka() {
  return (
    <section
      id="sri-lanka"
      className="bg-[#193b30] text-[#f4eee4]"
    >
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#e4ad3e]">
          02 · Sri Lanka
        </p>

        <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
          Retreats & Panchakarma in Sri Lanka
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80">
          Experience Ayurveda and the Hela Wedakama tradition where they
          have been practised for centuries. Choose traditional Panchakarma
          at our Ayurveda centre, or join a retreat organised and
          accompanied by our team.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-[#f4eee4] p-7 text-[#193b30]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#a36b17]">
              At our Ayurveda centre
            </p>

            <h3 className="mt-4 font-serif text-3xl">Panchakarma</h3>

            <p className="mt-4 text-sm leading-7 text-[#53675d]">
              The traditional Ayurvedic Panchakarma programme, carried
              out by experienced Ayurvedic doctors (BAMS) and therapists
              at our centre in [location], Sri Lanka.
            </p>

            <BenefitList items={panchakarmaBenefits} />

            <div className="mt-6 space-y-2 border-t border-[#ded4c3] pt-4 text-sm">
              {["[X] days", "[X] days", "[X] days"].map(
                (duration, index) => (
                  <p
                    key={`${duration}-${index}`}
                    className="flex justify-between gap-3"
                  >
                    <span>{duration}</span>
                    <strong>from €[PRICE]</strong>
                  </p>
                )
              )}
            </div>

            <a
              href="#contact"
              className="mt-5 block rounded-full bg-[#193b30] px-5 py-4 text-center text-sm font-semibold text-white hover:bg-[#2c5142]"
            >
              Book Panchakarma in Sri Lanka
            </a>
          </article>

          <article className="rounded-2xl bg-[#f4eee4] p-7 text-[#193b30]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#a36b17]">
              Organised by our team
            </p>

            <h3 className="mt-4 font-serif text-3xl">
              Retreats in Sri Lanka
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#53675d]">
              Small-group journeys accompanied by our team — Ayurveda
              treatments, yoga, cooking, culture and nature, all organised
              for you.
            </p>

            <BenefitList items={sriLankaRetreatBenefits} />

            <div className="mt-6 space-y-2 border-t border-[#ded4c3] pt-4 text-sm">
              {["[Retreat name] · [Dates]", "[Retreat name] · [Dates]"].map(
                (retreat, index) => (
                  <p
                    key={`${retreat}-${index}`}
                    className="flex justify-between gap-3"
                  >
                    <span>{retreat}</span>
                    <strong>€[PRICE]</strong>
                  </p>
                )
              )}
            </div>

            <a
              href="#contact"
              className="mt-5 block rounded-full bg-[#e4ad3e] px-5 py-4 text-center text-sm font-semibold text-[#193b30] hover:bg-[#f2c76e]"
            >
              See dates & register
            </a>
          </article>
        </div>

        <p className="mt-8 text-xs text-white/75">
          Members save 5% (Membership) or 10% (Premium) on retreats in Sri Lanka.
        </p>
      </div>
    </section>
  );
}