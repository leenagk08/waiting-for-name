import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import Common "../types/common";
import AuthTypes "../types/auth";
import AssignmentTypes "../types/assignment";
import AssignmentLib "../lib/assignment";

mixin (
  accessControlState : AccessControl.AccessControlState,
  userProfiles : Map.Map<Common.UserId, AuthTypes.UserProfile>,
  assignments : Map.Map<Common.AssignmentId, AssignmentTypes.Assignment>,
  state : { var nextAssignmentId : Nat },
) {
  // Teacher: upload assignment metadata (fileKey is an ExternalBlob from object-storage)
  public shared ({ caller }) func createAssignment(
    input : AssignmentTypes.AssignmentInput,
  ) : async AssignmentTypes.Assignment {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #teacher) {
      Runtime.trap("Only teachers can create assignments");
    };
    let now = Time.now();
    AssignmentLib.createAssignment(assignments, state, caller, input, now);
  };

  // All authenticated users: list all assignments
  public query ({ caller }) func listAssignments() : async [AssignmentTypes.Assignment] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    AssignmentLib.listAssignments(assignments);
  };

  // All authenticated users: get a single assignment by id
  public query ({ caller }) func getAssignment(id : Common.AssignmentId) : async ?AssignmentTypes.Assignment {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    AssignmentLib.getAssignment(assignments, id);
  };

  // Teacher: delete own assignment
  public shared ({ caller }) func deleteAssignment(id : Common.AssignmentId) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized");
    };
    let profile = switch (userProfiles.get(caller)) {
      case (?p) p;
      case null Runtime.trap("Profile not found");
    };
    if (profile.role != #teacher) {
      Runtime.trap("Only teachers can delete assignments");
    };
    AssignmentLib.deleteAssignment(assignments, id, caller);
  };
};
