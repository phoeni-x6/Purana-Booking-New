
"use client";

import { useState } from "react";

const dropdowns = {
  treatments: [
    {
      title: "Steinberg am See",
      description:
        "Treatments, day retreats & private chalet retreats · book online",
      href: "/#locations",
    },
    {
      title: "Marktredwitz",
      description: "With our partner practice · book by phone",
      href: "/#locations",
    },
    {
      title: "Retreats in Germany",
      description: "Private mini retreats and group retreats",
      href: "/retreats/germany",
    },
    {
      title: "Retreats & Panchakarma in Sri Lanka",
      description: "At our Ayurveda centre and with our team",
      href: "/#retreats",
    },
  ],
  online: [
{
  title: "Online consultation",
  description: "45 min with Lakshani or Dr. Ishanka",
  href: "/online",
},
    {
  title: "Gentle Reset",
  description: "4 days at home · €119",
  href: "/online/gentle-reset",
},
    {
  title: "Seasonal Reset",
  description: "A 7-day seasonal programme with two consultations and personal support",
  href: "/online/seasonal-reset",
},
  {
  title: "Deep Reset",
  description: "More personal guidance with additional consultations",
  href: "/online/deep-reset",
},
    {
      title: "E-books",
      description: "Detox and seasonal guides · from €14.90",
      href: "/#online",
    },
  ],
  learn: [
    {
      title: "Blog",
      description: "Articles, recipes and rituals",
      href: "/learn/blog",
    },
    {
      title: "Free dosha quiz",
      description: "Find your constitution in 2 minutes",
      href: "/#learn",
    },
    {
      title: "Podcast",
      description: "Talk with Lakshani",
      href: "/#learn",
    },
    {
      title: "Monthly member seminar",
      description: "Live online · for Premium members",
      href: "/#learn",
    },
  ],
};

type DropdownName = keyof typeof dropdowns;

const dropdownLabels: Record<DropdownName, string> = {
  treatments: "Treatments & retreats",
  online: "Online & at home",
  learn: "Learn",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownName | null>(null);

  function toggleDropdown(name: DropdownName) {
    setActiveDropdown((current) => (current === name ? null : name));
  }

  function closeMenus() {
    setActiveDropdown(null);
    setMobileOpen(false);
  }

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#10291f] text-white">
        <div className="mx-auto flex max-w-7xl justify-end gap-5 px-5 py-2 text-xs">
          <a
            href="/#vouchers"
            className="whitespace-nowrap transition hover:text-[#e4ad3e]"
          >
            ♔ Gift vouchers
          </a>

          <a
            href="/#shop"
            className="whitespace-nowrap transition hover:text-[#e4ad3e]"
          >
            ♧ Shop at Nirvatana
          </a>

          <a
            href="https://wa.me/"
            className="whitespace-nowrap transition hover:text-[#e4ad3e]"
          >
            ◯ WhatsApp [+49 number]
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-[#193b30] text-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenus}
            className="shrink-0 font-serif text-xl tracking-wide sm:text-2xl"
          >
            PURANA AYURVEDA
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((value) => !value);
              setActiveDropdown(null);
            }}
            className="rounded-lg border border-white/30 px-3 py-2 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          {/* Main navigation */}
          <nav
            className={`${
              mobileOpen ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col gap-5 bg-[#193b30] px-6 py-6 text-sm shadow-xl md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {/* Home */}
            <a
              href="/"
              onClick={closeMenus}
              className="whitespace-nowrap transition hover:text-[#e4ad3e]"
            >
              Home
            </a>

            {/* Dropdown navigation */}
            {(Object.keys(dropdowns) as DropdownName[]).map((name) => (
              <div key={name} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(name)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(min-width: 768px)").matches) {
                      setActiveDropdown(name);
                    }
                  }}
                  aria-expanded={activeDropdown === name}
                  className="flex w-full items-center gap-2 whitespace-nowrap transition hover:text-[#e4ad3e]"
                >
                  {dropdownLabels[name]}

                  <svg
                    className={`h-3 w-3 transition-transform ${
                      activeDropdown === name ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m2 4 4 4 4-4" />
                  </svg>
                </button>

                {activeDropdown === name && (
                  <div
                    onMouseLeave={() => {
                      if (
                        window.matchMedia("(min-width: 768px)").matches
                      ) {
                        setActiveDropdown(null);
                      }
                    }}
                    className={`mt-3 w-full rounded-2xl bg-white p-3 text-[#193b30] shadow-xl md:absolute md:left-0 md:top-full md:mt-4 md:w-[296px]`}
                  >
                    {dropdowns[name].map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={closeMenus}
                        className="block rounded-lg px-3 py-3 transition hover:bg-[#f5f0e7]"
                      >
                        <span className="block text-sm font-semibold leading-5">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-[#64746b]">
                          {item.description}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Membership */}
            <a
              href="/membership"
              onClick={closeMenus}
              className="whitespace-nowrap transition hover:text-[#e4ad3e]"
            >
              Membership
            </a>

            {/* About */}
            <a
              href="/#about"
              onClick={closeMenus}
              className="whitespace-nowrap transition hover:text-[#e4ad3e]"
            >
              About
            </a>

            {/* Language */}
            <span className="shrink-0 whitespace-nowrap text-xs">
              DE | <strong>EN</strong>
            </span>

            {/* Login */}
            <a
              href="/#membership"
              onClick={closeMenus}
              className="rounded-full bg-[#e4ad3e] px-6 py-3 text-center font-semibold text-[#193b30] transition hover:bg-[#f2c76e]"
            >
              Login
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
