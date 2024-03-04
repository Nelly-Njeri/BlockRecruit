import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {
  let requiredSkills: [Text] = ["Web development", "Programming", "Software Development"];
  let requiredExperienceYears: Nat = 3;  
  let requiredCertifications:[Text] = ["Bachelors Degree","Python", "Javascript", "C++"];

  type Candidate = {
    name: Text;
    email: Text;
    skills: [Text];
    experienceYears: Nat;
    certifications: [Text];
  };  

  var candidates: [Candidate] = [];
  public func uploadQualifications(candidate: Candidate) : async () {
    candidates := Array.append<Candidate>(candidates, [candidate]);
  };
  public func evaluateQualifications(candidate: Candidate) : async Bool {
    let hasRequiredSkills = candidate.skills == requiredSkills;
    let hasRequiredExperience = candidate.experienceYears >= requiredExperienceYears;
    let hasRequiredCertifications = candidate.certifications == requiredCertifications;
    return hasRequiredSkills and hasRequiredExperience and hasRequiredCertifications;
  };
  public query func getCandidates() : async [Candidate] {
    return candidates;
  };

};