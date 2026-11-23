
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
    eyebrow: "REGENERATION & BALANCE",
    title: "Ganzkörpermassage",
    treatment: "Sharierya Abhyanga",
    duration: "60 Min.",
    original: "340 €",
    price: "323 €",
    saving: "17 €",
    description:
      "Eine traditionelle ayurvedische Ganzkörpermassage, die zur Entspannung des Körpers beiträgt und das allgemeine Wohlbefinden unterstützt.",
  },
  {
    number: "02",
    eyebrow: "TIEFE ENTSPANNUNG",
    title: "Intensivmassage",
    treatment: "Intensive Abhyanga",
    detail: "Körper · Kopf · Füße",
    duration: "90 Min.",
    original: "480 €",
    price: "456 €",
    saving: "24 €",
    description:
      "Eine intensive Behandlung, die Körper-, Kopf- und Fußmassage miteinander verbindet und für ein besonders tiefes Entspannungserlebnis sorgt.",
  },
  {
    number: "03",
    eyebrow: "GEZIELTE LINDERUNG",
    title: "Intensive Rückenbehandlung",
    treatment: "Intensive Rücken- & Schulterbehandlung",
    detail: "Rückenbehandlung",
    duration: "60 Min.",
    original: "340 €",
    price: "323 €",
    saving: "17 €",
    description:
      "Eine gezielte Behandlung für Rücken und Schultern, die dabei hilft, Verspannungen zu lösen und das körperliche Wohlbefinden wiederherzustellen.",
  },
];

export default function TreatmentSeries() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Setzen Sie Ihren Weg fort
            </p>

            <h2 className="font-serif text-4xl text-[#2F5D39] md:text-5xl">
              Unsere 4er-Behandlungsserien
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#6B705C]">
              Machen Sie Selbstfürsorge zu einem festen Bestandteil Ihres
              Alltags. Buchen Sie vier Behandlungen gemeinsam und profitieren
              Sie von einem besonderen Paketpreis.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#D8D0A9] px-5 py-3">
            <span className="font-serif text-2xl text-[#2F5D39]">5 %</span>
            <span className="text-sm text-[#6B705C]">
              Ersparnis auf alle 4er-Serien
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
                  4 Termine
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
                <span>4 Behandlungen</span>
              </div>

              <p className="flex-1 text-sm leading-7 text-[#6B705C]">
                {item.description}
              </p>

              <div className="mt-8 border-t border-[#E5DEB7] pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-[#6B705C]">
                      Paketpreis
                    </p>

                    <p className="mt-1 font-serif text-3xl text-[#2F5D39]">
                      {item.price}
                    </p>

                    <p className="mt-1 text-sm text-[#6B705C] line-through">
                      {item.original}
                    </p>
                  </div>

                  <span className="rounded-full bg-[#EFE9C5] px-3 py-2 text-xs font-semibold text-[#2F5D39]">
                    {item.saving} sparen
                  </span>
                </div>
              </div>

              {/* BOOKING BUTTON */}
              <a
                href="/contact"
                className="group/button mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-5 py-4 text-center text-[11px] font-bold tracking-wide text-[#EFE9C5] transition duration-300 hover:-translate-y-1 hover:bg-[#21452B]"
              >
                JETZT ANFRAGEN & BUCHEN
                <span className="transition-transform group-hover/button:translate-x-1">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-[#6B705C]">
          Die vier Behandlungen werden gemeinsam gebucht und bezahlt.
          Die Termine können flexibel nach Ihren Bedürfnissen vereinbart
          werden, beispielsweise einmal im Monat. Bitte teilen Sie uns
          Ihre Wünsche bei der Buchung mit, damit wir Ihre Termine
          entsprechend planen können.
        </p>
      </div>
    </section>
  );
}
