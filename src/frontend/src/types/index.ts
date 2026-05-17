import type {
  Assignment,
  AssignmentId,
  AssignmentInput,
  AttendanceRecord,
  AttendanceStats,
  AttendanceStatus,
  QrSession,
  SessionId,
  Timestamp,
  UserId,
  UserProfile,
  UserRole,
} from "@/backend";
import type { Principal } from "@icp-sdk/core/principal";

export type {
  AttendanceRecord,
  AttendanceStats,
  AttendanceStatus,
  Assignment,
  AssignmentId,
  AssignmentInput,
  Principal,
  QrSession,
  SessionId,
  Timestamp,
  UserId,
  UserProfile,
  UserRole,
};

export { UserRole as UserRoleEnum } from "@/backend";
export { AttendanceStatus as AttendanceStatusEnum } from "@/backend";

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface StatCard {
  label: string;
  value: string | number;
  change?: string;
  icon: string;
  color: "student" | "teacher" | "primary" | "destructive";
}

export type AppRole = "student" | "teacher";
