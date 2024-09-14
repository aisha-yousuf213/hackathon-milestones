var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
var linkContainer = document.getElementById("link-container");
var shareableLink = document.getElementById("shareable-link");
var copyButton = document.getElementById("copy-button");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var resumeData = {
        username: username,
        name: name,
        email: email,
        phone: phone,
        education: education,
        skills: skills,
        experience: experience
    };
    localStorage.setItem("username", JSON.stringify(resumeData));
    var resumeHtml = "\n        <h1> Editable Resume</h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p <span contenteditable=\"true\"> ").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p<span contenteditable=\"true\"> ").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p<span contenteditable=\"true\">  ").concat(experience, "</p>\n\n    ");
    resumeDisplay.innerHTML = resumeHtml;
    var urlString = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    linkContainer.style.display = "block";
    shareableLink.href = urlString;
    shareableLink.textContent = urlString;
});
copyButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var param = new URLSearchParams(window.location.search);
    var username = param.get("username");
    if (username) {
        var savedData = localStorage.getItem("username");
        if (savedData) {
            var parsedData = JSON.parse(savedData);
            document.getElementById("username").value = parsedData.username;
            document.getElementById("name").value = parsedData.name;
            document.getElementById("email").value = parsedData.email;
            document.getElementById("phone").value = parsedData.phone;
            document.getElementById("education").value = parsedData.education;
            document.getElementById("skills").value = parsedData.skills;
            document.getElementById("experience").value = parsedData.experience;
        }
    }
});
