
const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Our locations", "#locations"],
      ["Online consultation", "#online"],
      ["Ayurveda retreats", "#retreats"],
      ["Membership", "#membership"],
      ["Learn & journal", "#learn"],
    ],
  },
  {
    title: "Get in touch",
    links: [
      ["Book an experience", "#booking"],
      ["WhatsApp us", "https://wa.me/"],
      ["Email our team", "mailto:hello@example.com"],
    ],
  },
  {
    title: "Information",
    links: [
      ["About Purana", "#about"],
      ["Privacy policy", "/privacy"],
      ["Terms & conditions", "/terms"],
      ["Legal notice", "/legal"],
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    short: "ig",
    href: "#",
  },
  {
    label: "Facebook",
    short: "f",
    href: "#",
  },
  {
    label: "YouTube",
    short: "▶",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="relative overflow-hidden bg-[#21452B] text-[#F8F5E8]"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#DFC24D]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#DFC24D]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#2F5D39]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand column */}
          <div className="max-w-sm">
            <a
              href="/"
              aria-label="Purana Ayurveda home"
              className="group inline-flex flex-col"
            >
              <span className="font-serif text-3xl tracking-[0.12em] text-[#F8F5E8] transition-colors group-hover:text-[#DFC24D]">
                PURANA
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#DFC24D]">
                Ayurveda & Wellness
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#D5DFD3]">
              Wellness rooted in tradition. Care designed for real life.
              Discover a more balanced way to live through the wisdom of
              Ayurveda.
            </p>

            {/* Social links */}
            <div className="mt-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Follow our journey
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[#F8F5E8]/20 bg-[#F8F5E8]/5 text-sm text-[#F8F5E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#DFC24D] hover:bg-[#DFC24D] hover:text-[#21452B]"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-serif text-lg text-[#F8F5E8]">
                {group.title}
              </h3>

              <div className="mb-5 h-px w-10 bg-[#DFC24D]" />

              <ul className="space-y-3.5">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm text-[#D5DFD3] transition-colors duration-200 hover:text-[#DFC24D]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#DFC24D]/60 transition-all duration-200 group-hover:scale-150 group-hover:bg-[#DFC24D]" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Wellness statement */}
        <div className="border-t border-[#F8F5E8]/15 py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-serif text-base italic text-[#F8F5E8]/90">
              "A journey back to balance, naturally."
            </p>

            <a
              href="#top"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#DFC24D] transition-colors hover:text-[#F8F5E8]"
            >
              Back to top
              <span aria-hidden="true" className="text-base">
                ↑
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-3 border-t border-[#F8F5E8]/10 py-5 text-xs text-[#B9C9BD] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Purana Ayurveda. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
