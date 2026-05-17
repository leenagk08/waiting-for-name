import { AttendanceStatus } from "@/backend";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMyAttendance, useMyAttendanceStats } from "@/hooks/useQueries";
import type { AttendanceRecord } from "@/types";
import { CalendarCheck, Filter, Search, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

type StatusFilter = "all" | "present" | "absent";

function RecordRow({ rec, index }: { rec: AttendanceRecord; index: number }) {
  const isPresent = rec.status === AttendanceStatus.present;
  const date = new Date(Number(rec.timestamp) / 1_000_000);
  return (
    <div
      data-ocid={`attendance.record.item.${index + 1}`}
      className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-smooth border-b border-border/20 last:border-0"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium font-mono truncate">
          {rec.sessionId}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {date.toLocaleDateString(undefined, {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          {" · "}
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
      <span
        className={`ml-4 flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
          isPresent
            ? "bg-[oklch(0.65_0.15_200/0.12)] text-[oklch(0.45_0.15_200)] dark:text-[oklch(0.7_0.15_200)]"
            : "bg-destructive/10 text-destructive"
        }`}
      >
        {isPresent ? "● Present" : "● Absent"}
      </span>
    </div>
  );
}

function SkeletonRows() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className="flex items-center justify-between px-5 py-3.5 border-b border-border/20 last:border-0"
        >
          <div className="space-y-1.5 flex-1">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </>
  );
}

export default function StudentAttendancePage() {
  const { data: records = [], isLoading } = useMyAttendance();
  const { data: stats } = useMyAttendanceStats();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const percentage = stats ? Math.round(stats.percentage) : 0;
  const missed = stats
    ? Number(stats.totalPeriods) - Number(stats.attendedPeriods)
    : 0;

  const presentCount = records.filter(
    (r) => r.status === AttendanceStatus.present,
  ).length;
  const absentCount = records.filter(
    (r) => r.status === AttendanceStatus.absent,
  ).length;

  const filtered = useMemo(() => {
    return records.filter((rec) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "present" &&
          rec.status === AttendanceStatus.present) ||
        (statusFilter === "absent" && rec.status === AttendanceStatus.absent);
      const matchesSearch =
        search === "" ||
        rec.sessionId.toLowerCase().includes(search.toLowerCase()) ||
        new Date(Number(rec.timestamp) / 1_000_000)
          .toLocaleDateString()
          .includes(search);
      return matchesStatus && matchesSearch;
    });
  }, [records, search, statusFilter]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display text-gradient-student">
          My Attendance
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Complete attendance history and analytics
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            label: "Total Periods",
            value: String(stats?.totalPeriods ?? 0),
            gradient: "gradient-primary",
            icon: <CalendarCheck className="h-4 w-4 text-white" />,
          },
          {
            label: "Attended",
            value: String(presentCount),
            gradient: "gradient-student",
            icon: <TrendingUp className="h-4 w-4 text-white" />,
          },
          {
            label: "Missed",
            value: String(missed),
            gradient: "gradient-teacher",
            icon: <TrendingUp className="h-4 w-4 text-white" />,
          },
          {
            label: "Percentage",
            value: `${percentage}%`,
            gradient:
              percentage >= 75 ? "gradient-student" : "gradient-teacher",
            icon: <TrendingUp className="h-4 w-4 text-white" />,
          },
        ].map((c, i) => (
          <div
            key={c.label}
            data-ocid={`attendance.stat.item.${i + 1}`}
            className="glass-card p-4 flex flex-col gap-2 animate-slide-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div
              className={`h-8 w-8 rounded-lg ${c.gradient} flex items-center justify-center`}
            >
              {c.icon}
            </div>
            <p className="text-xl font-bold font-display">{c.value}</p>
            <p className="text-xs text-muted-foreground">{c.label}</p>
          </div>
        ))}
      </div>

      {/* Attendance progress bar */}
      <div className="glass-card p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Overall Attendance</span>
          <span
            className="text-sm font-bold"
            style={{
              color:
                percentage >= 75
                  ? "oklch(0.65 0.15 200)"
                  : percentage >= 60
                    ? "oklch(0.65 0.2 60)"
                    : "oklch(0.55 0.22 25)",
            }}
          >
            {percentage}%
          </span>
        </div>
        <div className="h-3 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${percentage}%`,
              background:
                percentage >= 75
                  ? "linear-gradient(90deg, oklch(0.65 0.15 200), oklch(0.7 0.18 195))"
                  : percentage >= 60
                    ? "linear-gradient(90deg, oklch(0.65 0.2 60), oklch(0.7 0.22 55))"
                    : "linear-gradient(90deg, oklch(0.55 0.22 25), oklch(0.65 0.25 16))",
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{presentCount} present</span>
          <span className="text-destructive">{absentCount} absent</span>
        </div>
        {percentage < 75 && records.length > 0 && (
          <p className="text-xs mt-2 text-destructive/80">
            ⚠ Minimum 75% required — you need{" "}
            {Math.max(
              0,
              Math.ceil(
                (0.75 * Number(stats?.totalPeriods ?? 0) - presentCount) / 0.25,
              ),
            )}{" "}
            more attendances.
          </p>
        )}
      </div>

      {/* Filter + table */}
      <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-border/30 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-5 w-5" />
              <h2 className="font-semibold">Attendance Records</h2>
              <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">
                {filtered.length}
              </span>
            </div>
            <div className="flex flex-1 sm:justify-end items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56 sm:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  data-ocid="attendance.search_input"
                  placeholder="Search session or date…"
                  className="pl-9 h-9 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Status filter tabs */}
          <div className="flex gap-2">
            {(["all", "present", "absent"] as StatusFilter[]).map((f) => (
              <button
                key={f}
                type="button"
                data-ocid={`attendance.filter.${f}`}
                onClick={() => setStatusFilter(f)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-smooth ${
                  statusFilter === f
                    ? f === "present"
                      ? "gradient-student text-white shadow-sm"
                      : f === "absent"
                        ? "bg-destructive text-destructive-foreground shadow-sm"
                        : "gradient-primary text-white shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted"
                }`}
              >
                <Filter className="h-3 w-3" />
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f !== "all" && (
                  <span className="rounded-full bg-white/20 px-1.5">
                    {f === "present" ? presentCount : absentCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div data-ocid="attendance.loading_state">
            <SkeletonRows />
          </div>
        ) : filtered.length === 0 ? (
          <div data-ocid="attendance.empty_state" className="p-12 text-center">
            <CalendarCheck className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-medium text-sm">
              {records.length === 0
                ? "No attendance records yet"
                : "No records match your filter"}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              {records.length === 0
                ? "Attendance records will appear here after a QR session."
                : "Try adjusting your search or filter."}
            </p>
          </div>
        ) : (
          <div>
            {filtered.map((rec, i) => (
              <RecordRow key={`${rec.sessionId}-${i}`} rec={rec} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
