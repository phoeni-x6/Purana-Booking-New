"use client";

import { useState } from "react";

const learningItems = [
  {
    title: "Free dosha quiz",
    text: "Discover your constitution in just 2 minutes.",
    href: "#booking",
    tag: "START HERE",
  },
  {
    title: "Monthly member seminar",
    text: "Live with Lakshani · for Premium members.",
    href: "#membership",
    tag: "LIVE",
  },
  {
    title: "Podcast: Talk with Lakshani",
    text: "Listen every 2 weeks on ayurvedatalks.de.",
    href: "#learn",
    tag: "LISTEN",
  },
  {
    title: "Blog",
    text: "Articles, recipes and everyday rituals.",
    href: "#learn",
    tag: "READ",
  },
];

export default function Membership() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setSubmitted(false);
      return;
    }

    setMessage(
      "Thank you for your interest! The waiting list is not connected to an email service yet, so your registration has not been saved."
    );
    setSubmitted(false);
  }

  return (
    <>
      {/* App and learning section */}
      <section className="relative overflow-hidden bg-[#f5f0e7] px-5 py-16 sm:py-20 lg:py-24">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#DFC24D]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-36 h-64 w-64 rounded-full border border-[#2F5D39]/10"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C14C38]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C14C38] sm:text-xs">
                Stay connected with Purana
              </p>
            </div>

            <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl lg:text-5xl">
              Your journey towards balance
              <span className="block italic text-[#9A8050]">
                continues beyond the treatment room.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Purana app */}
            <div className="group relative isolate flex min-h-[580px] flex-col overflow-hidden rounded-[28px] bg-[#21452B] p-7 text-[#EFE9C5] sm:p-10 lg:p-12">
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full border border-[#EFE9C5]/10 transition-transform duration-1000 group-hover:scale-110"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 -z-10 h-72 w-72 rounded-full border border-[#DFC24D]/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-80 w-80 rounded-full bg-[#2F5D39] blur-3xl"
              />

              {/* Top label */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFC24D]/30 bg-[#DFC24D]/10 text-xl text-[#DFC24D]">
                    ✳
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#EFE9C5]">
                      Purana
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#EFE9C5]/50">
                      Wellness app
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-[#DFC24D]/40 bg-[#DFC24D]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#DFC24D]">
                  Coming 1 March 2027
                </span>
              </div>

              {/* App content */}
              <div className="relative z-10 mt-auto grid items-end gap-8 pt-14 sm:grid-cols-[1fr_170px] lg:grid-cols-[1fr_190px]">
                <div>
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DFC24D]">
                    Wellbeing, within reach
                  </p>

                  <h2 className="font-serif text-4xl leading-[1.1] text-[#EFE9C5] sm:text-5xl lg:text-6xl">
                    A healthier
                    <span className="block italic text-[#DFC24D]">
                      everyday.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#EFE9C5]/75">
                    Book treatments, follow your programmes, chat with us
                    and receive reminders — all in one place. Your personal
                    Ayurveda companion is coming soon.
                  </p>
                </div>

                {/* Phone-inspired visual */}
                <div className="relative mx-auto hidden w-[155px] rotate-3 transition-transform duration-700 group-hover:rotate-0 sm:block lg:w-[180px]">
                  <div className="rounded-[30px] border-[5px] border-[#EFE9C5]/30 bg-[#F5F0E7] p-2 shadow-2xl shadow-black/30">
                    <div className="overflow-hidden rounded-[21px] bg-[#EFE9C5]">
                      <div className="flex items-center justify-between bg-[#2F5D39] px-3 py-4">
                        <span className="font-serif text-sm text-[#EFE9C5]">
                          Purana
                        </span>
                        <span className="text-xs text-[#DFC24D]">✳</span>
                      </div>

                      <div className="p-3">
                        <div className="mb-3 h-20 rounded-xl bg-[#DCE3D2] p-2">
                          <p className="text-[7px] uppercase tracking-wider text-[#2F5D39]/70">
                            Your daily balance
                          </p>
                          <p className="mt-2 font-serif text-sm text-[#21452B]">
                            Find your calm.
                          </p>
                        </div>

                        <p className="mb-2 text-[8px] font-semibold text-[#21452B]">
                          Explore
                        </p>

                        <div className="space-y-2">
                          <div className="rounded-lg bg-white p-2 text-[8px] text-[#533E23]">
                            Ayurveda treatments
                          </div>
                          <div className="rounded-lg bg-white p-2 text-[8px] text-[#533E23]">
                            Your programmes
                          </div>
                          <div className="rounded-lg bg-white p-2 text-[8px] text-[#533E23]">
                            Online consultation
                          </div>
                        </div>

                        <div className="mt-4 rounded-full bg-[#DFC24D] py-2 text-center text-[8px] font-semibold text-[#21452B]">
                          Book a treatment
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="absolute -bottom-4 -left-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#DFC24D]/40 bg-[#2F5D39] font-serif text-xl text-[#DFC24D] shadow-lg">
                    ✳
                  </span>
                </div>
              </div>

              {/* Form */}
              <div className="relative z-10 mt-10 border-t border-[#EFE9C5]/15 pt-7">
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="app-email"
                    className="mb-3 block text-xs font-semibold text-[#EFE9C5]"
                  >
                    Be the first to know when we launch
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="app-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setMessage("");
                        setSubmitted(false);
                      }}
                      placeholder="Your email address"
                      className="h-12 min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white outline-none transition placeholder:text-white/50 focus:border-[#DFC24D] focus:ring-2 focus:ring-[#DFC24D]/20"
                    />

                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      Join the list
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>

                  <p
                    aria-live="polite"
                    className="mt-3 text-xs leading-5 text-[#DFC24D]"
                  >
                    {message}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#EFE9C5]/45">
                    Your registration will only be saved once the form is
                    connected to a secure email service.
                  </p>
                </form>
              </div>
            </div>

            {/* Learning resources */}
            <div
              id="learn"
              className="relative flex scroll-mt-24 flex-col overflow-hidden rounded-[28px] border border-[#D8D0A9] bg-[#F8F5E8] p-7 sm:p-10 lg:p-11"
            >
              {/* Decorative detail */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#EFE9C5]/80"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full border border-[#2F5D39]/10"
              />

              <div className="relative z-10">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFE9C5] text-xl text-[#C14C38]">
                      ♧
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C14C38]">
                      The Ayurveda journal
                    </span>
                  </div>

                  <span className="font-serif text-3xl italic text-[#2F5D39]/20">
                    04
                  </span>
                </div>

                <h2 className="font-serif text-4xl leading-[1.12] text-[#21452B] sm:text-5xl">
                  Learn a little.
                  <span className="block italic text-[#9A8050]">
                    Live a little better.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#6B705C]">
                  Explore practical knowledge, personal guidance and
                  inspiration to bring Ayurveda into your everyday routine.
                </p>

                <div className="mt-9">
                  {learningItems.map((item, index) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-4 border-t border-[#D8D0A9]/80 py-5 transition-colors last:border-b hover:bg-[#EFE9C5]/50"
                    >
                      <span className="font-serif text-lg italic text-[#C14C38]/70">
                        0{index + 1}
                      </span>

                      <span className="min-w-0 flex-1">
                        <strong className="block text-sm font-semibold text-[#21452B] transition-colors group-hover:text-[#C14C38]">
                          {item.title}
                        </strong>

                        <small className="mt-1 block text-xs leading-5 text-[#6B705C]">
                          {item.text}
                        </small>
                      </span>

                      <span className="hidden rounded-full bg-[#EFE9C5] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#533E23] sm:inline-block">
                        {item.tag}
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-lg text-[#C14C38] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center gap-3 pt-7">
                <span className="h-px w-8 bg-[#DFC24D]" />
                <p className="font-serif text-sm italic text-[#6B705C]">
                  Knowledge is the beginning of balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership banner */}
      <section
        id="membership"
        className="relative isolate mx-5 mb-20 overflow-hidden rounded-[30px] bg-[#21452B] text-[#EFE9C5] sm:mx-auto sm:max-w-7xl"
      >
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[520px] w-[520px] rounded-full border border-[#EFE9C5]/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-24 -z-10 h-[380px] w-[380px] rounded-full border border-[#DFC24D]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-[#2F5D39] blur-3xl"
        />

        <div className="relative z-10 grid gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">
          {/* Membership details */}
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#DFC24D]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFC24D] sm:text-xs">
                The Purana membership
              </p>
            </div>

            <p className="mb-4 text-xs text-[#EFE9C5]/55">
              Planned launch: 1 January 2027
            </p>

            <h2 className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Make wellbeing
              <span className="block italic text-[#DFC24D]">
                part of your life.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#EFE9C5]/75 sm:text-base">
              Enjoy podcasts, monthly Ayurveda tips and planned savings of
              5–10% on eligible treatments, consultations, online packages,
              Nivartana products and chalet stays. Cancel any time.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Monthly Ayurveda tips",
                "Member seminars",
                "5–10% planned savings",
                "Exclusive content",
              ].map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-[#EFE9C5]/20 bg-white/[0.04] px-4 py-2 text-[10px] text-[#EFE9C5]/80"
                >
                  <span className="mr-2 text-[#DFC24D]">✳</span>
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <div className="relative flex w-full flex-col rounded-[24px] border border-[#DFC24D]/30 bg-[#EFE9C5]/[0.07] p-7 backdrop-blur-sm sm:p-8 lg:w-[280px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DFC24D]">
              Membership plans
            </p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-5xl text-[#EFE9C5]">
                €9.99
              </span>
              <span className="text-xs text-[#EFE9C5]/60">/ month</span>
            </div>

            <p className="mt-3 text-xs leading-6 text-[#EFE9C5]/60">
              Start enjoying more ways to bring balance into your everyday
              life.
            </p>

            <a
              href="#app-email"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DFC24D] px-6 py-3 text-sm font-semibold text-[#21452B] transition duration-300 hover:-translate-y-1 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Join the waiting list
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-4 text-center text-[10px] text-[#EFE9C5]/45">
              Planned launch · January 2027
            </p>
          </div>
        </div>
      </section>
    </>
  );
}