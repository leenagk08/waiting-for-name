import { c as createLucideIcon, j as jsxRuntimeExports, e as useMyAttendance, d as useMyAttendanceStats, r as reactExports, A as AttendanceStatus, i as CalendarCheck } from "./index-D1hpymyA.js";
import { c as cn, S as Skeleton } from "./skeleton-lcrzTPQh.js";
import { T as TrendingUp } from "./trending-up-GkZBnvqW.js";
import "./clsx-DgYk2OaC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function RecordRow({ rec, index }) {
  const isPresent = rec.status === AttendanceStatus.present;
  const date = new Date(Number(rec.timestamp) / 1e6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `attendance.record.item.${index + 1}`,
      className: "flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-smooth border-b border-border/20 last:border-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium font-mono truncate", children: rec.sessionId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            date.toLocaleDateString(void 0, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric"
            }),
            " · ",
            date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `ml-4 flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${isPresent ? "bg-[oklch(0.65_0.15_200/0.12)] text-[oklch(0.45_0.15_200)] dark:text-[oklch(0.7_0.15_200)]" : "bg-destructive/10 text-destructive"}`,
            children: isPresent ? "● Present" : "● Absent"
          }
        )
      ]
    }
  );
}
function SkeletonRows() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center justify-between px-5 py-3.5 border-b border-border/20 last:border-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-16 rounded-full" })
      ]
    },
    n
  )) });
}
function StudentAttendancePage() {
  const { data: records = [], isLoading } = useMyAttendance();
  const { data: stats } = useMyAttendanceStats();
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const percentage = stats ? Math.round(stats.percentage) : 0;
  const missed = stats ? Number(stats.totalPeriods) - Number(stats.attendedPeriods) : 0;
  const presentCount = records.filter(
    (r) => r.status === AttendanceStatus.present
  ).length;
  const absentCount = records.filter(
    (r) => r.status === AttendanceStatus.absent
  ).length;
  const filtered = reactExports.useMemo(() => {
    return records.filter((rec) => {
      const matchesStatus = statusFilter === "all" || statusFilter === "present" && rec.status === AttendanceStatus.present || statusFilter === "absent" && rec.status === AttendanceStatus.absent;
      const matchesSearch = search === "" || rec.sessionId.toLowerCase().includes(search.toLowerCase()) || new Date(Number(rec.timestamp) / 1e6).toLocaleDateString().includes(search);
      return matchesStatus && matchesSearch;
    });
  }, [records, search, statusFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-gradient-student", children: "My Attendance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Complete attendance history and analytics" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
      {
        label: "Total Periods",
        value: String((stats == null ? void 0 : stats.totalPeriods) ?? 0),
        gradient: "gradient-primary",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4 text-white" })
      },
      {
        label: "Attended",
        value: String(presentCount),
        gradient: "gradient-student",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-white" })
      },
      {
        label: "Missed",
        value: String(missed),
        gradient: "gradient-teacher",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-white" })
      },
      {
        label: "Percentage",
        value: `${percentage}%`,
        gradient: percentage >= 75 ? "gradient-student" : "gradient-teacher",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-white" })
      }
    ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `attendance.stat.item.${i + 1}`,
        className: "glass-card p-4 flex flex-col gap-2 animate-slide-up",
        style: { animationDelay: `${i * 0.08}s` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-8 w-8 rounded-lg ${c.gradient} flex items-center justify-center`,
              children: c.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold font-display", children: c.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.label })
        ]
      },
      c.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Overall Attendance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-sm font-bold",
            style: {
              color: percentage >= 75 ? "oklch(0.65 0.15 200)" : percentage >= 60 ? "oklch(0.65 0.2 60)" : "oklch(0.55 0.22 25)"
            },
            children: [
              percentage,
              "%"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full transition-all duration-700",
          style: {
            width: `${percentage}%`,
            background: percentage >= 75 ? "linear-gradient(90deg, oklch(0.65 0.15 200), oklch(0.7 0.18 195))" : percentage >= 60 ? "linear-gradient(90deg, oklch(0.65 0.2 60), oklch(0.7 0.22 55))" : "linear-gradient(90deg, oklch(0.55 0.22 25), oklch(0.65 0.25 16))"
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          presentCount,
          " present"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive", children: [
          absentCount,
          " absent"
        ] })
      ] }),
      percentage < 75 && records.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-2 text-destructive/80", children: [
        "⚠ Minimum 75% required — you need",
        " ",
        Math.max(
          0,
          Math.ceil(
            (0.75 * Number((stats == null ? void 0 : stats.totalPeriods) ?? 0) - presentCount) / 0.25
          )
        ),
        " ",
        "more attendances."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border/30 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Attendance Records" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5", children: filtered.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 sm:justify-end items-center gap-2 w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:w-56 sm:flex-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "attendance.search_input",
                placeholder: "Search session or date…",
                className: "pl-9 h-9 text-sm",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "present", "absent"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `attendance.filter.${f}`,
            onClick: () => setStatusFilter(f),
            className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-smooth ${statusFilter === f ? f === "present" ? "gradient-student text-white shadow-sm" : f === "absent" ? "bg-destructive text-destructive-foreground shadow-sm" : "gradient-primary text-white shadow-sm" : "bg-muted/60 text-muted-foreground hover:bg-muted"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-3 w-3" }),
              f.charAt(0).toUpperCase() + f.slice(1),
              f !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/20 px-1.5", children: f === "present" ? presentCount : absentCount })
            ]
          },
          f
        )) })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "attendance.loading_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRows, {}) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "attendance.empty_state", className: "p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-12 w-12 text-muted-foreground/30 mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: records.length === 0 ? "No attendance records yet" : "No records match your filter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1", children: records.length === 0 ? "Attendance records will appear here after a QR session." : "Try adjusting your search or filter." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: filtered.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecordRow, { rec, index: i }, `${rec.sessionId}-${i}`)) })
    ] })
  ] });
}
export {
  StudentAttendancePage as default
};
