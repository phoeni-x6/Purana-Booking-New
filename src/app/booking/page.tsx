
"use client";

import { useEffect, useState } from "react";
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

type BookingType = "treatment" | "long-stay" | "consultation";

type BookingData = {
  service: string;
  category: string;
  duration: string;
  price: string;
  type: BookingType;
};

const services = {
  treatment: [
    { name: "Abhyanga", duration: "75 minutes", price: "€65" },
    { name: "Ayurvedic Massage", duration: "60 minutes", price: "€45" },
    { name: "Shirodhara", duration: "60 minutes", price: "€70" },
    { name: "Ayurvedic Head Massage", duration: "30 minutes", price: "€35" },
    { name: "Ayurvedic Foot Massage", duration: "30 minutes", price: "€35" },
    { name: "Ayurvedic Face Massage", duration: "30 minutes", price: "€40" },
    { name: "Herbal Steam", duration: "30 minutes", price: "€30" },
    { name: "Ayurvedic Herbal Bath", duration: "45 minutes", price: "€50" },
    { name: "Pinda Sweda", duration: "75 minutes", price: "€80" },
    { name: "Udvartana", duration: "60 minutes", price: "€70" },
  ],
  "long-stay": [
    { name: "Gentle Escape – 3 Days", duration: "3 days / 2 nights", price: "On request" },
    { name: "Extended Escape – 4 Days", duration: "4 days / 3 nights", price: "On request" },
  ],
  consultation: [
    { name: "Online Consultation", duration: "45 minutes", price: "€45" },
    { name: "Personal Ayurveda Consultation", duration: "60 minutes", price: "On request" },
  ],
};

const timeSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const inputClass =
  "w-full rounded-xl border border-[#D8D0A9] bg-white px-4 py-3.5 text-sm text-[#263A2B] outline-none transition placeholder:text-[#A9A18C] focus:border-[#2F5D39] focus:ring-2 focus:ring-[#2F5D39]/10";

const labelClass = "mb-2 block text-sm font-medium text-[#533E23]";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>({
    service: "Abhyanga",
    category: "Individual Ayurvedic treatment",
    duration: "75 minutes",
    price: "€65",
    type: "treatment",
  });

  const [guestType, setGuestType] = useState("external");
  const [therapist, setTherapist] = useState("No preference");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [payment, setPayment] = useState("card");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    allergies: "",
    medical: "",
    notes: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const service = params.get("service");
    const category = params.get("category");
    const duration = params.get("duration");
    const price = params.get("price");
    const type = params.get("type");

    if (service) {
      setBooking((current) => ({
        ...current,
        service,
        category: category || current.category,
        duration: duration || current.duration,
        price: price || current.price,
        type:
          type === "long-stay" || type === "consultation"
            ? type
            : "treatment",
      }));
    }
  }, []);

  const currentServices = services[booking.type];

  const updateServiceType = (type: BookingType) => {
    const firstService = services[type][0];

    setBooking({
      service: firstService.name,
      category:
        type === "treatment"
          ? "Individual Ayurvedic treatment"
          : type === "long-stay"
            ? "Ayurveda wellness packages"
            : "Personal Ayurveda consultation",
      duration: firstService.duration,
      price: firstService.price,
      type,
    });
  };

  const updateService = (name: string) => {
    const selected = currentServices.find((item) => item.name === name);
    if (!selected) return;

    setBooking((current) => ({
      ...current,
      service: selected.name,
      duration: selected.duration,
      price: selected.price,
    }));
  };

  const updateDetail = (field: keyof typeof details, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const canContinue = () => {
    if (step === 2 && (!date || !selectedTime)) {
      alert("Please select your preferred date and time.");
      return false;
    }

    if (
      step === 3 &&
      (!details.firstName ||
        !details.lastName ||
        !details.email ||
        !details.phone ||
        !details.language)
    ) {
      alert("Please complete all required personal information.");
      return false;
    }

    if (step === 4 && !acceptedTerms) {
      alert("Please accept the booking and treatment terms.");
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (!canContinue()) return;

    if (step < 4) {
      setStep((current) => current + 1);
    } else {
      // Connect your booking backend and payment provider here.
      console.log("Booking details:", {
        booking,
        guestType,
        therapist,
        date,
        selectedTime,
        details,
        payment,
      });

      setSubmitted(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EFE9C5] px-5 py-16">
        <div className="w-full max-w-xl rounded-[28px] bg-[#F8F5E8] p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2F5D39] text-white">
            <Check size={30} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#C14C38]">
            Booking request
          </p>

          <h1 className="mt-3 font-[var(--font-heading)] text-3xl text-[#21452B] sm:text-4xl">
            Thank you, {details.firstName}!
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#6B705C]">
            Your booking information has been collected. The booking system
            still needs to be connected before a real reservation or payment
            can be confirmed.
          </p>

          <div className="my-7 rounded-2xl bg-[#EFE9C5] p-5 text-left">
            <p className="font-semibold text-[#21452B]">{booking.service}</p>
            <p className="mt-2 text-sm text-[#6B705C]">
              {date} · {selectedTime}
            </p>
            <p className="mt-1 text-sm text-[#6B705C]">
              {booking.duration} · {booking.price}
            </p>
          </div>

          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#21452B] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2F5D39]"
          >
            Return to homepage
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFE9C5] px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-[1010px]">
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
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
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
              {booking.service}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <Clock3 size={16} /> {booking.duration}
              </p>
              <p className="flex items-center gap-3">
                <span className="text-lg">€</span> From {booking.price}
              </p>
              {date && (
                <p className="flex items-center gap-3">
                  <CalendarDays size={16} /> {date}
                </p>
              )}
              {selectedTime && (
                <p className="flex items-center gap-3">
                  <Clock3 size={16} /> {selectedTime}
                </p>
              )}
            </div>

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
                {step === 4 && "Choose how you would like to pay for your booking."}
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
                      const selected = booking.type === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            updateServiceType(item.id as BookingType)
                          }
                          className={`rounded-2xl border p-4 text-left transition ${
                            selected
                              ? "border-[#2F5D39] bg-[#2F5D39]/5 ring-1 ring-[#2F5D39]"
                              : "border-[#EAE6DF] bg-white hover:border-[#2F5D39]/50"
                          }`}
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
                    Select {booking.type === "treatment" ? "treatment" : "service"}
                  </label>
                  <select
                    id="service"
                    value={booking.service}
                    onChange={(event) => updateService(event.target.value)}
                    className={inputClass}
                  >
                    {currentServices.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
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
                          onClick={() => setGuestType(guest.id)}
                          className={`rounded-2xl border p-4 text-left transition ${
                            selected
                              ? "border-[#2F5D39] bg-[#2F5D39]/5"
                              : "border-[#EAE6DF] hover:border-[#2F5D39]/50"
                          }`}
                        >
                          <Icon size={20} className="mb-3 text-[#2F5D39]" />
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
                    value={therapist}
                    onChange={(event) => setTherapist(event.target.value)}
                    className={inputClass}
                  >
                    <option>No preference</option>
                    <option>Lakshani</option>
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
                      min={today}
                      value={date}
                      onChange={(event) => {
                        setDate(event.target.value);
                        setSelectedTime("");
                      }}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Available times</label>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`min-h-12 rounded-xl border text-sm font-medium transition ${
                          selectedTime === time
                            ? "border-[#2F5D39] bg-[#2F5D39] text-white"
                            : "border-[#EAE6DF] bg-white text-[#533E23] hover:border-[#2F5D39]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-5 text-[#A49B8C]">
                    These are example time slots. Connect your booking
                    availability system to show actual appointments based on
                    opening hours, therapist availability and treatment
                    duration.
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
                      required
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
                      required
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
                      required
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
                      required
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
            {step === 4 && (
              <div className="space-y-6">
                <div className="rounded-2xl bg-[#EFE9C5]/60 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A49B8C]">
                    Booking summary
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-heading)] text-xl text-[#533E23]">
                        {booking.service}
                      </h3>
                      <p className="mt-1 text-sm text-[#8B8778]">
                        {booking.duration}
                      </p>
                    </div>

                    <p className="font-[var(--font-heading)] text-2xl text-[#21452B]">
                      {booking.price}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#D8D0A9] pt-4 text-xs text-[#6B705C]">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={15} />
                      {date || "Selected date"}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock3 size={15} />
                      {selectedTime || "Selected time"}
                    </p>
                  </div>
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
                            <Icon size={19} className="text-[#2F5D39]" />
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
                    I confirm that the information provided is accurate and I
                    agree to the booking and treatment terms.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-9 flex items-center justify-between gap-3 border-t border-[#EEEAE2] pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#EAE6DF] px-5 py-3 text-sm font-semibold text-[#533E23] transition hover:bg-[#F8F5E8]"
                >
                  <ArrowLeft size={17} /> Back
                </button>
              ) : (
                <a
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#EAE6DF] px-5 py-3 text-sm font-semibold text-[#533E23] transition hover:bg-[#F8F5E8]"
                >
                  Cancel
                </a>
              )}

              <button
                type="button"
                onClick={handleContinue}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#C14C38] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C14C38]/15 transition hover:bg-[#A83F30]"
              >
                {step === 4 ? "Confirm Booking" : "Continue"}
                {step === 4 ? <Check size={17} /> : <ArrowRight size={17} />}
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
