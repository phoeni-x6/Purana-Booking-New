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
  },
];

export default function DeepResetDetails() {
  return (
    <section className="bg-[#F4EFE5] text-[#142F27]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
          Online consultation · 45 minutes · video call
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Understand what your body needs
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#52665C]">
          In your consultation we look at your Ayurvedic constitution and talk
          about prevention, food and daily routines — and you leave with clear,
          practical first steps.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Your Ayurvedic constitution",
            "Prevention",
            "Food & daily routines",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#EAE1D1] px-3 py-2 text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {consultations.map((person) => (
            <article
              key={person.name}
              className="flex flex-col rounded-3xl bg-white p-6 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${person.photoColor} text-[10px]`}
                >
                  [Photo]
                </div>

                <div>
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#52665C]">
                    {person.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#52665C]">
                {person.description}
              </p>

              <a
                href="#booking"
                className="mt-5 w-fit text-sm font-medium underline underline-offset-4"
              >
                View profile
              </a>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-3xl">{person.price}</span>
                  <span className="ml-2 text-xs text-[#52665C]">/ 45 min</span>
                </div>

                <a
                  href="#booking"
                  className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                    person.featured
                      ? "bg-[#1D3B30] text-white hover:bg-[#2D5142]"
                      : "border border-[#1D3B30] text-[#142F27] hover:bg-[#F4EFE5]"
                  }`}
                >
                  {person.button}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-[#64746B]">
          Our online consultations are Ayurveda wellness advice for prevention,
          food and daily routines. They are not a medical treatment and do not
          replace a visit to your doctor.
        </p>
      </div>
    </section>
  );
}