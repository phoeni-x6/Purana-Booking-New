
export default function MembershipBanner() {
  return (
    <section className="bg-[#F4EFE5] px-5 pb-16 sm:pb-20">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-3xl bg-[#1D3B30] p-7 text-white sm:p-9 lg:flex-row lg:items-center">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#E4AD3E]">
            Save with the Purana membership
          </p>

          <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
            5% off as a member, 10% off with Premium
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/90">
            On every online consultation and Reset programme. Premium
            also includes 2 personal online consultations per year and
            a monthly online seminar.
          </p>
        </div>

        <a
          href="/#membership"
          className="shrink-0 rounded-full bg-[#E4AD3E] px-6 py-4 text-center text-sm font-semibold text-[#193B30] transition hover:bg-[#F2C76E]"
        >
          Become a member or upgrade
        </a>
      </div>
    </section>
  );
}
