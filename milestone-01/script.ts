const button = document.getElementById("btn") as HTMLButtonElement;
const container = document.getElementById("skill") as HTMLDivElement;

button.addEventListener("click", () => {
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
})