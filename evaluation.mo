import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Array "mo:base/Array";

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

    public func uploadQualifications(candidate: Candidate) : async () {
     // You can add code here to store the candidate's qualifications
     let candidate: Candidate = Candidate{
      name = name;
      email = email;
      skills = skills;
      experienceYears = experienceYears;
      certifications = certifications;
      };
    };

    public func evaluateQualifications(candidate: Candidate) : async Bool {
        // Define the predefined tech job conditions

    
        let hasRequiredSkills = candidate.skills == requiredSkills;
        let hasRequiredExperience = candidate.experienceYears >= requiredExperienceYears;
        let hasRequiredCertifications = candidate.certifications == requiredCertifications;
        return hasRequiredSkills and hasRequiredExperience and hasRequiredCertifications;

    };
    //public query func queryqualifiedcandidates() : async Candidate { 
        //let candidate = Candidate {}
        //return candidate;
    //
    
};