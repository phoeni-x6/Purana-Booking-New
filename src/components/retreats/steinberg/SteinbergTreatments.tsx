
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
  },
];

export default function SteinbergTreatments() {
  return (
    <section
      id="individual-treatments"
      className="relative scroll-mt-20 overflow-hidden bg-[#f5f0e7] px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-26 h-[320px] w-[320px] rounded-full border border-[#DFC24D]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-[380px] w-[380px] rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Editorial introduction */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C14C38]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C14C38]">
                The art of Ayurveda · Steinberg am See
              </p>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
              01 / Individual treatments
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              A little time
              <span className="block italic text-[#9A8050]">
                just for you.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#533E23]/80 sm:text-base sm:leading-8">
              Discover traditional Ayurveda treatments designed to help you
              slow down, unwind and reconnect with yourself. Choose the
              experience that feels right for your moment.
            </p>
          </div>

          {/* Treatment count */}
          <div className="flex items-center gap-4 border-t border-[#21452B]/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span className="font-serif text-5xl text-[#9A8050]">10</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#21452B]">
                Experiences
              </p>
              <p className="mt-1 text-xs text-[#6B705C]">
                To explore and enjoy
              </p>
            </div>
          </div>
        </div>

        {/* Small editorial divider */}
        <div className="my-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#21452B]/15" />
          <span className="font-serif text-xl italic text-[#9A8050]">✳</span>
          <span className="h-px flex-1 bg-[#21452B]/15" />
        </div>

        {/* Treatment cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.name}
              className="group relative"
            >
              <div className="absolute -inset-2 rounded-[26px] border border-[#DFC24D]/0 transition-colors duration-300 group-hover:border-[#DFC24D]/60" />

              <div className="relative h-full">
                <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#21452B]/75 text-xs font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <TreatmentCard {...treatment} />
              </div>
            </div>
          ))}
        </div>

        {/* Explore more note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B705C]">
          <p>
            Each treatment is an invitation to take a moment for yourself.
          </p>
          <p className="font-semibold uppercase tracking-[0.16em] text-[#9A8050]">
            Discover · Relax · Restore
          </p>
        </div>

        {/* Contact banner */}
        <div className="relative mt-20 overflow-hidden rounded-[28px] bg-[#21452B] px-6 py-10 text-[#F8F5E8] sm:px-10 sm:py-12 lg:px-14">
          {/* Banner decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-36 h-[380px] w-[380px] rounded-full border border-[#DFC24D]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-20 h-[260px] w-[260px] rounded-full border border-[#DFC24D]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-[45%] h-64 w-64 rounded-full bg-[#2F5D39] blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#DFC24D]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#DFC24D]">
                  Your wellbeing comes first
                </p>
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Not sure where to begin?
                <span className="block italic text-[#DFC24D]">
                  Let's find your treatment.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                Every person is different. Get in touch with our team to
                discuss your preferences and find an experience that feels
                right for you.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition-all hover:-translate-y-1 hover:bg-[#EFE9C5]"
            >
              Talk to our team
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-serif text-lg italic text-[#533E23]/70">
            Take a breath. This moment is yours.
          </p>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
            Purana Ayurveda · Germany
          </span>
        </div>
      </div>
    </section>
  );
}
