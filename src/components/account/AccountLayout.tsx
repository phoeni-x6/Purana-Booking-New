
"use client";

import { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import AccountHeader from "./AccountHeader";
import Overview from "./Overview";
import ProfileDetails from "./ProfileDetails";
import MyBookings from "./MyBookings";
import AccountSettings from "./AccountSettings";

export type AccountTab =
  | "overview"
  | "profile"
  | "bookings"
  | "settings";

export default function AccountLayout() {
  const [activeTab, setActiveTab] = useState<AccountTab>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const titles: Record<AccountTab, string> = {
    overview: "Welcome to your wellness space",
    profile: "My personal profile",
    bookings: "My bookings",
    settings: "Account settings",
  };

  const descriptions: Record<AccountTab, string> = {
    overview: "Manage your account and keep your wellness journey on track.",
    profile: "Keep your personal information up to date.",
    bookings: "View and manage your appointments and retreat reservations.",
    settings: "Manage your preferences and account security.",
  };

  return (
    <div className="flex min-h-screen bg-[var(--surface)] text-[var(--forest-dark)]">
      <AccountSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="min-w-0 flex-1">
        <AccountHeader
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <main className="mx-auto max-w-[1350px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              PURANA AYURVEDA / ACCOUNT
            </p>

            <h1 className="font-serif text-3xl text-[var(--forest-dark)] sm:text-4xl">
              {titles[activeTab]}
            </h1>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {descriptions[activeTab]}
            </p>
          </div>

          {activeTab === "overview" && <Overview onNavigate={setActiveTab} />}
          {activeTab === "profile" && <ProfileDetails />}
          {activeTab === "bookings" && <MyBookings />}
          {activeTab === "settings" && <AccountSettings />}

          <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-[var(--border)] py-6 text-[10px] text-[var(--text-muted)] sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Purana Ayurveda. All rights reserved.</p>
            <p className="font-serif italic">
              Traditional wisdom. Personal wellbeing.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
