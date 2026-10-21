
const services = [
  {
    icon: "✳",
    number: "01",
    title: "Treatments & retreats",
    text: "Traditional therapies and personalised care in Germany.",
    href: "#locations",
  },
  {
    icon: "◉",
    number: "02",
    title: "Online consultation",
    text: "One-to-one guidance with Ayurveda practitioners.",
    href: "#online",
  },
  {
    icon: "⌂",
    number: "03",
    title: "Detox at home",
    text: "Gentle, guided reset programmes for everyday life.",
    href: "#online",
  },
  {
    icon: "❋",
    number: "04",
    title: "Restorative retreats",
    text: "Take a meaningful pause in Germany or Sri Lanka.",
    href: "#retreats",
  },
  {
    icon: "◇",
    number: "05",
    title: "Membership",
    text: "Wellness benefits, learning and exclusive savings.",
    href: "#membership",
  },
  {
    icon: "♫",
    number: "06",
    title: "Learn for free",
    text: "Explore doshas, Ayurveda rituals, podcasts and articles.",
    href: "#learn",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#a36b17]">
          Everything Ayurveda in one place
        </p>
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          A little more balance, in every part of life.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#64746b]">
          Find your own path to wellbeing with thoughtful care, traditional
          knowledge and experiences designed around you.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <a
            href={service.href}
            key={service.number}
            className="group rounded-2xl border border-[#e8e0d3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9b66e] hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#dce3d8] text-xl text-[#193b30]">
                {service.icon}
              </span>
              <span className="text-xs tracking-widest text-[#a9aa9e]">
                {service.number}
              </span>
            </div>

            <h3 className="mt-6 font-serif text-2xl">
              {service.title}
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-[#64746b]">
              {service.text}
            </p>

            <div className="mt-5 flex justify-between text-xs font-semibold">
              Explore service
              <span className="text-lg text-[#b17a20] transition group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
