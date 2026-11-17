
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const updateField = (
      field: keyof typeof formData,
      value: string | boolean,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (formData.password.length < 8) {
      setError("Das Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Die Passwörter stimmen nicht überein.");
      return;
    }

    if (!formData.terms) {
      setError("Bitte akzeptieren Sie die Allgemeinen Geschäftsbedingungen und die Datenschutzerklärung.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: signupError } = await supabase.auth.signUp({
        email: formData.email.trim(),
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/account`,
          data: {
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            phone: formData.phone.trim(),
          },
        },
      });


      if (signupError) {
        const message = signupError.message.toLowerCase();

        if (
            message.includes("already registered") ||
            message.includes("already exists")
        ) {
          setError("Für diese E-Mail-Adresse existiert bereits ein Konto. Bitte melden Sie sich stattdessen an.");
        } else {
          setError(signupError.message);
        }

        return;
      }

// Supabase may return an existing account with no identities.
      if (data.user?.identities?.length === 0) {
        setError("Für diese E-Mail-Adresse existiert bereits ein Konto. Bitte melden Sie sich stattdessen an.");
        return;
      }

// Email confirmation enabled.
      if (!data.session) {
        setSuccess(true);
        return;
      }

// Email confirmation disabled.
      router.replace("/");
      router.refresh();


      // Email confirmation disabled: user is signed in immediately.
      router.replace("/account");
      router.refresh();
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
      "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 px-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10";

  const iconInputClass =
      "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10";

  const labelClass =
      "mb-2 block text-sm font-semibold text-[var(--forest-dark)]";

  return (
      <AuthLayout
          eyebrow="Beginnen Sie Ihre Reise"
          title={success ? "Prüfen Sie Ihre E-Mails" : "Konto erstellen"}
          description={
            success
                ? "Wir haben Ihnen einen Bestätigungslink gesendet. Bitte prüfen Sie Ihren Posteingang und bestätigen Sie Ihre E-Mail-Adresse, um Ihr Konto zu aktivieren."
                : "Werden Sie Teil der Purana-Ayurveda-Community und verwalten Sie Ihre Wohlfühlerlebnisse ganz einfach an einem Ort."
          }
          image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
          footer={
            <p className="text-center text-sm text-[var(--text-muted)]">
              Sie haben bereits ein Konto?{" "}
              <Link
                  href="/login"
                  className="font-semibold text-[var(--forest)] transition hover:text-[var(--terracotta)]"
              >
                Anmelden
              </Link>
            </p>
          }
      >
        {success ? (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--forest)]/10">
                <Mail size={28} className="text-[var(--forest)]" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[var(--forest-dark)]">
                  Bestätigungs-E-Mail wurde gesendet
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Wir haben einen Bestätigungslink an{" "}
                  <strong className="text-[var(--forest-dark)]">
                    {formData.email}
                  </strong>
                  {" "}gesendet. Öffnen Sie die E-Mail und klicken Sie auf den Link, um Ihre Registrierung abzuschließen.
                </p>
              </div>

              <Link
                  href="/login"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--forest-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--forest)]"
              >
                Zur Anmeldung
              </Link>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First and last name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    Vorname
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
                        placeholder="Vorname"
                        value={formData.firstName}
                        onChange={(e) =>
                            updateField("firstName", e.target.value)
                        }
                        required
                        className={iconInputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Nachname
                  </label>

                  <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Nachname"
                      value={formData.lastName}
                      onChange={(e) =>
                          updateField("lastName", e.target.value)
                      }
                      required
                      className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  E-Mail-Adresse
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
                      placeholder="sie@beispiel.de"
                      value={formData.email}
                      onChange={(e) =>
                          updateField("email", e.target.value)
                      }
                      required
                      className={iconInputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Telefonnummer
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
                      onChange={(e) =>
                          updateField("phone", e.target.value)
                      }
                      required
                      className={iconInputClass}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  Passwort
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
                      placeholder="Mindestens 8 Zeichen"
                      value={formData.password}
                      onChange={(e) =>
                          updateField("password", e.target.value)
                      }
                      required
                      minLength={8}
                      className={`${iconInputClass} pr-12`}
                  />

                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] transition hover:text-[var(--forest)]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Passwort bestätigen
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
                      placeholder="Passwort erneut eingeben"
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
                            ? "Passwortbestätigung verbergen"
                            : "Passwortbestätigung anzeigen"
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
                    onChange={(e) =>
                        updateField("terms", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--forest)]"
                />

                <span className="text-xs leading-6 text-[var(--text-muted)]">
              Ich akzeptiere die{" "}
                  <Link
                      href="/terms"
                      className="font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
                  >
                Allgemeinen Geschäftsbedingungen
              </Link>{" "}
                  und die{" "}
                  <Link
                      href="/privacy"
                      className="font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
                  >
                Datenschutzerklärung
              </Link>.
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
                  disabled={loading}
                  className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--forest-dark)] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--forest-dark)]/10 transition hover:-translate-y-0.5 hover:bg-[var(--forest)] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Check size={18} />
                {loading ? "Konto wird erstellt..." : "Konto erstellen"}
                {!loading && (
                    <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
                )}
              </button>
            </form>
        )}
      </AuthLayout>
  );
}
