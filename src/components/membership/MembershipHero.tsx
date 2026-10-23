
export default function MembershipHero() {
  return (
    <section className="bg-[#1D3B30] text-[#F4EFE5]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#E0A83E]">
            The Purana membership card · Starts 1 January 2027
          </p>

          <h1 className="mt-6 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Ayurveda in your everyday life
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#F4EFE5]/90">
            Podcasts, monthly Ayurveda tips and savings on treatments,
            Nivartana products, chalet stays and local restaurants — from
            €9.99 a month.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-full bg-[#E0A83E] px-6 py-4 text-sm font-semibold text-[#142F27] transition hover:bg-[#EDBA54]"
            >
              Join the waiting list
            </a>

            <a
              href="#benefits"
              className="rounded-full border border-[#81958A] px-6 py-4 text-sm font-medium transition hover:bg-white/10"
            >
              See all advantages
            </a>
          </div>
        </div>

        {/* Membership card preview */}
        <div className="mx-auto w-full max-w-md rounded-[22px] border border-[#486356] bg-[#10291F] p-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl tracking-wide">PURANA</span>
            <span className="text-3xl text-[#E0A83E]">♧</span>
          </div>

          <div className="mt-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#E0A83E]">
              Premium member
            </p>
            <p className="mt-2 text-xl">Anna Müller</p>
          </div>

          <div className="mt-12 flex justify-between text-xs text-[#F4EFE5]/80">
            <span>10% partner savings</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
