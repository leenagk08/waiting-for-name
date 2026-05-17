import { ExternalBlob } from "@/backend";
import {
  useAssignments,
  useCreateAssignment,
  useDeleteAssignment,
} from "@/hooks/useQueries";
import type { AssignmentInput } from "@/types";
import { BookOpen, Download, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function TeacherAssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();
  const createAssignment = useCreateAssignment();
  const deleteAssignment = useDeleteAssignment();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  async function handleCreate() {
    if (!title.trim() || !dueDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      const due = BigInt(new Date(dueDate).getTime()) * 1_000_000n;
      const fileBlob: ExternalBlob = file
        ? ExternalBlob.fromBytes(new Uint8Array(await file.arrayBuffer()))
        : ExternalBlob.fromURL("");
      const input: AssignmentInput = {
        title: title.trim(),
        description: description.trim(),
        dueDate: due,
        fileKey: fileBlob,
      };
      await createAssignment.mutateAsync(input);
      toast.success("Assignment created!");
      setShowForm(false);
      setTitle("");
      setDescription("");
      setDueDate("");
      setFile(null);
    } catch {
      toast.error("Failed to create assignment.");
    }
  }

  async function handleDelete(id: bigint) {
    try {
      await deleteAssignment.mutateAsync(id);
      toast.success("Assignment deleted.");
    } catch {
      toast.error("Failed to delete.");
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display">Assignments</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Create and manage class assignments
          </p>
        </div>
        <button
          type="button"
          data-ocid="assignments.add_button"
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-xl gradient-teacher text-white font-semibold px-4 py-2.5 text-sm transition-smooth hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> New Assignment
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-4">
          <div
            data-ocid="assignments.dialog"
            className="glass-card w-full max-w-lg p-6 space-y-5 animate-slide-up"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">New Assignment</h2>
              <button
                type="button"
                data-ocid="assignments.close_button"
                onClick={() => setShowForm(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-muted transition-smooth"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title-input"
                  className="block text-sm font-medium mb-1.5"
                >
                  Title
                </label>
                <input
                  id="title-input"
                  type="text"
                  data-ocid="assignments.title_input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Assignment title"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="desc-input"
                  className="block text-sm font-medium mb-1.5"
                >
                  Description
                </label>
                <textarea
                  id="desc-input"
                  data-ocid="assignments.description_textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Instructions for students"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="due-date-input"
                  className="block text-sm font-medium mb-1.5"
                >
                  Due Date
                </label>
                <input
                  id="due-date-input"
                  type="date"
                  data-ocid="assignments.due_date_input"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="file-input"
                  className="block text-sm font-medium mb-1.5"
                >
                  File (optional)
                </label>
                <input
                  id="file-input"
                  type="file"
                  data-ocid="assignments.upload_button"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  className="w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-xs file:font-medium"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                data-ocid="assignments.cancel_button"
                onClick={() => setShowForm(false)}
                className="rounded-xl px-4 py-2 text-sm glass hover:bg-muted transition-smooth"
              >
                Cancel
              </button>
              <button
                type="button"
                data-ocid="assignments.submit_button"
                onClick={handleCreate}
                disabled={createAssignment.isPending}
                className="rounded-xl px-5 py-2 text-sm gradient-teacher text-white font-semibold transition-smooth hover:opacity-90 disabled:opacity-60"
              >
                {createAssignment.isPending ? "Creating…" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div
          data-ocid="assignments.loading_state"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[1, 2].map((n) => (
            <div
              key={n}
              className="glass-card p-5 h-32 animate-pulse bg-muted/20"
            />
          ))}
        </div>
      ) : assignments.length === 0 ? (
        <div
          data-ocid="assignments.empty_state"
          className="glass-card p-12 text-center"
        >
          <BookOpen className="h-14 w-14 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-1">No Assignments</h3>
          <p className="text-muted-foreground text-sm">
            Click “New Assignment” to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assignments.map((a, i) => (
            <div
              key={String(a.id)}
              data-ocid={`assignments.item.${i + 1}`}
              className="glass-card p-5 flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl gradient-teacher flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold truncate">{a.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    Due:{" "}
                    {new Date(
                      Number(a.dueDate) / 1_000_000,
                    ).toLocaleDateString()}
                  </p>
                </div>
                <button
                  type="button"
                  data-ocid={`assignments.delete_button.${i + 1}`}
                  onClick={() => handleDelete(a.id)}
                  disabled={deleteAssignment.isPending}
                  className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-destructive/20 hover:text-destructive transition-smooth text-muted-foreground"
                  aria-label="Delete assignment"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              {a.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {a.description}
                </p>
              )}
              {a.fileKey.getDirectURL() && (
                <a
                  href={a.fileKey.getDirectURL()}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`assignments.download_link.${i + 1}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download File
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
