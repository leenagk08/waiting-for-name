import Map "mo:core/Map";
import Common "../types/common";
import AssignmentTypes "../types/assignment";
import Principal "mo:core/Principal";

module {
  public func createAssignment(
    assignments : Map.Map<Common.AssignmentId, AssignmentTypes.Assignment>,
    state : { var nextAssignmentId : Nat },
    teacherId : Common.UserId,
    input : AssignmentTypes.AssignmentInput,
    now : Common.Timestamp,
  ) : AssignmentTypes.Assignment {
    let id = state.nextAssignmentId;
    state.nextAssignmentId += 1;
    let assignment : AssignmentTypes.Assignment = {
      id;
      teacherId;
      title = input.title;
      description = input.description;
      fileKey = input.fileKey;
      uploadedAt = now;
      dueDate = input.dueDate;
    };
    assignments.add(id, assignment);
    assignment;
  };

  public func listAssignments(
    assignments : Map.Map<Common.AssignmentId, AssignmentTypes.Assignment>,
  ) : [AssignmentTypes.Assignment] {
    assignments.values().toArray();
  };

  public func getAssignment(
    assignments : Map.Map<Common.AssignmentId, AssignmentTypes.Assignment>,
    id : Common.AssignmentId,
  ) : ?AssignmentTypes.Assignment {
    assignments.get(id);
  };

  public func deleteAssignment(
    assignments : Map.Map<Common.AssignmentId, AssignmentTypes.Assignment>,
    id : Common.AssignmentId,
    callerId : Common.UserId,
  ) : Bool {
    switch (assignments.get(id)) {
      case null false;
      case (?assignment) {
        if (not Principal.equal(assignment.teacherId, callerId)) {
          false;
        } else {
          assignments.remove(id);
          true;
        };
      };
    };
  };
};
