// ic-ipfs-library.js

const icIpfsLibrary = {
    storeData: async function (data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const cid = "Qm..."; // Replace with the actual CID
          resolve(cid);
        }, 1000);
      });
    },
  
    retrieveData: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const postedJobs = [
            {
              jobTitle: "Software Engineer",
              jobDescription: "Exciting software engineering position",
              jobSkills: "JavaScript, HTML, CSS",
              ipfsCID: "Qm...",
            },
            // Add more jobs as needed
          ];
          resolve(postedJobs);
        }, 1000);
      });
    },
  };
  
  export default icIpfsLibrary;
  