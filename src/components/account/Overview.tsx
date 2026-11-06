
import {
  CalendarDays,
  CalendarCheck,
  ShieldCheck,
  Leaf,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import BookingCard, { type Booking } from "./BookingCard";
import type { AccountTab } from "./AccountLayout";

const bookings: Booking[] = [
  {
    id: "PA-2026-001",
    service: "Abhyanga Massage",
    location: "Steinberg am See, Germany",
    date: "18 November 2026",
    time: "10:30 AM",
    duration: "75 minutes",
    price: "€65",
    status: "Confirmed",
  },
  {
    id: "PA-2026-002",
    service: "Ayurvedic Consultation",
    location: "Online Consultation",
    date: "25 November 2026",
    time: "02:00 PM",
    duration: "45 minutes",
    price: "€45",
    status: "Pending",
  },
];

export default function Overview({
  onNavigate,
}: {
  onNavigate: (tab: AccountTab) => void;
}) {
  const stats = [
    {
      title: "Total bookings",
      value: "02",
      description: "Your appointments",
      icon: CalendarDays,
    },
    {
      title: "Confirmed",
      value: "01",
      description: "Confirmed appointments",
      icon: CalendarCheck,
    },
    {
      title: "Account status",
      value: "Active",
      description: "Your account is ready",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <section className="mb-7 overflow-hidden rounded-[24px] bg-[var(--forest-dark)] p-6 text-white sm:p-9">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              A MOMENT FOR YOURSELF
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Hello, Alexandra.
              <br />
              <span className="italic text-[var(--gold)]">
                Welcome back.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Your journey towards balance and wellbeing continues here.
              Take a moment to explore your personal space.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("profile")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-xs font-bold text-[var(--forest-dark)] transition hover:bg-[var(--terracotta)] hover:text-white"
            >
              View my profile <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="hidden h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-white/[0.04] lg:flex">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[var(--gold)]/50">
              <Leaf size={53} className="text-[var(--gold)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6"
            >
              <div>
                <p className="text-xs text-[var(--text-muted)]">
                  {item.title}
                </p>
                <p className="mt-2 font-serif text-3xl text-[var(--forest-dark)]">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--cream)] text-[var(--forest)]">
                <Icon size={23} />
              </div>
            </article>
          );
        })}
      </section>

      <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] p-5 sm:p-6">
          <div>
            <h3 className="font-serif text-xl text-[var(--forest-dark)]">
              Upcoming appointments
            </h3>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Your next wellness experiences
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("bookings")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
          >
            View all <ChevronRight size={15} />
          </button>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </section>
    </>
  );
}
