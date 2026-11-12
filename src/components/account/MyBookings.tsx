
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BookingCard, { type Booking } from "./BookingCard";

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

export default function MyBookings() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] p-5 sm:p-7">
        <div>
          <h2 className="font-serif text-2xl text-[var(--forest-dark)]">
            Your appointments
          </h2>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            All your upcoming wellness bookings
          </p>
        </div>

        <Link
          href="/retreats/steinberg-am-see"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--forest-dark)] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[var(--terracotta)]"
        >
          Explore treatments <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="text-xs leading-6 text-[var(--text-muted)]">
          Need to change an appointment? Please contact the Purana Ayurveda
          team for assistance.
        </p>
      </div>
    </section>
  );
}
