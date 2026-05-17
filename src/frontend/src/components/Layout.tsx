import { useUserProfile } from "@/hooks/useQueries";
import type { AppRole } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, Outlet } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  QrCode,
  X,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  userRole: AppRole;
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

export default function Layout({ userRole: role }: LayoutProps) {
  const { clear } = useInternetIdentity();
  const { data: profile } = useUserProfile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = role === "student" ? STUDENT_NAV : TEACHER_NAV;
  const accentClass =
    role === "student" ? "text-gradient-student" : "text-gradient-teacher";
  const avatarBg = role === "student" ? "gradient-student" : "gradient-teacher";

  const displayName = profile?.name ?? "User";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div className="flex h-screen overflow-hidden bg-background gradient-mesh">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <Sidebar
        role={role}
        collapsed={!sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Desktop sidebar */}
      <aside
        data-ocid="sidebar_desktop"
        className="sidebar-glass fixed inset-y-0 left-0 z-40 hidden lg:flex lg:flex-col w-64"
      >
        <div className="flex h-16 items-center gap-3 px-5 border-b border-border/30">
          <div
            className={`h-8 w-8 rounded-xl ${avatarBg} flex items-center justify-center flex-shrink-0`}
          >
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <span
            className={`font-bold text-lg font-display leading-none ${accentClass}`}
          >
            {role === "student" ? "Student" : "Teacher"}
          </span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-ocid={`sidebar.desktop.${item.label.toLowerCase().replace(/ /g, "_")}_link`}
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

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden lg:pl-64">
        {/* Topbar */}
        <header
          data-ocid="topbar"
          className="flex h-16 flex-shrink-0 items-center gap-4 px-4 lg:px-6 border-b border-border/40 bg-card/60 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Open sidebar"
            data-ocid="sidebar_toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-xl glass transition-smooth hover:bg-muted lg:hidden"
          >
            {sidebarOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          <span className="hidden lg:block text-lg font-bold font-display text-gradient-primary">
            Smart Attendance
          </span>

          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />

            <div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5">
              <div
                className={`h-7 w-7 rounded-lg ${avatarBg} flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white text-xs font-bold">{initials}</span>
              </div>
              <span className="hidden sm:block text-sm font-medium max-w-[120px] truncate">
                {displayName}
              </span>
            </div>

            <button
              type="button"
              data-ocid="logout_button"
              aria-label="Logout"
              onClick={() => clear()}
              className="flex h-9 w-9 items-center justify-center rounded-xl glass transition-smooth hover:scale-110 hover:bg-destructive/20 hover:text-destructive text-muted-foreground"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main
          data-ocid="main_content"
          className="flex-1 overflow-y-auto p-4 lg:p-6 animate-fade-in"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
