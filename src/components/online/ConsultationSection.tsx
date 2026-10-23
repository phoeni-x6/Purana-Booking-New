
const practitioners = [
  {
    name: "Lakshani Perera",
    role: "Ayurveda-Gesundheitsberaterin · founder of Purana Ayurveda",
    description:
      "Certified Ayurvedic nutrition consultant, rooted in her family's Sri Lankan Ayurveda tradition. Languages: German & English.",
    price: "€45",
    button: "Book with Lakshani",
    photoColor: "bg-[#CBD4C4]",
    buttonStyle: "bg-[#1D3B30] text-white hover:bg-[#2A5041]",
  },
  {
    name: "Dr. Ishanka [surname]",
    role: "Ayurvedic doctor (BAMS) · our Ayurveda centre in Sri Lanka",
    description:
      "Ayurveda wellness advice in English, from a doctor trained in classical Ayurveda (Bachelor of Ayurvedic Medicine and Surgery). Language: English only.",
    price: "€[PRICE]",
    button: "Book with Dr. Ishanka",
    photoColor: "bg-[#DCCFB5]",
    buttonStyle:
      "border border-[#1D3B30] text-[#1D3B30] hover:bg-[#F4EFE5]",
  },
];

export default function ConsultationSection() {
  return (
    <section id="consultation" className="bg-[#F4EFE5]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Online consultation · 45 minutes · video call
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#142F27] sm:text-4xl">
          Understand what your body needs
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#52665C]">
          In your consultation we look at your Ayurvedic constitution
          and talk about prevention, food and daily routines — and you
          leave with clear, practical first steps.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#193B30]">
          {[
            "Your Ayurvedic constitution",
            "Prevention",
            "Food & daily routines",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#EAE1D1] px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {practitioners.map((person) => (
            <article
              key={person.name}
              className="flex flex-col rounded-2xl bg-white p-6 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-[10px] text-[#193B30] ${person.photoColor}`}
                >
                  [Photo]
                </div>

                <div>
                  <h3 className="font-semibold text-[#142F27]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#52665C]">
                    {person.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#40564B]">
                {person.description}
              </p>

              <a
                href="#booking"
                className="mt-4 w-fit text-sm font-medium text-[#142F27] underline underline-offset-4 hover:text-[#9A6115]"
              >
                View profile
              </a>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-3xl text-[#142F27]">
                    {person.price}
                  </span>
                  <span className="ml-2 text-sm text-[#52665C]">
                    / 45 min
                  </span>
                </div>

                <a
                  href="#booking"
                  className={`rounded-full px-5 py-3 text-center text-xs font-semibold transition sm:text-sm ${person.buttonStyle}`}
                >
                  {person.button}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-[#64746B]">
          Our online consultations are Ayurveda wellness advice for
          prevention, food and daily routines. They are not a medical
          treatment and do not replace a visit to your doctor.
        </p>
      </div>
    </section>
  );
}
