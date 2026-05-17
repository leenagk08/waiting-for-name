import { useUserProfile } from "@/hooks/useQueries";
import type { AppRole } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useRouter } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import RoleModal from "./RoleModal";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: AppRole;
}

export default function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const { loginStatus, isAuthenticated } = useInternetIdentity();
  const router = useRouter();
  const { data: profile, isLoading } = useUserProfile();
  const [showRoleModal, setShowRoleModal] = useState(false);

  useEffect(() => {
    if (loginStatus === "idle" && !isAuthenticated) {
      router.navigate({ to: "/login" });
    }
  }, [loginStatus, isAuthenticated, router]);

  useEffect(() => {
    if (!isLoading && isAuthenticated && profile !== undefined) {
      if (profile === null) {
        setShowRoleModal(true);
      } else if (profile.role !== requiredRole) {
        const target =
          profile.role === "teacher"
            ? "/teacher/dashboard"
            : "/student/dashboard";
        router.navigate({ to: target });
      } else {
        setShowRoleModal(false);
      }
    }
  }, [isLoading, isAuthenticated, profile, requiredRole, router]);

  if (loginStatus === "logging-in" || (isAuthenticated && isLoading)) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
          <p className="text-sm text-muted-foreground">Loading your profile…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  if (showRoleModal) {
    return <RoleModal onComplete={() => setShowRoleModal(false)} />;
  }

  if (profile && profile.role !== requiredRole) return null;

  return <>{children}</>;
}
