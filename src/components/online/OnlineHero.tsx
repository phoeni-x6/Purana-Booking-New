
import Link from "next/link";

export default function OnlineHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e7] text-[#263A2B]">
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Warm cream overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#f5f0e7_0%,rgba(245,240,231,0.98)_22%,rgba(245,240,231,0.94)_40%,rgba(245,240,231,0.76)_58%,rgba(245,240,231,0.25)_82%,rgba(245,240,231,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#f5f0e7] via-transparent to-[#f5f0e7]/20"
      />

      {/* Decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[480px] w-[480px] rounded-full border border-[#2F5D39]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 -z-10 h-[340px] w-[340px] rounded-full border border-dashed border-[#DFC24D]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-[400px] w-[400px] rounded-full bg-[#EFE9C5]/70 blur-3xl"
      />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/70 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C14C38]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F5D39] sm:text-xs">
              Online, wherever you are
            </p>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
            Personal guidance · Flexible support · At-home wellness
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight text-[#21452B] sm:text-5xl lg:text-7xl">
            Your Ayurveda journey,
            <span className="mt-2 block italic text-[#9A8050]">
              wherever life takes you.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#533E23]/85 sm:text-base">
            Start with a 45-minute online consultation, or follow a guided
            Reset at Home programme with Lakshani — with videos, food plans
            and personal support to help bring Ayurveda into your everyday
            routine.
          </p>

          {/* Service highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "45-minute consultation",
              "Guided home programmes",
              "Personal support",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#2F5D39]/15 bg-[#F8F5E8]/75 px-4 py-2.5 text-xs text-[#21452B] shadow-sm backdrop-blur-sm sm:text-sm"
              >
                <span className="text-[#C14C38]">✳</span>
                {item}
              </span>
            ))}
          </div>

          {/* Membership savings */}
          <div className="mt-10 max-w-3xl border-t border-[#2F5D39]/15 pt-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
              {/* Standard membership */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8]/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9C5] text-lg text-[#2F5D39]">
                  ✳
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B705C]">
                    Membership
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#21452B]">
                    Save 5%
                  </p>
                </div>
              </div>

              {/* Premium membership */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#DFC24D]/60 bg-[#EFE9C5]/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFC24D] text-lg text-[#21452B]">
                  ✦
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B705C]">
                    Premium membership
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#21452B]">
                    Save 10%
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/#membership"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#2F5D39] transition-colors hover:text-[#C14C38]"
            >
              Become a member or upgrade
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative h-1 bg-gradient-to-r from-[#533E23] via-[#DFC24D] to-[#C14C38]" />
    </section>
  );
}
