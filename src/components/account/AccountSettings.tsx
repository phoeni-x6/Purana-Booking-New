
"use client";

import { useState } from "react";
import {
  Bell,
  Globe,
  ShieldCheck,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";

export default function AccountSettings() {
  const [preferences, setPreferences] = useState({
    bookingUpdates: true,
    reminders: true,
    wellnessNews: false,
  });

  const [language, setLanguage] = useState("English");

  const notificationOptions = [
    {
      key: "bookingUpdates",
      title: "Booking updates",
      description: "Confirmation and appointment changes.",
    },
    {
      key: "reminders",
      title: "Appointment reminders",
      description: "Reminders before your scheduled sessions.",
    },
    {
      key: "wellnessNews",
      title: "Wellness news",
      description: "Ayurvedic tips, news and special updates.",
    },
  ] as const;

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <section className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--cream)] text-[var(--forest)]">
            <Bell size={20} />
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--forest-dark)]">
              Notifications
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Choose what you would like to receive
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {notificationOptions.map((option) => (
            <div
              key={option.key}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-[var(--forest-dark)]">
                  {option.title}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[var(--text-muted)]">
                  {option.description}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={preferences[option.key]}
                aria-label={option.title}
                onClick={() =>
                  setPreferences((current) => ({
                    ...current,
                    [option.key]: !current[option.key],
                  }))
                }
                className={`relative h-6 w-[42px] shrink-0 rounded-full transition ${
                  preferences[option.key]
                    ? "bg-[var(--forest)]"
                    : "bg-[var(--border)]"
                }`}
              >
                <span
                  className={`absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white transition ${
                    preferences[option.key] ? "translate-x-[18px]" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="h-fit rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--cream)] text-[var(--forest)]">
            <Globe size={20} />
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--forest-dark)]">
              Language preferences
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Choose your preferred language
            </p>
          </div>
        </div>

        <label
          htmlFor="language"
          className="mb-2 block text-[11px] font-bold text-[var(--text-muted)]"
        >
          Preferred language
        </label>

        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--forest-dark)] outline-none focus:border-[var(--forest)]"
        >
          <option>English</option>
          <option>German</option>
        </select>

        <div className="mt-6 rounded-xl bg-[var(--surface)] p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-[var(--forest-dark)]">
            <ShieldCheck size={16} />
            Account security
          </p>

          <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">
            Keep your account information safe and contact our team if you
            need assistance with your login details.
          </p>

          <button
            type="button"
            disabled
            title="Connect authentication to enable password changes"
            className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-xs font-semibold text-[var(--forest-dark)] opacity-60"
          >
            <LockKeyhole size={14} />
            Change password
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-7 xl:col-span-2">
        <h2 className="font-serif text-xl text-[var(--forest-dark)]">
          Account information
        </h2>

        <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">
          To update your login credentials, request account deletion or get
          help with your account, please contact our team.
        </p>

        <a
          href="https://wa.me/"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--terracotta)] hover:underline"
        >
          Contact support <ArrowUpRight size={14} />
        </a>
      </section>
    </div>
  );
}
