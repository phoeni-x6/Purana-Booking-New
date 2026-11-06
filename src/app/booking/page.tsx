
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type BookingType = "treatment" | "long-stay" | "consultation";

type Treatment = {
  treatment_id: string;
  name: string;
  category: string;
  duration_minutes: number;
  price: number;
  currency: string;
  description: string | null;
};

type AvailableSlot = {
  slot_time: string;
  therapist_id: string;
  therapist_name: string;
};

type BookingDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;
  allergies: string;
  medical: string;
  notes: string;
};

const inputClass =
    "w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm text-[#263A2B] outline-none transition placeholder:text-[#A9A18C] focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10";

const labelClass = "mb-2 block text-sm font-medium text-[#533E23]";

const MIN_BOOKING_DATE = "2027-01-01";

function getBookingType(category: string): BookingType {
  const value = category.toLowerCase();

  if (value.includes("consult") || value.includes("online")) {
    return "consultation";
  }

  if (
      value.includes("long-stay") ||
      value.includes("long stay") ||
      value.includes("package") ||
      value.includes("retreat")
  ) {
    return "long-stay";
  }

  return "treatment";
}

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency || "EUR",
  }).format(price);
}

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} minutes`;

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (!remainingMinutes) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

export default function BookingPage() {
  const [step, setStep] = useState(1);

  // Database treatments
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loadingTreatments, setLoadingTreatments] = useState(true);

  const [treatmentId, setTreatmentId] = useState("");

  // Guest information
  const [guestType, setGuestType] = useState<"external" | "chalet">(
      "external",
  );

  // Availability
  const [date, setDate] = useState("");
  const [allSlots, setAllSlots] = useState<AvailableSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [therapistId, setTherapistId] = useState("any");
  const [selectedTime, setSelectedTime] = useState("");

  // Payment
  const [payment, setPayment] = useState("card");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Submission
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  // Customer details
  const [details, setDetails] = useState<BookingDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    allergies: "",
    medical: "",
    notes: "",
  });

  // Selected treatment from database
  const selectedTreatment = useMemo(
      () => treatments.find((item) => item.treatment_id === treatmentId),
      [treatments, treatmentId],
  );

  const bookingType = selectedTreatment
      ? getBookingType(selectedTreatment.category)
      : "treatment";

  // Available service types based on database categories.
  const categories = useMemo(() => {
    return Array.from(
        new Set(treatments.map((item) => getBookingType(item.category))),
    );
  }, [treatments]);

  // Treatments belonging to selected service type.
  const visibleTreatments = useMemo(() => {
    return treatments.filter(
        (item) => getBookingType(item.category) === bookingType,
    );
  }, [treatments, bookingType]);

  // Therapists who have available slots.
  const availableTherapists = useMemo(() => {
    const unique = new Map<string, string>();

    allSlots.forEach((slot) => {
      unique.set(slot.therapist_id, slot.therapist_name);
    });

    return Array.from(unique, ([id, name]) => ({ id, name }));
  }, [allSlots]);

  // Filter slots according to selected therapist.
  const visibleSlots = useMemo(() => {
    const filtered =
        therapistId === "any"
            ? allSlots
            : allSlots.filter((slot) => slot.therapist_id === therapistId);

    // Display each time only once when no therapist is selected.
    return Array.from(
        new Map(filtered.map((slot) => [slot.slot_time, slot])).values(),
    ).sort((a, b) => a.slot_time.localeCompare(b.slot_time));
  }, [allSlots, therapistId]);

  const selectedSlot = useMemo(() => {
    if (!selectedTime) return null;

    return allSlots.find(
        (slot) =>
            slot.slot_time === selectedTime &&
            (therapistId === "any" || slot.therapist_id === therapistId),
    );
  }, [allSlots, selectedTime, therapistId]);

  const updateDetail = (field: keyof BookingDetails, value: string) => {
    setDetails((current) => ({
      ...current,
      [field]: value,
    }));
  };

  // --------------------------------------------------
  // LOAD TREATMENTS FROM DATABASE
  // --------------------------------------------------

  useEffect(() => {
    let active = true;

    async function loadTreatments() {
      try {
        const response = await fetch("/api/booking/treatments", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load treatments.");
        }

        if (!active) return;

        const loaded: Treatment[] = result.treatments ?? [];

        setTreatments(loaded);

        if (loaded.length > 0) {
          const params = new URLSearchParams(window.location.search);
          const requestedService = params.get("service");

          const matching = loaded.find(
              (item) =>
                  item.name.toLowerCase() === requestedService?.toLowerCase(),
          );

          // Only use the URL to identify a treatment.
          // Price and duration always come from the database.
          setTreatmentId(
              matching?.treatment_id ?? loaded[0].treatment_id,
          );
        }
      } catch (err) {
        if (active) {
          setError(
              err instanceof Error
                  ? err.message
                  : "Unable to load treatments.",
          );
        }
      } finally {
        if (active) setLoadingTreatments(false);
      }
    }

    void loadTreatments();

    return () => {
      active = false;
    };
  }, []);

  // --------------------------------------------------
  // LOAD LOGGED-IN CUSTOMER PROFILE
  // --------------------------------------------------

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const supabase = createClient();

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user || !active) return;

        const { data, error: profileError } = await supabase
            .from("profiles")
            .select("first_name, last_name, email, phone")
            .eq("id", user.id)
            .maybeSingle();

        if (profileError) throw profileError;

        if (!data || !active) return;

        setDetails((current) => ({
          ...current,
          firstName: data.first_name || current.firstName,
          lastName: data.last_name || current.lastName,
          email: data.email || user.email || current.email,
          phone: data.phone || current.phone,
        }));
      } catch (err) {
        console.error("Unable to load customer profile:", err);
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, []);

  // --------------------------------------------------
  // LOAD AVAILABILITY
  // --------------------------------------------------

  useEffect(() => {
    if (!treatmentId || !date) return;

    let active = true;

    async function fetchAvailability() {
      try {
        const params = new URLSearchParams({
          treatmentId,
          date,
        });

        const response = await fetch(
            `/api/booking/availability?${params.toString()}`,
            { cache: "no-store" },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
              result.error || "Unable to load availability.",
          );
        }

        if (!active) return;

        setAllSlots(result.slots ?? []);
      } catch (err) {
        if (!active) return;

        setAllSlots([]);

        setError(
            err instanceof Error
                ? err.message
                : "Unable to load available times.",
        );
      } finally {
        if (active) setLoadingSlots(false);
      }
    }

    void fetchAvailability();

    return () => {
      active = false;
    };
  }, [treatmentId, date]);

  // --------------------------------------------------
  // SERVICE TYPE AND TREATMENT SELECTION
  // --------------------------------------------------

  const handleTreatmentChange = (id: string) => {
    setTreatmentId(id);
    setDate("");
    setAllSlots([]);
    setSelectedTime("");
    setTherapistId("any");
    setLoadingSlots(false);
    setError("");
  };

  const handleTypeChange = (type: BookingType) => {
    const first = treatments.find(
        (item) => getBookingType(item.category) === type,
    );

    if (first) {
      handleTreatmentChange(first.treatment_id);
    }
  };

  // --------------------------------------------------
  // DATE AND THERAPIST SELECTION
  // --------------------------------------------------

  const handleDateChange = (value: string) => {
    setDate(value);
    setAllSlots([]);
    setSelectedTime("");
    setTherapistId("any");
    setError("");
    setLoadingSlots(Boolean(value && treatmentId));
  };

  const handleTherapistChange = (value: string) => {
    setTherapistId(value);
    setSelectedTime("");
  };

  // --------------------------------------------------
  // VALIDATION
  // --------------------------------------------------

  const canContinue = () => {
    setError("");

    if (step === 1 && !selectedTreatment) {
      setError("Please select a treatment.");
      return false;
    }

    if (step === 2) {
      if (!date || !selectedTime || !selectedSlot) {
        setError("Please select an available date and time.");
        return false;
      }
    }

    if (
        step === 3 &&
        (!details.firstName.trim() ||
            !details.lastName.trim() ||
            !details.email.trim() ||
            !details.phone.trim() ||
            !details.language)
    ) {
      setError("Please complete all required personal information.");
      return false;
    }

    if (
        step === 3 &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
    ) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (step === 4 && !acceptedTerms) {
      setError("Please accept the booking and treatment terms.");
      return false;
    }

    return true;
  };

  // --------------------------------------------------
  // CREATE BOOKING
  // --------------------------------------------------

  const handleSubmit = async () => {
    if (!canContinue() || !selectedTreatment || !selectedSlot) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          treatmentId: selectedTreatment.treatment_id,
          therapistId: selectedSlot.therapist_id,
          date,
          time: selectedTime,
          guestType,
          firstName: details.firstName,
          lastName: details.lastName,
          email: details.email,
          phone: details.phone,
          language: details.language,
          allergies: details.allergies,
          medical: details.medical,
          notes: details.notes,
          payment,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to create booking.");
      }

      setBookingId(result.bookingId);
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      setError(
          err instanceof Error
              ? err.message
              : "Something went wrong. Please try again.",
      );

      // Clear the selected slot so the customer can re-check availability.
      setAllSlots([]);
      setSelectedTime("");
    } finally {
      setSubmitting(false);
    }
  };

  // --------------------------------------------------
  // STEP NAVIGATION
  // --------------------------------------------------

  const handleContinue = () => {
    if (!canContinue()) return;

    if (step < 4) {
      setStep((current) => current + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      void handleSubmit();
    }
  };

  // --------------------------------------------------
  // SUCCESS SCREEN
  // --------------------------------------------------

  if (submitted && selectedTreatment) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#EFE9C5] px-5 py-16">
          <div className="w-full max-w-xl rounded-[28px] bg-[#F8F5E8] p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2F5D39] text-white">
              <Check size={30} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
              Booking request received
            </p>

            <h1 className="mt-3 font-[var(--font-heading)] text-3xl text-[#21452B] sm:text-4xl">
              Thank you, {details.firstName}!
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#6B705C]">
              Your booking request has been successfully submitted. The
              Purana Ayurveda team will review your request and contact you
              regarding confirmation.
            </p>

            <div className="my-7 space-y-3 rounded-2xl bg-[#EFE9C5] p-5 text-left">
              <p className="font-semibold text-[#21452B]">
                {selectedTreatment.name}
              </p>

              <p className="text-sm text-[#6B705C]">
                {date} · {selectedTime}
              </p>

              <p className="text-sm text-[#6B705C]">
                {formatDuration(selectedTreatment.duration_minutes)} ·{" "}
                {formatPrice(
                    selectedTreatment.price,
                    selectedTreatment.currency,
                )}
              </p>

              <p className="text-sm text-[#6B705C]">
                Therapist: {selectedSlot?.therapist_name}
              </p>

              <p className="break-all text-xs text-[#8B8778]">
                Booking reference: {bookingId}
              </p>
            </div>

            <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#21452B] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2F5D39]"
            >
              Return to homepage
            </Link>
          </div>
        </main>
    );
  }

  // --------------------------------------------------
  // LOADING SCREEN
  // --------------------------------------------------

  if (loadingTreatments) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#EFE9C5] px-5">
          <p className="text-sm text-[#533E23]">Loading treatments...</p>
        </main>
    );
  }

  if (!treatments.length) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#EFE9C5] px-5">
          <div className="max-w-md rounded-2xl bg-white p-8 text-center">
            <h1 className="text-xl font-semibold text-[#533E23]">
              No treatments available
            </h1>

            <p className="mt-3 text-sm text-[#8B8778]">
              There are currently no bookable treatments. Please contact
              Purana Ayurveda for assistance.
            </p>
          </div>
        </main>
    );
  }

  // --------------------------------------------------
  // MAIN BOOKING UI
  // --------------------------------------------------

  return (
      <main className="min-h-screen bg-[#EFE9C5] px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-[1010px]">

          {/* Progress */}
          <div className="mb-10 flex items-center justify-center">
            <div className="flex w-full max-w-[720px] items-center">
              {["Service", "Date & Time", "Your Details", "Payment"].map(
                  (label, index) => {
                    const number = index + 1;
                    const complete = step > number;
                    const active = step === number;

                    return (
                        <div key={label} className="flex flex-1 items-center">
                          <div className="flex min-w-[60px] flex-col items-center">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                                    active || complete
                                        ? "bg-[#2F5D39] text-white"
                                        : "bg-white text-[#A9A18C]"
                                }`}
                            >
                              {complete ? <Check size={18} /> : number}
                            </div>

                            <span
                                className={`mt-2 text-center text-[10px] sm:text-xs ${
                                    active || complete
                                        ? "font-semibold text-[#21452B]"
                                        : "text-[#A9A18C]"
                                }`}
                            >
                        {label}
                      </span>
                          </div>

                          {index !== 3 && (
                              <div
                                  className={`mb-5 h-px flex-1 ${
                                      complete ? "bg-[#2F5D39]" : "bg-[#D8D0A9]"
                                  }`}
                              />
                          )}
                        </div>
                    );
                  },
              )}
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(33,69,43,0.09)] lg:grid-cols-[0.78fr_1.22fr]">

            {/* Left summary panel */}
            <aside className="bg-[#2F5D39] p-7 text-white sm:p-9 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFC24D] text-[#533E23]">
                <Leaf size={22} />
              </div>

              <h2 className="mt-6 font-[var(--font-heading)] text-3xl">
                Your booking
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                Take your time and choose the experience that feels right for
                your wellness journey.
              </p>

              <div className="my-8 border-t border-white/15" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Selected service
              </p>

              <h3 className="mt-3 font-[var(--font-heading)] text-2xl">
                {selectedTreatment?.name || "Select a treatment"}
              </h3>

              {selectedTreatment && (
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p className="flex items-center gap-3">
                      <Clock3 size={16} />
                      {formatDuration(selectedTreatment.duration_minutes)}
                    </p>

                    <p className="flex items-center gap-3">
                      <span className="text-lg">€</span>
                      {formatPrice(
                          selectedTreatment.price,
                          selectedTreatment.currency,
                      )}
                    </p>

                    {date && (
                        <p className="flex items-center gap-3">
                          <CalendarDays size={16} />
                          {date}
                        </p>
                    )}

                    {selectedTime && (
                        <p className="flex items-center gap-3">
                          <Clock3 size={16} />
                          {selectedTime}
                        </p>
                    )}
                  </div>
              )}

              <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-[#DFC24D]">
                  <ShieldCheck size={17} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                  Personal wellness
                </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-white/65">
                  Your information will be used to help prepare for your
                  requested appointment.
                </p>
              </div>
            </aside>

            {/* Right form panel */}
            <section className="min-w-0 p-6 sm:p-9 lg:p-10">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C14C38]">
                  STEP 0{step}
                </p>

                <h1 className="mt-2 font-[var(--font-heading)] text-3xl text-[#533E23] sm:text-4xl">
                  {step === 1 && "Choose your experience"}
                  {step === 2 && "Choose date & time"}
                  {step === 3 && "Your information"}
                  {step === 4 && "Payment"}
                </h1>

                <p className="mt-2 text-sm leading-6 text-[#8B8778]">
                  {step === 1 && "Select what you would like to book."}
                  {step === 2 &&
                      "Select your preferred therapist, date and available time."}
                  {step === 3 &&
                      "Tell us a little about yourself so we can prepare for your visit."}
                  {step === 4 &&
                      "Choose how you would like to pay for your booking."}
                </p>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                  <div className="space-y-7">
                    <div>
                      <label className={labelClass}>Service type</label>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                          {
                            id: "treatment",
                            title: "Treatment",
                            subtitle: "Individual Ayurvedic treatments",
                            icon: Leaf,
                          },
                          {
                            id: "long-stay",
                            title: "Long-Stay",
                            subtitle: "Ayurveda wellness packages",
                            icon: CalendarDays,
                          },
                          {
                            id: "consultation",
                            title: "Consultation",
                            subtitle: "Personal Ayurvedic consultation",
                            icon: User,
                          },
                        ].map((item) => {
                          const Icon = item.icon;
                          const selected = bookingType === item.id;
                          const hasTreatments = categories.includes(
                              item.id as BookingType,
                          );

                          return (
                              <button
                                  key={item.id}
                                  type="button"
                                  disabled={!hasTreatments}
                                  onClick={() =>
                                      handleTypeChange(item.id as BookingType)
                                  }
                                  className={`rounded-2xl border p-4 text-left transition ${
                                      selected
                                          ? "border-[#2F5D39] bg-[#2F5D39]/5 ring-1 ring-[#2F5D39]"
                                          : "border-[#EAE6DF] bg-white hover:border-[#2F5D39]/50"
                                  } disabled:cursor-not-allowed disabled:opacity-40`}
                              >
                                <Icon
                                    size={20}
                                    className="mb-4 text-[#2F5D39]"
                                />

                                <p className="text-sm font-semibold text-[#533E23]">
                                  {item.title}
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[#A49B8C]">
                                  {item.subtitle}
                                </p>
                              </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Select{" "}
                        {bookingType === "treatment" ? "treatment" : "service"}
                      </label>

                      <select
                          id="service"
                          value={treatmentId}
                          onChange={(event) =>
                              handleTreatmentChange(event.target.value)
                          }
                          className={inputClass}
                      >
                        {visibleTreatments.map((item) => (
                            <option
                                key={item.treatment_id}
                                value={item.treatment_id}
                            >
                              {item.name} —{" "}
                              {formatPrice(item.price, item.currency)}
                            </option>
                        ))}
                      </select>

                      {visibleTreatments.length === 0 && (
                          <p className="mt-3 text-xs text-[#8B8778]">
                            No services are currently available in this category.
                          </p>
                      )}

                      {selectedTreatment?.description && (
                          <p className="mt-3 text-xs leading-5 text-[#8B8778]">
                            {selectedTreatment.description}
                          </p>
                      )}
                    </div>

                    <div>
                      <label className={labelClass}>I am booking as</label>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          {
                            id: "chalet",
                            title: "Chalet Guest",
                            description:
                                "I am staying at a Purana Ayurveda chalet.",
                            icon: MapPin,
                          },
                          {
                            id: "external",
                            title: "External Guest",
                            description:
                                "I am visiting Purana Ayurveda from outside.",
                            icon: Users,
                          },
                        ].map((guest) => {
                          const Icon = guest.icon;
                          const selected = guestType === guest.id;

                          return (
                              <button
                                  type="button"
                                  key={guest.id}
                                  onClick={() =>
                                      setGuestType(
                                          guest.id as "chalet" | "external",
                                      )
                                  }
                                  className={`rounded-2xl border p-4 text-left transition ${
                                      selected
                                          ? "border-[#2F5D39] bg-[#2F5D39]/5"
                                          : "border-[#EAE6DF] hover:border-[#2F5D39]/50"
                                  }`}
                              >
                                <Icon
                                    size={20}
                                    className="mb-3 text-[#2F5D39]"
                                />

                                <p className="text-sm font-semibold text-[#533E23]">
                                  {guest.title}
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[#A49B8C]">
                                  {guest.description}
                                </p>
                              </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                  <div className="space-y-7">
                    <div>
                      <label htmlFor="therapist" className={labelClass}>
                        Therapist
                      </label>

                      <select
                          id="therapist"
                          value={therapistId}
                          onChange={(event) =>
                              handleTherapistChange(event.target.value)
                          }
                          className={inputClass}
                          disabled={!date || loadingSlots}
                      >
                        <option value="any">No preference</option>

                        {availableTherapists.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className={labelClass}>
                        Preferred date
                      </label>

                      <div className="relative">
                        <CalendarDays
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49B8C]"
                        />

                        <input
                            id="date"
                            type="date"
                            min={MIN_BOOKING_DATE}
                            value={date}
                            onChange={(event) =>
                                handleDateChange(event.target.value)
                            }
                            className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Available times</label>

                      {!date && (
                          <p className="rounded-xl bg-[#EFE9C5]/50 p-4 text-sm text-[#8B8778]">
                            Please select a date to view available appointment
                            times.
                          </p>
                      )}

                      {date && loadingSlots && (
                          <p className="rounded-xl bg-[#EFE9C5]/50 p-4 text-sm text-[#8B8778]">
                            Checking therapist availability...
                          </p>
                      )}

                      {date && !loadingSlots && visibleSlots.length === 0 && (
                          <p className="rounded-xl bg-[#EFE9C5]/50 p-4 text-sm text-[#8B8778]">
                            No available appointments for this date. Please try
                            another date or therapist.
                          </p>
                      )}

                      {!loadingSlots && visibleSlots.length > 0 && (
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {visibleSlots.map((slot) => (
                                <button
                                    key={`${slot.therapist_id}-${slot.slot_time}`}
                                    type="button"
                                    onClick={() => setSelectedTime(slot.slot_time)}
                                    className={`min-h-12 rounded-xl border text-sm font-medium transition ${
                                        selectedTime === slot.slot_time
                                            ? "border-[#2F5D39] bg-[#2F5D39] text-white"
                                            : "border-[#EAE6DF] bg-white text-[#533E23] hover:border-[#2F5D39]"
                                    }`}
                                >
                                  {slot.slot_time}
                                </button>
                            ))}
                          </div>
                      )}

                      {selectedSlot && (
                          <p className="mt-4 text-xs text-[#6B705C]">
                            Your appointment will be with{" "}
                            <strong>{selectedSlot.therapist_name}</strong>.
                          </p>
                      )}

                      <p className="mt-4 text-xs leading-5 text-[#A49B8C]">
                        Appointment times are calculated using treatment
                        duration, therapist working hours, existing bookings
                        and blocked periods.
                      </p>
                    </div>
                  </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className={labelClass}>
                          First Name *
                        </label>

                        <input
                            id="firstName"
                            value={details.firstName}
                            onChange={(event) =>
                                updateDetail("firstName", event.target.value)
                            }
                            placeholder="First name"
                            className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className={labelClass}>
                          Last Name *
                        </label>

                        <input
                            id="lastName"
                            value={details.lastName}
                            onChange={(event) =>
                                updateDetail("lastName", event.target.value)
                            }
                            placeholder="Last name"
                            className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>

                      <div className="relative">
                        <Mail
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49B8C]"
                        />

                        <input
                            id="email"
                            type="email"
                            value={details.email}
                            onChange={(event) =>
                                updateDetail("email", event.target.value)
                            }
                            placeholder="you@example.com"
                            className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Mobile Number *
                      </label>

                      <div className="relative">
                        <Phone
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A49B8C]"
                        />

                        <input
                            id="phone"
                            type="tel"
                            value={details.phone}
                            onChange={(event) =>
                                updateDetail("phone", event.target.value)
                            }
                            placeholder="+49 000 000 000"
                            className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="language" className={labelClass}>
                        Preferred Language *
                      </label>

                      <select
                          id="language"
                          value={details.language}
                          onChange={(event) =>
                              updateDetail("language", event.target.value)
                          }
                          className={inputClass}
                      >
                        <option value="">Select language</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="allergies" className={labelClass}>
                        Allergies
                      </label>

                      <textarea
                          id="allergies"
                          rows={3}
                          value={details.allergies}
                          onChange={(event) =>
                              updateDetail("allergies", event.target.value)
                          }
                          placeholder="Please tell us about any known allergies..."
                          className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="medical" className={labelClass}>
                        Medical Considerations
                      </label>

                      <textarea
                          id="medical"
                          rows={3}
                          value={details.medical}
                          onChange={(event) =>
                              updateDetail("medical", event.target.value)
                          }
                          placeholder="Please provide any relevant information..."
                          className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className={labelClass}>
                        Additional Notes
                      </label>

                      <textarea
                          id="notes"
                          rows={3}
                          value={details.notes}
                          onChange={(event) =>
                              updateDetail("notes", event.target.value)
                          }
                          placeholder="Anything else you would like us to know?"
                          className={inputClass}
                      />
                    </div>
                  </div>
              )}

              {/* STEP 4 */}
              {step === 4 && selectedTreatment && (
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-[#EFE9C5]/60 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A49B8C]">
                        Booking summary
                      </p>

                      <div className="mt-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-[var(--font-heading)] text-xl text-[#533E23]">
                            {selectedTreatment.name}
                          </h3>

                          <p className="mt-1 text-sm text-[#8B8778]">
                            {formatDuration(
                                selectedTreatment.duration_minutes,
                            )}
                          </p>
                        </div>

                        <p className="font-[var(--font-heading)] text-2xl text-[#21452B]">
                          {formatPrice(
                              selectedTreatment.price,
                              selectedTreatment.currency,
                          )}
                        </p>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#D8D0A9] pt-4 text-xs text-[#6B705C]">
                        <p className="flex items-center gap-2">
                          <CalendarDays size={15} />
                          {date}
                        </p>

                        <p className="flex items-center gap-2">
                          <Clock3 size={15} />
                          {selectedTime}
                        </p>
                      </div>

                      <p className="mt-3 text-xs text-[#6B705C]">
                        Therapist: {selectedSlot?.therapist_name}
                      </p>
                    </div>

                    <div>
                      <label className={labelClass}>Payment method</label>

                      <div className="space-y-3">
                        {[
                          {
                            id: "card",
                            title: "Card Payment",
                            description: "Pay securely by card",
                            icon: CreditCard,
                          },
                          {
                            id: "paypal",
                            title: "PayPal",
                            description: "Pay using your PayPal account",
                            icon: CreditCard,
                          },
                          {
                            id: "location",
                            title: "Pay at Location",
                            description: "Pay at Purana Ayurveda",
                            icon: MapPin,
                          },
                        ].map((method) => {
                          const Icon = method.icon;

                          return (
                              <button
                                  type="button"
                                  key={method.id}
                                  onClick={() => setPayment(method.id)}
                                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition ${
                                      payment === method.id
                                          ? "border-[#2F5D39] bg-[#2F5D39]/5"
                                          : "border-[#EAE6DF] hover:border-[#2F5D39]/50"
                                  }`}
                              >
                          <span className="flex items-center gap-3">
                            <Icon
                                size={19}
                                className="text-[#2F5D39]"
                            />

                            <span>
                              <span className="block text-sm font-semibold text-[#533E23]">
                                {method.title}
                              </span>

                              <span className="mt-1 block text-xs text-[#A49B8C]">
                                {method.description}
                              </span>
                            </span>
                          </span>

                                <span
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                        payment === method.id
                                            ? "border-[#2F5D39] bg-[#2F5D39]"
                                            : "border-[#D8D0A9]"
                                    }`}
                                >
                            {payment === method.id && (
                                <Check size={12} className="text-white" />
                            )}
                          </span>
                              </button>
                          );
                        })}
                      </div>

                      <p className="mt-3 text-xs leading-5 text-[#A49B8C]">
                        Selecting card or PayPal records your preferred
                        payment method. Payment is not collected online yet.
                      </p>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(event) =>
                              setAcceptedTerms(event.target.checked)
                          }
                          className="mt-1 h-4 w-4 accent-[#2F5D39]"
                      />

                      <span className="text-xs leading-6 text-[#8B8778]">
                    I confirm that the information provided is accurate
                    and I agree to the booking and treatment terms.
                  </span>
                    </label>
                  </div>
              )}

              {/* Error */}
              {error && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-9 flex items-center justify-between gap-3 border-t border-[#EEEAE2] pt-6">
                {step > 1 ? (
                    <button
                        type="button"
                        onClick={() => {
                          setError("");
                          setStep((current) => current - 1);
                        }}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#EAE6DF] px-5 py-3 text-sm font-semibold text-[#533E23] transition hover:bg-[#F8F5E8]"
                    >
                      <ArrowLeft size={17} /> Back
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#EAE6DF] px-5 py-3 text-sm font-semibold text-[#533E23] transition hover:bg-[#F8F5E8]"
                    >
                      Cancel
                    </Link>
                )}

                <button
                    type="button"
                    onClick={handleContinue}
                    disabled={
                        submitting ||
                        (step === 2 && (loadingSlots || !selectedSlot))
                    }
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#C14C38] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C14C38]/15 transition hover:bg-[#A83F30] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                      ? "Submitting..."
                      : step === 4
                          ? "Confirm Booking"
                          : "Continue"}

                  {!submitting &&
                      (step === 4 ? (
                          <Check size={17} />
                      ) : (
                          <ArrowRight size={17} />
                      ))}
                </button>
              </div>

              <p className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-[#A49B8C]">
                <ShieldCheck size={13} />
                Your information is handled with care.
              </p>
            </section>
          </div>
        </div>
      </main>
  );
}
