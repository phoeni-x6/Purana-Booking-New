
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

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
      href: "/online/ebooks",
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
      href: "/learn/podcast",
    },
    {
      title: "Member seminars",
      description: "Live online sessions",
      href: "/learn/member-seminars",
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

  // Authentication state
  const [userName, setUserName] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [authError, setAuthError] = useState("");

  function closeMenus() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Fetch the customer's first name from the profiles table
  useEffect(() => {
    const supabase = createClient();
    let active = true;

    async function loadUserName(userId: string | undefined) {
      if (!userId) {
        if (active) setUserName(null);
        return;
      }

      const { data, error } = await supabase
          .from("profiles")
          .select("first_name")
          .eq("id", userId)
          .single();

      if (!active) return;

      if (!error && data?.first_name) {
        setUserName(data.first_name);
      } else {
        setUserName(null);
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const userId = session?.user?.id;

      if (!userId) {
        setUserName(null);
        setAuthLoading(false);
        return;
      }

      // Defer the profile query until after the auth callback.
      setTimeout(() => {
        if (active) {
          loadUserName(userId);
        }
      }, 0);
    });

    async function initializeAuth() {
      const { data, error } = await supabase.auth.getUser();

      if (!active) return;

      if (error || !data.user) {
        setUserName(null);
      } else {
        await loadUserName(data.user.id);
      }

      if (active) {
        setAuthLoading(false);
      }
    }

    initializeAuth();

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  // Sign out
  async function handleSignOut() {
    if (signingOut) return;

    setSigningOut(true);
    setAuthError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      setAuthError("Unable to sign out. Please try again.");
      setSigningOut(false);
      return;
    }

    setUserName(null);
    setSigningOut(false);
    closeMenus();
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
          background: var(--forest-dark);
          color: var(--cream);
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
          color: var(--gold);
        }

        .purana-nav-shell {
          position: relative;
          width: 100%;
          background: var(--surface);
          color: var(--forest-dark);
          border-bottom: 1px solid var(--border);
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
          border: 1px solid var(--border);
          border-radius: 50%;
          background: transparent;
          color: var(--forest-dark);
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
          padding: 12px 10px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: var(--forest-dark);
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
          background: var(--cream);
          color: var(--terracotta);
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
          border: 1px solid var(--border);
          border-radius: 16px;
          background: white;
          box-shadow: 0 18px 40px rgba(33,69,43,.14);
        }

        .purana-dropdown-heading {
          padding: 8px 10px 10px;
          color: var(--terracotta);
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
          background: var(--surface);
        }

        .purana-dropdown-item strong {
          display: block;
          color: var(--forest-dark);
          font-size: 13px;
          font-weight: 600;
        }

        .purana-dropdown-item span {
          display: block;
          margin-top: 4px;
          color: var(--text-muted);
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
          color: var(--text-muted);
          text-decoration: none;
        }

        .purana-language a:hover {
          color: var(--terracotta);
        }

        .purana-auth-links {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-left: 5px;
          flex: 0 0 auto;
        }

        .purana-login-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 10px 15px;
          border: 1px solid transparent;
          border-radius: 999px;
          background: transparent;
          color: var(--forest-dark);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: all .2s;
        }

        .purana-login-button:hover {
          border-color: var(--border);
          background: var(--cream);
          color: var(--terracotta);
        }

        .purana-signup-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 44px;
          padding: 11px 20px;
          border: 1px solid var(--gold);
          border-radius: 999px;
          background: var(--gold);
          color: var(--forest-dark);
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: all .25s;
        }

        .purana-signup-button:hover {
          border-color: var(--terracotta);
          background: var(--terracotta);
          color: white;
          transform: translateY(-1px);
        }

        .purana-signup-button span {
          transition: transform .2s;
        }

        .purana-signup-button:hover span {
          transform: translateX(3px);
        }

        .purana-auth-error {
          position: absolute;
          right: 20px;
          top: calc(100% + 8px);
          z-index: 1200;
          padding: 10px 14px;
          border: 1px solid var(--terracotta);
          border-radius: 10px;
          background: var(--surface);
          color: var(--terracotta);
          font-size: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,.08);
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
            gap: 7px;
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

          .purana-language {
            padding: 0 4px;
            gap: 4px;
          }

          .purana-auth-links {
            gap: 3px;
            margin-left: 0;
          }

          .purana-login-button {
            padding: 9px 9px;
            font-size: 11px;
          }

          .purana-signup-button {
            padding: 10px 12px;
            font-size: 11px;
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
            border-top: 1px solid var(--border);
            background: var(--surface);
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

          .purana-auth-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 8px 0 0;
            padding-top: 14px;
            border-top: 1px solid var(--border);
          }

          .purana-login-button,
          .purana-signup-button {
            width: 100%;
            min-height: 46px;
            justify-content: center;
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

        <div className="purana-sticky-wrapper">
          {/* Utility bar */}
          <div className="purana-utility-bar">
            <div className="purana-utility-inner">
              <p>
              <span style={{ color: "var(--gold)", marginRight: 8 }}>
                ✳
              </span>
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
            {/* Logo */}
            <Link
              href="/"
              className="purana-logo"
              aria-label="Purana Ayurveda home"
              onClick={closeMenus}
            >
              <img src="/images/logo.png" alt="Purana Ayurveda" />
            </Link>

              {/* Mobile menu button */}
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
                <Link
                    href="/"
                    className="purana-nav-link"
                    onClick={closeMenus}
                >
                  Home
                </Link>

                {/* Dropdown menus */}
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
                                  current === name ? null : name,
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
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className="purana-dropdown-item"
                                    onClick={closeMenus}
                                >
                                  <strong>{item.title}</strong>
                                  <span>{item.description}</span>
                                </Link>
                            ))}
                          </div>
                      )}
                    </div>
                ))}

                <Link
                    href="/membership"
                    className="purana-nav-link"
                    onClick={closeMenus}
                >
                  Membership
                </Link>

                <Link
                    href="/#about"
                    className="purana-nav-link"
                    onClick={closeMenus}
                >
                  About
                </Link>

                {/* Language */}
                <div className="purana-language">
                  <strong>EN</strong>
                  <span style={{ color: "var(--border)" }}>|</span>
                  <Link href="/de" onClick={closeMenus}>
                    DE
                  </Link>
                </div>

                {/* Authentication */}
                <div className="purana-auth-links">
                  {authLoading ? (
                      <span className="purana-login-button">
                    Loading...
                  </span>
                  ) : userName ? (
                      <>
                    <span
                        className="purana-login-button"
                        style={{ cursor: "default" }}
                    >
                      Hi, {userName}
                    </span>

                        <button
                            type="button"
                            className="purana-signup-button"
                            onClick={handleSignOut}
                            disabled={signingOut}
                        >
                          {signingOut ? "Signing out..." : "Sign out"}
                        </button>
                      </>
                  ) : (
                      <>
                        <Link
                            href="/login"
                            className="purana-login-button"
                            onClick={closeMenus}
                        >
                          Login
                        </Link>

                        <Link
                            href="/signup"
                            className="purana-signup-button"
                            onClick={closeMenus}
                        >
                          Sign up
                          <span aria-hidden="true">→</span>
                        </Link>
                      </>
                  )}
                </div>

                {authError && (
                    <p className="purana-auth-error" role="alert">
                      {authError}
                    </p>
                )}
              </nav>
            </div>
          </header>
        </div>
      </>
  );
}
