import { CalendarDays, Clock3, MapPin, Leaf } from "lucide-react";
import StatusBadge from "./StatusBadge";

export type Booking = {
  id: string;
  service: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  status: "Confirmed" | "Pending" | "Cancelled";
};

export default function BookingCard({ booking }: { booking: Booking }) {
  return (
    <article className="flex flex-col justify-between gap-5 p-5 sm:p-6 lg:flex-row lg:items-center">
      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--cream)] text-[var(--forest)]">
          <Leaf size={25} />
        </div>

        <div>
          <h3 className="font-serif text-xl text-[var(--forest-dark)]">
            {booking.service}
          </h3>

          <p className="mt-1 text-[11px] text-[var(--text-muted)]">
            Booking ID: {booking.id}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {booking.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={14} />
              {booking.time}
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {booking.location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 border-t border-[var(--border)] pt-4 lg:border-0 lg:pt-0">
        <div>
          <p className="font-serif text-xl text-[var(--forest-dark)]">
            {booking.price}
          </p>
          <p className="mt-1 text-[10px] text-[var(--text-muted)]">
            {booking.duration}
          </p>
        </div>

        <StatusBadge status={booking.status} />
      </div>
    </article>
  );
}
