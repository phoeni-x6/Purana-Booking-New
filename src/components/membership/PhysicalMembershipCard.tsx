
"use client";

export default function PhysicalMembershipCard() {
  return (
    <section className="bg-[#F4EFE5] text-[#142F27]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9A6115]">
            Physical membership card
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Order your card, delivered by post
          </h2>

          <p className="mt-5 text-sm leading-6 text-[#52665C]">
            Prefer something to hold? Order your Purana membership card and
            we’ll send it to your home by post. Show it at our centre, at
            Nivartana, at the Chalet Resort and at our partner restaurants to
            receive your member discount.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>✓ Personalised with your name and membership level</li>
            <li>✓ Sent by post within [X] working days</li>
            <li>✓ Card and delivery: [Free / €PRICE]</li>
          </ul>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-2xl bg-white p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold">Card delivery details</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold">
              First name
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-4 py-3 font-normal outline-none focus:border-[#1D3B30]"
              />
            </label>

            <label className="text-xs font-semibold">
              Last name
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-4 py-3 font-normal outline-none focus:border-[#1D3B30]"
              />
            </label>
          </div>

          {[
            "Membership number or email",
            "Street and house number",
          ].map((label) => (
            <label key={label} className="mt-5 block text-xs font-semibold">
              {label}
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-4 py-3 font-normal outline-none focus:border-[#1D3B30]"
              />
            </label>
          ))}

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Postcode", "City", "Country"].map((label) => (
              <label key={label} className="text-xs font-semibold">
                {label}
                <input
                  type="text"
                  defaultValue={label === "Country" ? "Germany" : ""}
                  className="mt-2 w-full min-w-0 rounded-xl border border-[#D6C9B5] bg-[#FAF7F1] px-3 py-3 font-normal outline-none focus:border-[#1D3B30]"
                />
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#1D3B30] px-5 py-4 text-sm font-semibold text-white hover:bg-[#2D5142]"
          >
            Order physical card
          </button>

          <p className="mt-5 text-xs leading-5 text-[#52665C]">
            Physical cards can be ordered from 1 January 2027 by active
            Membership and Premium members. Your digital card works right
            away while your physical card is on its way.
          </p>
        </form>
      </div>
    </section>
  );
}
