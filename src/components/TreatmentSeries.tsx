
interface Treatment {
  number: string;
  eyebrow: string;
  title: string;
  treatment: string;
  detail?: string;
  duration: string;
  original: string;
  price: string;
  saving: string;
  description: string;
}

const treatments: Treatment[] = [
  {
    number: "01",
    eyebrow: "RESTORE & REBALANCE",
    title: "Full-Body Massage",
    treatment: "Sharierya Abhyanga",
    duration: "60 min",
    original: "€340",
    price: "€323",
    saving: "€17",
    description:
      "A traditional full-body Ayurvedic massage designed to relax the body and support overall well-being.",
  },
  {
    number: "02",
    eyebrow: "DEEP RELAXATION",
    title: "Intensive Massage",
    treatment: "Intensive Abhyanga",
    detail: "Body · Head · Feet",
    duration: "90 min",
    original: "€480",
    price: "€456",
    saving: "€24",
    description:
      "An intensive treatment combining body, head and feet massage for a deeply relaxing experience.",
  },
  {
    number: "03",
    eyebrow: "TARGETED RELIEF",
    title: "Intensive Back Treatment",
    treatment: "Intensive Back & Shoulder Treatment",
    detail: "Rückenbehandlung",
    duration: "60 min",
    original: "€340",
    price: "€323",
    saving: "€17",
    description:
      "A focused treatment for the back and shoulders, helping release tension and restore comfort.",
  },
];

export default function TreatmentSeries() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Continue your journey
            </p>
            <h2 className="font-serif text-4xl text-[#2F5D39] md:text-5xl">
              Our 4-session series
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#6B705C]">
              Make self-care a regular part of your routine. Book four
              treatments together and enjoy a special series price.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#D8D0A9] px-5 py-3">
            <span className="text-2xl font-serif text-[#2F5D39]">5%</span>
            <span className="text-sm text-[#6B705C]">
              Saving on all 4-session series
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {treatments.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col rounded-2xl border border-[#D8D0A9] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm tracking-widest text-[#C14C38]">
                  {item.number}
                </span>
                <span className="rounded-full bg-[#EFE9C5] px-3 py-1 text-xs font-medium text-[#533E23]">
                  4 appointments
                </span>
              </div>

              <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-[#6B705C]">
                {item.eyebrow}
              </p>

              <h3 className="font-serif text-2xl text-[#2F5D39]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-[#533E23]">
                {item.treatment}
              </p>

              {item.detail && (
                <p className="mt-1 text-sm text-[#6B705C]">
                  {item.detail}
                </p>
              )}

              <div className="my-6 flex items-center gap-2 border-y border-[#E5DEB7] py-4 text-sm text-[#6B705C]">
                <span>{item.duration}</span>
                <span>·</span>
                <span>4 sessions</span>
              </div>

              <p className="flex-1 text-sm leading-7 text-[#6B705C]">
                {item.description}
              </p>

              <div className="mt-8 border-t border-[#E5DEB7] pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-[#6B705C]">
                      Series price
                    </p>
                    <p className="mt-1 font-serif text-3xl text-[#2F5D39]">
                      {item.price}
                    </p>
                    <p className="mt-1 text-sm text-[#6B705C] line-through">
                      {item.original}
                    </p>
                  </div>

                  <span className="rounded-full bg-[#EFE9C5] px-3 py-2 text-xs font-semibold text-[#2F5D39]">
                    Save {item.saving}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-[#6B705C]">
          The four treatments are booked and paid for together. You can
          schedule them at intervals that suit you, for example once a
          month. Please let us know when booking so we can plan your
          appointments.
        </p>
      </div>
    </section>
  );
}
