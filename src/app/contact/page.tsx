import ContactForm from "@/components/contact/ContactForm";

type ContactPageProps = {
  searchParams: Promise<{
    package?: string;
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const { package: selectedPackage } = await searchParams;

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-20 text-[#514C3D] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Introduction */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#C14C38]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A66C4E]">
              PURANA AYURVEDA
            </p>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight text-[#354B38] sm:text-5xl lg:text-6xl">
            Lassen Sie uns über
            <span className="mt-2 block italic text-[#A66C4E]">
              Ihre Auszeit sprechen.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-8 text-[#6B705C] sm:text-base">
            Haben Sie Fragen zu unseren Ayurveda-Behandlungen oder
            Retreat-Angeboten? Schreiben Sie uns. Wir helfen Ihnen gerne,
            das passende Erlebnis für Ihre Bedürfnisse zu finden.
          </p>

          <div className="mt-10 space-y-5 border-t border-[#E3D9C6] pt-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                E-MAIL
              </p>
              <p className="mt-2 text-sm text-[#596B55]">
                [Ihre Kontakt-E-Mail-Adresse]
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A66C4E]">
                STANDORT
              </p>
              <p className="mt-2 text-sm text-[#596B55]">
                Steinberg am See, Deutschland
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm selectedPackage={selectedPackage ?? ""} />
      </div>
    </main>
  );
}