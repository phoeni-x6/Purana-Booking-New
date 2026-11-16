
import Link from "next/link";

const team = [
  {
    name: "Sarojani Perera",
    role: "Ayurvedic Cuisine",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    description:
      "The heart and soul of our Ayurvedic kitchen is Sarojani Perera, affectionately known as “Amma”. Since childhood, she has placed great importance on nourishing her family with fresh, balanced and wholesome meals.",
    details:
      "In Sri Lanka, knowledge about food and nutrition has traditionally been passed down through generations. Understanding warming and cooling foods, as well as their effects on digestion and balance, also plays an important role in her cooking.",
    closing:
      "With years of experience, dedication and love, she prepares Ayurvedic meals that nourish the body and mind and support the wellbeing of our guests.",
  },
  {
    name: "Liyaniya Kumarage Pearl Perera",
    role: "Music, Meditation & Sound",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
    description:
      "An important part of our retreats is the power of music, meditation and sound healing. This tradition has been passed down through generations in our family.",
    details:
      "Using the Indian harmonium, he accompanies meditation sessions, mantra circles and sound healing experiences, creating a space for peace, mindfulness and inner balance.",
    closing:
      "His music helps our guests calm their minds and connect deeply with themselves – an essential part of the Purana Ayurveda retreat experience.",
  },
  {
    name: "Chaminda Perera",
    role: "Yoga Teacher",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    description:
      "Born in Sri Lanka, Chaminda Perera was introduced to meditation and martial arts at an early age. A health challenge in 2012 led him to deepen his journey into yoga.",
    details:
      "In 2021, he completed a 1,750-hour training programme at the Isha Yoga Center in India and became a certified Isha Hatha Yoga teacher.",
    closing:
      "At Purana Ayurveda, he teaches traditional Hatha Yoga with clarity, mindfulness and dedication – offering a holistic path towards health, balance and inner growth.",
  },
];

const values = [
  {
    number: "01",
    title: "Authentic Tradition",
    description:
      "Rooted in the centuries-old healing traditions of Sri Lanka and the wisdom passed down by our ancestors.",
  },
  {
    number: "02",
    title: "Natural Wellbeing",
    description:
      "Natural ingredients, mindful nutrition and conscious daily routines to support a healthier lifestyle.",
  },
  {
    number: "03",
    title: "Holistic Balance",
    description:
      "Understanding the body, mind and soul as one, and living in harmony with nature.",
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
        <SectionLabel>Our Team</SectionLabel>

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
                Home
              </Link>
              <span className="text-[#C19A35]">/</span>
              <span className="font-medium text-[#2F5D39]">
                About Us
              </span>
            </div>

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/80 px-4 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-[#2F5D39] shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#C19A35]" />
              OUR STORY · OUR ROOTS
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
              Timeless Wisdom.
              <span className="mt-3 block font-normal italic text-[#A47D32]">
                Reimagined.
              </span>
            </h1>

            <div className="mt-8 h-px w-20 bg-[#DFC24D]" />

            <p className="mt-8 max-w-xl text-base leading-8 text-[#52665C] sm:text-lg">
              Discover the people, traditions and beliefs behind Purana
              Ayurveda. Rooted in Sri Lanka, inspired by nature and created
              for a conscious modern lifestyle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#unsere-geschichte"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2F5D39] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#21452B]/10 transition hover:-translate-y-1 hover:bg-[#21452B]"
              >
                Our Story
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#unser-team"
                className="inline-flex items-center gap-3 rounded-full border border-[#2F5D39]/25 bg-[#F8F5E8]/70 px-7 py-4 text-sm font-semibold text-[#21452B] backdrop-blur-sm transition hover:border-[#DFC24D] hover:bg-[#EFE9C5]"
              >
                Meet Our Team
              </a>
            </div>

            <div className="mt-14 flex items-center gap-4 border-t border-[#2F5D39]/15 pt-6">
              <span className="font-serif text-3xl text-[#A47D32]">2024</span>
              <div>
                <p className="font-serif text-base text-[#21452B]">
                  Founded with a meaningful vision
                </p>
                <p className="mt-1 text-xs text-[#6B705C]">
                  Sri Lankan Ayurvedic traditions for modern living
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
                    "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/35 to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-3 max-w-[230px] rounded-[22px] border border-[#DFC24D]/50 bg-[#F8F5E8] p-5 shadow-xl sm:-right-8">
              <p className="font-serif text-3xl text-[#21452B]">Sri Lanka</p>
              <p className="mt-2 text-xs leading-5 text-[#6B705C]">
                Our home. Our roots. Our inspiration.
              </p>
            </div>

            <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full border border-[#DFC24D]/50" />
          </div>

          <div className="pt-5 lg:pt-0">
            <SectionLabel>About Purana Ayurveda</SectionLabel>

            <h2 className="font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              A Connection Between
              <span className="block font-normal italic text-[#A47D32]">
                Tradition and Modernity.
              </span>
            </h2>

            <div className="mt-7 h-px w-16 bg-[#DFC24D]" />

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#52665C] sm:text-base">
              <p>
                Founded in 2024, Purana Ayurveda brings together authentic
                Ayurvedic traditions and a modern, conscious lifestyle. Our
                aim is to make the essence of holistic wellbeing accessible
                and practical for everyday life.
              </p>

              <p>
                As a sister company of Nivartana, a brand known for its
                high-quality spices and handcrafted products from Sri Lanka,
                we bring the deep cultural wisdom of Ayurveda into modern
                living.
              </p>

              <p>
                Rooted in the centuries-old healing traditions of Sri Lanka,
                we see Ayurveda not simply as a philosophy, but as a living
                practice. At its heart are natural ingredients, mindful
                routines and a sustainable balance between body, mind and
                soul.
              </p>

              <p>
                Our goal is to accompany people on their personal journeys
                towards greater clarity, vitality and inner harmony – gently,
                naturally and meaningfully.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-[#DFC24D] pl-5 font-serif text-xl italic leading-relaxed text-[#21452B] sm:text-2xl">
              Purana Ayurveda — timeless wisdom, reimagined for modern living.
            </p>

            <div className="mt-9">
              <Link
                href="https://nivartana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D39] underline decoration-[#DFC24D] underline-offset-4 transition hover:text-[#C14C38]"
              >
                Discover Nivartana
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
            <SectionLabel>What Defines Us</SectionLabel>
            <h2 className="font-serif text-3xl text-[#21452B] sm:text-4xl">
              Ayurveda as a Way of Life.
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
              <SectionLabel>Our Founder</SectionLabel>

              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
                A Personal Journey,
                <span className="block font-normal italic text-[#A47D32]">
                  A Legacy Across Generations.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C] lg:justify-self-end">
              Meet Lakshani Perera – the woman behind Purana Ayurveda and
              Nivartana, and the person who brings our philosophy to life.
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
                  Founder of Purana Ayurveda &amp; Nivartana
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <SectionLabel>My Story</SectionLabel>

              <h3 className="font-serif text-3xl text-[#21452B] sm:text-4xl">
                Meet Our Founder
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2F5D39]/15 bg-[#EFE9C5]/60 px-3 py-2 text-xs text-[#52665C]">
                  Certified Ayurvedic Nutrition Consultant
                </span>
                <span className="rounded-full border border-[#2F5D39]/15 bg-[#EFE9C5]/60 px-3 py-2 text-xs text-[#52665C]">
                  Ayurvedic Consultant
                </span>
              </div>

              <div className="mt-7 space-y-5 text-sm leading-8 text-[#52665C] sm:text-base">
                <p>
                  Growing up in Sri Lanka, I was introduced to the traditional
                  healing practices of our culture from an early age. My
                  great-grandfather was an indigenous healer who passed his
                  knowledge down through generations and preserved it in
                  handwritten records. This heritage and the stories of my
                  family continue to accompany me today.
                </p>

                <p>
                  My journey into Ayurveda, however, did not begin straight
                  away. It was through personal experiences – overcoming
                  severe allergies and digestive problems, as well as
                  witnessing how natural remedies helped others regain their
                  wellbeing – that I developed a deep interest in this
                  ancient wisdom.
                </p>

                <p>
                  These experiences moved me so deeply that in 2021 I made
                  the conscious decision to leave my previous educational
                  path and study Ayurveda. Today, I feel grateful to share
                  this knowledge and support people on their journeys towards
                  better health and wellbeing.
                </p>

                <p>
                  I believe that true balance comes when the body, mind and
                  soul are in harmony with nature. This belief continues to
                  shape my work and my approach to Ayurveda.
                </p>
              </div>

              <div className="mt-8 border-t border-[#D8D0A9] pt-7">
                <p className="font-serif text-xl italic text-[#21452B]">
                  “True balance begins when the body, mind and soul are in
                  harmony with nature.”
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg text-[#21452B]">
                      Lakshani Perera
                    </p>
                    <p className="mt-1 text-xs text-[#8A8065]">
                      Founder of Purana Ayurveda
                    </p>
                  </div>

                  <span className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/60 px-4 py-2 text-xs text-[#52665C]">
                    German &amp; English
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="unser-team"
        className="scroll-mt-24 border-y border-[#D8D0A9]/70 bg-[#EFE9C5]/35 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>The People Behind Purana</SectionLabel>

            <h2 className="font-serif text-4xl leading-tight text-[#21452B] sm:text-5xl">
              A Team United
              <span className="block font-normal italic text-[#A47D32]">
                by Tradition.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#6B705C] sm:text-base">
              Behind Purana Ayurveda is a family that shares its knowledge,
              experience and passion for holistic wellbeing.
            </p>
          </div>

          <div className="space-y-8">
            {team.map((person, index) => (
              <TeamCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#DFC24D]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-serif text-4xl text-[#21452B] sm:text-5xl">
              Our Vision &amp; Mission
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] p-8 sm:p-11">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#DFC24D]/40" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A47D32]">
                01 · Our Vision
              </span>

              <h3 className="mt-6 font-serif text-3xl text-[#21452B] sm:text-4xl">
                A World in Balance.
              </h3>

              <div className="mt-6 h-px w-14 bg-[#DFC24D]" />

              <p className="mt-7 text-sm leading-8 text-[#52665C] sm:text-base">
                We envision a world where ancient wisdom and modern living
                come together to restore balance and vitality. By reconnecting
                with the timeless healing power of nature, we hope to create
                a future where holistic wellbeing is accessible to everyone
                and harmony between people and nature is restored.
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
                  02 · Our Mission
                </span>

                <h3 className="mt-6 font-serif text-3xl text-[#F8F5E8] sm:text-4xl">
                  Preserving Wisdom. Inspiring Wellbeing.
                </h3>

                <div className="mt-6 h-px w-14 bg-[#DFC24D]" />

                <p className="mt-7 text-sm leading-8 text-[#F8F5E8]/80 sm:text-base">
                  Our mission is to promote holistic wellbeing by preserving
                  and sharing the timeless wisdom of Ayurveda. Rooted in the
                  ancient traditions of Sri Lanka, we support people in
                  finding harmony between mind, body and soul through natural
                  and sustainable practices.
                </p>

                <p className="mt-5 text-sm leading-8 text-[#F8F5E8]/80 sm:text-base">
                  Through authentic products, knowledge and mindful
                  experiences, we create a deeper connection with nature
                  and accompany people on their journey towards lasting
                  health and vitality.
                </p>

                <div className="mt-8 font-serif text-5xl italic text-[#DFC24D]">
                  Live Naturally
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    
      
    </main>
  );
}
