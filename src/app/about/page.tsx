
import Link from "next/link";

const team = [
  {
    name: "Sarojani Perera",
    role: "Ayurvedische Küche",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    description:
      "Das Herz und die Seele unserer ayurvedischen Küche ist Sarojani Perera, liebevoll „Amma“ genannt. Schon seit ihrer Kindheit legt sie großen Wert darauf, ihre Familie mit frischen, ausgewogenen und vollwertigen Mahlzeiten zu versorgen.",
    details:
      "In Sri Lanka wird Wissen über Ernährung und Lebensmittel traditionell von Generation zu Generation weitergegeben. Das Verständnis für wärmende und kühlende Lebensmittel sowie deren Wirkung auf Verdauung und Gleichgewicht spielt auch in ihrer Küche eine wichtige Rolle.",
    closing:
      "Mit langjähriger Erfahrung, Hingabe und Liebe bereitet sie ayurvedische Mahlzeiten zu, die Körper und Geist nähren und das Wohlbefinden unserer Gäste unterstützen.",
  },
  {
    name: "Liyaniya Kumarage Pearl Perera",
    role: "Musik, Meditation & Klang",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
    description:
      "Ein wichtiger Bestandteil unserer Retreats ist die Kraft von Musik, Meditation und Klangheilung. Diese Tradition wird in unserer Familie seit Generationen weitergegeben.",
    details:
      "Mit dem indischen Harmonium begleitet er Meditationseinheiten, Mantra-Kreise und Klangheilungserlebnisse und schafft so einen Raum für Ruhe, Achtsamkeit und innere Balance.",
    closing:
      "Seine Musik hilft unseren Gästen, zur Ruhe zu kommen und eine tiefere Verbindung zu sich selbst aufzubauen – ein wesentlicher Bestandteil des Retreat-Erlebnisses bei Purana Ayurveda.",
  },
  {
    name: "Chaminda Perera",
    role: "Yogalehrer",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    description:
      "Chaminda Perera wurde in Sri Lanka geboren und kam schon früh mit Meditation und Kampfkunst in Berührung. Eine gesundheitliche Herausforderung im Jahr 2012 führte ihn dazu, seinen Weg zum Yoga zu vertiefen.",
    details:
      "Im Jahr 2021 schloss er am Isha Yoga Center in Indien ein Ausbildungsprogramm mit 1.750 Stunden ab und wurde zertifizierter Isha-Hatha-Yogalehrer.",
    closing:
      "Bei Purana Ayurveda unterrichtet er traditionelles Hatha-Yoga mit Klarheit, Achtsamkeit und Hingabe – als ganzheitlichen Weg zu Gesundheit, Balance und innerem Wachstum.",
  },
];

const values = [
  {
    number: "01",
    title: "Authentische Tradition",
    description:
      "Verwurzelt in den jahrhundertealten Heiltraditionen Sri Lankas und dem Wissen, das von unseren Vorfahren weitergegeben wurde.",
  },
  {
    number: "02",
    title: "Natürliches Wohlbefinden",
    description:
      "Natürliche Zutaten, bewusste Ernährung und achtsame Alltagsroutinen für einen gesünderen Lebensstil.",
  },
  {
    number: "03",
    title: "Ganzheitliche Balance",
    description:
      "Körper, Geist und Seele als Einheit verstehen und im Einklang mit der Natur leben.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8065]">
      <span className="h-px w-8 bg-[#C19A35]" />
      {children}
    </div>
  );
}

function TeamCard({
  person,
  index,
}: {
  person: (typeof team)[number];
  index: number;
}) {
  return (
    <article
      className={`group grid overflow-hidden rounded-[28px] border border-[#D8D0A9]/80 bg-[#F8F5E8] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#21452B]/10 ${
        index % 2 === 1
          ? "md:grid-cols-[0.85fr_1.15fr]"
          : "md:grid-cols-[1.15fr_0.85fr]"
      }`}
    >
      <div
        className={`relative min-h-[320px] overflow-hidden md:min-h-[430px] ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${person.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/50 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <span className="rounded-full border border-white/40 bg-[#F8F5E8]/90 px-4 py-2 text-xs font-medium text-[#21452B] backdrop-blur-sm">
            {person.role}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
        <SectionLabel>Unser Team</SectionLabel>

        <h3 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
          {person.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-[#A47D32]">
          {person.role}
        </p>

        <div className="mt-6 h-px w-14 bg-[#DFC24D]" />

        <p className="mt-6 text-sm leading-7 text-[#52665C]">
          {person.description}
        </p>

        <p className="mt-4 text-sm leading-7 text-[#52665C]">
          {person.details}
        </p>

        <p className="mt-4 text-sm leading-7 text-[#52665C]">
          {person.closing}
        </p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, #f5f0e7 0%, rgba(245,240,231,0.97) 25%, rgba(245,240,231,0.87) 45%, rgba(245,240,231,0.45) 68%, rgba(245,240,231,0.08) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f0e7] to-transparent" />

        <div className="pointer-events-none absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full border border-[#2F5D39]/15" />
        <div className="pointer-events-none absolute -right-12 -top-16 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/30" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-[#6B705C]">
              <Link href="/" className="transition hover:text-[#2F5D39]">
                Startseite
              </Link>
              <span className="text-[#C19A35]">/</span>
              <span className="font-medium text-[#2F5D39]">
                Über uns
              </span>
            </div>

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/80 px-4 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-[#2F5D39] shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#C19A35]" />
              UNSERE GESCHICHTE · UNSERE WURZELN
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
              Zeitlose Weisheit.
              <span className="mt-3 block font-normal italic text-[#A47D32]">
                Neu interpretiert.
              </span>
            </h1>

            <div className="mt-8 h-px w-20 bg-[#DFC24D]" />

            <p className="mt-8 max-w-xl text-base leading-8 text-[#52665C] sm:text-lg">
              Entdecken Sie die Menschen, Traditionen und Überzeugungen
              hinter Purana Ayurveda. Verwurzelt in Sri Lanka, inspiriert von
              der Natur und geschaffen für einen bewussten modernen Lebensstil.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#unsere-geschichte"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2F5D39] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#21452B]/10 transition hover:-translate-y-1 hover:bg-[#21452B]"
              >
                Unsere Geschichte
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#unser-team"
                className="inline-flex items-center gap-3 rounded-full border border-[#2F5D39]/25 bg-[#F8F5E8]/70 px-7 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition hover:border-[#DFC24D] hover:bg-[#EFE9C5]"
              >
                Lernen Sie unser Team kennen
              </a>
            </div>

            <div className="mt-14 flex items-center gap-4 border-t border-[#2F5D39]/15 pt-6">
              <span className="font-serif text-3xl text-[#A47D32]">2024</span>
              <div>
                <p className="font-serif text-base text-[#21452B]">
                  Gegründet mit einer bedeutungsvollen Vision
                </p>
                <p className="mt-1 text-xs text-[#6B705C]">
                  Ayurvedische Traditionen Sri Lankas für das moderne Leben
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="unsere-geschichte"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px]">
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/SriLanka/retreat_srilanka.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/35 to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-3 max-w-[230px] rounded-[22px] border border-[#DFC24D]/50 bg-[#F8F5E8] p-5 shadow-xl sm:-right-8">
              <p className="font-serif text-3xl text-[#21452B]">Sri Lanka</p>
              <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                Unsere Heimat. Unsere Wurzeln. Unsere Inspiration.
              </p>
            </div>

            <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full border border-[#DFC24D]/50" />
          </div>

          <div className="pt-5 lg:pt-0">
            <SectionLabel>Über Purana Ayurveda</SectionLabel>

            <h2 className="font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Eine Verbindung zwischen
              <span className="block font-normal italic text-[#A47D32]">
                Tradition und Moderne.
              </span>
            </h2>

            <div className="mt-7 h-px w-16 bg-[#DFC24D]" />

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#52665C] sm:text-base">
              <p>
                Purana Ayurveda wurde 2024 gegründet und verbindet
                authentische ayurvedische Traditionen mit einem modernen,
                bewussten Lebensstil. Unser Ziel ist es, die Essenz des
                ganzheitlichen Wohlbefindens zugänglich zu machen und
                alltagstauglich zu vermitteln.
              </p>

              <p>
                Als Schwesterunternehmen von Nivartana, einer Marke, die für
                hochwertige Gewürze und handgefertigte Produkte aus Sri Lanka
                bekannt ist, bringen wir das tief verwurzelte kulturelle
                Wissen des Ayurveda in das moderne Leben.
              </p>

              <p>
                Verwurzelt in den jahrhundertealten Heiltraditionen Sri Lankas
                verstehen wir Ayurveda nicht nur als Philosophie, sondern
                als lebendige Praxis. Im Mittelpunkt stehen natürliche
                Zutaten, achtsame Routinen und ein nachhaltiges Gleichgewicht
                zwischen Körper, Geist und Seele.
              </p>

              <p>
                Unser Ziel ist es, Menschen auf ihrem persönlichen Weg zu
                mehr Klarheit, Vitalität und innerer Harmonie zu begleiten –
                sanft, natürlich und mit Sinn.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-[#DFC24D] pl-5 font-serif text-xl italic leading-relaxed text-[#21452B] sm:text-2xl">
              Purana Ayurveda – zeitlose Weisheit, neu interpretiert für das
              moderne Leben.
            </p>

            <div className="mt-9">
              <Link
                href="https://nivartana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D39] underline decoration-[#DFC24D] underline-offset-4 transition hover:text-[#C14C38]"
              >
                Nivartana entdecken
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="border-y border-[#D8D0A9]/70 bg-[#EFE9C5]/50 px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Was uns auszeichnet</SectionLabel>
            <h2 className="font-serif text-3xl text-[#21452B] sm:text-4xl">
              Ayurveda als Lebensweise.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-[24px] border border-[#D8D0A9] bg-[#F8F5E8]/80 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#21452B]/5 sm:p-9"
              >
                <span className="font-serif text-3xl italic text-[#C19A35]">
                  {value.number}
                </span>

                <h3 className="mt-6 font-serif text-2xl text-[#21452B]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-12 bg-[#DFC24D]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <SectionLabel>Unsere Gründerin</SectionLabel>

              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
                Eine persönliche Reise,
                <span className="block font-normal italic text-[#A47D32]">
                  ein Vermächtnis über Generationen.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C] lg:justify-self-end">
              Lernen Sie Lakshani Perera kennen – die Frau hinter Purana
              Ayurveda und Nivartana, die unsere Philosophie mit Leben füllt.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[30px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[430px] overflow-hidden lg:min-h-[650px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/founder.webp')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/65 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-3xl text-white">
                  Lakshani Perera
                </p>
                <p className="mt-2 text-sm text-white/85">
                  Gründerin von Purana Ayurveda &amp; Nivartana
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <SectionLabel>Meine Geschichte</SectionLabel>

              <h3 className="font-serif text-3xl text-[#21452B] sm:text-4xl">
                Lernen Sie unsere Gründerin kennen
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2F5D39]/15 bg-[#EFE9C5]/60 px-3 py-2 text-xs text-[#52665C]">
                  Zertifizierte Ayurveda-Ernährungsberaterin
                </span>
                <span className="rounded-full border border-[#2F5D39]/15 bg-[#EFE9C5]/60 px-3 py-2 text-xs text-[#52665C]">
                  Ayurveda-Beraterin
                </span>
              </div>

              <div className="mt-7 space-y-5 text-sm leading-8 text-[#52665C] sm:text-base">
                <p>
                  Ich bin in Sri Lanka aufgewachsen und kam schon früh mit
                  den traditionellen Heilpraktiken unserer Kultur in
                  Berührung. Mein Urgroßvater war ein traditioneller Heiler,
                  der sein Wissen über Generationen hinweg weitergab und
                  es in handgeschriebenen Aufzeichnungen bewahrte. Dieses
                  Erbe und die Geschichten meiner Familie begleiten mich
                  bis heute.
                </p>

                <p>
                  Mein Weg zum Ayurveda begann jedoch nicht sofort. Durch
                  persönliche Erfahrungen – die Überwindung starker Allergien
                  und Verdauungsbeschwerden sowie die Beobachtung, wie
                  natürliche Heilmittel anderen Menschen zu mehr Wohlbefinden
                  verhalfen – entwickelte ich ein tiefes Interesse an dieser
                  jahrtausendealten Weisheit.
                </p>

                <p>
                  Diese Erfahrungen haben mich so sehr bewegt, dass ich mich
                  2021 bewusst dazu entschied, meinen bisherigen Bildungsweg
                  zu verlassen und Ayurveda zu studieren. Heute bin ich
                  dankbar, dieses Wissen weitergeben und Menschen auf ihrem
                  Weg zu mehr Gesundheit und Wohlbefinden unterstützen zu
                  dürfen.
                </p>

                <p>
                  Ich glaube daran, dass wahre Balance entsteht, wenn Körper,
                  Geist und Seele im Einklang mit der Natur sind. Dieser
                  Überzeugung prägt bis heute meine Arbeit und meinen
                  persönlichen Zugang zum Ayurveda.
                </p>
              </div>

              <div className="mt-8 border-t border-[#D8D0A9] pt-7">
                <p className="font-serif text-xl italic text-[#21452B]">
                  „Wahre Balance beginnt, wenn Körper, Geist und Seele im
                  Einklang mit der Natur sind.“
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg text-[#21452B]">
                      Lakshani Perera
                    </p>
                    <p className="mt-1 text-xs text-[#8A8065]">
                      Gründerin von Purana Ayurveda
                    </p>
                  </div>

                  <span className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/60 px-4 py-2 text-xs text-[#52665C]">
                    Deutsch &amp; Englisch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM 
      <section
        id="unser-team"
        className="scroll-mt-24 border-y border-[#D8D0A9]/70 bg-[#EFE9C5]/35 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>Die Menschen hinter Purana</SectionLabel>

            <h2 className="font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              Ein Team, verbunden
              <span className="block font-normal italic text-[#A47D32]">
                durch Tradition.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#6B705C] sm:text-base">
              Hinter Purana Ayurveda steht eine Familie, die ihr Wissen,
              ihre Erfahrung und ihre Leidenschaft für ganzheitliches
              Wohlbefinden miteinander teilt.
            </p>
          </div>

          <div className="space-y-8">
            {team.map((person, index) => (
              <TeamCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* VISION & MISSION */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#DFC24D]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <SectionLabel>Wofür wir stehen</SectionLabel>
            <h2 className="font-serif text-4xl text-[#21452B] sm:text-5xl">
              Unsere Vision &amp; Mission
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] p-8 sm:p-11">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#DFC24D]/40" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A47D32]">
                01 · Unsere Vision
              </span>

              <h3 className="mt-6 font-serif text-3xl text-[#21452B] sm:text-4xl">
                Eine Welt im Gleichgewicht.
              </h3>

              <div className="mt-6 h-px w-14 bg-[#DFC24D]" />

              <p className="mt-7 text-sm leading-8 text-[#52665C] sm:text-base">
                Wir stellen uns eine Welt vor, in der altes Wissen und modernes
                Leben zusammenfinden, um Balance und Vitalität zu fördern.
                Indem wir uns wieder mit der zeitlosen Heilkraft der Natur
                verbinden, möchten wir eine Zukunft gestalten, in der
                ganzheitliches Wohlbefinden für alle zugänglich ist und
                die Harmonie zwischen Mensch und Natur wiederhergestellt wird.
              </p>

              <div className="mt-10 font-serif text-5xl italic text-[#DFC24D]">
                Balance
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[28px] bg-[#21452B] p-8 text-[#F8F5E8] shadow-xl shadow-[#21452B]/10 sm:p-11">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#DFC24D]/25" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#2F5D39]/70 blur-2xl" />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                  02 · Unsere Mission
                </span>

                <h3 className="mt-6 font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                  Wissen bewahren. Wohlbefinden fördern.
                </h3>

                <div className="mt-6 h-px w-14 bg-[#DFC24D]" />

                <p className="mt-7 text-sm leading-8 text-[#F8F5E8]/80 sm:text-base">
                  Unsere Mission ist es, ganzheitliches Wohlbefinden zu
                  fördern, indem wir die zeitlose Weisheit des Ayurveda
                  bewahren und weitergeben. Verwurzelt in den alten Traditionen
                  Sri Lankas unterstützen wir Menschen dabei, durch natürliche
                  und nachhaltige Praktiken Harmonie zwischen Körper, Geist
                  und Seele zu finden.
                </p>

                <p className="mt-5 text-sm leading-8 text-[#F8F5E8]/80 sm:text-base">
                  Mit authentischen Produkten, wertvollem Wissen und
                  achtsamen Erlebnissen schaffen wir eine tiefere Verbindung
                  zur Natur und begleiten Menschen auf ihrem Weg zu
                  langfristiger Gesundheit und Vitalität.
                </p>

                <div className="mt-8 font-serif text-5xl italic text-[#DFC24D]">
                  Natürlich leben
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    
      
    </main>
  );
}
