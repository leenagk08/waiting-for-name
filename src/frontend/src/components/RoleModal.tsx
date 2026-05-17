import { UserRole } from "@/backend";
import { useSaveUserProfile } from "@/hooks/useQueries";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useRouter } from "@tanstack/react-router";
import { BookOpen, GraduationCap } from "lucide-react";
import { useState } from "react";

interface RoleModalProps {
  onComplete: () => void;
}

export default function RoleModal({ onComplete }: RoleModalProps) {
  const { identity } = useInternetIdentity();
  const router = useRouter();
  const saveProfile = useSaveUserProfile();
  const [selecting, setSelecting] = useState<"student" | "teacher" | null>(
    null,
  );

  const principal = identity?.getPrincipal();
  const principalText = principal?.toText() ?? "";
  const shortName = principalText.slice(0, 8);

  async function handleSelect(role: "student" | "teacher") {
    if (!principal) return;
    setSelecting(role);
    const now = BigInt(Date.now()) * 1_000_000n;
    await saveProfile.mutateAsync({
      principal,
      name: shortName,
      email: "",
      role: role === "student" ? UserRole.student : UserRole.teacher,
      createdAt: now,
    });
    onComplete();
    const target =
      role === "teacher" ? "/teacher/dashboard" : "/student/dashboard";
    router.navigate({ to: target });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="w-full max-w-xl px-4 animate-slide-up">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            <span className="text-gradient-primary">Welcome to Attendance</span>
          </h1>
          <p className="text-muted-foreground">
            Choose your role to get started
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <button
            type="button"
            data-ocid="role_modal.student_button"
            onClick={() => handleSelect("student")}
            disabled={saveProfile.isPending}
            className="group glass-card p-8 flex flex-col items-center gap-5 cursor-pointer transition-smooth hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="h-20 w-20 rounded-2xl gradient-student flex items-center justify-center glow-student">
              {selecting === "student" ? (
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white" />
              ) : (
                <GraduationCap className="h-10 w-10 text-white" />
              )}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gradient-student">
                Student
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Track attendance &amp; view assignments
              </p>
            </div>
          </button>

          <button
            type="button"
            data-ocid="role_modal.teacher_button"
            onClick={() => handleSelect("teacher")}
            disabled={saveProfile.isPending}
            className="group glass-card p-8 flex flex-col items-center gap-5 cursor-pointer transition-smooth hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="h-20 w-20 rounded-2xl gradient-teacher flex items-center justify-center glow-teacher">
              {selecting === "teacher" ? (
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white" />
              ) : (
                <BookOpen className="h-10 w-10 text-white" />
              )}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gradient-teacher">
                Teacher
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage QR sessions &amp; assignments
              </p>
            </div>
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Your role cannot be changed after selection.
        </p>
      </div>
    </div>
  );
}
