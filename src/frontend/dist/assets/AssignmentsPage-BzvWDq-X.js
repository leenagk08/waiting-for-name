import { c as createLucideIcon, f as useAssignments, p as useCreateAssignment, q as useDeleteAssignment, r as reactExports, j as jsxRuntimeExports, X, B as BookOpen, E as ExternalBlob } from "./index-D1hpymyA.js";
import { u as ue } from "./index-DB64I-y1.js";
import { D as Download } from "./download-nuxJIWgd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function TeacherAssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();
  const createAssignment = useCreateAssignment();
  const deleteAssignment = useDeleteAssignment();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [dueDate, setDueDate] = reactExports.useState("");
  const [file, setFile] = reactExports.useState(null);
  async function handleCreate() {
    if (!title.trim() || !dueDate) {
      ue.error("Please fill in all required fields.");
      return;
    }
    try {
      const due = BigInt(new Date(dueDate).getTime()) * 1000000n;
      const fileBlob = file ? ExternalBlob.fromBytes(new Uint8Array(await file.arrayBuffer())) : ExternalBlob.fromURL("");
      const input = {
        title: title.trim(),
        description: description.trim(),
        dueDate: due,
        fileKey: fileBlob
      };
      await createAssignment.mutateAsync(input);
      ue.success("Assignment created!");
      setShowForm(false);
      setTitle("");
      setDescription("");
      setDueDate("");
      setFile(null);
    } catch {
      ue.error("Failed to create assignment.");
    }
  }
  async function handleDelete(id) {
    try {
      await deleteAssignment.mutateAsync(id);
      ue.success("Assignment deleted.");
    } catch {
      ue.error("Failed to delete.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display", children: "Assignments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Create and manage class assignments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "assignments.add_button",
          onClick: () => setShowForm(true),
          className: "flex items-center gap-2 rounded-xl gradient-teacher text-white font-semibold px-4 py-2.5 text-sm transition-smooth hover:opacity-90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " New Assignment"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "assignments.dialog",
        className: "glass-card w-full max-w-lg p-6 space-y-5 animate-slide-up",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-lg", children: "New Assignment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "assignments.close_button",
                onClick: () => setShowForm(false),
                className: "h-8 w-8 flex items-center justify-center rounded-lg hover:bg-muted transition-smooth",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "title-input",
                  className: "block text-sm font-medium mb-1.5",
                  children: "Title"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "title-input",
                  type: "text",
                  "data-ocid": "assignments.title_input",
                  value: title,
                  onChange: (e) => setTitle(e.target.value),
                  placeholder: "Assignment title",
                  className: "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "desc-input",
                  className: "block text-sm font-medium mb-1.5",
                  children: "Description"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "desc-input",
                  "data-ocid": "assignments.description_textarea",
                  value: description,
                  onChange: (e) => setDescription(e.target.value),
                  rows: 3,
                  placeholder: "Instructions for students",
                  className: "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "due-date-input",
                  className: "block text-sm font-medium mb-1.5",
                  children: "Due Date"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "due-date-input",
                  type: "date",
                  "data-ocid": "assignments.due_date_input",
                  value: dueDate,
                  onChange: (e) => setDueDate(e.target.value),
                  className: "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "file-input",
                  className: "block text-sm font-medium mb-1.5",
                  children: "File (optional)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "file-input",
                  type: "file",
                  "data-ocid": "assignments.upload_button",
                  onChange: (e) => {
                    var _a;
                    return setFile(((_a = e.target.files) == null ? void 0 : _a[0]) ?? null);
                  },
                  className: "w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-xs file:font-medium"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "assignments.cancel_button",
                onClick: () => setShowForm(false),
                className: "rounded-xl px-4 py-2 text-sm glass hover:bg-muted transition-smooth",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "assignments.submit_button",
                onClick: handleCreate,
                disabled: createAssignment.isPending,
                className: "rounded-xl px-5 py-2 text-sm gradient-teacher text-white font-semibold transition-smooth hover:opacity-90 disabled:opacity-60",
                children: createAssignment.isPending ? "Creating…" : "Create"
              }
            )
          ] })
        ]
      }
    ) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "assignments.loading_state",
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [1, 2].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "glass-card p-5 h-32 animate-pulse bg-muted/20"
          },
          n
        ))
      }
    ) : assignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "assignments.empty_state",
        className: "glass-card p-12 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-14 w-14 text-muted-foreground/30 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-1", children: "No Assignments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Click “New Assignment” to get started." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: assignments.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `assignments.item.${i + 1}`,
        className: "glass-card p-5 flex flex-col gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl gradient-teacher flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold truncate", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Due:",
                " ",
                new Date(
                  Number(a.dueDate) / 1e6
                ).toLocaleDateString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `assignments.delete_button.${i + 1}`,
                onClick: () => handleDelete(a.id),
                disabled: deleteAssignment.isPending,
                className: "flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-destructive/20 hover:text-destructive transition-smooth text-muted-foreground",
                "aria-label": "Delete assignment",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] }),
          a.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: a.description }),
          a.fileKey.getDirectURL() && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: a.fileKey.getDirectURL(),
              download: true,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `assignments.download_link.${i + 1}`,
              className: "inline-flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
                "Download File"
              ]
            }
          )
        ]
      },
      String(a.id)
    )) })
  ] });
}
export {
  TeacherAssignmentsPage as default
};
