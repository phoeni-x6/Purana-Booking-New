
import Image from "next/image";

const ebooks = [
  {
    title: "Ayurveda Basic Detox at Home",
    description:
      "The 3-phase home reset, shopping list and 10 recipes.",
    category: "DETOX & RESET",
    image: "/images/ebooks/detox-at-home.jpg",
  },
  {
    title: "Ayurveda for Spring",
    description:
      "Lightness and a fresh start: routine, food and rituals.",
    category: "SPRING EDITION",
    image: "/images/ebooks/ayurveda-spring.jpg",
  },
  {
    title: "Ayurveda for Summer",
    description:
      "Stay cool and calm: cooling food and evening rituals.",
    category: "SUMMER EDITION",
    image: "/images/ebooks/ayurveda-summer.jpg",
  },
  {
    title: "Ayurveda for Autumn",
    description:
      "Grounding and routine: warm meals and oil massage.",
    category: "AUTUMN EDITION",
    image: "/images/ebooks/ayurveda-autumn.jpg",
  },
  {
    title: "Ayurveda for Winter",
    description:
      "Warmth and steady energy through the dark months.",
    category: "WINTER EDITION",
    image: "/images/ebooks/ayurveda-winter.jpg",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function EbooksSection() {
  return (
    <section
      id="ebooks"
      className="relative overflow-hidden bg-[#F8F5E8] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#D8D0A9]/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 h-48 w-48 rounded-full border border-[#D8D0A9]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-12 h-80 w-80 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading and bundle offer */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/60 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#C14C38]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#533E23] sm:text-xs">
                The Purana reading collection
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Ayurveda through the year,
              <span className="mt-1 block italic text-[#9A7821]">
                one page at a time.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
              Practical digital guides for bringing Ayurveda into
              everyday life. Explore seasonal routines, food ideas
              and self-care rituals — and revisit them whenever you need.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Instant digital access",
                "Practical guides",
                "Seasonal inspiration",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 px-3.5 py-2 text-xs font-medium text-[#21452B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bundle card */}
          <div
            id="ebook-bundle"
            className="relative w-full overflow-hidden rounded-[28px] bg-[#21452B] p-6 text-[#F8F5E8] shadow-xl shadow-[#21452B]/15 sm:p-7 lg:max-w-[390px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full border border-white/10"
            />

            <div className="relative">
              <span className="inline-flex rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFC24D]">
                The complete collection
              </span>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl">
                A year of Ayurveda
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
                All five e-books together, plus a printable year planner
                to help organise your seasonal routines.
              </p>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                    Bundle price
                  </p>
                  <span className="mt-1 block font-serif text-4xl text-[#DFC24D]">
                    €49
                  </span>
                </div>

                <div className="flex -space-x-3 pb-1">
                  {ebooks.map((ebook, index) => (
                    <div
                      key={ebook.title}
                      className="relative h-12 w-9 overflow-hidden rounded-md border-2 border-[#21452B] bg-white"
                      style={{ zIndex: ebooks.length - index }}
                    >
                      <Image
                        src={ebook.image}
                        alt={`${ebook.title} cover`}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#ebook-purchase"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-5 py-3.5 text-sm font-semibold text-[#21452B] transition hover:bg-[#E9D477]"
              >
                Get the complete bundle
                <ArrowIcon />
              </a>

              <p className="mt-3 text-center text-[10px] text-white/55">
                Five guides · One printable planner
              </p>
            </div>
          </div>
        </div>

        {/* E-book cards */}
        <div className="mt-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A7821]">
            Explore the collection
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="font-serif text-2xl text-[#21452B] sm:text-3xl">
              Find your next guide
            </h3>
            <span className="hidden text-xs text-[#6B705C] sm:block">
              5 digital guides
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ebooks.map((ebook) => (
            <article
              key={ebook.title}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#D8D0A9]/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#2F5D39]/40 hover:shadow-xl hover:shadow-[#533E23]/10"
            >
              {/* Real e-book cover image */}
              <div className="relative overflow-hidden bg-[#EFE9C5]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={ebook.image}
                    alt={`Cover of ${ebook.title}`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21452B]/35 via-transparent to-transparent opacity-60" />

                  <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-[#F8F5E8]/95 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#21452B]">
                    {ebook.category}
                  </span>
                </div>
              </div>

              {/* E-book information */}
              <div className="flex flex-1 flex-col p-4">
                <h4 className="font-serif text-lg leading-6 text-[#21452B]">
                  {ebook.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                  {ebook.description}
                </p>

                <div className="mt-auto border-t border-[#D8D0A9]/70 pt-4 mt-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-2xl text-[#21452B]">
                      €14.90
                    </span>

                    <a
                      href="#ebook-purchase"
                      aria-label={`Buy ${ebook.title}`}
                      className="group/link inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#21452B] transition hover:bg-[#21452B] hover:text-white"
                    >
                      <ArrowIcon />
                    </a>
                  </div>

                  <a
                    href="#ebook-purchase"
                    className="mt-3 inline-block text-xs font-semibold text-[#533E23] underline decoration-[#DFC24D] underline-offset-4 transition hover:text-[#C14C38]"
                  >
                    Buy e-book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#D8D0A9] bg-white/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-semibold text-[#21452B]">
              A little more balance, wherever you are.
            </p>
            <p className="mt-1 text-xs leading-5 text-[#6B705C]">
              Keep your favourite guides close and return to them
              throughout the year.
            </p>
          </div>

          <a
            href="#ebook-bundle"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#21452B] px-5 py-3 text-xs font-semibold text-[#21452B] transition hover:bg-[#EFE9C5]/70 sm:self-center"
          >
            Discover the bundle
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#21452B] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
