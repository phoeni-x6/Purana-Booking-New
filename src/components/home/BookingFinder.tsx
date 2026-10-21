
"use client";

import { useState } from "react";

export default function BookingFinder() {
  const [location, setLocation] = useState("Steinberg am See");
  const [guestType, setGuestType] = useState("Chalet guest");
  const [message, setMessage] = useState(
    "You will see all treatments and retreats in Steinberg am See for chalet guests."
  );

  function handleFind() {
    setMessage(
      `You will see all treatments and retreats in ${location} for ${
        guestType === "Chalet guest" ? "chalet guests" : "external guests"
      }.`
    );

    document.getElementById("locations")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const optionClass = (selected: boolean) =>
    `flex h-14 w-full items-center rounded-xl border px-4 text-left text-sm transition ${
      selected
        ? "border-[#193b30] bg-[#193b30] font-semibold text-white"
        : "border-[#ded4c3] bg-[#faf7f1] text-[#193b30] hover:border-[#193b30]"
    }`;

  return (
    <section
      id="booking"
      className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(20,45,30,0.12)] sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a36b17]">
        Book a treatment
      </p>

      <h2 className="mt-2 font-serif text-3xl text-[#10291f] sm:text-[30px]">
        Which treatment location would you like to visit?
      </h2>

      <div className="mt-7 grid items-end gap-4 md:grid-cols-[1.7fr_1.7fr_1fr]">
        {/* Location selection */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[#64746b]">
            1 · Location
          </p>

          <div className="grid grid-cols-2 gap-3">
            {["Steinberg am See", "Marktredwitz"].map((place) => (
              <button
                key={place}
                type="button"
                aria-pressed={location === place}
                onClick={() => {
                  setLocation(place);
                  setMessage("");
                }}
                className={optionClass(location === place)}
              >
                {place}
              </button>
            ))}
          </div>
        </div>

        {/* Guest type selection */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[#64746b]">
            2 · Guest type
          </p>

          <div className="grid grid-cols-2 gap-3">
            {["Chalet guest", "External guest"].map((guest) => (
              <button
                key={guest}
                type="button"
                aria-pressed={guestType === guest}
                onClick={() => {
                  setGuestType(guest);
                  setMessage("");
                }}
                className={optionClass(guestType === guest)}
              >
                {guest}
              </button>
            ))}
          </div>
        </div>

        {/* Find button */}
        <button
          type="button"
          onClick={handleFind}
          className="flex h-14 items-center justify-center gap-3 rounded-xl bg-[#193b30] px-5 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          Find
        </button>
      </div>

      <p aria-live="polite" className="mt-6 text-xs leading-5 text-[#64746b]">
        {message ||
          `You will see all treatments and retreats in ${location} for ${
            guestType === "Chalet guest" ? "chalet guests" : "external guests"
          }.`}
      </p>
    </section>
  );
}
