
import BlogSection from "@/components/learn/BlogSection";

const podcastTypes = [
  {
    title: "Talk with Lakshani",
    description: "One topic, 25–40 min · every 2 weeks · free",
  },
  {
    title: "Ayurveda Talks — guests",
    description: "Doctors, cooks, yoga teachers · monthly · free",
  },
  {
    title: "Seasonal special",
    description: "What to change this season · 4 a year · free",
  },
  {
    title: "10-minute rituals & Q&A",
    description: "Guided audio and member questions · members only",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE5] text-[#142F27]">
      {/* Hero */}
      <section className="bg-[#1D3B30] text-[#F4EFE5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#E4AD3E]">
            Learn Ayurveda — free
          </p>

          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Ayurveda wellness in your hands
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
            Articles, recipes and the podcast — free for everyone. Start with
            the quiz to find your constitution. Premium members also join a
            live online seminar every month.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#dosha-quiz"
              className="rounded-full bg-[#E4AD3E] px-5 py-3.5 text-sm font-semibold text-[#142F27] hover:bg-[#F2C76E]"
            >
              Take the free dosha quiz
            </a>

            <a
              href="#seminar"
              className="rounded-full border border-white/40 px-5 py-3.5 text-sm text-white hover:bg-white/10"
            >
              Monthly member seminar
            </a>
          </div>
        </div>
      </section>

      {/* Free dosha quiz */}
      <section id="dosha-quiz" className="bg-[#F4EFE5] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-white p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Free dosha quiz · 2 minutes
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              What is your constitution?
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#52665C]">
              Answer 8 short questions and get a first, rough idea of your
              constitution straight away. For a deeper look, book an online
              consultation with Lakshani.
            </p>
          </div>

          {/* Quiz preview */}
          <div className="rounded-2xl bg-[#F4EFE5] p-5 sm:p-6">
            <p className="text-[11px] text-[#64746B]">Question 3 of 8</p>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E1D8C8]">
              <div className="h-full w-[37.5%] rounded-full bg-[#1D3B30]" />
            </div>

            <h3 className="mt-4 text-base font-semibold">How do you sleep?</h3>

            <div className="mt-3 space-y-3">
              {[
                "Light, I wake easily",
                "Well, but not long",
                "Deep and long",
              ].map((answer) => (
                <div
                  key={answer}
                  className="rounded-xl border border-[#DED3C0] bg-white px-4 py-3 text-sm"
                >
                  {answer}
                </div>
              ))}
            </div>

            <p className="mt-3 text-[10px] leading-5 text-[#64746B]">
              Your result appears right away — no sign-up needed.
            </p>

            <a
              href="/learn/dosha-quiz"
              className="mt-3 inline-block rounded-full bg-[#1D3B30] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2D5142]"
            >
              Take the full quiz
            </a>
          </div>
        </div>
      </section>

      {/* Blog section component */}
      <BlogSection />

      {/* Podcast */}
      <section className="bg-[#1D3B30] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#E4AD3E]">
              Podcast · ayurvedatalks.de
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Talk with Lakshani
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">
              New episodes every two weeks on sleep, food, seasons and everyday
              balance — plus monthly guests.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Spotify", "Apple Podcasts", "YouTube", "ayurvedatalks.de"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#podcast"
                    className="rounded-full border border-white/40 px-4 py-3 text-xs hover:bg-white/10"
                  >
                    {platform}
                  </a>
                ),
              )}
            </div>
          </div>

          <div id="podcast" className="grid gap-3 sm:grid-cols-2">
            {podcastTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 p-4"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly seminar */}
      <section id="seminar" className="bg-[#F4EFE5] px-5 py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-3xl bg-white p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
              Monthly online seminar · for Premium members
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Learn live with Lakshani
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#52665C]">
              Every month a 60-minute live seminar on one seasonal or everyday
              topic, with time for your questions. Premium members join live
              and find every recording in their library.
            </p>

            <p className="mt-3 text-sm font-semibold">
              Next: “Ayurveda for the winter” · [Date] · 19:00
            </p>
          </div>

          <a
            href="/membership"
            className="shrink-0 rounded-full bg-[#1D3B30] px-6 py-4 text-center text-sm font-semibold text-white hover:bg-[#2D5142]"
          >
            See membership
          </a>
        </div>
      </section>
    </main>
  );
}
