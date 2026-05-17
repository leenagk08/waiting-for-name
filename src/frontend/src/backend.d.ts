import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Timestamp = bigint;
export type SessionId = string;
export interface AttendanceStats {
    studentId: UserId;
    totalPeriods: bigint;
    attendedPeriods: bigint;
    percentage: number;
}
export interface AssignmentInput {
    title: string;
    dueDate: Timestamp;
    description: string;
    fileKey: ExternalBlob;
}
export type UserId = Principal;
export interface QrSession {
    token: string;
    expiresAt: Timestamp;
    createdAt: Timestamp;
    teacherId: UserId;
    sessionId: SessionId;
    courseName: string;
}
export type AssignmentId = bigint;
export interface Assignment {
    id: AssignmentId;
    title: string;
    dueDate: Timestamp;
    description: string;
    teacherId: UserId;
    uploadedAt: Timestamp;
    fileKey: ExternalBlob;
}
export interface AttendanceRecord {
    status: AttendanceStatus;
    studentId: UserId;
    qrToken: string;
    timestamp: Timestamp;
    sessionId: SessionId;
}
export interface UserProfile {
    principal: UserId;
    name: string;
    createdAt: Timestamp;
    role: UserRole;
    email: string;
}
export enum AttendanceStatus {
    present = "present",
    absent = "absent"
}
export enum UserRole {
    teacher = "teacher",
    student = "student"
}
export enum UserRole__1 {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole__1): Promise<void>;
    createAssignment(input: AssignmentInput): Promise<Assignment>;
    createQrSession(courseName: string): Promise<QrSession>;
    deleteAssignment(id: AssignmentId): Promise<boolean>;
    getActiveQrSession(): Promise<QrSession | null>;
    getAllStudentAttendanceStats(): Promise<Array<AttendanceStats>>;
    getAssignment(id: AssignmentId): Promise<Assignment | null>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole__1>;
    getMyAttendance(): Promise<Array<AttendanceRecord>>;
    getMyAttendanceStats(): Promise<AttendanceStats>;
    getSessionAttendance(sessionId: SessionId): Promise<Array<AttendanceRecord>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listAllProfiles(): Promise<Array<UserProfile>>;
    listAssignments(): Promise<Array<Assignment>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAttendance(sessionId: SessionId, token: string): Promise<boolean>;
}
