import { c as createLucideIcon, u as useInternetIdentity, z, a as useRouter, b as useUserProfile, r as reactExports, j as jsxRuntimeExports, G as GraduationCap, S as Sun, M as Moon, Q as QrCode, C as ChartColumn, B as BookOpen } from "./index-D1hpymyA.js";
import { U as Users } from "./users-D40b2FgT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
const FEATURES = [
  {
    icon: QrCode,
    title: "QR Attendance",
    desc: "Anti-proxy QR codes refresh every 10 seconds",
    gradient: "gradient-student",
    glow: "glow-student"
  },
  {
    icon: ChartColumn,
    title: "Analytics",
    desc: "Real-time attendance charts and insights",
    gradient: "gradient-primary",
    glow: ""
  },
  {
    icon: BookOpen,
    title: "Assignments",
    desc: "Teachers upload, students download in one click",
    gradient: "gradient-teacher",
    glow: "glow-teacher"
  }
];
const STATS = [
  { value: "10s", label: "QR Rotation" },
  { value: "2", label: "Roles" },
  { value: "∞", label: "Students" }
];
function LoginPage() {
  const { login, loginStatus, isAuthenticated } = useInternetIdentity();
  const { theme, setTheme } = z();
  const router = useRouter();
  const { data: profile } = useUserProfile();
  const isLoggingIn = loginStatus === "logging-in";
  reactExports.useEffect(() => {
    if (isAuthenticated && profile) {
      const target = profile.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard";
      router.navigate({ to: target });
    }
  }, [isAuthenticated, profile, router]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden bg-background gradient-mesh flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-pulse",
              style: {
                background: "radial-gradient(circle, oklch(0.5 0.18 260 / 0.4) 0%, transparent 70%)",
                animationDuration: "6s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-pulse",
              style: {
                background: "radial-gradient(circle, oklch(0.65 0.15 200 / 0.35) 0%, transparent 70%)",
                animationDuration: "8s",
                animationDelay: "2s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl animate-pulse",
              style: {
                background: "radial-gradient(circle, oklch(0.65 0.2 60 / 0.3) 0%, transparent 70%)",
                animationDuration: "10s",
                animationDelay: "4s"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground", children: "Smart Attendance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "login.theme_toggle",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          className: "h-9 w-9 rounded-xl glass flex items-center justify-center transition-smooth hover:scale-110",
          "aria-label": "Toggle theme",
          children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 flex flex-1 items-center justify-center px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-5xl animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "College Attendance Platform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-extrabold font-display leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Smart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Attendance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground leading-relaxed max-w-md", children: "A modern attendance management system for colleges — QR-based, anti-proxy, and analytics-driven." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6", children: STATS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-extrabold font-display text-gradient-primary", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1", children: FEATURES.map(({ icon: Icon, title, desc, gradient, glow }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `glass-card p-4 flex items-center gap-4 transition-smooth hover:scale-[1.02] ${glow}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-10 w-10 rounded-xl ${gradient} flex items-center justify-center flex-shrink-0`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-snug", children: desc })
              ] })
            ]
          },
          title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 flex flex-col items-center gap-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg",
                style: {
                  boxShadow: "0 0 40px oklch(0.5 0.18 260 / 0.4), 0 8px 24px oklch(0.5 0.18 260 / 0.25)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-10 w-10 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground", children: "Welcome back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sign in with your Internet Identity" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-2.5", children: [
            {
              icon: ShieldCheck,
              text: "Secure & private — no passwords"
            },
            {
              icon: Users,
              text: "Role-based student & teacher access"
            },
            { icon: QrCode, text: "Instant QR attendance marking" }
          ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg glass flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
              ]
            },
            text
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full h-px",
              style: { background: "oklch(var(--border) / 0.4)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "login.connect_button",
                onClick: () => login(),
                disabled: isLoggingIn,
                className: "w-full flex items-center justify-center gap-3 rounded-xl py-3.5 px-6 gradient-primary text-white font-semibold text-base transition-smooth hover:scale-[1.02] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg",
                children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" }),
                  "Connecting…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-5 w-5" }),
                  "Login with Internet Identity"
                ] })
              }
            ),
            isLoggingIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "login.loading_state",
                className: "text-center text-xs text-muted-foreground animate-fade-in",
                children: "Opening Internet Identity window…"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "New user? Your account is created automatically on first login." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          className: "underline hover:text-foreground transition-colors",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "caffeine.ai"
        }
      )
    ] }) })
  ] });
}
export {
  LoginPage as default
};
