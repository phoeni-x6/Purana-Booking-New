
"use client";

import { useState } from "react";

export default function FloatingActions() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQuiz(!showQuiz)}
        aria-expanded={showQuiz}
        className="fixed bottom-5 left-4 z-40 flex items-center gap-3 rounded-full border border-[#e4ad3e] bg-white py-2 pl-2 pr-5 text-xs font-semibold text-[#193b30] shadow-xl transition hover:-translate-y-1"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#193b30] text-[#e4ad3e]">
          ✳
        </span>
        Free dosha quiz
        <span className="text-[#b17a20]">↗</span>
      </button>

      {showQuiz && (
        <div className="fixed bottom-24 left-4 z-50 w-[min(330px,calc(100vw-32px))] rounded-2xl border border-[#e8dfd0] bg-white p-6 shadow-2xl">
          <button
            onClick={() => setShowQuiz(false)}
            aria-label="Close quiz information"
            className="absolute right-4 top-3 text-2xl text-gray-500"
          >
            ×
          </button>

          <p className="text-xs uppercase tracking-[0.2em] text-[#a36b17]">
            A moment for you
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            Discover your dosha.
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#64746b]">
            Explore your Ayurvedic constitution and learn how to start
            building a more balanced daily routine.
          </p>

          <a
            href="#learn"
            onClick={() => setShowQuiz(false)}
            className="mt-5 inline-flex rounded-full bg-[#193b30] px-5 py-3 text-sm font-semibold text-white"
          >
            Explore the quiz ↗
          </a>
        </div>
      )}

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-5 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#168354] text-2xl text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#116c44]"
      >
        ◉
      </a>
    </>
  );
}
