import { c as createLucideIcon, k as useListAllProfiles, l as useAllStudentAttendanceStats, U as UserRole, j as jsxRuntimeExports } from "./index-D1hpymyA.js";
import { U as Users } from "./users-D40b2FgT.js";
import { T as TrendingUp } from "./trending-up-GkZBnvqW.js";
import { A as Award } from "./award-CulcxlNe.js";
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
function TeacherDashboard() {
  const { data: profiles = [] } = useListAllProfiles();
  const { data: stats = [], isLoading } = useAllStudentAttendanceStats(5e3);
  const students = profiles.filter((p) => p.role === UserRole.student);
  const profileMap = new Map(
    profiles.map((p) => [p.principal.toText(), p.name])
  );
  const avgPct = stats.length ? Math.round(stats.reduce((s, x) => s + x.percentage, 0) / stats.length) : 0;
  const above75 = stats.filter((s) => s.percentage >= 75).length;
  const below75 = stats.filter((s) => s.percentage < 75).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display", children: "Teacher Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Real-time overview of your class" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      {
        label: "Total Students",
        value: students.length,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
        grad: "gradient-student",
        ocid: "teacher_dash.students_card"
      },
      {
        label: "Avg Attendance",
        value: `${avgPct}%`,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
        grad: "gradient-primary",
        ocid: "teacher_dash.avg_attendance_card"
      },
      {
        label: "≥75% (Good)",
        value: above75,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
        grad: "gradient-student",
        ocid: "teacher_dash.above75_card"
      },
      {
        label: "<75% (At Risk)",
        value: below75,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
        grad: "gradient-teacher",
        ocid: "teacher_dash.below75_card"
      }
    ].map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": c.ocid,
        className: "glass-card p-5 flex items-center gap-4",
        style: { animationDelay: `${idx * 80}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-11 w-11 rounded-xl ${c.grad} flex items-center justify-center flex-shrink-0`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: c.icon })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-display", children: c.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: c.label })
          ] })
        ]
      },
      c.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border/30 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Student Attendance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: "Auto-refreshes every 5s" })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "teacher_dash.loading_state",
          className: "p-8 text-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary mx-auto" })
        }
      ) : stats.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "teacher_dash.empty_state",
          className: "p-10 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-12 w-12 text-muted-foreground/30 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No student attendance data yet." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/30 bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium text-muted-foreground", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium text-muted-foreground", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-medium text-muted-foreground", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-medium text-muted-foreground", children: "Attended" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-medium text-muted-foreground", children: "%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right font-medium text-muted-foreground", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20", children: stats.map((s, i) => {
          const pct = Math.round(s.percentage);
          const name = profileMap.get(s.studentId.toText()) ?? `Student ${i + 1}`;
          const badge = pct >= 75 ? {
            label: "Good",
            cls: "bg-emerald-500/15 text-emerald-400"
          } : pct >= 60 ? {
            label: "Average",
            cls: "bg-amber-500/15 text-amber-400"
          } : {
            label: "At Risk",
            cls: "bg-red-500/15 text-red-400"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `teacher_dash.student.item.${i + 1}`,
              className: "hover:bg-muted/30 transition-smooth",
              style: { animationDelay: `${i * 40}ms` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 font-medium truncate max-w-[160px]", children: name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: String(s.totalPeriods) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: String(s.attendedPeriods) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3 text-right font-semibold", children: [
                  pct,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.cls}`,
                    children: badge.label
                  }
                ) })
              ]
            },
            s.studentId.toText()
          );
        }) })
      ] }) })
    ] })
  ] });
}
export {
  TeacherDashboard as default
};
