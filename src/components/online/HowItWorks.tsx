
const steps = [
  {
    number: "01",
    title: "Book online",
    description:
      "Choose a consultation or programme and pay securely.",
  },
  {
    number: "02",
    title: "Fill in your form",
    description:
      "Complete a short health questionnaire before your first call.",
  },
  {
    number: "03",
    title: "Meet your expert",
    description: "Your consultation takes place by video call.",
  },
  {
    number: "04",
    title: "Follow at home",
    description:
      "Access your videos, texts and food plan in your guest portal.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#EAE1D1]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-3xl text-[#142F27] sm:text-4xl">
          How it works
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number}>
              <div className="border-t border-[#193B30] pt-6">
                <span className="font-serif text-xl text-[#9A6115]">
                  {step.number}
                </span>

                <h3 className="mt-3 font-semibold text-[#142F27]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52665C]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
