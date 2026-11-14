
import Image from "next/image";
import Link from "next/link";

const retreats = [
  {
    location: "GERMANY",
    number: "01",
    title: "Retreats in Germany",
    description:
      "From private mini retreats at the Chalet Resort Steinberg am See to group retreats with yoga, treatments and meditation — Rasayana, detox and renewal retreats across Germany.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/Germany/germany_retreats.webp",
    imageText: "A peaceful retreat in Germany",
    href: "/retreats/germany",
    linkText: "Discover retreats in Germany",
    tag: "REST & RECONNECT",
  },
  {
    location: "SRI LANKA",
    number: "02",
    title: "Retreats & Panchakarma in Sri Lanka",
    description:
      "Experience traditional Panchakarma at our Ayurveda centre in Sri Lanka, alongside restorative retreats thoughtfully organised by our team.",
    image:
      "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/SriLanka/retreat_srilanka.jpg",
    imageText: "Traditional Ayurveda in Sri Lanka",
    href: "/retreats/sri-lanka",
    linkText: "Discover Sri Lanka",
    tag: "TRADITION & RENEWAL",
  },
];

export default function Retreats() {
  return (
    <section
      id="retreats"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#C14C38]/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#2F5D39]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2F5D39]">
                Discover our retreats
              </p>
            </div>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.15] tracking-tight text-[#533E23] sm:text-5xl lg:text-6xl">
              Time away for
              <span className="block italic text-[#2F5D39]">
                body and mind.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end md:items-end">
            <p className="max-w-md text-sm leading-7 text-[#6B705C] md:text-right">
              Step away from everyday life and reconnect with yourself
              through traditional Ayurveda, mindful experiences and
              restorative surroundings.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[#533E23]">
              <span className="h-px w-8 bg-[#DFC24D]" />
              <span className="font-serif text-sm italic">
                Find your space to unwind
              </span>
            </div>
          </div>
        </div>

        {/* Full image retreat cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {retreats.map((retreat) => (
            <article
              key={retreat.location}
              className="group relative isolate min-h-[520px] overflow-hidden rounded-[26px] bg-[#21452B] shadow-[0_15px_40px_rgba(33,69,43,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(33,69,43,0.20)] sm:min-h-[580px]"
            >
              {/* Full card image */}
              <Image
                src={retreat.image}
                alt={retreat.imageText}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Image fade overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172F20] via-[#21452B]/35 to-transparent opacity-95" />

              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

              {/* Top labels */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                <span className="rounded-full border border-white/30 bg-[#21452B]/40 px-4 py-2 text-[9px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                  {retreat.location}
                </span>

                <span className="font-serif text-3xl italic text-white/80">
                  {retreat.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#DFC24D]" />
                  <span className="text-[9px] font-bold tracking-[0.23em] text-[#DFC24D]">
                    {retreat.tag}
                  </span>
                </div>

                <h3 className="max-w-lg font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-[42px]">
                  {retreat.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/80">
                  {retreat.description}
                </p>

                <Link
                  href={retreat.href}
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#EFE9C5] transition-colors duration-300 hover:text-[#DFC24D]"
                >
                  {retreat.linkText}

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#DFC24D] group-hover:bg-[#DFC24D] group-hover:text-[#21452B]">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-px w-8 bg-[#DFC24D]" />
          <p className="font-serif text-sm italic text-[#6B705C]">
            Wherever you go, make time for your wellbeing.
          </p>
          <span className="h-px w-8 bg-[#DFC24D]" />
        </div>
      </div>
    </section>
  );
}
