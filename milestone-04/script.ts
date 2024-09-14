const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;  
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone =( document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;

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
    if(resumeDisplay){
        
    
        resumeDisplay.innerHTML = resumeHtml;


    }else{
        console.error("resume display is missing");
    }


})