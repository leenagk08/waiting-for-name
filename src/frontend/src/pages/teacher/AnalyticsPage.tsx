import { useAllStudentAttendanceStats } from "@/hooks/useQueries";
import { Award, BarChart3, TrendingUp, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TeacherAnalyticsPage() {
  const { data: stats = [], isLoading } = useAllStudentAttendanceStats(5000);

  const total = stats.length;
  const above75 = stats.filter((s) => s.percentage >= 75).length;
  const between6075 = stats.filter(
    (s) => s.percentage >= 60 && s.percentage < 75,
  ).length;
  const below60 = stats.filter((s) => s.percentage < 60).length;
  const avgPct = total
    ? Math.round(stats.reduce((s, x) => s + x.percentage, 0) / total)
    : 0;

  const barData = stats.slice(0, 15).map((s, i) => ({
    name: `S${i + 1}`,
    attendance: Math.round(s.percentage),
  }));

  const lineData = stats.map((s, i) => ({
    index: i + 1,
    percentage: Math.round(s.percentage),
    attended: Number(s.attendedPeriods),
    total: Number(s.totalPeriods),
  }));

  const pieData = [
    { name: "≥75% (Good)", value: above75, color: "oklch(0.65 0.15 200)" },
    { name: "60–75% (Avg)", value: between6075, color: "oklch(0.65 0.2 60)" },
    { name: "<60% (Low)", value: below60, color: "oklch(0.55 0.22 25)" },
  ].filter((d) => d.value > 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold font-display">
          Attendance Analytics
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Visual overview of class attendance performance
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Students",
            value: total,
            icon: <Users className="h-5 w-5" />,
            grad: "gradient-primary",
            ocid: "analytics.total_students",
          },
          {
            label: "Class Average",
            value: `${avgPct}%`,
            icon: <TrendingUp className="h-5 w-5" />,
            grad: "gradient-student",
            ocid: "analytics.avg_pct",
          },
          {
            label: "Good Standing (≥75%)",
            value: above75,
            icon: <Award className="h-5 w-5" />,
            grad: "gradient-student",
            ocid: "analytics.good",
          },
          {
            label: "At Risk (<60%)",
            value: below60,
            icon: <BarChart3 className="h-5 w-5" />,
            grad: "gradient-teacher",
            ocid: "analytics.at_risk",
          },
        ].map((c) => (
          <div
            key={c.label}
            data-ocid={c.ocid}
            className="glass-card p-5 flex items-center gap-4"
          >
            <div
              className={`h-11 w-11 rounded-xl ${c.grad} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white">{c.icon}</span>
            </div>
            <div className="min-w-0">
              <p className="text-2xl font-bold font-display">{c.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">
                {c.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isLoading ? (
        <div
          data-ocid="analytics.loading_state"
          className="glass-card p-10 text-center"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary mx-auto" />
        </div>
      ) : stats.length === 0 ? (
        <div
          data-ocid="analytics.empty_state"
          className="glass-card p-10 text-center"
        >
          <BarChart3 className="h-14 w-14 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="font-semibold mb-1">No Data Yet</h3>
          <p className="text-sm text-muted-foreground">
            Data will appear once students start attending sessions.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div data-ocid="analytics.bar_chart" className="glass-card p-5">
            <h2 className="font-semibold mb-5">Per-Student Attendance (%)</h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={barData} barSize={20}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.5 0.02 260 / 0.2)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "oklch(0.55 0.03 260)" }}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 11, fill: "oklch(0.55 0.03 260)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.75rem",
                  }}
                  labelStyle={{ color: "oklch(0.93 0.01 250)" }}
                  itemStyle={{ color: "oklch(0.7 0.2 200)" }}
                />
                <Bar
                  dataKey="attendance"
                  fill="oklch(0.65 0.15 200)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div data-ocid="analytics.pie_chart" className="glass-card p-5">
            <h2 className="font-semibold mb-5">Attendance Distribution</h2>
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.17 0.018 260)",
                      border: "1px solid oklch(0.28 0.03 260)",
                      borderRadius: "0.75rem",
                    }}
                    itemStyle={{ color: "oklch(0.93 0.01 250)" }}
                  />
                  <Legend iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[260px] flex items-center justify-center text-muted-foreground text-sm">
                No distribution data.
              </div>
            )}
          </div>
          <div
            data-ocid="analytics.line_chart"
            className="glass-card p-5 lg:col-span-1"
          >
            <h2 className="font-semibold mb-5">Attendance Trend</h2>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.5 0.02 260 / 0.2)"
                />
                <XAxis
                  dataKey="index"
                  tick={{ fontSize: 11, fill: "oklch(0.55 0.03 260)" }}
                  label={{
                    value: "Student",
                    position: "insideBottom",
                    offset: -2,
                    fontSize: 10,
                  }}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 11, fill: "oklch(0.55 0.03 260)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.75rem",
                  }}
                  labelStyle={{ color: "oklch(0.93 0.01 250)" }}
                  itemStyle={{ color: "oklch(0.7 0.2 200)" }}
                />
                <Line
                  type="monotone"
                  dataKey="percentage"
                  stroke="oklch(0.7 0.2 200)"
                  strokeWidth={2}
                  dot={{ fill: "oklch(0.7 0.2 200)", r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
