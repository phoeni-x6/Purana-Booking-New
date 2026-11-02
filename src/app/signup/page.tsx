
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";

import AuthLayout from "@/components/auth/AuthLayout";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    console.log("Signup data:", formData);

    // Connect account registration here later.
  };

  const updateField = (
    field: keyof typeof formData,
    value: string | boolean,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 px-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10";

  const iconInputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[var(--forest-dark)]";

  return (
    <AuthLayout
      eyebrow="Start your journey"
      title="Create your account"
      description="Become part of the Purana Ayurveda community and keep your wellness experiences connected in one place."
      image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
      footer={
        <p className="text-center text-sm text-[var(--text-muted)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[var(--forest)] transition hover:text-[var(--terracotta)]"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First and last name */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              />
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                required
                className={iconInputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              className={iconInputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />

            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+49 000 000 000"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              required
              className={iconInputClass}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Minimum 8 characters"
              value={formData.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
              minLength={8}
              className={`${iconInputClass} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] transition hover:text-[var(--forest)]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div>
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />

            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                updateField("confirmPassword", e.target.value)
              }
              required
              className={`${iconInputClass} pr-12`}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] transition hover:text-[var(--forest)]"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-3 pt-1">
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) => updateField("terms", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--forest)]"
          />

          <span className="text-xs leading-6 text-[var(--text-muted)]">
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {/* Error */}
        {error && (
          <p
            role="alert"
            className="rounded-xl border border-[var(--terracotta)]/30 bg-[var(--terracotta)]/5 px-4 py-3 text-sm text-[var(--terracotta)]"
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--forest-dark)] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--forest-dark)]/10 transition hover:-translate-y-0.5 hover:bg-[var(--forest)] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
        >
          <Check size={18} />
          Create Account
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </form>
    </AuthLayout>
  );
}
