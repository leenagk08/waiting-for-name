import type { AppRole } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  QrCode,
  X,
} from "lucide-react";

interface SidebarProps {
  role: AppRole;
  collapsed: boolean;
  onClose?: () => void;
}

const STUDENT_NAV = [
  {
    label: "Dashboard",
    path: "/student/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    label: "Attendance",
    path: "/student/attendance",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    label: "Assignments",
    path: "/student/assignments",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const TEACHER_NAV = [
  {
    label: "Dashboard",
    path: "/teacher/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    label: "QR Attendance",
    path: "/teacher/qr",
    icon: <QrCode className="h-5 w-5" />,
  },
  {
    label: "Assignments",
    path: "/teacher/assignments",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Analytics",
    path: "/teacher/analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

export default function Sidebar({ role, collapsed, onClose }: SidebarProps) {
  const navItems = role === "student" ? STUDENT_NAV : TEACHER_NAV;
  const accentClass =
    role === "student" ? "text-gradient-student" : "text-gradient-teacher";
  const iconBgClass =
    role === "student" ? "gradient-student" : "gradient-teacher";
  const glowClass = role === "student" ? "glow-student" : "glow-teacher";

  return (
    <aside
      data-ocid="sidebar_mobile"
      className={[
        "sidebar-glass fixed inset-y-0 left-0 z-40 flex flex-col transition-smooth lg:hidden",
        collapsed ? "-translate-x-full" : "translate-x-0",
        "w-64",
      ].join(" ")}
    >
      <div className="flex h-16 items-center gap-3 px-5 border-b border-border/30">
        <div
          className={`h-8 w-8 rounded-xl ${iconBgClass} flex items-center justify-center ${glowClass} flex-shrink-0`}
        >
          {role === "student" ? (
            <GraduationCap className="h-4 w-4 text-white" />
          ) : (
            <LayoutDashboard className="h-4 w-4 text-white" />
          )}
        </div>
        <span
          className={`font-bold text-lg font-display leading-none ${accentClass}`}
        >
          {role === "student" ? "Student" : "Teacher"}
        </span>
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg hover:bg-muted transition-smooth text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            data-ocid={`sidebar.${item.label.toLowerCase().replace(/ /g, "_")}_link`}
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-smooth text-muted-foreground hover:text-foreground hover:bg-muted/60"
            activeProps={{
              className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-smooth ${
                role === "student"
                  ? "bg-[oklch(0.65_0.15_200/0.12)] text-[oklch(0.65_0.15_200)]"
                  : "bg-[oklch(0.65_0.2_60/0.12)] text-[oklch(0.65_0.2_60)]"
              }`,
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border/30">
        <div className="rounded-xl p-3 glass text-center">
          <p className="text-xs text-muted-foreground">Smart Attendance</p>
          <p className="text-xs font-semibold text-foreground/70">v1.0</p>
        </div>
      </div>
    </aside>
  );
}
