import Image from "next/image";
import {
  ArrowDown,
  Leaf,
  Wind,
  Flame,
  Droplets,
  Mountain,
  Heart,
  Flower2,
  Sparkles,
  BookOpen,
  Sun,
} from "lucide-react";

const backgroundImage =
  "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/footer-bg.jpeg";

const elements = [
  {
    name: "Äther",
    sanskrit: "Akasha",
    description: "Raum, Offenheit und die Grundlage aller Existenz.",
    icon: Sparkles,
    color: "#dfc24d",
  },
  {
    name: "Luft",
    sanskrit: "Vayu",
    description: "Bewegung, Leichtigkeit und Kommunikation.",
    icon: Wind,
    color: "#c14c38",
  },
  {
    name: "Feuer",
    sanskrit: "Agni",
    description: "Transformation, Energie und Verdauung.",
    icon: Flame,
    color: "#dfc24d",
  },
  {
    name: "Wasser",
    sanskrit: "Jala",
    description: "Nährung, Verbindung und Anpassungsfähigkeit.",
    icon: Droplets,
    color: "#c14c38",
  },
  {
    name: "Erde",
    sanskrit: "Prithvi",
    description: "Stabilität, Struktur und Beständigkeit.",
    icon: Mountain,
    color: "#dfc24d",
  },
];

const doshas = [
  {
    name: "Vata",
    subtitle: "Das Prinzip der Bewegung",
    description:
      "Vata verbindet die Elemente Äther und Luft. Es steht für Bewegung, Nervensystem, Kreativität und die Dynamik des Lebens.",
    qualities: ["Bewegung", "Kreativität", "Nervensystem"],
    color: "#c14c38",
    number: "01",
  },
  {
    name: "Pitta",
    subtitle: "Das Prinzip der Transformation",
    description:
      "Pitta verbindet Feuer und Wasser. Es steht für Stoffwechsel, Verdauung, Energie und geistige Erkenntnis.",
    qualities: ["Verdauung", "Stoffwechsel", "Klarheit"],
    color: "#b18b20",
    number: "02",
  },
  {
    name: "Kapha",
    subtitle: "Das Prinzip der Stabilität",
    description:
      "Kapha verbindet Erde und Wasser. Es steht für Stabilität, Immunität, Ausdauer und Regeneration.",
    qualities: ["Stabilität", "Kraft", "Regeneration"],
    color: "#2f5d39",
    number: "03",
  },
];

const traditions = [
  {
    number: "01",
    title: "Pflanzenheilkunde",
    text: "Die Anwendung einheimischer Heilpflanzen und natürlicher Rezepturen zur Unterstützung des Wohlbefindens.",
  },
  {
    number: "02",
    title: "Chirurgie & Traumatologie",
    text: "Traditionelles Wissen über Verletzungen, körperliche Beschwerden und therapeutische Versorgung.",
  },
  {
    number: "03",
    title: "Regeneration",
    text: "Entgiftungs-, Aufbau- und Verjüngungskonzepte zur Förderung des natürlichen Gleichgewichts.",
  },
  {
    number: "04",
    title: "Präventivmedizin",
    text: "Individuelle Lebensstilberatung und frühzeitige Aufmerksamkeit für körperliche Veränderungen.",
  },
  {
    number: "05",
    title: "Ganzheitliche Gesundheit",
    text: "Die Verbindung von körperlichem Wohlbefinden, geistiger Balance und spiritueller Lebensführung.",
  },
];

const heritageFigures = [
  {
    name: "Pulastya Rishi",
    title: "Der Weise und Wissensbewahrer",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/Pulastya-Blog.jpg",
    text: "Nach sri-lankischer Überlieferung gilt Pulastya Rishi als einer der bedeutenden Träger kosmischen, medizinischen und spirituellen Wissens. Sein Name ist eng mit der überlieferten Wissenslinie der Insel verbunden.",
  },
  {
    name: "König Ravana",
    title: "Der Gelehrtenkönig",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/ayu4.jpeg",
    text: "In der traditionellen Überlieferung Sri Lankas wird König Ravana als Gelehrter und Meisterheiler verehrt. Ihm werden umfassende Kenntnisse in Pflanzenheilkunde, Diagnostik und traditionellen Heilverfahren zugeschrieben.",
  },
];

export default function AboutAyurveda() {
  return (
    <main className="overflow-hidden bg-[#efe9c5] text-[#533e23]">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#2f5d39]">
        <Image
          src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/booknowcard-bg.jpg"
          alt="Ruhige Ayurveda-Wellness-Atmosphäre"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#172e20]/95 via-[#203d2a]/80 to-[#203d2a]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#f2d76b]">
              <span className="h-px w-10 bg-[#f2d76b]" />
              Über Ayurveda
            </div>

            <h1 className="font-serif text-5xl leading-[1.1] text-[#fff8df] md:text-7xl lg:text-8xl">
              Die uralte
              <br />
              <span className="italic text-[#f2d76b]">
                Wissenschaft
              </span>
              <br />
              des Lebens
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#fff8df] md:text-lg">
              Eine jahrtausendealte Heiltradition, die den Menschen als
              Einheit von Körper, Geist, Seele und Natur versteht.
              Entdecken Sie die Wurzeln des Ayurveda und Sri Lankas
              einzigartiges medizinisches Erbe.
            </p>

            <a
              href="#ursprung"
              className="mt-10 inline-flex items-center gap-4 border border-[#f2d76b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#fff8df] transition hover:bg-[#dfc24d] hover:text-[#352719]"
            >
              Die Geschichte entdecken
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-xs font-medium uppercase tracking-[0.3em] text-[#fff8df] md:block">
          Wissen · Natur · Harmonie
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="ursprung" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
              01 — Ursprung & Philosophie
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
              Mehr als Medizin.
              <br />
              <span className="italic text-[#2f5d39]">
                Eine Lebensphilosophie.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#533e23]">
              <p>
                Ayurveda, bekannt als „Die Wissenschaft des Lebens“,
                ist eines der ältesten ganzheitlichen Gesundheitssysteme
                der Welt.
              </p>

              <p>
                Während seine Ursprünge im alten Indien liegen,
                entwickelte sich Sri Lanka über Jahrtausende hinweg
                zu einem eigenständigen Zentrum ayurvedischer Heilkunst.
                Hier entstand und bewahrte sich die Tradition des
                <strong className="text-[#2f5d39]"> Hela Wedakama.</strong>
              </p>

              <p>
                Ayurveda betrachtet den Menschen nicht isoliert,
                sondern als Teil eines größeren natürlichen Ganzen.
                Gesundheit entsteht durch Harmonie zwischen Körper,
                Geist, Seele und Umwelt.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-t-full">
              <Image
                src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/heroimg.jpg"
                alt="Natürliche Ayurveda-Heilpflanzen"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#21452b] text-center text-[#fff8df] shadow-xl">
              <Leaf size={25} className="mb-2 text-[#f2d76b]" />
              <span className="font-serif text-xl italic">Ayurveda</span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#fff8df]">
                Wissen des Lebens
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE ELEMENTS */}
      <section
        className="relative isolate overflow-hidden bg-[#2f5d39] px-6 py-24 text-[#fff8df] md:px-12 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 77, 46, 0.91), rgba(23, 60, 39, 0.94)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2d76b]">
              02 — Pancha Mahabhuta
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#fff8df] md:text-6xl">
              Die fünf Elemente
              <br />
              <span className="italic text-[#f2d76b]">
                des Ayurveda
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#fff8df]">
              Ayurveda lehrt, dass alles Leben aus fünf universellen
              Elementen besteht. Ihre individuelle Verbindung bildet
              die Grundlage unserer körperlichen und geistigen Konstitution.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {elements.map((element, index) => {
              const Icon = element.icon;

              return (
                <div
                  key={element.name}
                  className="group border border-[#fff8df]/30 bg-[#173c27]/90 p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#21452b]"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#f2d76b]">
                    0{index + 1}
                  </span>

                  <Icon
                    size={37}
                    strokeWidth={1.3}
                    className="my-10"
                    style={{ color: element.color }}
                  />

                  <h3 className="font-serif text-3xl text-[#fff8df]">
                    {element.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d76b]">
                    {element.sanskrit}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#fff8df]">
                    {element.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE DOSHAS */}
      <section
        className="relative isolate overflow-hidden px-6 py-24 md:px-12 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 233, 197, 0.94), rgba(239, 233, 197, 0.96)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
                03 — Tridosha
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
                Die drei Doshas
                <br />
                <span className="italic text-[#2f5d39]">
                  Lebensenergien
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-[#533e23]">
              Aus den fünf Elementen entstehen drei grundlegende
              Funktionsprinzipien. Vata, Pitta und Kapha beeinflussen
              unterschiedliche körperliche und geistige Prozesse.
              Ihr individuelles Gleichgewicht ist ein zentrales
              Konzept des Ayurveda.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {doshas.map((dosha) => (
              <div
                key={dosha.name}
                className="relative overflow-hidden border border-[#533e23]/20 bg-[#f8f3dc]/95 p-8 md:p-10"
              >
                <span
                  className="absolute right-6 top-4 font-serif text-7xl opacity-15"
                  style={{ color: dosha.color }}
                >
                  {dosha.number}
                </span>

                <div
                  className="mb-8 h-1 w-14"
                  style={{ backgroundColor: dosha.color }}
                />

                <h3 className="font-serif text-5xl text-[#533e23]">
                  {dosha.name}
                </h3>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#a83c2d]">
                  {dosha.subtitle}
                </p>

                <p className="mt-7 text-sm leading-8 text-[#533e23]">
                  {dosha.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {dosha.qualities.map((quality) => (
                    <span
                      key={quality}
                      className="border border-[#533e23]/30 bg-[#efe9c5] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#533e23]"
                    >
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-[#533e23]/25 pt-10 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl text-[#2f5d39]">
                Prakriti & Vikriti
              </h3>

              <p className="mt-4 text-sm leading-8 text-[#533e23]">
                Prakriti beschreibt die angeborene individuelle
                Konstitution eines Menschen. Vikriti hingegen zeigt
                den aktuellen Zustand und mögliche Abweichungen
                vom natürlichen Gleichgewicht.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#2f5d39] text-[#f2d76b]">
                <Heart size={29} />
              </div>

              <p className="font-serif text-xl italic leading-relaxed text-[#2f5d39]">
                Das Ziel ist es, das natürliche Gleichgewicht zu
                unterstützen und den Menschen in Einklang mit seiner
                individuellen Konstitution zu bringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SRI LANKA HERITAGE */}
      <section className="relative bg-[#533e23] text-[#fff8df]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[450px] md:min-h-[700px]">
            <Image
              src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/mihintale.jfif"
              alt="Historisches Erbe Sri Lankas"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#24180f]/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-8 md:left-12">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f2d76b]">
                Das Erbe einer Insel
              </span>
              <p className="mt-3 font-serif text-3xl text-white md:text-4xl">
                Sri Lanka
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2d76b]">
              04 — Medizinisches Erbe
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#fff8df] md:text-5xl">
              Sri Lanka –
              <br />
              <span className="italic text-[#f2d76b]">
                Ein Zentrum alten Wissens
              </span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#fff8df]">
              Sri Lankas medizinisches Erbe wird durch bedeutende
              archäologische Funde dokumentiert. Dazu gehören die
              historischen Krankenhausanlagen von Mihintale, die zu
              den ältesten bekannten medizinischen Einrichtungen
              der Welt zählen.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#fff8df]">
              Die Anlagen geben Einblicke in ein organisiertes
              Gesundheitssystem mit spezialisierten Behandlungsräumen,
              medizinischen Instrumenten, pflanzlichen Heilmitteln
              und präventiver Versorgung.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#fff8df]">
              Sie spiegeln eine Kultur wider, in der Medizin,
              Ethik, Spiritualität und Mitgefühl eng miteinander
              verbunden waren.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-[#fff8df]/30 pt-7">
              <BookOpen className="shrink-0 text-[#f2d76b]" size={27} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fff8df]">
                Jahrtausende medizinischer Überlieferung
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HELA WEDAKAMA */}
      <section
        className="relative isolate overflow-hidden px-6 py-24 md:px-12 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 233, 197, 0.93), rgba(239, 233, 197, 0.96)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
                05 — Die indigene Heiltradition
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
                Hela
                <br />
                <span className="italic text-[#2f5d39]">
                  Wedakama
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-[#533e23]">
                In der sri-lankischen Überlieferung gilt Hela
                Wedakama als eine Heiltradition mit sehr alten
                Ursprüngen, die teilweise auf mehr als 10.000 Jahre
                zurückgeführt werden. Dieses indigene Heilsystem
                entwickelte und bewahrte eine eigene Identität
                neben dem Ayurveda.
              </p>

              <p className="mt-5 text-base leading-8 text-[#533e23]">
                Sein Wissen verbindet die Natur, den menschlichen
                Körper und traditionelle Heilmethoden zu einem
                ganzheitlichen Verständnis von Gesundheit.
              </p>
            </div>

            <div className="relative h-[470px] overflow-hidden">
              <Image
                src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/SriLanka/retreat_srilanka.jpg"
                alt="Traditionelle Heilpflanzen und Kräuter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#173c27]/10" />
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-serif text-3xl text-[#533e23] md:text-4xl">
              Die Säulen des Hela Wedakama
            </h3>

            <div className="mt-10 grid gap-px bg-[#533e23]/20 sm:grid-cols-2 lg:grid-cols-5">
              {traditions.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#f8f3dc]/95 p-7 transition hover:bg-white"
                >
                  <span className="text-sm font-semibold text-[#a83c2d]">
                    {item.number}
                  </span>

                  <h4 className="mt-8 font-serif text-xl text-[#2f5d39]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[#533e23]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANCIENT KNOWLEDGE LINEAGE */}
      <section
        className="relative isolate overflow-hidden bg-[#efe2b5] px-6 py-24 md:px-12 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 226, 181, 0.91), rgba(239, 226, 181, 0.95)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
              06 — Die heilige Wissenslinie
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
              Von Pulastya Rishi
              <br />
              <span className="italic text-[#2f5d39]">
                zu König Ravana
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#533e23]">
              Nach sri-lankischer Überlieferung wurde das Wissen
              traditioneller Heilkunst über Generationen hinweg
              weitergegeben und von bedeutenden Persönlichkeiten
              bewahrt.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {heritageFigures.map((figure) => (
              <div
                key={figure.name}
                className="group overflow-hidden bg-[#fff8df]"
              >
                <div className="relative h-[390px] overflow-hidden">
                  <Image
                    src={figure.image}
                    alt={figure.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#24180f]/90 via-[#24180f]/20 to-transparent" />

                  <div className="absolute bottom-7 left-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d76b]">
                      {figure.title}
                    </p>
                    <h3 className="mt-2 font-serif text-4xl text-white">
                      {figure.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sm leading-8 text-[#533e23]">
                    {figure.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[#533e23]/25 pt-10 text-center">
            <p className="mx-auto max-w-3xl font-serif text-xl italic leading-relaxed text-[#2f5d39] md:text-2xl">
              Eine Wissenslinie, die in den Erzählungen Sri Lankas
              die Verbindung zwischen kosmischem Wissen,
              Naturheilkunde und menschlichem Wohlbefinden verkörpert.
            </p>
          </div>
        </div>
      </section>

      {/* KING RAVANA */}
      <section className="bg-[#2f5d39] px-6 py-24 text-[#fff8df] md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div className="relative order-2 h-[450px] overflow-hidden md:order-1">
            <Image
              src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/ayu4.jpeg"
              alt="Traditionelles kulturelles Erbe Sri Lankas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172e20]/35 to-transparent" />
          </div>

          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2d76b]">
              Traditionelle Überlieferung
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#fff8df] md:text-6xl">
              König Ravana
              <br />
              <span className="italic text-[#f2d76b]">
                und die Heilkunst
              </span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#fff8df]">
              In der ursprünglichen Heiltradition Sri Lankas,
              bekannt als Hela Wedakama, wird König Ravana
              außergewöhnliche medizinische Meisterschaft
              zugeschrieben. Er wird in der Überlieferung als
              Gelehrtenkönig und Meisterheiler verehrt.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Pflanzenheilkunde und Toxikologie",
                "Chirurgie und Traumatologie",
                "Kinderheilkunde und geistige Gesundheit",
                "Regenerations- und Verjüngungstherapien",
                "Nadi Pariksha – traditionelle Pulsdiagnose",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#fff8df]/30 pb-4"
                >
                  <span className="text-xs font-semibold text-[#f2d76b]">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium tracking-wide text-[#fff8df]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-l-2 border-[#f2d76b] pl-6">
              <h3 className="font-serif text-2xl italic text-[#f2d76b]">
                Nadi Pariksha
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#fff8df]">
                Die traditionelle Pulsuntersuchung spielt in
                bestimmten ayurvedischen Diagnoseansätzen eine
                wichtige Rolle. Sie dient der Einschätzung des
                individuellen Gleichgewichts der Doshas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KING BUDDHADASA */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
              07 — Königliche Ärzte
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
              König
              <br />
              <span className="italic text-[#2f5d39]">
                Buddhadasa
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-[#533e23]">
              Eine weitere bedeutende Persönlichkeit der
              traditionellen Medizin Sri Lankas war König
              Buddhadasa, der im 4. Jahrhundert n. Chr. lebte.
              Er gilt als einer der großen Arzt-Könige der Insel
              und als Förderer der einheimischen Heiltradition.
            </p>

            <p className="mt-5 text-base leading-8 text-[#533e23]">
              Ihm wird das medizinische Werk „Sarartha Sangrahaya“
              zugeschrieben, das in historischen Chroniken erwähnt
              wird. Es beschreibt medizinisches Wissen und
              Heilverfahren seiner Zeit und steht für die
              Entwicklung der traditionellen Medizin Sri Lankas.
            </p>

            <p className="mt-5 text-base leading-8 text-[#533e23]">
              Überlieferungen berichten zudem von einer
              medizinischen Versorgung, die während seiner
              Regentschaft auch der Bevölkerung zugänglich war.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-[#533e23]/25 pt-7">
              <BookOpen size={30} className="shrink-0 text-[#a83c2d]" />
              <p className="text-sm font-medium italic text-[#2f5d39]">
                Wissen bewahren. Heilen. Generationen verbinden.
              </p>
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden">
            <Image
              src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/ayu5.jpeg"
              alt="Historische Architektur und kulturelles Erbe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* LIVING TRADITION */}
      <section
        className="relative isolate overflow-hidden bg-[#533e23] px-6 py-28 text-center text-[#fff8df] md:px-12 md:py-36"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 43, 27, 0.91), rgba(62, 43, 27, 0.94)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#f2d76b]/25" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full border border-[#f2d76b]/25" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Flower2 size={42} strokeWidth={1} className="mx-auto text-[#f2d76b]" />

          <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.3em] text-[#f2d76b]">
            08 — Eine lebendige Tradition
          </span>

          <h2 className="mt-7 font-serif text-4xl leading-tight text-[#fff8df] md:text-6xl">
            Ayurveda –
            <br />
            <span className="italic text-[#f2d76b]">
              Wissen für Generationen
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#fff8df]">
            Ayurveda ist eine lebendige Tradition, deren
            Grundprinzipien Menschen bis heute begleiten.
            Das Verständnis der individuellen Konstitution,
            personalisierte Therapiekonzepte, präventive
            Lebensführung und das Leben im Einklang mit
            natürlichen Rhythmen bilden ihre Grundlage.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
            {[
              { icon: Heart, label: "Individuelle Balance" },
              { icon: Leaf, label: "Natürliche Harmonie" },
              { icon: Sun, label: "Bewusstes Leben" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="text-center">
                  <Icon
                    size={29}
                    strokeWidth={1.2}
                    className="mx-auto mb-4 text-[#f2d76b]"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#fff8df]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PURANA AYURVEDA CLOSING */}
      <section
        className="relative isolate overflow-hidden px-6 py-28 md:px-12 md:py-36"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 233, 197, 0.92), rgba(239, 233, 197, 0.95)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a83c2d]">
              Purana Ayurveda
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#533e23] md:text-6xl">
              Eine Brücke
              <br />
              zwischen uralter
              <br />
              <span className="italic text-[#2f5d39]">
                Weisheit und Gegenwart.
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-[#533e23]">
              Bei Purana Ayurveda wird diese Weisheit achtsam
              bewahrt und verantwortungsvoll in die Gegenwart
              übertragen.
            </p>

            <p className="mt-5 text-base leading-8 text-[#533e23]">
              Durch die Bewahrung und Weitergabe der ayurvedischen
              und Hela-Wedakama-Traditionen Sri Lankas möchten wir
              einen Raum schaffen, in dem jahrtausendealtes Wissen
              und moderne Lebensrealität zusammenfinden.
            </p>

            <p className="mt-5 text-base leading-8 text-[#533e23]">
              Ayurveda bedeutet nicht nur, Krankheit zu behandeln.
              Es bedeutet, die Zusammenhänge des Lebens zu verstehen
              und bewusst im Einklang mit sich selbst und der Natur
              zu leben.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[550px] overflow-hidden rounded-t-full">
              <Image
                src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/p3.jfif"
                alt="Ayurveda und ganzheitliche Entspannung bei Purana Ayurveda"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 bg-[#dfc24d] px-8 py-7 text-center text-[#352719] shadow-lg">
              <p className="font-serif text-3xl italic">
                Purana
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em]">
                Ayurveda · Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}