var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var resumeHtml = "\n        <h1> Resume</h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong>").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p > ").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p> ").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p>  ").concat(experience, "</p>\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("resume display is missing");
    }
});
