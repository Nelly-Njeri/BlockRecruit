// job-posted.js

function retrievePostedJobs() {
    const jobData = JSON.parse(localStorage.getItem('jobData')) || [];
  
    const jobList = document.getElementById('jobList');
    jobData.forEach(job => {
      const listItem = document.createElement('li');
      listItem.textContent = `Title: ${job.jobTitle}, Description: ${job.jobDescription}, Skills: ${job.jobSkills}, CID: ${job.ipfsCID}`;
      jobList.appendChild(listItem);
    });
  }
  
  function displaySoftwareEngineeringJobForm() {
    // Clear existing jobs
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
  
    // Display the form for the Software Engineering Job
    const jobFormContainer = document.getElementById('jobFormContainer');
    jobFormContainer.style.display = 'block';
  
    // Set default values for the form
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contactNo').value = '';
  }
  
  // Handle job application form submission
  document.getElementById('jobApplicationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
  
    // You can handle the file upload logic here
  
    alert(`Application Submitted!\n\nFull Name: ${fullName}\nEmail: ${email}\nContact No: ${contactNo}`);
  
    // Optionally, you can clear the form after submission
    this.reset();
  });
  
  // Retrieve and display posted jobs initially
  retrievePostedJobs();
  