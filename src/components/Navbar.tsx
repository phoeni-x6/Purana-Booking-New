
"use client";

import { useState } from "react";

const menus = {
  treatments: [
    {
      title: "Steinberg am See",
      description: "Treatments, day retreats and private chalet retreats",
      href: "/retreats/steinberg-am-see",
    },
    {
      title: "Marktredwitz",
      description: "Personal Ayurveda care",
      href: "/retreats/marktredwitz",
    },
    {
      title: "Retreats in Germany",
      description: "Private and group retreats",
      href: "/retreats/germany",
    },
    {
      title: "Retreats in Sri Lanka",
      description: "Ayurveda and Panchakarma",
      href: "/retreats/sri-lanka",
    },
  ],
  online: [
    {
      title: "Online consultation",
      description: "Personalised online sessions",
      href: "/online",
    },
    {
      title: "Gentle Reset",
      description: "Four-day programme · €119",
      href: "/online/gentle-reset",
    },
    {
      title: "Seasonal Reset",
      description: "Seven-day seasonal programme",
      href: "/online/seasonal-reset",
    },
    {
      title: "Deep Reset",
      description: "Extended personal guidance",
      href: "/online/deep-reset",
    },
    {
      title: "E-books",
      description: "Detox and seasonal guides",
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
      description: "Discover your constitution",
      href: "/#learn",
    },
    {
      title: "Podcast",
      description: "Talk with Lakshani",
      href: "/#learn",
    },
    {
      title: "Member seminars",
      description: "Live online sessions",
      href: "/#learn",
    },
  ],
};

type MenuName = keyof typeof menus;

const menuLabels: Record<MenuName, string> = {
  treatments: "Treatments & retreats",
  online: "Online wellness",
  learn: "Discover Ayurveda",
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMenus() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  return (
    <>
      <style>{`
        .purana-sticky-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .purana-utility-bar {
          background: #21452B;
          color: #EFE9C5;
        }

        .purana-utility-inner {
          width: 100%;
          max-width: 1280px;
          min-height: 30px;
          margin: 0 auto;
          padding: 5px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .purana-utility-inner p,
        .purana-utility-links a {
          margin: 0;
          font-size: 11px;
        }

        .purana-utility-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .purana-utility-links a {
          color: inherit;
          text-decoration: none;
          transition: color .2s;
        }

        .purana-utility-links a:hover {
          color: #DFC24D;
        }

        .purana-nav-shell {
          position: relative;
          width: 100%;
          background: #F8F5E8;
          color: #21452B;
          border-bottom: 1px solid #D8D0A9;
          box-shadow: 0 3px 12px rgba(33,69,43,.05);
        }

        .purana-nav-inner {
          width: 100%;
          max-width: 1280px;
          min-height: 76px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .purana-logo {
          width: 140px;
          height: 48px;
          flex: 0 0 140px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .purana-logo img {
          display: block;
          width: 100%;
          max-height: 48px;
          object-fit: contain;
          object-position: left center;
        }

        .purana-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid #D8D0A9;
          border-radius: 50%;
          background: transparent;
          color: #21452B;
          font-size: 21px;
          cursor: pointer;
        }

        .purana-navigation {
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          justify-content: flex-end;
          gap: 2px;
          min-width: 0;
        }

        .purana-nav-link,
        .purana-dropdown-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 12px 11px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: #21452B;
          font-family: inherit;
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background .2s, color .2s;
        }

        .purana-nav-link:hover,
        .purana-dropdown-trigger:hover,
        .purana-dropdown-trigger.is-open {
          background: #EFE9C5;
          color: #C14C38;
        }

        .purana-dropdown {
          position: relative;
          flex: 0 0 auto;
        }

        .purana-dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          z-index: 1100;
          width: 310px;
          padding: 12px;
          border: 1px solid #D8D0A9;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 18px 40px rgba(33,69,43,.14);
        }

        .purana-dropdown-heading {
          padding: 8px 10px 10px;
          color: #C14C38;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .purana-dropdown-item {
          display: block;
          padding: 11px 10px;
          border-radius: 10px;
          text-decoration: none;
          transition: background .2s;
        }

        .purana-dropdown-item:hover {
          background: #F8F5E8;
        }

        .purana-dropdown-item strong {
          display: block;
          color: #21452B;
          font-size: 13px;
          font-weight: 600;
        }

        .purana-dropdown-item span {
          display: block;
          margin-top: 4px;
          color: #6B705C;
          font-size: 11px;
          line-height: 1.6;
        }

        .purana-language {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 8px;
          font-size: 11px;
          white-space: nowrap;
        }

        .purana-language a {
          color: #6B705C;
          text-decoration: none;
        }

        .purana-book-button {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 19px;
          border-radius: 999px;
          background: #2F5D39;
          color: #EFE9C5;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s;
        }

        .purana-book-button:hover {
          background: #21452B;
        }

        .purana-book-button span {
          color: #DFC24D;
        }

        @media (min-width: 768px) {
          .purana-navigation {
            display: flex !important;
          }

          .purana-menu-toggle {
            display: none !important;
          }
        }

        @media (max-width: 1100px) and (min-width: 768px) {
          .purana-nav-inner {
            gap: 8px;
            padding-left: 14px;
            padding-right: 14px;
          }

          .purana-logo {
            width: 95px;
            flex-basis: 95px;
          }

          .purana-nav-link,
          .purana-dropdown-trigger {
            padding: 10px 6px;
            font-size: 11px;
            gap: 4px;
          }

          .purana-book-button {
            padding: 11px 12px;
            font-size: 11px;
          }

          .purana-language {
            padding: 0 4px;
            gap: 4px;
          }
        }

        @media (max-width: 767px) {
          .purana-nav-inner {
            min-height: 68px;
            padding: 10px 18px;
          }

          .purana-logo {
            width: 125px;
            height: 44px;
            flex-basis: 125px;
          }

          .purana-menu-toggle {
            display: inline-flex;
          }

          .purana-navigation {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1050;
            max-height: calc(100vh - 110px);
            overflow-y: auto;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 3px;
            padding: 14px 18px 20px;
            border-top: 1px solid #D8D0A9;
            background: #F8F5E8;
            box-shadow: 0 15px 25px rgba(33,69,43,.12);
          }

          .purana-navigation.is-mobile-open {
            display: flex;
          }

          .purana-nav-link,
          .purana-dropdown-trigger {
            width: 100%;
            min-height: 43px;
            justify-content: space-between;
            padding: 12px 14px;
            font-size: 14px;
            text-align: left;
          }

          .purana-dropdown {
            width: 100%;
          }

          .purana-dropdown-panel {
            position: static;
            width: 100%;
            margin: 4px 0 8px;
            padding: 8px;
            box-shadow: none;
          }

          .purana-language {
            padding: 12px 14px;
          }

          .purana-book-button {
            margin-top: 5px;
            min-height: 45px;
          }

          .purana-utility-inner {
            padding: 6px 12px;
          }

          .purana-utility-inner p,
          .purana-utility-links a {
            font-size: 9px;
          }

          .purana-utility-links {
            gap: 9px;
          }
        }

        @media (max-width: 390px) {
          .purana-utility-inner p {
            max-width: 145px;
            line-height: 1.4;
          }

          .purana-utility-links {
            gap: 7px;
          }

          .purana-utility-links a {
            font-size: 8px;
          }
        }
      `}</style>

      {/* Sticky wrapper keeps both bars together */}
      <div className="purana-sticky-wrapper">
        {/* Utility bar */}
        <div className="purana-utility-bar">
          <div className="purana-utility-inner">
            <p>
              <span style={{ color: "#DFC24D", marginRight: 8 }}>✳</span>
              Traditional wisdom. Personal wellbeing.
            </p>

            <div className="purana-utility-links">
              <a href="/#vouchers">Gift vouchers</a>
              <a href="/#shop">Nivartana shop</a>
              <a href="https://wa.me/">WhatsApp ↗</a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <header className="purana-nav-shell">
          <div className="purana-nav-inner">
            <a
              href="/"
              className="purana-logo"
              aria-label="Purana Ayurveda home"
              onClick={closeMenus}
            >
              <img src="/images/logo.png" alt="Purana Ayurveda" />
            </a>

            <button
              type="button"
              className="purana-menu-toggle"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="purana-navigation"
              onClick={() => {
                setMobileOpen((current) => !current);
                setOpenMenu(null);
              }}
            >
              {mobileOpen ? "×" : "☰"}
            </button>

            <nav
              id="purana-navigation"
              className={`purana-navigation ${
                mobileOpen ? "is-mobile-open" : ""
              }`}
            >
              <a
                href="/"
                className="purana-nav-link"
                onClick={closeMenus}
              >
                Home
              </a>

              {(Object.keys(menus) as MenuName[]).map((name) => (
                <div className="purana-dropdown" key={name}>
                  <button
                    type="button"
                    className={`purana-dropdown-trigger ${
                      openMenu === name ? "is-open" : ""
                    }`}
                    aria-expanded={openMenu === name}
                    onClick={() =>
                      setOpenMenu((current) =>
                        current === name ? null : name
                      )
                    }
                  >
                    {menuLabels[name]}
                    <span aria-hidden="true">
                      {openMenu === name ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {openMenu === name && (
                    <div className="purana-dropdown-panel">
                      <div className="purana-dropdown-heading">
                        {menuLabels[name]}
                      </div>

                      {menus[name].map((item) => (
                        <a
                          href={item.href}
                          key={item.title}
                          className="purana-dropdown-item"
                          onClick={closeMenus}
                        >
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/membership"
                className="purana-nav-link"
                onClick={closeMenus}
              >
                Membership
              </a>

              <a
                href="/#about"
                className="purana-nav-link"
                onClick={closeMenus}
              >
                About
              </a>

              <div className="purana-language">
                <strong>EN</strong>
                <span style={{ color: "#D8D0A9" }}>|</span>
                <a href="/de">DE</a>
              </div>

              <a
                href="/#booking"
                className="purana-book-button"
                onClick={closeMenus}
              >
                Book now <span>→</span>
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
