import Common "common";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type Assignment = {
    id : Common.AssignmentId;
    teacherId : Common.UserId;
    title : Text;
    description : Text;
    fileKey : Storage.ExternalBlob;
    uploadedAt : Common.Timestamp;
    dueDate : Common.Timestamp;
  };

  public type AssignmentInput = {
    title : Text;
    description : Text;
    fileKey : Storage.ExternalBlob;
    dueDate : Common.Timestamp;
  };
};
