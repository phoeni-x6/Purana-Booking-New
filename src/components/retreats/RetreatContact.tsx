
export default function RetreatContact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl bg-[#e9dfcd] p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-3xl text-[#193b30] sm:text-4xl">
            Not sure which retreat is right for you?
          </h2>

          <p className="mt-3 text-sm text-[#53675d]">
            Tell us what you’re looking for and we’ll help you choose.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#193b30] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#2c5142]"
          >
            Chat on WhatsApp
          </a>

          <a
            href="mailto:info@example.com"
            className="rounded-full border border-[#193b30] px-5 py-4 text-sm font-semibold text-[#193b30] transition hover:bg-white/50"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
