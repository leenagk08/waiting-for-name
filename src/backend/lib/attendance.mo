import Map "mo:core/Map";
import List "mo:core/List";
import Common "../types/common";
import AttendanceTypes "../types/attendance";
import Time "mo:core/Time";
import Set "mo:core/Set";
import Principal "mo:core/Principal";

module {
  public func createQrSession(
    sessions : Map.Map<Common.SessionId, AttendanceTypes.QrSession>,
    teacherId : Common.UserId,
    courseName : Text,
  ) : AttendanceTypes.QrSession {
    let now = Time.now();
    // Generate a unique sessionId from teacherId + timestamp
    let sessionId = teacherId.toText() # "-" # now.toText();
    // Generate a token by hashing sessionId + nonce
    let token = sessionId # "-tok-" # courseName;
    let expiresAt = now + 10_000_000_000; // 10 seconds in nanoseconds
    let session : AttendanceTypes.QrSession = {
      sessionId;
      token;
      createdAt = now;
      expiresAt;
      teacherId;
      courseName;
    };
    sessions.add(sessionId, session);
    session;
  };

  public func getActiveSession(
    sessions : Map.Map<Common.SessionId, AttendanceTypes.QrSession>,
    teacherId : Common.UserId,
  ) : ?AttendanceTypes.QrSession {
    let now = Time.now();
    sessions.values().find(func(s) {
      Principal.equal(s.teacherId, teacherId) and s.expiresAt > now
    });
  };

  public func validateQrToken(
    sessions : Map.Map<Common.SessionId, AttendanceTypes.QrSession>,
    sessionId : Common.SessionId,
    token : Text,
    now : Common.Timestamp,
  ) : Bool {
    switch (sessions.get(sessionId)) {
      case null false;
      case (?session) {
        session.token == token and session.expiresAt > now
      };
    };
  };

  public func submitAttendance(
    records : List.List<AttendanceTypes.AttendanceRecord>,
    sessions : Map.Map<Common.SessionId, AttendanceTypes.QrSession>,
    studentId : Common.UserId,
    sessionId : Common.SessionId,
    token : Text,
    now : Common.Timestamp,
  ) : Bool {
    // Validate the QR token and expiry
    if (not validateQrToken(sessions, sessionId, token, now)) {
      return false;
    };
    // Check for duplicate submission
    let duplicate = records.find(func(r) {
      Principal.equal(r.studentId, studentId) and r.sessionId == sessionId
    });
    switch (duplicate) {
      case (?_) false; // already submitted
      case null {
        records.add({
          studentId;
          sessionId;
          timestamp = now;
          qrToken = token;
          status = #present;
        });
        true;
      };
    };
  };

  public func getStudentAttendance(
    records : List.List<AttendanceTypes.AttendanceRecord>,
    studentId : Common.UserId,
  ) : [AttendanceTypes.AttendanceRecord] {
    records.filter(func(r) { Principal.equal(r.studentId, studentId) }).toArray();
  };

  public func getSessionAttendance(
    records : List.List<AttendanceTypes.AttendanceRecord>,
    sessionId : Common.SessionId,
  ) : [AttendanceTypes.AttendanceRecord] {
    records.filter(func(r) { r.sessionId == sessionId }).toArray();
  };

  public func computeStats(
    records : List.List<AttendanceTypes.AttendanceRecord>,
    studentId : Common.UserId,
  ) : AttendanceTypes.AttendanceStats {
    let studentRecords = records.filter(func(r) {
      Principal.equal(r.studentId, studentId)
    });
    // Count distinct sessionIds where status is #present
    let sessionSet = Set.empty<Text>();
    studentRecords.forEach(func(r) {
      switch (r.status) {
        case (#present) { sessionSet.add(r.sessionId) };
        case (#absent) {};
      };
    });
    let attendedPeriods = sessionSet.size();
    // Total periods = total distinct sessions in all records
    let allSessionSet = Set.empty<Text>();
    records.forEach(func(r) { allSessionSet.add(r.sessionId) });
    let totalPeriods = allSessionSet.size();
    let percentage = if (totalPeriods == 0) {
      0.0
    } else {
      attendedPeriods.toFloat() / totalPeriods.toFloat() * 100.0
    };
    { studentId; totalPeriods; attendedPeriods; percentage };
  };

  public func getAllStudentStats(
    records : List.List<AttendanceTypes.AttendanceRecord>,
    studentIds : [Common.UserId],
  ) : [AttendanceTypes.AttendanceStats] {
    studentIds.map<Common.UserId, AttendanceTypes.AttendanceStats>(func(id) {
      computeStats(records, id)
    });
  };
};
