
const content = [
  {
    number: "01",
    icon: "✧",
    title: "Content library",
    description:
      "10 sorted topic shelves — Start here, Ayurveda basics, your constitution, daily routine, seasons, kitchen & recipes, self-care, yoga & breath, seminar recordings and the Purana Handbook. Filter by dosha and season; new content every month.",
    label: "Explore at your pace",
    premium: false,
  },
  {
    number: "02",
    icon: "♫",
    title: "All podcasts",
    description:
      "Talk with Lakshani and guest episodes in one place, plus members-only 10-minute rituals and a monthly member Q&A.",
    label: "Listen & reconnect",
    premium: false,
  },
  {
    number: "03",
    icon: "✉",
    title: "Monthly newsletter",
    description:
      "On the 1st of each month: a seasonal routine, a recipe, one tip, the next member seminar and new library content.",
    label: "A fresh start each month",
    premium: false,
  },
  {
    number: "04",
    icon: "✺",
    title: "Premium: seminars & consultations",
    description:
      "Premium members join a live online seminar every month, find every recording in the library, and get 2 personal online consultations per year.",
    label: "Exclusive Premium access",
    premium: true,
  },
];

export default function MemberContent() {
  return (
    <section className="relative isolate overflow-hidden bg-[#EFE9C5] text-[#263A2B]">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 -z-10 h-48 w-48 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-16 lg:py-24">
        {/* Left introduction */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#533E23]">
              Member content
            </p>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-[42px]">
            Learn and live Ayurveda at home
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6B705C] sm:text-base">
            Bring the wisdom of Purana into your daily routine, wherever you
            are.
          </p>

          {/* Decorative divider */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <span className="h-px w-12 bg-[#D8D0A9]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFC24D]" />
          </div>

          {/* Small supporting panel */}
          <div className="mt-9 rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] p-5 sm:p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21452B] text-xl text-[#DFC24D]">
              ✧
            </div>

            <h3 className="mt-4 font-serif text-xl text-[#21452B]">
              Your wellness journey
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6B705C]">
              Practical knowledge, thoughtful rituals and inspiration to bring
              Ayurveda into everyday life.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#EFE9C5] px-3 py-2 text-xs text-[#533E23]">
                Learn
              </span>
              <span className="rounded-full bg-[#EFE9C5] px-3 py-2 text-xs text-[#533E23]">
                Practise
              </span>
              <span className="rounded-full bg-[#EFE9C5] px-3 py-2 text-xs text-[#533E23]">
                Grow
              </span>
            </div>
          </div>
        </div>

        {/* Content cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {content.map((item) => (
            <article
              key={item.title}
              className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                item.premium
                  ? "border-[#DFC24D]/50 bg-[#21452B] text-[#F8F5E8] shadow-xl shadow-[#21452B]/10"
                  : "border-[#D8D0A9] bg-[#F8F5E8] text-[#263A2B] shadow-sm hover:border-[#DFC24D] hover:shadow-xl hover:shadow-[#533E23]/10"
              }`}
            >
              {/* Number in background */}
              <span
                aria-hidden="true"
                className={`absolute right-5 top-3 font-serif text-6xl transition duration-300 ${
                  item.premium
                    ? "text-[#EFE9C5]/[0.07] group-hover:text-[#EFE9C5]/[0.12]"
                    : "text-[#2F5D39]/[0.06] group-hover:text-[#2F5D39]/[0.12]"
                }`}
              >
                {item.number}
              </span>

              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl transition duration-300 ${
                  item.premium
                    ? "border-[#DFC24D]/30 bg-[#DFC24D]/15 text-[#DFC24D]"
                    : "border-[#DFC24D]/40 bg-[#EFE9C5] text-[#21452B] group-hover:bg-[#DFC24D]/25"
                }`}
              >
                {item.icon}
              </div>

              {/* Premium label */}
              {item.premium && (
                <span className="mt-5 w-fit rounded-full bg-[#DFC24D] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#21452B]">
                  Premium exclusive
                </span>
              )}

              <h3
                className={`mt-5 font-serif text-xl leading-snug ${
                  item.premium ? "text-[#F8F5E8]" : "text-[#21452B]"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 flex-1 text-sm leading-7 ${
                  item.premium
                    ? "text-[#EFE9C5]/80"
                    : "text-[#6B705C]"
                }`}
              >
                {item.description}
              </p>

              {/* Bottom label */}
              <div
                className={`mt-6 flex items-center gap-2 border-t pt-4 text-xs font-medium ${
                  item.premium
                    ? "border-[#EFE9C5]/15 text-[#DFC24D]"
                    : "border-[#D8D0A9] text-[#533E23]"
                }`}
              >
                <span aria-hidden="true">↗</span>
                {item.label}
              </div>

              {/* Hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${
                  item.premium ? "bg-[#DFC24D]" : "bg-[#2F5D39]"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
