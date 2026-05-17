import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import Common "../types/common";
import AuthTypes "../types/auth";
import AttendanceTypes "../types/attendance";
import AttendanceLib "../lib/attendance";

mixin (
  accessControlState : AccessControl.AccessControlState,
  userProfiles : Map.Map<Common.UserId, AuthTypes.UserProfile>,
  qrSessions : Map.Map<Common.SessionId, AttendanceTypes.QrSession>,
  attendanceRecords : List.List<AttendanceTypes.AttendanceRecord>,
) {
  // Teacher: create a new rotating QR session for a course
  public shared ({ caller }) func createQrSession(courseName : Text) : async AttendanceTypes.QrSession {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #teacher) {
      Runtime.trap("Only teachers can create QR sessions");
    };
    AttendanceLib.createQrSession(qrSessions, caller, courseName);
  };

  // Teacher: get their current active QR session
  public query ({ caller }) func getActiveQrSession() : async ?AttendanceTypes.QrSession {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    AttendanceLib.getActiveSession(qrSessions, caller);
  };

  // Student: submit attendance using QR token
  public shared ({ caller }) func submitAttendance(
    sessionId : Common.SessionId,
    token : Text,
  ) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #student) {
      Runtime.trap("Only students can submit attendance");
    };
    let now = Time.now();
    AttendanceLib.submitAttendance(attendanceRecords, qrSessions, caller, sessionId, token, now);
  };

  // Student: get own attendance records
  public query ({ caller }) func getMyAttendance() : async [AttendanceTypes.AttendanceRecord] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #student) {
      Runtime.trap("Only students can view their attendance");
    };
    AttendanceLib.getStudentAttendance(attendanceRecords, caller);
  };

  // Student: get own attendance stats
  public query ({ caller }) func getMyAttendanceStats() : async AttendanceTypes.AttendanceStats {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #student) {
      Runtime.trap("Only students can view attendance stats");
    };
    AttendanceLib.computeStats(attendanceRecords, caller);
  };

  // Teacher: get attendance for a specific session
  public query ({ caller }) func getSessionAttendance(sessionId : Common.SessionId) : async [AttendanceTypes.AttendanceRecord] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #teacher) {
      Runtime.trap("Only teachers can view session attendance");
    };
    AttendanceLib.getSessionAttendance(attendanceRecords, sessionId);
  };

  // Teacher: get aggregate attendance stats for all students
  public query ({ caller }) func getAllStudentAttendanceStats() : async [AttendanceTypes.AttendanceStats] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #teacher) {
      Runtime.trap("Only teachers can view all student stats");
    };
    // Collect unique student IDs from attendance records
    let studentIds = attendanceRecords
      .map(func(r) { r.studentId })
      .toArray();
    AttendanceLib.getAllStudentStats(attendanceRecords, studentIds);
  };
};
