
"use client";

import { useState } from "react";

export default function MembershipWaitlist() {
  const [membershipType, setMembershipType] = useState("Premium");

  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden bg-[#EFE9C5] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-[#DFC24D]/30 bg-[#21452B] shadow-2xl shadow-[#21452B]/15 lg:grid-cols-2">
        {/* Left information panel */}
        <div className="relative flex flex-col justify-center overflow-hidden p-7 text-[#F8F5E8] sm:p-10 lg:p-12">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#EFE9C5]/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#EFE9C5]/10"
          />

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#DFC24D]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC24D]">
                Membership starts 1 January 2027
              </p>
            </div>

            <h2 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Join the waiting list
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#F8F5E8]/80 sm:text-base">
              Be the first to know when membership opens. We’ll email you
              before 1 January with everything you need to sign up —
              Membership from €9.99 a month, Premium for €20.99 a month.
              Monthly payment, cancel any time.
            </p>

            {/* Membership price cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#EFE9C5]/15 bg-[#2F5D39]/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#EFE9C5]/65">
                  Membership
                </p>
                <p className="mt-2 font-serif text-3xl text-[#F8F5E8]">
                  €9.99
                </p>
                <p className="mt-1 text-xs text-[#EFE9C5]/65">per month</p>
              </div>

              <div className="rounded-2xl border border-[#DFC24D]/50 bg-[#DFC24D]/10 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#DFC24D]">
                    Premium
                  </p>
                  <span className="rounded-full bg-[#DFC24D] px-2 py-1 text-[9px] font-bold uppercase text-[#21452B]">
                    Exclusive
                  </span>
                </div>
                <p className="mt-2 font-serif text-3xl text-[#F8F5E8]">
                  €20.99
                </p>
                <p className="mt-1 text-xs text-[#EFE9C5]/65">per month</p>
              </div>
            </div>

            {/* Reassurance points */}
            <div className="mt-8 space-y-3">
              {[
                "Be notified before membership launches",
                "Choose your preferred membership level",
                "Monthly payment, cancel any time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFC24D]/15 text-xs text-[#DFC24D]">
                    ✓
                  </span>
                  <p className="text-sm text-[#F8F5E8]/85">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-[#EFE9C5]/15 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFC24D]/30 text-xl text-[#DFC24D]">
                ✳
              </div>
              <p className="text-xs leading-5 text-[#EFE9C5]/65">
                A little more balance, a little more wellbeing, every day.
              </p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="bg-[#F8F5E8] p-6 sm:p-10 lg:p-12">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#533E23]">
              Stay connected
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#21452B] sm:text-3xl">
              Be first in line
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6B705C]">
              Leave your details below and choose the membership that
              interests you.
            </p>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="space-y-5"
          >
            {/* Name */}
            <label className="block text-xs font-semibold text-[#533E23]">
              Full name
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
              />
            </label>

            {/* Email */}
            <label className="block text-xs font-semibold text-[#533E23]">
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
              />
            </label>

            {/* Membership type */}
            <fieldset>
              <legend className="text-xs font-semibold text-[#533E23]">
                I’m interested in
              </legend>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    name: "Membership",
                    price: "€9.99 / month",
                  },
                  {
                    name: "Premium",
                    price: "€20.99 / month",
                  },
                ].map((type) => {
                  const selected = membershipType === type.name;

                  return (
                    <label
                      key={type.name}
                      className={`relative flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                        selected
                          ? "border-[#2F5D39] bg-[#2F5D39]/[0.06] ring-1 ring-[#2F5D39]/15"
                          : "border-[#D8D0A9] bg-white hover:border-[#DFC24D]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="membershipType"
                        value={type.name}
                        checked={selected}
                        onChange={() => setMembershipType(type.name)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#2F5D39]"
                      />

                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-[#21452B]">
                          {type.name}
                        </span>
                        <span className="mt-1 block text-xs text-[#6B705C]">
                          {type.price}
                        </span>
                      </span>

                      {selected && (
                        <span className="ml-auto text-sm text-[#2F5D39]">
                          ✓
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Consent */}
            <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#EFE9C5]/60 p-4 text-xs leading-6 text-[#533E23]">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#2F5D39]"
              />

              <span>
                I agree that Purana Ayurveda may email me about the membership
                launch. I can unsubscribe at any time.{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-[#21452B] underline underline-offset-4 hover:text-[#C14C38]"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#21452B] px-5 py-4 text-sm font-semibold text-[#F8F5E8] transition hover:bg-[#2F5D39] focus:outline-none focus:ring-2 focus:ring-[#DFC24D] focus:ring-offset-2"
            >
              Join the waiting list
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <p className="text-center text-xs leading-5 text-[#6B705C]">
              UI demonstration only — connect a form service or backend to
              collect submissions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
