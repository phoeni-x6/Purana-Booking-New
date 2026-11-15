
import type { Metadata } from "next";
import TreatmentSeries from "@/components/TreatmentSeries";

export const metadata: Metadata = {
  title: "Packages & Series | Purana Ayurveda",
  description:
    "Discover Ayurvedic treatment packages and monthly massage series at Purana Ayurveda. Make regular self-care part of your lifestyle.",
};

const benefits = [
  {
    title: "Balance before imbalance",
    text: "Stress, weather, seasons and diet constantly influence your doshas. A monthly treatment helps restore balance before small imbalances become complaints.",
    symbol: "✳",
  },
  {
    title: "Effects build over time",
    text: "The nourishing effects of herbal oils on your skin, tissues and nervous system develop with every treatment session.",
    symbol: "❋",
  },
  {
    title: "Better circulation, lasting",
    text: "Regular massage supports blood and lymph flow, helping prevent everyday tension from becoming chronic.",
    symbol: "◉",
  },
  {
    title: "Your body learns to relax",
    text: "With each treatment, your nervous system becomes more familiar with deep rest and relaxation.",
    symbol: "☼",
  },
  {
    title: "In tune with the seasons",
    text: "Monthly treatments allow us to adapt oils and therapies to the changing seasons and your individual needs.",
    symbol: "❀",
  },
  {
    title: "Time for yourself",
    text: "A regular appointment becomes a meaningful ritual of self-care, giving you time to reconnect with yourself.",
    symbol: "♡",
  },
];

function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="90" cy="90" r="77" stroke="currentColor" strokeWidth=".7" />
      <circle cx="90" cy="90" r="63" stroke="currentColor" strokeWidth=".7" />

      <path
        d="M90 145C89 117 76 91 52 72C33 57 29 35 47 24C67 13 87 37 90 60C93 37 113 13 133 24C151 35 147 57 128 72C104 91 91 117 90 145Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      <path
        d="M90 145V59M90 101C75 77 57 59 42 48M90 101C105 77 123 59 138 48"
        stroke="currentColor"
        strokeWidth=".8"
      />

      <path
        d="M90 17V7M90 173V163M17 90H7M173 90H163"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function PackagesSeriesPage() {
  return (
    <main className="overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#21452B] text-[#EFE9C5] md:min-h-[720px]">
        <div className="absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border border-white/[0.07]" />
        <div className="absolute -right-16 -top-24 h-[470px] w-[470px] rounded-full border border-white/[0.07]" />
        <div className="absolute bottom-[-180px] left-[38%] h-[450px] w-[450px] rounded-full bg-[#DFC24D]/[0.04] blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-20 md:min-h-[720px] md:grid-cols-[1.2fr_.8fr] md:px-12">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#DFC24D]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DFC24D]">
                The art of regular self-care
              </p>
            </div>

            <h1 className="font-serif text-5xl leading-[1.12] tracking-tight text-[#EFE9C5] sm:text-6xl md:text-7xl lg:text-[82px]">
              Wellness is
              <br />
              not a luxury.
              <br />
              <span className="italic text-[#DFC24D]">
                It is a ritual.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-8 text-white/70 md:text-base">
              Ayurveda is above all preventive. Discover our thoughtfully
              designed treatment packages and make balance, nourishment and
              relaxation part of your everyday life.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#offers"
                className="group inline-flex items-center gap-6 rounded-full bg-[#DFC24D] px-7 py-4 text-xs font-bold text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
              >
                EXPLORE OUR OFFERS
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <span className="text-xs tracking-wide text-white/50">
                A little time for yourself.
              </span>
            </div>
          </div>

          {/* DECORATIVE HERO ARTWORK */}
          <div className="relative hidden h-[480px] items-center justify-center md:flex">
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[#EFE9C5]/20" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-[#EFE9C5]/20" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-[#DFC24D]/40" />

            <BotanicalMark className="relative z-10 h-[280px] w-[280px] text-[#DFC24D]/80" />

            <div className="absolute right-0 top-12 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[9px] uppercase tracking-[0.22em] text-[#EFE9C5]">
              Mind · Body · Balance
            </div>

            <div className="absolute bottom-12 left-0 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[9px] uppercase tracking-[0.22em] text-[#DFC24D]">
              Traditional Ayurveda
            </div>

            <div className="absolute right-16 bottom-24 h-3 w-3 rounded-full bg-[#DFC24D]" />
            <div className="absolute left-16 top-24 h-2 w-2 rounded-full bg-[#DFC24D]/70" />
          </div>

          <div className="absolute bottom-7 right-8 hidden text-[9px] tracking-[0.3em] text-white/30 md:block">
            PURANA AYURVEDA · WELLNESS & BALANCE
          </div>
        </div>
      </section>

      {/* MONTHLY CARE INTRO */}
      <section className="relative px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  01
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  The Ayurvedic approach
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-[1.2] text-[#21452B] md:text-6xl">
                Regular care.
                <br />
                <span className="italic text-[#C14C38]">
                  Lasting balance.
                </span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-0 h-full w-px bg-[#D8D0A9] md:-left-8" />

              <p className="font-serif text-xl leading-relaxed text-[#21452B] md:text-2xl">
                Ayurveda is above all preventive: its first goal is to keep
                the healthy healthy.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#6B705C]">
                Stress, changing seasons, diet and everyday life constantly
                influence our doshas. Regular Ayurvedic treatments help
                maintain balance before small imbalances turn into
                complaints.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#6B705C]">
                That is why we recommend making time for an Ayurvedic
                treatment once a month.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#533E23]">
                <span className="text-lg text-[#C14C38]">✳</span>
                Make self-care a regular ritual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative bg-[#EFE9C5]/50 px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  02
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  Why once a month?
                </span>
              </div>

              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#21452B] md:text-5xl">
                Six reasons to make
                <br />
                <span className="italic text-[#C14C38]">
                  self-care a habit.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6B705C]">
              Small moments of care can make a meaningful difference. Give
              your body the consistency and attention it deserves.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#D8D0A9] bg-[#D8D0A9] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group relative min-h-[275px] bg-[#F8F5E8] p-8 transition duration-300 hover:bg-[#21452B] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C14C38] transition group-hover:text-[#DFC24D]">
                    0{index + 1}
                  </span>

                  <span className="text-2xl text-[#C14C38] transition duration-300 group-hover:rotate-45 group-hover:text-[#DFC24D]">
                    {benefit.symbol}
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-xl text-[#21452B] transition group-hover:text-[#EFE9C5] md:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6B705C] transition group-hover:text-white/65">
                  {benefit.text}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#DFC24D] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section
        id="offers"
        className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#C14C38]">
                  03
                </span>

                <span className="h-px w-10 bg-[#D8D0A9]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#6B705C]">
                  Packages & series
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight text-[#21452B] md:text-6xl">
                Choose your path
                <br />
                to <span className="italic text-[#C14C38]">well-being.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6B705C]">
              Begin with a personal introduction to Ayurveda or make regular
              treatments a part of your wellness routine.
            </p>
          </div>

          {/* AYURVEDA START PACKAGE */}
          <article className="relative mb-24 overflow-hidden bg-[#21452B] text-[#EFE9C5]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/[0.08]" />
            <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white/[0.08]" />

            <div className="relative grid md:grid-cols-[0.8fr_1.2fr]">
              {/* VISUAL SIDE */}
              <div className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden border-b border-white/10 p-8 md:min-h-[600px] md:border-b-0 md:border-r">
                <p className="absolute left-8 top-8 text-[9px] font-bold uppercase tracking-[0.25em] text-[#DFC24D]">
                  A thoughtful first step
                </p>

                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#DFC24D]/50 outline outline-1 outline-offset-[12px] outline-[#DFC24D]/20 md:h-64 md:w-64">
                  <div className="absolute inset-3 rounded-full border border-[#EFE9C5]/20" />

                  <div className="text-center">
                    <span className="block font-serif text-8xl leading-none text-[#DFC24D] md:text-9xl">
                      3
                    </span>

                    <span className="mt-3 block text-[9px] font-bold tracking-[0.3em] text-[#EFE9C5]/70">
                      APPOINTMENTS
                    </span>
                  </div>
                </div>

                <p className="mt-10 max-w-xs text-center font-serif text-xl italic text-[#EFE9C5]/80">
                  Your journey towards balance begins here.
                </p>

                <span className="absolute bottom-7 right-8 text-xs tracking-widest text-[#DFC24D]/60">
                  ✳
                </span>
              </div>

              {/* DETAILS SIDE */}
              <div className="relative p-7 md:p-12 lg:p-14">
                <span className="inline-block border border-[#DFC24D]/50 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#DFC24D]">
                  IDEAL FOR BEGINNERS
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#EFE9C5] md:text-4xl lg:text-5xl">
                  Ayurveda Start
                  <br />
                  Package
                </h3>

                <p className="mt-4 text-sm text-white/60">
                  Three appointments to discover Ayurveda.
                </p>

                <div className="my-8 h-px bg-white/15" />

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFC24D]">
                  What is included
                </p>

                <div className="space-y-6">
                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      01
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Ayurvedic consultation
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        Constitution test · 30 minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      02
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Personalised treatment
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        60-minute treatment based on your consultation
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-serif text-xl text-[#DFC24D]">
                      03
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#EFE9C5]">
                        Second treatment
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        Another 60-minute personalised treatment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 h-px bg-white/15" />

                <p className="text-xs leading-6 text-white/55">
                  Three appointments, for example on three consecutive days
                  or spread over a few weeks.
                </p>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <p className="text-xs text-white/50 line-through">
                      200 €
                    </p>

                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="font-serif text-5xl text-[#DFC24D]">
                        185 €
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-[#EFE9C5]/65">
                      You save 15 €
                    </p>
                  </div>

                  <span className="rounded-full border border-[#DFC24D]/50 px-5 py-3 text-[10px] font-bold tracking-widest text-[#DFC24D]">
                    SAVE 15 €
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* FOUR-SESSION TREATMENT SERIES COMPONENT */}
          <TreatmentSeries />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#21452B] px-6 py-24 text-center md:py-32">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full border border-white/[0.08]" />
        <div className="absolute -right-28 -bottom-28 h-96 w-96 rounded-full border border-white/[0.08]" />

        <div className="relative mx-auto max-w-2xl">
          <BotanicalMark className="mx-auto mb-8 h-20 w-20 text-[#DFC24D]/70" />

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DFC24D]">
            Your time. Your balance.
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#EFE9C5] md:text-6xl">
            Make wellness
            <br />
            <span className="italic text-[#DFC24D]">
              a way of life.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-white/65">
            Your journey towards balance begins with a single appointment.
            Discover the right treatment and package for your needs.
          </p>

          <a
            href="#offers"
            className="mt-10 inline-flex items-center gap-6 rounded-full bg-[#DFC24D] px-8 py-4 text-xs font-bold tracking-wide text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5]"
          >
            DISCOVER OUR PACKAGES
            <span>↗</span>
          </a>

          <p className="mt-12 font-serif text-sm italic text-white/40">
            Take a moment. Restore your balance.
          </p>
        </div>
      </section>
    </main>
  );
}
