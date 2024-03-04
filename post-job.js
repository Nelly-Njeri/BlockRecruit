// job-post.js

function postJob() {
    const jobTitle = document.getElementById('jobTitle').value;
    const jobDescription = document.getElementById('jobDescription').value;
  
    const job = {
      jobTitle,
      jobDescription,
    };
  
    storeJobData(job);
  
    document.getElementById('jobPostForm').reset();
  }
  
  function storeJobData(job) {
    const existingJobData = JSON.parse(localStorage.getItem('jobData')) || [];
    existingJobData.push(job);
    localStorage.setItem('jobData', JSON.stringify(existingJobData));
  }
  