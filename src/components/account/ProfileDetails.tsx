
"use client";

import { useState } from "react";
import { Camera, Pencil, Check, UserRound } from "lucide-react";

export default function ProfileDetails() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Alexandra",
    lastName: "Miller",
    email: "alexandra@example.com",
    phone: "+49 123 456 789",
    country: "Germany",
    language: "English",
  });

  function updateField(field: keyof typeof profile, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  const fields = [
    { key: "firstName", label: "First name" },
    { key: "lastName", label: "Last name" },
    { key: "email", label: "Email address", type: "email" },
    { key: "phone", label: "Phone number" },
    { key: "country", label: "Country" },
    { key: "language", label: "Preferred language" },
  ] as const;

  return (
    <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
      <section className="h-fit rounded-2xl border border-[var(--border)] bg-white p-6 text-center">
        <div className="relative mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-[var(--cream)] bg-[var(--forest-dark)] font-serif text-3xl text-[var(--gold)]">
          {profile.firstName[0]}
          {profile.lastName[0]}

          <button
            type="button"
            aria-label="Change profile picture"
            title="Photo upload is not connected yet"
            className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[var(--gold)] text-[var(--forest-dark)]"
          >
            <Camera size={16} />
          </button>
        </div>

        <h2 className="font-serif text-2xl text-[var(--forest-dark)]">
          {profile.firstName} {profile.lastName}
        </h2>

        <p className="mt-1 text-xs text-[var(--text-muted)]">
          {profile.email}
        </p>

        <div className="my-5 border-t border-[var(--border)]" />

        <div className="flex items-center justify-between text-xs">
          <span className="text-[var(--text-muted)]">Account status</span>
          <span className="font-semibold text-[var(--forest)]">
            ● Active
          </span>
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl text-[var(--forest-dark)]">
              Personal information
            </h2>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Your details and contact information
            </p>
          </div>

          {!editing && (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-xs font-semibold text-[var(--forest-dark)] transition hover:bg-[var(--cream)]"
            >
              <Pencil size={14} /> Edit profile
            </button>
          )}
        </div>

        {saved && (
          <div className="mb-5 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-xs font-medium text-green-800">
            <Check size={16} />
            Profile changes saved in this demo.
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.key}>
              <label
                htmlFor={field.key}
                className="mb-2 block text-[11px] font-bold text-[var(--text-muted)]"
              >
                {field.label}
              </label>

              <input
                id={field.key}
                type={"type" in field ? field.type : "text"}
                value={profile[field.key]}
                disabled={!editing}
                onChange={(e) => updateField(field.key, e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--forest-dark)] outline-none transition focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10 disabled:cursor-not-allowed disabled:opacity-75"
              />
            </div>
          ))}
        </div>

        {editing && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setSaved(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--forest-dark)] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[var(--terracotta)]"
            >
              <Check size={15} /> Save changes
            </button>

            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setSaved(false);
              }}
              className="rounded-full border border-[var(--border)] px-6 py-3 text-xs font-semibold text-[var(--forest-dark)] hover:bg-[var(--cream)]"
            >
              Cancel
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
