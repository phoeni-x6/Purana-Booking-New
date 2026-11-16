
import Image from "next/image";

const chaletGuide = [
  {
    icon: "❄",
    title: "Air Conditioning & Heating",
    description:
      "Information about the chalet's indoor climate, cooling and heating facilities.",
    details: [
      "The exact climate-control and heating facilities may vary by chalet type.",
      "For instructions on operating the equipment and recommended settings, please consult the information provided in your chalet or ask the resort reception.",
    ],
  },
  {
    icon: "▦",
    title: "Arrival & Departure",
    description:
      "Everything you need to prepare for arrival and departure.",
    details: [
      "Plan your journey to inMotion CHALET Resort at Steinberger See.",
      "Please confirm the current check-in and check-out times with the resort before your arrival.",
      "For special arrival arrangements, contact the resort in advance.",
    ],
  },
  {
    icon: "⚑",
    title: "Reception & Information Available in the Chalet",
    description:
      "An overview of information and services available during your stay.",
    details: [
      "For questions about your reservation, chalet facilities or your stay, contact the resort directly.",
      "Check the information provided in your chalet for instructions about the accommodation and its facilities.",
      "Please confirm the current reception hours and available services before travelling.",
    ],
  },
  {
    icon: "☕",
    title: "Coffee Machine",
    description:
      "Coffee facilities for a relaxed start to your morning.",
    details: [
      "The Strandchalets are described as having a Nespresso capsule coffee machine.",
      "Equipment may vary by chalet category. Please confirm the coffee machine type and whether capsules are supplied for your selected accommodation.",
    ],
  },
  {
    icon: "⌂",
    title: "Choose Your Chalet",
    description:
      "Choose the chalet category that suits your preferred stay.",
    details: [
      "Strandchalets: approximately 80 m², two double bedrooms, a private sauna with lake views and a terrace with whirlpool.",
      "Seechalet: two bedrooms, a living area with integrated kitchenette, a bathroom with sauna and a private terrace.",
      "Relaxchalets: two bedrooms, a private sauna with relaxation area and a covered outdoor whirlpool.",
      "All three chalet categories are described for four guests. Confirm any additional sleeping arrangements directly with the resort.",
    ],
  },
  {
    icon: "♧",
    title: "Dogs & Pets",
    description:
      "Information for guests planning a stay with their dog.",
    details: [
      "If you would like to bring a dog, please confirm the resort's current pet policy before booking.",
      "Ask about any additional fees, permitted areas and rules that apply to your chosen chalet.",
    ],
  },
  {
    icon: "♧",
    title: "Facilities & Leisure Activities",
    description:
      "Discover the facilities and ways to enjoy your time at the lake.",
    details: [
      "The published chalet descriptions include private terraces and access to the lake.",
      "Depending on the chalet category, facilities may include a sauna, whirlpool, television and Wi-Fi.",
      "The Steinberger See area offers opportunities to explore the surrounding natural landscape. Check local information for seasonal activities.",
    ],
  },
  {
    icon: "⌘",
    title: "Family, Internet & Kitchen",
    description:
      "Useful information for families and guests preparing their stay.",
    details: [
      "The published descriptions list two bedrooms in each chalet category.",
      "The Strandchalets have a fully equipped kitchen with dishwasher, fridge-freezer, microwave, two induction cooking zones and a Nespresso capsule machine.",
      "A baby cot or sofa bed for a fifth person may be available in a Strandchalet for an additional charge. Confirm availability before booking.",
      "Wi-Fi is listed among the facilities. Please confirm the current internet arrangements and kitchen equipment for your chosen chalet.",
    ],
  },
  {
    icon: "◷",
    title: "Late Check-In & Late Check-Out",
    description:
      "Ask about arrival or departure outside the standard times.",
    details: [
      "Late arrival or late departure may require advance arrangements.",
      "Contact the resort before your stay to ask whether your requested time is possible and whether an additional fee applies.",
    ],
  },
  {
    icon: "⌖",
    title: "Parking & EV Charging Stations",
    description:
      "Plan your arrival by car and check electric vehicle charging options.",
    details: [
      "The resort is located at In d. Oder 15, 92449 Steinberg am See, Germany.",
      "Please ask the resort about parking arrangements, availability of EV charging stations and any applicable charges before travelling.",
    ],
  },
  {
    icon: "⇄",
    title: "Public Transport",
    description:
      "Information to help you plan a journey without a car.",
    details: [
      "Check current public transport connections to Steinberg am See before travelling.",
      "Routes, timetables and onward connections may change. Use an up-to-date journey planner and confirm local transfer options if needed.",
    ],
  },
  {
    icon: "♨",
    title: "Sauna",
    description:
      "Find out about the private sauna facilities in your chalet.",
    details: [
      "The Strandchalets have a private sauna with panoramic views of the lake.",
      "The Seechalet description includes a bathroom with sauna.",
      "The Relaxchalets feature a private sauna with an integrated relaxation room.",
      "Please consult the instructions provided at the resort for safe operation and usage guidance.",
    ],
  },
  {
    icon: "▤",
    title: "Storage Room",
    description:
      "Ask about available storage for your personal belongings and equipment.",
    details: [
      "Storage arrangements may differ depending on the chalet category.",
      "If you need space for bicycles, outdoor equipment or bulky luggage, please confirm the available storage facilities with the resort.",
    ],
  },
  {
    icon: "☀",
    title: "Summer Activities",
    description:
      "Enjoy the lake and explore outdoor activities in the warmer months.",
    details: [
      "Steinberger See and the surrounding region offer a natural setting for outdoor recreation.",
      "Available activities, facilities and seasonal services can change throughout the year.",
      "Check local visitor information for current activities and conditions during your stay.",
    ],
  },
  {
    icon: "⌁",
    title: "Oberpfälzer Seenland Region",
    description:
      "Explore the lakes, countryside and attractions of the surrounding region.",
    details: [
      "The Oberpfälzer Seenland is a lake district in Bavaria with opportunities to explore nature and enjoy outdoor recreation.",
      "Discover local destinations, walking routes and seasonal attractions while planning your stay around Steinberger See.",
      "For current regional information, visit the official Oberpfälzer Seenland tourism website.",
    ],
  },
];

const chalets = [
  {
    number: "01",
    name: "The Strandchalets",
    image: "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/diechalet.webp",
    description:
      "The spacious chalet directly by the water combines elegant comfort with beautiful views of the lake.",
    facts: ["Approx. 80 m²", "4 guests", "2 double beds"],
    features: [
      "Private sauna with panoramic lake views",
      "Private terrace with whirlpool",
      "Direct lake access",
      "Fully equipped kitchen",
      "Air conditioning, Smart TV and Wi-Fi",
    ],
  },
  {
    number: "02",
    name: "The Seechalet",
    image: "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/das%20chalet.webp",
    description:
      "A peaceful retreat with two bedrooms, a private terrace and sauna, surrounded by nature.",
    facts: ["4 guests", "2 bedrooms", "Private sauna"],
    features: [
      "Two separate bedrooms",
      "Living room with integrated kitchenette",
      "Bathroom with sauna",
      "Private terrace",
      "Wi-Fi and TV",
    ],
  },
  {
    number: "03",
    name: "The Relaxchalets",
    image: "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/dierelax.webp",
    description:
      "A private wellness area with sauna, relaxation room and covered whirlpool makes these chalets a special place to unwind.",
    facts: ["4 guests", "2 bedrooms", "Wellness area"],
    features: [
      "Private sauna with integrated relaxation room",
      "Covered outdoor whirlpool",
      "Living area with kitchenette",
      "Terrace for peaceful moments",
      "Wi-Fi and TV",
    ],
  },
];

const highlights = [
  { number: "03", label: "Chalet categories" },
  { number: "04", label: "Guests per chalet" },
  { number: "01", label: "Special place to unwind" },
];

export default function ChaletsPage() {
  return (
    <main className="overflow-hidden bg-[#F5F0E7] text-[#263A2B]">
      {/* HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#F5F0E7] lg:min-h-[740px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/gal2.webp')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#F5F0E7_0%,rgba(245,240,231,0.98)_22%,rgba(245,240,231,0.91)_42%,rgba(245,240,231,0.58)_65%,rgba(245,240,231,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#F5F0E7] to-transparent" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#DFC24D]/40" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#2F5D39]/15" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[var(--container-width)] items-center px-6 py-24 sm:px-10 lg:min-h-[740px] lg:px-14">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C14C38]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#533E23]">
                inMotion CHALET Resort · Steinberger See
              </p>
            </div>

            <h1 className="font-[var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-tight text-[#21452B] sm:text-6xl lg:text-7xl">
              Ayurveda in a
              <span className="block text-[#A77C2E]">
                5-Star Luxury Chalet.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#526052] sm:text-lg">
              Experience a natural holiday at Steinberger See, surrounded
              by the beautiful Bavarian countryside. Discover private
              chalets, relaxing wellness experiences and the peaceful
              atmosphere of the Bavarian lake region.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#unsere-chalets"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2F5D39] px-7 py-3 text-sm font-semibold text-[#F8F5E8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#21452B]"
              >
                Discover the Chalets
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#anfrage"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#2F5D39]/35 bg-[#F8F5E8]/50 px-7 py-3 text-sm font-medium text-[#21452B] backdrop-blur-sm transition hover:border-[#C14C38] hover:bg-[#F8F5E8]"
              >
                Make an Enquiry
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#2F5D39]/15 pt-6 text-sm text-[#526052]">
              <span className="flex items-center gap-2">
                <span className="text-[#A77C2E]">✳</span>
                Private Chalets
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#A77C2E]">✳</span>
                Sauna & Wellness
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#A77C2E]">✳</span>
                Lakeside Holidays
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#21452B]/70 lg:flex">
          <span className="h-px w-10 bg-[#A77C2E]" />
          Bavaria · Germany
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#533E23]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Your Private Retreat
            </p>

            <h2 className="max-w-xl font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#21452B] sm:text-5xl">
              Less Everyday Life.
              <span className="block text-[#A77C2E]">
                More Time for Yourself.
              </span>
            </h2>
          </div>

          <div className="space-y-5 pt-2 text-base leading-8 text-[#6B705C]">
            <p>
              Surrounded by the natural beauty of Steinberger See,
              inMotion CHALET Resort offers a selection of private
              chalets designed for a relaxing stay.
            </p>

            <p>
              Whether you prefer a spacious Strandchalet, a cosy
              Seechalet or a Relaxchalet with its own private wellness
              area, discover the accommodation that suits your wishes.
            </p>

            <p>
              Here you will find information about the different chalet
              categories as well as a practical chalet guide. For current
              prices, availability and booking conditions, please contact
              the resort directly.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-[#D8D0A9] pt-8 sm:grid-cols-3 sm:gap-8">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <span className="font-[var(--font-heading)] text-4xl font-normal text-[#A77C2E]">
                {item.number}
              </span>
              <span className="text-sm text-[#6B705C]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CHALET TYPES */}
      <section
        id="unsere-chalets"
        className="relative overflow-hidden border-y border-[#D8D0A9] bg-[#EEE9DC] px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full border border-[#DFC24D]/30" />

        <div className="relative mx-auto max-w-[var(--container-width)]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#533E23]">
                <span className="h-px w-8 bg-[#C14C38]" />
                Our Accommodation
              </p>

              <h2 className="max-w-2xl font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#21452B] sm:text-5xl">
                Three Chalets.
                <span className="block text-[#A77C2E]">
                  Your Private Retreat.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B705C]">
              Discover the unique features of our three chalet
              categories and find the perfect accommodation for your stay.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {chalets.map((chalet) => (
              <article
                key={chalet.number}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(45,60,39,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E5DEB7]">
                  <Image
                    src={chalet.image}
                    alt={chalet.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/70 via-transparent to-[#21452B]/5" />

                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#F8F5E8]/90 font-[var(--font-heading)] text-sm text-[#21452B] backdrop-blur-sm">
                    {chalet.number}
                  </span>

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-[#21452B]/65 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                    {chalet.facts[0]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#A77C2E]">
                    Chalet {chalet.number}
                  </p>

                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-normal text-[#21452B]">
                    {chalet.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6B705C]">
                    {chalet.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {chalet.facts.slice(1).map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/40 px-3 py-1.5 text-xs text-[#6B705C]"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#D8D0A9] pt-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#533E23]">
                      Features & Facilities
                    </p>

                    <ul className="space-y-3">
                      {chalet.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-6 text-[#526052]"
                        >
                          <span className="mt-0.5 text-[#C14C38]">✳</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                 
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NATURE */}
      <section className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[28px] border-l border-t border-[#DFC24D] sm:-left-6 sm:-top-6" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-[#E5DEB7]">
              <Image
                src="https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/IMages/chalets.webp"
                alt="Nature and landscape around Steinberger See"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#21452B]/35 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full border border-white/50 bg-[#F8F5E8]/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#21452B] backdrop-blur-sm">
                Experience Nature
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#533E23]">
              <span className="h-px w-8 bg-[#C14C38]" />
              The Surroundings
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#21452B] sm:text-5xl">
              A Private Retreat
              <span className="block text-[#A77C2E]">
                Surrounded by Nature.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6B705C]">
              Set in a peaceful and idyllic environment, the landscape
              around Steinberger See invites you to leave everyday life
              behind and discover something new.
            </p>

            <p className="mt-4 text-base leading-8 text-[#6B705C]">
              Explore the lake district, enjoy time outdoors and return
              to the tranquillity of your chalet afterwards.
            </p>

            <a
              href="https://www.oberpfaelzer-seenland.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#2F5D39] transition hover:gap-5 hover:text-[#C14C38]"
            >
              Discover Oberpfälzer Seenland
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CHALET GUIDE */}
      <section
        id="chalet-guide"
        className="relative overflow-hidden border-y border-[#D8D0A9] bg-[#EEE9DC] px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full border border-[#DFC24D]/30" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#533E23]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Everything You Need to Know
              <span className="h-px w-8 bg-[#C14C38]" />
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal text-[#21452B] sm:text-5xl">
              Your Chalet Guide
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B705C]">
              Find all the important information about your stay in one
              place. Open the individual sections to discover more.
            </p>
          </div>

          <div className="space-y-3">
            {chaletGuide.map((item, index) => (
              <details
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] shadow-[0_3px_12px_rgba(45,60,39,0.03)] transition duration-300 open:border-[#A77C2E]/50 open:shadow-[0_10px_30px_rgba(45,60,39,0.07)]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] font-[var(--font-heading)] text-lg text-[#533E23] transition group-open:bg-[#2F5D39] group-open:text-[#DFC24D]">
                    {item.icon}
                  </span>

                  <span className="flex-1 font-[var(--font-body)] text-sm font-semibold leading-6 text-[#263A2B] sm:text-base">
                    {item.title}
                  </span>

                  <span className="hidden text-xs font-medium text-[#A77C2E] sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-[#2F5D39] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="border-t border-[#D8D0A9] px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                  <p className="mb-5 text-sm leading-7 text-[#6B705C]">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-7 text-[#526052]"
                      >
                        <span className="mt-0.5 text-[#C14C38]">✳</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 flex gap-4 rounded-2xl border border-[#DFC24D]/50 bg-[#F5F0E7] p-5 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE9C5] text-[#A77C2E]">
              i
            </span>

            <p className="text-sm leading-7 text-[#6B705C]">
              <strong className="text-[#21452B]">
                Still have questions?
              </strong>{" "}
              For confirmed information about facilities, pets, check-in
              times, parking and other conditions, please contact the
              resort directly.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="standort"
        className="mx-auto max-w-[var(--container-width)] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#533E23]">
              <span className="h-px w-8 bg-[#C14C38]" />
              Find Your Way Here
            </p>

            <h2 className="font-[var(--font-heading)] text-4xl font-normal leading-tight text-[#21452B] sm:text-5xl">
              Arrive at
              <span className="block text-[#A77C2E]">
                Steinberger See.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6B705C]">
              Discover the chalets of inMotion CHALET Resort in
              Steinberg am See, Bavaria.
            </p>

            <div className="mt-8 rounded-[26px] border border-[#D8D0A9] bg-[#F8F5E8] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9C5] text-[#A77C2E]">
                  ⌖
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#533E23]">
                  Our Location
                </span>
              </div>

              <p className="font-[var(--font-heading)] text-2xl text-[#21452B]">
                inMotion CHALET Resort
              </p>

              <p className="mt-3 text-sm leading-7 text-[#6B705C]">
                In d. Oder 15
                <br />
                92449 Steinberg am See
                <br />
                Germany
              </p>

              <a
                href="tel:+491759479619"
                className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#2F5D39] transition hover:text-[#C14C38]"
              >
                +49 175 9479619
              </a>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2F5D39] px-6 py-3 text-sm font-semibold text-[#F8F5E8] transition hover:bg-[#21452B]"
                >
                  Get Directions ↗
                </a>

                <a
                  href="https://purana-ayurveda.de/chalets"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#2F5D39]/35 px-6 py-3 text-sm font-semibold text-[#2F5D39] transition hover:border-[#2F5D39] hover:bg-[#2F5D39] hover:text-white"
                >
                  Chalet Information
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#E5DEB7] p-2 sm:min-h-[480px] sm:p-3">
            <iframe
              title="inMotion CHALET Resort at Steinberger See"
              src="https://maps.google.com/maps?q=In%20d.%20Oder%2015%2C%2092449%20Steinberg%20am%20See%2C%20Germany&z=14&output=embed"
              className="h-[340px] w-full rounded-[22px] sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      
    </main>
  );
}
