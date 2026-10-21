
const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Our locations", "#locations"],
      ["Online consultation", "#online"],
      ["Retreats", "#retreats"],
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
      ["Privacy policy", "#privacy"],
      ["Terms & conditions", "#terms"],
      ["Legal notice", "#legal"],
    ],
  },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-[#10291f] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-14">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="font-serif text-2xl tracking-wide">
              PURANA <span className="text-[#e4ad3e]">AYURVEDA</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-[#b9c9bd]">
              Wellness rooted in tradition.
              <br />
              Care designed for real life.
            </p>

            <div className="mt-5 flex gap-3">
              {["ig", "f", "▶"].map((social) => (
                <a
                  key={social}
                  href="#about"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#446252] text-xs transition hover:border-[#e4ad3e] hover:text-[#e4ad3e]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs text-[#c2d0c5] transition hover:text-[#e4ad3e]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-[#355143] py-5 text-xs text-[#aebfb3] sm:flex-row">
          <p>© 2026 Purana Ayurveda. All rights reserved.</p>
          <p>
            Made with care <span className="text-[#e4ad3e]">✳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
