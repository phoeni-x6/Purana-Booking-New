
const panchakarmaBenefits = [
  "Beratung durch einen Ayurveda-Arzt bei Ihrer Ankunft",
  "Tägliche Behandlungen nach Ihrem persönlichen Therapieplan",
  "Ayurvedische Mahlzeiten, Yoga und Meditation",
  "Unterkunft im Ayurveda-Zentrum",
];

const sriLankaRetreatBenefits = [
  "Begleitung durch Lakshani und das Purana-Team",
  "Betreuung auf Deutsch und Englisch",
  "Tägliche Behandlungen, Yoga und Meditation",
  "Ausflüge zu [Orten]",
];

const panchakarmaDurations = [
  { duration: "[X] Tage", price: "ab €[PRICE]" },
  { duration: "[X] Tage", price: "ab €[PRICE]" },
  { duration: "[X] Tage", price: "ab €[PRICE]" },
];

const sriLankaRetreatOptions = [
  { name: "[Retreat-Name]", dates: "[Termine]", price: "€[PRICE]" },
  { name: "[Retreat-Name]", dates: "[Termine]", price: "€[PRICE]" },
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
      {/* Dekorativer Hintergrund */}
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
        {/* Abschnittseinführung */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/20 bg-[#F8F5E8]/75 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39]">
                02 · Retreats in Sri Lanka
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A8050]">
              Traditionelles Wissen · Persönliche Betreuung · Besondere Erlebnisse
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
              Entdecken Sie Ayurveda
              <span className="mt-1 block italic text-[#9A8050]">
                in Sri Lanka.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/85 sm:text-base">
              Erleben Sie Ayurveda und die Tradition des Hela Wedakama an
              ihrem Ursprungsort, wo sie seit Jahrhunderten praktiziert
              werden. Entscheiden Sie sich für eine traditionelle
              Panchakarma-Kur in unserem Ayurveda-Zentrum oder nehmen Sie
              an einem von unserem Team organisierten und begleiteten
              Retreat teil.
            </p>

            {/* Navigationsbuttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#panchakarma"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#21452B] px-6 py-4 text-sm font-semibold text-[#F8F5E8] shadow-lg shadow-[#21452B]/15 transition-all hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Panchakarma entdecken
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#sri-lanka-group-retreats"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#21452B]/30 bg-[#F8F5E8]/65 px-6 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition hover:border-[#21452B] hover:bg-[#EFE9C5]"
              >
                Unsere Retreats entdecken
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          {/* Einführungskarte */}
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
                    Eine Reise zurück ins Gleichgewicht
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B705C]">
                    Traditionelle ayurvedische Anwendungen, achtsame
                    Bewegung und besondere Erlebnisse im Herzen Sri Lankas.
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-[#D8D0A9]" />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="font-serif text-3xl text-[#21452B]">01</p>
                  <p className="mt-1 text-xs text-[#6B705C]">
                    Traditionelles Panchakarma
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#21452B]">02</p>
                  <p className="mt-1 text-xs text-[#6B705C]">
                    Organisierte Gruppen-Retreats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retreat-Angebote */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C14C38]">
              Wählen Sie Ihr Erlebnis
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#21452B] sm:text-4xl">
              Zwei Wege, Sri Lanka zu erleben
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B705C]">
              Ob Sie ein traditionelles Ayurveda-Programm oder ein
              vollständig organisiertes Retreat suchen – entdecken Sie
              ein Erlebnis, das zu Ihren persönlichen Bedürfnissen passt.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {/* Panchakarma-Karte */}
            <article
              id="panchakarma"
              className="group overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-[0_12px_40px_rgba(38,58,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,58,43,0.12)]"
            >
              {/* Bildbereich */}
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
                    In unserem Ayurveda-Zentrum
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#21452B]/20 text-xl text-[#DFC24D] backdrop-blur-sm">
                    ✳
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                    Traditionelles Ayurveda-Programm
                  </p>
                  <h3 className="font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                    Panchakarma
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F5E8]/80">
                    Eine individuell abgestimmte Ayurveda-Erfahrung,
                    begleitet von erfahrenen Fachkräften.
                  </p>
                </div>
              </div>

              {/* Karteninhalt */}
              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-[#6B705C]">
                  Das traditionelle ayurvedische Panchakarma-Programm wird
                  von erfahrenen Ayurveda-Ärzten (BAMS) und Therapeuten in
                  unserem Zentrum in [Ort], Sri Lanka, durchgeführt.
                </p>

                <div className="my-6 h-px bg-[#D8D0A9]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
                  Das erwartet Sie
                </p>

                <BenefitList items={panchakarmaBenefits} />

                {/* Dauer und Preise */}
                <div className="mt-8 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
                    Wählen Sie Ihre Aufenthaltsdauer
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
                  href="/contact"
                  className="group/button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-5 py-4 text-center text-sm font-semibold text-[#F8F5E8] transition duration-300 hover:bg-[#2F5D39]"
                >
                  Panchakarma in Sri Lanka buchen
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* Karte für organisierte Retreats */}
            <article
              id="sri-lanka-group-retreats"
              className="group overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-[0_12px_40px_rgba(38,58,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,58,43,0.12)]"
            >
              {/* Bildbereich */}
              <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#21452B] p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/SriLanka/retreat_srilanka.jpg')",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#162E20] via-[#21452B]/65 to-[#21452B]/15"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8F5E8] backdrop-blur-md">
                    Von unserem Team organisiert
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/50 bg-[#21452B]/20 text-xl text-[#DFC24D] backdrop-blur-sm">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                    Reisen in kleinen Gruppen
                  </p>
                  <h3 className="font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                    Retreats in Sri Lanka
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F5E8]/80">
                    Entdecken Sie Ayurveda, Kultur und Natur – begleitet
                    von unserem Team.
                  </p>
                </div>
              </div>

              {/* Karteninhalt */}
              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-[#6B705C]">
                  Begleitete Reisen in kleinen Gruppen mit Ayurveda-Behandlungen,
                  Yoga, Kochkursen sowie kulturellen und naturnahen Erlebnissen –
                  von unserem Team für Sie organisiert.
                </p>

                <div className="my-6 h-px bg-[#D8D0A9]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F5D39]">
                  Ihr Retreat-Erlebnis
                </p>

                <BenefitList items={sriLankaRetreatBenefits} />

                {/* Retreat-Termine und Preise */}
                <div className="mt-8 rounded-2xl border border-[#D8D0A9] bg-[#EFE9C5]/45 p-5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B705C]">
                    Kommende Retreats
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
                  href="/contact"
                  className="group/button mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-5 py-4 text-center text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#E8D58A]"
                >
                  Termine ansehen & anmelden
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>

        
      </div>

      {/* Dekorativer Markenabschluss */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
