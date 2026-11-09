
import Image from "next/image";
import Link from "next/link";

const retreats = [
  {
    location: "GERMANY",
    title: "Retreats in Germany",
    description:
      "From private mini retreats at the Chalet Resort Steinberg am See to group retreats with yoga, treatments and meditation — Rasayana, detox and renewal retreats across Germany.",
    image: "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/Germany/germany_retreats.webp",
    imageText: "A peaceful retreat in Germany",
    href: "/retreats/germany",
    linkText: "Discover retreats in Germany",
  },
  {
    location: "SRI LANKA",
    title: "Retreats & Panchakarma in Sri Lanka",
    description:
      "Traditional Panchakarma at our Ayurveda centre in Sri Lanka, and retreats organised by our team.",
    image: "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/Retreats/SriLanka/retreat_srilanka.jpg",
    imageText: "Traditional Ayurveda in Sri Lanka",
    href: "/retreats/germany",
    linkText: "Discover Sri Lanka",
  },
];

export default function Retreats() {
  return (
    <section
      id="retreats"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:py-28"
    >
      <div className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#C14C38]">
          Retreats
        </p>

        <h2 className="font-serif text-4xl text-[#21452B] sm:text-5xl">
          Time away for body and mind
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {retreats.map((retreat) => (
          <article
            key={retreat.location}
            className="overflow-hidden rounded-3xl border border-[#D8D0A9]/60 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Retreat image */}
            <div className="group relative h-64 overflow-hidden sm:h-72">
              <Image
                src={retreat.image}
                alt={retreat.imageText}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/75 via-[#21452B]/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-3 block text-[10px] font-semibold tracking-[0.2em] text-[#DFC24D]">
                  {retreat.location}
                </span>

                <p className="font-serif text-2xl text-white sm:text-3xl">
                  {retreat.imageText}
                </p>
              </div>
            </div>

            {/* Retreat details */}
            <div className="p-7 sm:p-8">
              <h3 className="font-serif text-3xl text-[#21452B]">
                {retreat.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                {retreat.description}
              </p>

              <Link
                href={retreat.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D39] transition hover:text-[#C14C38]"
              >
                {retreat.linkText}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
