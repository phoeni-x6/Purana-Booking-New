import Image from "next/image";

const chaletGuide = [
  {
    icon: "❄",
    title: "Klimaanlage & Heizung",
    description:
      "Information about the chalet's indoor climate, cooling and heating facilities.",
    details: [
      "The exact climate-control and heating facilities may vary by chalet type.",
      "For instructions on operating the equipment and recommended settings, please consult the information provided in your chalet or ask the resort reception.",
    ],
  },
  {
    icon: "▦",
    title: "Anreise & Abreise",
    description:
      "Everything you need to prepare for arrival and departure.",
    details: [
      "Plan your journey to inMotion CHALET Resort at Steinberger See.",
      "Please confirm the current check-in and check-out times with the resort before your arrival.",
      "For special arrival arrangements, contact the resort in advance.",
    ],
  },
  {
    icon: "⚑",
    title: "An der Rezeption & Im Chalet Verfügbar",
    description:
      "An overview of information and services available during your stay.",
    details: [
      "For questions about your reservation, chalet facilities or your stay, contact the resort directly.",
      "Check the information provided in your chalet for instructions about the accommodation and its facilities.",
      "Please confirm the current reception hours and available services before travelling.",
    ],
  },
  {
    icon: "☕",
    title: "Kaffeemaschine",
    description:
      "Coffee facilities for a relaxed start to your morning.",
    details: [
      "The Strandchalets are described as having a Nespresso capsule coffee machine.",
      "Equipment may vary by chalet category. Please confirm the coffee machine type and whether capsules are supplied for your selected accommodation.",
    ],
  },
  {
    icon: "⌂",
    title: "Ihr Wunsch-Chalet",
    description:
      "Choose the chalet category that suits your preferred stay.",
    details: [
      "Strandchalets: approximately 80 m², two double bedrooms, a private sauna with lake views and a terrace with whirlpool.",
      "Seechalet: two bedrooms, a living area with integrated kitchenette, a bathroom with sauna and a private terrace.",
      "Relaxchalets: two bedrooms, a private sauna with relaxation area and a covered outdoor whirlpool.",
      "All three chalet categories are described for four guests. Confirm any additional sleeping arrangements directly with the resort.",
    ],
  },
  {
    icon: "♧",
    title: "Hunde",
    description:
      "Information for guests planning a stay with their dog.",
    details: [
      "If you would like to bring a dog, please confirm the resort's current pet policy before booking.",
      "Ask about any additional fees, permitted areas and rules that apply to your chosen chalet.",
    ],
  },
  {
    icon: "♧",
    title: "Ausstattung & Freizeitmöglichkeiten",
    description:
      "Discover the facilities and ways to enjoy your time at the lake.",
    details: [
      "The published chalet descriptions include private terraces and access to the lake.",
      "Depending on the chalet category, facilities may include a sauna, whirlpool, television and Wi-Fi.",
      "The Steinberger See area offers opportunities to explore the surrounding natural landscape. Check local information for seasonal activities.",
    ],
  },
  {
    icon: "⌘",
    title: "Familie, Internet & Küche",
    description:
      "Useful information for families and guests preparing their stay.",
    details: [
      "The published descriptions list two bedrooms in each chalet category.",
      "The Strandchalets have a fully equipped kitchen with dishwasher, fridge-freezer, microwave, two induction cooking zones and a Nespresso capsule machine.",
      "A baby cot or sofa bed for a fifth person may be available in a Strandchalet for an additional charge. Confirm availability before booking.",
      "Wi-Fi is listed among the facilities. Please confirm the current internet arrangements and kitchen equipment for your chosen chalet.",
    ],
  },
  {
    icon: "◷",
    title: "Später Check-In & Später Check-Out",
    description:
      "Ask about arrival or departure outside the standard times.",
    details: [
      "Late arrival or late departure may require advance arrangements.",
      "Contact the resort before your stay to ask whether your requested time is possible and whether an additional fee applies.",
    ],
  },
  {
    icon: "⌖",
    title: "Parken & E-Ladestationen",
    description:
      "Plan your arrival by car and check electric vehicle charging options.",
    details: [
      "The resort is located at In d. Oder 15, 92449 Steinberg am See, Germany.",
      "Please ask the resort about parking arrangements, availability of EV charging stations and any applicable charges before travelling.",
    ],
  },
  {
    icon: "⇄",
    title: "Öffentliche Verkehrsmittel",
    description:
      "Information to help you plan a journey without a car.",
    details: [
      "Check current public transport connections to Steinberg am See before travelling.",
      "Routes, timetables and onward connections may change. Use an up-to-date journey planner and confirm local transfer options if needed.",
    ],
  },
  {
    icon: "♨",
    title: "Sauna",
    description:
      "Find out about the private sauna facilities in your chalet.",
    details: [
      "The Strandchalets have a private sauna with panoramic views of the lake.",
      "The Seechalet description includes a bathroom with sauna.",
      "The Relaxchalets feature a private sauna with an integrated relaxation room.",
      "Please consult the instructions provided at the resort for safe operation and usage guidance.",
    ],
  },
  {
    icon: "▤",
    title: "Abstellraum",
    description:
      "Ask about available storage for your personal belongings and equipment.",
    details: [
      "Storage arrangements may differ depending on the chalet category.",
      "If you need space for bicycles, outdoor equipment or bulky luggage, please confirm the available storage facilities with the resort.",
    ],
  },
  {
    icon: "☀",
    title: "Sommeraktivitäten",
    description:
      "Enjoy the lake and explore outdoor activities in the warmer months.",
    details: [
      "Steinberger See and the surrounding region offer a natural setting for outdoor recreation.",
      "Available activities, facilities and seasonal services can change throughout the year.",
      "Check local visitor information for current activities and conditions during your stay.",
    ],
  },
  {
    icon: "⌁",
    title: "Oberpfälzer Seenland",
    description:
      "Explore the lakes, countryside and attractions of the surrounding region.",
    details: [
      "The Oberpfälzer Seenland is a lake district in Bavaria with opportunities to explore nature and enjoy outdoor recreation.",
      "Discover local destinations, walking routes and seasonal attractions while planning your stay around Steinberger See.",
      "For current regional information, visit the official Oberpfälzer Seenland tourism website.",
    ],
  },
];

const chalets = [
  {
    number: "01",
    name: "Die Strandchalets",
    english: "The Strandchalets",
    image: "/images/chalets/strandchalet.jpg",
    description:
      "Das großzügige Chalet direkt am Wasser verbindet eleganten Komfort mit einem besonderen Blick auf den See.",
    facts: ["Ca. 80 m²", "4 Personen", "2 Doppelbetten"],
    features: [
      "Private Sauna mit Panoramablick auf den See",
      "Eigene Terrasse mit Whirlpool",
      "Direkter Seezugang",
      "Voll ausgestattete Küche",
      "Klimaanlage, Smart-TV und WLAN",
    ],
  },
  {
    number: "02",
    name: "Das Seechalet",
    english: "The Seechalet",
    image: "/images/chalets/seechalet.jpg",
    description:
      "Ein ruhiger Rückzugsort mit zwei Schlafzimmern, privater Terrasse und Sauna – eingebettet in die Natur.",
    facts: ["4 Personen", "2 Schlafzimmer", "Private Sauna"],
    features: [
      "Zwei separate Schlafzimmer",
      "Wohnzimmer mit integrierter Küchennische",
      "Badezimmer mit Sauna",
      "Private Terrasse",
      "WLAN und TV",
    ],
  },
  {
    number: "03",
    name: "Die Relaxchalets",
    english: "The Relaxchalets",
    image: "/images/chalets/relaxchalet.jpg",
    description:
      "Ein privater Wellnessbereich mit Sauna, Ruheraum und überdachtem Whirlpool macht diese Chalets zu einem besonderen Rückzugsort.",
    facts: ["4 Personen", "2 Schlafzimmer", "Wellnessbereich"],
    features: [
      "Private Sauna mit integriertem Ruheraum",
      "Überdachter Außenwhirlpool",
      "Wohnbereich mit Küchennische",
      "Terrasse für ruhige Momente",
      "WLAN und TV",
    ],
  },
];

export default function ChaletsPage() {
  return (
    <main className="overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--forest-dark)] text-[var(--cream)]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-[300px] w-[300px] rounded-full border border-[var(--gold)]/25" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[var(--forest)]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-[var(--container-width)] items-center gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_0.9fr] lg:px-14 lg:py-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[var(--gold)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                inMotion CHALET Resort · Steinberger See
              </p>
            </div>

            <h1 className="max-w-2xl font-[var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-tight text-[var(--cream)] sm:text-6xl lg:text-7xl">
              Ayurveda im{" "}
              <span className="text-[var(--gold)]">
                5-Sterne-Luxus-Chalet.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--cream)]/80 sm:text-lg">
              Natürlich Urlaub am Steinberger See in der Natur Bayerns.
              Entdecken Sie private Chalets, wohltuende Wellnessmomente und
              die Ruhe der bayerischen Seenlandschaft.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#unsere-chalets"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
              >
                Chalets entdecken
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#anfrage"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-white/5 hover:text-[var(--cream)]"
              >
                Jetzt anfragen
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-[var(--cream)]/75">
              <span>✳ Private Chalets</span>
              <span>✳ Sauna & Wellness</span>
              <span>✳ Urlaub am See</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-[var(--radius-xl)] border-r border-t border-[var(--gold)]/60 sm:-right-6 sm:-top-6" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--forest)]">
              <Image
                src="/images/chalets/chalet-hero.jpg"
                alt="Luxus-Chalets am Steinberger See"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/85 via-transparent to-[var(--forest-dark)]/10" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                  Natur · Ruhe · Privatsphäre
                </p>

                <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-normal text-[var(--cream)] sm:text-4xl">
                  Ein Ort zum Durchatmen
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--cream)]/80">
                  Zeit für sich selbst, entspannte Momente und die
                  Schönheit der Natur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Ihr Rückzugsort
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
              Weniger Alltag. Mehr Zeit für sich.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--text-muted)]">
            <p>
              Eingebettet in die Natur rund um den Steinberger See bietet
              das inMotion CHALET Resort unterschiedliche private
              Chalets für einen erholsamen Aufenthalt.
            </p>

            <p>
              Ob großzügiges Strandchalet, gemütliches Seechalet oder
              Relaxchalet mit privatem Wellnessbereich – entdecken Sie
              die Unterkunft, die zu Ihren Wünschen passt.
            </p>

            <p>
              Hier finden Sie Informationen zu den Chalettypen und einen
              praktischen Chalet-Guide. Für aktuelle Preise, Verfügbarkeit
              und Buchungsbedingungen wenden Sie sich bitte direkt an das
              Resort.
            </p>
          </div>
        </div>
      </section>

      {/* THREE CHALET TYPES */}
      <section
        id="unsere-chalets"
        className="border-y border-[var(--border)] bg-[var(--surface-dark)]/40 px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
                Unsere Unterkünfte
              </p>

              <h2 className="font-[var(--font-heading)] text-4xl font-normal text-[var(--forest-dark)] sm:text-5xl">
                Drei Chalets. Ihr persönlicher Rückzugsort.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
              Entdecken Sie die Besonderheiten der drei Chalettypen und
              finden Sie die passende Unterkunft für Ihren Aufenthalt.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {chalets.map((chalet) => (
              <article
                key={chalet.number}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-dark)]">
                  <Image
                    src={chalet.image}
                    alt={chalet.english}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/65 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[var(--forest-dark)]/70 font-[var(--font-heading)] text-sm text-[var(--gold)] backdrop-blur-sm">
                    {chalet.number}
                  </span>

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-[var(--forest-dark)]/65 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                    {chalet.facts[0]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--brown)]">
                    {chalet.english}
                  </p>

                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-normal text-[var(--forest-dark)]">
                    {chalet.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                    {chalet.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {chalet.facts.slice(1).map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)]"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[var(--border)] pt-5">
                    <p className="mb-4 text-sm font-semibold text-[var(--forest-dark)]">
                      Ausstattung
                    </p>

                    <ul className="space-y-3">
                      {chalet.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]"
                        >
                          <span className="mt-0.5 text-[var(--brown)]">
                            ✳
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#anfrage"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest)] hover:text-[var(--brown)]"
                  >
                    Chalet anfragen
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NATURE */}
      <section className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[var(--radius-xl)] border-l border-t border-[var(--gold)]/70 sm:-left-6 sm:-top-6" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--surface-dark)]">
              <Image
                src="/images/chalets/lakeside-nature.jpg"
                alt="Natur und Landschaft am Steinberger See"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Natur erleben
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
              Ein Rückzugsort umgeben von Natur.
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--text-muted)]">
              Eingebettet in eine ruhige, idyllische Umgebung lädt die
              Landschaft rund um den Steinberger See dazu ein, den Alltag
              hinter sich zu lassen und neue Eindrücke zu sammeln.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              Entdecken Sie die Seenlandschaft, genießen Sie Zeit im Freien
              und kehren Sie anschließend in die Ruhe Ihres Chalets zurück.
            </p>

            <a
              href="https://www.oberpfaelzer-seenland.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[var(--forest)] hover:text-[var(--brown)]"
            >
              Oberpfälzer Seenland entdecken
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FULL CHALET GUIDE ACCORDION */}
      <section
        id="chalet-guide"
        className="border-y border-[var(--border)] bg-[#F5F3ED] px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Gut vorbereitet ankommen
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal text-[var(--forest-dark)] sm:text-5xl">
              Ihr Chalet-Guide
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
              Alle wichtigen Themen rund um Ihren Aufenthalt an einem
              Ort. Öffnen Sie die einzelnen Bereiche, um mehr zu erfahren.
            </p>
          </div>

          <div className="space-y-3">
            {chaletGuide.map((item, index) => (
              <details
                key={item.title}
                className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-dark)] text-lg text-[var(--brown)] transition group-open:bg-[var(--forest-dark)] group-open:text-[var(--gold)]">
                    {item.icon}
                  </span>

                  <span className="flex-1 font-[var(--font-body)] text-base font-semibold leading-6 text-[var(--text)] sm:text-lg">
                    {item.title}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-[var(--forest-dark)] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="border-t border-[var(--border)] px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                  <p className="mb-4 text-sm leading-7 text-[var(--text-muted)]">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-7 text-[var(--text)]"
                      >
                        <span className="mt-0.5 text-[var(--brown)]">
                          ✳
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--cream)] p-5 sm:p-6">
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              <strong className="text-[var(--forest-dark)]">
                Haben Sie noch Fragen?
              </strong>{" "}
              Für verbindliche Angaben zu Ausstattung, Haustieren,
              Check-in-Zeiten, Parkmöglichkeiten und weiteren Bedingungen
              wenden Sie sich bitte direkt an das Resort.
            </p>
          </div>
        </div>
      </section>

      {/* ADDRESS AND LOCATION */}
      <section
        id="standort"
        className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--brown)]">
              Ihr Weg zu uns
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
              Ankommen am Steinberger See.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
              Entdecken Sie die Chalets des inMotion CHALET Resort in
              Steinberg am See, Bayern.
            </p>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-[var(--font-heading)] text-xl text-[var(--forest-dark)]">
                inMotion CHALET Resort
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                In d. Oder 15
                <br />
                92449 Steinberg am See
                <br />
                Deutschland
              </p>

              <a
                href="tel:+491759479619"
                className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[var(--forest)] hover:text-[var(--brown)]"
              >
                +49 175 9479619
              </a>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--forest-dark)] hover:text-white"
                >
                  Route planen ↗
                </a>

                <a
                  href="https://purana-ayurveda.de/chalets"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--forest)] px-6 py-3 text-sm font-semibold text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white"
                >
                  Chalet-Informationen
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-4">
            <iframe
              title="inMotion CHALET Resort am Steinberger See"
              src="https://maps.google.com/maps?q=In%20d.%20Oder%2015%2C%2092449%20Steinberg%20am%20See%2C%20Germany&z=14&output=embed"
              className="h-[340px] w-full rounded-[var(--radius-lg)] sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="anfrage" className="px-6 pb-20 pt-4 sm:px-10 sm:pb-24 lg:px-14">
        <div className="relative mx-auto max-w-[var(--container-width)] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--forest-dark)] px-7 py-12 text-center text-[var(--cream)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-6 -top-10 h-52 w-52 rounded-full border border-[var(--gold)]/25" />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--gold)]">
              Ihre Auszeit beginnt hier
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--cream)] sm:text-5xl">
              Finden Sie Ihr Wunsch-Chalet.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--cream)]/80">
              Sie haben Fragen oder möchten Ihren Aufenthalt planen?
              Kontaktieren Sie das Resort direkt, um Verfügbarkeit,
              Preise und Ihre bevorzugte Unterkunft zu besprechen.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+491759479619"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold text-[var(--forest-dark)] transition hover:-translate-y-0.5 hover:bg-[var(--surface-dark)] hover:text-[var(--forest-dark)]"
              >
                Jetzt anfragen
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#chalet-guide"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-white/5 hover:text-[var(--cream)]"
              >
                Chalet-Guide ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
