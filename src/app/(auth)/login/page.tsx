
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Mail,
} from "lucide-react";

import AuthLayout from "@/components/auth/AuthLayout";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error: loginError } =
          await supabase.auth.signInWithPassword({
            email: formData.email.trim(),
            password: formData.password,
          });

      if (loginError) {
        const message = loginError.message.toLowerCase();

        if (message.includes("email not confirmed")) {
          setError(
              "Please verify your email address before signing in. Check your inbox for the verification link."
          );
        } else if (
            message.includes("invalid login credentials")
        ) {
          setError("Incorrect email or password. Please try again.");
        } else {
          setError(loginError.message);
        }

        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <AuthLayout
          eyebrow="Welcome back"
          title="Sign in to your account"
          description="Continue your wellness journey with Purana Ayurveda. Your personal wellness space is waiting for you."
          image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
          footer={
            <p className="text-center text-sm text-[var(--text-muted)]">
              Don't have an account?{" "}
              <Link
                  href="/signup"
                  className="font-semibold text-[var(--forest)] transition hover:text-[var(--terracotta)]"
              >
                Create an account
              </Link>
            </p>
          }
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[var(--forest-dark)]"
            >
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
                  onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                  }
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label
                  htmlFor="password"
                  className="text-sm font-semibold text-[var(--forest-dark)]"
              >
                Password
              </label>

              <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[var(--forest)] hover:text-[var(--terracotta)]"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              />

              <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                  }
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-12 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
              />

              <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] transition hover:text-[var(--forest)]"
              >
                {showPassword ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex cursor-pointer items-center gap-3">
            <input
                type="checkbox"
                checked={formData.remember}
                onChange={(e) =>
                    setFormData({
                      ...formData,
                      remember: e.target.checked,
                    })
                }
                className="h-4 w-4 accent-[var(--forest)]"
            />

            <span className="text-sm text-[var(--text-muted)]">
            Remember me
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
            <LogIn size={18} />
            {loading ? "Signing in..." : "Sign in"}

            {!loading && (
                <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            )}
          </button>
        </form>

        <div className="mt-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--border)]" />

          <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Purana Ayurveda
        </span>

          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </AuthLayout>
  );
}
