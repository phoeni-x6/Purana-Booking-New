import TreatmentCard from "@/components/retreats/steinberg/TreatmentCard";

const treatments = [
  {
    name: "Abhyanga",
    category: "Massage",
    duration: "75 min",
    price: "€65",
    image: "/images/treatments/abhyanga.jpg",
    description:
      "A traditional full-body oil massage designed to create a deeply relaxing and grounding experience.",
  }
];

export default function SteinbergTreatments() {
  return (
    <section
      id="individual-treatments"
      className="scroll-mt-20 bg-[#F8F5E8] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A6B25]">
              Option 01 · Individual treatments
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Find the treatment
              <span className="block text-[#9A6B25]">
                that feels right for you.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B705C]">
              Choose your treatment, explore the details and book a time
              directly. Each session offers an opportunity to pause and focus
              on your wellbeing.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8D0A9] bg-white px-4 py-3 text-xs text-[#52634F]">
            <span className="h-2 w-2 rounded-full bg-[#2F5D39]" />
            10 treatments to explore
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.name}
              {...treatment}
              bookingUrl="#contact"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 rounded-[24px] border border-[#E5DFC9] bg-[#EFE9D8] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A6B25]">
              Not sure where to begin?
            </p>
            <h3 className="mt-2 font-serif text-2xl text-[#21452B]">
              We can help you choose.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#6B705C]">
              Contact our team to discuss the available treatments and find an
              option that suits your preferences.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
          >
            Ask us a question
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}