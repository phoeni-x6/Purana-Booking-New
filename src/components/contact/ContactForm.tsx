"use client";

import { FormEvent, useState } from "react";

export default function ContactForm({
  selectedPackage,
}: {
  selectedPackage: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const packageName = formData.get("package");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Anfrage – ${packageName}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone || "Nicht angegeben"}\n` +
      `Angebot: ${packageName}\n\n` +
      `Nachricht:\n${message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
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
            rows={5}
            placeholder="Wie können wir Ihnen helfen?"
            className="w-full resize-none rounded-xl border border-[#DED5C3] bg-[#F9F6EF] px-4 py-3.5 text-sm text-[#514C3D] outline-none transition focus:border-[#8A9A71]"
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#3F6048] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#526F57]"
        >
          Anfrage senden
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

        {submitted && (
          <p className="text-center text-xs leading-6 text-[#596B55]">
            Ihr E-Mail-Programm sollte sich jetzt mit Ihrer Anfrage öffnen.
            Bitte senden Sie die vorbereitete E-Mail dort ab.
          </p>
        )}

        <p className="text-center text-[11px] leading-5 text-[#8A806C]">
          Ihre Angaben werden für die Bearbeitung Ihrer Anfrage verwendet.
        </p>
      </form>
    </div>
  );
}