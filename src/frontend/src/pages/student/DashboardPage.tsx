import { AttendanceStatus } from "@/backend";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useActiveQrSession,
  useAssignments,
  useMyAttendance,
  useMyAttendanceStats,
  useSubmitAttendance,
} from "@/hooks/useQueries";
import type { AttendanceRecord } from "@/types";
import {
  BookOpen,
  CalendarCheck,
  CheckCircle,
  Clock,
  QrCode,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";

function AttendanceRing({
  percentage,
  loading,
}: { percentage: number; loading: boolean }) {
  const color =
    percentage >= 75
      ? "oklch(0.65 0.15 200)"
      : percentage >= 60
        ? "oklch(0.65 0.2 60)"
        : "oklch(0.55 0.22 25)";

  const data = [{ value: percentage, fill: color }];

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-36 w-36 rounded-full" />
        <Skeleton className="h-4 w-28" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-40 w-40">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              cornerRadius={8}
              background={{ fill: "oklch(var(--muted) / 0.5)" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-display" style={{ color }}>
            {percentage}%
          </span>
          <span className="text-xs text-muted-foreground">attendance</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {percentage >= 75
          ? "✅ Good standing"
          : percentage >= 60
            ? "⚠️ Needs improvement"
            : "🚨 Below minimum"}
      </p>
    </div>
  );
}

function RecentActivityFeed({
  records,
  loading,
}: { records: AttendanceRecord[]; loading: boolean }) {
  const recent = records.slice(0, 5);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-3.5 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        ))}
      </div>
    );
  }

  if (recent.length === 0) {
    return (
      <div
        data-ocid="dashboard.activity_empty_state"
        className="py-8 text-center"
      >
        <Clock className="h-10 w-10 text-muted-foreground/30 mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">No recent activity yet.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {recent.map((rec, i) => {
        const isPresent = rec.status === AttendanceStatus.present;
        const date = new Date(Number(rec.timestamp) / 1_000_000);
        return (
          <li
            key={`${rec.sessionId}-${i}`}
            data-ocid={`dashboard.activity.item.${i + 1}`}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-muted/40 transition-smooth"
          >
            <span
              className={`flex-shrink-0 rounded-full p-1.5 ${isPresent ? "bg-[oklch(0.65_0.15_200/0.15)]" : "bg-destructive/10"}`}
            >
              {isPresent ? (
                <CheckCircle
                  className="h-4 w-4"
                  style={{ color: "oklch(0.65 0.15 200)" }}
                />
              ) : (
                <XCircle className="h-4 w-4 text-destructive" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium font-mono truncate">
                {rec.sessionId}
              </p>
              <p className="text-xs text-muted-foreground">
                {date.toLocaleDateString()} ·{" "}
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <span
              className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                isPresent
                  ? "bg-[oklch(0.65_0.15_200/0.15)] text-[oklch(0.45_0.15_200)] dark:text-[oklch(0.7_0.15_200)]"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {isPresent ? "Present" : "Absent"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function StudentDashboard() {
  const { data: stats, isLoading: statsLoading } = useMyAttendanceStats();
  const { data: attendance = [], isLoading: attendanceLoading } =
    useMyAttendance();
  const { data: assignments = [] } = useAssignments();
  const { data: qrSession } = useActiveQrSession();
  const submitAttendance = useSubmitAttendance();
  const [submitting, setSubmitting] = useState(false);

  const percentage = stats ? Math.round(stats.percentage) : 0;

  async function handleMarkAttendance() {
    if (!qrSession) return;
    setSubmitting(true);
    try {
      const success = await submitAttendance.mutateAsync({
        sessionId: qrSession.sessionId,
        token: qrSession.token,
      });
      if (success) toast.success("Attendance marked successfully!");
      else toast.error("Already marked or session expired.");
    } catch {
      toast.error("Failed to mark attendance.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display text-gradient-student">
          My Dashboard
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your attendance overview and quick actions
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: "Total Periods",
            value: statsLoading ? null : String(stats?.totalPeriods ?? 0),
            icon: <CalendarCheck className="h-5 w-5" />,
            gradient: "gradient-student",
            ocid: "dashboard.total_periods_card",
          },
          {
            label: "Attended",
            value: statsLoading ? null : String(stats?.attendedPeriods ?? 0),
            icon: <TrendingUp className="h-5 w-5" />,
            gradient: "gradient-primary",
            ocid: "dashboard.attended_card",
          },
          {
            label: "Assignments",
            value: String(assignments.length),
            icon: <BookOpen className="h-5 w-5" />,
            gradient: "gradient-teacher",
            ocid: "dashboard.assignments_card",
          },
        ].map((card) => (
          <div
            key={card.label}
            data-ocid={card.ocid}
            className="glass-card p-5 flex items-center gap-4 animate-slide-up"
          >
            <div
              className={`h-11 w-11 rounded-xl ${card.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              <span className="text-white">{card.icon}</span>
            </div>
            <div className="min-w-0">
              {card.value === null ? (
                <Skeleton className="h-7 w-12 mb-1" />
              ) : (
                <p className="text-2xl font-bold font-display">{card.value}</p>
              )}
              <p className="text-xs text-muted-foreground truncate">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Attendance ring + QR section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          data-ocid="dashboard.attendance_pct"
          className="glass-card p-6 flex flex-col items-center gap-4"
        >
          <h2 className="font-semibold self-start text-sm uppercase tracking-wide text-muted-foreground">
            Attendance Rate
          </h2>
          <AttendanceRing percentage={percentage} loading={statsLoading} />
          {!statsLoading && (
            <div className="w-full grid grid-cols-2 gap-3 mt-1">
              <div className="rounded-xl bg-muted/40 px-3 py-2 text-center">
                <p className="text-lg font-bold font-display">
                  {String(stats?.attendedPeriods ?? 0)}
                </p>
                <p className="text-xs text-muted-foreground">Attended</p>
              </div>
              <div className="rounded-xl bg-muted/40 px-3 py-2 text-center">
                <p className="text-lg font-bold font-display">
                  {String(stats?.totalPeriods ?? 0)}
                </p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          )}
        </div>

        <div
          data-ocid="dashboard.qr_section"
          className="glass-card p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            <h2 className="font-semibold">Active QR Session</h2>
          </div>
          {qrSession ? (
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="glass rounded-xl p-4 text-center w-full">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Course
                </p>
                <p className="font-bold text-lg">{qrSession.courseName}</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono truncate">
                  {qrSession.sessionId}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Expires:{" "}
                  {new Date(
                    Number(qrSession.expiresAt) / 1_000_000,
                  ).toLocaleTimeString()}
                </p>
              </div>
              <button
                type="button"
                data-ocid="dashboard.mark_attendance_button"
                onClick={handleMarkAttendance}
                disabled={submitting}
                className="w-full py-3 rounded-xl gradient-student text-white font-semibold transition-smooth hover:opacity-90 disabled:opacity-60 glow-student"
              >
                {submitting ? "Marking…" : "✓ Mark My Attendance"}
              </button>
            </div>
          ) : (
            <div
              data-ocid="dashboard.no_qr_empty_state"
              className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-8"
            >
              <div className="h-16 w-16 rounded-2xl bg-muted/60 flex items-center justify-center">
                <QrCode className="h-8 w-8 text-muted-foreground/40" />
              </div>
              <div>
                <p className="font-medium text-sm">No Active Session</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ask your teacher to start a QR session to mark attendance.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent activity feed */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <h2 className="font-semibold">Recent Attendance</h2>
          <span className="ml-auto text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">
            Last {Math.min(attendance.length, 5)} records
          </span>
        </div>
        <RecentActivityFeed records={attendance} loading={attendanceLoading} />
      </div>

      {/* Recent assignments */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <h2 className="font-semibold">Recent Assignments</h2>
        </div>
        {assignments.length === 0 ? (
          <div
            data-ocid="dashboard.assignments_empty_state"
            className="py-8 text-center text-sm text-muted-foreground"
          >
            No assignments yet.
          </div>
        ) : (
          <div className="space-y-3">
            {assignments.slice(0, 3).map((a, i) => (
              <div
                key={String(a.id)}
                data-ocid={`dashboard.assignment.item.${i + 1}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/60 transition-smooth"
              >
                <div className="h-9 w-9 rounded-lg gradient-teacher flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{a.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Due:{" "}
                    {new Date(
                      Number(a.dueDate) / 1_000_000,
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
