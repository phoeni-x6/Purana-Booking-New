
"use client";

import { useState } from "react";

const learningItems = [
  {
    title: "Free dosha quiz",
    text: "Your constitution in 2 minutes",
    href: "#booking",
  },
  {
    title: "Monthly member seminar",
    text: "Live with Lakshani · for Premium members",
    href: "#membership",
  },
  {
    title: "Podcast: Talk with Lakshani",
    text: "Every 2 weeks on ayurvedatalks.de",
    href: "#learn",
  },
  {
    title: "Blog",
    text: "Articles, recipes and rituals",
    href: "#learn",
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
      "Thank you for your interest! The waiting list form needs to be connected to an email service to save your registration."
    );
    setSubmitted(true);
  }

  return (
    <>
      {/* App waiting list and learning resources */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 md:py-20">
        {/* App waiting list */}
        <div className="relative overflow-hidden rounded-[28px] border border-[#D8D0A9]/70 bg-[#EFE9C5] p-7 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#2F5D39]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#2F5D39]/10"
          />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2F5D39] text-xl text-[#DFC24D]">
                ✳
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
                Coming 1 March 2027
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#21452B] sm:text-5xl">
              The Purana
              <span className="block italic">app</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#533E23]">
              Book treatments, follow your programmes, chat with us and get
              reminders — all in your pocket. Join the waiting list and we’ll
              let you know when the app is ready to download.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">
              <label
                htmlFor="app-email"
                className="mb-2 block text-xs font-semibold text-[#21452B]"
              >
                Your email address
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
                  placeholder="you@example.com"
                  className="h-12 min-w-0 flex-1 rounded-full border border-[#D8D0A9] bg-[#F8F5E8] px-5 text-sm text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/70 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/15"
                />

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2F5D39] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#21452B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C14C38] focus-visible:ring-offset-2"
                >
                  Join the list
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <p
                aria-live="polite"
                className={`mt-4 text-xs leading-6 ${
                  submitted ? "text-[#21452B]" : "text-[#533E23]"
                }`}
              >
                {message}
              </p>

              <p className="mt-2 text-[10px] leading-5 text-[#6B705C]">
                Your details should only be collected and stored after the
                form is connected to a secure email service.
              </p>
            </form>
          </div>
        </div>

        {/* Learning resources */}
        <div
          id="learn"
          className="scroll-mt-24 rounded-[28px] border border-[#D8D0A9]/70 bg-[#F8F5E8] p-7 sm:p-9"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFE9C5] text-xl text-[#C14C38]">
              ♧
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Explore Ayurveda
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#21452B] sm:text-5xl">
            Start with what
            <span className="block italic">your body needs.</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#6B705C]">
            Small steps towards a more balanced lifestyle, with practical
            guidance and inspiration from Ayurveda.
          </p>

          <div className="mt-7">
            {learningItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between gap-4 border-t border-[#D8D0A9]/70 py-5 transition-colors last:border-b hover:bg-[#EFE9C5]/40"
              >
                <span className="flex min-w-0 items-start gap-4">
                  <span className="pt-0.5 font-serif text-sm italic text-[#C14C38]">
                    0{index + 1}
                  </span>

                  <span>
                    <strong className="block text-sm font-semibold text-[#21452B] transition-colors group-hover:text-[#C14C38]">
                      {item.title}
                    </strong>

                    <small className="mt-1 block text-xs leading-5 text-[#6B705C]">
                      {item.text}
                    </small>
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-[#C14C38] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Membership banner */}
      <section
        id="membership"
        className="relative mx-5 mb-20 overflow-hidden rounded-[28px] bg-[#21452B] text-[#EFE9C5] sm:mx-auto sm:max-w-7xl"
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#EFE9C5]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-60 w-60 rounded-full border border-[#EFE9C5]/10"
        />

        <div className="relative z-10 flex flex-col gap-8 px-7 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#DFC24D]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DFC24D] sm:text-xs">
                Purana membership
              </p>
            </div>

            <p className="mb-4 text-xs text-[#EFE9C5]/65">
              Planned launch: 1 January 2027
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#EFE9C5] sm:text-4xl lg:text-5xl">
              A little more balance.
              <span className="block italic text-[#DFC24D]">
                A little more value.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#EFE9C5]/80">
              Enjoy podcasts, monthly Ayurveda tips and planned savings of
              5–10% on eligible treatments, consultations, online packages,
              Nivartana products and chalet stays. Cancel any time.
            </p>

            <p className="mt-4 font-serif text-2xl text-[#DFC24D]">
              From €9.99{" "}
              <span className="font-sans text-xs text-[#EFE9C5]/75">
                / month
              </span>
            </p>
          </div>

          <a
            href="#app-email"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition duration-300 hover:bg-[#EFE9C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21452B] lg:self-center"
          >
            Join the waiting list
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
