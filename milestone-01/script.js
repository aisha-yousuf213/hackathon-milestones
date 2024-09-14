var button = document.getElementById("btn");
var container = document.getElementById("skill");
button.addEventListener("click", function () {
    if (container.style.display === "none") {
        container.style.display = "block";
    }
    else {
        container.style.display = "none";
    }
});
