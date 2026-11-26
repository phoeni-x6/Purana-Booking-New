
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Behandlungen & Retreats",
    text: "Traditionelle Ayurveda-Therapien und individuelle Betreuung in Deutschland.",
    href: "/retreats/steinberg-am-see",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/DSC_7259_auswahl.jpg",
  },
  {
    number: "02",
    title: "Online-Beratung",
    text: "Persönliche Beratung und Begleitung durch erfahrene Ayurveda-Praktiker.",
    href: "/online",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/pic.jfif",
  },
  {
    number: "03",
    title: "Detox für zu Hause",
    text: "Sanfte, begleitete Programme für mehr Balance und Wohlbefinden im Alltag.",
    href: "/online/gentle-reset",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Erholsame Retreats",
    text: "Gönnen Sie sich eine bewusste Auszeit in Deutschland oder Sri Lanka.",
    href: "/retreats/germany",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/DSC_7207_auswahl.jpg",
  },
  {
    number: "05",
    title: "Regelmäßige Gesundheitsvorsorge",
    text: "Ayurveda setzt auf Vorbeugung: Gesundheit zu erhalten und das Wohlbefinden langfristig zu stärken.",
    href: "/packages-series",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Kostenlos Ayurveda entdecken",
    text: "Erfahren Sie mehr über Doshas, ayurvedische Rituale, Podcasts und inspirierende Beiträge.",
    href: "/online/ebooks",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#EFE9C5] py-24 md:py-28">

      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#DFC24D]/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full border border-[#DFC24D]/30"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C14C38]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C14C38] sm:text-xs">
                Ayurveda an einem Ort entdecken
              </p>
            </div>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-[#533E23] sm:text-5xl md:text-6xl">
              Ein wenig mehr Balance,
              <span className="mt-2 block italic text-[#A47B25]">
                in jedem Lebensbereich.
              </span>
            </h2>
          </div>

          <div className="relative pb-2 lg:pl-8">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#DFC24D] to-transparent lg:block" />

            <p className="max-w-md text-sm leading-8 text-[#6B705C] sm:text-base">
              Finden Sie Ihren persönlichen Weg zu mehr Wohlbefinden – mit
              achtsamer Betreuung, traditionellem Wissen und Angeboten, die
              ganz auf Sie abgestimmt sind.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Entdecken Sie unsere Angebote
            </div>
          </div>
        </div>
      </div>

      {/* Infinite services slider */}
      <div className="relative">

        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#EFE9C5] to-transparent sm:w-24 lg:w-36" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#EFE9C5] to-transparent sm:w-24 lg:w-36" />

        <div className={`${styles.marquee} overflow-hidden`}>

          <div className={`${styles.track} flex w-max gap-5 px-3`}>

            {/* First set */}
            {services.map((service) => (
              <a
                href={service.href}
                key={service.number}
                className={`${styles.card} group relative isolate flex h-[400px] w-[285px] flex-col justify-between overflow-hidden rounded-2xl border border-[#533E23]/15 bg-[#533E23] p-7 shadow-md transition-all duration-500 hover:shadow-2xl sm:h-[430px] sm:w-[340px] sm:p-8`}
              >
                {/* Background image */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-b from-[#533E23]/25 via-[#533E23]/50 to-[#533E23]/95"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-[#DFC24D]/15 via-transparent to-[#533E23]/30"
                />

                {/* Top content */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#DFC24D]/20 font-serif text-xl italic text-[#DFC24D] backdrop-blur-sm transition duration-500 group-hover:rotate-12 group-hover:bg-[#DFC24D]/30">
                    ✳
                  </span>

                  <span className="font-serif text-3xl italic text-[#EFE9C5]/70">
                    {service.number}
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <div className="mb-5 h-px w-10 bg-[#DFC24D] transition-all duration-500 group-hover:w-20" />

                  <h3 className="max-w-xs font-serif text-3xl leading-tight text-[#EFE9C5]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#EFE9C5]/80">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EFE9C5]/25 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                      Angebot entdecken
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFC24D]/60 text-lg text-[#DFC24D] transition-all duration-300 group-hover:border-[#DFC24D] group-hover:bg-[#DFC24D] group-hover:text-[#533E23]">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Duplicate set for seamless looping */}
            {services.map((service) => (
              <a
                href={service.href}
                key={`duplicate-${service.number}`}
                aria-hidden="true"
                tabIndex={-1}
                className={`${styles.card} group relative isolate flex h-[400px] w-[285px] flex-col justify-between overflow-hidden rounded-2xl border border-[#533E23]/15 bg-[#533E23] p-7 shadow-md transition-all duration-500 hover:shadow-2xl sm:h-[430px] sm:w-[340px] sm:p-8`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-b from-[#533E23]/25 via-[#533E23]/50 to-[#533E23]/95"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-[#DFC24D]/15 via-transparent to-[#533E23]/30"
                />

                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFC24D]/60 bg-[#DFC24D]/20 font-serif text-xl italic text-[#DFC24D]">
                    ✳
                  </span>

                  <span className="font-serif text-3xl italic text-[#EFE9C5]/70">
                    {service.number}
                  </span>
                </div>

                <div>
                  <div className="mb-5 h-px w-10 bg-[#DFC24D]" />

                  <h3 className="max-w-xs font-serif text-3xl leading-tight text-[#EFE9C5]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#EFE9C5]/80">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EFE9C5]/25 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
                      Angebot entdecken
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFC24D]/60 text-lg text-[#DFC24D]">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>

      {/* Slider footer */}
      <div className="relative mx-auto mt-12 flex max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#C14C38]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6B705C] sm:text-[10px]">
            Unsere Angebote
          </span>
        </div>

        <span className="font-serif text-lg italic text-[#9A8050]">
          Tradition · Natur · Balance
        </span>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C14C38]" />
          <span className="text-[9px] uppercase tracking-[0.18em] text-[#6B705C]">
            Entdecken
          </span>
        </div>
      </div>

    </section>
  );
}
