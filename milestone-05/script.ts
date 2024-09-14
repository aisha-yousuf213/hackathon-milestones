const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
const linkContainer = document.getElementById("link-container") as HTMLDivElement;
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
const copyButton = document.getElementById("copy-button") as HTMLButtonElement;

resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;  
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone =( document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    
    const resumeData = {
        username,
        name,
        email,
        phone,
        education,
        skills,
        experience
    };

    localStorage.setItem("username", JSON.stringify(resumeData));
    

    const resumeHtml = `
        <h1> Editable Resume</h1>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>

        <h3>Education</h3>
        <p <span contenteditable="true"> ${education}</p>

        <h3>Skills</h3>
        <p<span contenteditable="true"> ${skills}</p>

        <h3>Experience</h3>
        <p<span contenteditable="true">  ${experience}</p>

    `;

     resumeDisplay.innerHTML = resumeHtml;

     const urlString = 
     `${window.location.origin}?username=${encodeURIComponent(username)}`

     linkContainer.style.display = "block";
     shareableLink.href = urlString;
     shareableLink.textContent = urlString;})


copyButton.addEventListener("click", () => {
    window.print();
});


window.addEventListener('DOMContentLoaded', () => {

    const param = new URLSearchParams(window.location.search);
    const username = param.get("username");


    if (username) {
        const savedData = localStorage.getItem("username");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            (document.getElementById("username") as HTMLInputElement).value = parsedData.username;
            (document.getElementById("name") as HTMLInputElement).value = parsedData.name;
            (document.getElementById("email") as HTMLInputElement).value = parsedData.email;
            (document.getElementById("phone") as HTMLInputElement).value = parsedData.phone;
            (document.getElementById("education") as HTMLInputElement).value = parsedData.education;
            (document.getElementById("skills") as HTMLInputElement).value = parsedData.skills;
            (document.getElementById("experience") as HTMLInputElement).value = parsedData.experience;
        }   
            
   


    }

})