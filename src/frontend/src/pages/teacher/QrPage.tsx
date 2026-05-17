import {
  useActiveQrSession,
  useCreateQrSession,
  useSessionAttendance,
} from "@/hooks/useQueries";
import { BookOpen, Clock, QrCode, RefreshCw, Users } from "lucide-react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

export default function TeacherQrPage() {
  const { data: session, isLoading } = useActiveQrSession();
  const { data: sessionAttendees = [] } = useSessionAttendance(
    session?.sessionId ?? null,
  );
  const createSession = useCreateQrSession();
  const [courseName, setCourseName] = useState("");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!session) return;
    setCountdown(10);
    const interval = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 10 : c - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [session]);

  async function handleCreate() {
    if (!courseName.trim()) {
      toast.error("Please enter a course name.");
      return;
    }
    try {
      await createSession.mutateAsync(courseName.trim());
      toast.success("QR session created!");
      setCourseName("");
    } catch {
      toast.error("Failed to create QR session.");
    }
  }

  const qrValue = session
    ? JSON.stringify({ sessionId: session.sessionId, token: session.token })
    : "";

  const expiresAt = session
    ? new Date(Number(session.expiresAt) / 1_000_000)
    : null;

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold font-display">QR Attendance</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Generate a rotating QR code for attendance
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" /> New Session
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            data-ocid="qr.course_name_input"
            placeholder="Course name (e.g. Mathematics 101)"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            className="flex-1 rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            data-ocid="qr.create_session_button"
            onClick={handleCreate}
            disabled={createSession.isPending}
            className="flex items-center gap-2 rounded-xl gradient-teacher text-white font-semibold px-5 py-2.5 text-sm transition-smooth hover:opacity-90 disabled:opacity-60"
          >
            {createSession.isPending ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              <QrCode className="h-4 w-4" />
            )}
            Create
          </button>
        </div>
      </div>

      {isLoading ? (
        <div
          data-ocid="qr.loading_state"
          className="glass-card p-10 text-center"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary mx-auto" />
        </div>
      ) : session ? (
        <div
          data-ocid="qr.session_card"
          className="glass-card p-6 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-2 self-start w-full">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-400">
              Active Session
            </span>
            <span className="text-muted-foreground text-sm">
              · {session.courseName}
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              <Users className="inline h-3 w-3 mr-1" />
              {sessionAttendees.length} present
            </span>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-4 bg-white shadow-xl">
              <QRCode
                value={qrValue}
                size={200}
                bgColor="#ffffff"
                fgColor="#0f172a"
                level="M"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-13 w-13 glass rounded-full flex flex-col items-center justify-center shadow-lg border border-border/40 px-2 py-1.5 min-w-[3.25rem]">
              <span className="text-xs text-muted-foreground leading-none">
                Next
              </span>
              <span className="text-base font-bold font-display leading-none">
                {countdown}s
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Refreshes every 10s
            </span>
            {expiresAt && (
              <span className="flex items-center gap-1">
                <RefreshCw className="h-3 w-3" />
                Expires: {expiresAt.toLocaleTimeString()}
              </span>
            )}
          </div>

          <div className="w-full rounded-xl bg-muted/40 p-3 space-y-1">
            <p className="text-xs text-muted-foreground">Session ID</p>
            <p className="font-mono text-xs break-all">{session.sessionId}</p>
          </div>
        </div>
      ) : (
        <div data-ocid="qr.empty_state" className="glass-card p-10 text-center">
          <QrCode className="h-14 w-14 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="font-semibold mb-1">No Active Session</h3>
          <p className="text-sm text-muted-foreground">
            Create a session above to generate the QR code.
          </p>
        </div>
      )}
    </div>
  );
}
