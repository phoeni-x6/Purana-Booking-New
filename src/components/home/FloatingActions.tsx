
"use client";

import { useState } from "react";

export default function FloatingActions() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQuiz(!showQuiz)}
        aria-expanded={showQuiz}
        className="fixed bottom-5 left-4 z-40 flex items-center gap-3 rounded-full border border-[#DFC24D] bg-[#F8F5E8] py-2 pl-2 pr-5 text-xs font-semibold text-[#21452B] shadow-xl transition hover:-translate-y-1"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2F5D39] text-[#DFC24D]">
          ✳
        </span>
        Kostenloser Dosha-Test
        <span className="text-[#C14C38]">↗</span>
      </button>

      {showQuiz && (
        <div className="fixed bottom-24 left-4 z-50 w-[min(330px,calc(100vw-32px))] rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] p-6 shadow-2xl">
          <button
            onClick={() => setShowQuiz(false)}
            aria-label="Informationen zum Test schließen"
            className="absolute right-4 top-3 text-2xl text-[#6B705C]"
          >
            ×
          </button>

          <p className="text-xs uppercase tracking-[0.2em] text-[#C14C38]">
            Ein Moment nur für Sie
          </p>

          <h3 className="mt-3 font-serif text-2xl text-[#21452B]">
            Entdecken Sie Ihren Dosha-Typ.
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6B705C]">
            Entdecken Sie Ihre ayurvedische Konstitution und erfahren Sie,
            wie Sie Ihren Alltag Schritt für Schritt harmonischer und
            ausgeglichener gestalten können.
          </p>

          <a
            href="/en/dosha-quiz"
            onClick={() => setShowQuiz(false)}
            className="mt-5 inline-flex rounded-full bg-[#2F5D39] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#21452B]"
          >
            Zum Dosha-Test ↗
          </a>
        </div>
      )}

      <a
  href="https://wa.me/+491759479619"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Kontaktieren Sie uns über WhatsApp"
  className="fixed bottom-5 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#2F5D39] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#21452B]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.52 0 .18 5.34.18 11.89c0 2.1.55 4.16 1.6 5.98L.08 24l6.29-1.65a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.17-1.23-6.15-3.44-8.43ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.9 7.01c0 5.47-4.45 9.91-9.95 9.91Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
  </svg>
</a>
    </>
  );
}
