import { c as createLucideIcon, f as useAssignments, j as jsxRuntimeExports, B as BookOpen, F as FileText } from "./index-D1hpymyA.js";
import { S as Skeleton } from "./skeleton-lcrzTPQh.js";
import { D as Download } from "./download-nuxJIWgd.js";
import "./clsx-DgYk2OaC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function AssignmentCard({
  assignment,
  index
}) {
  const dueDate = new Date(Number(assignment.dueDate) / 1e6);
  const uploadedAt = new Date(Number(assignment.uploadedAt) / 1e6);
  const isOverdue = dueDate < /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `assignments.item.${index + 1}`,
      className: "glass-card p-5 flex flex-col gap-4 transition-smooth hover:scale-[1.02] hover:shadow-lg group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl gradient-teacher flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm leading-snug line-clamp-2", children: assignment.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${isOverdue ? "bg-destructive/10 text-destructive" : "bg-[oklch(0.65_0.2_60/0.12)] text-[oklch(0.45_0.2_60)] dark:text-[oklch(0.7_0.22_60)]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-2.5 w-2.5" }),
                  isOverdue ? "Overdue · " : "Due · ",
                  dueDate.toLocaleDateString(void 0, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })
                ]
              }
            ) })
          ] })
        ] }),
        assignment.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 leading-relaxed", children: assignment.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Posted",
              " ",
              uploadedAt.toLocaleDateString(void 0, {
                month: "short",
                day: "numeric"
              })
            ] })
          ] }),
          assignment.fileKey.getDirectURL() && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: assignment.fileKey.getDirectURL(),
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `assignments.download.${index + 1}`,
              className: "flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 gradient-student text-white text-sm font-semibold transition-smooth hover:opacity-90 glow-student w-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                "Download Assignment"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-11 w-11 rounded-xl flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-5/6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full rounded-xl" })
  ] });
}
function StudentAssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-gradient-student", children: "Assignments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "All assignments posted by your teachers" })
      ] }),
      !isLoading && assignments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-1.5 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
        assignments.length,
        " assignment",
        assignments.length !== 1 ? "s" : ""
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "assignments.loading_state",
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, n))
      }
    ) : assignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "assignments.empty_state",
        className: "glass-card p-14 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-2xl bg-muted/60 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-10 w-10 text-muted-foreground/40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-2", children: "No Assignments Yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mx-auto", children: "Your teacher hasn't posted any assignments. Check back later." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: assignments.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AssignmentCard, { assignment: a, index: i }, String(a.id))) })
  ] });
}
export {
  StudentAssignmentsPage as default
};
