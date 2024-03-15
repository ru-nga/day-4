// JavaScript code for handling student image click
document.querySelectorAll(".student img").forEach(student => {
  student.addEventListener("click", function() {
    const name = this.dataset.name;
    const roll = this.dataset.roll;
    const gender = this.dataset.gender;
    const grade = this.dataset.grade;

    const studentInfoHTML = `
    <div class="student-info-container">
    <h2>Student Profile</h2>
    <table>
        <tr>
            <th>Attribute</th>
            <th>Details</th>
        </tr>
        <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
        </tr>
        <tr>
            <td><strong>Roll No</strong></td>
            <td>${roll}</td>
        </tr>
        <tr>
            <td><strong>Gender</strong></td>
            <td>${gender}</td>
        </tr>
        <tr>
            <td><strong>Grade</strong></td>
            <td>${grade}</td>
        </tr>
        <tr>
            <td><strong>Address</strong></td>
            <td>Hinjewadi, Pune</td>
        </tr>
        <tr>
            <td><strong>Email</strong></td>
            <td>${name}@example.com</td>
        </tr>
    </table>
</div>
    `;

    document.getElementById("studentInfo").innerHTML = studentInfoHTML;
  });
});

  
document.getElementById('subjectDropdown').addEventListener('change', function() {
  var selectedSubject = this.value;
  var reportCards = document.querySelectorAll('.report-card');
  
  reportCards.forEach(function(card) {
    card.classList.remove('active');
  });

  document.getElementById(selectedSubject + 'ReportCard').classList.add('active');
});










// // JavaScript code for handling form submissions and page redirections

// // Function to handle login form submission
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     // Perform login authentication here
//     // Redirect to welcome page if authentication is successful
//     window.location.href = "welcome.html";
//   });
  
//   // Function to handle register form submission
//   document.getElementById("registerForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     // Perform registration logic here
//     // Redirect to login page after successful registration
//     window.location.href = "login.html";
//   });
  
  // Function to redirect to the monthly activity page
  function redirectToMonthlyActivity() {
    window.location.href = "monthly_activity.html";
  }



// JavaScript code for handling student image click
// document.querySelectorAll(".student img").forEach(student => {
//   student.addEventListener("click", function() {
//     const name = this.dataset.name;
//     const roll = this.dataset.roll;
//     const gender = this.dataset.gender;
//     const grade = this.dataset.grade;

//     const studentInfoHTML = `
//     <div class="student-info-container">
//     <h2>Student Profile</h2>
//     <table>
//         <tr>
//             <th>Attribute</th>
//             <th>Details</th>
//         </tr>
//         <tr>
//             <td><strong>Name</strong></td>
//             <td>${name}</td>
//         </tr>
//         <tr>
//             <td><strong>Roll No</strong></td>
//             <td>${roll}</td>
//         </tr>
//         <tr>
//             <td><strong>Gender</strong></td>
//             <td>${gender}</td>
//         </tr>
//         <tr>
//             <td><strong>Grade</strong></td>
//             <td>${grade}</td>
//         </tr>
//         <tr>
//             <td><strong>Address</strong></td>
//             <td>Hinjewadi, Pune</td>
//         </tr>
//         <tr>
//             <td><strong>Email</strong></td>
//             <td>${name}@example.com</td>
//         </tr>
//     </table>
// </div>
//     `;

//     document.getElementById("studentInfo").innerHTML = studentInfoHTML;
//   });
// });
  
  


document.getElementById('subjectDropdown').addEventListener('change', function() {
  var selectedSubject = this.value;
  var reportCards = document.querySelectorAll('.report-card');
  
  reportCards.forEach(function(card) {
    card.classList.remove('active');
  });

  document.getElementById(selectedSubject + 'ReportCard').classList.add('active');
});
