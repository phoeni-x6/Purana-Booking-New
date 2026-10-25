
"use client";

export default function PhysicalMembershipCard() {
  return (
    <section
      id="physical-card"
      className="relative isolate overflow-hidden bg-[#EFE9C5] text-[#263A2B]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 -z-10 h-48 w-48 rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#DFC24D]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left content */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#533E23]">
              Physical membership card
            </p>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#21452B] sm:text-4xl md:text-5xl">
            Order your card, delivered by post
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B705C] sm:text-base">
            Prefer something to hold? Order your Purana membership card and
            we’ll send it to your home by post. Show it at our centre, at
            Nivartana, at the Chalet Resort and at our partner restaurants to
            receive your member discount.
          </p>

          {/* Membership card visual */}
          <div className="relative mt-9 max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-5 rounded-3xl bg-[#DFC24D]/15 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[22px] border border-[#DFC24D]/40 bg-[#21452B] p-6 text-[#F8F5E8] shadow-xl shadow-[#21452B]/15 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#DFC24D]">
                    Purana Ayurveda
                  </p>
                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl">
                    Membership Card
                  </h3>
                  <p className="mt-2 text-xs text-[#EFE9C5]/70">
                    Your everyday wellness companion
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#DFC24D]/40 text-2xl text-[#DFC24D]">
                  ✳
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#EFE9C5]/20 pt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#EFE9C5]/60">
                    Member benefits
                  </p>
                  <p className="mt-2 font-serif text-xl">
                    Wellness, naturally.
                  </p>
                </div>

                <span className="rounded-full bg-[#DFC24D] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#21452B]">
                  Purana
                </span>
              </div>

              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute -bottom-14 -right-10 h-36 w-36 rounded-full border border-[#EFE9C5]/10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full border border-[#EFE9C5]/10"
              />
            </div>
          </div>

          {/* Benefits list */}
          <div className="mt-9">
            <h3 className="font-serif text-xl text-[#21452B]">
              Your physical card includes
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm leading-6 text-[#263A2B]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F5D39]/10 text-[#2F5D39]">
                  ✓
                </span>
                <span>Personalised with your name and membership level</span>
              </li>

              <li className="flex items-start gap-3 text-sm leading-6 text-[#263A2B]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F5D39]/10 text-[#2F5D39]">
                  ✓
                </span>
                <span>Sent by post within [X] working days</span>
              </li>

              <li className="flex items-start gap-3 text-sm leading-6 text-[#263A2B]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F5D39]/10 text-[#2F5D39]">
                  ✓
                </span>
                <span>Card and delivery: [Free / €PRICE]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: delivery form */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[30px] bg-[#DFC24D]/10 blur-xl"
          />

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative overflow-hidden rounded-[26px] border border-[#D8D0A9] bg-[#F8F5E8] shadow-xl shadow-[#533E23]/10"
          >
            {/* Form header */}
            <div className="bg-[#21452B] px-6 py-7 text-[#F8F5E8] sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DFC24D]/30 bg-[#DFC24D]/10 text-[#DFC24D]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18M7 15h4" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-serif text-2xl">
                    Card delivery details
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#EFE9C5]/70">
                    Tell us where to send your card.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Name fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-[#533E23]">
                  First name
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Your first name"
                    className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#533E23]">
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Your last name"
                    className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </label>
              </div>

              {/* Membership identification */}
              <label className="mt-5 block text-xs font-semibold text-[#533E23]">
                Membership number or email
                <input
                  type="text"
                  name="membership"
                  required
                  placeholder="Membership number or email address"
                  className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                />
              </label>

              {/* Address */}
              <label className="mt-5 block text-xs font-semibold text-[#533E23]">
                Street and house number
                <input
                  type="text"
                  name="street"
                  autoComplete="address-line1"
                  required
                  placeholder="Street and house number"
                  className="mt-2 w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                />
              </label>

              {/* Postcode, city and country */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="block text-xs font-semibold text-[#533E23]">
                  Postcode
                  <input
                    type="text"
                    name="postcode"
                    autoComplete="postal-code"
                    required
                    placeholder="Postcode"
                    className="mt-2 w-full min-w-0 rounded-xl border border-[#D8D0A9] bg-white px-3 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#533E23]">
                  City
                  <input
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    required
                    placeholder="City"
                    className="mt-2 w-full min-w-0 rounded-xl border border-[#D8D0A9] bg-white px-3 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition placeholder:text-[#6B705C]/60 focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#533E23]">
                  Country
                  <input
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    required
                    defaultValue="Germany"
                    className="mt-2 w-full min-w-0 rounded-xl border border-[#D8D0A9] bg-white px-3 py-3.5 text-sm font-normal text-[#263A2B] outline-none transition focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10"
                  />
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#21452B] px-5 py-4 text-sm font-semibold text-[#F8F5E8] transition hover:bg-[#2F5D39] focus:outline-none focus:ring-2 focus:ring-[#DFC24D] focus:ring-offset-2"
              >
                Order physical card
                <span aria-hidden="true">→</span>
              </button>

              {/* Delivery note */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#D8D0A9] bg-[#EFE9C5]/50 p-4">
                <span className="mt-0.5 text-[#533E23]" aria-hidden="true">
                  ✧
                </span>

                <p className="text-xs leading-6 text-[#6B705C]">
                  Physical cards can be ordered from 1 January 2027 by active
                  Membership and Premium members. Your digital card works
                  right away while your physical card is on its way.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
