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
    var resumeHtml = "\n        <h1> Editable Resume</h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p <span contenteditable=\"true\"> ").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p<span contenteditable=\"true\"> ").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p<span contenteditable=\"true\">  ").concat(experience, "</p>\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("resume display is missing");
    }
});
