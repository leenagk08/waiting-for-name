import { Skeleton } from "@/components/ui/skeleton";
import { useAssignments } from "@/hooks/useQueries";
import type { Assignment } from "@/types";
import { BookOpen, Calendar, Download, FileText, User } from "lucide-react";

function AssignmentCard({
  assignment,
  index,
}: { assignment: Assignment; index: number }) {
  const dueDate = new Date(Number(assignment.dueDate) / 1_000_000);
  const uploadedAt = new Date(Number(assignment.uploadedAt) / 1_000_000);
  const isOverdue = dueDate < new Date();

  return (
    <div
      data-ocid={`assignments.item.${index + 1}`}
      className="glass-card p-5 flex flex-col gap-4 transition-smooth hover:scale-[1.02] hover:shadow-lg group"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-xl gradient-teacher flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-smooth">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2">
            {assignment.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-1.5">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                isOverdue
                  ? "bg-destructive/10 text-destructive"
                  : "bg-[oklch(0.65_0.2_60/0.12)] text-[oklch(0.45_0.2_60)] dark:text-[oklch(0.7_0.22_60)]"
              }`}
            >
              <Calendar className="h-2.5 w-2.5" />
              {isOverdue ? "Overdue · " : "Due · "}
              {dueDate.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      {assignment.description && (
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {assignment.description}
        </p>
      )}

      {/* Footer */}
      <div className="mt-auto space-y-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <User className="h-3 w-3" />
          <span>
            Posted{" "}
            {uploadedAt.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        {assignment.fileKey.getDirectURL() && (
          <a
            href={assignment.fileKey.getDirectURL()}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`assignments.download.${index + 1}`}
            className="flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 gradient-student text-white text-sm font-semibold transition-smooth hover:opacity-90 glow-student w-full"
          >
            <Download className="h-4 w-4" />
            Download Assignment
          </a>
        )}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-start gap-3">
        <Skeleton className="h-11 w-11 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-9 w-full rounded-xl" />
    </div>
  );
}

export default function StudentAssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-gradient-student">
            Assignments
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            All assignments posted by your teachers
          </p>
        </div>
        {!isLoading && assignments.length > 0 && (
          <span className="glass rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-1.5 flex-shrink-0">
            <BookOpen className="h-4 w-4" />
            {assignments.length} assignment{assignments.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {isLoading ? (
        <div
          data-ocid="assignments.loading_state"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {[1, 2, 3].map((n) => (
            <SkeletonCard key={n} />
          ))}
        </div>
      ) : assignments.length === 0 ? (
        <div
          data-ocid="assignments.empty_state"
          className="glass-card p-14 text-center"
        >
          <div className="h-20 w-20 rounded-2xl bg-muted/60 flex items-center justify-center mx-auto mb-5">
            <BookOpen className="h-10 w-10 text-muted-foreground/40" />
          </div>
          <h3 className="font-semibold text-lg mb-2">No Assignments Yet</h3>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Your teacher hasn't posted any assignments. Check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {assignments.map((a, i) => (
            <AssignmentCard key={String(a.id)} assignment={a} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
