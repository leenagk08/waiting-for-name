import { UserRole } from "@/backend";
import {
  useAllStudentAttendanceStats,
  useListAllProfiles,
} from "@/hooks/useQueries";
import {
  AlertTriangle,
  Award,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";

export default function TeacherDashboard() {
  const { data: profiles = [] } = useListAllProfiles();
  const { data: stats = [], isLoading } = useAllStudentAttendanceStats(5000);
  const students = profiles.filter((p) => p.role === UserRole.student);
  const profileMap = new Map(
    profiles.map((p) => [p.principal.toText(), p.name]),
  );
  const avgPct = stats.length
    ? Math.round(stats.reduce((s, x) => s + x.percentage, 0) / stats.length)
    : 0;
  const above75 = stats.filter((s) => s.percentage >= 75).length;
  const below75 = stats.filter((s) => s.percentage < 75).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display">Teacher Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Real-time overview of your class
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Students",
            value: students.length,
            icon: <Users className="h-5 w-5" />,
            grad: "gradient-student",
            ocid: "teacher_dash.students_card",
          },
          {
            label: "Avg Attendance",
            value: `${avgPct}%`,
            icon: <TrendingUp className="h-5 w-5" />,
            grad: "gradient-primary",
            ocid: "teacher_dash.avg_attendance_card",
          },
          {
            label: "≥75% (Good)",
            value: above75,
            icon: <Award className="h-5 w-5" />,
            grad: "gradient-student",
            ocid: "teacher_dash.above75_card",
          },
          {
            label: "<75% (At Risk)",
            value: below75,
            icon: <AlertTriangle className="h-5 w-5" />,
            grad: "gradient-teacher",
            ocid: "teacher_dash.below75_card",
          },
        ].map((c, idx) => (
          <div
            key={c.label}
            data-ocid={c.ocid}
            className="glass-card p-5 flex items-center gap-4"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div
              className={`h-11 w-11 rounded-xl ${c.grad} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white">{c.icon}</span>
            </div>
            <div className="min-w-0">
              <p className="text-2xl font-bold font-display">{c.value}</p>
              <p className="text-xs text-muted-foreground truncate">
                {c.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-border/30 flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="font-semibold">Student Attendance</h2>
          <span className="ml-auto text-xs text-muted-foreground">
            Auto-refreshes every 5s
          </span>
        </div>
        {isLoading ? (
          <div
            data-ocid="teacher_dash.loading_state"
            className="p-8 text-center"
          >
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary mx-auto" />
          </div>
        ) : stats.length === 0 ? (
          <div
            data-ocid="teacher_dash.empty_state"
            className="p-10 text-center"
          >
            <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              No student attendance data yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-muted/20">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                    #
                  </th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-muted-foreground">
                    Total
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-muted-foreground">
                    Attended
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-muted-foreground">
                    %
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {stats.map((s, i) => {
                  const pct = Math.round(s.percentage);
                  const name =
                    profileMap.get(s.studentId.toText()) ?? `Student ${i + 1}`;
                  const badge =
                    pct >= 75
                      ? {
                          label: "Good",
                          cls: "bg-emerald-500/15 text-emerald-400",
                        }
                      : pct >= 60
                        ? {
                            label: "Average",
                            cls: "bg-amber-500/15 text-amber-400",
                          }
                        : {
                            label: "At Risk",
                            cls: "bg-red-500/15 text-red-400",
                          };
                  return (
                    <tr
                      key={s.studentId.toText()}
                      data-ocid={`teacher_dash.student.item.${i + 1}`}
                      className="hover:bg-muted/30 transition-smooth"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <td className="px-5 py-3 text-muted-foreground">
                        {i + 1}
                      </td>
                      <td className="px-5 py-3 font-medium truncate max-w-[160px]">
                        {name}
                      </td>
                      <td className="px-5 py-3 text-right">
                        {String(s.totalPeriods)}
                      </td>
                      <td className="px-5 py-3 text-right">
                        {String(s.attendedPeriods)}
                      </td>
                      <td className="px-5 py-3 text-right font-semibold">
                        {pct}%
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.cls}`}
                        >
                          {badge.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
