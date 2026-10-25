import BlogSection from "@/components/learn/BlogSection";

const podcastTypes = [
  {
    title: "Talk with Lakshani",
    description: "One topic, 25–40 min · every 2 weeks · free",
    number: "01",
  },
  {
    title: "Ayurveda Talks — guests",
    description: "Doctors, cooks, yoga teachers · monthly · free",
    number: "02",
  },
  {
    title: "Seasonal special",
    description: "What to change this season · 4 a year · free",
    number: "03",
  },
  {
    title: "10-minute rituals & Q&A",
    description: "Guided audio and member questions · members only",
    number: "04",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[#DFC24D]" : "text-[#9A6B25]"
      }`}
    >
      {children}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F5E8] text-[#263A2B]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#21452B] text-[#F8F5E8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-28 h-[420px] w-[420px] rounded-full bg-[#2F5D39]/50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFC24D]/35 bg-white/[0.05] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
              <Eyebrow light>Learn Ayurveda · Free for everyone</Eyebrow>
            </div>

            
<h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-[#F8F5E8] sm:text-5xl lg:text-6xl xl:text-7xl">
  <span className="block text-[#F8F5E8]">Ayurveda wellness</span>
  <span className="mt-2 block text-[#DFC24D]">
    in your hands.
  </span>
</h1>


            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Articles, recipes and the podcast — free for everyone. Start
              with the quiz to explore your constitution. Premium members can
              also join a live online seminar every month.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#dosha-quiz"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-4 text-sm font-semibold text-[#21452B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5]"
              >
                Take the free dosha quiz
                <ArrowIcon />
              </a>

              <a
                href="#seminar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
              >
                Monthly member seminar
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs text-white/75">
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Practical everyday advice
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Recipes and rituals
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#DFC24D]">✳</span>
                Learn at your own pace
              </span>
            </div>
          </div>

          {/* Hero feature card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[32px] border border-[#DFC24D]/20"
            />

            <div className="relative rounded-[28px] border border-[#D8D0A9]/50 bg-[#F8F5E8] p-6 text-[#263A2B] shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>Your learning journey</Eyebrow>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-[#21452B]">
                    Small steps.
                    <span className="block text-[#9A6B25]">
                      Deeper balance.
                    </span>
                  </h2>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/70 bg-[#EFE9C5] font-serif text-2xl text-[#21452B]">
                  ✳
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                Explore Ayurveda through simple learning experiences designed
                to fit into everyday life.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="#blog"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xl text-[#2F5D39]">
                    ✎
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Articles and recipes
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Read, cook and try at home
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#podcast"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFE9C5] text-xl text-[#2F5D39]">
                    ♫
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Ayurveda podcast
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Listen to conversations and practical tips
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#seminar"
                  className="group flex items-center gap-4 rounded-2xl border border-[#D8D0A9]/70 bg-white p-4 transition-all hover:border-[#DFC24D] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8E8D7] text-xl text-[#2F5D39]">
                    ◷
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#21452B]">
                      Monthly live seminar
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      Learn with Lakshani as a Premium member
                    </span>
                  </span>
                  <span className="text-lg text-[#9A6B25] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-[#21452B] p-4 text-white">
                <p className="text-xs leading-6 text-white/90">
                  Learn something new, build a simple habit, and find a rhythm
                  that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free dosha quiz */}
      <section
        id="dosha-quiz"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[30px] border border-[#E1DAC5] bg-[#F8F5E8] p-6 shadow-sm sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
          <div>
            <Eyebrow>Free dosha quiz · 2 minutes</Eyebrow>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              What is your constitution?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B705C]">
              Answer 8 short questions and get a first, rough idea of your
              constitution straight away. For a deeper look, book an online
              consultation with Lakshani.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Vata", "Pitta", "Kapha"].map((dosha) => (
                <span
                  key={dosha}
                  className="rounded-full border border-[#D8D0A9] bg-white px-4 py-2 text-xs font-medium text-[#52634F]"
                >
                  {dosha}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-[#7A806C]">
              An introductory educational quiz, not a medical assessment or
              diagnosis.
            </p>
          </div>

          {/* Quiz preview */}
          <div className="rounded-[24px] border border-[#E3DCC7] bg-[#EFE9D8] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B705C]">
                Quiz preview
              </p>
              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#2F5D39]">
                8 questions
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#6B705C]">
              <span>Example question</span>
              <span>3 of 8</span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#D8D0A9]">
              <div className="h-full w-[37.5%] rounded-full bg-[#2F5D39]" />
            </div>

            <h3 className="mt-5 font-serif text-xl text-[#21452B]">
              How do you sleep?
            </h3>

            <div className="mt-4 space-y-3">
              {[
                "Light, I wake easily",
                "Well, but not long",
                "Deep and long",
              ].map((answer, index) => (
                <div
                  key={answer}
                  className="flex items-center gap-3 rounded-xl border border-[#D8D0A9]/80 bg-white px-4 py-3.5 text-sm text-[#52634F]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C8C1AA] text-[10px] text-[#7A806C]">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {answer}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] leading-5 text-[#6B705C]">
              Your result appears right away — no sign-up needed.
            </p>

            <a
              href="/learn/dosha-quiz"
              className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#21452B] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2F5D39]"
            >
              Take the full quiz
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Blog articles */}
      <BlogSection />

      {/* Podcast */}
      <section
        id="podcast"
        className="relative scroll-mt-20 overflow-hidden bg-[#21452B] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-28 h-80 w-80 rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-8 h-48 w-48 rounded-full border border-[#DFC24D]/15"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow light>Podcast · Ayurveda Talks</Eyebrow>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Talk with
              <span className="block text-[#DFC24D]">Lakshani.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80">
              New episodes every two weeks on sleep, food, seasons and
              everyday balance — plus monthly guests.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { name: "Spotify", href: "#podcast" },
                { name: "Apple Podcasts", href: "#podcast" },
                { name: "YouTube", href: "#podcast" },
                {
                  name: "AyurvedaTalks.de",
                  href: "https://ayurvedatalks.de",
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  className="rounded-full border border-white/25 px-4 py-3 text-xs text-white/90 transition-colors hover:border-[#DFC24D] hover:text-[#DFC24D]"
                >
                  {platform.name}
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-white/60">
              Listen at your own pace and explore Ayurveda through
              conversations, experiences and practical ideas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {podcastTypes.map((item) => (
              <article
                key={item.number}
                className="group rounded-[24px] border border-white/15 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#DFC24D]/50 hover:bg-white/[0.07] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#DFC24D]">
                    {item.number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#DFC24D] transition-transform group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly seminar */}
      <section
        id="seminar"
        className="scroll-mt-20 bg-[#EFE9D8] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E1DAC5] bg-[#F8F5E8] p-6 sm:p-9 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#D8D0A9]/50"
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D0A9] bg-white/70 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9A6B25]" />
                  <Eyebrow>Monthly online seminar · Premium members</Eyebrow>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
                  Learn live with Lakshani.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B705C]">
                  Every month, join a 60-minute live seminar on a seasonal or
                  everyday topic, with time for your questions. Premium
                  members can join live and find every recording in their
                  library.
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E3DCC7] bg-white/70 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE9C5] text-lg text-[#21452B]">
                    ◷
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A806C]">
                      Upcoming seminar
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#21452B]">
                      “Ayurveda for the winter”
                    </p>
                    <p className="mt-1 text-xs text-[#6B705C]">
                      [Confirm date] · 19:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full rounded-[24px] bg-[#21452B] p-6 text-white sm:p-7 lg:max-w-xs">
                <Eyebrow light>Continue your journey</Eyebrow>

                <h3 className="mt-4 font-serif text-2xl leading-snug">
                  Make space for deeper learning.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  Explore membership benefits and find the right level of
                  support for your practice.
                </p>

                <a
                  href="/membership"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-5 py-4 text-sm font-semibold text-[#21452B] transition-colors hover:bg-[#EFE9C5]"
                >
                  See membership
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
