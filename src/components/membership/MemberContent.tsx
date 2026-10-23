
const content = [
  {
    title: "Content library",
    description:
      "10 sorted topic shelves — Start here, Ayurveda basics, your constitution, daily routine, seasons, kitchen & recipes, self-care, yoga & breath, seminar recordings and the Purana Handbook. Filter by dosha and season; new content every month.",
  },
  {
    title: "All podcasts",
    description:
      "Talk with Lakshani and guest episodes in one place, plus members-only 10-minute rituals and a monthly member Q&A.",
  },
  {
    title: "Monthly newsletter",
    description:
      "On the 1st of each month: a seasonal routine, a recipe, one tip, the next member seminar and new library content.",
  },
  {
    title: "Premium: seminars & consultations",
    description:
      "Premium members join a live online seminar every month, find every recording in the library, and get 2 personal online consultations per year.",
  },
];

export default function MemberContent() {
  return (
    <section className="bg-[#EAE1D1] text-[#142F27]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Member content
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Learn and live Ayurveda at home
          </h2>

          <p className="mt-5 text-sm leading-6 text-[#52665C]">
            Bring the wisdom of Purana into your daily routine, wherever you
            are.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 md:col-span-2">
          {content.map((item) => (
            <article
              key={item.title}
              className="border-t border-[#1D3B30]/70 pt-5"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#52665C]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
