import { createActor } from "@/backend";
import * as client from "@/lib/backend-client";
import type {
  AssignmentId,
  AssignmentInput,
  QrSession,
  SessionId,
  UserProfile,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ─── Profile ──────────────────────────────────────────────────────────────────

export function useUserProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return client.getUserProfile(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSaveUserProfile() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error("Not connected");
      return client.saveUserProfile(actor, profile);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["userProfile"] }),
  });
}

export function useListAllProfiles() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile[]>({
    queryKey: ["allProfiles"],
    queryFn: async () => {
      if (!actor) return [];
      return client.listAllProfiles(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── QR Session ───────────────────────────────────────────────────────────────

export function useActiveQrSession() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<QrSession | null>({
    queryKey: ["activeQrSession"],
    queryFn: async () => {
      if (!actor) return null;
      return client.getActiveQrSession(actor);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 10_000,
  });
}

export function useCreateQrSession() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (courseName: string) => {
      if (!actor) throw new Error("Not connected");
      return client.createQrSession(actor, courseName);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["activeQrSession"] }),
  });
}

// ─── Attendance ───────────────────────────────────────────────────────────────

export function useMyAttendance() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["myAttendance"],
    queryFn: async () => {
      if (!actor) return [];
      return client.getMyAttendance(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyAttendanceStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["myAttendanceStats"],
    queryFn: async () => {
      if (!actor) return null;
      return client.getMyAttendanceStats(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitAttendance() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      sessionId,
      token,
    }: {
      sessionId: SessionId;
      token: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return client.submitAttendance(actor, sessionId, token);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["myAttendance"] });
      qc.invalidateQueries({ queryKey: ["myAttendanceStats"] });
    },
  });
}

export function useSessionAttendance(sessionId: SessionId | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["sessionAttendance", sessionId],
    queryFn: async () => {
      if (!actor || !sessionId) return [];
      return client.getSessionAttendance(actor, sessionId);
    },
    enabled: !!actor && !isFetching && !!sessionId,
  });
}

export function useAllStudentAttendanceStats(refetchInterval?: number) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["allStudentAttendanceStats"],
    queryFn: async () => {
      if (!actor) return [];
      return client.getAllStudentAttendanceStats(actor);
    },
    enabled: !!actor && !isFetching,
    refetchInterval,
  });
}

// ─── Assignments ──────────────────────────────────────────────────────────────

export function useAssignments() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      if (!actor) return [];
      return client.listAssignments(actor);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateAssignment() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: AssignmentInput) => {
      if (!actor) throw new Error("Not connected");
      return client.createAssignment(actor, input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["assignments"] }),
  });
}

export function useDeleteAssignment() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: AssignmentId) => {
      if (!actor) throw new Error("Not connected");
      return client.deleteAssignment(actor, id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["assignments"] }),
  });
}
