import Common "common";

module {
  public type UserRole = { #student; #teacher };

  public type UserProfile = {
    principal : Common.UserId;
    role : UserRole;
    name : Text;
    email : Text;
    createdAt : Common.Timestamp;
  };
};
