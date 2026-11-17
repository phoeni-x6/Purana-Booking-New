
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import TreatmentCard from "@/components/retreats/steinberg/TreatmentCard";

type Treatment = {
  id: string;
  name: string;
  category: string;
  duration_minutes: number;
  price: number | string;
  currency: string;
  description: string | null;
  image: string | null;
};

function formatPrice(price: number | string, currency: string) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(Number(price));
}

export default function SteinbergTreatments() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchTreatments() {
      const supabase = createClient();

      const { data, error } = await supabase
          .from("treatments")
          .select("*")
          .eq("active", true)
          .eq("available_for_booking", true)
          .order("category", { ascending: true })
          .order("name", { ascending: true });

      if (!isMounted) return;

      if (error) {
        console.error("Error fetching treatments:", error);
        setError("Die Behandlungen konnten momentan nicht geladen werden.");
        setLoading(false);
        return;
      }

      setTreatments((data ?? []) as unknown as Treatment[]);
      setLoading(false);
    }

    fetchTreatments();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
      <section
          id="individual-treatments"
          className="relative scroll-mt-20 overflow-hidden bg-[#f5f0e7] px-5 py-20 sm:px-8 sm:py-28"
      >
        {/* Decorative background elements */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full border border-[#2F5D39]/10"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-26 h-[320px] w-[320px] rounded-full border border-[#DFC24D]/20"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-20 h-[380px] w-[380px] rounded-full bg-[#DFC24D]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Introduction */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C14C38]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C14C38]">
                  Die Kunst des Ayurveda · Steinberg am See
                </p>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
                01 / Individuelle Behandlungen
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-[#21452B] sm:text-5xl lg:text-6xl">
                Ein wenig Zeit
                <span className="block italic text-[#9A8050]">
                nur für Sie.
              </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#533E23]/80 sm:text-base sm:leading-8">
                Entdecken Sie traditionelle Ayurveda-Behandlungen, die Ihnen
                helfen, den Alltag hinter sich zu lassen, zu entspannen und
                wieder ganz bei sich anzukommen. Wählen Sie die Anwendung,
                die sich für Sie und Ihren persönlichen Moment richtig anfühlt.
              </p>
            </div>

            {/* Dynamic treatment count */}
            <div className="flex items-center gap-4 border-t border-[#21452B]/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span className="font-serif text-5xl text-[#9A8050]">
              {loading ? "—" : treatments.length}
            </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#21452B]">
                  Erlebnisse
                </p>
                <p className="mt-1 text-xs text-[#6B705C]">
                  Zum Entdecken und Genießen
                </p>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="my-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#21452B]/15" />
            <span className="font-serif text-xl italic text-[#9A8050]">✳</span>
            <span className="h-px flex-1 bg-[#21452B]/15" />
          </div>

          {/* Treatment cards */}
          {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-[420px] animate-pulse rounded-[24px] bg-[#E8E1D2]"
                    />
                ))}
              </div>
          ) : error ? (
              <div className="rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] px-6 py-10 text-center">
                <p className="text-sm text-[#6B705C]">{error}</p>
              </div>
          ) : treatments.length === 0 ? (
              <div className="rounded-2xl border border-[#D8D0A9] bg-[#F8F5E8] px-6 py-10 text-center">
                <p className="font-serif text-2xl text-[#21452B]">
                  Momentan keine Behandlungen verfügbar.
                </p>
                <p className="mt-2 text-sm text-[#6B705C]">
                  Bitte schauen Sie später wieder vorbei.
                </p>
              </div>
          ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {treatments.map((treatment, index) => (
                    <div key={treatment.id} className="group relative">
                      <div className="absolute -inset-2 rounded-[26px] border border-[#DFC24D]/0 transition-colors duration-300 group-hover:border-[#DFC24D]/60" />

                      <div className="relative h-full">
                        <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#21452B]/75 text-xs font-semibold text-white backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <TreatmentCard
                            name={treatment.name}
                            category={treatment.category}
                            duration={`${treatment.duration_minutes} Min.`}
                            price={formatPrice(treatment.price, treatment.currency)}
                            image={treatment.image}
                            description={treatment.description ?? ""}
                        />
                      </div>
                    </div>
                ))}
              </div>
          )}

          {/* Note under treatments */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B705C]">
            <p>
              Jede Behandlung lädt Sie dazu ein, sich einen Moment ganz für sich
              selbst zu nehmen.
            </p>
            <p className="font-semibold uppercase tracking-[0.16em] text-[#9A8050]">
              Entdecken · Entspannen · Auftanken
            </p>
          </div>

          {/* Contact section */}
          <div className="relative mt-20 overflow-hidden rounded-[28px] bg-[#21452B] px-6 py-10 text-[#F8F5E8] sm:px-10 sm:py-12 lg:px-14">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-36 h-[380px] w-[380px] rounded-full border border-[#DFC24D]/20"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-20 h-[260px] w-[260px] rounded-full border border-[#DFC24D]/15"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-[45%] h-64 w-64 rounded-full bg-[#2F5D39] blur-3xl"
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#DFC24D]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#DFC24D]">
                    Ihr Wohlbefinden steht an erster Stelle
                  </p>
                </div>

                <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                  Sie wissen nicht, womit Sie beginnen sollen?
                  <span className="block italic text-[#DFC24D]">
                  Wir finden die passende Behandlung.
                </span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                  Jeder Mensch ist einzigartig. Kontaktieren Sie unser Team,
                  um Ihre Wünsche und Bedürfnisse zu besprechen und gemeinsam
                  die Behandlung zu finden, die zu Ihnen passt.
                </p>
              </div>

              <a
                  href="#contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#DFC24D] px-7 py-4 text-sm font-semibold text-[#21452B] transition-all hover:-translate-y-1 hover:bg-[#EFE9C5]"
              >
                Kontaktieren Sie unser Team
                <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
              </a>
            </div>
          </div>

          {/* Closing detail */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="font-serif text-lg italic text-[#533E23]/70">
              Atmen Sie tief durch. Dieser Moment gehört Ihnen.
            </p>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8050]">
            Purana Ayurveda · Deutschland
          </span>
          </div>
        </div>
      </section>
  );
}
// Test