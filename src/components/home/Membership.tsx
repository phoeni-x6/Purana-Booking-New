
"use client";

import { useState } from "react";

const learningItems = [
  {
    title: "Free dosha quiz",
    text: "Your constitution in 2 minutes",
  },
  {
    title: "Monthly member seminar",
    text: "Live with Lakshani · for Premium members",
  },
  {
    title: "Podcast: Talk with Lakshani",
    text: "Every 2 weeks on ayurvedatalks.de",
  },
  {
    title: "Blog",
    text: "Articles, recipes and rituals",
  },
];

export default function Membership() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage(
      "Thanks for your interest! Connect this form to your email service to save your registration."
    );
  }

  return (
    <>
      {/* App waiting list and free learning */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2">
        {/* Purana app */}
        <div className="rounded-3xl bg-[#e9dfcd] p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a36b17]">
            Coming 1 March 2027
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight">
            The Purana app
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#64746b]">
            Book treatments, follow your programmes, chat with us and get
            reminders — all in your pocket. Join the waiting list and we’ll
            tell you as soon as it’s ready to download.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <label
              htmlFor="app-email"
              className="mb-2 block text-xs font-semibold"
            >
              Email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="app-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="h-12 min-w-0 flex-1 rounded-xl border border-[#d2c5ae] bg-[#faf7f1] px-4 text-sm outline-none focus:border-[#b17a20]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#193b30] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
              >
                Join the waiting list
              </button>
            </div>

            <p aria-live="polite" className="mt-3 text-xs text-[#52635a]">
              {message}
            </p>
          </form>
        </div>

        {/* Learn for free */}
        <div id="learn" className="rounded-3xl bg-white p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a36b17]">
            Learn for free
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Start with what
            <br />
            your body needs
          </h2>

          <div className="mt-5">
            {learningItems.map((item) => (
              <a
                key={item.title}
                href="#booking"
                className="group flex items-center justify-between gap-4 border-t border-[#e7dece] py-4 last:border-b"
              >
                <span>
                  <strong className="block text-sm">{item.title}</strong>

                  <small className="mt-1 block text-xs text-[#64746b]">
                    {item.text}
                  </small>
                </span>

                <span className="text-lg transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Purana membership banner */}
      <section
        id="membership"
        className="relative mx-auto mb-20 flex max-w-6xl flex-col gap-6 overflow-hidden rounded-3xl bg-[#193b30] px-7 py-10 text-white sm:px-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="relative z-10 max-w-4xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#e4ad3e]">
            Purana membership · Starts 1 January 2027
          </p>

          <h2 className="font-serif text-4xl leading-tight">
            Save on every visit — from €9.99 a month
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#d4dfd6]">
            Podcasts, monthly Ayurveda tips and 5–10% off treatments,
            consultations, online packages, Nivartana products and chalet
            stays. Cancel any time.
          </p>
        </div>

        <a
          href="#app-email"
          className="relative z-10 inline-flex shrink-0 items-center justify-center self-start rounded-full bg-[#e4ad3e] px-7 py-4 text-sm font-semibold text-[#193b30] transition hover:bg-[#f2c76e] md:self-center"
        >
          Join the waiting list
        </a>
      </section>
    </>
  );
}
