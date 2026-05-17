import { useUserProfile } from "@/hooks/useQueries";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useRouter } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LogIn,
  Moon,
  QrCode,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const FEATURES = [
  {
    icon: QrCode,
    title: "QR Attendance",
    desc: "Anti-proxy QR codes refresh every 10 seconds",
    gradient: "gradient-student",
    glow: "glow-student",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Real-time attendance charts and insights",
    gradient: "gradient-primary",
    glow: "",
  },
  {
    icon: BookOpen,
    title: "Assignments",
    desc: "Teachers upload, students download in one click",
    gradient: "gradient-teacher",
    glow: "glow-teacher",
  },
];

const STATS = [
  { value: "10s", label: "QR Rotation" },
  { value: "2", label: "Roles" },
  { value: "∞", label: "Students" },
];

export default function LoginPage() {
  const { login, loginStatus, isAuthenticated } = useInternetIdentity();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { data: profile } = useUserProfile();
  const isLoggingIn = loginStatus === "logging-in";

  useEffect(() => {
    if (isAuthenticated && profile) {
      const target =
        profile.role === "teacher"
          ? "/teacher/dashboard"
          : "/student/dashboard";
      router.navigate({ to: target });
    }
  }, [isAuthenticated, profile, router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background gradient-mesh flex flex-col">
      {/* Animated background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.18 260 / 0.4) 0%, transparent 70%)",
            animationDuration: "6s",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.15 200 / 0.35) 0%, transparent 70%)",
            animationDuration: "8s",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.2 60 / 0.3) 0%, transparent 70%)",
            animationDuration: "10s",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Header bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <span className="font-display font-bold text-sm text-foreground">
            Smart Attendance
          </span>
        </div>
        <button
          type="button"
          data-ocid="login.theme_toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9 rounded-xl glass flex items-center justify-center transition-smooth hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl animate-slide-up">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left column — hero copy */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass w-fit">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">
                  College Attendance Platform
                </span>
              </div>

              <div>
                <h1 className="text-5xl font-extrabold font-display leading-tight">
                  <span className="text-gradient-primary">Smart</span>
                  <br />
                  <span className="text-foreground">Attendance</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-md">
                  A modern attendance management system for colleges — QR-based,
                  anti-proxy, and analytics-driven.
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-6">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-2xl font-extrabold font-display text-gradient-primary">
                      {value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {FEATURES.map(({ icon: Icon, title, desc, gradient, glow }) => (
                  <div
                    key={title}
                    className={`glass-card p-4 flex items-center gap-4 transition-smooth hover:scale-[1.02] ${glow}`}
                  >
                    <div
                      className={`h-10 w-10 rounded-xl ${gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-foreground">
                        {title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — login card */}
            <div className="flex flex-col gap-6">
              <div className="glass-card p-8 flex flex-col items-center gap-7">
                {/* Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg"
                    style={{
                      boxShadow:
                        "0 0 40px oklch(0.5 0.18 260 / 0.4), 0 8px 24px oklch(0.5 0.18 260 / 0.25)",
                    }}
                  >
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold font-display text-foreground">
                      Welcome back
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sign in with your Internet Identity
                    </p>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="w-full space-y-2.5">
                  {[
                    {
                      icon: ShieldCheck,
                      text: "Secure & private — no passwords",
                    },
                    {
                      icon: Users,
                      text: "Role-based student & teacher access",
                    },
                    { icon: QrCode, text: "Instant QR attendance marking" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="h-7 w-7 rounded-lg glass flex items-center justify-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px"
                  style={{ background: "oklch(var(--border) / 0.4)" }}
                />

                {/* CTA */}
                <div className="w-full space-y-3">
                  <button
                    type="button"
                    data-ocid="login.connect_button"
                    onClick={() => login()}
                    disabled={isLoggingIn}
                    className="w-full flex items-center justify-center gap-3 rounded-xl py-3.5 px-6 gradient-primary text-white font-semibold text-base transition-smooth hover:scale-[1.02] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isLoggingIn ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Connecting…
                      </>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5" />
                        Login with Internet Identity
                      </>
                    )}
                  </button>

                  {isLoggingIn && (
                    <p
                      data-ocid="login.loading_state"
                      className="text-center text-xs text-muted-foreground animate-fade-in"
                    >
                      Opening Internet Identity window…
                    </p>
                  )}
                </div>
              </div>

              {/* Footer note */}
              <p className="text-center text-xs text-muted-foreground">
                New user? Your account is created automatically on first login.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="underline hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
