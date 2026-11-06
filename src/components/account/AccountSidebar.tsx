
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  UserRound,
  CalendarDays,
  Settings,
  LogOut,
  Leaf,
  ChevronRight,
  X,
} from "lucide-react";

import type { AccountTab } from "./AccountLayout";

type Props = {
  activeTab: AccountTab;
  setActiveTab: (tab: AccountTab) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "profile", label: "My Profile", icon: UserRound },
  { id: "bookings", label: "My Bookings", icon: CalendarDays },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

export default function AccountSidebar({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props) {
  return (
    <>
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col bg-[var(--forest-dark)] px-5 py-7 text-[var(--cream)] transition-transform duration-300 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between px-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/50 bg-white/10">
              <Leaf size={23} className="text-[var(--gold)]" />
            </div>

            <div>
              <p className="font-serif text-xl">Purana</p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--gold)]">
                Ayurveda
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]/80">
          Account menu
        </p>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[13px] transition ${
                  active
                    ? "bg-[var(--cream)] font-semibold text-[var(--forest-dark)]"
                    : "text-[var(--cream)]/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.7} />
                {item.label}

                {active && <ChevronRight size={15} className="ml-auto" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="mb-5 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
            <Leaf size={20} className="mb-3 text-[var(--gold)]" />

            <p className="font-serif text-lg">Your wellness journey</p>

            <p className="mt-2 text-[11px] leading-5 text-[var(--cream)]/65">
              Small steps towards balance create meaningful change.
            </p>

            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-[var(--gold)]"
            >
              Explore Purana <ChevronRight size={13} />
            </Link>
          </div>

          <div className="border-t border-white/15 pt-5">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-xs text-[var(--cream)]/70 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut size={17} />
              Back to website
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
