
"use client";

import { useState } from "react";

export default function MembershipWaitlist() {
  const [membershipType, setMembershipType] = useState("Premium");

  return (
    <section id="waitlist" className="bg-[#F4EFE5] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-[#1D3B30] p-7 text-[#F4EFE5] sm:p-10 md:grid-cols-2 md:items-center md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#E0A83E]">
            Membership starts 1 January 2027
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Join the waiting list
          </h2>

          <p className="mt-5 text-sm leading-6">
            Be the first to know when membership opens. We’ll email you before
            1 January with everything you need to sign up — Membership from
            €9.99 a month, Premium for €20.99 a month. Monthly payment,
            cancel any time.
          </p>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="space-y-5"
        >
          <label className="block text-xs font-semibold">
            Name
            <input
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-4 py-3 text-[#142F27] outline-none focus:border-[#E0A83E]"
            />
          </label>

          <label className="block text-xs font-semibold">
            Email address
            <input
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-4 py-3 text-[#142F27] outline-none focus:border-[#E0A83E]"
            />
          </label>

          <fieldset>
            <legend className="text-xs font-semibold">
              I’m interested in
            </legend>

            <div className="mt-3 flex flex-wrap gap-5 text-sm">
              {["Membership", "Premium"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    value={type}
                    checked={membershipType === type}
                    onChange={() => setMembershipType(type)}
                    className="accent-[#E0A83E]"
                  />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-xs leading-5">
            <input
              type="checkbox"
              required
              className="mt-1 accent-[#E0A83E]"
            />
            <span>
              I agree that Purana Ayurveda may email me about the membership
              launch. I can unsubscribe at any time.{" "}
              <a href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[#E0A83E] px-5 py-4 text-sm font-semibold text-[#142F27] transition hover:bg-[#EDBA54]"
          >
            Join the waiting list
          </button>

          <p className="text-xs text-white/60">
            UI demonstration only — connect a form service or backend to
            collect submissions.
          </p>
        </form>
      </div>
    </section>
  );
}
