
"use client";

import { useState } from "react";

export default function BookingFinder() {
  const [location, setLocation] = useState("Steinberg am See");
  const [guestType, setGuestType] = useState("Chalet guest");

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

  function handleFind() {
    document.getElementById("locations")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const optionClass = (selected: boolean) =>
    `relative flex min-h-[76px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-300 sm:px-4 ${
      selected
        ? "border-[#21452B] bg-white shadow-[0_5px_20px_rgba(33,69,43,0.08)]"
        : "border-[#D8D0A9]/80 bg-[#EFE9C5]/70 hover:border-[#21452B]/50 hover:bg-white"
    }`;

  return (
    <section
      id="booking"
      className="relative w-full overflow-hidden bg-[#f5f0e7] py-10 sm:py-14"
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#DFC24D]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#DFC24D]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full border border-[#DFC24D]/30"
      />

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-[#D8D0A9]/70 bg-[#f5f0e7] p-5 sm:p-7 lg:p-9">

          {/* Subtle decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#DFC24D]/10 to-transparent"
          />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#21452B]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#21452B]">
                    Your wellness journey
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-[#21452B] sm:text-3xl">
                  Where shall we take you?
                  <span className="ml-2 italic text-[#DFC24D]">✳</span>
                </h2>

                <p className="mt-2 max-w-lg text-xs leading-5 text-[#533E23]/80 sm:text-sm">
                  Choose your location and guest type to find your Ayurveda
                  experience.
                </p>
              </div>

              <span className="hidden font-serif text-4xl text-[#DFC24D]/70 sm:block">
                ❋
              </span>
            </div>

            {/* Selection area */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* Location */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#21452B] text-[10px] font-semibold text-[#EFE9C5]">
                    01
                  </span>

                  <h3 className="text-xs font-semibold text-[#21452B]">
                    Choose your location
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {locations.map((place) => {
                    const selected = location === place.name;

                    return (
                      <button
                        key={place.name}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setLocation(place.name)}
                        className={optionClass(selected)}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg font-serif text-xl ${
                            selected
                              ? "bg-[#21452B]/10 text-[#21452B]"
                              : "bg-[#DFC24D]/30 text-[#533E23]"
                          }`}
                        >
                          {place.icon}
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs font-semibold leading-4 text-[#21452B]">
                            {place.name}
                          </span>

                          <span className="mt-1 block text-[10px] text-[#6B705C]">
                            {place.subtitle}
                          </span>
                        </span>

                        {selected && (
                          <span className="absolute right-2 top-2 text-[10px] text-[#21452B]">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest type */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#21452B] text-[10px] font-semibold text-[#EFE9C5]">
                    02
                  </span>

                  <h3 className="text-xs font-semibold text-[#21452B]">
                    Your guest category
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {guests.map((guest) => {
                    const selected = guestType === guest.name;

                    return (
                      <button
                        key={guest.name}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setGuestType(guest.name)}
                        className={optionClass(selected)}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg font-serif text-xl ${
                            selected
                              ? "bg-[#21452B]/10 text-[#21452B]"
                              : "bg-[#DFC24D]/30 text-[#533E23]"
                          }`}
                        >
                          {guest.icon}
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs font-semibold text-[#21452B]">
                            {guest.name}
                          </span>

                          <span className="mt-1 block text-[10px] text-[#6B705C]">
                            {guest.subtitle}
                          </span>
                        </span>

                        {selected && (
                          <span className="absolute right-2 top-2 text-[10px] text-[#21452B]">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-6 flex flex-col gap-3 border-t border-[#D8D0A9] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-[#533E23]">
                <span className="font-semibold text-[#21452B]">
                  {location}
                </span>

                <span className="mx-2 text-[#DFC24D]">✳</span>

                {guestType}
              </p>

              <button
                type="button"
                onClick={handleFind}
                className="group inline-flex min-h-11 items-center justify-center gap-4 rounded-full bg-[#21452B] px-6 py-3 text-xs font-semibold text-[#EFE9C5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F5D39]"
              >
                Find my experience

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
