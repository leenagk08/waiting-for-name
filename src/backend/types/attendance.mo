import Common "common";

module {
  public type AttendanceStatus = { #present; #absent };

  public type AttendanceRecord = {
    studentId : Common.UserId;
    sessionId : Common.SessionId;
    timestamp : Common.Timestamp;
    qrToken : Text;
    status : AttendanceStatus;
  };

  public type QrSession = {
    sessionId : Common.SessionId;
    token : Text;
    createdAt : Common.Timestamp;
    expiresAt : Common.Timestamp;
    teacherId : Common.UserId;
    courseName : Text;
  };

  public type AttendanceStats = {
    studentId : Common.UserId;
    totalPeriods : Nat;
    attendedPeriods : Nat;
    percentage : Float;
  };
};
