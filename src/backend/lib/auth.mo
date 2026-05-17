import Map "mo:core/Map";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import AuthTypes "../types/auth";

module {
  public func getProfile(
    profiles : Map.Map<Common.UserId, AuthTypes.UserProfile>,
    userId : Common.UserId,
  ) : ?AuthTypes.UserProfile {
    profiles.get(userId);
  };

  public func saveProfile(
    profiles : Map.Map<Common.UserId, AuthTypes.UserProfile>,
    userId : Common.UserId,
    profile : AuthTypes.UserProfile,
  ) : () {
    profiles.add(userId, profile);
  };

  public func listAllProfiles(
    profiles : Map.Map<Common.UserId, AuthTypes.UserProfile>,
  ) : [AuthTypes.UserProfile] {
    profiles.values().toArray();
  };
};
