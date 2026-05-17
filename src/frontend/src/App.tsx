import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("@/pages/LoginPage"));
const StudentDashboard = lazy(() => import("@/pages/student/DashboardPage"));
const StudentAttendance = lazy(() => import("@/pages/student/AttendancePage"));
const StudentAssignments = lazy(
  () => import("@/pages/student/AssignmentsPage"),
);
const TeacherDashboard = lazy(() => import("@/pages/teacher/DashboardPage"));
const TeacherQr = lazy(() => import("@/pages/teacher/QrPage"));
const TeacherAssignments = lazy(
  () => import("@/pages/teacher/AssignmentsPage"),
);
const TeacherAnalytics = lazy(() => import("@/pages/teacher/AnalyticsPage"));

const PageLoader = () => (
  <div className="flex h-full min-h-[60vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary" />
  </div>
);

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/login" });
  },
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  ),
});

const studentLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/student",
  component: () => (
    <ProtectedRoute requiredRole="student">
      <Layout userRole="student" />
    </ProtectedRoute>
  ),
});

const studentDashboardRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/dashboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StudentDashboard />
    </Suspense>
  ),
});

const studentAttendanceRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/attendance",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StudentAttendance />
    </Suspense>
  ),
});

const studentAssignmentsRoute = createRoute({
  getParentRoute: () => studentLayoutRoute,
  path: "/assignments",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StudentAssignments />
    </Suspense>
  ),
});

const teacherLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher",
  component: () => (
    <ProtectedRoute requiredRole="teacher">
      <Layout userRole="teacher" />
    </ProtectedRoute>
  ),
});

const teacherDashboardRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/dashboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TeacherDashboard />
    </Suspense>
  ),
});

const teacherQrRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/qr",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TeacherQr />
    </Suspense>
  ),
});

const teacherAssignmentsRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/assignments",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TeacherAssignments />
    </Suspense>
  ),
});

const teacherAnalyticsRoute = createRoute({
  getParentRoute: () => teacherLayoutRoute,
  path: "/analytics",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TeacherAnalytics />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  studentLayoutRoute.addChildren([
    studentDashboardRoute,
    studentAttendanceRoute,
    studentAssignmentsRoute,
  ]),
  teacherLayoutRoute.addChildren([
    teacherDashboardRoute,
    teacherQrRoute,
    teacherAssignmentsRoute,
    teacherAnalyticsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
