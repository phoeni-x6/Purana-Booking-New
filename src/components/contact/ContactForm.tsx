
"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  selectedPackage: string;
};

export default function ContactForm({
                                      selectedPackage,
                                    }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      packageName: String(formData.get("package") || ""),
      message: String(formData.get("message") || ""),
    };

    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
            result.error || "Ihre Anfrage konnte nicht gesendet werden."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
          error instanceof Error
              ? error.message
              : "Ein unerwarteter Fehler ist aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className="rounded-[28px] border border-[#E3D9C6] bg-[#F3EEE3] p-6 shadow-[0_8px_30px_rgba(75,71,52,0.05)] sm:p-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66C4E]">
          KONTAKTIEREN SIE UNS
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#354B38]">
          Ihre Anfrage
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#6B705C]">
          Füllen Sie das Formular aus. Wir freuen uns auf Ihre Nachricht.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#596B55]">
              Ihr Name *
            </label>
            <input
                type="text"
                name="name"
                required
                maxLength={120}
                placeholder="Vor- und Nachname"
                className="w-full rounded-xl border border-[#DED5C3] bg-[#F9F6EF] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#596B55]">
              E-Mail-Adresse *
            </label>
            <input
                type="email"
                name="email"
                required
                maxLength={254}
                placeholder="Ihre E-Mail-Adresse"
                className="w-full rounded-xl border border-[#DED5C3] bg-[#F9F6EF] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#596B55]">
              Telefonnummer
            </label>
            <input
                type="tel"
                name="phone"
                maxLength={50}
                placeholder="Optional"
                className="w-full rounded-xl border border-[#DED5C3] bg-[#F9F6EF] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#596B55]">
              Gewünschtes Angebot
            </label>
            <input
                type="text"
                name="package"
                defaultValue={selectedPackage}
                maxLength={200}
                placeholder="Welches Angebot interessiert Sie?"
                className="w-full rounded-xl border border-[#DED5C3] bg-[#E9E4D5] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#596B55]">
              Ihre Nachricht *
            </label>
            <textarea
                name="message"
                required
                maxLength={5000}
                rows={5}
                placeholder="Wie können wir Ihnen helfen?"
                className="w-full resize-none rounded-xl border border-[#DED5C3] bg-[#F9F6EF] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
            />
          </div>

          <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? "Wird gesendet..." : "Anfrage senden"}

            {!loading && (
                <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            )}
          </button>

          {status === "success" && (
              <p role="status" className="text-center text-sm leading-6 text-[#3F6048]">
                Vielen Dank für Ihre Nachricht! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns so bald wie möglich bei Ihnen melden.
              </p>
          )}

          {status === "error" && (
              <p role="alert" className="text-center text-sm leading-6 text-[#B44735]">
                {errorMessage}
              </p>
          )}

          <p className="text-center text-[11px] leading-5 text-[#8A806C]">
            Ihre Angaben werden für die Bearbeitung Ihrer Anfrage verwendet.
          </p>
        </form>
      </div>
  );
}
