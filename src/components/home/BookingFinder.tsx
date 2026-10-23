
"use client";

import { useState } from "react";

export default function BookingFinder() {
  const [location, setLocation] = useState("Steinberg am See");
  const [guestType, setGuestType] = useState("Chalet guest");
  const [message, setMessage] = useState(
    "Choose your location and guest type to explore your Ayurveda experience."
  );

  function handleFind() {
    setMessage(
      `Explore treatments and retreats in ${location} for ${
        guestType === "Chalet guest" ? "chalet guests" : "external guests"
      }.`
    );

    document.getElementById("locations")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const locations = [
    {
      name: "Steinberg am See",
      subtitle: "Lakeside wellness",
      icon: "⌂",
    },
    {
      name: "Marktredwitz",
      subtitle: "Personal care",
      icon: "✳",
    },
  ];

  const guests = [
    {
      name: "Chalet guest",
      subtitle: "Staying at the resort",
      icon: "⌂",
    },
    {
      name: "External guest",
      subtitle: "Visiting for treatment",
      icon: "♡",
    },
  ];

  const optionClass = (selected: boolean) =>
    `group flex min-h-[100px] w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 sm:p-4 ${
      selected
        ? "border-[#2F5D39] bg-[#2F5D39] text-[#EFE9C5] shadow-md shadow-[#21452B]/10"
        : "border-[#D8D0A9]/80 bg-[#F8F5E8] text-[#533E23] hover:border-[#2F5D39]/60 hover:bg-[#EFE9C5]/50"
    }`;

  return (
    <section
      id="booking"
      className="relative overflow-hidden rounded-3xl border border-[#D8D0A9]/70 bg-white shadow-[0_24px_70px_rgba(33,69,43,0.12)]"
    >
      {/* Decorative brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-[#DFC24D]/30"
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C14C38]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C14C38] sm:text-xs">
                Your wellness journey
              </p>
            </div>

            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl">
              Find your place to{" "}
              <span className="italic text-[#2F5D39]">restore.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B705C]">
              Tell us where you would like to visit and we'll guide you to the
              right Ayurveda experience.
            </p>
          </div>

          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D8D0A9] bg-[#EFE9C5]/50 font-serif text-2xl text-[#2F5D39] sm:flex">
            ✳
          </div>
        </div>

        {/* Selection steps */}
        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          {/* Location */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EFE9C5] font-serif text-sm text-[#21452B]">
                01
              </span>

              <div>
                <p className="text-sm font-semibold text-[#21452B]">
                  Choose your location
                </p>
                <p className="text-xs text-[#6B705C]">
                  Where would you like to visit?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locations.map((place) => {
                const selected = location === place.name;

                return (
                  <button
                    key={place.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setLocation(place.name);
                      setMessage("");
                    }}
                    className={optionClass(selected)}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-serif text-xl transition ${
                        selected
                          ? "bg-[#EFE9C5]/15 text-[#DFC24D]"
                          : "bg-[#EFE9C5] text-[#2F5D39]"
                      }`}
                    >
                      {place.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-5">
                        {place.name}
                      </span>
                      <span
                        className={`mt-1 block text-xs ${
                          selected ? "text-[#EFE9C5]/70" : "text-[#6B705C]"
                        }`}
                      >
                        {place.subtitle}
                      </span>
                    </span>

                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] ${
                        selected
                          ? "border-[#DFC24D] bg-[#DFC24D] text-[#21452B]"
                          : "border-[#D8D0A9] text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guest type */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EFE9C5] font-serif text-sm text-[#21452B]">
                02
              </span>

              <div>
                <p className="text-sm font-semibold text-[#21452B]">
                  Tell us about your visit
                </p>
                <p className="text-xs text-[#6B705C]">
                  Which guest category applies to you?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {guests.map((guest) => {
                const selected = guestType === guest.name;

                return (
                  <button
                    key={guest.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setGuestType(guest.name);
                      setMessage("");
                    }}
                    className={optionClass(selected)}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-serif text-xl transition ${
                        selected
                          ? "bg-[#EFE9C5]/15 text-[#DFC24D]"
                          : "bg-[#EFE9C5] text-[#2F5D39]"
                      }`}
                    >
                      {guest.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">
                        {guest.name}
                      </span>
                      <span
                        className={`mt-1 block text-xs ${
                          selected ? "text-[#EFE9C5]/70" : "text-[#6B705C]"
                        }`}
                      >
                        {guest.subtitle}
                      </span>
                    </span>

                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] ${
                        selected
                          ? "border-[#DFC24D] bg-[#DFC24D] text-[#21452B]"
                          : "border-[#D8D0A9] text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom action area */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#D8D0A9]/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg text-[#C14C38]">✳</span>

            <div>
              <p className="text-sm font-semibold text-[#21452B]">
                Your experience, your way.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6B705C]">
                {message ||
                  `${location} · ${
                    guestType === "Chalet guest"
                      ? "Chalet guest"
                      : "External guest"
                  }`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleFind}
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 rounded-full bg-[#C14C38] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#A63C2C]"
          >
            Find my experience
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
