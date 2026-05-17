import Map "mo:core/Map";
import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import Common "types/common";
import AuthTypes "types/auth";
import AttendanceTypes "types/attendance";
import AssignmentTypes "types/assignment";
import AuthApi "mixins/auth-api";
import AttendanceApi "mixins/attendance-api";
import AssignmentApi "mixins/assignment-api";

actor {
  // Authorization extension state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Object storage extension
  include MixinObjectStorage();

  // User profiles
  let userProfiles = Map.empty<Common.UserId, AuthTypes.UserProfile>();

  // QR sessions (keyed by sessionId)
  let qrSessions = Map.empty<Common.SessionId, AttendanceTypes.QrSession>();

  // Attendance records (append-only log)
  let attendanceRecords = List.empty<AttendanceTypes.AttendanceRecord>();

  // Assignments
  let assignments = Map.empty<Common.AssignmentId, AssignmentTypes.Assignment>();
  let assignmentState = { var nextAssignmentId : Nat = 0 };

  // Domain mixins
  include AuthApi(accessControlState, userProfiles);
  include AttendanceApi(accessControlState, userProfiles, qrSessions, attendanceRecords);
  include AssignmentApi(accessControlState, userProfiles, assignments, assignmentState);
};
