import type { backendInterface } from "@/backend";
import type {
  AssignmentId,
  AssignmentInput,
  QrSession,
  SessionId,
  UserProfile,
} from "@/types";
import type { Principal } from "@icp-sdk/core/principal";

export type BackendActor = backendInterface;

export async function getUserProfile(
  actor: BackendActor,
): Promise<UserProfile | null> {
  return actor.getCallerUserProfile();
}

export async function saveUserProfile(
  actor: BackendActor,
  profile: UserProfile,
): Promise<void> {
  return actor.saveCallerUserProfile(profile);
}

export async function listAllProfiles(
  actor: BackendActor,
): Promise<UserProfile[]> {
  return actor.listAllProfiles();
}

export async function createQrSession(
  actor: BackendActor,
  courseName: string,
): Promise<QrSession> {
  return actor.createQrSession(courseName);
}

export async function getActiveQrSession(
  actor: BackendActor,
): Promise<QrSession | null> {
  return actor.getActiveQrSession();
}

export async function submitAttendance(
  actor: BackendActor,
  sessionId: SessionId,
  token: string,
): Promise<boolean> {
  return actor.submitAttendance(sessionId, token);
}

export async function getMyAttendance(actor: BackendActor) {
  return actor.getMyAttendance();
}

export async function getMyAttendanceStats(actor: BackendActor) {
  return actor.getMyAttendanceStats();
}

export async function getSessionAttendance(
  actor: BackendActor,
  sessionId: SessionId,
) {
  return actor.getSessionAttendance(sessionId);
}

export async function getAllStudentAttendanceStats(actor: BackendActor) {
  return actor.getAllStudentAttendanceStats();
}

export async function createAssignment(
  actor: BackendActor,
  input: AssignmentInput,
) {
  return actor.createAssignment(input);
}

export async function listAssignments(actor: BackendActor) {
  return actor.listAssignments();
}

export async function getAssignment(actor: BackendActor, id: AssignmentId) {
  return actor.getAssignment(id);
}

export async function deleteAssignment(
  actor: BackendActor,
  id: AssignmentId,
): Promise<boolean> {
  return actor.deleteAssignment(id);
}

export async function getUserProfileByPrincipal(
  actor: BackendActor,
  principal: Principal,
): Promise<UserProfile | null> {
  return actor.getUserProfile(principal);
}
